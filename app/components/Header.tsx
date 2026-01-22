"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import ConsultaGratuitaButton from "./ConsultaGratuitaButton"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiciosOpen, setIsServiciosOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-techbiz.png"
              alt="TechBiz Logo"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Inicio
            </Link>

            {/* Dropdown Servicios */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white"
                onMouseEnter={() => setIsServiciosOpen(true)}
                onMouseLeave={() => setIsServiciosOpen(false)}
              >
                Servicios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServiciosOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsServiciosOpen(true)}
                  onMouseLeave={() => setIsServiciosOpen(false)}
                >
                  <Link
                    href="/consultoria"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    Consultoría Empresarial
                  </Link>
                  <Link href="/staffing" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    Staffing y Reclutamiento
                  </Link>
                  <Link
                    href="/recursos-humanos"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    Recursos Humanos
                  </Link>
                  <Link
                    href="/ciberseguridad"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    Ciberseguridad
                  </Link>
                  <Link
                    href="/inteligencia-artificial"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    Inteligencia Artificial
                  </Link>
                  <Link href="/marketing" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    Marketing Digital
                  </Link>
                  <div className="border-t border-gray-700 my-2"></div>
                  <Link href="/academia" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    Academia Online
                  </Link>
                  <Link href="/libros" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    Libros Especializados
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>

            <Link href="/acerca-de-nosotros" className="text-gray-300 hover:text-white">
              Nosotros
            </Link>

            <Link href="/contacto" className="text-gray-300 hover:text-white">
              Contacto
            </Link>

            <Link href="/reviews" className="text-gray-300 hover:text-white">
              Reseñas
            </Link>
          </div>

          {/* Botón Consulta Gratuita - Siempre a la derecha */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <ConsultaGratuitaButton className="btn-primary" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white ml-4"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link href="/" className="block px-4 py-3 text-gray-300 hover:text-white" onClick={handleLinkClick}>
                Inicio
              </Link>

              {/* Servicios en móvil */}
              <div className="px-4 py-2">
                <span className="text-gray-400 font-semibold text-sm uppercase tracking-wide">Servicios</span>
              </div>
              <Link
                href="/consultoria"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Consultoría Empresarial
              </Link>
              <Link
                href="/staffing"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Staffing y Reclutamiento
              </Link>
              <Link
                href="/recursos-humanos"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Recursos Humanos
              </Link>
              <Link
                href="/ciberseguridad"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Ciberseguridad
              </Link>
              <Link
                href="/inteligencia-artificial"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Inteligencia Artificial
              </Link>
              <Link
                href="/marketing"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Marketing Digital
              </Link>
              <Link
                href="/academia"
                className="block px-6 py-2 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Academia Online
              </Link>
              <Link href="/libros" className="block px-6 py-2 text-gray-300 hover:text-white" onClick={handleLinkClick}>
                Libros Especializados
              </Link>

              <Link href="/blog" className="block px-4 py-3 text-gray-300 hover:text-white" onClick={handleLinkClick}>
                Blog
              </Link>

              <Link
                href="/acerca-de-nosotros"
                className="block px-4 py-3 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Nosotros
              </Link>

              <Link
                href="/contacto"
                className="block px-4 py-3 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Contacto
              </Link>

              <Link
                href="/reviews"
                className="block px-4 py-3 text-gray-300 hover:text-white"
                onClick={handleLinkClick}
              >
                Reseñas
              </Link>

              {/* Boton Consulta Gratuita en mobile - tambien cerrar el menu cuando se abre el modal */}
              <div className="px-4 py-3">
                <div onClick={handleLinkClick}>
                  <ConsultaGratuitaButton className="btn-primary w-full text-center" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
