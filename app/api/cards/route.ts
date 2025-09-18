import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { cardSchema } from "@/lib/validations"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const cards = await prisma.card.findMany({
      where: { userId: session.user.id },
      select: {
        id: true,
        cardNumber: true,
        cardHolder: true,
        expiryMonth: true,
        expiryYear: true,
        isDefault: true,
        createdAt: true,
      }
    })

    // Mask card numbers for security
    const maskedCards = cards.map(card => ({
      ...card,
      cardNumber: `**** **** **** ${card.cardNumber.slice(-4)}`
    }))

    return NextResponse.json(maskedCards)
  } catch (error) {
    console.error("Cards fetch error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const data = cardSchema.parse(body)

    // If this is set as default, unset other default cards
    if (data.isDefault) {
      await prisma.card.updateMany({
        where: { userId: session.user.id },
        data: { isDefault: false }
      })
    }

    const card = await prisma.card.create({
      data: {
        userId: session.user.id,
        cardNumber: data.cardNumber, // In production, encrypt this
        cardHolder: data.cardHolder,
        expiryMonth: data.expiryMonth,
        expiryYear: data.expiryYear,
        cvv: data.cvv, // In production, encrypt this
        isDefault: data.isDefault || false,
      }
    })

    return NextResponse.json({ 
      message: "Card added successfully",
      cardId: card.id 
    })
  } catch (error) {
    console.error("Card creation error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
