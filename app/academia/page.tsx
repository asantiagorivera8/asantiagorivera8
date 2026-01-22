import { GraduationCap, Clock, Award, Users, BookOpen, Rocket } from "lucide-react"
import ConsultaGratuitaButton from "@/app/components/ConsultaGratuitaButton"

export const metadata = {
  title: "TechBiz Academy | Formación en ciberseguridad, tecnología y negocios",
  description:
    "Formación de calidad en ciberseguridad, tecnología y negocios. Cursos actualizados, hands-on y orientados a resultados.",
}

const benefits = [
  {
    icon: Clock,
    title: "Acceso 24/7",
    description: "Estudia a tu ritmo, desde cualquier lugar y en cualquier momento. Contenido siempre disponible.",
  },
  {
    icon: Award,
    title: "Certificados digitales",
    description: "Obtén certificaciones verificables que validan tus conocimientos y mejoran tu perfil profesional.",
  },
  {
    icon: Users,
    title: "Profesores expertos",
    description: "Aprende de profesionales con experiencia real en la industria y conocimientos actualizados.",
  },
  {
    icon: BookOpen,
    title: "Contenido práctico y actualizado",
    description: "Materiales constantemente renovados que reflejan las últimas tendencias y tecnologías del mercado.",
  },
]

export default function AcademiaPage() {
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
            <GraduationCap className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TechBiz Academy</h1>
          <p className="text-xl text-gray-300 mb-8">Formación de calidad en ciberseguridad, tecnología y negocios.</p>
          <a
            href="https://academy.techbizonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center hover:scale-105 transition-transform duration-300"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Ir a la Academia
          </a>
        </div>
      </section>

      {/* Sección introductoria */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-300 leading-relaxed">
            Nuestra academia online está diseñada para profesionales, emprendedores y estudiantes que desean adquirir
            competencias reales en ciberseguridad, inteligencia artificial, marketing digital y más. Ofrecemos cursos
            actualizados, hands-on, y orientados a resultados.
          </p>
        </div>
      </section>

      {/* Beneficios destacados */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beneficios de nuestra Academia</h2>
            <p className="text-xl text-gray-300">
              Descubre por qué miles de profesionales confían en TechBiz Academy para su formación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-gray-900 rounded-xl p-8 shadow-xl text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Llamado a la acción principal */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comienza tu formación hoy mismo</h2>
          <p className="text-xl text-blue-100 mb-8">
            Accede a nuestra plataforma educativa y da el primer paso hacia tu crecimiento profesional.
          </p>
          <a
            href="https://academy.techbizonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-5 inline-flex items-center text-xl hover:scale-105 transition-transform duration-300"
          >
            <GraduationCap className="mr-3 h-6 w-6" />
            Ir a la Academia
          </a>
        </div>
      </section>

      {/* Sección adicional: Crea tu propia academia */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
                <Rocket className="h-24 w-24 text-blue-400" />
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Quieres lanzar tu propia academia online?
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  En TechBiz también ayudamos a empresas, instituciones educativas y creadores a desarrollar sus propias
                  plataformas educativas con identidad propia, contenido profesional y herramientas modernas.
                </p>
                <ConsultaGratuitaButton
                  className="btn-secondary inline-flex items-center hover:scale-105 transition-transform duration-300"
                  customMessage="¿Quieres crear tu propia academia online? Cuéntanos sobre tu proyecto educativo y te ayudaremos a hacerlo realidad con las mejores herramientas y estrategias."
                >
                  Contáctanos y comencemos
                </ConsultaGratuitaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta gratuita */}
      <section className="py-16 md:py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">¿Tienes dudas sobre nuestros cursos?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Agenda una consulta gratuita con nuestros asesores educativos y descubre el programa ideal para ti.
          </p>
          <ConsultaGratuitaButton className="btn-primary">Solicitar asesoría educativa</ConsultaGratuitaButton>
        </div>
      </section>
    </div>
  )
}
