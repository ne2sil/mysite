"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, ShoppingCartIcon as CartIcon, CreditCard } from "lucide-react"
import type { CartItem } from "@/app/page"

interface ShoppingCartProps {
  items: CartItem[]
  onRemoveItem: (seatId: string) => void
  onClearCart: () => void
  onPurchase: () => void // добавляем обработчик покупки
}

export function ShoppingCart({ items, onRemoveItem, onClearCart, onPurchase }: ShoppingCartProps) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <Card className="sticky top-24 border border-gray-200 bg-white">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <CartIcon className="h-5 w-5 text-gray-600 flex-shrink-0" />
            <span className="font-bold text-gray-900">Корзина</span>
          </div>
          {items.length > 0 && (
            <Badge className="bg-yellow-400 text-black font-medium px-2 py-1 flex-shrink-0">{items.length}</Badge>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 p-4">
        {items.length === 0 ? (
          <div className="text-center py-8 space-y-2">
            <CartIcon className="h-8 w-8 text-gray-300 mx-auto" />
            <p className="text-gray-500 text-sm">Выберите места на схеме</p>
          </div>
        ) : (
          <>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.seatId} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Ряд {item.row}, место {item.seatNumber}
                    </p>
                    <p className="text-sm font-medium text-gray-700">{item.price.toLocaleString()}₽</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(item.seatId)}
                    className="text-gray-400 hover:text-red-500 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div className="bg-gray-50 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Итого:</span>
                  <span className="text-lg font-bold text-gray-900">{totalPrice.toLocaleString()}₽</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {items.length} {items.length === 1 ? "место" : items.length < 5 ? "места" : "мест"}
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                  onClick={onPurchase}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Купить билеты
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent"
                  onClick={onClearCart}
                >
                  Очистить корзину
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
