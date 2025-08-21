"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Mic,
  Quote,
  HelpCircle,
  Share2,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"
import { ReviewForm } from "@/components/review-form"

export function EventInfo() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    program: false,
    performers: false,
    reviews: false,
    faq: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-lg p-6 shadow-sm bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center space-x-3">
            <Badge className="bg-yellow-400 text-black font-medium px-3 py-1 text-sm">от 2400 ₽</Badge>
            <Badge className="bg-gray-100 text-gray-700 border border-gray-300">18+</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Ночь Смеха: <span className="text-gray-200">Черный STANDUP</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Лучшие комики города в одном незабываемом шоу полном черного юмора и искрометных шуток
          </p>
        </div>
      </div>

      <Card className="border border-gray-200 shadow-sm bg-white">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
              <div className="p-2 rounded-full bg-yellow-400">
                <Calendar className="h-4 w-4 text-black" />
              </div>
              <div>
                <p className="font-semibold text-black">15 декабря 2024</p>
                <p className="text-gray-600 text-sm">Суббота</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
              <div className="p-2 rounded-full bg-yellow-400">
                <Clock className="h-4 w-4 text-black" />
              </div>
              <div>
                <p className="font-semibold text-black">19:00</p>
                <p className="text-gray-600 text-sm">2 часа</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
              <div className="p-2 rounded-full bg-yellow-400">
                <MapPin className="h-4 w-4 text-black" />
              </div>
              <div>
                <p className="font-semibold text-black">Комеди Клаб</p>
                <p className="text-gray-600 text-sm">ул. Арбат, 15</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-200">
            <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-200">
              <Users className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="font-bold text-lg text-black">90</p>
              <p className="text-gray-600 text-sm">мест</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-200">
              <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="font-bold text-lg text-black">4.8/5</p>
              <p className="text-gray-600 text-sm">156 отзывов</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-200">
              <Mic className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="font-bold text-lg text-black">5+</p>
              <p className="text-gray-600 text-sm">стендаперов</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="font-bold text-xl text-black mb-3">О мероприятии</h3>
            <p className="text-gray-700 leading-relaxed">
              Приглашаем вас на незабываемый вечер стендап-комедии! Лучшие комики города выступят с новыми номерами,
              которые заставят вас смеяться до слез.
            </p>
          </div>

          <div className="space-y-3">
            {/* Программа */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection("program")}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Программа вечера</span>
                </div>
                {expandedSections.program ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {expandedSections.program && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-black font-medium">19:00-19:15</span>
                      <span className="text-gray-600">Встреча гостей</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-black font-medium">19:15-20:00</span>
                      <span className="text-gray-600">Первый блок</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-black font-medium">20:00-20:15</span>
                      <span className="text-gray-600">Антракт</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-black font-medium">20:15-21:00</span>
                      <span className="text-gray-600">Второй блок</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Участники */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection("performers")}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Mic className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Участники (5+ стендаперов)</span>
                </div>
                {expandedSections.performers ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {expandedSections.performers && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        А
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">Андрей Петров</p>
                        <p className="text-gray-600 text-xs">Стендапер</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        М
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">Мария Козлова</p>
                        <p className="text-gray-600 text-xs">Стендапер</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        Д
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">Дмитрий Сидоров</p>
                        <p className="text-gray-600 text-xs">Стендапер</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        Е
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">Елена Волкова</p>
                        <p className="text-gray-600 text-xs">Стендапер</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        И
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">Игорь Морозов</p>
                        <p className="text-gray-600 text-xs">Стендапер</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-800 to-black rounded-lg border-2 border-yellow-400">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm">
                        ?
                      </div>
                      <div>
                        <p className="font-medium text-yellow-400 text-sm">Неизвестные гости</p>
                        <p className="text-gray-300 text-xs">Сюрприз вечера...</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm font-medium mb-1">🎭 Интрига вечера</p>
                    <p className="text-yellow-700 text-xs">
                      Это черный стендап, а значит вас ждут неожиданные гости и сюрпризы! Кто еще выйдет на сцену -
                      узнаете только на самом мероприятии. Готовьтесь к незабываемому вечеру!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Отзывы */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection("reviews")}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Quote className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Отзывы с ВКонтакте</span>
                </div>
                {expandedSections.reviews ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {expandedSections.reviews && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="space-y-3 mt-3">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-black text-sm italic mb-1">
                        "Ребят, это было нечто! Андрей Петров просто разорвал зал, смеялись до слез. Особенно зашла
                        шутка про метро 😂"
                      </p>
                      <p className="text-gray-600 text-xs">— Анна Петрова, ВКонтакте</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-black text-sm italic mb-1">
                        "Пошли с женой на годовщину, думали будет скучно, а в итоге хохотали как дети. Мария Козлова -
                        огонь! Обязательно придем еще"
                      </p>
                      <p className="text-gray-600 text-xs">— Михаил Соколов, ВКонтакте</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                      <p className="text-black text-sm italic mb-1">
                        "Хороший стендап, но места в VIP зоне оказались не очень удобные. Сами стендаперы молодцы,
                        особенно понравился Дмитрий Сидоров"
                      </p>
                      <p className="text-gray-600 text-xs">— Елена Кузнецова, ВКонтакте</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-black text-sm italic mb-1">
                        "Первый раз был на черном стендапе, не знал чего ожидать. Оказалось очень круто! Юмор
                        действительно черный, но не переходящий границы"
                      </p>
                      <p className="text-gray-600 text-xs">— Дмитрий Волков, ВКонтакте</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-black text-sm italic mb-1">
                        "Отличная атмосфера, качественный звук, удобные кресла. Стендаперы все профессионалы своего
                        дела. Рекомендую!"
                      </p>
                      <p className="text-gray-600 text-xs">— Ольга Морозова, ВКонтакте</p>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-4">
                      <h4 className="font-medium text-black text-sm mb-3">Написать отзыв:</h4>
                      <ReviewForm />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection("faq")}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Вопросы и ответы</span>
                </div>
                {expandedSections.faq ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {expandedSections.faq && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="space-y-3 mt-3">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="font-medium text-black text-sm mb-1">Можно ли вернуть билет?</p>
                      <p className="text-gray-600 text-xs">
                        Да, возврат возможен не позднее чем за 1 час до начала мероприятия.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="font-medium text-black text-sm mb-1">Можно ли фотографировать?</p>
                      <p className="text-gray-600 text-xs">
                        Фото и видеосъемка во время выступления запрещена из уважения к артистам.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="font-medium text-black text-sm mb-1">Есть ли дресс-код?</p>
                      <p className="text-gray-600 text-xs">
                        Рекомендуется smart casual. Главное - чувствовать себя комфортно.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-black mb-3 text-sm">Важная информация:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></span>
                Возрастное ограничение: 18+
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></span>В программе возможны
                изменения
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></span>Запрещена фото и
                видеосъемка
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></span>
                Дресс-код: smart casual
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-yellow-400 text-black px-3 py-1 text-xs">Русский язык</Badge>
              <Badge className="bg-gray-100 text-gray-700 px-3 py-1 text-xs">Интерактив</Badge>
              <Badge className="bg-gray-100 text-gray-700 px-3 py-1 text-xs">Стендап</Badge>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition-colors">
              <Share2 className="h-4 w-4 text-gray-600" />
              <span className="text-xs text-gray-600">Поделиться</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
