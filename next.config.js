/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app', 'point-insight.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  env: {
    SKIP_ENV_VALIDATION: '1',
  },
  // Remove i18n config as it conflicts with App Router
  // We'll handle i18n manually with react-i18next
}

module.exports = nextConfig
