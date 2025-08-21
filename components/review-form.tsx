"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"

export function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0 || !reviewText.trim() || !name.trim()) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false)
      setRating(0)
      setReviewText("")
      setName("")
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
        <p className="text-green-800 font-medium text-sm">Спасибо за отзыв!</p>
        <p className="text-green-600 text-xs mt-1">Ваш отзыв отправлен на модерацию и появится после проверки</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-xs text-gray-600 mb-1">Оценка:</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
              <Star className={`h-4 w-4 ${star <= rating ? "text-yellow-500 fill-current" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Ваше имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Как вас зовут?"
          required
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Отзыв:</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows={3}
          placeholder="Поделитесь впечатлениями о мероприятии..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || rating === 0 || !reviewText.trim() || !name.trim()}
        className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-medium py-2 px-4 rounded-md text-xs transition-colors"
      >
        {isSubmitting ? "Отправляем..." : "Отправить отзыв"}
      </button>
    </form>
  )
}
