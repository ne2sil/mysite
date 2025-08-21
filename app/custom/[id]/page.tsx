// app/custom/[id]/page.tsx — СЕРВЕРНЫЙ КОМПОНЕНТ. НИКАКОГО dynamic и ssr:false ТУТ НЕТ.
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"

// серверные блоки
import EventInfoDyn from "@/components/dynamic/event-info-dyn"
import PaymentBlock from "@/components/dynamic/payment-block"

// клиентская обёртка (будет отдельно в ClientCopyParts.tsx)
import ClientCopyParts from "./ClientCopyParts"

export default async function CustomCopyPage({ params }: { params: { id: string } }) {
  const page = await prisma.eventPage.findUnique({ where: { id: params.id } })
  if (!page) notFound()

  // по истечении срока просто 404
  if (new Date() > page.expiresAt) notFound()

  const payment = await prisma.paymentSettings.findFirst({ where: { isActive: true } })

  return (
    <main className="container mx-auto px-4 py-8">
      <EventInfoDyn title={page.title} date={page.date} time={page.time} place={page.place} />
      <ClientCopyParts payment={payment ?? undefined} />
      <PaymentBlock cardNumber={payment?.cardNumber} bank={payment?.bank} recipient={payment?.recipient} />
    </main>
  )
}
