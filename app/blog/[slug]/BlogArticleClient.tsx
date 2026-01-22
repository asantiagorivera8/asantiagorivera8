"use client"

import { blogPostsData } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, Tag, ArrowLeft, Heart, BookOpen } from "lucide-react"
import ShareButton from "@/app/components/ShareButton"

interface BlogArticlePageProps {
  params: { slug: string }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = params
  const post = blogPostsData.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // URL completa del artículo
  const articleUrl = `https://techbizonline.com/blog/${post.slug}`

  // Generar schema.org para el artículo
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: post.imageUrl,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TechBiz",
      logo: {
        "@type": "ImageObject",
        url: "https://techbizonline.com/logo-techbiz.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header del artículo */}
      <header className="relative py-12 md:py-20 bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver al Blog
            </Link>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center text-gray-300 text-sm space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-blue-400" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2 text-blue-400" />
                <span className="bg-blue-600/20 px-2 py-1 rounded text-blue-300 text-xs font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Botón de compartir */}
            <div className="flex items-center">
              <ShareButton title={post.title} url={articleUrl} description={post.summary} />
            </div>
          </div>
        </div>
      </header>

      {/* Contenido del artículo */}
      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div
              className="article-content text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Botón de compartir al final del artículo */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-gray-400">
                  <Heart className="w-5 h-5 mr-2 text-red-400" />
                  <span>¿Te gustó este artículo?</span>
                </div>
                <ShareButton title={post.title} url={articleUrl} description={post.summary} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Artículos relacionados */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPostsData
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-2">{relatedPost.summary}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(relatedPost.date).toLocaleDateString("es-ES")}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Te gustó este artículo?</h3>
          <p className="text-blue-100 mb-8 text-lg">
            Compártelo con tu red profesional y suscríbete para más contenido especializado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ShareButton title={post.title} url={articleUrl} description={post.summary} />
            <Link href="/#newsletter" className="btn-secondary">
              Suscribirse al Newsletter
            </Link>
            <Link href="/blog" className="btn-primary">
              Ver más artículos
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Estilos específicos para el contenido del artículo */}
      <style jsx global>{`
        .article-content {
          font-size: 1.125rem;
          line-height: 1.75;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
          color: #d1d5db;
          font-size: 1.125rem;
          line-height: 1.75;
        }
        
        .article-content h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #374151;
        }
        
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #60a5fa;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .article-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        
        .article-content li {
          margin-bottom: 0.75rem;
          color: #d1d5db;
          font-size: 1.125rem;
          line-height: 1.75;
          list-style-type: disc;
        }
        
        .article-content strong {
          color: #ffffff;
          font-weight: 600;
        }
        
        .article-content em {
          color: #93c5fd;
          font-style: italic;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .article-content {
            font-size: 1rem;
          }
          
          .article-content p {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }
          
          .article-content h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
          }
          
          .article-content h3 {
            font-size: 1.25rem;
            margin-top: 1.5rem;
          }
          
          .article-content li {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
