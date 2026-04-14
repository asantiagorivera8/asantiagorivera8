import PricingSection from "../PricingSection"

export const metadata = {
  title: "Precios - Asset Manager by TechBiz | Planes desde $24.99/mes",
  description:
    "Descubre los planes de Asset Manager: Starter ($24.99/mes), Business ($49.99/mes), Pro ($99.99/mes). 30 días gratis sin tarjeta de crédito.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PricingSection />
      </div>
    </main>
  )
}
