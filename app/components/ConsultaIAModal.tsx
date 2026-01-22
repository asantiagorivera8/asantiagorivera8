"use client"

import { useState, useRef, useEffect } from "react"
import { X, CheckCircle, AlertCircle, Brain } from "lucide-react"
import { submitConsultaIA } from "@/app/actions/consulta-ia"

interface ConsultaIAModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultaIAModal({ isOpen, onClose }: ConsultaIAModalProps) {
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
      const result = await submitConsultaIA(formData)
      setSubmitResult(result)
      if (result.success) {
        const form = document.getElementById("consulta-ia-form") as HTMLFormElement
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
            <Brain className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-xl font-bold text-white">Consulta sobre Inteligencia Artificial</h2>
          </div>

          <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-700/50 mb-6">
            <p className="text-gray-200 text-sm">
              Cuéntanos sobre tu proyecto y te ayudaremos a identificar las mejores soluciones de IA para transformar tu
              negocio y automatizar tus procesos.
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
            <form id="consulta-ia-form" action={handleSubmit} className="space-y-4">
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
                <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">
                  Industria *
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Selecciona tu industria</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="salud">Salud</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="retail">Retail/E-commerce</option>
                  <option value="manufactura">Manufactura</option>
                  <option value="educacion">Educación</option>
                  <option value="logistica">Logística</option>
                  <option value="inmobiliaria">Inmobiliaria</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="otra">Otra</option>
                </select>
              </div>

              <div>
                <label htmlFor="iaInterest" className="block text-sm font-medium text-gray-300 mb-1">
                  Área de IA que te interesa *
                </label>
                <select
                  id="iaInterest"
                  name="iaInterest"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Selecciona el área</option>
                  <option value="automatizacion">Automatización de Procesos</option>
                  <option value="chatbots">Chatbots y Asistentes Virtuales</option>
                  <option value="analisis-datos">Análisis Predictivo de Datos</option>
                  <option value="machine-learning">Machine Learning Personalizado</option>
                  <option value="integracion">Integración de IA en Sistemas</option>
                  <option value="multiple">Múltiples áreas</option>
                  <option value="no-seguro">No estoy seguro</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Describe tu proyecto o necesidad *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-md px-3 py-2 text-sm resize-none"
                  placeholder="Ej: Queremos automatizar el proceso de atención al cliente, implementar análisis predictivo de ventas, crear un chatbot para nuestro sitio web..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></div>
                    Enviando consulta...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4 inline-block" />
                    Enviar Consulta sobre IA
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
