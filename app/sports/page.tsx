"use client"

import { useState } from "react"
import { LoginModal } from "@/components/login-modal"

export default function SportsPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <img src="/afisha24-logo.svg" alt="Afisha24" className="h-8 w-auto" />
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="/" className="text-gray-600 hover:text-gray-900">
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
                <a href="/sports" className="text-yellow-600 font-medium">
                  Спорт
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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

      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Спорт</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Для просмотра информации о спортивных мероприятиях и покупки билетов необходимо войти в личный кабинет
          </p>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Войти в личный кабинет
          </button>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  )
}
