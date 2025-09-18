'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import toast from 'react-hot-toast'
import { CreditCard, DollarSign, ShoppingCart } from 'lucide-react'
import Navbar from '@/components/Navbar'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentFormProps {
  amount: number
  onSuccess: () => void
}

function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const { t } = useTranslation()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'usd',
        }),
      })

      const { clientSecret } = await response.json()

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      })

      if (error) {
        toast.error(error.message || 'Payment failed')
      } else if (paymentIntent.status === 'succeeded') {
        toast.success('Payment successful!')
        onSuccess()
      }
    } catch (error) {
      toast.error('Payment failed')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="form-label">Card Details</label>
        <div className="mt-1 p-3 border border-gray-300 rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Total: ${amount.toFixed(2)}</span>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="btn-primary"
        >
          {isProcessing ? (
            <div className="loading-spinner"></div>
          ) : (
            `Pay $${amount.toFixed(2)}`
          )}
        </button>
      </div>
    </form>
  )
}

export default function PaymentsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const [amount, setAmount] = useState(0)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }
  }, [status, router])

  const handlePaymentSuccess = () => {
    setShowPaymentForm(false)
    setAmount(0)
    // Refresh or redirect as needed
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-64">
          <div className="loading-spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
          <p className="mt-2 text-gray-600">Manage your payments and billing</p>
        </div>

        {!showPaymentForm ? (
          <div className="space-y-6">
            {/* Payment Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <DollarSign className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Payment</h3>
                <p className="text-gray-600 mb-4">Make a one-time payment</p>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount || ''}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="form-input"
                    min="1"
                    step="0.01"
                  />
                  <button
                    onClick={() => setShowPaymentForm(true)}
                    disabled={!amount || amount <= 0}
                    className="btn-primary w-full"
                  >
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="card text-center">
                <CreditCard className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Cards</h3>
                <p className="text-gray-600 mb-4">Add or remove payment methods</p>
                <button
                  onClick={() => router.push('/cards')}
                  className="btn-secondary w-full"
                >
                  Manage Cards
                </button>
              </div>

              <div className="card text-center">
                <ShoppingCart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Order History</h3>
                <p className="text-gray-600 mb-4">View your payment history</p>
                <button
                  onClick={() => router.push('/orders')}
                  className="btn-secondary w-full"
                >
                  View History
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
              <div className="text-center py-8">
                <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No payment methods added yet</p>
                <button
                  onClick={() => router.push('/cards')}
                  className="btn-primary"
                >
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Complete Payment</h3>
              <button
                onClick={() => setShowPaymentForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <Elements stripe={stripePromise}>
              <PaymentForm amount={amount} onSuccess={handlePaymentSuccess} />
            </Elements>
          </div>
        )}
      </div>
    </div>
  )
}
