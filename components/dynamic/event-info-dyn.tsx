// components/dynamic/event-info-dyn.tsx
import React from "react"

type Props = {
  title: string
  date: string
  time: string
  place: string
}

export default function EventInfoDyn({ title, date, time, place }: Props) {
  return (
    <section className="mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="text-sm text-muted-foreground space-y-1">
        <div><span className="font-medium">Дата:</span> {date}</div>
        <div><span className="font-medium">Время:</span> {time}</div>
        <div><span className="font-medium">Место:</span> {place}</div>
      </div>
    </section>
  )
}
