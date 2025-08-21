import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function assertBot(req: Request) {
  const auth = req.headers.get("authorization") || ""
  const token = auth.replace(/^Bearer\s+/i, "")
  if (!process.env.BOT_SECRET || token !== process.env.BOT_SECRET) {
    throw new Error("unauthorized")
  }
}

export async function GET() {
  const current = await prisma.paymentSettings.findFirst({ where: { isActive: true } })
  return NextResponse.json({ ok: true, data: current })
}

export async function POST(req: Request) {
  try {
    assertBot(req)
    const body = await req.json() as {
      cardNumber: string
      bank: string
      recipient: string
    }

    if (!body?.cardNumber || !body?.bank || !body?.recipient) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
    }

    await prisma.paymentSettings.updateMany({ where: { isActive: true }, data: { isActive: false } })
    const created = await prisma.paymentSettings.create({ data: { ...body, isActive: true } })

    return NextResponse.json({ ok: true, data: created })
  } catch (e: any) {
    const code = e?.message === "unauthorized" ? 401 : 400
    return NextResponse.json({ ok: false, error: e?.message || "Bad request" }, { status: code })
  }
}
