import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const machineId = params.id

    // Verify the machine belongs to the user
    const machine = await prisma.machine.findFirst({
      where: {
        id: machineId,
        userId: session.user.id
      }
    })

    if (!machine) {
      return NextResponse.json({ error: "Machine not found" }, { status: 404 })
    }

    await prisma.machine.delete({
      where: { id: machineId }
    })

    return NextResponse.json({ message: "Machine deleted successfully" })
  } catch (error) {
    console.error("Machine deletion error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
