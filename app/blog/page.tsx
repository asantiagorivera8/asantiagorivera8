import Link from "next/link"
import Image from "next/image"
import { blogPostsData } from "@/lib/blog-data"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog de TechBiz | Artículos sobre Tecnología y Negocios",
  description: "Mantente al día con las últimas tendencias, análisis y consejos de expertos de TechBiz.",
  openGraph: {
    title: "Blog de TechBiz | Artículos sobre Tecnología y Negocios",
    description: "Mantente al día con las últimas tendencias, análisis y consejos de expertos de TechBiz.",
    type: "website",
    images: [
      {
        url: "/techbiz-social-preview.png",
        width: 512,
        height: 512,
        alt: "Blog de TechBiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de TechBiz | Artículos sobre Tecnología y Negocios",
    description: "Mantente al día con las últimas tendencias, análisis y consejos de expertos de TechBiz.",
    images: ["/techbiz-social-preview.png"],
  },
}

export default function BlogPage() {
  // Schema.org para la página de blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de TechBiz",
    description: "Artículos sobre tecnología, negocios, ciberseguridad y marketing digital",
    url: "https://techbizonline.com/blog",
    publisher: {
      "@type": "Organization",
      name: "TechBiz",
      logo: {
        "@type": "ImageObject",
        url: "https://techbizonline.com/techbiz-social-preview.png",
      },
    },
    blogPost: blogPostsData.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `https://techbizonline.com/blog/${post.slug}`,
    })),
  }

  return (
    <div className="bg-gray-900 text-gray-100">
      <section
        className="relative py-20 md:py-32 bg-gray-800 overflow-hidden min-h-[400px]"
        style={{
          backgroundImage: "url(/blog-hero-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog de TechBiz</h1>
          <p className="text-xl text-gray-300">
            Conocimiento, tendencias y análisis sobre tecnología, negocios y ciberseguridad.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPostsData.map((post) => (
              <article key={post.slug} className="card-dark flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block mb-4">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.imageAlt}
                    width={400}
                    height={200}
                    className="rounded-t-lg object-cover w-full h-48 group-hover:opacity-80 transition-opacity"
                    loading="lazy"
                  />
                </Link>
                <div className="p-1 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-sm text-blue-400 hover:text-blue-300 uppercase font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{post.summary}</p>
                  <div className="text-xs text-gray-500 mb-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-3 w-3 mr-2" />
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-2" />
                      {post.author}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group mt-auto"
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    </div>
  )
}
