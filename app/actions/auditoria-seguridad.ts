"use server"

import { z } from "zod"
import { sendEmail, createAuditoriaEmailTemplate } from "@/app/lib/email-service"

// Schema de validación para el formulario de auditoría de seguridad
const auditoriaSchema = z.object({
  name: z.string().min(2, "Por favor ingresa un nombre válido").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor ingresa un email válido"),
  company: z.string().min(2, "Por favor ingresa el nombre de tu empresa").max(100, "El nombre es demasiado largo"),
  employees: z.string().min(1, "Por favor selecciona el tamaño de tu empresa"),
  description: z
    .string()
    .min(10, "Por favor describe brevemente tus necesidades de seguridad")
    .max(500, "La descripción es demasiado larga"),
})

export async function submitAuditoriaSeguridad(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      employees: formData.get("employees") as string,
      description: formData.get("description") as string,
    }

    // Validar con Zod
    const validatedData = auditoriaSchema.parse(rawData)

    // Sanitizar los datos (prevenir XSS)
    const sanitizedData = {
      name: validatedData.name.trim().replace(/<[^>]*>/g, ""),
      email: validatedData.email.trim().toLowerCase(),
      company: validatedData.company.trim().replace(/<[^>]*>/g, ""),
      employees: validatedData.employees.trim(),
      description: validatedData.description.trim().replace(/<[^>]*>/g, ""),
    }

    // Enviar email real usando Resend
    const emailResult = await sendEmail({
      to: "asantiago@techbizonline.com",
      subject: `🛡️ URGENTE: Solicitud Auditoría de Seguridad - ${sanitizedData.company}`,
      html: createAuditoriaEmailTemplate(sanitizedData),
    })

    if (!emailResult.success) {
      console.error("Error enviando email de auditoría:", emailResult.error)
    }

    // Log para debugging
    console.log("Nueva solicitud de auditoría de seguridad:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      emailSent: emailResult.success,
    })

    return {
      success: true,
      message:
        "Tu solicitud de auditoría ha sido enviada correctamente. Te contactaremos pronto para programar la evaluación.",
    }
  } catch (error) {
    console.error("Error al enviar solicitud de auditoría de seguridad:", error)

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
