import Navbar from '@/components/Navbar'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie政策</h1>
          <p className="text-gray-600">最后更新：2024年9月18日</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 什么是Cookie</h2>
            <p className="text-gray-700 mb-4">
              Cookie是当您访问网站时存储在您设备上的小型文本文件。它们帮助网站记住您的偏好设置，
              改善您的浏览体验，并提供个性化内容。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Cookie的作用</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• 记住您的登录状态</li>
                <li>• 保存您的偏好设置</li>
                <li>• 分析网站使用情况</li>
                <li>• 提供个性化内容</li>
                <li>• 改善网站性能</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 我们使用的Cookie类型</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">必要的Cookie</h3>
                <p className="text-green-800 text-sm mb-3">
                  这些Cookie对于网站的基本功能是必需的，无法关闭。它们通常只响应您所做的操作，
                  如设置隐私偏好、登录或填写表单。
                </p>
                <div className="text-sm text-green-700">
                  <p><strong>用途：</strong> 身份验证、安全、基本功能</p>
                  <p><strong>存储时间：</strong> 会话期间或最多1年</p>
                  <p><strong>示例：</strong> 登录状态、购物车内容、语言偏好</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">功能Cookie</h3>
                <p className="text-yellow-800 text-sm mb-3">
                  这些Cookie使网站能够提供增强的功能和个性化。它们可能由我们或第三方设置。
                </p>
                <div className="text-sm text-yellow-700">
                  <p><strong>用途：</strong> 记住偏好、个性化体验</p>
                  <p><strong>存储时间：</strong> 最多2年</p>
                  <p><strong>示例：</strong> 主题设置、字体大小、位置信息</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">分析Cookie</h3>
                <p className="text-blue-800 text-sm mb-3">
                  这些Cookie帮助我们了解访问者如何与网站互动，通过收集和报告信息匿名进行。
                </p>
                <div className="text-sm text-blue-700">
                  <p><strong>用途：</strong> 网站分析、性能监控</p>
                  <p><strong>存储时间：</strong> 最多2年</p>
                  <p><strong>示例：</strong> Google Analytics、页面浏览量、停留时间</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">营销Cookie</h3>
                <p className="text-purple-800 text-sm mb-3">
                  这些Cookie用于跟踪访问者跨网站的活动，以显示相关和吸引人的广告。
                </p>
                <div className="text-sm text-purple-700">
                  <p><strong>用途：</strong> 广告投放、营销分析</p>
                  <p><strong>存储时间：</strong> 最多1年</p>
                  <p><strong>示例：</strong> 广告偏好、兴趣标签、转化跟踪</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 第三方Cookie</h2>
            <p className="text-gray-700 mb-4">
              我们可能使用以下第三方服务，它们可能会设置自己的Cookie：
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">服务商</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用途</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">更多信息</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Google Analytics</td>
                    <td className="px-6 py-4 text-sm text-gray-900">网站分析</td>
                    <td className="px-6 py-4 text-sm text-gray-900">分析</td>
                    <td className="px-6 py-4 text-sm text-blue-600"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">隐私政策</a></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stripe</td>
                    <td className="px-6 py-4 text-sm text-gray-900">支付处理</td>
                    <td className="px-6 py-4 text-sm text-gray-900">功能</td>
                    <td className="px-6 py-4 text-sm text-blue-600"><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">隐私政策</a></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hotjar</td>
                    <td className="px-6 py-4 text-sm text-gray-900">用户体验分析</td>
                    <td className="px-6 py-4 text-sm text-gray-900">分析</td>
                    <td className="px-6 py-4 text-sm text-blue-600"><a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer">隐私政策</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 如何管理Cookie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">浏览器设置</h3>
                <p className="text-gray-700 text-sm mb-3">
                  您可以通过浏览器设置控制Cookie：
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chrome: 设置 > 隐私和安全 > Cookie</li>
                  <li>• Firefox: 选项 > 隐私与安全 > Cookie</li>
                  <li>• Safari: 偏好设置 > 隐私 > Cookie</li>
                  <li>• Edge: 设置 > Cookie和站点权限</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie同意管理</h3>
                <p className="text-gray-700 text-sm mb-3">
                  您可以通过我们的Cookie设置中心管理偏好：
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-primary-600 text-white px-4 py-2 rounded text-sm hover:bg-primary-700">
                    管理Cookie设置
                  </button>
                  <p className="text-xs text-gray-600">
                    您可以随时更改您的Cookie偏好设置
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie存储时间</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">存储期限分类</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">会话Cookie</h4>
                  <p className="text-gray-700">在您关闭浏览器时自动删除</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">持久Cookie</h4>
                  <p className="text-gray-700">在设定的到期时间后删除（通常1-2年）</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">第三方Cookie</h4>
                  <p className="text-gray-700">由第三方服务商控制存储时间</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 禁用Cookie的影响</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">重要提醒</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    如果您禁用Cookie，可能会影响网站的某些功能：
                  </p>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• 无法保持登录状态</li>
                    <li>• 无法保存偏好设置</li>
                    <li>• 某些功能可能无法正常工作</li>
                    <li>• 个性化内容将不可用</li>
                    <li>• 购物车内容可能丢失</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 联系我们</h2>
            <p className="text-gray-700 mb-4">
              如果您对Cookie政策有任何疑问，请通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>邮箱：</strong> privacy@point-insight.com</p>
              <p className="text-gray-700 mb-2"><strong>电话：</strong> +65-1234-5678</p>
              <p className="text-gray-700"><strong>地址：</strong> 新加坡</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 政策更新</h2>
            <p className="text-gray-700">
              我们可能会不时更新本Cookie政策。任何重大变更将通过网站通知您。
              我们建议您定期查看本页面以了解最新信息。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
