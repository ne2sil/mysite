"use client"

export default function HomePage() {
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
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
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

      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Добро пожаловать в Афиша24</h1>
        <p className="text-xl text-gray-600 mb-12">Лучшие развлекательные мероприятия в вашем городе</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="/catalog/standup"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">Стендап</h3>
            <p className="text-gray-600">Лучшие комики города в незабываемых шоу</p>
          </a>

          <a
            href="/concerts"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">Концерты</h3>
            <p className="text-gray-600">Музыкальные события и выступления</p>
          </a>

          <a
            href="/theater"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">Театр</h3>
            <p className="text-gray-600">Театральные постановки и спектакли</p>
          </a>
        </div>
      </div>

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
