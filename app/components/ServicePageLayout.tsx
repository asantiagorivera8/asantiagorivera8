import type React from "react"
import Image from "next/image"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  logoUrl?: string
  logoAlt?: string
  children: React.ReactNode
}

export default function ServicePageLayout({ title, subtitle, imageUrl, imageAlt, logoUrl, logoAlt, children }: ServicePageLayoutProps) {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-gray-800">
        <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            {logoUrl && (
              <Image
                src={logoUrl || "/placeholder.svg"}
                alt={logoAlt || "Logo"}
                width={80}
                height={80}
                className="rounded-xl"
              />
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          </div>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    </>
  )
}
