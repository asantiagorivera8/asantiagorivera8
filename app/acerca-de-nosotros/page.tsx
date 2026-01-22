import Image from "next/image"
import { Facebook, Instagram, Linkedin, Users, Target, Lightbulb } from "lucide-react"
import ConsultaGratuitaButton from "@/app/components/ConsultaGratuitaButton"

export const metadata = {
  title: "Acerca de Nosotros | TechBiz - Conoce a nuestro equipo",
  description:
    "Conoce a los fundadores de TechBiz y nuestra misión de transformar empresas a través de la tecnología, la ciberseguridad y el desarrollo humano.",
}

export default function AcercaDeNosotrosPage() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-gray-800 overflow-hidden"
        style={{
          backgroundImage: "url(/blog-hero-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Acerca de Nosotros</h1>
          <p className="text-xl text-gray-300">
            Conoce a las personas detrás de TechBiz y nuestra visión para transformar el futuro empresarial.
          </p>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Users className="h-16 w-16 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            TechBiz nace de la visión de dos profesionales apasionados por transformar empresas a través de la
            tecnología, la ciberseguridad y el desarrollo humano.
          </p>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Fundadores</h2>
            <p className="text-xl text-gray-300">Conoce a los líderes que impulsan la innovación en TechBiz</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Ángel David Santiago Rivera */}
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl flex flex-col h-full">
              {/* Header con foto y nombre */}
              <div className="text-center mb-6">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-6">
                  <Image
                    src="/images/angel.jpg"
                    alt="Ángel David Santiago Rivera"
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ángel David Santiago Rivera</h3>
                <p className="text-blue-400 font-semibold mb-4">Director de Tecnología y Estrategia</p>
              </div>

              {/* Contenido principal - flex-grow para ocupar espacio disponible */}
              <div className="flex-grow">
                <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                  <p>
                    Cursa un doctorado en Administración de Empresas con especialización en Sistemas de Información.
                    Apasionado por la tecnología y los negocios.
                  </p>
                  <p>
                    Cuenta con formación especializada en ciberseguridad, informática forense e inteligencia artificial
                    aplicada.
                  </p>
                  <p>
                    Autor de{" "}
                    <em className="text-blue-300">
                      Cybersecurity 360: De los fundamentos a la inteligencia artificial
                    </em>{" "}
                    y <em className="text-blue-300">Marketing Digital 360</em>.
                  </p>
                  <p>Profesor universitario, conferencista y estratega tecnológico.</p>
                  <p className="text-gray-300 italic">
                    Creyente en Dios y fiel defensor del valor de la familia como base del liderazgo y la visión
                    empresarial.
                  </p>
                </div>
              </div>

              {/* Footer con redes sociales - siempre al final */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Redes Sociales:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61575830947425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                    aria-label="Facebook de Ángel"
                  >
                    <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/asantiago_techbiz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-pink-600 rounded-lg transition-colors duration-300"
                    aria-label="Instagram de Ángel"
                  >
                    <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adsr22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                    aria-label="LinkedIn de Ángel"
                  >
                    <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Gabriela Cristina Vega Madera */}
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl flex flex-col h-full">
              {/* Header con foto y nombre */}
              <div className="text-center mb-6">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-6">
                  <Image
                    src="/images/gabriela.jpg"
                    alt="Gabriela Cristina Vega Madera"
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Gabriela Cristina Vega Madera</h3>
                <p className="text-blue-400 font-semibold mb-4">
                  Directora de Recursos Humanos y Desarrollo Organizacional
                </p>
              </div>

              {/* Contenido principal - flex-grow para ocupar espacio disponible */}
              <div className="flex-grow">
                <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                  <p>Posee un MBA en Recursos Humanos.</p>
                  <p>Especialista en gestión de talento, cultura organizacional y coaching empresarial.</p>
                  <p>
                    Es estratega en el desarrollo y optimización de las áreas operacionales de la empresa, integrando
                    procesos humanos y tecnológicos para lograr una ejecución eficiente y sostenible.
                  </p>
                  <p className="text-gray-300 italic">
                    Creyente en Dios y apasionada por la familia, la cual considera el núcleo esencial de toda
                    organización saludable.
                  </p>
                </div>
              </div>

              {/* Footer con redes sociales - siempre al final */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Redes Sociales:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/gabriela.vega.988373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                    aria-label="Facebook de Gabriela"
                  >
                    <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/gabrielacvega"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                    aria-label="LinkedIn de Gabriela"
                  >
                    <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://instagram.com/gabrielacvega"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-pink-600 rounded-lg transition-colors duration-300"
                    aria-label="Instagram de Gabriela"
                  >
                    <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Target className="h-16 w-16 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Misión</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Crear soluciones que integren tecnología, estrategia y personas para transformar el futuro de las empresas.
          </p>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Lightbulb className="h-16 w-16 text-blue-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Descubre cómo podemos ayudarte a transformar tu empresa con nuestras soluciones integrales.
          </p>
          <ConsultaGratuitaButton className="btn-primary text-lg px-8 py-4">
            Solicita una Consulta Gratuita
          </ConsultaGratuitaButton>
        </div>
      </section>
    </div>
  )
}
