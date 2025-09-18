import Navbar from '@/components/Navbar'

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Protection Agreement</h1>
          <p className="text-gray-600">Last updated: September 18, 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Processing Principles</h2>
            <p className="text-gray-700 mb-4">
              We follow the following data processing principles to ensure your data is fully protected:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Lawfulness:</strong> Process personal data based on legal grounds</li>
              <li><strong>Fairness:</strong> Process data in a fair and transparent manner</li>
              <li><strong>Purpose Limitation:</strong> Use data only for specified, legitimate purposes</li>
              <li><strong>Data Minimization:</strong> Collect only necessary data</li>
              <li><strong>Accuracy:</strong> Ensure data is accurate and up-to-date</li>
              <li><strong>Storage Limitation:</strong> Retain data only as long as necessary</li>
              <li><strong>Security:</strong> Implement appropriate technical and organizational measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-4">
              We process personal data based on the following legal grounds:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Consent</h3>
                <p className="text-blue-800 text-sm">
                  When you explicitly consent to the processing of your personal data for specific purposes.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Contract Performance</h3>
                <p className="text-green-800 text-sm">
                  When processing is necessary for the performance of a contract with you or to take steps at your request prior to entering into a contract.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Legitimate Interest</h3>
                <p className="text-yellow-800 text-sm">
                  When we have a legitimate interest in processing your data, such as improving our services or preventing fraud.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Legal Obligation</h3>
                <p className="text-red-800 text-sm">
                  When processing is necessary for compliance with a legal obligation to which we are subject.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Categories We Process</h2>
            <p className="text-gray-700 mb-4">
              We process the following categories of personal data:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Identity Data</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Name, title, date of birth</li>
                  <li>• Contact information (email, phone, address)</li>
                  <li>• Professional information (job title, company)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Data</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Payment card details (encrypted)</li>
                  <li>• Billing and transaction history</li>
                  <li>• Bank account information (if applicable)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Data</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• IP address, browser type and version</li>
                  <li>• Device information and operating system</li>
                  <li>• Login data and usage patterns</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Data</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Vending machine locations and status</li>
                  <li>• Sales and inventory data</li>
                  <li>• Customer preferences and behavior</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security Measures</h2>
            <p className="text-gray-700 mb-4">
              We implement comprehensive security measures to protect your personal data:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Technical Safeguards</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• AES-256 encryption for data at rest</li>
                  <li>• Multi-factor authentication for access</li>
                  <li>• Regular security updates and patches</li>
                  <li>• Intrusion detection and prevention systems</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Organizational Safeguards</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Data protection training for all staff</li>
                  <li>• Access controls and role-based permissions</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Incident response procedures</li>
                  <li>• Data breach notification protocols</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Physical Safeguards</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Secure data centers with 24/7 monitoring</li>
                  <li>• Biometric access controls</li>
                  <li>• Environmental controls (temperature, humidity)</li>
                  <li>• Backup and disaster recovery systems</li>
                  <li>• Secure disposal of physical media</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Subject Rights</h2>
            <p className="text-gray-700 mb-4">
              Under applicable data protection laws, you have the following rights:
            </p>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Right of Access</h3>
                <p className="text-yellow-800 text-sm">
                  You can request information about what personal data we hold about you and how we process it.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Right to Rectification</h3>
                <p className="text-blue-800 text-sm">
                  You can request correction of inaccurate or incomplete personal data.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Right to Erasure</h3>
                <p className="text-red-800 text-sm">
                  You can request deletion of your personal data in certain circumstances.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Right to Restrict Processing</h3>
                <p className="text-green-800 text-sm">
                  You can request limitation of processing in certain circumstances.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Right to Data Portability</h3>
                <p className="text-purple-800 text-sm">
                  You can request a copy of your data in a structured, machine-readable format.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Right to Object</h3>
                <p className="text-orange-800 text-sm">
                  You can object to processing based on legitimate interests or for direct marketing purposes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this agreement:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Retention Schedule:</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Account data: Until account closure + 1 year</li>
                <li>• Financial data: 7 years (legal requirement)</li>
                <li>• Marketing data: Until consent withdrawal + 1 year</li>
                <li>• Technical data: 2 years from collection</li>
                <li>• Business data: 3 years from last activity</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your data may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Standard Contractual Clauses (SCCs) with data processors</li>
              <li>Adequacy decisions by relevant data protection authorities</li>
              <li>Binding Corporate Rules for intra-group transfers</li>
              <li>Certification schemes and codes of conduct</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Breach Notification</h2>
            <p className="text-gray-700 mb-4">
              In the event of a data breach that poses a risk to your rights and freedoms, we will:
            </p>
            <div className="bg-red-50 p-6 rounded-lg">
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Notify the relevant supervisory authority within 72 hours</li>
                <li>• Inform affected individuals without undue delay</li>
                <li>• Provide details of the breach and measures taken</li>
                <li>• Offer guidance on protective actions you can take</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any data protection inquiries or to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Data Protection Officer:</strong> dpo@point-insight.com</p>
                <p><strong>General Inquiries:</strong> privacy@point-insight.com</p>
                <p><strong>Phone:</strong> +65-1234-5678</p>
                <p><strong>Address:</strong> POINT INSIGHT INNOVATION PRIVATE LIMITED, Singapore</p>
                <p><strong>Response Time:</strong> We will respond to your request within 30 days</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}