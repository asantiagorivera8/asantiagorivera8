"use client"

import type React from "react"

import { useModal } from "@/app/context/ModalContext"

interface ConsultaGratuitaButtonProps {
  className?: string
  children?: React.ReactNode
  customMessage?: string
}

export default function ConsultaGratuitaButton({
  className = "btn-primary",
  children = "Consulta Gratuita",
  customMessage,
}: ConsultaGratuitaButtonProps) {
  const { openConsultaModal } = useModal()

  const handleClick = () => {
    if (customMessage) {
      sessionStorage.setItem("consultaModalMessage", customMessage)
    } else {
      sessionStorage.removeItem("consultaModalMessage")
    }
    openConsultaModal()
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
