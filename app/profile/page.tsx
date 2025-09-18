'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { profileSchema, type ProfileInput } from '@/lib/validations'
import toast from 'react-hot-toast'
import Navbar from '@/components/Navbar'

interface UserProfile {
  id: string
  name: string
  email: string
  companyName: string
  phoneNumber: string
  address: string
  city: string
  country: string
  language: string
  timezone: string
  subscriptionStatus: string
  subscriptionPlan: string
  trialEndsAt: string
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (status === 'authenticated') {
      fetchProfile()
    }
  }, [status, router])

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/profile')
      if (response.ok) {
        const data = await response.json()
        setProfile(data)
        reset(data)
      } else {
        toast.error(t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: ProfileInput) => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success(t('profile.updateSuccess'))
        fetchProfile()
      } else {
        toast.error(t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    } finally {
      setIsSaving(false)
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

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Profile not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('profile.title')}</h1>
          <p className="mt-2 text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      {t('profile.name')}
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="form-input"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      disabled
                      className="form-input bg-gray-100"
                    />
                    <p className="mt-1 text-sm text-gray-500">Email cannot be changed</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="form-label">
                    {t('profile.companyName')}
                  </label>
                  <input
                    {...register('companyName')}
                    type="text"
                    className="form-input"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="form-label">
                    {t('profile.phoneNumber')}
                  </label>
                  <input
                    {...register('phoneNumber')}
                    type="tel"
                    className="form-input"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="form-label">
                    {t('profile.address')}
                  </label>
                  <input
                    {...register('address')}
                    type="text"
                    className="form-input"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="form-label">
                      {t('profile.city')}
                    </label>
                    <input
                      {...register('city')}
                      type="text"
                      className="form-input"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="country" className="form-label">
                      {t('profile.country')}
                    </label>
                    <input
                      {...register('country')}
                      type="text"
                      className="form-input"
                    />
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="language" className="form-label">
                      {t('profile.language')}
                    </label>
                    <select {...register('language')} className="form-input">
                      <option value="en">English</option>
                      <option value="zh">Chinese (Simplified)</option>
                      <option value="zh-TW">Chinese (Traditional)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timezone" className="form-label">
                      {t('profile.timezone')}
                    </label>
                    <select {...register('timezone')} className="form-input">
                      <option value="UTC">UTC</option>
                      <option value="Asia/Shanghai">Asia/Shanghai</option>
                      <option value="Asia/Hong_Kong">Asia/Hong_Kong</option>
                      <option value="America/New_York">America/New_York</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="btn-primary"
                  >
                    {isSaving ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      t('common.save')
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Account Info */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Subscription Status</p>
                  <p className="font-medium capitalize">{profile.subscriptionStatus}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Plan</p>
                  <p className="font-medium capitalize">{profile.subscriptionPlan}</p>
                </div>
                {profile.trialEndsAt && (
                  <div>
                    <p className="text-sm text-gray-500">Trial Ends</p>
                    <p className="font-medium">
                      {new Date(profile.trialEndsAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
