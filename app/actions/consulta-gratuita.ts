"use server"

import { z } from "zod"
import { sendEmail, createConsultaEmailTemplate } from "@/app/lib/email-service"

// Schema de validación para el formulario de consulta gratuita
const consultaSchema = z.object({
  name: z.string().min(2, "Por favor ingresa un nombre válido").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor ingresa un email válido"),
  message: z
    .string()
    .min(10, "Por favor ingresa un mensaje de al menos 10 caracteres")
    .max(1000, "El mensaje es demasiado largo"),
})

export async function submitConsultaGratuita(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Validar con Zod
    const validatedData = consultaSchema.parse(rawData)

    // Sanitizar los datos (prevenir XSS)
    const sanitizedData = {
      name: validatedData.name.trim().replace(/<[^>]*>/g, ""),
      email: validatedData.email.trim().toLowerCase(),
      message: validatedData.message.trim().replace(/<[^>]*>/g, ""),
    }

    // Enviar email usando Resend
    const emailResult = await sendEmail({
      to: "asantiago@techbizonline.com",
      subject: `🚀 Nueva Consulta Gratuita - ${sanitizedData.name}`,
      html: createConsultaEmailTemplate(sanitizedData),
    })

    if (!emailResult.success) {
      console.error("Error enviando email:", emailResult.error)
      // Aún así devolvemos éxito al usuario para no mostrar errores técnicos
    }

    // Log para debugging
    console.log("Nueva solicitud de consulta gratuita:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      emailSent: emailResult.success,
    })

    return {
      success: true,
      message: "Tu consulta ha sido enviada correctamente. Te contactaremos pronto.",
      data: sanitizedData, // Incluimos los datos para usar en el modal
    }
  } catch (error) {
    console.error("Error al enviar solicitud de consulta gratuita:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Por favor verifica los datos ingresados.",
        errors: error.errors.map((err) => err.message),
      }
    }

    return {
      success: false,
      message: "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.",
    }
  }
}
