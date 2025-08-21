// components/dynamic/payment-block.tsx
import React from "react"

type Props = {
  cardNumber?: string | null
  bank?: string | null
  recipient?: string | null
}

export default function PaymentBlock({ cardNumber, bank, recipient }: Props) {
  return (
    <section className="mt-8 border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Оплата</h2>
      {cardNumber || bank || recipient ? (
        <ul className="space-y-1 text-sm">
          {cardNumber && <li><span className="font-medium">Карта:</span> {cardNumber}</li>}
          {bank && <li><span className="font-medium">Банк:</span> {bank}</li>}
          {recipient && <li><span className="font-medium">Получатель:</span> {recipient}</li>}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">Реквизиты не заданы.</p>
      )}
    </section>
  )
}
