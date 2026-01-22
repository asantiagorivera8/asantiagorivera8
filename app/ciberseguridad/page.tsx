import ServicePageLayout from "../components/ServicePageLayout"
import { ShieldCheck, Search, FileText, Users, AlertTriangle } from "lucide-react"
import AuditoriaButton from "@/app/components/AuditoriaButton"

export const metadata = {
  title: "Ciberseguridad y Cumplimiento | TechBiz - Protección empresarial integral",
  description:
    "Protegemos tu negocio en el mundo digital y aseguramos el cumplimiento normativo con soluciones de ciberseguridad avanzadas.",
  openGraph: {
    title: "Ciberseguridad y Cumplimiento | TechBiz",
    description:
      "Protegemos tu negocio en el mundo digital y aseguramos el cumplimiento normativo con soluciones de ciberseguridad avanzadas.",
    type: "website",
    images: [
      {
        url: "/cybersecurity-shield-network.png",
        width: 1200,
        height: 630,
        alt: "Ciberseguridad y Cumplimiento TechBiz",
      },
    ],
  },
}

export default function CiberseguridadPage() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Protección Integral de Datos",
      description: "Implementamos medidas robustas para salvaguardar tu información crítica contra amenazas.",
    },
    {
      icon: Search,
      title: "Análisis de Vulnerabilidades",
      description: "Identificamos y mitigamos debilidades en tus sistemas antes de que sean explotadas.",
    },
    {
      icon: FileText,
      title: "Gestión de Cumplimiento Normativo",
      description: "Te ayudamos a cumplir con normativas como GDPR, HIPAA, y otros estándares de la industria.",
    },
    {
      icon: AlertTriangle,
      title: "Respuesta a Incidentes",
      description: "Planes y ejecución rápida para minimizar el impacto de brechas de seguridad.",
    },
    {
      icon: Users,
      title: "Concienciación y Formación",
      description: "Capacitamos a tu personal para que sea la primera línea de defensa contra ciberataques.",
    },
  ]

  return (
    <ServicePageLayout
      title="Ciberseguridad y Cumplimiento"
      subtitle="Protegemos tu negocio en el mundo digital y aseguramos el cumplimiento normativo."
      imageUrl="/cybersecurity-shield-network.png"
      imageAlt="Ciberseguridad y Cumplimiento"
    >
      <div className="space-y-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          En un entorno digital cada vez más complejo, la ciberseguridad no es una opción, es una necesidad. Ofrecemos
          un enfoque proactivo y multicapa para proteger tus activos digitales y asegurar la continuidad de tu negocio.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <service.icon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <AuditoriaButton className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </ServicePageLayout>
  )
}
