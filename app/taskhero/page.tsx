import ServicePageLayout from "../components/ServicePageLayout"
import Link from "next/link"
import Image from "next/image"
import { 
  FileText, 
  Package, 
  FileSignature, 
  Zap, 
  Award, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Cotizaciones y Facturas",
    description: "Crea cotizaciones profesionales y facturas en minutos. Envialas directamente a tus clientes y dale seguimiento a tus pagos.",
  },
  {
    icon: Package,
    title: "Manejo de Inventario",
    description: "Controla tu inventario de productos y servicios. Recibe alertas de stock bajo y optimiza tus compras.",
  },
  {
    icon: FileSignature,
    title: "Contratos Digitales",
    description: "Genera y gestiona contratos profesionales. Firma electronica incluida para cerrar negocios mas rapido.",
  },
  {
    icon: Zap,
    title: "Automatizacion",
    description: "Automatiza tareas administrativas repetitivas. Ahorra tiempo en recordatorios, seguimientos y reportes.",
  },
  {
    icon: Award,
    title: "Imagen Profesional",
    description: "Proyecta una imagen de marca solida con plantillas personalizables y branding consistente.",
  },
  {
    icon: DollarSign,
    title: "Ahorro en Costos",
    description: "Una sola plataforma en lugar de multiples suscripciones. Reduce costos operativos significativamente.",
  },
]

const benefits = [
  "Directorio de profesionales y negocios",
  "Herramientas de gestion todo-en-uno",
  "Creado en Puerto Rico para el mercado local",
  "Soporte en espanol",
  "Integracion con metodos de pago locales",
  "Reportes y analiticas de tu negocio",
]

export default function TaskHeroPage() {
  return (
    <ServicePageLayout
      title="TaskHero 360°"
      subtitle="La plataforma todo-en-uno para profesionales independientes y negocios en Puerto Rico"
      imageUrl="/taskhero-platform.jpg"
      imageAlt="TaskHero 360° - Plataforma de gestion empresarial"
      logoUrl="/images/taskhero-logo.png"
      logoAlt="TaskHero 360° Logo"
    >
      <div className="space-y-12">
        <div className="text-center">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-white">TaskHero</strong> es una plataforma digital creada en Puerto Rico que conecta 
            a profesionales independientes y negocios con clientes, mientras les brinda en un solo lugar las herramientas 
            clave para gestionar y hacer crecer su operacion.
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/30 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-orange-400" />
            Mas que un directorio
          </h3>
          <p className="text-gray-300 text-lg">
            TaskHero te permite crear cotizaciones y facturas, manejar inventario y contratos, automatizar tareas 
            administrativas y proyectar una imagen mas profesional, <strong className="text-orange-400">ahorrando tiempo 
            y costos en multiples suscripciones</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Caracteristicas Principales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <feature.icon className="w-10 h-10 text-orange-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Beneficios de TaskHero 360°</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6 py-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Descubre como TaskHero puede convertirse en tu aliado de negocios
          </h3>
          <Link
            href="https://www.taskhero360.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
          >
            Visitar TaskHero 360°
            <ExternalLink className="w-5 h-5" />
          </Link>
          <p className="text-gray-400 text-sm">
            taskhero360.com
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">TechBiz es partner oficial de TaskHero 360°</p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Contactanos para mas informacion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  )
}
