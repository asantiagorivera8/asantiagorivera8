import type { Metadata } from "next"
import { Star, Quote, Building2, Calendar } from "lucide-react"
import { getApprovedReviews } from "@/app/actions/reviews"
import ReviewForm from "./ReviewForm"

export const metadata: Metadata = {
  title: "Reseñas de Clientes | TechBiz",
  description:
    "Lee las opiniones de nuestros clientes sobre los servicios de TechBiz. Consultoría tecnológica, ciberseguridad, marketing digital e inteligencia artificial.",
  openGraph: {
    title: "Reseñas de Clientes | TechBiz",
    description: "Descubre lo que nuestros clientes dicen sobre TechBiz",
    type: "website",
  },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-600 text-gray-600"
          }`}
        />
      ))}
    </div>
  )
}

function ReviewCard({
  review,
}: {
  review: {
    id: string
    nombre: string
    empresa?: string
    calificacion: number
    titulo: string
    contenido: string
    created_at: string
  }
}) {
  const date = new Date(review.created_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-gray-800 rounded-xl shadow-md border border-gray-700 p-4 md:p-6 hover:shadow-lg hover:border-gray-600 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0">
            {review.nombre.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-100 text-sm md:text-base truncate">{review.nombre}</h3>
            {review.empresa && (
              <p className="text-xs md:text-sm text-gray-400 flex items-center gap-1 truncate">
                <Building2 className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{review.empresa}</span>
              </p>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 ml-13 sm:ml-0">
          <StarRating rating={review.calificacion} />
        </div>
      </div>

      <h4 className="font-semibold text-gray-200 mb-2 text-sm md:text-base">{review.titulo}</h4>

      <div className="relative">
        <Quote className="absolute -top-2 -left-1 w-6 h-6 md:w-8 md:h-8 text-blue-900" />
        <p className="text-gray-400 pl-5 md:pl-6 leading-relaxed text-sm md:text-base">{review.contenido}</p>
      </div>

      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700 flex items-center text-xs md:text-sm text-gray-500">
        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
        {date}
      </div>
    </div>
  )
}

export default async function ReviewsPage() {
  const { data: reviews } = await getApprovedReviews()

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (acc: number, r: { calificacion: number }) => acc + r.calificacion,
            0
          ) / reviews.length
        ).toFixed(1)
      : "0"

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-100">
              Lo Que Dicen Nuestros Clientes
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
              Descubre las experiencias de empresas que han transformado sus
              negocios con TechBiz
            </p>

            {reviews.length > 0 && (
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">{averageRating}</div>
                  <div className="flex justify-center mt-1">
                    <StarRating rating={Math.round(Number(averageRating))} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    Calificacion Promedio
                  </div>
                </div>
                <div className="w-px h-12 md:h-16 bg-gray-700" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">{reviews.length}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    Reseñas Verificadas
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Mobile: Form first, then reviews */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Review Form - Shows first on mobile */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <ReviewForm />
            </div>
          </div>

          {/* Reviews List - Shows second on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-6 md:mb-8">
              Todas las Reseñas
            </h2>

            {reviews.length > 0 ? (
              <div className="grid gap-4 md:gap-6">
                {reviews.map(
                  (review: {
                    id: string
                    nombre: string
                    empresa?: string
                    calificacion: number
                    titulo: string
                    contenido: string
                    created_at: string
                  }) => (
                    <ReviewCard key={review.id} review={review} />
                  )
                )}
              </div>
            ) : (
              <div className="text-center py-10 md:py-16 bg-gray-800 rounded-xl border border-gray-700">
                <Quote className="w-12 md:w-16 h-12 md:h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-2">
                  Aún no hay reseñas
                </h3>
                <p className="text-gray-500 text-sm md:text-base px-4">
                  Sé el primero en compartir tu experiencia con TechBiz
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
