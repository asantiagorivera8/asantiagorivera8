import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { blogPostsData } from "@/lib/blog-data"

const latestPosts = blogPostsData.slice(0, 3)

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Últimas Publicaciones</h2>
          <p className="text-xl text-gray-300">Mantente al día con las últimas tendencias y consejos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <article key={index} className="card-dark">
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-300 mb-4 flex-grow">{post.summary}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
              >
                Leer más
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
