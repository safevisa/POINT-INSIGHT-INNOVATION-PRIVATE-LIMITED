# Vercel Deployment Guide

## Required Environment Variables

Set these environment variables in your Vercel dashboard:

### Database
- `DATABASE_URL`: PostgreSQL connection string
  - Example: `postgresql://username:password@host:port/database`
  - You can use Vercel Postgres, Neon, or any PostgreSQL provider

### NextAuth.js
- `NEXTAUTH_URL`: Your app URL (e.g., `https://your-app.vercel.app`)
- `NEXTAUTH_SECRET`: Random secret string for JWT signing

### Stripe (Optional for testing)
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret

### App Configuration
- `NEXT_PUBLIC_APP_URL`: Your app URL
- `NEXT_PUBLIC_APP_NAME`: "POINT INSIGHT INNOVATION"
- `NEXT_PUBLIC_DEFAULT_LOCALE`: "en"
- `NEXT_PUBLIC_SUPPORTED_LOCALES`: "en,zh,ja,ko"

## Database Setup

1. Create a PostgreSQL database (Vercel Postgres recommended)
2. Copy the connection string to `DATABASE_URL`
3. Run database migration after deployment

## Deployment Steps

1. Connect your GitHub repository to Vercel
2. Set all required environment variables
3. Deploy - the build process will automatically:
   - Install dependencies
   - Generate Prisma client
   - Build the Next.js app

## Post-Deployment

After successful deployment, you may need to:
1. Run database migrations: `npx prisma db push`
2. Seed initial data if needed

## Troubleshooting

- If Prisma errors occur, ensure `DATABASE_URL` is set correctly
- If build fails, check that all environment variables are set
- For database connection issues, verify your PostgreSQL credentials
