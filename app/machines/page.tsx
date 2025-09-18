'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { machineSchema, type MachineInput } from '@/lib/validations'
import toast from 'react-hot-toast'
import { Plus, Trash2, Activity, MapPin, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'

interface Machine {
  id: string
  name: string
  location: string
  machineId: string
  status: string
  lastSeen: string | null
  createdAt: string
}

export default function MachinesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const [machines, setMachines] = useState<Machine[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MachineInput>({
    resolver: zodResolver(machineSchema),
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (status === 'authenticated') {
      fetchMachines()
    }
  }, [status, router])

  const fetchMachines = async () => {
    try {
      const response = await fetch('/api/machines')
      if (response.ok) {
        const data = await response.json()
        setMachines(data)
      } else {
        toast.error(t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: MachineInput) => {
    setIsAdding(true)
    try {
      const response = await fetch('/api/machines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success(t('machines.addSuccess'))
        setShowAddForm(false)
        reset()
        fetchMachines()
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

  const deleteMachine = async (machineId: string) => {
    if (!confirm('Are you sure you want to delete this machine?')) return

    try {
      const response = await fetch(`/api/machines/${machineId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success(t('machines.deleteSuccess'))
        fetchMachines()
      } else {
        toast.error(t('common.error'))
      }
    } catch (error) {
      toast.error(t('common.error'))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-red-100 text-red-800'
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('machines.title')}</h1>
            <p className="mt-2 text-gray-600">Manage your vending machines and devices</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('machines.addMachine')}
          </button>
        </div>

        {/* Add Machine Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('machines.addMachine')}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="form-label">
                    {t('machines.machineName')}
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="e.g., Office Vending Machine"
                    className="form-input"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="form-label">
                    {t('machines.location')}
                  </label>
                  <input
                    {...register('location')}
                    type="text"
                    placeholder="e.g., Building A, Floor 2"
                    className="form-input"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="machineId" className="form-label">
                    {t('machines.machineId')}
                  </label>
                  <input
                    {...register('machineId')}
                    type="text"
                    placeholder="e.g., VM001"
                    className="form-input"
                  />
                  {errors.machineId && (
                    <p className="mt-1 text-sm text-red-600">{errors.machineId.message}</p>
                  )}
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

        {/* Machines Grid */}
        {machines.length === 0 ? (
          <div className="text-center py-12">
            <Activity className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              {t('machines.noMachines')}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by adding your first vending machine.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setShowAddForm(true)}
                className="btn-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('machines.addMachine')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div key={machine.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {machine.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {machine.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Activity className="h-4 w-4 mr-2" />
                        ID: {machine.machineId}
                      </div>
                      {machine.lastSeen && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          Last seen: {new Date(machine.lastSeen).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteMachine(machine.id)}
                    className="text-red-600 hover:text-red-800 ml-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(machine.status)}`}>
                    {machine.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    Added {new Date(machine.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
