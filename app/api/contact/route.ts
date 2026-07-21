import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      )
    }

    // Configure email content
    const subject = `Nouvelle demande de contact - ${service || "Général"}`

    const htmlEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Heaven Management</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Nouvelle demande de contact</p>
        </div>

        <div style="background: #f9f9f9; padding: 30px; border: 1px solid #eee;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Nom:</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                <a href="mailto:${email}" style="color: #667eea;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold;">Service:</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">${service || "Non spécifié"}</td>
            </tr>
          </table>
        </div>

        <div style="padding: 30px; border: 1px solid #eee; border-top: none; background: white;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #666; line-height: 1.8; font-size: 15px;">${message.replace(/\n/g, "<br>")}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #eee; border-top: none;">
          <p style="color: #999; font-size: 12px; margin: 0;">
            Cet email a été envoyé depuis le formulaire de contact du site Heaven Management.
          </p>
          <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
            📅 ${new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    `

    // Send email using Resend
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Heaven Management <noreply@heaven-management.com>",
          to: process.env.RESEND_TO_EMAIL || "contact@heaven-management.com",
          subject,
          replyTo: email,
          html: htmlEmail,
        })

        console.log("Email sent successfully via Resend")
      } catch (resendError) {
        console.error("Resend error:", resendError)
        // Continue anyway - don't block the user if email fails
      }
    } else {
      // Log for development if Resend is not configured
      console.log("Contact form submission (Resend not configured):", {
        to: "contact@heaven-management.com",
        subject,
        data: { name, email, service, message },
      })
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    )

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    )
  }
}
