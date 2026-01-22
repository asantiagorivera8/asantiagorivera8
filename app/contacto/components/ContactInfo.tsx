import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import ConsultaGratuitaButton from "@/app/components/ConsultaGratuitaButton"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Información de contacto</h2>
        <p className="text-gray-400 mb-8">
          Estamos aquí para responder tus preguntas y ayudarte a encontrar las mejores soluciones para tu empresa.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <p className="text-gray-400">asantiago@techbizonline.com</p>
            <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white">Ubicación</h3>
            <p className="text-gray-400">Servicios remotos y presenciales</p>
            <p className="text-sm text-gray-500">Cobertura internacional</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Síguenos en redes sociales</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61575830947425"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://www.instagram.com/asantiago_techbiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/adsr22/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>

      <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700/50">
        <h3 className="text-lg font-semibold text-white mb-2">¿Necesitas una consulta urgente?</h3>
        <p className="text-gray-300 mb-4">
          Para consultas urgentes o proyectos con fechas límite ajustadas, agenda una consulta gratuita.
        </p>
        <ConsultaGratuitaButton className="btn-primary inline-block" />
      </div>
    </div>
  )
}
