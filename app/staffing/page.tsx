import ServicePageLayout from "../components/ServicePageLayout"
import {
  Users,
  Target,
  Clock,
  TrendingUp,
  CheckCircle,
  UserCheck,
  Briefcase,
  Search,
  Shield,
  Brain,
  Zap,
} from "lucide-react"
import ConsultaGratuitaButton from "@/app/components/ConsultaGratuitaButton"

export const metadata = {
  title: "Staffing y Reclutamiento | TechBiz - Talento especializado para tu empresa",
  description:
    "Servicios de staffing y reclutamiento especializado en tecnología, ciberseguridad, marketing digital y consultoría. Conectamos empresas con el mejor talento.",
  openGraph: {
    title: "Staffing y Reclutamiento | TechBiz",
    description:
      "Servicios de staffing y reclutamiento especializado para conectar empresas con el mejor talento en tecnología.",
    type: "website",
    images: [
      {
        url: "/business-meeting-success.png",
        width: 1200,
        height: 630,
        alt: "Staffing y Reclutamiento TechBiz",
      },
    ],
  },
}

export default function StaffingPage() {
  const staffingServices = [
    {
      icon: UserCheck,
      title: "Reclutamiento Especializado en Tecnología",
      description: "Encontramos desarrolladores, ingenieros de software, especialistas en IA y profesionales tech.",
    },
    {
      icon: Shield,
      title: "Talento en Ciberseguridad",
      description: "Analistas de seguridad, especialistas en cumplimiento, auditores y consultores en ciberseguridad.",
    },
    {
      icon: TrendingUp,
      title: "Profesionales de Marketing Digital",
      description: "Especialistas en SEO, SEM, redes sociales, content marketing y growth hacking.",
    },
    {
      icon: Briefcase,
      title: "Consultores y Gerentes de Proyecto",
      description: "Líderes experimentados para dirigir transformaciones digitales y proyectos estratégicos.",
    },
    {
      icon: Users,
      title: "Equipos Multidisciplinarios",
      description:
        "Formamos equipos completos que combinan tecnología, negocio y estrategia para proyectos integrales.",
    },
    {
      icon: Search,
      title: "Executive Search",
      description: "Búsqueda de ejecutivos y líderes senior para posiciones estratégicas y de alta dirección.",
    },
  ]

  const benefits = [
    "Acceso a una red exclusiva de profesionales especializados",
    "Proceso de selección riguroso con evaluaciones técnicas y culturales",
    "Reducción del tiempo de contratación hasta en un 60%",
    "Garantía de reemplazo en los primeros 90 días",
    "Evaluación cultural y técnica personalizada",
    "Soporte continuo durante el proceso de integración",
    "Flexibilidad en modalidades: tiempo completo, parcial o por proyecto",
    "Seguimiento post-contratación para asegurar el éxito",
    "Base de datos actualizada de candidatos pre-evaluados",
    "Metodologías de assessment técnico y comportamental",
    "Negociación de condiciones y expectativas",
    "Onboarding estructurado para nuevos talentos",
  ]

  const staffingProcess = [
    {
      number: "01",
      title: "Análisis de Necesidades",
      description: "Evaluamos tus requerimientos específicos, cultura empresarial y objetivos del rol.",
    },
    {
      number: "02",
      title: "Búsqueda Estratégica",
      description: "Utilizamos nuestra red y metodologías avanzadas para identificar candidatos ideales.",
    },
    {
      number: "03",
      title: "Evaluación Integral",
      description: "Realizamos entrevistas técnicas, evaluaciones de competencias y análisis cultural.",
    },
    {
      number: "04",
      title: "Presentación y Selección",
      description: "Te presentamos los mejores candidatos con informes detallados y recomendaciones.",
    },
    {
      number: "05",
      title: "Integración y Seguimiento",
      description: "Acompañamos el proceso de onboarding y realizamos seguimiento para asegurar el éxito.",
    },
  ]

  const serviceTypes = [
    {
      name: "Staffing Permanente",
      description: "Contratación directa para posiciones de tiempo completo con tu empresa",
      features: [
        "Búsqueda exhaustiva de candidatos",
        "Evaluación técnica y cultural completa",
        "Garantía de reemplazo 90 días",
        "Proceso de onboarding estructurado",
      ],
    },
    {
      name: "Staff Augmentation",
      description: "Ampliación de equipos existentes con talento especializado",
      features: [
        "Integración inmediata con equipos actuales",
        "Escalabilidad según demanda del proyecto",
        "Retención del control directo",
        "Transferencia de conocimiento incluida",
      ],
      highlighted: true,
    },
    {
      name: "Project-Based Staffing",
      description: "Equipos especializados para proyectos específicos con duración definida",
      features: [
        "Equipos pre-formados y probados",
        "Gestión de proyecto incluida",
        "Entrega en tiempos definidos",
        "Escalabilidad durante el proyecto",
      ],
    },
  ]

  const specializations = [
    {
      icon: Brain,
      title: "Tecnología e IA",
      description: "Desarrolladores, Data Scientists, ML Engineers, DevOps",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "SOC Analysts, Pentesters, Security Architects, Compliance",
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Growth Hackers, SEO/SEM Specialists, Social Media Managers",
    },
    {
      icon: Zap,
      title: "Consultoría",
      description: "Business Analysts, Project Managers, Strategy Consultants",
    },
  ]

  return (
    <ServicePageLayout
      title="Staffing y Reclutamiento Especializado"
      subtitle="Conectamos tu empresa con el mejor talento especializado en tecnología, ciberseguridad, marketing digital y consultoría."
      imageUrl="/business-meeting-success.png"
      imageAlt="Staffing y Reclutamiento"
    >
      <div className="space-y-16">
        {/* Introducción */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            En TechBiz entendemos que encontrar el talento adecuado es crucial para el éxito de tu empresa. Nuestro
            servicio de staffing se especializa en identificar, evaluar y conectar a tu organización con profesionales
            excepcionales que impulsen tu crecimiento y transformación digital.
          </p>
          <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">¿Por qué elegir TechBiz para Staffing?</h3>
            <p className="text-gray-300">
              Combinamos nuestra experiencia en transformación digital con un profundo conocimiento del mercado de
              talento especializado. No solo encontramos profesionales, identificamos a las personas que se alinearán
              perfectamente con tu cultura y objetivos empresariales.
            </p>
          </div>
        </div>

        {/* Servicios de Staffing */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestros Servicios de Staffing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {staffingServices.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <service.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Beneficios de Nuestro Servicio de Staffing</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestro Proceso de Staffing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {staffingProcess.map((step, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-3xl font-bold text-blue-400 mb-3">{step.number}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tipos de Servicios */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestras Modalidades de Staffing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-6 border ${
                  type.highlighted ? "border-blue-500 shadow-lg shadow-blue-900/20" : "border-gray-700"
                } flex flex-col h-full`}
              >
                <h3 className={`text-xl font-bold mb-3 ${type.highlighted ? "text-blue-400" : "text-white"}`}>
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
                            type.highlighted ? "text-blue-400" : "text-gray-400"
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
                    customMessage={`Me interesa el servicio de "${type.name}". Quisiera más información sobre cómo pueden ayudarme a encontrar el talento adecuado para mi empresa.`}
                  >
                    Solicitar información
                  </ConsultaGratuitaButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectores Especializados */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Áreas de Especialización</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
                <p className="text-gray-300 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas de Éxito */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Nuestros Resultados</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
              <p className="text-blue-100">Tasa de éxito en colocaciones</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">30</div>
              <p className="text-blue-100">Días promedio de contratación</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
              <p className="text-blue-100">Profesionales en nuestra red</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">90%</div>
              <p className="text-blue-100">Retención después de 1 año</p>
            </div>
          </div>
        </div>

        {/* Llamado a la Acción Final */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Necesitas encontrar el talento perfecto?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Cuéntanos sobre tus necesidades de staffing y te ayudaremos a encontrar a los profesionales ideales para
            impulsar tu empresa al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ConsultaGratuitaButton
              className="btn-primary inline-flex items-center justify-center"
              customMessage="Necesito ayuda con staffing y reclutamiento especializado. Me gustaría discutir mis necesidades de talento para mi empresa."
            >
              <Clock className="mr-2 h-5 w-5" />
              Solicitar Consulta de Staffing
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
