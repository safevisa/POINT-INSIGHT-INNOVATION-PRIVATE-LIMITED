#!/bin/bash

echo "🔧 Setting up environment variables..."

# Create .env.local file
cat > .env.local << EOF
# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="demo-secret-key-for-development-only"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Unmanned Retail SaaS"

# Database (Optional - using in-memory storage for demo)
# DATABASE_URL="postgresql://username:password@localhost:5432/unmanned_retail_saas"

# Stripe (Optional - for payment features)
# STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
# STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
# STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Email (Optional)
# EMAIL_SERVER_HOST="smtp.point-insight.com"
# EMAIL_SERVER_PORT=587
# EMAIL_SERVER_USER="noreply@point-insight.com"
# EMAIL_SERVER_PASSWORD="your-email-password"
# EMAIL_FROM="noreply@point-insight.com"
EOF

echo "✅ Environment variables created in .env.local"
echo "🚀 You can now start the development server with: npm run dev"
