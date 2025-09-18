'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { cardSchema, type CardInput } from '@/lib/validations'
import toast from 'react-hot-toast'
import { Plus, Trash2, CreditCard } from 'lucide-react'
import Navbar from '@/components/Navbar'

interface Card {
  id: string
  cardNumber: string
  cardHolder: string
  expiryMonth: number
  expiryYear: number
  isDefault: boolean
  createdAt: string
}

export default function CardsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const [cards, setCards] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardInput>({
    resolver: zodResolver(cardSchema),
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (status === 'authenticated') {
      fetchCards()
    }
  }, [status, router])

  const fetchCards = async () => {
    try {
      const response = await fetch('/api/cards')
      if (response.ok) {
        const data = await response.json()
        setCards(data)
      } else {
        toast.error(t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: CardInput) => {
    setIsAdding(true)
    try {
      const response = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success(t('cards.addSuccess'))
        setShowAddForm(false)
        reset()
        fetchCards()
      } else {
        const result = await response.json()
        toast.error(result.error || t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    } finally {
      setIsAdding(false)
    }
  }

  const deleteCard = async (cardId: string) => {
    if (!confirm('Are you sure you want to delete this card?')) return

    try {
      const response = await fetch(`/api/cards/${cardId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success(t('cards.deleteSuccess'))
        fetchCards()
      } else {
        toast.error(t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    }
  }

  if (status === 'loading' || isLoading) {
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('cards.title')}</h1>
            <p className="mt-2 text-gray-600">Manage your payment methods</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('cards.addCard')}
          </button>
        </div>

        {/* Add Card Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('cards.addCard')}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="form-label">
                    {t('cards.cardNumber')}
                  </label>
                  <input
                    {...register('cardNumber')}
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="form-input"
                  />
                  {errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cardHolder" className="form-label">
                    {t('cards.cardHolder')}
                  </label>
                  <input
                    {...register('cardHolder')}
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                  />
                  {errors.cardHolder && (
                    <p className="mt-1 text-sm text-red-600">{errors.cardHolder.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryMonth" className="form-label">
                      Month
                    </label>
                    <select {...register('expiryMonth', { valueAsNumber: true })} className="form-input">
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {String(i + 1).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                    {errors.expiryMonth && (
                      <p className="mt-1 text-sm text-red-600">{errors.expiryMonth.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="expiryYear" className="form-label">
                      Year
                    </label>
                    <select {...register('expiryYear', { valueAsNumber: true })} className="form-input">
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      })}
                    </select>
                    {errors.expiryYear && (
                      <p className="mt-1 text-sm text-red-600">{errors.expiryYear.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="cvv" className="form-label">
                    {t('cards.cvv')}
                  </label>
                  <input
                    {...register('cvv')}
                    type="text"
                    placeholder="123"
                    className="form-input"
                  />
                  {errors.cvv && (
                    <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    {...register('isDefault')}
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    {t('cards.defaultCard')}
                  </label>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false)
                      reset()
                    }}
                    className="btn-secondary"
                  >
                    {t('common.cancel')}
                  </button>
                  <button
                    type="submit"
                    disabled={isAdding}
                    className="btn-primary"
                  >
                    {isAdding ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      t('common.save')
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Cards List */}
        <div className="space-y-4">
          {cards.length === 0 ? (
            <div className="text-center py-12">
              <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                {t('cards.noCards')}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by adding a payment method.
              </p>
            </div>
          ) : (
            cards.map((card) => (
              <div key={card.id} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="h-8 w-8 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{card.cardNumber}</p>
                      <p className="text-sm text-gray-500">
                        {card.cardHolder} • {String(card.expiryMonth).padStart(2, '0')}/{card.expiryYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {card.isDefault && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        Default
                      </span>
                    )}
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
