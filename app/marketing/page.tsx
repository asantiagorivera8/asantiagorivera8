import ServicePageLayout from "../components/ServicePageLayout"
import Link from "next/link"
import { CheckCircle, TrendingUp, Users, Palette, Edit3, Megaphone, Filter, Brain } from "lucide-react"
import ConsultaMarketingButton from "@/app/components/ConsultaMarketingButton"

const plans = [
  {
    name: "Básico",
    features: [
      { text: "Gestión de Redes Sociales (2 posts/semana)", icon: Users },
      { text: "Creación de Contenido Básico", icon: Edit3 },
      { text: "Reporte Mensual de Rendimiento", icon: TrendingUp },
    ],
    bgColor: "bg-gray-800",
    buttonText: "Solicitar Información",
  },
  {
    name: "Intermedio",
    features: [
      { text: "Todo lo del Plan Básico", icon: CheckCircle },
      { text: "Diseño Gráfico Profesional", icon: Palette },
      { text: "Copywriting Persuasivo", icon: Edit3 },
      { text: "Gestión de Historias (Instagram/Facebook)", icon: Megaphone },
      { text: "Optimización SEO On-Page Básica", icon: TrendingUp },
    ],
    bgColor: "bg-blue-700",
    textColor: "text-white",
    buttonClass: "bg-white text-blue-700 hover:bg-gray-100",
    highlight: true,
  },
  {
    name: "Avanzado",
    features: [
      { text: "Todo lo del Plan Intermedio", icon: CheckCircle },
      { text: "Campañas de Publicidad Pagada (SEM/Social Ads)", icon: Megaphone },
      { text: "Creación de Embudos de Venta", icon: Filter },
      { text: "Desarrollo de Branding y Estrategia de Marca", icon: Palette },
      { text: "Integración de IA para Optimización de Campañas", icon: Brain },
    ],
    bgColor: "bg-gray-800",
    buttonText: "Solicitar Información",
  },
]

export default function MarketingPage() {
  return (
    <ServicePageLayout
      title="Marketing Digital Estratégico"
      subtitle="Impulsamos tu presencia online y conectamos con tu audiencia para generar resultados medibles."
      imageUrl="/marketing-digital-workspace.png"
      imageAlt="Marketing Digital - Workspace profesional con estrategias digitales"
    >
      <div className="space-y-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          En TechBiz, combinamos creatividad, datos y tecnología para crear estrategias de marketing digital que no solo
          atraen, sino que convierten. Desde la gestión de redes sociales hasta complejas campañas con IA, te ayudamos a
          alcanzar tus objetivos de marketing.
        </p>

        <h3 className="text-3xl font-semibold text-white mb-8 text-center">Nuestros Planes de Marketing</h3>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 shadow-xl flex flex-col ${plan.bgColor} ${plan.textColor || "text-gray-300"} ${plan.highlight ? "border-4 border-blue-400 transform scale-105" : "border border-gray-700"}`}
            >
              <h4 className="text-2xl font-bold mb-6">{plan.name}</h4>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <feature.icon
                      className={`h-5 w-5 mr-3 mt-1 flex-shrink-0 ${plan.highlight ? "text-blue-300" : "text-blue-400"}`}
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <ConsultaMarketingButton
                selectedPlan={plan.name.toLowerCase()}
                className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center ${plan.buttonClass || "btn-primary"}`}
              >
                {plan.buttonText || "Solicitar Información"}
              </ConsultaMarketingButton>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Potencia tu Estrategia con Nuestros Libros</h3>
          <p className="text-gray-300 mb-6">
            Complementa nuestros servicios de marketing con el conocimiento profundo de nuestros libros especializados.
          </p>
          <Link href="/libros" className="btn-secondary">
            Ver Libros Publicados
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  )
}
