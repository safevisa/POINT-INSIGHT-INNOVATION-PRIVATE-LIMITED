import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Check if we're in build time (no DATABASE_URL)
const isBuildTime = !process.env.DATABASE_URL

// Create Prisma client with build-time handling
const createPrismaClient = () => {
  if (isBuildTime) {
    // Return a mock client for build time that won't try to connect
    return new PrismaClient({
      datasources: {
        db: {
          url: 'postgresql://dummy:dummy@dummy:5432/dummy'
        }
      },
      log: []
    })
  }

  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
