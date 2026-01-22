import ServicePageLayout from "../components/ServicePageLayout"
import {
  Heart,
  BookOpen,
  Settings,
  Award,
  Users,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Brain,
  Lightbulb,
} from "lucide-react"
import ConsultaGratuitaButton from "@/app/components/ConsultaGratuitaButton"

export const metadata = {
  title: "Recursos Humanos | TechBiz - Gestión integral del capital humano",
  description:
    "Consultoría especializada en recursos humanos, gestión del talento, cultura organizacional y desarrollo del capital humano para empresas modernas.",
  openGraph: {
    title: "Recursos Humanos | TechBiz",
    description:
      "Consultoría especializada en recursos humanos y gestión del talento para el crecimiento empresarial sostenible.",
    type: "website",
    images: [
      {
        url: "/business-meeting-success.png",
        width: 1200,
        height: 630,
        alt: "Recursos Humanos TechBiz",
      },
    ],
  },
}

export default function RecursosHumanosPage() {
  const hrServices = [
    {
      icon: Heart,
      title: "Gestión del Bienestar y Cultura Organizacional",
      description: "Desarrollamos programas de bienestar, engagement y fortalecimiento de la cultura empresarial.",
    },
    {
      icon: BookOpen,
      title: "Capacitación y Desarrollo del Talento",
      description: "Diseñamos planes de formación, programas de liderazgo y rutas de crecimiento profesional.",
    },
    {
      icon: Settings,
      title: "Optimización de Procesos de RRHH",
      description: "Automatizamos y mejoramos procesos de nómina, evaluaciones de desempeño y gestión administrativa.",
    },
    {
      icon: Award,
      title: "Estrategias de Retención y Compensación",
      description: "Desarrollamos esquemas de compensación competitivos y estrategias para retener el mejor talento.",
    },
    {
      icon: Users,
      title: "Consultoría en Transformación Organizacional",
      description: "Acompañamos procesos de cambio, reestructuración y adaptación a nuevos modelos de trabajo.",
    },
    {
      icon: Brain,
      title: "Análisis de Clima Laboral y Engagement",
      description: "Medimos y mejoramos la satisfacción, compromiso y productividad de los equipos de trabajo.",
    },
  ]

  const benefits = [
    "Mejora del clima laboral y satisfacción del personal",
    "Reducción de la rotación de personal hasta en un 40%",
    "Aumento de la productividad y engagement del equipo",
    "Optimización de procesos administrativos de RRHH",
    "Desarrollo de programas de liderazgo efectivos",
    "Implementación de culturas organizacionales saludables",
    "Estrategias de compensación competitivas y justas",
    "Programas de bienestar integral para empleados",
    "Gestión eficiente del cambio organizacional",
    "Evaluaciones de desempeño objetivas y constructivas",
    "Planes de carrera y desarrollo profesional personalizados",
    "Compliance laboral y mejores prácticas en RRHH",
  ]

  const hrProcess = [
    {
      number: "01",
      title: "Diagnóstico Organizacional",
      description: "Evaluamos la cultura actual, procesos de RRHH y necesidades específicas de tu organización.",
    },
    {
      number: "02",
      title: "Diseño de Estrategia",
      description: "Creamos un plan integral de gestión humana alineado con los objetivos de negocio.",
    },
    {
      number: "03",
      title: "Implementación de Mejoras",
      description: "Ejecutamos las iniciativas de RRHH con acompañamiento continuo y capacitación del equipo.",
    },
    {
      number: "04",
      title: "Medición y Optimización",
      description: "Evaluamos resultados, ajustamos estrategias y establecemos procesos de mejora continua.",
    },
  ]

  const serviceTypes = [
    {
      name: "Consultoría Puntual",
      description: "Solución específica para un desafío concreto de recursos humanos",
      features: [
        "Diagnóstico focalizado en área específica",
        "Plan de acción detallado",
        "Implementación de 1-2 meses",
        "Capacitación básica al equipo",
      ],
    },
    {
      name: "Transformación Integral de RRHH",
      description: "Rediseño completo de la gestión del capital humano en tu organización",
      features: [
        "Diagnóstico 360° de RRHH",
        "Estrategia integral de gestión humana",
        "Implementación de 3-6 meses",
        "Capacitación completa al equipo",
        "Seguimiento trimestral por 1 año",
      ],
      highlighted: true,
    },
    {
      name: "Acompañamiento Continuo",
      description: "Asesoría permanente en gestión de recursos humanos",
      features: [
        "Consultor de RRHH dedicado",
        "Reuniones mensuales de seguimiento",
        "Ajustes estratégicos continuos",
        "Informes de progreso detallados",
        "Acceso prioritario al equipo",
      ],
    },
  ]

  const specializations = [
    {
      icon: Heart,
      title: "Bienestar Laboral",
      description: "Programas de wellness, work-life balance y salud mental",
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Sistemas de evaluación, feedback y mejora del desempeño",
    },
    {
      icon: Lightbulb,
      title: "Innovación en RRHH",
      description: "Implementación de tecnologías HR y metodologías ágiles",
    },
    {
      icon: Users,
      title: "Desarrollo Organizacional",
      description: "Cambio cultural, liderazgo y transformación empresarial",
    },
  ]

  return (
    <ServicePageLayout
      title="Recursos Humanos"
      subtitle="Optimizamos la gestión del capital humano para crear organizaciones más fuertes, productivas y sostenibles."
      imageUrl="/business-meeting-success.png"
      imageAlt="Recursos Humanos"
    >
      <div className="space-y-16">
        {/* Introducción */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            En TechBiz entendemos que las personas son el corazón de toda organización exitosa. Nuestra consultoría en
            recursos humanos se enfoca en crear ecosistemas organizacionales donde el talento pueda florecer, innovar y
            contribuir al crecimiento sostenible de tu empresa.
          </p>
          <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">¿Por qué elegir TechBiz para Recursos Humanos?</h3>
            <p className="text-gray-300">
              Combinamos experiencia en gestión del talento con conocimiento profundo de las tendencias modernas del
              trabajo. No solo optimizamos procesos, creamos culturas organizacionales que impulsan resultados
              excepcionales y bienestar integral.
            </p>
          </div>
        </div>

        {/* Servicios de RRHH */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestros Servicios de Recursos Humanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hrServices.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <service.icon className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Beneficios de Nuestra Consultoría en RRHH</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestro Proceso de Consultoría</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hrProcess.map((step, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
              >
                <div className="text-3xl font-bold text-purple-400 mb-3">{step.number}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tipos de Servicios */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestras Modalidades de Consultoría</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-6 border ${
                  type.highlighted ? "border-purple-500 shadow-lg shadow-purple-900/20" : "border-gray-700"
                } flex flex-col h-full`}
              >
                <h3 className={`text-xl font-bold mb-3 ${type.highlighted ? "text-purple-400" : "text-white"}`}>
                  {type.name}
                </h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="flex-grow">
                  <h4 className="text-sm uppercase text-gray-400 mb-3">Incluye:</h4>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle
                          className={`h-4 w-4 ${
                            type.highlighted ? "text-purple-400" : "text-gray-400"
                          } mt-1 mr-2 flex-shrink-0`}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4">
                  <ConsultaGratuitaButton
                    className={type.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}
                    customMessage={`Me interesa el servicio de "${type.name}" en Recursos Humanos. Quisiera más información sobre cómo pueden ayudarme a optimizar la gestión del capital humano en mi empresa.`}
                  >
                    Solicitar información
                  </ConsultaGratuitaButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de Especialización */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Áreas de Especialización</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
                <p className="text-gray-300 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección destacada de Gabriela */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Liderazgo Experto en Recursos Humanos</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                <strong>El equipo de TechBiz posee amplia experiencia en gestión de talento</strong>, cultura organizacional y coaching empresarial para
                transformar la gestión del capital humano en tu empresa.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Heart className="h-12 w-12 text-pink-300 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Cultura Organizacional</h3>
                  <p className="text-purple-200 text-sm">Desarrollo de culturas saludables y productivas</p>
                </div>
                <div>
                  <BookOpen className="h-12 w-12 text-pink-300 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Desarrollo del Talento</h3>
                  <p className="text-purple-200 text-sm">Programas de crecimiento y coaching empresarial</p>
                </div>
                <div>
                  <Settings className="h-12 w-12 text-pink-300 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Optimización Operacional</h3>
                  <p className="text-purple-200 text-sm">Integración eficiente de procesos humanos y tecnológicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Llamado a la Acción Final */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Listo para transformar tu gestión de RRHH?</h2>
          <p className="text-lg text-purple-100 mb-6">
            Cuéntanos sobre tus desafíos en recursos humanos y te ayudaremos a crear una estrategia integral para
            optimizar la gestión del capital humano en tu organización.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ConsultaGratuitaButton
              className="btn-primary inline-flex items-center justify-center"
              customMessage="Necesito ayuda con la gestión de recursos humanos en mi empresa. Me gustaría discutir cómo optimizar la gestión del capital humano y mejorar la cultura organizacional."
            >
              <Clock className="mr-2 h-5 w-5" />
              Solicitar Consulta de RRHH
            </ConsultaGratuitaButton>
            <a href="/contacto" className="btn-secondary inline-flex items-center justify-center">
              <Target className="mr-2 h-5 w-5" />
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  )
}
