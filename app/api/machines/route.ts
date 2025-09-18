import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { machineSchema } from "@/lib/validations"

// Check if we're in build time
const isBuildTime = !process.env.DATABASE_URL

export async function GET() {
  try {
    // Skip processing during build time
    if (isBuildTime) {
      return NextResponse.json({ error: "Service unavailable during build" }, { status: 503 })
    }

    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const machines = await prisma.machine.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(machines)
  } catch (error) {
    console.error("Machines fetch error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Skip processing during build time
    if (isBuildTime) {
      return NextResponse.json({ error: "Service unavailable during build" }, { status: 503 })
    }

    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const data = machineSchema.parse(body)

    // Check if machine ID already exists
    const existingMachine = await prisma.machine.findUnique({
      where: { machineId: data.machineId }
    })

    if (existingMachine) {
      return NextResponse.json(
        { error: "Machine ID already exists" },
        { status: 400 }
      )
    }

    const machine = await prisma.machine.create({
      data: {
        userId: session.user.id,
        name: data.name,
        location: data.location,
        machineId: data.machineId,
      }
    })

    return NextResponse.json({ 
      message: "Machine added successfully",
      machineId: machine.id 
    })
  } catch (error) {
    console.error("Machine creation error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
