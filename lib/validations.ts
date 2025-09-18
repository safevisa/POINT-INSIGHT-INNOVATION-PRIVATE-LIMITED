import { z } from "zod"

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  language: z.string().optional(),
  timezone: z.string().optional(),
})

export const cardSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be 16 digits"),
  cardHolder: z.string().min(2, "Card holder name is required"),
  expiryMonth: z.number().min(1).max(12, "Invalid expiry month"),
  expiryYear: z.number().min(new Date().getFullYear(), "Card has expired"),
  cvv: z.string().min(3).max(4, "Invalid CVV"),
  isDefault: z.boolean().optional(),
})

export const machineSchema = z.object({
  name: z.string().min(2, "Machine name is required"),
  location: z.string().min(2, "Location is required"),
  machineId: z.string().min(3, "Machine ID is required"),
})

export type SignUpInput = z.infer<typeof signUpSchema>
export type SignInInput = z.infer<typeof signInSchema>
export type ProfileInput = z.infer<typeof profileSchema>
export type CardInput = z.infer<typeof cardSchema>
export type MachineInput = z.infer<typeof machineSchema>
