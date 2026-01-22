"use client"

import React from "react"

import { useState } from "react"
import { Star, Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitReview } from "@/app/actions/reviews"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (rating === 0) {
      setError("Por favor selecciona una calificacion")
      return
    }

    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      empresa: formData.get("empresa") as string,
      calificacion: rating,
      titulo: formData.get("titulo") as string,
      contenido: formData.get("contenido") as string,
    }

    const result = await submitReview(data)

    setIsSubmitting(false)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.error || "Error al enviar la resena")
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 md:p-8 text-center">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-green-400" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2">
          Gracias por tu reseña
        </h3>
        <p className="text-gray-400 text-sm md:text-base">
          Tu opinion es muy importante para nosotros. La reseña sera revisada y
          publicada pronto.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2">
        Comparte tu Experiencia
      </h3>
      <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
        Tu opinion nos ayuda a mejorar y ayuda a otros a conocernos
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        {/* Rating */}
        <div>
          <Label className="text-gray-300 mb-2 block text-sm md:text-base">Calificación *</Label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="p-0.5 md:p-1 transition-transform hover:scale-110 active:scale-95"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`w-7 h-7 md:w-8 md:h-8 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-600 text-gray-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <Label htmlFor="nombre" className="text-gray-300 text-sm md:text-base">
            Nombre Completo *
          </Label>
          <Input
            id="nombre"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm md:text-base h-10 md:h-11 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-gray-300 text-sm md:text-base">
            Correo Electrónico *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm md:text-base h-10 md:h-11 focus:border-blue-500 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            No será publicado, solo para verificación
          </p>
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="empresa" className="text-gray-300 text-sm md:text-base">
            Empresa (Opcional)
          </Label>
          <Input
            id="empresa"
            name="empresa"
            placeholder="Nombre de tu empresa"
            className="mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm md:text-base h-10 md:h-11 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Title */}
        <div>
          <Label htmlFor="titulo" className="text-gray-300 text-sm md:text-base">
            Título de la Reseña *
          </Label>
          <Input
            id="titulo"
            name="titulo"
            required
            placeholder="Resume tu experiencia"
            className="mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm md:text-base h-10 md:h-11 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Content */}
        <div>
          <Label htmlFor="contenido" className="text-gray-300 text-sm md:text-base">
            Tu Reseña *
          </Label>
          <Textarea
            id="contenido"
            name="contenido"
            required
            placeholder="Cuéntanos sobre tu experiencia trabajando con TechBiz..."
            rows={4}
            className="mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm md:text-base focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {error && (
          <div className="text-red-400 text-xs md:text-sm bg-red-900/30 border border-red-800 p-2 md:p-3 rounded-lg">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm md:text-base h-10 md:h-11"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Enviar Reseña
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
