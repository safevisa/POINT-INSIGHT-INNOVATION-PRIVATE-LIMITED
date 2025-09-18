import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create a demo user
  const hashedPassword = await bcrypt.hash('password123', 12)
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@point-insight.com' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'demo@point-insight.com',
      password: hashedPassword,
      companyName: 'POINT INSIGHT INNOVATION PRIVATE LIMITED',
      phoneNumber: '+1-555-0123',
      address: '123 Innovation Street',
      city: 'Singapore',
      country: 'Singapore',
      language: 'en',
      timezone: 'Asia/Singapore',
      subscriptionStatus: 'trial',
      subscriptionPlan: 'free',
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    },
  })

  console.log('✅ Demo user created:', user.email)

  // Create demo machines
  const machines = await Promise.all([
    prisma.machine.upsert({
      where: { machineId: 'VM001' },
      update: {},
      create: {
        userId: user.id,
        name: 'Office Vending Machine',
        location: 'Building A, Floor 2',
        machineId: 'VM001',
        status: 'active',
        lastSeen: new Date(),
      },
    }),
    prisma.machine.upsert({
      where: { machineId: 'VM002' },
      update: {},
      create: {
        userId: user.id,
        name: 'Lobby Snack Station',
        location: 'Main Lobby',
        machineId: 'VM002',
        status: 'active',
        lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      },
    }),
    prisma.machine.upsert({
      where: { machineId: 'VM003' },
      update: {},
      create: {
        userId: user.id,
        name: 'Cafeteria Drinks',
        location: 'Cafeteria',
        machineId: 'VM003',
        status: 'maintenance',
        lastSeen: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      },
    }),
  ])

  console.log('✅ Demo machines created:', machines.length)

  // Create demo orders
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        userId: user.id,
        machineId: machines[0].id,
        amount: 3.50,
        currency: 'USD',
        status: 'completed',
        items: JSON.stringify([
          { name: 'Coca Cola', price: 1.50, quantity: 1 },
          { name: 'Chips', price: 2.00, quantity: 1 },
        ]),
      },
    }),
    prisma.order.create({
      data: {
        userId: user.id,
        machineId: machines[1].id,
        amount: 5.25,
        currency: 'USD',
        status: 'completed',
        items: JSON.stringify([
          { name: 'Sandwich', price: 4.50, quantity: 1 },
          { name: 'Water', price: 0.75, quantity: 1 },
        ]),
      },
    }),
    prisma.order.create({
      data: {
        userId: user.id,
        machineId: machines[2].id,
        amount: 2.00,
        currency: 'USD',
        status: 'pending',
        items: JSON.stringify([
          { name: 'Coffee', price: 2.00, quantity: 1 },
        ]),
      },
    }),
  ])

  console.log('✅ Demo orders created:', orders.length)

  // Create demo payments
  await Promise.all([
    prisma.payment.create({
      data: {
        userId: user.id,
        orderId: orders[0].id,
        amount: 3.50,
        currency: 'USD',
        status: 'succeeded',
        stripePaymentId: 'pi_demo_001',
      },
    }),
    prisma.payment.create({
      data: {
        userId: user.id,
        orderId: orders[1].id,
        amount: 5.25,
        currency: 'USD',
        status: 'succeeded',
        stripePaymentId: 'pi_demo_002',
      },
    }),
  ])

  console.log('✅ Demo payments created')

  console.log('🎉 Database seeded successfully!')
  console.log('')
  console.log('Demo credentials:')
  console.log('Email: demo@point-insight.com')
  console.log('Password: password123')
  console.log('')
  console.log('You can now start the development server with: npm run dev')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
