"use client"

import { useState, useEffect } from "react"
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Copy, Check } from "lucide-react"

interface ShareButtonProps {
  title: string
  url: string
  description?: string
}

export default function ShareButton({ title, url, description = "" }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render anything on server side
  if (!isClient) {
    return (
      <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">
        <Share2 className="w-4 h-4 mr-2" />
        Compartir
      </button>
    )
  }

  const shareData = {
    title,
    url,
    text: description,
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  const copyToClipboard = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea")
        textArea.value = url
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error("Error copying to clipboard:", error)
    }
  }

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  }

  const socialButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      url: shareUrls.facebook,
      color: "hover:bg-blue-600",
      textColor: "hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: shareUrls.twitter,
      color: "hover:bg-sky-500",
      textColor: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: shareUrls.linkedin,
      color: "hover:bg-blue-700",
      textColor: "hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: shareUrls.whatsapp,
      color: "hover:bg-green-600",
      textColor: "hover:text-white",
    },
  ]

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={handleNativeShare}
        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Compartir
      </button>

      {/* Menú desplegable para navegadores sin Web Share API */}
      {isOpen && typeof navigator !== "undefined" && !navigator.share && (
        <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-4 z-50 min-w-[280px]">
          <div className="mb-3">
            <h4 className="text-white font-semibold text-sm mb-2">Compartir artículo</h4>
          </div>

          {/* Botones de redes sociales */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {socialButtons.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-3 py-2 text-gray-300 ${social.textColor} ${social.color} rounded-lg transition-all duration-300 text-sm font-medium`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {social.name}
                </a>
              )
            })}
          </div>

          {/* Copiar enlace */}
          <div className="border-t border-gray-700 pt-3">
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center justify-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300 text-sm font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar enlace
                </>
              )}
            </button>
          </div>

          {/* Botón para cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}

      {/* Overlay para cerrar el menú */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
