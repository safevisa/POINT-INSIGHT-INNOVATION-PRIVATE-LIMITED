import Navbar from '@/components/Navbar'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: September 18, 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Service Description</h2>
            <p className="text-gray-700 mb-4">
              POINT INSIGHT INNOVATION PRIVATE LIMITED ("we", "us", "company") provides unmanned retail SaaS platform services,
              including but not limited to vending machine management, payment processing, data analytics, inventory management, and other features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a service user, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide true, accurate, and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Use the service in compliance with applicable laws and regulations</li>
              <li>Not engage in any illegal or unauthorized activities</li>
              <li>Not interfere with or disrupt the service or servers</li>
              <li>Not attempt to gain unauthorized access to any part of the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Availability</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide continuous service availability but cannot guarantee 100% uptime. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Perform scheduled maintenance and updates</li>
              <li>Suspend service for emergency repairs</li>
              <li>Modify or discontinue features with reasonable notice</li>
              <li>Implement security measures as needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms and conditions:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Billing</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Fees are charged in advance on a monthly or annual basis</li>
                  <li>• All fees are non-refundable unless otherwise specified</li>
                  <li>• Prices are subject to change with 30 days notice</li>
                  <li>• Late payments may result in service suspension</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Free Trial</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• 14-day free trial available for new users</li>
                  <li>• No credit card required for trial signup</li>
                  <li>• Trial automatically converts to paid plan unless cancelled</li>
                  <li>• Trial features may be limited compared to paid plans</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of the service are owned by POINT INSIGHT INNOVATION PRIVATE LIMITED and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">User License</h3>
              <p className="text-yellow-800 text-sm mb-3">
                We grant you a limited, non-exclusive, non-transferable license to use the service for your business purposes only.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• You may not copy, modify, or distribute the service</li>
                <li>• You may not reverse engineer or attempt to extract source code</li>
                <li>• You may not use the service for competitive purposes</li>
                <li>• This license terminates when you stop using the service</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data and Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Data Ownership</h3>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• You retain ownership of your business data</li>
                <li>• We may use aggregated, anonymized data for service improvement</li>
                <li>• We will not share your data with third parties without consent</li>
                <li>• You can export your data at any time</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
            </p>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Disclaimer</h3>
              <p className="text-red-800 text-sm">
                The service is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or secure.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate this agreement at any time:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>You may cancel your subscription at any time through your account settings</li>
              <li>We may suspend or terminate your account for violation of these terms</li>
              <li>Termination does not relieve you of payment obligations for services already provided</li>
              <li>Upon termination, your access to the service will cease immediately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of material changes via email or through the service. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Email:</strong> legal@point-insight.com</p>
                <p><strong>Phone:</strong> +65-1234-5678</p>
                <p><strong>Address:</strong> POINT INSIGHT INNOVATION PRIVATE LIMITED, Singapore</p>
                <p><strong>Support:</strong> support@point-insight.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}