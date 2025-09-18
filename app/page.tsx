'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Shield, BarChart3, CreditCard, Headphones } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  const { t } = useTranslation()

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
              专为无人售货机设计的完整解决方案，让您的零售业务更智能、更高效
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
              无人售货机解决方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从传统售货机到智能零售终端，我们提供全方位的技术支持和运营管理
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">智能售货机</h3>
              <p className="text-gray-600 mb-6">
                支持多种支付方式，实时库存管理，智能补货提醒，让您的售货机运营更高效
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 支持微信、支付宝、银行卡支付</li>
                <li>• 实时销售数据分析</li>
                <li>• 自动库存预警</li>
                <li>• 远程设备监控</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">生鲜售货机</h3>
              <p className="text-gray-600 mb-6">
                专为生鲜商品设计的温控售货机，保持商品新鲜，提供24小时便民服务
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 智能温控系统</li>
                <li>• 商品保质期管理</li>
                <li>• 冷链物流支持</li>
                <li>• 食品安全监控</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">咖啡售货机</h3>
              <p className="text-gray-600 mb-6">
                现磨咖啡售货机，多种口味选择，现做现卖，为消费者提供高品质咖啡体验
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 现磨咖啡制作</li>
                <li>• 多种口味选择</li>
                <li>• 自动清洁系统</li>
                <li>• 原料自动补充</li>
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
              灵活的价格方案，满足不同规模的无人售货机运营需求
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
                  最多3台设备
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  基础数据分析
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  邮件支持
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  基础支付功能
                </li>
              </ul>
              <Link
                href="/auth/signup"
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
              <div className="text-4xl font-bold text-primary-600 mb-4">$29<span className="text-lg text-gray-500">/月</span></div>
              <p className="text-gray-600 mb-6">
                适合小型运营
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  最多10台设备
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  高级数据分析
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  实时库存管理
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  电话支持
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  多种支付方式
                </li>
              </ul>
              <Link
                href="/auth/signup"
                className="btn-primary w-full"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$79<span className="text-lg text-gray-500">/月</span></div>
              <p className="text-gray-600 mb-6">
                {t('home.pricing.proDesc')}
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  最多50台设备
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  完整数据分析
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  智能补货提醒
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7技术支持
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  自定义报告
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  API接口
                </li>
              </ul>
              <Link
                href="/auth/signup"
                className="btn-primary w-full"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$199<span className="text-lg text-gray-500">/月</span></div>
              <p className="text-gray-600 mb-6">
                {t('home.pricing.enterpriseDesc')}
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  无限设备数量
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  高级AI分析
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  专属客户经理
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  定制化开发
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  多区域管理
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  白标解决方案
                </li>
              </ul>
              <Link
                href="/auth/signup"
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
              关于POINT INSIGHT INNOVATION
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们致力于通过创新技术推动无人零售行业的发展，为全球客户提供最优质的SaaS解决方案
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">服务客户</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600">管理设备</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <p className="text-gray-600">服务可用性</p>
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
                专业的无人零售SaaS解决方案提供商，致力于通过创新技术推动零售行业的数字化转型。
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 新加坡</p>
                <p>📧 support@point-insight.com</p>
                <p>📞 +65-1234-5678</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
                <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">功能特性</Link></li>
                <li><Link href="/#solutions" className="text-gray-400 hover:text-white transition-colors">解决方案</Link></li>
                <li><Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">定价</Link></li>
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">法律条款</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">隐私政策</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">服务条款</Link></li>
                <li><Link href="/data-protection" className="text-gray-400 hover:text-white transition-colors">数据保护协议</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie政策</Link></li>
                <li><Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">GDPR合规</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2024 POINT INSIGHT INNOVATION PRIVATE LIMITED. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-500">
                <Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link>
                <Link href="/terms" className="hover:text-white transition-colors">服务条款</Link>
                <Link href="/data-protection" className="hover:text-white transition-colors">数据保护</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie设置</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
