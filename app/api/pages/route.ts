import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function assertBot(req: Request) {
  const auth = req.headers.get("authorization") || ""
  const token = auth.replace(/^Bearer\s+/i, "")
  if (!process.env.BOT_SECRET || token !== process.env.BOT_SECRET) {
    throw new Error("unauthorized")
  }
}

export async function POST(req: Request) {
  try {
    assertBot(req)
    const body = await req.json() as {
      title: string
      date: string
      time: string
      place: string
    }

    if (!body?.title || !body?.date || !body?.time || !body?.place) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
    }

    const now = new Date()
    const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000) // 7 дней

    const page = await prisma.eventPage.create({
      data: { ...body, expiresAt },
    })

    return NextResponse.json({
      ok: true,
      url: `/custom/${page.id}`,
      id: page.id,
      expiresAt: page.expiresAt,
    })
  } catch (e: any) {
    const code = e?.message === "unauthorized" ? 401 : 400
    return NextResponse.json({ ok: false, error: e?.message || "Bad request" }, { status: code })
  }
}
