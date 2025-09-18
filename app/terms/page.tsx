import Navbar from '@/components/Navbar'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">服务条款</h1>
          <p className="text-gray-600">最后更新：2024年9月18日</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 服务描述</h2>
            <p className="text-gray-700 mb-4">
              POINT INSIGHT INNOVATION PRIVATE LIMITED（"我们"、"公司"）提供无人零售SaaS平台服务，
              包括但不限于售货机管理、支付处理、数据分析、库存管理等功能。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 用户责任</h2>
            <p className="text-gray-700 mb-4">
              作为服务用户，您同意：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>提供真实、准确、完整的信息</li>
              <li>维护账户信息的保密性</li>
              <li>遵守所有适用的法律法规</li>
              <li>不得将服务用于非法目的</li>
              <li>不得干扰或破坏服务运行</li>
              <li>不得侵犯他人的知识产权</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 服务可用性</h2>
            <p className="text-gray-700 mb-4">
              我们努力保持服务的高可用性，但不保证服务不会中断。我们可能因以下原因暂停服务：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>系统维护和升级</li>
              <li>技术故障或不可抗力</li>
              <li>安全威胁或法律要求</li>
              <li>用户违反服务条款</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 支付和计费</h2>
            <p className="text-gray-700 mb-4">
              服务费用按照您选择的订阅计划收取：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>费用在服务开始时收取</li>
              <li>自动续费（除非取消）</li>
              <li>价格可能随时调整（提前30天通知）</li>
              <li>逾期付款可能导致服务暂停</li>
              <li>退款政策按具体情况处理</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 知识产权</h2>
            <p className="text-gray-700 mb-4">
              服务及其所有内容受知识产权法律保护：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>我们保留所有权利、所有权和利益</li>
              <li>用户不得复制、修改或分发服务</li>
              <li>用户数据归用户所有</li>
              <li>我们有权使用匿名数据进行改进</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 数据安全</h2>
            <p className="text-gray-700 mb-4">
              我们承诺保护您的数据安全：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>采用行业标准安全措施</li>
              <li>定期备份数据</li>
              <li>限制数据访问权限</li>
              <li>监控安全事件</li>
              <li>遵守数据保护法规</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 免责声明</h2>
            <p className="text-gray-700 mb-4">
              在法律允许的最大范围内，我们不对以下情况承担责任：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>服务中断或不可用</li>
              <li>数据丢失或损坏</li>
              <li>第三方行为或内容</li>
              <li>间接、偶然或后果性损害</li>
              <li>超出服务费用的损害</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 服务终止</h2>
            <p className="text-gray-700 mb-4">
              我们或您都可以随时终止服务：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>用户可随时取消订阅</li>
              <li>我们可因违反条款终止服务</li>
              <li>终止后数据保留30天</li>
              <li>用户可导出数据</li>
              <li>某些条款在终止后仍然有效</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 争议解决</h2>
            <p className="text-gray-700 mb-4">
              任何争议应通过以下方式解决：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>首先通过友好协商解决</li>
              <li>协商不成，提交仲裁</li>
              <li>适用新加坡法律</li>
              <li>仲裁地点在新加坡</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. 联系我们</h2>
            <p className="text-gray-700 mb-4">
              如有任何问题，请通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>邮箱：</strong> legal@point-insight.com</p>
              <p className="text-gray-700 mb-2"><strong>电话：</strong> +65-1234-5678</p>
              <p className="text-gray-700"><strong>地址：</strong> 新加坡</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
