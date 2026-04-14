"use client"

import { useState } from "react"
import { submitDemoRequest } from "@/app/actions/asset-manager"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"

export default function DemoRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      empresa: formData.get("empresa") as string,
      telefono: formData.get("telefono") as string,
      pais: formData.get("pais") as string,
    }

    const result = await submitDemoRequest(data)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.error || "Error al enviar la solicitud")
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
        <p className="text-gray-600 mb-4">
          Hemos recibido tu solicitud para la demostración gratuita de 30 días de Asset Manager.
        </p>
        <p className="text-gray-600">
          Nuestro equipo se pondrá en contacto contigo pronto en el correo <strong>{}</strong> para activar tu acceso.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicita Tu Demo Gratuito</h3>
      <p className="text-gray-600 mb-6">
        Acceso ilimitado por 30 días. Después: <strong>$24.99/mes</strong>
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="nombre" className="text-gray-700 block mb-2">
            Nombre Completo *
          </Label>
          <Input
            id="nombre"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="bg-gray-50 border-gray-300 text-gray-900 h-11"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 block mb-2">
            Correo Electrónico *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="bg-gray-50 border-gray-300 text-gray-900 h-11"
          />
        </div>

        <div>
          <Label htmlFor="empresa" className="text-gray-700 block mb-2">
            Nombre de la Empresa *
          </Label>
          <Input
            id="empresa"
            name="empresa"
            required
            placeholder="Tu empresa"
            className="bg-gray-50 border-gray-300 text-gray-900 h-11"
          />
        </div>

        <div>
          <Label htmlFor="telefono" className="text-gray-700 block mb-2">
            Teléfono
          </Label>
          <Input
            id="telefono"
            name="telefono"
            placeholder="+1 (555) 123-4567"
            className="bg-gray-50 border-gray-300 text-gray-900 h-11"
          />
        </div>

        <div>
          <Label htmlFor="pais" className="text-gray-700 block mb-2">
            País
          </Label>
          <Input
            id="pais"
            name="pais"
            placeholder="Tu país"
            className="bg-gray-50 border-gray-300 text-gray-900 h-11"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 text-base"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Demo Gratuito"
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Tu información es segura. No compartimos datos con terceros.
        </p>
      </form>
    </div>
  )
}
