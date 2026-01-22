import ServicePageLayout from "../components/ServicePageLayout"
import { BrainCircuit, Bot, BarChart3, Zap, Settings2 } from "lucide-react"
import ConsultaIAButton from "@/app/components/ConsultaIAButton"

export default function InteligenciaArtificialPage() {
  const applications = [
    {
      icon: Zap,
      title: "Automatización Inteligente de Procesos (RPA & IPA)",
      description: "Optimizamos flujos de trabajo repetitivos y complejos mediante robots de software inteligentes.",
    },
    {
      icon: Bot,
      title: "Asistentes Virtuales y Chatbots Avanzados",
      description: "Mejoramos la atención al cliente y la eficiencia interna con IA conversacional personalizada.",
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo y Prescriptivo de Datos",
      description: "Transformamos tus datos en insights accionables para la toma de decisiones estratégicas.",
    },
    {
      icon: Settings2,
      title: "Integración de IA en Operaciones Existentes",
      description: "Incorporamos soluciones de IA de forma fluida en tus sistemas y procesos actuales.",
    },
    {
      icon: BrainCircuit,
      title: "Desarrollo de Modelos de Machine Learning a Medida",
      description:
        "Creamos modelos de aprendizaje automático específicos para resolver tus desafíos de negocio únicos.",
    },
  ]
  return (
    <ServicePageLayout
      title="Inteligencia Artificial Aplicada"
      subtitle="Desbloquea el potencial de la IA para innovar, automatizar y optimizar tu negocio."
      imageUrl="/ai-brain-connections.png"
      imageAlt="Inteligencia Artificial"
    >
      <div className="space-y-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          La Inteligencia Artificial está revolucionando la forma en que operan las empresas. En TechBiz, te ayudamos a
          aprovechar el poder de la IA para obtener ventajas competitivas, mejorar la eficiencia y crear nuevas
          oportunidades de crecimiento.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <app.icon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
              <p className="text-gray-400">{app.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <ConsultaIAButton className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </ServicePageLayout>
  )
}
