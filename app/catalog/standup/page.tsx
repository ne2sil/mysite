"use client"

import { useState } from "react"
import { EventInfo } from "@/components/event-info"
import { SeatingChart } from "@/components/seating-chart"
import { ShoppingCart } from "@/components/shopping-cart"
import { LoginModal } from "@/components/login-modal"
import { PurchaseForm } from "@/components/purchase-form"

export interface Seat {
  id: string
  row: number
  number: number
  price: number
  isOccupied: boolean
  isSelected: boolean
}

export interface CartItem {
  seatId: string
  row: number
  seatNumber: number
  price: number
}

export default function StandupEventPage() {
  const [selectedSeats, setSelectedSeats] = useState<CartItem[]>([])
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [showMobileCart, setShowMobileCart] = useState(false)
  const [selectedCity, setSelectedCity] = useState("Москва")
  const [showCityDropdown, setShowCityDropdown] = useState(false)
  const [isPurchaseFormOpen, setIsPurchaseFormOpen] = useState(false)

  const cities = [
    "Алушта",
    "Ангарск",
    "Архангельск",
    "Армавир",
    "Астрахань",
    "Балашиха",
    "Барнаул",
    "Белгород",
    "Бийск",
    "Благовещенск",
    "Братск",
    "Брянск",
    "Великий Новгород",
    "Владивосток",
    "Владикавказ",
    "Владимир",
    "Волгоград",
    "Волгодонск",
    "Волжский",
    "Вологда",
    "Воронеж",
    "Грозный",
    "Дзержинск",
    "Евпатория",
    "Екатеринбург",
    "Жуковский",
    "Золотое",
    "Иваново",
    "Ижевск",
    "Иркутск",
    "Йошкар-Ола",
    "Казань",
    "Калининград",
    "Калуга",
    "Каменск-Уральский",
    "Кемерово",
    "Керчь",
    "Киров",
    "Комсомольск-на-Амуре",
    "Копейск",
    "Королёв",
    "Кострома",
    "Краснодар",
    "Красноярск",
    "Курган",
    "Курск",
    "Липецк",
    "Люберцы",
    "Магнитогорск",
    "Махачкала",
    "Москва",
    "Мурманск",
    "Мытищи",
    "Находка",
    "Нижневартовск",
    "Нижнекамск",
    "Нижний Новгород",
    "Новокузнецк",
    "Новомосковск",
    "Новороссийск",
    "Новосибирск",
    "Новочеркасск",
    "Норильск",
    "Омск",
    "Оренбург",
    "Орёл",
    "Орск",
    "Пенза",
    "Первоуральск",
    "Пермь",
    "Петрозаводск",
    "Подольск",
    "Прокопьевск",
    "Реутов",
    "Ростов-на-Дону",
    "Рыбинск",
    "Рязань",
    "Самара",
    "Санкт-Петербург",
    "Саратов",
    "Севастополь",
    "Северодвинск",
    "Симферополь",
    "Смоленск",
    "Сочи",
    "Ставрополь",
    "Старый Оскол",
    "Стерлитамак",
    "Сургут",
    "Сызрань",
    "Таганрог",
    "Тамбов",
    "Тверь",
    "Тольятти",
    "Томск",
    "Тула",
    "Тюмень",
    "Уфа",
    "Ульяновск",
    "Феодосия",
    "Хабаровск",
    "Химки",
    "Череповец",
    "Чебоксары",
    "Челябинск",
    "Чита",
    "Шахты",
    "Электросталь",
    "Энгельс",
    "Якутск",
    "Ялта",
    "Ярославль",
  ]

  const addToCart = (seat: Seat) => {
    console.log("[v0] Adding seat to cart:", seat)
    const cartItem: CartItem = {
      seatId: seat.id,
      row: seat.row,
      seatNumber: seat.number,
      price: seat.price,
    }
    setSelectedSeats((prev) => {
      const newSeats = [...prev, cartItem]
      console.log("[v0] Updated selectedSeats:", newSeats)
      return newSeats
    })
  }

  const removeFromCart = (seatId: string) => {
    setSelectedSeats((prev) => prev.filter((item) => item.seatId !== seatId))
  }

  const clearCart = () => {
    setSelectedSeats([])
  }

  const totalPrice = selectedSeats.reduce((sum, item) => sum + item.price, 0)

  const handlePurchase = () => {
    setIsPurchaseFormOpen(true)
    setShowMobileCart(false)
  }

  console.log("[v0] Current selectedSeats length:", selectedSeats.length)
  console.log("[v0] Should show mobile cart button:", selectedSeats.length > 0)

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <a href="/" className="flex items-center space-x-2">
                  <img src="/afisha24-logo.svg" alt="Afisha24" className="h-8 w-auto" />
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="/catalog/standup" className="text-gray-600 hover:text-gray-900">
                  Стендап
                </a>
                <a href="/concerts" className="text-gray-600 hover:text-gray-900">
                  Концерты
                </a>
                <a href="/theater" className="text-gray-600 hover:text-gray-900">
                  Театр
                </a>
                <a href="/kids" className="text-gray-600 hover:text-gray-900">
                  Детям
                </a>
                <a href="/exhibitions" className="text-gray-600 hover:text-gray-900">
                  Выставки
                </a>
                <a href="/sports" className="text-gray-600 hover:text-gray-900">
                  Спорт
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Фестивали
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{selectedCity}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${showCityDropdown ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showCityDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                    <div className="p-2">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setSelectedCity(city)
                            setShowCityDropdown(false)
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            selectedCity === city
                              ? "bg-yellow-50 text-yellow-800 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showCityDropdown && <div className="fixed inset-0 z-40" onClick={() => setShowCityDropdown(false)} />}

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <EventInfo />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-12">
          <div className="xl:col-span-3">
            <SeatingChart selectedSeats={selectedSeats} onSeatSelect={addToCart} onSeatDeselect={removeFromCart} />
          </div>

          <div className="xl:col-span-1">
            <ShoppingCart
              items={selectedSeats}
              onRemoveItem={removeFromCart}
              onClearCart={clearCart}
              onPurchase={handlePurchase}
            />
          </div>
        </div>
      </div>

      {/* ... existing mobile cart and modals code ... */}
      {selectedSeats.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 xl:hidden z-50 shadow-lg">
          <button
            onClick={() => {
              console.log("[v0] Mobile cart button clicked")
              setShowMobileCart(true)
            }}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg flex items-center justify-between transition-colors"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              <span>Корзина ({selectedSeats.length})</span>
            </div>
            <span className="font-bold">{totalPrice.toLocaleString("ru-RU")} ₽</span>
          </button>
        </div>
      )}

      {showMobileCart && (
        <div className="fixed inset-0 bg-white z-50 xl:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Корзина</h2>
              <button onClick={() => setShowMobileCart(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <ShoppingCart
                items={selectedSeats}
                onRemoveItem={removeFromCart}
                onClearCart={clearCart}
                onPurchase={handlePurchase}
              />
            </div>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      <PurchaseForm
        isOpen={isPurchaseFormOpen}
        onClose={() => setIsPurchaseFormOpen(false)}
        items={selectedSeats}
        totalPrice={totalPrice}
      />

      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/afisha24-logo.svg" alt="Afisha24" className="h-8 w-auto filter brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Лучшие развлекательные мероприятия в вашем городе. Билеты на концерты, театр, стендап и многое другое.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Мероприятия</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/catalog/standup" className="hover:text-white transition-colors">
                    Стендап
                  </a>
                </li>
                <li>
                  <a href="/concerts" className="hover:text-white transition-colors">
                    Концерты
                  </a>
                </li>
                <li>
                  <a href="/theater" className="hover:text-white transition-colors">
                    Театр
                  </a>
                </li>
                <li>
                  <a href="/kids" className="hover:text-white transition-colors">
                    Детям
                  </a>
                </li>
                <li>
                  <a href="/exhibitions" className="hover:text-white transition-colors">
                    Выставки
                  </a>
                </li>
                <li>
                  <a href="/sports" className="hover:text-white transition-colors">
                    Спорт
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/help" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-white transition-colors">
                    Возврат билетов
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="/rules" className="hover:text-white transition-colors">
                    Правила
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>@afisha24_support</p>
                <p>info@afisha24.ru</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2012-2025 "Arcom Group". Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
