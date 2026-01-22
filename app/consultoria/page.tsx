import ServicePageLayout from "../components/ServicePageLayout"
import { Briefcase, Lightbulb, Users, Settings, BarChart, CheckCircle, Clock, Target } from "lucide-react"
import ConsultaGratuitaButton from "@/app/components/ConsultaGratuitaButton"

export default function ConsultoriaPage() {
  const features = [
    {
      icon: Briefcase,
      title: "Optimización de Procesos",
      description: "Analizamos y rediseñamos tus flujos de trabajo para maximizar la eficiencia y reducir costos.",
    },
    {
      icon: Lightbulb,
      title: "Estrategia Tecnológica",
      description:
        "Te ayudamos a seleccionar e implementar las tecnologías adecuadas para alcanzar tus objetivos de negocio.",
    },
    {
      icon: Users,
      title: "Gestión de Recursos Humanos",
      description:
        "Soluciones para la gestión del talento, desarrollo organizacional y cultura empresarial (expertise de Gabriela).",
    },
    {
      icon: Settings,
      title: "Mejora de Operaciones",
      description:
        "Identificamos cuellos de botella y optimizamos tus operaciones diarias para un rendimiento superior.",
    },
    {
      icon: BarChart,
      title: "Cumplimiento Normativo",
      description: "Aseguramos que tu empresa cumpla con las regulaciones y estándares de la industria.",
    },
  ]

  const benefits = [
    "Reducción de costos operativos de hasta un 30%",
    "Aumento de la productividad del equipo",
    "Mejora en la satisfacción de clientes",
    "Toma de decisiones basada en datos",
    "Adaptación ágil a cambios del mercado",
    "Ventaja competitiva sostenible",
  ]

  const methodologySteps = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description:
        "Evaluación exhaustiva de la situación actual, identificando fortalezas, debilidades y oportunidades.",
    },
    {
      number: "02",
      title: "Diseño de Estrategia",
      description: "Creación de un plan de acción personalizado con objetivos claros y métricas de éxito.",
    },
    {
      number: "03",
      title: "Implementación",
      description: "Ejecución del plan con acompañamiento continuo y ajustes según sea necesario.",
    },
    {
      number: "04",
      title: "Medición y Optimización",
      description:
        "Evaluación de resultados, refinamiento de estrategias y establecimiento de procesos de mejora continua.",
    },
  ]

  const consultingPackages = [
    {
      name: "Consultoría Puntual",
      description: "Solución específica para un desafío concreto de tu empresa",
      features: [
        "Diagnóstico focalizado",
        "Plan de acción específico",
        "1 mes de implementación",
        "Seguimiento post-implementación",
      ],
    },
    {
      name: "Transformación Integral",
      description: "Rediseño completo de procesos y estrategias para optimizar tu negocio",
      features: [
        "Diagnóstico 360°",
        "Plan estratégico completo",
        "3-6 meses de implementación",
        "Capacitación al equipo",
        "Seguimiento trimestral",
      ],
      highlighted: true,
    },
    {
      name: "Acompañamiento Continuo",
      description: "Asesoría permanente para la evolución constante de tu empresa",
      features: [
        "Consultor dedicado",
        "Reuniones mensuales",
        "Ajustes estratégicos continuos",
        "Informes de progreso",
        "Acceso prioritario al equipo",
      ],
    },
  ]

  return (
    <ServicePageLayout
      title="Consultoría Empresarial Estratégica"
      subtitle="Impulsamos la transformación y el crecimiento de tu negocio con soluciones a medida."
      imageUrl="/modern-office-meeting-abstract.png"
      imageAlt="Consultoría Empresarial"
    >
      <div className="space-y-16">
        {/* Servicios principales */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestros Servicios de Consultoría</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <feature.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Beneficios de Nuestra Consultoría</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metodología */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestra Metodología</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-3xl font-bold text-blue-400 mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Paquetes de consultoría */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nuestros Paquetes de Consultoría</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consultingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-6 border ${pkg.highlighted ? "border-blue-500 shadow-lg shadow-blue-900/20" : "border-gray-700"} flex flex-col h-full`}
              >
                <h3 className={`text-xl font-bold mb-3 ${pkg.highlighted ? "text-blue-400" : "text-white"}`}>
                  {pkg.name}
                </h3>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                <div className="flex-grow">
                  <h4 className="text-sm uppercase text-gray-400 mb-3">Incluye:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle
                          className={`h-4 w-4 ${pkg.highlighted ? "text-blue-400" : "text-gray-400"} mt-1 mr-2 flex-shrink-0`}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4">
                  <ConsultaGratuitaButton
                    className={pkg.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}
                    customMessage={`Me interesa el paquete de consultoría "${pkg.name}". Quisiera más información.`}
                  >
                    Solicitar información
                  </ConsultaGratuitaButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección final CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ConsultaGratuitaButton className="btn-primary inline-flex items-center justify-center">
              <Clock className="mr-2 h-5 w-5" />
              Agenda tu Consulta Gratuita
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
