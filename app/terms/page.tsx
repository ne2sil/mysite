export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Пользовательское соглашение</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
            <div className="prose text-gray-600">
              <p>
                Настоящее Пользовательское соглашение регулирует отношения между ООО "Афиша24" и пользователями сервиса
                по продаже билетов на развлекательные мероприятия.
              </p>
              <p className="mt-4">Используя наш сайт, вы соглашаетесь с условиями данного соглашения.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Предмет соглашения</h2>
            <div className="prose text-gray-600">
              <p>Компания предоставляет пользователям возможность:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Просматривать информацию о мероприятиях</li>
                <li>Выбирать и бронировать места</li>
                <li>Оплачивать билеты онлайн</li>
                <li>Получать электронные билеты</li>
                <li>Возвращать билеты согласно правилам возврата</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Регистрация и аккаунт</h2>
            <div className="prose text-gray-600">
              <p>Для покупки билетов пользователь должен:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Предоставить достоверную информацию</li>
                <li>Подтвердить номер телефона</li>
                <li>Нести ответственность за сохранность данных аккаунта</li>
                <li>Немедленно сообщать о компрометации аккаунта</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Порядок покупки билетов</h2>
            <div className="prose text-gray-600">
              <p>Покупка билетов осуществляется следующим образом:</p>
              <ol className="list-decimal list-inside space-y-2 mt-4">
                <li>Выбор мероприятия и мест</li>
                <li>Добавление билетов в корзину</li>
                <li>Заполнение контактных данных</li>
                <li>Выбор способа оплаты</li>
                <li>Подтверждение заказа и оплата</li>
                <li>Получение билетов на email</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Оплата</h2>
            <div className="prose text-gray-600">
              <p>Оплата билетов производится:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Банковскими картами Visa, MasterCard, МИР</li>
                <li>Электронными кошельками</li>
                <li>Через систему быстрых платежей</li>
                <li>Наличными в кассах партнеров</li>
              </ul>
              <p className="mt-4">Все платежи обрабатываются через защищенные платежные системы.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Права и обязанности сторон</h2>
            <div className="prose text-gray-600">
              <h3 className="font-medium text-gray-900 mt-4">Права пользователя:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Получать качественные услуги</li>
                <li>Получать достоверную информацию о мероприятиях</li>
                <li>Возвращать билеты согласно правилам</li>
                <li>Получать поддержку по вопросам заказов</li>
              </ul>

              <h3 className="font-medium text-gray-900 mt-4">Обязанности пользователя:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Предоставлять достоверную информацию</li>
                <li>Своевременно оплачивать заказы</li>
                <li>Соблюдать правила посещения мероприятий</li>
                <li>Не нарушать права третьих лиц</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Ответственность</h2>
            <div className="prose text-gray-600">
              <p>Компания не несет ответственности за:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Отмену или перенос мероприятий организаторами</li>
                <li>Изменение программы мероприятий</li>
                <li>Технические сбои, не зависящие от компании</li>
                <li>Действия третьих лиц</li>
                <li>Утрату билетов пользователем</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Возврат и обмен билетов</h2>
            <div className="prose text-gray-600">
              <p>Возврат билетов осуществляется согласно правилам возврата:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>За 10+ дней до мероприятия - 100% стоимости</li>
                <li>За 5-9 дней - 50% стоимости</li>
                <li>Менее 5 дней - возврат не осуществляется</li>
                <li>При отмене мероприятия - 100% стоимости</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Интеллектуальная собственность</h2>
            <div className="prose text-gray-600">
              <p>Все материалы сайта защищены авторским правом. Запрещается:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Копирование контента без разрешения</li>
                <li>Использование товарных знаков</li>
                <li>Создание производных работ</li>
                <li>Коммерческое использование материалов</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Разрешение споров</h2>
            <div className="prose text-gray-600">
              <p>
                Все споры решаются путем переговоров. При невозможности достижения соглашения споры рассматриваются в
                суде по месту нахождения компании.
              </p>
              <p className="mt-4">Настоящее соглашение регулируется законодательством Российской Федерации.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Заключительные положения</h2>
            <div className="prose text-gray-600">
              <p>
                Компания оставляет за собой право изменять условия соглашения с уведомлением пользователей на сайте.
              </p>
              <p className="mt-4">Соглашение вступает в силу с момента начала использования сайта.</p>
              <p className="mt-4">
                <strong>Дата последнего обновления:</strong> 15 декабря 2024 года
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Контактная информация</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-1">
                <p>
                  <strong>ООО "Афиша24"</strong>
                </p>
                <p>Адрес: г. Москва, ул. Тверская, д. 15, офис 301</p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Email: legal@afisha24.ru</p>
                <p>ИНН: 7701234567</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
