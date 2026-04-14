"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface DemoRequest {
  nombre: string
  email: string
  empresa: string
  telefono: string
  pais: string
}

export async function submitDemoRequest(data: DemoRequest) {
  try {
    // Send email notification to admin
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "TechBiz <noreply@techbiz.com>",
      to: "asantiago@techbizonline.com",
      subject: `Nueva Solicitud de Demo - Asset Manager: ${data.nombre}`,
      html: `
        <h2>Nueva Solicitud de Demo Recibida</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.empresa}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>País:</strong> ${data.pais}</p>
        <hr>
        <p><em>Período de prueba: 30 días gratis</em></p>
        <p><em>Precio después de la prueba: $24.99/mes</em></p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "TechBiz <noreply@techbiz.com>",
      to: data.email,
      subject: "Tu Demo Gratuita de Asset Manager by TechBiz - 30 Días",
      html: `
        <h2>¡Bienvenido a Asset Manager by TechBiz!</h2>
        <p>Hola ${data.nombre},</p>
        <p>Gracias por solicitar tu demostración gratuita de <strong>Asset Manager by TechBiz</strong>.</p>
        
        <h3>Detalles de tu solicitud:</h3>
        <ul>
          <li>Período de prueba: <strong>30 días gratis</strong></li>
          <li>Precio después de la prueba: <strong>$24.99/mes</strong></li>
        </ul>
        
        <p>Nuestro equipo se pondrá en contacto contigo pronto para activar tu acceso y ayudarte a comenzar.</p>
        
        <h3>¿Qué puedes hacer con Asset Manager?</h3>
        <ul>
          <li>✓ Tracking completo de hardware y licencias</li>
          <li>✓ Historial de cambios automático</li>
          <li>✓ Reportes y exportación a CSV</li>
        </ul>
        
        <p>Si tienes alguna pregunta, no dudes en responder a este correo.</p>
        <p>¡Esperamos que disfrutes de Asset Manager!</p>
        <br>
        <p>Saludos,<br><strong>Equipo de TechBiz</strong></p>
      `,
    })

    return { success: true, message: "Solicitud de demo enviada exitosamente" }
  } catch (error) {
    console.error("Demo request error:", error)
    return {
      success: false,
      error: "Error al enviar la solicitud. Por favor intenta de nuevo.",
    }
  }
}
