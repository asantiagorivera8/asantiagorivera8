import Link from "next/link"
import { Users, GraduationCap, Shield, Brain, TrendingUp, BookOpen, UserCheck, Heart, ArrowRight, Rocket } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Consultoría Empresarial",
    description: "Optimización de procesos, tecnología, cumplimiento, operaciones y recursos humanos.",
    href: "/consultoria",
    color: "text-blue-400",
  },
  {
    icon: UserCheck,
    title: "Staffing y Reclutamiento",
    description: "Reclutamiento especializado en tecnología, ciberseguridad y marketing digital.",
    href: "/staffing",
    color: "text-emerald-400",
  },
  {
    icon: Heart,
    title: "Recursos Humanos",
    description: "Consultoría integral en gestión del capital humano y cultura organizacional.",
    href: "/recursos-humanos",
    color: "text-pink-400",
  },
  {
    icon: GraduationCap,
    title: "Academia Online",
    description: "Formación especializada en ciberseguridad, tecnología y negocios.",
    href: "/academia",
    color: "text-green-400",
  },
  {
    icon: Shield,
    title: "Ciberseguridad y Cumplimiento",
    description: "Protección de datos, análisis de vulnerabilidades y cumplimiento normativo.",
    href: "/ciberseguridad",
    color: "text-red-400",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Automatización, asistentes virtuales y análisis de datos avanzado.",
    href: "/inteligencia-artificial",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Estrategias integrales desde redes sociales hasta campañas con IA.",
    href: "/marketing",
    color: "text-yellow-400",
  },
  {
    icon: BookOpen,
    title: "Libros Especializados",
    description: "Publicaciones expertas en ciberseguridad y marketing digital.",
    href: "/libros",
    color: "text-pink-400",
  },
  {
    icon: Rocket,
    title: "TaskHero 360°",
    description: "Plataforma todo-en-uno para profesionales: cotizaciones, facturas, inventario y automatizacion.",
    href: "/taskhero",
    color: "text-orange-400",
  },
]

export default function ServicesPreview() {
  return (
    <section id="servicios" className="py-20 bg-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales para transformar tu empresa y llevarla al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="card-dark group">
                <div className="flex items-center mb-4 md:flex-row flex-col md:text-left text-center">
                  <IconComponent className={`h-8 w-8 ${service.color} md:mr-3 mb-2 md:mb-0`} />
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 flex-grow text-center md:text-left">{service.description}</p>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group justify-center md:justify-start w-full md:w-auto"
                >
                  Ver más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
