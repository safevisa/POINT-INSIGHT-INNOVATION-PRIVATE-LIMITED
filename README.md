# Unmanned Retail SaaS Platform

A complete SaaS solution for automated retail operations by POINT INSIGHT INNOVATION PRIVATE LIMITED.

## Features

- **User Authentication**: Secure registration and login system
- **Profile Management**: Complete user profile with company information
- **Payment Methods**: Credit card management and billing
- **Machine Management**: Connect and manage vending machines
- **Dashboard**: Real-time analytics and monitoring
- **Multi-language Support**: English, Chinese (Simplified & Traditional)
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe integration
- **Internationalization**: react-i18next

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unmanned-retail-saas
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/unmanned_retail_saas"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Email
EMAIL_SERVER_HOST="smtp.point-insight.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="noreply@point-insight.com"
EMAIL_SERVER_PASSWORD="your-email-password"
EMAIL_FROM="noreply@point-insight.com"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Unmanned Retail SaaS"
```

5. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── machines/          # Machine management
│   ├── profile/           # User profile
│   └── cards/             # Payment methods
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema
└── public/                # Static assets
```

## Key Features

### User Management
- Secure user registration and authentication
- Profile management with company details
- Multi-language support (EN, ZH, ZH-TW)

### Machine Management
- Add and manage vending machines
- Real-time status monitoring
- Location-based organization

### Payment Integration
- Secure credit card storage
- Stripe payment processing
- Multiple payment methods support

### Dashboard
- Real-time analytics
- Revenue tracking
- Machine status overview
- Recent orders display

## API Endpoints

- `POST /api/auth/signup` - User registration
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile
- `GET /api/cards` - Get user's payment methods
- `POST /api/cards` - Add payment method
- `DELETE /api/cards/[id]` - Remove payment method
- `GET /api/machines` - Get user's machines
- `POST /api/machines` - Add machine
- `DELETE /api/machines/[id]` - Remove machine
- `GET /api/orders` - Get user's orders

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2024 POINT INSIGHT INNOVATION PRIVATE LIMITED. All rights reserved.

## Support

For support, email support@point-insight.com
