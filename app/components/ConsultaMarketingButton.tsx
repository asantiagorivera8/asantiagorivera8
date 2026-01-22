"use client"

import type React from "react"
import { TrendingUp } from "lucide-react"
import { useModal } from "@/app/context/ModalContext"

interface ConsultaMarketingButtonProps {
  className?: string
  children?: React.ReactNode
  selectedPlan?: string
}

export default function ConsultaMarketingButton({
  className = "btn-primary",
  children = "Solicitar Información",
  selectedPlan,
}: ConsultaMarketingButtonProps) {
  const { openConsultaMarketingModal } = useModal()

  const handleClick = () => {
    openConsultaMarketingModal(selectedPlan)
  }

  return (
    <button onClick={handleClick} className={className}>
      <TrendingUp className="mr-2 h-5 w-5 inline-block" />
      {children}
    </button>
  )
}
