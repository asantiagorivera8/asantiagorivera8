"use server"

import { z } from "zod"
import { sendEmail, createContactEmailTemplate } from "@/app/lib/email-service"

// Schema de validación para el formulario de contacto
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor ingresa un email válido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres").max(200, "El asunto es demasiado largo"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje es demasiado largo"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validar con Zod
    const validatedData = contactSchema.parse(rawData)

    // Sanitizar los datos (prevenir XSS)
    const sanitizedData = {
      name: validatedData.name.trim().replace(/<[^>]*>/g, ""),
      email: validatedData.email.trim().toLowerCase(),
      phone: validatedData.phone?.trim().replace(/<[^>]*>/g, "") || "",
      subject: validatedData.subject.trim().replace(/<[^>]*>/g, ""),
      message: validatedData.message.trim().replace(/<[^>]*>/g, ""),
    }

    // Enviar email usando Resend
    const emailResult = await sendEmail({
      to: "asantiago@techbizonline.com",
      subject: `📧 Contacto: ${sanitizedData.subject}`,
      html: createContactEmailTemplate(sanitizedData),
    })

    if (!emailResult.success) {
      console.error("Error enviando email de contacto:", emailResult.error)
    }

    // Log para debugging
    console.log("Nuevo mensaje de contacto:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      emailSent: emailResult.success,
    })

    return {
      success: true,
      message: "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
      data: sanitizedData, // Incluimos los datos para usar en el formulario
    }
  } catch (error) {
    console.error("Error al enviar mensaje de contacto:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Por favor verifica los datos ingresados.",
        errors: error.errors.map((err) => err.message),
      }
    }

    return {
      success: false,
      message: "Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.",
    }
  }
}
