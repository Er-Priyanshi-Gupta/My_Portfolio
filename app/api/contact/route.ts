import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the contact form submission
    console.log("✨ New contact form submission from Priyanshi's portfolio:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
    })

    // Here you would typically:
    // 1. Save to database (MongoDB, PostgreSQL, Supabase, etc.)
    // 2. Send email notification using services like:
    //    - Resend (recommended for Next.js)
    //    - SendGrid
    //    - Nodemailer with SMTP
    // 3. Add to CRM or notification system
    // 4. Send auto-reply to the user

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        message: "Thank you for your message! I'll get back to you within 24 hours. 🚀",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("❌ Contact form error:", error)
    return NextResponse.json(
      {
        error: "Something went wrong. Please try again later or contact me directly via email.",
        success: false,
      },
      { status: 500 },
    )
  }
}
