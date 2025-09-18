#!/bin/bash

echo "🚀 Starting Unmanned Retail SaaS Platform..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Please create it from .env.example"
    echo "📝 Copy the example file and update with your configuration:"
    echo "   cp .env.example .env.local"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Generate Prisma client
echo "🗄️ Generating Prisma client..."
npx prisma generate

# Start development server
echo "🌟 Starting development server..."
npm run dev
