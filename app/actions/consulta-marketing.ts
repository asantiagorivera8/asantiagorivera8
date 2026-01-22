"use server"

import { z } from "zod"
import { sendEmail, createConsultaMarketingEmailTemplate } from "@/app/lib/email-service"

// Schema de validación para el formulario de consulta de marketing
const consultaMarketingSchema = z.object({
  name: z.string().min(2, "Por favor ingresa un nombre válido").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor ingresa un email válido"),
  company: z.string().min(2, "Por favor ingresa el nombre de tu empresa").max(100, "El nombre es demasiado largo"),
  businessType: z.string().min(1, "Por favor selecciona el tipo de negocio"),
  planInterest: z.string().min(1, "Por favor selecciona el plan que te interesa"),
  currentMarketing: z.string().min(1, "Por favor indica tu situación actual"),
  description: z
    .string()
    .min(10, "Por favor describe brevemente tus objetivos de marketing")
    .max(500, "La descripción es demasiado larga"),
})

export async function submitConsultaMarketing(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      businessType: formData.get("businessType") as string,
      planInterest: formData.get("planInterest") as string,
      currentMarketing: formData.get("currentMarketing") as string,
      description: formData.get("description") as string,
    }

    // Validar con Zod
    const validatedData = consultaMarketingSchema.parse(rawData)

    // Sanitizar los datos (prevenir XSS)
    const sanitizedData = {
      name: validatedData.name.trim().replace(/<[^>]*>/g, ""),
      email: validatedData.email.trim().toLowerCase(),
      company: validatedData.company.trim().replace(/<[^>]*>/g, ""),
      businessType: validatedData.businessType.trim(),
      planInterest: validatedData.planInterest.trim(),
      currentMarketing: validatedData.currentMarketing.trim(),
      description: validatedData.description.trim().replace(/<[^>]*>/g, ""),
    }

    // Enviar email usando Resend
    const emailResult = await sendEmail({
      to: "asantiago@techbizonline.com",
      subject: `📈 Nueva Consulta de Marketing - ${sanitizedData.company}`,
      html: createConsultaMarketingEmailTemplate(sanitizedData),
    })

    if (!emailResult.success) {
      console.error("Error enviando email de consulta marketing:", emailResult.error)
    }

    // Log para debugging
    console.log("Nueva consulta de Marketing Digital:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      emailSent: emailResult.success,
    })

    return {
      success: true,
      message:
        "Tu consulta sobre marketing digital ha sido enviada correctamente. Te contactaremos pronto para discutir la estrategia ideal para tu empresa.",
    }
  } catch (error) {
    console.error("Error al enviar consulta de marketing:", error)

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
