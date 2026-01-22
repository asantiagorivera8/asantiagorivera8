"use client"

import { useEffect, useState } from "react"

const clients = [
  {
    name: "Dr. Jose Ferrer",
    url: "https://drjoseferrer.com/",
  },
  {
    name: "Little Tree Foundation",
    url: null,
  },
  {
    name: "SetUp Consulting",
    url: null,
  },
  {
    name: "Terminal34",
    url: "https://terminal34pr.com/",
  },
  {
    name: "Fundación RHC",
    url: null,
  },
  {
    name: "HBN Academy",
    url: "https://academyhbn.com",
  },
]

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Empresas que han confiado en TechBiz</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`text-center p-4 rounded-lg transition-all duration-500 ${
                index === currentIndex ? "bg-gray-800 text-blue-400 scale-110" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {client.url ? (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:underline transition-all duration-300"
                >
                  {client.name}
                </a>
              ) : (
                <div className="text-lg font-semibold">{client.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
