'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Shield, BarChart3, CreditCard, Headphones } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  const { t } = useTranslation()
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                {t('home.hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete solution designed for vending machines, making your retail business smarter and more efficient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('home.features.automated')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.automatedDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('home.features.analytics')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.analyticsDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('home.features.payments')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.paymentsDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Headphones className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('home.features.support')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.supportDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vending Machine Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional vending machines to smart retail terminals, we provide comprehensive technical support and operational management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Vending Machines</h3>
              <p className="text-gray-600 mb-6">
                Support for multiple payment methods, real-time inventory management, smart restocking alerts, making your vending machine operations more efficient
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Support for WeChat, Alipay, and bank card payments</li>
                <li>• Real-time sales data analysis</li>
                <li>• Automatic inventory alerts</li>
                <li>• Remote device monitoring</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fresh Food Vending Machines</h3>
              <p className="text-gray-600 mb-6">
                Temperature-controlled vending machines designed for fresh products, maintaining product freshness and providing 24-hour convenience services
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smart temperature control system</li>
                <li>• Product shelf life management</li>
                <li>• Cold chain logistics support</li>
                <li>• Food safety monitoring</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coffee Vending Machines</h3>
              <p className="text-gray-600 mb-6">
                Fresh ground coffee vending machines with multiple flavor options, made-to-order, providing consumers with high-quality coffee experience
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fresh ground coffee making</li>
                <li>• Multiple flavor options</li>
                <li>• Automatic cleaning system</li>
                <li>• Automatic ingredient replenishment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans to meet the operational needs of vending machines at different scales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('home.pricing.free')}
              </h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$0</div>
              <p className="text-gray-600 mb-6">
                {t('home.pricing.freeDesc')}
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 3 devices
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic data analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic payment features
                </li>
              </ul>
              <Link
                href={session ? "/payments?plan=free" : "/auth/signup"}
                className="btn-primary w-full"
              >
                {t('nav.freeTrial')}
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center border-2 border-primary-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$29<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600 mb-6">
                Perfect for small operations
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 10 devices
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced data analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time inventory management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Phone support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple payment methods
                </li>
              </ul>
              <Link
                href={session ? "/payments?plan=starter" : "/auth/signup"}
                className="btn-primary w-full"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$79<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600 mb-6">
                {t('home.pricing.proDesc')}
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 50 devices
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Complete data analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Smart restocking alerts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 technical support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom reports
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  API integration
                </li>
              </ul>
              <Link
                href={session ? "/payments?plan=professional" : "/auth/signup"}
                className="btn-primary w-full"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600 mb-6">
                {t('home.pricing.enterpriseDesc')}
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited devices
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced AI analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom development
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-region management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  White-label solutions
                </li>
              </ul>
              <Link
                href={session ? "/payments?plan=enterprise" : "/auth/signup"}
                className="btn-primary w-full"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About POINT INSIGHT INNOVATION
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to advancing the unmanned retail industry through innovative technology, providing the highest quality SaaS solutions for global customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">Served Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600">Managed Devices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <p className="text-gray-600">Service Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-2">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">POINT INSIGHT INNOVATION</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional unmanned retail SaaS solution provider, committed to driving digital transformation in the retail industry through innovative technology.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 Singapore</p>
                <p>📧 support@point-insight.com</p>
                <p>📞 +65-1234-5678</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/data-protection" className="text-gray-400 hover:text-white transition-colors">Data Protection Agreement</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2024 POINT INSIGHT INNOVATION PRIVATE LIMITED. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-500">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/data-protection" className="hover:text-white transition-colors">Data Protection</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
