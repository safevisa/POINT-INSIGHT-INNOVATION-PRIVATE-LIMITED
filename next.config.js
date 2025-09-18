/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en', 'zh', 'zh-TW'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
