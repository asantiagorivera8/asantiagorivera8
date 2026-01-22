// Servicio de email usando Resend
let resend: any = null

// Lazy load Resend only when needed
async function getResendClient() {
  if (!resend && typeof window === "undefined") {
    try {
      const { Resend } = await import("resend")
      resend = new Resend(process.env.RESEND_API_KEY)
    } catch (error) {
      console.error("Failed to load Resend:", error)
      return null
    }
  }
  return resend
}

export async function sendEmail({
  to,
  subject,
  html,
  from = "TechBiz <onboarding@resend.dev>",
}: {
  to: string
  subject: string
  html: string
  from?: string
}) {
  try {
    const resendClient = await getResendClient()

    if (!resendClient) {
      console.error("Resend client not available")
      return { success: false, error: "Email service not available" }
    }

    const { data, error } = await resendClient.emails.send({
      from,
      to: [to],
      subject,
      html,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }

    console.log("Email enviado exitosamente:", data)
    return { success: true, data }
  } catch (error) {
    console.error("Email service error:", error)
    return { success: false, error }
  }
}

// Template para emails de consulta gratuita
export function createConsultaEmailTemplate(data: {
  name: string
  email: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Nueva Consulta Gratuita - TechBiz</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1f2937 0%, #3b82f6 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">🚀 Nueva Consulta Gratuita</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6;">
          <h2 style="color: #1f2937; margin-top: 0;">Detalles del Cliente:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 10px 0;">${data.message.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;">
            <strong>Fecha y hora:</strong> ${new Date().toLocaleString("es-ES", {
              timeZone: "America/New_York",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Este email fue enviado automáticamente desde el sitio web de TechBiz</p>
          <p><strong>TechBiz</strong> - Transformando empresas con tecnología</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Template para emails de contacto
export function createContactEmailTemplate(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Nuevo Mensaje de Contacto - TechBiz</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1f2937 0%, #3b82f6 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">📧 Nuevo Mensaje de Contacto</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6;">
          <h2 style="color: #1f2937; margin-top: 0;">Información del Cliente:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.email}</td>
            </tr>
            ${
              data.phone
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.phone}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Asunto:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 10px 0;">${data.message.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;">
            <strong>Fecha y hora:</strong> ${new Date().toLocaleString("es-ES", {
              timeZone: "America/New_York",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Este email fue enviado automáticamente desde el sitio web de TechBiz</p>
          <p><strong>TechBiz</strong> - Transformando empresas con tecnología</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Template para emails de auditoría de seguridad
export function createAuditoriaEmailTemplate(data: {
  name: string
  email: string
  company: string
  employees: string
  description: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Solicitud de Auditoría de Seguridad - TechBiz</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">🛡️ URGENTE: Solicitud de Auditoría de Seguridad</h1>
        </div>
        
        <div style="background: #fef2f2; padding: 25px; border-radius: 8px; border-left: 4px solid #dc2626;">
          <h2 style="color: #991b1b; margin-top: 0;">Información del Cliente:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca; font-weight: bold;">Tamaño:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fecaca;">${data.employees} empleados</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Necesidades:</td>
              <td style="padding: 10px 0;">${data.description.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #fee2e2; border-radius: 8px; border: 1px solid #fecaca;">
          <p style="margin: 0; color: #991b1b; font-weight: bold;">
            ⚠️ PRIORIDAD ALTA - Responder en 24 horas
          </p>
          <p style="margin: 5px 0 0 0; color: #991b1b;">
            <strong>Fecha:</strong> ${new Date().toLocaleString("es-ES", {
              timeZone: "America/New_York",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Este email fue enviado automáticamente desde el sitio web de TechBiz</p>
          <p><strong>TechBiz</strong> - Transformando empresas con tecnología</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Template para emails de consulta de IA
export function createConsultaIAEmailTemplate(data: {
  name: string
  email: string
  company: string
  industry: string
  iaInterest: string
  description: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Consulta sobre Inteligencia Artificial - TechBiz</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">🧠 Nueva Consulta sobre IA</h1>
        </div>
        
        <div style="background: #faf5ff; padding: 25px; border-radius: 8px; border-left: 4px solid #7c3aed;">
          <h2 style="color: #581c87; margin-top: 0;">Información del Cliente:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff; font-weight: bold;">Industria:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff;">${data.industry}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff; font-weight: bold;">Área de IA:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e9d5ff;">${data.iaInterest}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Proyecto:</td>
              <td style="padding: 10px 0;">${data.description.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #ede9fe; border-radius: 8px;">
          <p style="margin: 0; color: #581c87;">
            <strong>Fecha y hora:</strong> ${new Date().toLocaleString("es-ES", {
              timeZone: "America/New_York",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Este email fue enviado automáticamente desde el sitio web de TechBiz</p>
          <p><strong>TechBiz</strong> - Transformando empresas con tecnología</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Template para emails de consulta de marketing
export function createConsultaMarketingEmailTemplate(data: {
  name: string
  email: string
  company: string
  businessType: string
  planInterest: string
  currentMarketing: string
  description: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Consulta sobre Marketing Digital - TechBiz</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">📈 Nueva Consulta de Marketing Digital</h1>
        </div>
        
        <div style="background: #fffbeb; padding: 25px; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <h2 style="color: #92400e; margin-top: 0;">Información del Cliente:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-weight: bold;">Tipo de negocio:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa;">${data.businessType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-weight: bold;">Plan de interés:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa;">${data.planInterest}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-weight: bold;">Marketing actual:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa;">${data.currentMarketing}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Objetivos:</td>
              <td style="padding: 10px 0;">${data.description.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
          <p style="margin: 0; color: #92400e;">
            <strong>Fecha y hora:</strong> ${new Date().toLocaleString("es-ES", {
              timeZone: "America/New_York",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Este email fue enviado automáticamente desde el sitio web de TechBiz</p>
          <p><strong>TechBiz</strong> - Transformando empresas con tecnología</p>
        </div>
      </div>
    </body>
    </html>
  `
}
