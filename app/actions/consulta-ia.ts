"use server"

import { z } from "zod"
import { sendEmail, createConsultaIAEmailTemplate } from "@/app/lib/email-service"

// Schema de validación para el formulario de consulta de IA
const consultaIASchema = z.object({
  name: z.string().min(2, "Por favor ingresa un nombre válido").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor ingresa un email válido"),
  company: z.string().min(2, "Por favor ingresa el nombre de tu empresa").max(100, "El nombre es demasiado largo"),
  industry: z.string().min(1, "Por favor selecciona tu industria"),
  iaInterest: z.string().min(1, "Por favor selecciona el área de IA que te interesa"),
  description: z
    .string()
    .min(10, "Por favor describe brevemente tu proyecto o necesidad")
    .max(500, "La descripción es demasiado larga"),
})

export async function submitConsultaIA(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      industry: formData.get("industry") as string,
      iaInterest: formData.get("iaInterest") as string,
      description: formData.get("description") as string,
    }

    // Validar con Zod
    const validatedData = consultaIASchema.parse(rawData)

    // Sanitizar los datos (prevenir XSS)
    const sanitizedData = {
      name: validatedData.name.trim().replace(/<[^>]*>/g, ""),
      email: validatedData.email.trim().toLowerCase(),
      company: validatedData.company.trim().replace(/<[^>]*>/g, ""),
      industry: validatedData.industry.trim(),
      iaInterest: validatedData.iaInterest.trim(),
      description: validatedData.description.trim().replace(/<[^>]*>/g, ""),
    }

    // Enviar email usando Resend
    const emailResult = await sendEmail({
      to: "asantiago@techbizonline.com",
      subject: `🧠 Nueva Consulta de IA - ${sanitizedData.company}`,
      html: createConsultaIAEmailTemplate(sanitizedData),
    })

    if (!emailResult.success) {
      console.error("Error enviando email de consulta IA:", emailResult.error)
    }

    // Log para debugging
    console.log("Nueva consulta de Inteligencia Artificial:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      emailSent: emailResult.success,
    })

    return {
      success: true,
      message:
        "Tu consulta sobre IA ha sido enviada correctamente. Te contactaremos pronto para discutir las posibilidades para tu empresa.",
    }
  } catch (error) {
    console.error("Error al enviar consulta de IA:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Por favor verifica los datos ingresados.",
        errors: error.errors.map((err) => err.message),
      }
    }

    return {
      success: false,
      message: "Hubo un error al enviar tu consulta. Por favor intenta nuevamente.",
    }
  }
}
