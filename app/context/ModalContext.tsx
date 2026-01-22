"use client"

import { createContext, useState, useContext, type ReactNode } from "react"
import ConsultaGratuitaModal from "@/app/components/ConsultaGratuitaModal"
import AuditoriaModal from "@/app/components/AuditoriaModal"
import ConsultaIAModal from "@/app/components/ConsultaIAModal"
import ConsultaMarketingModal from "@/app/components/ConsultaMarketingModal"

interface ModalContextType {
  openConsultaModal: () => void
  closeConsultaModal: () => void
  openAuditoriaModal: () => void
  closeAuditoriaModal: () => void
  openConsultaIAModal: () => void
  closeConsultaIAModal: () => void
  openConsultaMarketingModal: (selectedPlan?: string) => void
  closeConsultaMarketingModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isConsultaModalOpen, setIsConsultaModalOpen] = useState(false)
  const [isAuditoriaModalOpen, setIsAuditoriaModalOpen] = useState(false)
  const [isConsultaIAModalOpen, setIsConsultaIAModalOpen] = useState(false)
  const [isConsultaMarketingModalOpen, setIsConsultaMarketingModalOpen] = useState(false)
  const [selectedMarketingPlan, setSelectedMarketingPlan] = useState<string | undefined>(undefined)

  const openConsultaModal = () => setIsConsultaModalOpen(true)
  const closeConsultaModal = () => setIsConsultaModalOpen(false)
  const openAuditoriaModal = () => setIsAuditoriaModalOpen(true)
  const closeAuditoriaModal = () => setIsAuditoriaModalOpen(false)
  const openConsultaIAModal = () => setIsConsultaIAModalOpen(true)
  const closeConsultaIAModal = () => setIsConsultaIAModalOpen(false)
  const openConsultaMarketingModal = (selectedPlan?: string) => {
    setSelectedMarketingPlan(selectedPlan)
    setIsConsultaMarketingModalOpen(true)
  }
  const closeConsultaMarketingModal = () => {
    setIsConsultaMarketingModalOpen(false)
    setSelectedMarketingPlan(undefined)
  }

  return (
    <ModalContext.Provider
      value={{
        openConsultaModal,
        closeConsultaModal,
        openAuditoriaModal,
        closeAuditoriaModal,
        openConsultaIAModal,
        closeConsultaIAModal,
        openConsultaMarketingModal,
        closeConsultaMarketingModal,
      }}
    >
      {children}
      <ConsultaGratuitaModal isOpen={isConsultaModalOpen} onClose={closeConsultaModal} />
      <AuditoriaModal isOpen={isAuditoriaModalOpen} onClose={closeAuditoriaModal} />
      <ConsultaIAModal isOpen={isConsultaIAModalOpen} onClose={closeConsultaIAModal} />
      <ConsultaMarketingModal
        isOpen={isConsultaMarketingModalOpen}
        onClose={closeConsultaMarketingModal}
        selectedPlan={selectedMarketingPlan}
      />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
