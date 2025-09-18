import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { signUpSchema } from "@/lib/validations"
import { addUser, findUserByEmail } from "@/lib/memory-storage"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = signUpSchema.parse(body)

    // Check if user already exists
    const existingUser = findUserByEmail(email)

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user (temporary storage)
    const user = {
      id: `user_${Date.now()}`,
      name,
      email,
      password: hashedPassword,
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days trial
      createdAt: new Date(),
    }

    addUser(user)

    return NextResponse.json(
      { message: "User created successfully", userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
