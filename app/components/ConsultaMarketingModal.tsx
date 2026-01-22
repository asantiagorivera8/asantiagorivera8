"use client"

import { useState, useRef, useEffect } from "react"
import { X, CheckCircle, AlertCircle, TrendingUp } from "lucide-react"
import { submitConsultaMarketing } from "@/app/actions/consulta-marketing"

interface ConsultaMarketingModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan?: string
}

export default function ConsultaMarketingModal({ isOpen, onClose, selectedPlan }: ConsultaMarketingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
    errors?: string[]
  } | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
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
      const result = await submitConsultaMarketing(formData)
      setSubmitResult(result)
      if (result.success) {
        const form = document.getElementById("consulta-marketing-form") as HTMLFormElement
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
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white" aria-label="Cerrar">
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-yellow-400 mr-3" />
            <h2 className="text-xl font-bold text-white">Consulta sobre Marketing Digital</h2>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-700/50 mb-6">
            <p className="text-gray-200 text-sm">
              Cuéntanos sobre tu empresa y objetivos para diseñar una estrategia de marketing digital personalizada que
              impulse tu crecimiento.
            </p>
          </div>

          {submitResult ? (
            <div className="p-4 rounded-lg flex items-start space-x-3 mb-4 bg-gray-700">
              {submitResult.success ? (
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
              )}
              <div>
                <p className="text-sm text-gray-300">{submitResult.message}</p>
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
            <form id="consulta-marketing-form" action={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                    placeholder="Nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre de la empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-1">
                  Tipo de negocio *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Selecciona tu tipo de negocio</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="servicios">Servicios Profesionales</option>
                  <option value="saas">SaaS/Software</option>
                  <option value="retail">Retail Físico</option>
                  <option value="restaurante">Restaurante/Gastronomía</option>
                  <option value="salud">Salud/Bienestar</option>
                  <option value="educacion">Educación</option>
                  <option value="inmobiliaria">Inmobiliaria</option>
                  <option value="manufactura">Manufactura</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="planInterest" className="block text-sm font-medium text-gray-300 mb-1">
                  Plan de interés *
                </label>
                <select
                  id="planInterest"
                  name="planInterest"
                  required
                  defaultValue={selectedPlan || ""}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Selecciona el plan</option>
                  <option value="basico">Plan Básico</option>
                  <option value="intermedio">Plan Intermedio</option>
                  <option value="avanzado">Plan Avanzado</option>
                  <option value="personalizado">Plan Personalizado</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentMarketing" className="block text-sm font-medium text-gray-300 mb-1">
                  Situación actual de marketing *
                </label>
                <select
                  id="currentMarketing"
                  name="currentMarketing"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Selecciona tu situación</option>
                  <option value="sin-marketing">No tenemos marketing digital</option>
                  <option value="basico">Marketing básico (redes sociales)</option>
                  <option value="intermedio">Marketing intermedio (redes + web)</option>
                  <option value="avanzado">Marketing avanzado (campañas pagadas)</option>
                  <option value="agencia">Trabajamos con otra agencia</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Objetivos y necesidades específicas *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm resize-none"
                  placeholder="Ej: Queremos aumentar ventas online, mejorar presencia en redes sociales, generar más leads, lanzar nuevos productos..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></div>
                    Enviando consulta...
                  </>
                ) : (
                  <>
                    <TrendingUp className="mr-2 h-4 w-4 inline-block" />
                    Solicitar Información
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
