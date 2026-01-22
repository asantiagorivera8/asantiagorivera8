"use client"

import { useState, useRef, useEffect } from "react"
import { X, CheckCircle, AlertCircle } from "lucide-react"
import { submitConsultaGratuita } from "@/app/actions/consulta-gratuita"
import emailjs from "@emailjs/browser"

interface ConsultaGratuitaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultaGratuitaModal({ isOpen, onClose }: ConsultaGratuitaModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
    errors?: string[]
  } | null>(null)
  const [customMessage, setCustomMessage] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const storedMessage = sessionStorage.getItem("consultaModalMessage")
      if (storedMessage) {
        setCustomMessage(storedMessage)
        sessionStorage.removeItem("consultaModalMessage")
      } else {
        setCustomMessage(null)
      }
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Primero validamos los datos
      const result = await submitConsultaGratuita(formData)

      if (result.success && result.data) {
        // Enviar email usando EmailJS
        try {
          await emailjs.send(
            "service_techbiz", // Service ID
            "template_consulta", // Template ID
            {
              from_name: result.data.name,
              from_email: result.data.email,
              message: result.data.message,
              to_email: "asantiago@techbizonline.com",
              subject: `🚀 Nueva Consulta Gratuita - ${result.data.name}`,
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
          console.log("Email enviado exitosamente via EmailJS")
        } catch (emailError) {
          console.error("Error enviando email via EmailJS:", emailError)
          // No mostramos error al usuario, solo lo loggeamos
        }
      }

      setSubmitResult(result)
      if (result.success) {
        const form = document.getElementById("consulta-form") as HTMLFormElement
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white" aria-label="Cerrar">
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Consulta Gratuita</h2>

          {customMessage && (
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50 mb-6">
              <p className="text-gray-200 text-sm">{customMessage}</p>
            </div>
          )}

          {submitResult ? (
            <div className="p-4 rounded-lg flex items-start space-x-3 mb-4">
              {submitResult.success ? (
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
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
          ) : (
            <form id="consulta-form" action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Tu email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tu mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></div>
                    Enviando...
                  </>
                ) : (
                  "Enviar Consulta"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
