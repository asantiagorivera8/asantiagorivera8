"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Para equipos pequeños y startups",
      monthlyPrice: 24.99,
      annualPrice: 19.99,
      limit: "Hasta 100 activos",
      features: [
        "Inventario hardware y licencias",
        "Historial de cambios",
        "Exportación CSV",
        "1 usuario",
        "Soporte por email",
      ],
      featured: false,
    },
    {
      name: "Business",
      description: "Para empresas en crecimiento",
      monthlyPrice: 49.99,
      annualPrice: 39.99,
      limit: "Hasta 500 activos · 5 usuarios",
      features: [
        "Todo lo del Starter",
        "Asignación por proyecto",
        "Alertas de vencimiento",
        "Dashboard de auditoría",
        "Soporte prioritario",
      ],
      featured: true,
      badge: "Más popular",
    },
    {
      name: "Pro",
      description: "Para empresas con múltiples sedes",
      monthlyPrice: 99.99,
      annualPrice: 79.99,
      limit: "Activos ilimitados · usuarios ilimitados",
      features: [
        "Todo lo del Business",
        "API access",
        "Roles y permisos avanzados",
        "Reportes personalizados",
        "Soporte dedicado",
      ],
      featured: false,
    },
  ]

  const currentPrice = (plan: any) => (isAnnual ? plan.annualPrice : plan.monthlyPrice)
  const annualSavings = (plan: any) => {
    const monthly = plan.monthlyPrice
    const annual = plan.annualPrice
    return Math.round((monthly * 12 - annual * 12) * 100) / 100
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-block bg-blue-900/30 border border-blue-800 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium">
          30 días gratis, sin tarjeta de crédito
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Visibilidad total sobre tus activos tecnológicos</h1>
        <p className="text-xl text-gray-400">Elige el plan que se adapta al tamaño de tu empresa</p>
      </div>

      {/* Toggle Billing */}
      <div className="flex items-center justify-center gap-4">
        <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-gray-400"}`}>Mensual</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
            isAnnual ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              isAnnual ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isAnnual ? "text-white" : "text-gray-400"}`}>Anual</span>
        {isAnnual && <span className="bg-green-900/30 border border-green-800 text-green-300 text-xs px-3 py-1 rounded-full font-medium">Ahorra 20%</span>}
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border transition-all ${
              plan.featured
                ? "border-blue-500 bg-gradient-to-br from-gray-800 to-gray-900 ring-2 ring-blue-500/50 shadow-xl"
                : "border-gray-700 bg-gray-900 hover:border-gray-600"
            } p-8`}
          >
            {plan.badge && (
              <div className="inline-block bg-blue-900/40 border border-blue-800 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {plan.badge}
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">${currentPrice(plan).toFixed(2)}</span>
                <span className="text-gray-400">/mes</span>
              </div>
              {isAnnual && (
                <p className="text-green-400 text-sm mt-2">
                  ${(plan.annualPrice * 12).toFixed(2)}/año — ahorras ${annualSavings(plan).toFixed(2)}
                </p>
              )}
            </div>

            <div className="bg-gray-800/50 rounded-lg px-4 py-3 mb-6 text-sm text-gray-300">{plan.limit}</div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.featured
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
              }`}
            >
              Comenzar gratis →
            </button>
          </div>
        ))}
      </div>

      {/* Trial Banner */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center max-w-3xl mx-auto">
        <p className="text-gray-300">
          <strong className="text-white">30 días gratis en cualquier plan.</strong> Sin tarjeta de crédito. Cancela cuando quieras.
          Migración desde Excel incluida sin costo adicional.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-white font-semibold mb-2">¿Qué pasa cuando termina la prueba?</h3>
            <p className="text-gray-400 text-sm">
              Te notificamos 7 días antes. Si no agregas un método de pago, tu cuenta pasa a modo lectura — tus datos nunca se eliminan.
            </p>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-white font-semibold mb-2">¿Puedo cambiar de plan?</h3>
            <p className="text-gray-400 text-sm">
              Sí, en cualquier momento. Si haces upgrade, pagas la diferencia proporcional. Si haces downgrade, el crédito se aplica al siguiente ciclo.
            </p>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-white font-semibold mb-2">¿Mis datos están seguros?</h3>
            <p className="text-gray-400 text-sm">
              Todos los datos se almacenan con encriptación en reposo y en tránsito. Backups diarios automáticos incluidos en todos los planes.
            </p>
          </div>

          <div className="pb-4">
            <h3 className="text-white font-semibold mb-2">¿Ofrecen descuento para ONGs o gobierno?</h3>
            <p className="text-gray-400 text-sm">
              Sí. Escríbenos a asantiago@techbizonline.com con tu documentación y evaluamos un plan especial.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
