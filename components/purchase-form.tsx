"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { X, CreditCard, User, Mail, Phone, Copy, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import type { CartItem } from "@/app/page"

interface PurchaseFormProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  totalPrice: number
}

export function PurchaseForm({ isOpen, onClose, items, totalPrice }: PurchaseFormProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showPaymentDetails, setShowPaymentDetails] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isCheckingPayment, setIsCheckingPayment] = useState(false)
  const [showPaymentError, setShowPaymentError] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const paymentDetails = {
    cardNumber: "2202 2063 4567 8901",
    bankName: "Сбербанк",
    recipientName: "Иванов Иван Иванович",
    amount: totalPrice,
  }

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      setShowPaymentDetails(false)
    }
  }, [isOpen])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Введите ФИО"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введите email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона"
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-$$$$]/g, "")
      const phoneRegex = /^(\+7|8|7)?[489][0-9]{9}$/
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = "Введите корректный номер телефона"
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Необходимо согласие с условиями"
    }

    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = "Необходимо согласие на обработку данных"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setShowPaymentDetails(true)
    }
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Не удалось скопировать текст: ", err)
    }
  }

  const handlePaymentCheck = async () => {
    setIsCheckingPayment(true)

    await new Promise((resolve) => setTimeout(resolve, 12000))

    setIsCheckingPayment(false)
    setShowPaymentError(true)
  }

  const closePaymentError = () => {
    setShowPaymentError(false)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 bg-transparent backdrop-blur-lg flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {showPaymentDetails ? "Оплата билетов" : "Оформление билетов"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {!showPaymentDetails ? (
            <>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Ваш заказ</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {items.map((item) => (
                    <div key={item.seatId} className="flex justify-between">
                      <span>
                        Ряд {item.row}, место {item.seatNumber}
                      </span>
                      <span>{item.price.toLocaleString()}₽</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-medium">
                  <span>Итого:</span>
                  <span>{totalPrice.toLocaleString()}₽</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <User className="h-4 w-4" />
                    ФИО *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Иванов Иван Иванович"
                    className={`mt-1 ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Mail className="h-4 w-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="example@mail.ru"
                    className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Phone className="h-4 w-4" />
                    Номер телефона *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                    className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                      className={`h-5 w-5 flex-shrink-0 ${errors.agreeToTerms ? "border-red-500" : "border-gray-400"}`}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer flex-1 leading-tight">
                      Согласен с{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        условиями
                      </a>{" "}
                      и{" "}
                      <a
                        href="/rules"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        правилами
                      </a>
                    </Label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-500 text-xs ml-8">{errors.agreeToTerms}</p>}

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeToPrivacy", checked as boolean)}
                      className={`h-5 w-5 flex-shrink-0 ${errors.agreeToPrivacy ? "border-red-500" : "border-gray-400"}`}
                    />
                    <Label
                      htmlFor="agreeToPrivacy"
                      className="text-sm text-gray-700 cursor-pointer flex-1 leading-tight"
                    >
                      Согласен на обработку{" "}
                      <a
                        href="/privacy"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        персональных данных
                      </a>
                    </Label>
                  </div>
                  {errors.agreeToPrivacy && <p className="text-red-500 text-xs ml-8">{errors.agreeToPrivacy}</p>}
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Перейти к оплате
                  </Button>
                  <Button type="button" variant="outline" onClick={onClose} className="w-full bg-transparent">
                    Отмена
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Ваш заказ</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {items.map((item) => (
                    <div key={item.seatId} className="flex justify-between">
                      <span>
                        Ряд {item.row}, место {item.seatNumber}
                      </span>
                      <span>{item.price.toLocaleString()}₽</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-medium">
                  <span>Итого к оплате:</span>
                  <span className="text-lg font-bold text-green-600">{totalPrice.toLocaleString()}₽</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Реквизиты для оплаты</h3>

                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Номер карты</p>
                        <p className="text-lg font-mono font-bold text-gray-900">{paymentDetails.cardNumber}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(paymentDetails.cardNumber.replace(/\s/g, ""), "cardNumber")}
                        className="p-2 hover:bg-blue-100 rounded-full transition-colors"
                      >
                        {copiedField === "cardNumber" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5 text-blue-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Банк получателя</p>
                        <p className="text-lg font-semibold text-gray-900">{paymentDetails.bankName}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(paymentDetails.bankName, "bankName")}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {copiedField === "bankName" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Получатель</p>
                        <p className="text-lg font-semibold text-gray-900">{paymentDetails.recipientName}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(paymentDetails.recipientName, "recipientName")}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {copiedField === "recipientName" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Сумма к переводу</p>
                        <p className="text-xl font-bold text-green-600">{paymentDetails.amount.toLocaleString()}₽</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(paymentDetails.amount.toString(), "amount")}
                        className="p-2 hover:bg-green-100 rounded-full transition-colors"
                      >
                        {copiedField === "amount" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5 text-green-600" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Почему оплата на карту физического лица?</h4>
                  <p className="text-sm text-yellow-700 leading-relaxed">
                    Мы используем прямые переводы на карту физического лица для обеспечения быстрой обработки платежей и
                    минимальных комиссий. Это позволяет нам предлагать билеты по более выгодным ценам. Ваши билеты будут
                    отправлены на указанный email сразу после подтверждения оплаты.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handlePaymentCheck}
                    disabled={isCheckingPayment}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 disabled:opacity-50"
                  >
                    {isCheckingPayment ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Проверяем платеж...
                      </>
                    ) : (
                      "Я оплатил(а) билеты"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowPaymentDetails(false)}
                    className="w-full bg-transparent"
                    disabled={isCheckingPayment}
                  >
                    Вернуться к форме
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showPaymentError && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-lg flex items-center justify-center z-60 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <h3 className="text-lg font-semibold text-gray-900">Платеж не найден</h3>
              </div>
              <button onClick={closePaymentError} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                К сожалению, мы не смогли найти ваш платеж в системе. Если вы уже перевели деньги, обратитесь в
                техническую поддержку для решения проблемы.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Способы связи с поддержкой:</h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex justify-between">
                    <span>• Чат на сайте (в углу экрана)</span>
                    <span className="text-xs">~1 мин</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Telegram: @afisha24ru</span>
                    <span className="text-xs">~5 мин</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Email: support@afisha24.icu</span>
                    <span className="text-xs">~24 часа</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handlePaymentCheck}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  disabled={isCheckingPayment}
                >
                  Повторить проверку
                </Button>
                <Button onClick={closePaymentError} variant="outline" className="flex-1 bg-transparent">
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
