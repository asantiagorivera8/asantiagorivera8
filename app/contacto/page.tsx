import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"

export const metadata = {
  title: "Contacto | TechBiz - Transformando empresas con tecnología",
  description: "Ponte en contacto con TechBiz. Estamos aquí para ayudarte a transformar tu empresa con tecnología.",
  openGraph: {
    title: "Contacto | TechBiz - Transformando empresas con tecnología",
    description: "Ponte en contacto con TechBiz. Estamos aquí para ayudarte a transformar tu empresa con tecnología.",
    type: "website",
    images: [
      {
        url: "/techbiz-social-preview.png",
        width: 512,
        height: 512,
        alt: "Contacto TechBiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | TechBiz - Transformando empresas con tecnología",
    description: "Ponte en contacto con TechBiz. Estamos aquí para ayudarte a transformar tu empresa con tecnología.",
    images: ["/techbiz-social-preview.png"],
  },
}

export default function ContactPage() {
  // Schema.org para la página de contacto
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto TechBiz",
    description: "Ponte en contacto con TechBiz. Estamos aquí para ayudarte a transformar tu empresa con tecnología.",
    url: "https://techbizonline.com/contacto",
    mainEntity: {
      "@type": "Organization",
      name: "TechBiz",
      email: "info@techbizonline.com",
      url: "https://techbizonline.com",
      logo: "https://techbizonline.com/techbiz-social-preview.png",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61575830947425",
        "https://www.instagram.com/asantiago_techbiz/",
        "https://www.linkedin.com/in/adsr22/",
      ],
    },
  }

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacta con TechBiz</h1>
          <p className="text-xl text-gray-300">
            ¿Listo para transformar tu empresa? Estamos aquí para ayudarte a dar el siguiente paso.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-400 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    </div>
  )
}
