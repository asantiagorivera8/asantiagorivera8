"use client"
import { useState } from "react"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function Newsletter() {
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
      const result = await subscribeToNewsletter(formData)
      setSubmitResult(result)

      if (result.success) {
        // Limpiar el formulario si fue exitoso
        const form = document.getElementById("newsletter-form") as HTMLFormElement
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
    <section id="newsletter" className="py-20 bg-gray-800 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mx-auto mb-4 sm:mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mantente Actualizado</h2>
        <p className="text-xl text-gray-300 mb-8">
          Recibe consejos semanales sobre negocio, tecnología y seguridad directamente en tu bandeja de entrada.
        </p>

        {submitResult ? (
          <div
            className={`p-4 rounded-lg flex items-center justify-center space-x-3 max-w-md mx-auto ${
              submitResult.success ? "bg-green-900/50 border border-green-700" : "bg-red-900/50 border border-red-700"
            }`}
          >
            {submitResult.success ? (
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
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
          <form id="newsletter-form" action={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                className="input-dark flex-1"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></div>
                    Suscribiendo...
                  </>
                ) : (
                  "Suscribirse"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
