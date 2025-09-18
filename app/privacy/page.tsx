import Navbar from '@/components/Navbar'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">隐私政策</h1>
          <p className="text-gray-600">最后更新：2024年9月18日</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 信息收集</h2>
            <p className="text-gray-700 mb-4">
              我们收集您在使用我们的无人零售SaaS平台时提供的信息，包括但不限于：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>个人身份信息（姓名、邮箱地址、电话号码）</li>
              <li>公司信息（公司名称、地址、行业类型）</li>
              <li>支付信息（信用卡信息、账单地址）</li>
              <li>设备信息（售货机位置、状态、销售数据）</li>
              <li>使用数据（登录记录、操作日志、偏好设置）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 信息使用</h2>
            <p className="text-gray-700 mb-4">
              我们使用收集的信息用于以下目的：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>提供和维护我们的服务</li>
              <li>处理支付和账单</li>
              <li>发送重要通知和更新</li>
              <li>提供客户支持</li>
              <li>改进我们的产品和服务</li>
              <li>遵守法律义务</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 信息保护</h2>
            <p className="text-gray-700 mb-4">
              我们采用行业标准的安全措施来保护您的个人信息：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>数据加密传输和存储</li>
              <li>访问控制和身份验证</li>
              <li>定期安全审计</li>
              <li>员工隐私培训</li>
              <li>安全事件响应计划</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 信息共享</h2>
            <p className="text-gray-700 mb-4">
              我们不会出售、交易或转让您的个人信息给第三方，除非：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>获得您的明确同意</li>
              <li>法律要求或法院命令</li>
              <li>保护我们的权利和财产</li>
              <li>与可信的服务提供商合作（在严格保密协议下）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 您的权利</h2>
            <p className="text-gray-700 mb-4">
              根据适用的数据保护法律，您有权：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>访问您的个人信息</li>
              <li>更正不准确的信息</li>
              <li>删除您的个人信息</li>
              <li>限制信息处理</li>
              <li>数据可携带性</li>
              <li>反对信息处理</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie使用</h2>
            <p className="text-gray-700 mb-4">
              我们使用Cookie和类似技术来改善您的体验，包括：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>必要的Cookie（网站功能必需）</li>
              <li>分析Cookie（了解网站使用情况）</li>
              <li>偏好Cookie（记住您的设置）</li>
              <li>营销Cookie（个性化内容）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 联系我们</h2>
            <p className="text-gray-700 mb-4">
              如果您对本隐私政策有任何疑问，请通过以下方式联系我们：
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
              我们可能会不时更新本隐私政策。任何重大变更将通过电子邮件或网站通知您。
              我们建议您定期查看本页面以了解最新信息。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
