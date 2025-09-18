/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app', 'point-insight.com'],
  },
  i18n: {
    locales: ['en', 'zh', 'zh-TW'],
    defaultLocale: 'en',
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  env: {
    SKIP_ENV_VALIDATION: '1',
  },
}

module.exports = nextConfig
