angular.module('iApp').directive('pricesIpadAir', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/views/prices-ipad.html',
    controller: function ($scope){
      $scope.pricesTable = [
        {
          'tableTitle': 'Основное',
          'rows' : [
            {
              'title': 'Диагностика',
              'repear_time': '20 мин.',
              'cost': 'бесплатно',
              'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': '30 мин.',
              'cost': '100 грн.',
              'description': 'Прошивка может потребоваться, если iPhone зависает, глючит или если вы неудачно обновились.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': 'от 30 мин.',
              'cost': 'от 350 грн.',
              'description': 'Рекомендуется как можно быстрее провести чистку и сушку аппарата, дабы избежать более серьезных последствий.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла (тачскрина) ',
              'repear_time': '60 мин.',
              'cost': '1400 грн.',
              'description': 'На вашем iPad Air разбилось стекло? Замена стекла на iPad Air в нашем сервисе занимает около часа и ваш планшет опять будет как новый.'
            },
			{
              'title': 'Замена дисплея',
              'repear_time': '1 час.',
              'cost': '3400 грн.',
              'description': 'Замена дисплея на iPad чаще всего необходима, если экран вдруг перестал показывать или была повреждена матрица.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '1 час.',
              'cost': '2000 грн.',
              'description': ''
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Ремонт кнопки включения (блокировки)',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Не работает кнопка включения? Мы починим и вы снова сможете без проблем выключать iPad Air.'
            },
            {
              'title': 'Замена кнопки Home',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Не нажимается кнопка Home на iPad Air? Мы проведем ремонт и кнопка заработает как новая!'
            },
            {
              'title': 'Ремонт кнопок громкости',
              'repear_time': '60 мин.',
              'cost': '750 грн.',
              'description': 'Если у вас не работают кнопки громкости на iPad Air, то наши мастера без проблема проведут ремонт.'
            }

          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена полифонического динамика (buzzer)',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': ''
            },
            {
              'title': 'Замена микрофона',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': ''
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': '60 мин.',
              'cost': '900/1200 грн.',
              'description': 'Со временем, аккумулятор в iPad все меньше держит заряд, но его без проблем можно заменить и он будет работать как новый.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '600 мин.',
              'cost': '700 грн.',
              'description': ''
            },
            {
              'title': 'Замена передней камеры',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': ''
            },
            {
              'title': 'Замена разъёма для наушников (аудиоджека) ',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Сломан разъем наушников на iPad Air? Мы проведем ремонт и вы снова сможете использовать наушники с вашим iPad.'
            },
            {
              'title': 'Замена антенны GSM',
              'repear_time': '30 мин.',
              'cost': '250 грн.',
              'description': 'Телефон может часто терять сеть и хуже ловить сотовую связь, если неисправна GSM-антенна.'
            },
            {
              'title': 'Ремонт разъема синхронизации (зарядки) ',
              'repear_time': '60 мин.',
              'cost': '750 грн.',
              'description': 'Если iPad Air не заряжается или его не видит компьютер, то проблема, скорее всего, в разъеме.'
            }
          ]
        },
        {
          'tableTitle': 'Другое',
          'rows' : [
            {
              'title': 'Поклейка пленки',
              'repear_time': '10 мин.',
              'cost': 'от 140 грн.',
              'description': 'Пленка поможет избежать Вам царапин и повреждений на переднем стекле.'
            },
            {
              'title': 'Доставка в сервис',
              'repear_time': 'от 30 мин.',
              'cost': 'бесплатно',
              'description': 'ы спешите, и нет времени заехать в сервис, тогда наш курьер сможет забрать iPad и привести на диагностику бесплатно.'
            },
            {
              'title': 'Доставка из сервиса',
              'repear_time': 'от 30 мин.',
              'cost': '100 грн.',
              'description': 'Если Вы заняти, нет времени забрать Ваш iPad, курьер с радостью доставит Вам его по адресу.'
            }
          ]
        }
      ];
    }
  }
});