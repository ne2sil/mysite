// app/custom/[id]/ClientCopyParts.tsx — КЛИЕНТСКИЙ КОМПОНЕНТ
"use client"

import dynamic from "next/dynamic"

// Безопасные динамические импорты (подхватит default или именованный экспорт)
const SeatingChart = dynamic(
  () => import("@/components/seating-chart").then((m: any) => m.default ?? m.SeatingChart),
  { ssr: false }
)

const ShoppingCart = dynamic(
  () => import("@/components/shopping-cart").then((m: any) => m.default ?? m.ShoppingCart),
  { ssr: false }
)

// ЕСЛИ начнутся ошибки из-за формы — просто закомментируй две строки ниже (импорт и JSX)
const PurchaseForm = dynamic(
  () => import("@/components/purchase-form").then((m: any) => m.default ?? m.PurchaseForm),
  { ssr: false }
)

type Props = {
  payment?: {
    cardNumber?: string | null
    bank?: string | null
    recipient?: string | null
  }
}

export default function ClientCopyParts({ payment }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <SeatingChart />
      </div>
      <div className="md:col-span-1 space-y-6">
        <ShoppingCart />
        <PurchaseForm
          // Если форма не принимает эти пропсы — можно удалить их
          // @ts-ignore
          cardNumber={payment?.cardNumber}
          // @ts-ignore
          bank={payment?.bank}
          // @ts-ignore
          recipient={payment?.recipient}
        />
      </div>
    </div>
  )
}
