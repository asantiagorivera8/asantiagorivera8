import { Shield, Lock, Eye, Users, FileText, Mail, AlertCircle, Check } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad | TechBiz",
  description:
    "Política de Privacidad de TechBiz. Conoce cómo protegemos y manejamos tu información personal de acuerdo con GDPR, CCPA y regulaciones de Meta.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidad</h1>
          <p className="text-lg text-gray-300 mb-2">
            En TechBiz, nos comprometemos a proteger la privacidad de nuestros usuarios.
          </p>
          <p className="text-sm text-gray-400">Última actualización: 15 de enero de 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Introducción */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Introducción</h2>
                  <p className="text-gray-300 mb-4">
                    Esta Política de Privacidad explica cómo TechBiz L.L.C. ("nosotros", "nuestro" o "TechBiz")
                    recopila, utiliza, almacena y protege tu información personal cuando visitas nuestro sitio web{" "}
                    <span className="text-blue-400">techbizonline.com</span> o utilizas nuestros servicios.
                  </p>
                  <p className="text-gray-300">
                    Cumplimos con el Reglamento General de Protección de Datos (GDPR), la Ley de Privacidad del
                    Consumidor de California (CCPA), y las políticas de privacidad de Meta (Facebook e Instagram) para
                    publicidad digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Quiénes somos */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. ¿Quiénes somos?</h2>
                  <p className="text-gray-300 mb-4">
                    Somos <strong>TechBiz L.L.C.</strong>, una empresa dedicada a ofrecer soluciones integrales en:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Consultoría Empresarial</li>
                    <li>Staffing y Recursos Humanos</li>
                    <li>Ciberseguridad</li>
                    <li>Inteligencia Artificial</li>
                    <li>Marketing Digital</li>
                    <li>Academia y Formación Online</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    <strong>Contacto:</strong> info@techbizonline.com
                  </p>
                </div>
              </div>
            </div>

            {/* Información que recopilamos */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Eye className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. ¿Qué información recopilamos?</h2>

                  <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                    Información que proporcionas directamente:
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Datos de contacto:</strong> Nombre, correo electrónico, teléfono, empresa
                    </li>
                    <li>
                      <strong>Consultas:</strong> Información proporcionada en formularios de contacto o consultas
                      gratuitas
                    </li>
                    <li>
                      <strong>Suscripciones:</strong> Dirección de correo para boletines informativos
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                    Información recopilada automáticamente:
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo
                      de permanencia
                    </li>
                    <li>
                      <strong>Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar la experiencia
                      del usuario y analizar el tráfico del sitio
                    </li>
                    <li>
                      <strong>Píxeles de Meta:</strong> Utilizamos el Píxel de Facebook/Instagram para medir la
                      efectividad de nuestras campañas publicitarias
                    </li>
                    <li>
                      <strong>Google Analytics:</strong> Recopilamos datos analíticos para entender el comportamiento de
                      los usuarios
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cómo usamos tu información */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Check className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. ¿Cómo usamos tu información?</h2>
                  <p className="text-gray-300 mb-4">Utilizamos la información recopilada para:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Responder a tus consultas y solicitudes de servicios</li>
                    <li>Enviarte información sobre nuestros servicios, cursos y ofertas (con tu consentimiento)</li>
                    <li>Mejorar nuestro sitio web y personalizar tu experiencia</li>
                    <li>Analizar el tráfico y comportamiento de los usuarios mediante Google Analytics</li>
                    <li>Ejecutar campañas publicitarias en Facebook, Instagram y otras plataformas de Meta</li>
                    <li>Cumplir con obligaciones legales y fiscales</li>
                    <li>Prevenir fraudes y proteger la seguridad de nuestros sistemas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Base legal (GDPR) */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Base legal para el tratamiento (GDPR)</h2>
                  <p className="text-gray-300 mb-4">
                    Procesamos tu información personal bajo las siguientes bases legales:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Consentimiento:</strong> Cuando te suscribes a nuestro boletín o aceptas cookies
                    </li>
                    <li>
                      <strong>Ejecución de contrato:</strong> Para proporcionar los servicios que solicitas
                    </li>
                    <li>
                      <strong>Interés legítimo:</strong> Para mejorar nuestros servicios y realizar análisis
                    </li>
                    <li>
                      <strong>Cumplimiento legal:</strong> Para cumplir con obligaciones fiscales y regulatorias
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compartir información */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. ¿Con quién compartimos tu información?</h2>
                  <p className="text-gray-300 mb-4">
                    No vendemos tu información personal. Podemos compartir tus datos con:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Proveedores de servicios:</strong> Como servicios de hosting (Vercel), email (Resend),
                      análisis (Google Analytics)
                    </li>
                    <li>
                      <strong>Plataformas publicitarias:</strong> Meta (Facebook/Instagram), Google Ads para mostrar
                      anuncios personalizados
                    </li>
                    <li>
                      <strong>Autoridades legales:</strong> Si es requerido por ley o para proteger nuestros derechos
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Todos los terceros están obligados a proteger tu información de acuerdo con esta política y las
                    leyes aplicables.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies y Píxeles de Meta */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Eye className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    6. Cookies y Píxeles de Seguimiento (Meta/Facebook)
                  </h2>
                  <p className="text-gray-300 mb-4">Utilizamos las siguientes tecnologías de seguimiento:</p>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">Cookies esenciales:</h3>
                  <p className="text-gray-300 mb-4">Necesarias para el funcionamiento del sitio web.</p>

                  <h3 className="text-lg font-semibold text-white mb-2">Cookies analíticas:</h3>
                  <p className="text-gray-300 mb-4">
                    Google Analytics para entender cómo los usuarios interactúan con nuestro sitio.
                  </p>

                  <h3 className="text-lg font-semibold text-white mb-2">Cookies publicitarias:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Píxel de Meta:</strong> Rastrea conversiones y optimiza campañas publicitarias en Facebook
                      e Instagram
                    </li>
                    <li>
                      <strong>Google Ads:</strong> Para retargeting y medición de campañas
                    </li>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    Puedes gestionar tus preferencias de cookies en cualquier momento desde tu navegador. Ten en cuenta
                    que deshabilitar cookies puede afectar la funcionalidad del sitio.
                  </p>
                </div>
              </div>
            </div>

            {/* Tus derechos */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Tus derechos de privacidad</h2>

                  <h3 className="text-lg font-semibold text-white mb-3 mt-4">Bajo GDPR (Unión Europea):</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Derecho de acceso:</strong> Solicitar una copia de tus datos personales
                    </li>
                    <li>
                      <strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos
                    </li>
                    <li>
                      <strong>Derecho de supresión:</strong> Solicitar la eliminación de tus datos ("derecho al olvido")
                    </li>
                    <li>
                      <strong>Derecho de portabilidad:</strong> Recibir tus datos en un formato estructurado
                    </li>
                    <li>
                      <strong>Derecho de oposición:</strong> Oponerte al procesamiento de tus datos
                    </li>
                    <li>
                      <strong>Derecho a retirar el consentimiento:</strong> En cualquier momento
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-3 mt-6">Bajo CCPA (California, EE.UU.):</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Conocer qué información personal recopilamos</li>
                    <li>Solicitar la eliminación de tu información personal</li>
                    <li>Optar por no vender tu información personal (no vendemos datos)</li>
                    <li>No ser discriminado por ejercer tus derechos</li>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    Para ejercer cualquiera de estos derechos, contáctanos en:{" "}
                    <a href="mailto:info@techbizonline.com" className="text-blue-400 hover:underline">
                      info@techbizonline.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Seguridad de datos */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Lock className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Seguridad de tus datos</h2>
                  <p className="text-gray-300 mb-4">
                    Implementamos medidas técnicas y organizativas para proteger tu información personal contra acceso
                    no autorizado, pérdida o alteración:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Cifrado SSL/TLS para todas las comunicaciones</li>
                    <li>Almacenamiento seguro de datos en servidores protegidos</li>
                    <li>Acceso restringido a información personal solo a personal autorizado</li>
                    <li>Auditorías de seguridad regulares</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Ningún sistema es completamente seguro. Si detectas alguna vulnerabilidad, contáctanos
                    inmediatamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Retención de datos */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. ¿Cuánto tiempo conservamos tus datos?</h2>
                  <p className="text-gray-300 mb-4">Conservamos tu información personal:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Datos de contacto:</strong> Hasta que solicites su eliminación o retires tu consentimiento
                    </li>
                    <li>
                      <strong>Datos contractuales:</strong> Durante la duración del contrato y hasta 7 años después para
                      cumplir con obligaciones fiscales
                    </li>
                    <li>
                      <strong>Datos analíticos:</strong> De forma anónima e indefinidamente para análisis estadísticos
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transferencias internacionales */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Transferencias internacionales de datos</h2>
                  <p className="text-gray-300 mb-4">
                    Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico
                    Europeo (EEE). Nos aseguramos de que existan garantías adecuadas para proteger tu información, como:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Cláusulas contractuales estándar aprobadas por la UE</li>
                    <li>Certificaciones de Privacy Shield o marcos equivalentes</li>
                    <li>Proveedores con certificaciones de seguridad reconocidas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menores de edad */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Menores de edad</h2>
                  <p className="text-gray-300">
                    Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos intencionalmente
                    información personal de menores sin el consentimiento parental. Si descubrimos que hemos recopilado
                    datos de un menor sin autorización, los eliminaremos de inmediato.
                  </p>
                </div>
              </div>
            </div>

            {/* Cambios en la política */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Cambios en esta política</h2>
                  <p className="text-gray-300">
                    Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras
                    prácticas o en la legislación aplicable. Te notificaremos sobre cambios significativos publicando la
                    nueva política en esta página con una nueva fecha de "Última actualización".
                  </p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Contacto</h2>
                  <p className="text-white mb-4">
                    Si tienes preguntas, inquietudes o deseas ejercer tus derechos de privacidad, contáctanos:
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-white mb-2">
                      <strong>TechBiz L.L.C.</strong>
                    </p>
                    <p className="text-white mb-2">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@techbizonline.com" className="underline hover:text-blue-200">
                        info@techbizonline.com
                      </a>
                    </p>
                    <p className="text-white">
                      <strong>Web:</strong>{" "}
                      <a href="https://techbizonline.com" className="underline hover:text-blue-200">
                        techbizonline.com
                      </a>
                    </p>
                  </div>
                  <p className="text-white mt-4 text-sm">
                    Responderemos a tu solicitud dentro de 30 días de acuerdo con la legislación aplicable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
