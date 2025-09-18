import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Go back home
            </Link>
            
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                If you believe this is an error, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
