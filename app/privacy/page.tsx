export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
            <div className="prose text-gray-600">
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей
                сервиса Afisha24.
              </p>
              <p className="mt-4">
                Используя наш сайт, вы соглашаетесь с условиями данной политики конфиденциальности.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Какие данные мы собираем</h2>
            <div className="prose text-gray-600">
              <p>Мы можем собирать следующие персональные данные:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Имя и фамилия</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Данные банковской карты (обрабатываются через защищенные платежные системы)</li>
                <li>IP-адрес и данные о браузере</li>
                <li>Информация о посещенных страницах</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Цели обработки данных</h2>
            <div className="prose text-gray-600">
              <p>Персональные данные используются для:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Обработки заказов и продажи билетов</li>
                <li>Связи с клиентами по вопросам заказов</li>
                <li>Отправки информации о мероприятиях</li>
                <li>Улучшения качества сервиса</li>
                <li>Соблюдения требований законодательства</li>
                <li>Предотвращения мошенничества</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Правовые основания</h2>
            <div className="prose text-gray-600">
              <p>Обработка персональных данных осуществляется на основании:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Согласия субъекта персональных данных</li>
                <li>Исполнения договора купли-продажи билетов</li>
                <li>Соблюдения правовых обязательств</li>
                <li>Защиты жизненно важных интересов</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Передача данных третьим лицам</h2>
            <div className="prose text-gray-600">
              <p>Мы можем передавать персональные данные:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Платежным системам для обработки платежей</li>
                <li>Курьерским службам для доставки билетов</li>
                <li>Государственным органам по их требованию</li>
                <li>Партнерам-организаторам мероприятий</li>
              </ul>
              <p className="mt-4">Мы не продаем персональные данные третьим лицам.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Сроки хранения данных</h2>
            <div className="prose text-gray-600">
              <p>Персональные данные хранятся:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>В течение срока действия пользовательского соглашения</li>
                <li>В течение сроков, установленных законодательством</li>
                <li>До отзыва согласия на обработку данных</li>
                <li>В течение 3 лет после последнего взаимодействия</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Права субъектов данных</h2>
            <div className="prose text-gray-600">
              <p>Вы имеете право:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Получать информацию об обработке ваших данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отзывать согласие на обработку данных</li>
                <li>Обжаловать действия по обработке данных</li>
                <li>Получать копию ваших персональных данных</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Безопасность данных</h2>
            <div className="prose text-gray-600">
              <p>Мы применяем следующие меры защиты:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Шифрование данных при передаче</li>
                <li>Ограничение доступа к персональным данным</li>
                <li>Регулярное обновление систем безопасности</li>
                <li>Мониторинг несанкционированного доступа</li>
                <li>Обучение сотрудников правилам обработки данных</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
            <div className="prose text-gray-600">
              <p>Мы используем файлы cookie для:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Запоминания ваших предпочтений</li>
                <li>Анализа посещаемости сайта</li>
                <li>Персонализации контента</li>
                <li>Обеспечения безопасности</li>
              </ul>
              <p className="mt-4">Вы можете отключить cookies в настройках браузера.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Контактная информация</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">По вопросам обработки персональных данных обращайтесь:</p>
              <div className="space-y-1">
                <p>
                  <strong>Email:</strong> privacy@afisha24.icu
                </p>
                <p>
                  <strong>Telegram:</strong> @afisha24ru
                </p>
                <p>
                  <strong>Адрес:</strong> г. Минск, бульвар Мулявина, д. 6, каб. 604
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Изменения в политике</h2>
            <div className="prose text-gray-600">
              <p>
                Мы оставляем за собой право изменять данную политику конфиденциальности. Об изменениях будет сообщено на
                сайте.
              </p>
              <p className="mt-4">
                <strong>Дата последнего обновления:</strong> 15 декабря 2024 года
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
