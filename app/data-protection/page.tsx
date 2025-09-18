import Navbar from '@/components/Navbar'

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">数据保护协议</h1>
          <p className="text-gray-600">最后更新：2024年9月18日</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 数据处理原则</h2>
            <p className="text-gray-700 mb-4">
              我们遵循以下数据处理原则，确保您的数据得到充分保护：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>合法性：</strong> 基于合法基础处理个人数据</li>
              <li><strong>公平性：</strong> 以公平、透明的方式处理数据</li>
              <li><strong>目的限制：</strong> 仅用于明确、合法的目的</li>
              <li><strong>数据最小化：</strong> 仅收集必要的数据</li>
              <li><strong>准确性：</strong> 确保数据准确、最新</li>
              <li><strong>存储限制：</strong> 仅在必要时保留数据</li>
              <li><strong>安全性：</strong> 采用适当的技术和组织措施</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 数据处理法律基础</h2>
            <p className="text-gray-700 mb-4">
              我们基于以下法律基础处理您的个人数据：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>合同履行：</strong> 为提供SaaS服务而必需的数据处理</li>
              <li><strong>合法利益：</strong> 改进服务、防止欺诈、确保安全</li>
              <li><strong>同意：</strong> 您明确同意的数据处理活动</li>
              <li><strong>法律义务：</strong> 遵守适用的法律法规</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 数据收集类型</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">个人身份信息</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 姓名和联系方式</li>
                  <li>• 邮箱地址</li>
                  <li>• 电话号码</li>
                  <li>• 公司信息</li>
                  <li>• 职位和角色</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">技术数据</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• IP地址和位置</li>
                  <li>• 设备信息</li>
                  <li>• 浏览器类型</li>
                  <li>• 操作系统</li>
                  <li>• 访问日志</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">业务数据</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 售货机位置</li>
                  <li>• 销售记录</li>
                  <li>• 库存信息</li>
                  <li>• 支付数据</li>
                  <li>• 客户偏好</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">使用数据</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 登录记录</li>
                  <li>• 功能使用情况</li>
                  <li>• 错误日志</li>
                  <li>• 性能数据</li>
                  <li>• 用户行为</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 数据安全措施</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">技术措施</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 端到端加密</li>
                  <li>• 安全套接层(SSL/TLS)</li>
                  <li>• 数据备份和恢复</li>
                  <li>• 入侵检测系统</li>
                  <li>• 防火墙保护</li>
                  <li>• 定期安全更新</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">组织措施</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 员工保密协议</li>
                  <li>• 访问权限控制</li>
                  <li>• 定期安全培训</li>
                  <li>• 事件响应计划</li>
                  <li>• 第三方安全审计</li>
                  <li>• 数据保护官(DPO)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 数据保留期限</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">数据类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">保留期限</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">删除方式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">账户信息</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">账户关闭后30天</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">安全删除</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">交易记录</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7年（法律要求）</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">加密存储</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">设备数据</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">设备移除后1年</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">匿名化处理</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">日志数据</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1年</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">自动删除</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 您的权利</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">访问权</h3>
                <p className="text-blue-800 text-sm">您有权了解我们处理您个人数据的情况，包括处理目的、数据类型、接收方等。</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">更正权</h3>
                <p className="text-green-800 text-sm">您有权要求我们更正不准确或不完整的个人数据。</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">删除权</h3>
                <p className="text-red-800 text-sm">在某些情况下，您有权要求我们删除您的个人数据。</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">限制权</h3>
                <p className="text-yellow-800 text-sm">您有权要求我们限制对您个人数据的处理。</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">可携带权</h3>
                <p className="text-purple-800 text-sm">您有权以结构化、常用和机器可读的格式获取您的数据。</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">反对权</h3>
                <p className="text-orange-800 text-sm">您有权反对基于合法利益的数据处理。</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 数据泄露通知</h2>
            <p className="text-gray-700 mb-4">
              如果发生数据泄露事件，我们将：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>在72小时内向监管机构报告</li>
              <li>及时通知受影响的用户</li>
              <li>采取紧急措施控制损害</li>
              <li>进行详细的安全调查</li>
              <li>实施改进措施防止再次发生</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 第三方数据处理</h2>
            <p className="text-gray-700 mb-4">
              我们可能与以下类型的第三方共享数据：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>云服务提供商：</strong> 用于数据存储和处理</li>
              <li><strong>支付处理商：</strong> 用于处理支付交易</li>
              <li><strong>分析服务商：</strong> 用于改进服务质量</li>
              <li><strong>客户支持工具：</strong> 用于提供客户服务</li>
              <li><strong>法律要求：</strong> 遵守法律法规要求</li>
            </ul>
            <p className="text-gray-700">
              所有第三方都必须签署严格的数据保护协议，并遵守相同的数据保护标准。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 联系我们</h2>
            <p className="text-gray-700 mb-4">
              如果您对数据保护有任何疑问或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>数据保护官：</strong> dpo@point-insight.com</p>
              <p className="text-gray-700 mb-2"><strong>一般咨询：</strong> privacy@point-insight.com</p>
              <p className="text-gray-700 mb-2"><strong>电话：</strong> +65-1234-5678</p>
              <p className="text-gray-700"><strong>地址：</strong> 新加坡</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. 政策更新</h2>
            <p className="text-gray-700">
              我们可能会不时更新本数据保护协议。重大变更将通过电子邮件或网站通知您。
              我们建议您定期查看本页面以了解最新信息。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
