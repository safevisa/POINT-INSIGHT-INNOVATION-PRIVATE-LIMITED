import Navbar from '@/components/Navbar'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: September 18, 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences,
              improve your browsing experience, and provide personalized content.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">How Cookies Work</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Remember your login status</li>
                <li>• Save your preferences</li>
                <li>• Analyze website usage</li>
                <li>• Provide personalized content</li>
                <li>• Improve website performance</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Essential Cookies</h3>
                <p className="text-green-800 text-sm mb-3">
                  These cookies are necessary for the basic functionality of the website and cannot be disabled. They usually only respond to actions you take,
                  such as setting privacy preferences, logging in, or filling out forms.
                </p>
                <div className="text-sm text-green-700">
                  <p><strong>Purpose:</strong> Authentication, security, basic functionality</p>
                  <p><strong>Storage Duration:</strong> Session or up to 1 year</p>
                  <p><strong>Examples:</strong> Login status, shopping cart contents, language preferences</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Analytics Cookies</h3>
                <p className="text-yellow-800 text-sm mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <div className="text-sm text-yellow-700">
                  <p><strong>Purpose:</strong> Website analytics, performance monitoring</p>
                  <p><strong>Storage Duration:</strong> Up to 2 years</p>
                  <p><strong>Examples:</strong> Google Analytics, page views, user behavior</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Functional Cookies</h3>
                <p className="text-purple-800 text-sm mb-3">
                  These cookies enable enhanced functionality and personalization, such as videos and live chat features.
                </p>
                <div className="text-sm text-purple-700">
                  <p><strong>Purpose:</strong> Enhanced functionality, personalization</p>
                  <p><strong>Storage Duration:</strong> Up to 1 year</p>
                  <p><strong>Examples:</strong> Video preferences, chat settings, user interface customization</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Marketing Cookies</h3>
                <p className="text-red-800 text-sm mb-3">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                </p>
                <div className="text-sm text-red-700">
                  <p><strong>Purpose:</strong> Advertising, marketing, social media integration</p>
                  <p><strong>Storage Duration:</strong> Up to 1 year</p>
                  <p><strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Cookies</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Website Functionality</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Maintain user login sessions</li>
                  <li>• Remember user preferences and settings</li>
                  <li>• Enable shopping cart functionality</li>
                  <li>• Provide personalized content and recommendations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics and Performance</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Track website traffic and usage patterns</li>
                  <li>• Monitor website performance and loading times</li>
                  <li>• Identify popular content and features</li>
                  <li>• Improve user experience based on data</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing and Advertising</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Display relevant advertisements</li>
                  <li>• Track campaign effectiveness</li>
                  <li>• Enable social media sharing</li>
                  <li>• Provide targeted content and offers</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
            <p className="text-gray-700 mb-4">
              You have the right to control how cookies are used on our website. You can manage your cookie preferences through:
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Browser Settings</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set up notifications for new cookies</li>
                </ul>
                <div className="mt-4 text-sm text-blue-700">
                  <p><strong>Browser Cookie Settings:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
                    <li>• Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
                    <li>• Safari: Preferences &gt; Privacy &gt; Cookies</li>
                    <li>• Edge: Settings &gt; Cookies and Site Permissions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Cookie Consent Banner</h3>
                <p className="text-green-800 text-sm mb-3">
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential cookies</li>
                  <li>• Customize your cookie preferences</li>
                  <li>• Learn more about our cookie usage</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website may use third-party services that set their own cookies. These include:
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Google Analytics</h3>
                <p className="text-yellow-800 text-sm">
                  We use Google Analytics to understand how visitors use our website. Google Analytics cookies collect information anonymously.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Social Media</h3>
                <p className="text-blue-800 text-sm">
                  Social media platforms may set cookies when you interact with social sharing buttons or embedded content.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Payment Processors</h3>
                <p className="text-purple-800 text-sm">
                  Payment processors like Stripe may set cookies to ensure secure transactions and fraud prevention.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Impact of Disabling Cookies</h2>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Important Notice</h3>
              <p className="text-orange-800 text-sm mb-3">
                Disabling certain cookies may affect the functionality of our website. Here's what you might experience:
              </p>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• You may need to log in repeatedly</li>
                <li>• Your preferences may not be saved</li>
                <li>• Some features may not work properly</li>
                <li>• The website may load slower</li>
                <li>• You may see less relevant content</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Last Updated:</strong> September 18, 2024<br/>
                <strong>Next Review:</strong> September 18, 2025
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Email:</strong> privacy@point-insight.com</p>
                <p><strong>Phone:</strong> +65-1234-5678</p>
                <p><strong>Address:</strong> POINT INSIGHT INNOVATION PRIVATE LIMITED, Singapore</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}