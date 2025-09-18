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

    const cardId = params.id

    // Verify the card belongs to the user
    const card = await prisma.card.findFirst({
      where: {
        id: cardId,
        userId: session.user.id
      }
    })

    if (!card) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 })
    }

    await prisma.card.delete({
      where: { id: cardId }
    })

    return NextResponse.json({ message: "Card deleted successfully" })
  } catch (error) {
    console.error("Card deletion error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
