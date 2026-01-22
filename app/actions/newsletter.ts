"use server"

import { z } from "zod"

// Schema de validación para el newsletter
const newsletterSchema = z.object({
  email: z.string().email("Por favor ingresa un email válido"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const rawData = {
      email: formData.get("email") as string,
    }

    // Validar con Zod
    const validatedData = newsletterSchema.parse(rawData)

    // Sanitizar los datos (prevenir XSS)
    const sanitizedData = {
      email: validatedData.email.trim().toLowerCase(),
    }

    // Aquí integrarías con un servicio de email como SendGrid, Resend, etc.
    // Por ahora simularemos el envío
    console.log("Nueva suscripción al newsletter:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      to: "asantiago@techbizonline.com",
      subject: "Newsletter Subscription",
    })

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En producción, aquí enviarías el email real:
    /*
    await sendEmail({
      to: 'asantiago@techbizonline.com',
      subject: 'Newsletter Subscription',
      html: `
        <h2>Nueva suscripción al newsletter de TechBiz</h2>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p><small>Enviado desde el sitio web de TechBiz</small></p>
      `
    })
    */

    return {
      success: true,
      message: "¡Gracias por suscribirte! Te mantendremos informado con las últimas novedades.",
    }
  } catch (error) {
    console.error("Error al suscribir al newsletter:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Por favor verifica que el email sea válido.",
        errors: error.errors.map((err) => err.message),
      }
    }

    return {
      success: false,
      message: "Hubo un error al procesar tu suscripción. Por favor intenta nuevamente.",
    }
  }
}
