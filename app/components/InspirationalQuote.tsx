import { Quote } from "lucide-react"

export default function InspirationalQuote() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-12 w-12 text-blue-300 mx-auto mb-6" />
        <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
          "La innovación no es solo tecnología, es cómo aplicamos la tecnología para transformar realidades."
        </blockquote>
        <cite className="text-blue-300 font-semibold">— Equipo TechBiz</cite>
      </div>
    </section>
  )
}
