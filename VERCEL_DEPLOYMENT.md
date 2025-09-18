# Vercel Deployment Guide

## Required Environment Variables

Set these environment variables in your Vercel dashboard:

### Database
- `DATABASE_URL`: PostgreSQL connection string
  - Example: `postgresql://username:password@host:port/database`
  - You can use Vercel Postgres, Neon, or any PostgreSQL provider

### NextAuth.js
- `NEXTAUTH_URL`: Your app URL (e.g., `https://point-insight.vercel.app`)
- `NEXTAUTH_SECRET`: Random secret string for JWT signing (generate with: `openssl rand -base64 32`)

### Stripe (Optional for testing)
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret

### App Configuration
- `NEXT_PUBLIC_APP_URL`: Your app URL
- `NEXT_PUBLIC_APP_NAME`: "POINT INSIGHT INNOVATION"
- `NEXT_PUBLIC_DEFAULT_LOCALE`: "en"
- `NEXT_PUBLIC_SUPPORTED_LOCALES`: "en,zh,ja,ko"

### Build Configuration
- `SKIP_ENV_VALIDATION`: "1"

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

### Common Issues

1. **ERR_CONNECTION_CLOSED Error**
   - Check if the domain is correctly configured in Vercel
   - Verify that all environment variables are set
   - Ensure the build completed successfully

2. **Build Failures**
   - Check that all environment variables are set
   - Verify `DATABASE_URL` is correctly formatted
   - Ensure `NEXTAUTH_SECRET` is set

3. **Database Connection Issues**
   - Verify your PostgreSQL credentials
   - Check if the database is accessible from Vercel
   - Ensure the connection string is correct

4. **Domain Issues**
   - If using custom domain, check DNS settings
   - Verify domain is properly configured in Vercel
   - Check SSL certificate status

### Step-by-Step Fix for ERR_CONNECTION_CLOSED

1. **Check Vercel Dashboard**
   - Go to your Vercel project dashboard
   - Check the "Deployments" tab for any failed builds
   - Look for error messages in the build logs

2. **Verify Environment Variables**
   - Go to Settings > Environment Variables
   - Ensure all required variables are set
   - Check that `NEXTAUTH_URL` matches your actual domain

3. **Redeploy**
   - If environment variables were missing, redeploy the project
   - Go to Deployments > Redeploy

4. **Check Domain Configuration**
   - If using custom domain, verify DNS settings
   - Ensure domain is properly configured in Vercel
   - Check that SSL certificate is valid

### Quick Fix Commands

```bash
# Generate a new NEXTAUTH_SECRET
openssl rand -base64 32

# Check if your domain is accessible
curl -I https://point-insight.com

# Test Vercel deployment URL
curl -I https://your-app.vercel.app
```
