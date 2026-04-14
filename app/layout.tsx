import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ModalProvider } from "./context/ModalContext"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechBiz - Transformamos empresas con tecnología",
  description: "Soluciones en consultoría, ciberseguridad, IA y marketing digital.",
  keywords: "consultoría, ciberseguridad, inteligencia artificial, marketing digital, formación empresarial",
  authors: [{ name: "TechBiz" }],
  creator: "TechBiz",
  publisher: "TechBiz",
  robots: "index, follow",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://techbizonline.com",
    siteName: "TechBiz",
    title: "Transformamos empresas con tecnología",
    description: "Soluciones en consultoría, ciberseguridad, IA y marketing digital.",
    images: [
      {
        url: "/techbiz-social-preview.png",
        width: 512,
        height: 512,
        alt: "TechBiz - Transformamos empresas con tecnología",
        type: "image/png",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@techbiz",
    creator: "@techbiz",
    title: "Transformamos empresas con tecnología",
    description: "Soluciones en consultoría, ciberseguridad, IA y marketing digital.",
    images: ["/techbiz-social-preview.png"],
  },

  // Favicon y iconos
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/techbiz-social-preview.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/techbiz-social-preview.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // Metaetiquetas adicionales
  other: {
    "theme-color": "#1f2937",
    "msapplication-TileColor": "#1f2937",
    "msapplication-TileImage": "/techbiz-social-preview.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PV1DGNNM9Q" />
        <Script
          id="gtag-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PV1DGNNM9Q');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1436746707627312');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1436746707627312&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="KhaYGzvyDLXYifYActByY5fy00PJxHtDf379tUG-wBY" />

        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://techbizonline.com" />

        {/* Structured Data para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechBiz",
              description:
                "Transformamos empresas con tecnología. Soluciones en consultoría, ciberseguridad, IA y marketing digital.",
              url: "https://techbizonline.com",
              logo: "https://techbizonline.com/techbiz-social-preview.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "customer service",
                email: "info@techbizonline.com",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61575830947425",
                "https://www.instagram.com/asantiago_techbiz/",
                "https://www.linkedin.com/in/adsr22/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased`}>
        <ModalProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
