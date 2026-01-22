"use client"

import type React from "react"
import { Brain } from "lucide-react"
import { useModal } from "@/app/context/ModalContext"

interface ConsultaIAButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function ConsultaIAButton({
  className = "btn-primary",
  children = "Consulta sobre IA",
}: ConsultaIAButtonProps) {
  const { openConsultaIAModal } = useModal()

  return (
    <button onClick={openConsultaIAModal} className={className}>
      <Brain className="mr-2 h-5 w-5 inline-block" />
      {children}
    </button>
  )
}
