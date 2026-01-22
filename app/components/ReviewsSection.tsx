import Link from "next/link"
import { Star, Quote, ArrowRight, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getApprovedReviews } from "@/app/actions/reviews"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-600 text-gray-600"
          }`}
        />
      ))}
    </div>
  )
}

export default async function ReviewsSection() {
  const { data: reviews } = await getApprovedReviews(6)

  if (reviews.length === 0) {
    return null
  }

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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Descubre por que empresas de toda Latinoamerica confian en TechBiz
            para su transformacion digital
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-blue-400">
                {averageRating}
              </span>
              <StarRating rating={Math.round(Number(averageRating))} />
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-gray-400">
              <span className="font-semibold text-gray-100">
                {reviews.length}+
              </span>{" "}
              reseñas verificadas
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews
            .slice(0, 6)
            .map(
              (review: {
                id: string
                nombre: string
                empresa?: string
                calificacion: number
                titulo: string
                contenido: string
              }) => (
                <div
                  key={review.id}
                  className="bg-gray-800 rounded-xl shadow-md border border-gray-700 p-6 hover:shadow-lg hover:border-gray-600 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                        {review.nombre.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-100">
                          {review.nombre}
                        </h4>
                        {review.empresa && (
                          <p className="text-sm text-gray-400 flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {review.empresa}
                          </p>
                        )}
                      </div>
                    </div>
                    <StarRating rating={review.calificacion} />
                  </div>

                  <h5 className="font-semibold text-gray-200 mb-2">
                    {review.titulo}
                  </h5>

                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-blue-900" />
                    <p className="text-gray-400 text-sm pl-5 line-clamp-3">
                      {review.contenido}
                    </p>
                  </div>
                </div>
              )
            )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/reviews">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Ver Todas las Reseñas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
