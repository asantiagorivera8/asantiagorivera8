import Image from "next/image"
import { BookOpen, ShoppingCart, GraduationCap, Award } from "lucide-react"

export const metadata = {
  title: "Nuestras Publicaciones | TechBiz - Libros especializados",
  description:
    "Descubre nuestros libros especializados en ciberseguridad y marketing digital. Conocimiento aplicado para transformar negocios.",
}

const books = [
  {
    id: 1,
    title: "Cybersecurity 360: De los fundamentos a la inteligencia artificial",
    description:
      "Una guía completa que introduce la ciberseguridad desde sus fundamentos hasta su integración con la inteligencia artificial. Ideal para profesionales, estudiantes y empresas que buscan fortalecer su protección digital.",
    coverImage: "/images/cybersecurity-360-book.png",
    amazonLink: "https://a.co/d/j5XsWnm",
    author: "Ángel D. Santiago Rivera",
  },
  {
    id: 2,
    title: "Marketing Digital 360: Herramientas, Técnicas y Tendencias para el Éxito Online",
    description:
      "Aprende a construir un plan de marketing digital integral paso a paso, con herramientas modernas y estrategias basadas en IA. Disponible en español e inglés.",
    coverImage: "/images/marketing-digital-360-book-new.png",
    amazonLink: "https://a.co/d/ccyqaJd",
    author: "Ángel D. Santiago Rivera",
  },
]

export default function LibrosPage() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-gray-800 overflow-hidden"
        style={{
          backgroundImage: "url(/blog-hero-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex justify-center mb-8">
            <BookOpen className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestras Publicaciones</h1>
          <p className="text-xl text-gray-300">
            Conocimiento aplicado en tecnología, ciberseguridad y marketing digital para transformar negocios.
          </p>
        </div>
      </section>

      {/* Sección de Libros */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {books.map((book) => (
              <div key={book.id} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
                {/* Imagen del libro - altura fija para ambas tarjetas */}
                <div className="relative h-72 sm:h-96 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center p-4 sm:p-8">
                  <div className="relative w-48 sm:w-64 h-60 sm:h-80">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={`Portada de ${book.title}`}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Contenido del libro - estructura mejorada para mobile */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Título - altura adaptativa para mobile */}
                  <div className="min-h-[4rem] sm:h-24 flex items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight line-clamp-3 sm:line-clamp-2">
                      {book.title}
                    </h3>
                  </div>

                  {/* Autor - altura fija para ambas tarjetas */}
                  <div className="h-8 flex items-center mb-4 sm:mb-6">
                    <p className="text-blue-400 font-semibold">Por {book.author}</p>
                  </div>

                  {/* Descripción - altura adaptativa para mobile */}
                  <div className="min-h-[6rem] sm:h-32 flex items-start mb-6 sm:mb-8">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{book.description}</p>
                  </div>

                  {/* Botón de compra - siempre al mismo nivel */}
                  <div className="mt-auto">
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary inline-flex items-center justify-center text-base sm:text-lg py-3 sm:py-4 hover:scale-105 transition-transform duration-300"
                    >
                      <ShoppingCart className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      Comprar en Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Reconocimiento */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Award className="h-16 w-16 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestro Compromiso</h2>
          <p className="text-xl text-gray-300 leading-relaxed italic">
            "Cada libro representa nuestro compromiso con la educación, la transformación digital y el crecimiento
            empresarial."
          </p>
        </div>
      </section>

      {/* Llamado a la Acción Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <GraduationCap className="h-16 w-16 text-blue-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Continúa Aprendiendo</h2>
          <p className="text-xl text-blue-100 mb-8">
            Complementa tu lectura con nuestros cursos especializados y recursos adicionales.
          </p>
          <a
            href="https://academy.techbizonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center hover:scale-105 transition-transform duration-300"
          >
            <GraduationCap className="mr-3 h-6 w-6" />
            Explora más recursos en nuestra Academia
          </a>
        </div>
      </section>
    </div>
  )
}
