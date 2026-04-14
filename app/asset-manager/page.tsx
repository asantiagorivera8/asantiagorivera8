import ServicePageLayout from "../components/ServicePageLayout"
import Link from "next/link"
import DemoRequestForm from "./DemoRequestForm"
import { CheckCircle, BarChart3, Clock, Download } from "lucide-react"

export const metadata = {
  title: "Asset Manager by TechBiz - Gestión Inteligente de Activos Tecnológicos",
  description:
    "Controla tu inventario de hardware, licencias de software y equipos asignados por proyecto. Demo gratuito por 30 días, luego $24.99/mes.",
}

export default function AssetManagerPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Tracking Completo",
      description:
        "Mantén un registro detallado de todo tu hardware, licencias de software y equipos asignados por proyecto en un solo lugar.",
    },
    {
      icon: Clock,
      title: "Historial Automático",
      description:
        "Registra automáticamente todos los cambios en tus activos con timestamps y detalles completos del histórico.",
    },
    {
      icon: Download,
      title: "Reportes y Exportación",
      description: "Genera reportes detallados y exporta tus datos a CSV para análisis y auditorías.",
    },
    {
      icon: CheckCircle,
      title: "Control Total",
      description: "Asigna, monitorea y gestiona activos de forma eficiente con una interfaz intuitiva.",
    },
  ]

  return (
    <>
      <ServicePageLayout
        title="Asset Manager by TechBiz"
        subtitle="Gestión inteligente de activos tecnológicos para tu empresa"
        imageUrl="/asset-manager-hero.jpg"
        imageAlt="Asset Manager - Dashboard de gestión de activos"
      >
        <div className="space-y-16">
          {/* Descripción Principal */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Control Total de Tus Activos Tecnológicos
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Asset Manager es la solución definitiva para gestionar tu inventario de hardware, licencias de software
                y equipos asignados por proyecto — todo en un solo lugar, centralizado y seguro.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Inventario completo y actualizado en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Asignación de activos por proyecto y equipo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Auditorías y compliance automáticos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">30</p>
                <p className="text-xl mb-6">Días Gratis</p>
                <p className="text-sm mb-8 opacity-90">
                  Acceso completo a todas las características de Asset Manager sin costo.
                </p>
                <p className="text-lg font-semibold mb-2">Después: $24.99/mes</p>
                <p className="text-sm opacity-90">Cancela cuando quieras, sin compromisos</p>
              </div>
            </div>
          </div>

          {/* Características */}
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Características Principales</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-semibold text-gray-100">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Formulario Demo */}
          <div className="max-w-2xl mx-auto w-full">
            <DemoRequestForm />
          </div>

          {/* Sección de Precios */}
          <div className="bg-gray-800 rounded-xl p-12 border border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Planes Transparentes y Flexibles</h2>
              <p className="text-gray-400 mb-8">30 días gratis en cualquier plan, sin tarjeta de crédito</p>
              <Link
                href="/asset-manager/pricing"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Todos los Planes →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Starter</p>
                <p className="text-3xl font-bold text-white">$24.99<span className="text-lg text-gray-400">/mes</span></p>
                <p className="text-sm text-gray-500 mt-1">Hasta 100 activos</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-6 border-2 border-blue-600">
                <p className="text-sm text-blue-400 mb-2 font-semibold">Business · Más Popular</p>
                <p className="text-3xl font-bold text-white">$49.99<span className="text-lg text-gray-400">/mes</span></p>
                <p className="text-sm text-gray-400 mt-1">Hasta 500 activos · 5 usuarios</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Pro</p>
                <p className="text-3xl font-bold text-white">$99.99<span className="text-lg text-gray-400">/mes</span></p>
                <p className="text-sm text-gray-500 mt-1">Activos ilimitados · Usuarios ilimitados</p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Comienza Tu Demostración Hoy Mismo
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Descubre cómo Asset Manager puede optimizar la gestión de tus activos tecnológicos. 30 días gratis, sin
              tarjeta de crédito requerida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/asset-manager#formulario"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar Demo
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors border border-blue-500"
              >
                Volver a Inicio
              </Link>
            </div>
          </div>
        </div>
      </ServicePageLayout>
    </>
  )
}
