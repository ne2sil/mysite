"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Seat, CartItem } from "@/app/page"

interface SeatingChartProps {
  selectedSeats: CartItem[]
  onSeatSelect: (seat: Seat) => void
  onSeatDeselect: (seatId: string) => void
}

const ROWS = 9

const getPriceForRow = (row: number): number => {
  if (row === 1) return 6090
  if (row === 2) return 5090
  if (row === 3) return 4090
  if (row === 4 || row === 5) return 3790
  if (row === 6) return 3290
  return 2400
}

const isVipBox = (row: number, seatNum: number): boolean => {
  return row === 1 && seatNum >= 4 && seatNum <= 7
}

const getRowLayout = (): { leftSection: number; centerSection: number; rightSection: number } => {
  return { leftSection: 3, centerSection: 4, rightSection: 3 }
}

export function SeatingChart({ selectedSeats, onSeatSelect, onSeatDeselect }: SeatingChartProps) {
  const [seats, setSeats] = useState<Seat[]>([])
  const [notification, setNotification] = useState<{ message: string; show: boolean }>({ message: "", show: false })

  useEffect(() => {
    const initialSeats: Seat[] = []
    const occupiedSeats = new Set([
      "1-2",
      "2-9",
      "3-1",
      "3-6",
      "4-3",
      "4-8",
      "5-5",
      "5-10",
      "6-2",
      "6-7",
      "7-4",
      "7-9",
      "8-1",
      "8-6",
      "9-3",
      "9-8",
    ])

    for (let row = 1; row <= ROWS; row++) {
      const layout = getRowLayout()
      const totalSeats = layout.leftSection + layout.centerSection + layout.rightSection

      for (let seatNum = 1; seatNum <= totalSeats; seatNum++) {
        if (isVipBox(row, seatNum)) continue

        const seatId = `${row}-${seatNum}`
        initialSeats.push({
          id: seatId,
          row,
          number: seatNum,
          price: getPriceForRow(row),
          isOccupied: occupiedSeats.has(seatId),
          isSelected: false,
        })
      }
    }

    setSeats(initialSeats)
  }, [])

  const showNotification = (message: string) => {
    setNotification({ message, show: true })
  }

  const handleRowClick = (rowNumber: number) => {
    showNotification(`Это РЯД ${rowNumber}, а не место! Выберите место в ряду.`)
  }

  const handleSeatClick = (seat: Seat) => {
    if (seat.isOccupied) {
      showNotification("Это место занято! Выберите другое свободное место.")
      return
    }

    const isCurrentlySelected = selectedSeats.some((item) => item.seatId === seat.id)

    if (isCurrentlySelected) {
      onSeatDeselect(seat.id)
    } else {
      onSeatSelect(seat)
    }
  }

  const handleVipBoxClick = (vipId: string, row: number) => {
    const isCurrentlySelected = selectedSeats.some((item) => item.seatId === vipId)

    if (isCurrentlySelected) {
      onSeatDeselect(vipId)
    } else {
      const vipSeat: Seat = {
        id: vipId,
        row,
        number: 0,
        price: 12990,
        isOccupied: false,
        isSelected: false,
      }
      onSeatSelect(vipSeat)
    }
  }

  const isSeatSelected = (seatId: string) => {
    return selectedSeats.some((item) => item.seatId === seatId)
  }

  const renderRowWithSections = (row: number, rowSeats: Seat[]) => {
    const layout = getRowLayout()
    const isVipRow = row === 1
    const vipId = `vip-${row}`

    const leftSeats = rowSeats.filter((seat) => seat.number >= 1 && seat.number <= 3)
    const centerSeats = rowSeats.filter((seat) => seat.number >= 4 && seat.number <= 7)
    const rightSeats = rowSeats.filter((seat) => seat.number >= 8 && seat.number <= 10)

    return (
      <div className="flex items-center justify-center w-full min-w-0">
        <div className="flex space-x-0.5 sm:space-x-1 w-[45px] sm:w-[116px] justify-start mr-1 sm:mr-8 shrink-0">
          {leftSeats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => handleSeatClick(seat)}
              className={cn(
                "w-3.5 h-3.5 sm:w-9 sm:h-9",
                "rounded text-[8px] sm:text-sm font-bold transition-all duration-200",
                "border shadow-sm shrink-0",
                {
                  "bg-gray-200 text-gray-400 cursor-pointer border-gray-300": seat.isOccupied,
                  "bg-yellow-400 text-black border-yellow-600 shadow-lg scale-105": isSeatSelected(seat.id),
                  "bg-white hover:bg-yellow-50 text-gray-800 cursor-pointer border-gray-400 hover:border-yellow-400 hover:shadow-md hover:scale-105":
                    !seat.isOccupied && !isSeatSelected(seat.id),
                },
              )}
              title={seat.isOccupied ? "Место занято" : `Ряд ${seat.row}, место ${seat.number} - ${seat.price}₽`}
            >
              {seat.number}
            </button>
          ))}
        </div>

        <div className="w-[60px] sm:w-[148px] flex justify-center shrink-0">
          {isVipRow ? (
            <button
              onClick={() => handleVipBoxClick(vipId, row)}
              className={cn(
                "w-[60px] h-4 sm:w-[148px] sm:h-12 relative overflow-hidden",
                "rounded-lg sm:rounded-xl text-[8px] sm:text-sm font-bold transition-all duration-300",
                "border shadow-xl transform hover:scale-105 shrink-0",
                "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 text-white border-purple-400",
                "hover:from-purple-700 hover:via-pink-700 hover:to-purple-900 hover:shadow-purple-500/25",
                "flex items-center justify-center",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
                {
                  "from-yellow-400 via-orange-400 to-yellow-600 text-black border-yellow-500 shadow-yellow-500/25 scale-105":
                    isSeatSelected(vipId),
                },
              )}
              title={`VIP Ложа - Премиум места с лучшим видом - 12990₽`}
            >
              <div className="flex flex-col items-center">
                <span className="text-[6px] sm:text-xs font-medium opacity-90">VIP</span>
                <span className="text-[6px] sm:text-xs font-bold hidden sm:block">ЛОЖА</span>
              </div>
            </button>
          ) : (
            <div className="flex space-x-0.5 sm:space-x-1 justify-center">
              {centerSeats.map((seat) => (
                <button
                  key={seat.id}
                  onClick={() => handleSeatClick(seat)}
                  className={cn(
                    "w-3.5 h-3.5 sm:w-9 sm:h-9",
                    "rounded text-[8px] sm:text-sm font-bold transition-all duration-200",
                    "border shadow-sm shrink-0",
                    {
                      "bg-gray-200 text-gray-400 cursor-pointer border-gray-300": seat.isOccupied,
                      "bg-yellow-400 text-black border-yellow-600 shadow-lg scale-105": isSeatSelected(seat.id),
                      "bg-white hover:bg-yellow-50 text-gray-800 cursor-pointer border-gray-400 hover:border-yellow-400 hover:shadow-md hover:scale-105":
                        !seat.isOccupied && !isSeatSelected(seat.id),
                    },
                  )}
                  title={seat.isOccupied ? "Место занято" : `Ряд ${seat.row}, место ${seat.number} - ${seat.price}₽`}
                >
                  {seat.number}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex space-x-0.5 sm:space-x-1 w-[45px] sm:w-[116px] justify-end ml-1 sm:ml-8 shrink-0">
          {rightSeats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => handleSeatClick(seat)}
              className={cn(
                "w-3.5 h-3.5 sm:w-9 sm:h-9",
                "rounded text-[8px] sm:text-sm font-bold transition-all duration-200",
                "border shadow-sm shrink-0",
                {
                  "bg-gray-200 text-gray-400 cursor-pointer border-gray-300": seat.isOccupied,
                  "bg-yellow-400 text-black border-yellow-600 shadow-lg scale-105": isSeatSelected(seat.id),
                  "bg-white hover:bg-yellow-50 text-gray-800 cursor-pointer border-gray-400 hover:border-yellow-400 hover:shadow-md hover:scale-105":
                    !seat.isOccupied && !isSeatSelected(seat.id),
                },
              )}
              title={seat.isOccupied ? "Место занято" : `Ряд ${seat.row}, место ${seat.number} - ${seat.price}₽`}
            >
              {seat.number}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      {notification.show && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 max-w-lg mx-4 text-center shadow-2xl border border-gray-200/50 transform scale-95 animate-[slideUp_0.5s_ease-out_forwards]">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
              Внимание!
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">{notification.message}</p>
            <button
              onClick={() => setNotification({ message: "", show: false })}
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black font-bold py-4 px-10 rounded-2xl hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-yellow-300/50"
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      <Card className="border border-gray-200 bg-white">
        <CardHeader className="text-center space-y-3 pb-3">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Выберите места</CardTitle>
          <div className="hidden sm:block text-sm text-gray-600 bg-blue-50 rounded-lg p-2 border border-blue-200">
            💡 <strong>Структура зала:</strong> Левая секция (места 1-3) • VIP Ложа (только 1 ряд) • Правая секция
            (места 8-10)
          </div>
        </CardHeader>

        <CardContent className="space-y-4 px-3 sm:px-6 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-1 sm:gap-2 text-[10px] sm:text-xs">
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-[11px] sm:text-xs font-semibold">
              VIP - 12990₽
            </Badge>
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-yellow-400 text-black border-0 text-[11px] sm:text-xs font-semibold">
              1 ряд - 6090₽
            </Badge>
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-yellow-400 text-black border-0 text-[11px] sm:text-xs font-semibold">
              2 ряд - 5090₽
            </Badge>
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-yellow-400 text-black border-0 text-[11px] sm:text-xs font-semibold">
              3 ряд - 4090₽
            </Badge>
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-yellow-400 text-black border-0 text-[11px] sm:text-xs font-semibold">
              4-5 ряд - 3790₽
            </Badge>
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-yellow-400 text-black border-0 text-[11px] sm:text-xs font-semibold">
              6 ряд - 3290₽
            </Badge>
            <Badge className="justify-center py-2 sm:py-1 px-2 sm:px-3 bg-yellow-400 text-black border-0 text-[11px] sm:text-xs font-semibold">
              7-9 ряд - 2400₽
            </Badge>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-2 sm:p-4 space-y-2 sm:space-y-3 border overflow-hidden">
            <div className="flex items-center space-x-2 sm:space-x-4 mb-2">
              <div className="w-6 sm:w-10 text-center text-[10px] sm:text-sm font-bold text-gray-500 uppercase tracking-wide">
                РЯДЫ
              </div>
              <div className="flex-1 text-center text-[10px] sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                МЕСТА В ЗАЛЕ
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
              <div className="w-6 sm:w-10"></div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-[160px] sm:max-w-[436px] h-6 sm:h-16 bg-gradient-to-b from-gray-600 to-gray-700 text-white rounded-b-full flex items-center justify-center font-bold text-[10px] sm:text-lg shadow-xl border-2 border-gray-500 border-t-0">
                  СЦЕНА
                </div>
              </div>
            </div>

            <div className="h-2 sm:h-6"></div>

            {Array.from({ length: ROWS }, (_, rowIndex) => {
              const row = rowIndex + 1
              const rowSeats = seats.filter((seat) => seat.row === row)

              return (
                <div key={row} className="flex items-center space-x-2 sm:space-x-4">
                  <button
                    onClick={() => handleRowClick(row)}
                    className="w-6 sm:w-10 text-center text-[10px] sm:text-sm font-bold text-white bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg py-1 sm:py-1.5 shadow-md border hover:from-gray-700 hover:to-gray-800 transition-all duration-200 cursor-pointer shrink-0"
                  >
                    {row}
                  </button>

                  <div className="flex-1 flex justify-center min-w-0">{renderRowWithSections(row, rowSeats)}</div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-[10px] sm:text-sm bg-gray-50 rounded-lg p-2 sm:p-3">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-3 h-3 sm:w-5 sm:h-5 bg-white border border-gray-300 rounded shadow-sm shrink-0"></div>
              <span className="text-gray-700 font-medium">Свободно</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-3 h-3 sm:w-5 sm:h-5 bg-yellow-400 rounded shadow-sm shrink-0"></div>
              <span className="text-gray-700 font-medium">Выбрано</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-3 h-3 sm:w-5 sm:h-5 bg-gray-200 rounded shadow-sm shrink-0"></div>
              <span className="text-gray-700 font-medium">Занято</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded shadow-sm shrink-0"></div>
              <span className="text-gray-700 font-medium">VIP</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
