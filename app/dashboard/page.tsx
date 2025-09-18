'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { 
  Activity, 
  CreditCard, 
  ShoppingCart, 
  TrendingUp, 
  Plus,
  Eye,
  Settings
} from 'lucide-react'
import Navbar from '@/components/Navbar'

interface DashboardStats {
  totalMachines: number
  activeMachines: number
  totalRevenue: number
  recentOrders: number
}

interface Machine {
  id: string
  name: string
  location: string
  status: string
  lastSeen: string | null
}

interface Order {
  id: string
  amount: number
  status: string
  createdAt: string
  machineId: string | null
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const [stats, setStats] = useState<DashboardStats>({
    totalMachines: 0,
    activeMachines: 0,
    totalRevenue: 0,
    recentOrders: 0
  })
  const [machines, setMachines] = useState<Machine[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (status === 'authenticated') {
      fetchDashboardData()
    }
  }, [status, router])

  const fetchDashboardData = async () => {
    try {
      const [machinesRes, ordersRes] = await Promise.all([
        fetch('/api/machines'),
        fetch('/api/orders')
      ])

      const machinesData = machinesRes.ok ? await machinesRes.json() : []
      const ordersData = ordersRes.ok ? await ordersRes.json() : []

      setMachines(machinesData)
      setOrders(ordersData.slice(0, 5)) // Show only recent 5 orders

      // Calculate stats
      const activeMachines = machinesData.filter((m: Machine) => m.status === 'active').length
      const totalRevenue = ordersData
        .filter((o: Order) => o.status === 'completed')
        .reduce((sum: number, o: Order) => sum + o.amount, 0)

      setStats({
        totalMachines: machinesData.length,
        activeMachines,
        totalRevenue,
        recentOrders: ordersData.length
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setIsLoading(false)
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('dashboard.welcome')}, {session?.user?.name || 'User'}!
          </h1>
          <p className="mt-2 text-gray-600">Here's what's happening with your retail operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Activity className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('dashboard.totalMachines')}</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalMachines}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('dashboard.activeMachines')}</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeMachines}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('dashboard.totalRevenue')}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${stats.totalRevenue.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingCart className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('dashboard.recentOrders')}</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.recentOrders}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t('dashboard.recentOrders')}</h3>
              <Link href="/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {orders.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No recent orders</p>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">Order #{order.id.slice(-8)}</p>
                      <p className="text-sm text-gray-500">
                        {order.machineId ? `Machine: ${order.machineId}` : 'Online Order'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${order.amount.toFixed(2)}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'completed' 
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Machines Status */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Machine Status</h3>
              <Link href="/machines" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Manage
              </Link>
            </div>
            <div className="space-y-3">
              {machines.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-gray-500 mb-4">No machines added yet</p>
                  <Link href="/machines" className="btn-primary inline-flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Machine
                  </Link>
                </div>
              ) : (
                machines.slice(0, 5).map((machine) => (
                  <div key={machine.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{machine.name}</p>
                      <p className="text-sm text-gray-500">{machine.location}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        machine.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : machine.status === 'inactive'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {machine.status}
                      </span>
                      <Link href={`/machines/${machine.id}`} className="text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('dashboard.quickActions')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/machines" className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <Plus className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Add Machine</p>
                  <p className="text-sm text-gray-500">Connect a new vending machine</p>
                </div>
              </div>
            </Link>
            <Link href="/cards" className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Manage Cards</p>
                  <p className="text-sm text-gray-500">Update payment methods</p>
                </div>
              </div>
            </Link>
            <Link href="/profile" className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <Settings className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Account Settings</p>
                  <p className="text-sm text-gray-500">Update your profile</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
