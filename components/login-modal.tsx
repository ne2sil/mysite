"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Имитируем запрос к серверу
    setTimeout(() => {
      setIsLoading(false)
      setShowError(true)
    }, 1000)
  }

  const formatPhoneNumber = (value: string) => {
    // Убираем все нецифровые символы
    const numbers = value.replace(/\D/g, "")

    // Ограничиваем до 11 цифр (включая код страны)
    const limited = numbers.slice(0, 11)

    // Форматируем номер
    if (limited.length === 0) return ""
    if (limited.length <= 1) return `+7`
    if (limited.length <= 4) return `+7 (${limited.slice(1)}`
    if (limited.length <= 7) return `+7 (${limited.slice(1, 4)}) ${limited.slice(4)}`
    if (limited.length <= 9) return `+7 (${limited.slice(1, 4)}) ${limited.slice(4, 7)}-${limited.slice(7)}`
    return `+7 (${limited.slice(1, 4)}) ${limited.slice(4, 7)}-${limited.slice(7, 9)}-${limited.slice(9)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
    setShowError(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-sm sm:max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/50 backdrop-blur-xl animate-in slide-in-from-bottom-8 duration-500 max-h-[95vh] overflow-y-auto">
        <div className="p-4 sm:p-8 pb-3 sm:pb-6">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1 sm:mb-2">
            Личный кабинет
          </h2>
          <p className="text-slate-400 text-center text-sm sm:text-lg">Войдите для управления билетами</p>
        </div>

        <div className="px-4 sm:px-8 pb-4 sm:pb-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="phone"
                className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wide"
              >
                Номер телефона
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-3 sm:pr-4 text-base sm:text-lg bg-slate-800/50 border-2 border-slate-700/50 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 rounded-xl text-white placeholder-slate-500 transition-all duration-300 shadow-inner"
                  required
                />
              </div>
            </div>

            {showError && (
              <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 border border-red-500/30 rounded-xl p-3 sm:p-5 animate-in slide-in-from-top-4 duration-400 backdrop-blur-sm">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-red-300 mb-1">Аккаунт не найден</h3>
                    <p className="text-sm sm:text-base text-red-200/80">
                      Пользователь с таким номером не зарегистрирован.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Button
                type="submit"
                className="w-full sm:flex-1 h-12 sm:h-14 bg-white hover:bg-gray-100 text-black font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl border-0"
                disabled={isLoading || phoneNumber.length < 18}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-3 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Проверяем...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Войти</span>
                  </div>
                )}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                className="w-full sm:flex-1 h-12 sm:h-14 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white font-semibold text-base sm:text-lg border-2 border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 rounded-xl backdrop-blur-sm"
              >
                Отмена
              </Button>
            </div>
          </form>

          {showError && (
            <div className="pt-4 sm:pt-6 border-t border-slate-700/50 mt-4 sm:mt-6">
              <Button
                onClick={onClose}
                className="w-full h-12 sm:h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl animate-in slide-in-from-bottom-4 duration-600 border-0"
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  {/* Заменил эмодзи театральной маски на иконку билета */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  <span>Оформить билет сейчас</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
