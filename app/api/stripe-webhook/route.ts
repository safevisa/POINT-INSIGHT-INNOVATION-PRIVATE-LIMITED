import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import { headers } from "next/headers"

// Check if we're in build time
const isBuildTime = !process.env.STRIPE_SECRET_KEY

export async function POST(request: NextRequest) {
  // Skip processing during build time
  if (isBuildTime) {
    return NextResponse.json({ error: "Service unavailable during build" }, { status: 503 })
  }

  const body = await request.text()
  const signature = headers().get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        const orderId = paymentIntent.metadata.orderId
        const userId = paymentIntent.metadata.userId

        if (orderId && userId) {
          // Update order status
          await prisma.order.update({
            where: { id: orderId },
            data: { status: 'completed' }
          })

          // Create payment record
          await prisma.payment.create({
            data: {
              userId: userId,
              orderId: orderId,
              amount: paymentIntent.amount / 100, // Convert from cents
              currency: paymentIntent.currency.toUpperCase(),
              status: 'succeeded',
              stripePaymentId: paymentIntent.id,
            }
          })
        }
        break

      case "payment_intent.payment_failed":
        const failedPaymentIntent = event.data.object
        const failedOrderId = failedPaymentIntent.metadata.orderId
        const failedUserId = failedPaymentIntent.metadata.userId

        if (failedOrderId && failedUserId) {
          // Update order status
          await prisma.order.update({
            where: { id: failedOrderId },
            data: { status: 'failed' }
          })

          // Create payment record
          await prisma.payment.create({
            data: {
              userId: failedUserId,
              orderId: failedOrderId,
              amount: failedPaymentIntent.amount / 100,
              currency: failedPaymentIntent.currency.toUpperCase(),
              status: 'failed',
              stripePaymentId: failedPaymentIntent.id,
            }
          })
        }
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook handler error:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }
}
