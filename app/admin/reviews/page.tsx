"use client"

import React from "react"

import { useState, useEffect } from "react"
import {
  Star,
  Check,
  X,
  Trash2,
  Shield,
  LogIn,
  Eye,
  EyeOff,
  Loader2,
  Building2,
  Mail,
  Calendar,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  getAllReviews,
  updateReviewStatus,
  deleteReview,
} from "@/app/actions/reviews"

const ADMIN_PASSWORD = "TechBiz2024Admin!"

interface Review {
  id: string
  nombre: string
  email: string
  empresa?: string
  calificacion: number
  titulo: string
  contenido: string
  aprobado: boolean
  created_at: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

export default function AdminReviewsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all")
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem("adminAuth")
    if (stored === "true") {
      setIsAuthenticated(true)
      loadReviews()
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem("adminAuth", "true")
      setAuthError("")
      loadReviews()
    } else {
      setAuthError("Contrasena incorrecta")
    }
  }

  const loadReviews = async () => {
    setIsLoading(true)
    const result = await getAllReviews()
    if (result.success) {
      setReviews(result.data as Review[])
    }
    setIsLoading(false)
  }

  const handleApprove = async (id: string) => {
    setActionLoading(id)
    const result = await updateReviewStatus(id, true)
    if (result.success) {
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, aprobado: true } : r))
      )
    }
    setActionLoading(null)
  }

  const handleReject = async (id: string) => {
    setActionLoading(id)
    const result = await updateReviewStatus(id, false)
    if (result.success) {
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, aprobado: false } : r))
      )
    }
    setActionLoading(null)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar esta reseña?")) return
    setActionLoading(id)
    const result = await deleteReview(id)
    if (result.success) {
      setReviews((prev) => prev.filter((r) => r.id !== id))
    }
    setActionLoading(null)
  }

  const filteredReviews = reviews.filter((r) => {
    if (filter === "pending") return !r.aprobado
    if (filter === "approved") return r.aprobado
    return true
  })

  const pendingCount = reviews.filter((r) => !r.aprobado).length
  const approvedCount = reviews.filter((r) => r.aprobado).length

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Panel de Administracion
            </h1>
            <p className="text-gray-600 mt-2">
              Ingresa la contrasena para acceder
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password" className="text-gray-700">
                Contrasena
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa la contrasena"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {authError && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {authError}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Acceder
            </Button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Moderación de Reseñas
              </h1>
              <p className="text-gray-600">
                Aprueba o rechaza las reseñas de clientes
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                sessionStorage.removeItem("adminAuth")
                setIsAuthenticated(false)
              }}
            >
              Cerrar Sesion
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-gray-900">
              {reviews.length}
            </div>
            <div className="text-gray-600">Total Reseñas</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-yellow-600">
              {pendingCount}
            </div>
            <div className="text-gray-600">Pendientes</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-green-600">
              {approvedCount}
            </div>
            <div className="text-gray-600">Aprobadas</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-blue-600 text-white" : ""}
          >
            <Filter className="w-4 h-4 mr-2" />
            Todas ({reviews.length})
          </Button>
          <Button
            variant={filter === "pending" ? "default" : "outline"}
            onClick={() => setFilter("pending")}
            className={filter === "pending" ? "bg-yellow-600 text-white" : ""}
          >
            Pendientes ({pendingCount})
          </Button>
          <Button
            variant={filter === "approved" ? "default" : "outline"}
            onClick={() => setFilter("approved")}
            className={filter === "approved" ? "bg-green-600 text-white" : ""}
          >
            Aprobadas ({approvedCount})
          </Button>
        </div>

        {/* Reviews List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <p className="text-gray-500">No hay reseñas para mostrar</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => {
              const date = new Date(review.created_at).toLocaleDateString(
                "es-ES",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )

              return (
                <div
                  key={review.id}
                  className={`bg-white rounded-xl shadow-sm border p-6 ${
                    review.aprobado ? "border-green-200" : "border-yellow-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                          {review.nombre.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {review.nombre}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {review.email}
                            </span>
                            {review.empresa && (
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3 h-3" />
                                {review.empresa}
                              </span>
                            )}
                          </div>
                        </div>
                        <StarRating rating={review.calificacion} />
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            review.aprobado
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {review.aprobado ? "Aprobada" : "Pendiente"}
                        </span>
                      </div>

                      <h4 className="font-semibold text-gray-800 mb-2">
                        {review.titulo}
                      </h4>
                      <p className="text-gray-600">{review.contenido}</p>

                      <div className="mt-3 flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {date}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {!review.aprobado && (
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleApprove(review.id)}
                          disabled={actionLoading === review.id}
                        >
                          {actionLoading === review.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <Check className="w-4 h-4 mr-1" />
                              Aprobar
                            </>
                          )}
                        </Button>
                      )}
                      {review.aprobado && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                          onClick={() => handleReject(review.id)}
                          disabled={actionLoading === review.id}
                        >
                          {actionLoading === review.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <X className="w-4 h-4 mr-1" />
                              Ocultar
                            </>
                          )}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent"
                        onClick={() => handleDelete(review.id)}
                        disabled={actionLoading === review.id}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
