export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a href="/">
                <img src="/afisha24-logo.svg" alt="Afisha24" className="h-8 w-auto" />
              </a>
            </div>
            <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
              ← Вернуться на главную
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Помощь</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Как купить билет</h2>
            <div className="prose text-gray-600">
              <ol className="list-decimal list-inside space-y-2">
                <li>Выберите интересующее вас мероприятие</li>
                <li>На схеме зала выберите подходящие места</li>
                <li>Добавьте билеты в корзину</li>
                <li>Перейдите к оплате и заполните необходимые данные</li>
                <li>Получите билеты на электронную почту</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Способы оплаты</h2>
            <div className="prose text-gray-600">
              <p>Доступно только онлайн бронирование со следующими способами оплаты:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Банковские карты Visa, MasterCard, МИР</li>
                <li>Электронные кошельки (ЮMoney, QIWI)</li>
                <li>Оплата через СБП</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Получение билетов</h2>
            <div className="prose text-gray-600">
              <p>
                После успешной оплаты билеты будут отправлены на указанную электронную почту в течение 15 минут. Также
                вы можете:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Скачать билеты из личного кабинета</li>
                <li>Показать QR-код с телефона на входе</li>
                <li>Распечатать билеты дома</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Проблемы с заказом</h2>
            <div className="prose text-gray-600">
              <p>Если у вас возникли проблемы с заказом:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Проверьте папку "Спам" в электронной почте</li>
                <li>Убедитесь, что указали правильный email</li>
                <li>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    <span>@afisha24ru</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>support@afisha24.icu</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Можно ли обменять билет?</h3>
                <p className="text-gray-600 mt-1">
                  Обмен билетов возможен не позднее чем за 1 час до начала мероприятия при наличии свободных мест.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Что делать, если опоздал на мероприятие?</h3>
                <p className="text-gray-600 mt-1">
                  Проход в зал после начала мероприятия возможен только в специально отведенные паузы по решению
                  организаторов.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Можно ли вернуть билет?</h3>
                <p className="text-gray-600 mt-1">
                  Возврат билетов возможен согласно правилам возврата. Подробнее в разделе "Возврат билетов".
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
