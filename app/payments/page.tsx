'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import toast from 'react-hot-toast'
import { CreditCard, DollarSign, ShoppingCart, CheckCircle } from 'lucide-react'
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

const plans = {
  free: { name: 'Free Trial', price: 0, description: '14 days free trial' },
  starter: { name: 'Starter', price: 29, description: '适合小型运营' },
  professional: { name: 'Professional', price: 79, description: 'Perfect for growing businesses' },
  enterprise: { name: 'Enterprise', price: 199, description: 'For large operations' }
}

export default function PaymentsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useTranslation()
  const [amount, setAmount] = useState(0)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }
    
    // 处理URL参数中的计划选择
    const plan = searchParams.get('plan')
    if (plan && plans[plan as keyof typeof plans]) {
      setSelectedPlan(plan)
      const planData = plans[plan as keyof typeof plans]
      if (planData.price > 0) {
        setAmount(planData.price)
      }
    }
  }, [status, router, searchParams])

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
            {/* Plan Selection */}
            {selectedPlan ? (
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Selected Plan</h3>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-primary-600 mb-2">
                    {plans[selectedPlan as keyof typeof plans].name}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    {plans[selectedPlan as keyof typeof plans].description}
                  </p>
                  <div className="text-2xl font-bold text-primary-600">
                    ${plans[selectedPlan as keyof typeof plans].price}
                    {plans[selectedPlan as keyof typeof plans].price > 0 && <span className="text-sm text-gray-500">/month</span>}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose a Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedPlan === key ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                      <div className="text-lg font-bold text-primary-600">
                        ${plan.price}
                        {plan.price > 0 && <span className="text-sm text-gray-500">/month</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <DollarSign className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedPlan ? 'Subscribe to Plan' : 'Quick Payment'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedPlan ? `Subscribe to ${plans[selectedPlan as keyof typeof plans].name}` : 'Make a one-time payment'}
                </p>
                <div className="space-y-3">
                  {!selectedPlan && (
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={amount || ''}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="form-input"
                      min="1"
                      step="0.01"
                    />
                  )}
                  {selectedPlan && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        ${plans[selectedPlan as keyof typeof plans].price}
                        {plans[selectedPlan as keyof typeof plans].price > 0 && <span className="text-sm text-gray-500">/month</span>}
                      </div>
                      {plans[selectedPlan as keyof typeof plans].price === 0 && (
                        <div className="flex items-center justify-center text-green-600 mb-2">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span className="font-medium">Free Trial</span>
                        </div>
                      )}
                    </div>
                  )}
                  <button
                    onClick={() => setShowPaymentForm(true)}
                    disabled={!selectedPlan && (!amount || amount <= 0)}
                    className="btn-primary w-full"
                  >
                    {selectedPlan ? 
                      (plans[selectedPlan as keyof typeof plans].price === 0 ? 'Start Free Trial' : 'Subscribe Now') : 
                      'Pay Now'
                    }
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
