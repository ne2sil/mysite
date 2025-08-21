export default function RulesPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Правила посещения мероприятий</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Общие правила</h2>
            <div className="prose text-gray-600">
              <ul className="list-disc list-inside space-y-2">
                <li>Вход в зал осуществляется строго по билетам</li>
                <li>Билет действителен только на указанную дату и время</li>
                <li>Опоздавшие зрители допускаются в зал только в специально отведенные паузы</li>
                <li>Запрещается проносить еду, напитки, фото- и видеоаппаратуру</li>
                <li>Во время мероприятия запрещается пользоваться мобильными телефонами</li>
                <li>Курение в помещении строго запрещено</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Возрастные ограничения</h2>
            <div className="prose text-gray-600">
              <p>Мероприятия имеют возрастные ограничения согласно российскому законодательству:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>0+</strong> - без ограничений
                </li>
                <li>
                  <strong>6+</strong> - не рекомендуется детям до 6 лет
                </li>
                <li>
                  <strong>12+</strong> - не рекомендуется детям до 12 лет
                </li>
                <li>
                  <strong>16+</strong> - не рекомендуется лицам до 16 лет
                </li>
                <li>
                  <strong>18+</strong> - запрещено лицам до 18 лет
                </li>
              </ul>
              <p className="mt-4">Дети до 3 лет проходят бесплатно без предоставления отдельного места.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Правила поведения</h2>
            <div className="prose text-gray-600">
              <p>Для комфортного посещения мероприятий просим соблюдать следующие правила:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Занимать только свои места согласно билету</li>
                <li>Не мешать другим зрителям просмотру</li>
                <li>Не разговаривать громко во время выступления</li>
                <li>Выключить звук мобильных устройств</li>
                <li>Не вставать и не ходить по залу во время номеров</li>
                <li>Соблюдать тишину и порядок</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Дресс-код</h2>
            <div className="prose text-gray-600">
              <p>Специального дресс-кода нет, однако рекомендуется:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Опрятный внешний вид</li>
                <li>Отсутствие сильных запахов парфюмерии</li>
                <li>Удобная обувь (в некоторых залах может потребоваться снимать обувь)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Безопасность</h2>
            <div className="prose text-gray-600">
              <p>В целях безопасности:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Запрещается проносить острые, колющие и режущие предметы</li>
                <li>Запрещается проносить легковоспламеняющиеся вещества</li>
                <li>Запрещается проносить алкогольные напитки</li>
                <li>При эвакуации следуйте указаниям персонала</li>
                <li>Знайте расположение аварийных выходов</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ответственность</h2>
            <div className="prose text-gray-600">
              <p>Зрители несут ответственность за:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Соблюдение правил поведения в зале</li>
                <li>Сохранность личных вещей</li>
                <li>Ущерб, причиненный имуществу площадки</li>
                <li>Нарушение общественного порядка</li>
              </ul>
              <p className="mt-4">
                За нарушение правил зритель может быть удален из зала без возмещения стоимости билета.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
