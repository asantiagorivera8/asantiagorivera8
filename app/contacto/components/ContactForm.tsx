"use client"

import { useState } from "react"
import { submitContactForm } from "../actions"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
    errors?: string[]
  } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Primero validamos los datos
      const result = await submitContactForm(formData)

      if (result.success && result.data) {
        // Enviar email usando EmailJS
        try {
          await emailjs.send(
            "service_techbiz", // Service ID
            "template_contacto", // Template ID diferente para contacto
            {
              from_name: result.data.name,
              from_email: result.data.email,
              phone: result.data.phone,
              subject: result.data.subject,
              message: result.data.message,
              to_email: "asantiago@techbizonline.com",
              reply_to: result.data.email,
              timestamp: new Date().toLocaleString("es-ES", {
                timeZone: "America/New_York",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
            "YOUR_PUBLIC_KEY", // Public Key
          )
          console.log("Email de contacto enviado exitosamente via EmailJS")
        } catch (emailError) {
          console.error("Error enviando email de contacto via EmailJS:", emailError)
        }
      }

      setSubmitResult(result)

      if (result.success) {
        // Limpiar el formulario si fue exitoso
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Error inesperado. Por favor intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
      <form id="contact-form" action={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input-dark w-full"
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-dark w-full"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Teléfono (opcional)
          </label>
          <input type="tel" id="phone" name="phone" className="input-dark w-full" placeholder="+1 (555) 123-4567" />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Asunto *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="input-dark w-full"
            placeholder="¿En qué podemos ayudarte?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="input-dark w-full resize-none"
            placeholder="Cuéntanos más sobre tu proyecto o consulta..."
          ></textarea>
        </div>

        {/* Resultado del envío */}
        {submitResult && (
          <div
            className={`p-4 rounded-lg flex items-start space-x-3 ${
              submitResult.success ? "bg-green-900/50 border border-green-700" : "bg-red-900/50 border border-red-700"
            }`}
          >
            {submitResult.success ? (
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
            )}
            <div>
              <p className={`text-sm ${submitResult.success ? "text-green-300" : "text-red-300"}`}>
                {submitResult.message}
              </p>
              {submitResult.errors && (
                <ul className="mt-2 text-sm text-red-300 list-disc list-inside">
                  {submitResult.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Enviar mensaje
            </>
          )}
        </button>
      </form>
    </div>
  )
}
