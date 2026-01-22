"use client"

import type React from "react"
import { Shield } from "lucide-react"
import { useModal } from "@/app/context/ModalContext"

interface AuditoriaButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function AuditoriaButton({
  className = "btn-primary",
  children = "Solicita Auditoría de Seguridad",
}: AuditoriaButtonProps) {
  const { openAuditoriaModal } = useModal()

  return (
    <button onClick={openAuditoriaModal} className={className}>
      <Shield className="mr-2 h-5 w-5 inline-block" />
      {children}
    </button>
  )
}
