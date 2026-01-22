"use server"

import { createClient, createAdminClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ReviewData {
  nombre: string
  email: string
  empresa?: string
  calificacion: number
  titulo: string
  contenido: string
}

export async function submitReview(data: ReviewData) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("reviews").insert({
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa || null,
      calificacion: data.calificacion,
      titulo: data.titulo,
      contenido: data.contenido,
      aprobado: false,
      destacado: false,
    })

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, error: "Error al guardar la reseña" }
    }

    // Send email notification
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "TechBiz <noreply@techbiz.com>",
        to: process.env.EMAIL_TO || "info@techbiz.com",
        subject: `Nueva Reseña de ${data.nombre}`,
        html: `
          <h2>Nueva Reseña Recibida</h2>
          <p><strong>Nombre:</strong> ${data.nombre}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Empresa:</strong> ${data.empresa || "No especificada"}</p>
          <p><strong>Calificación:</strong> ${"★".repeat(data.calificacion)}${"☆".repeat(5 - data.calificacion)}</p>
          <p><strong>Título:</strong> ${data.titulo}</p>
          <p><strong>Contenido:</strong></p>
          <p>${data.contenido}</p>
          <hr>
          <p>Visita el panel de administración para aprobar esta reseña.</p>
        `,
      })
    } catch (emailError) {
      console.error("Email error:", emailError)
      // Don't fail the submission if email fails
    }

    return { success: true }
  } catch (error) {
    console.error("Submit review error:", error)
    return { success: false, error: "Error al enviar la reseña" }
  }
}

export async function getApprovedReviews(limit?: number) {
  try {
    const supabase = await createClient()

    let query = supabase
      .from("reviews")
      .select("*")
      .eq("aprobado", true)
      .order("created_at", { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      console.error("Get reviews error:", error)
      return { data: [], error: "Error al obtener reseñas" }
    }

    return { data: data || [], error: null }
  } catch (error) {
    console.error("Get reviews error:", error)
    return { data: [], error: "Error al obtener reseñas" }
  }
}

export async function getAllReviews() {
  try {
    // Use admin client to bypass RLS and see all reviews including pending ones
    const supabase = await createAdminClient()

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Get all reviews error:", error)
      return { success: false, data: [], error: "Error al obtener reseñas" }
    }

    return { success: true, data: data || [], error: null }
  } catch (error) {
    console.error("Get all reviews error:", error)
    return { success: false, data: [], error: "Error al obtener reseñas" }
  }
}

export async function approveReview(id: string) {
  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from("reviews")
      .update({ aprobado: true })
      .eq("id", id)

    if (error) {
      console.error("Approve review error:", error)
      return { success: false, error: "Error al aprobar la reseña" }
    }

    return { success: true }
  } catch (error) {
    console.error("Approve review error:", error)
    return { success: false, error: "Error al aprobar la reseña" }
  }
}

export async function rejectReview(id: string) {
  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from("reviews")
      .update({ aprobado: false })
      .eq("id", id)

    if (error) {
      console.error("Reject review error:", error)
      return { success: false, error: "Error al rechazar la reseña" }
    }

    return { success: true }
  } catch (error) {
    console.error("Reject review error:", error)
    return { success: false, error: "Error al rechazar la reseña" }
  }
}

export async function deleteReview(id: string) {
  try {
    // Use admin client to bypass RLS for admin operations
    const supabase = await createAdminClient()

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id)

    if (error) {
      console.error("Delete review error:", error)
      return { success: false, error: "Error al eliminar la reseña" }
    }

    return { success: true }
  } catch (error) {
    console.error("Delete review error:", error)
    return { success: false, error: "Error al eliminar la reseña" }
  }
}

export async function updateReviewStatus(id: string, aprobado: boolean) {
  try {
    // Use admin client to bypass RLS for admin operations
    const supabase = await createAdminClient()

    const { error } = await supabase
      .from("reviews")
      .update({ aprobado })
      .eq("id", id)

    if (error) {
      console.error("Update review status error:", error)
      return { success: false, error: "Error al actualizar el estado de la reseña" }
    }

    return { success: true }
  } catch (error) {
    console.error("Update review status error:", error)
    return { success: false, error: "Error al actualizar el estado de la reseña" }
  }
}
