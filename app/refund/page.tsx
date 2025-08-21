export default function RefundPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Возврат билетов</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Условия возврата</h2>
            <div className="prose text-gray-600">
              <p>Возврат билетов осуществляется в соответствии с действующим законодательством РФ:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Более чем за 1 час до мероприятия - возврат 100% стоимости билета</li>
                <li>Менее чем за 1 час до мероприятия - возврат не осуществляется</li>
                <li>При отмене мероприятия организатором - возврат 100% стоимости</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Как вернуть билет</h2>
            <div className="prose text-gray-600">
              <p className="mb-4">Для оформления возврата билета следуйте представленной ниже пошаговой инструкции:</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <strong>Обращение в службу поддержки:</strong> Свяжитесь с нашей технической поддержкой одним из
                  удобных способов - через чат на сайте, Telegram @afisha24ru или электронную почту support@afisha24.icu
                </li>
                <li>
                  <strong>Предоставление информации:</strong> Укажите номер заказа, данные билета и подробно опишите
                  причину возврата
                </li>
                <li>
                  <strong>Ожидание обработки:</strong> Дождитесь ответа оператора службы поддержки, который проверит
                  возможность возврата согласно установленным условиям
                </li>
                <li>
                  <strong>Выполнение процедуры:</strong> Следуйте индивидуальным инструкциям оператора для завершения
                  процедуры возврата
                </li>
                <li>
                  <strong>Получение средств:</strong> После успешного оформления денежные средства поступят на указанные
                  реквизиты в течение одного часа
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Необходимые документы</h2>
            <div className="prose text-gray-600">
              <p>Для оформления возврата потребуются:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Номер заказа или билета</li>
                <li>Банковские реквизиты для возврата средств</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Особые случаи</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Болезнь</h3>
                <p className="text-gray-600 mt-1">
                  При предоставлении справки о болезни возврат возможен в размере 100% стоимости билета независимо от
                  сроков.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Форс-мажор</h3>
                <p className="text-gray-600 mt-1">
                  В случае форс-мажорных обстоятельств каждый случай рассматривается индивидуально.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Изменение программы</h3>
                <p className="text-gray-600 mt-1">
                  При существенном изменении программы мероприятия возврат осуществляется в полном объеме.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Контакты для возврата</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2">
                <p>
                  <strong>Telegram:</strong> @afisha24ru
                </p>
                <p>
                  <strong>Email:</strong> support@afisha24.icu
                </p>
                <p>
                  <strong>Время работы:</strong> Пн-Пт 12:00-00:00, Сб-Вс 12:00-22:00 (МСК)
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
