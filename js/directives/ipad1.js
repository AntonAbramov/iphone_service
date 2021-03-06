angular.module('iApp').directive('pricesIpad1', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/views/prices-ipad.html',
    controller: function ($scope) {
      $scope.pricesTable = [
        {
          'tableTitle': 'Основное',
          'rows' : [
            {
              'title': 'Диагностика',
              'repear_time': 'от 15 мин.',
              'cost': '0 грн.',
              'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': 'от 30 мин.',
              'cost': 'от 300 грн.',
              'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': '30 мин.',
              'cost': '100 грн.',
              'description': 'Если у Вас зависает iPad или вы забыли пароль блокировки, нужно будет прошить устройство.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла (тачскрина)',
              'repear_time': '60 мин.',
              'cost': '800/1000 грн.',
              'description': 'Стекло на iPad при падениях часто разбивается. Во время замены стекла на iPad, мы исправляем загнувшиеся углы.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '1 час.',
              'cost': '1400/1600 грн.',
              'description': 'При очень сильных повреждениях корпуса (если он треснул или очень сильно перегнулся), может потребоваться замена.'
            }
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена аккумулятора',
              'repear_time': '60 мин.',
              'cost': '800/1000 грн.',
              'description': 'Батарея в iPad через пару лет может держать меньше зарядки. В этом случае можно произвести замену аккумулятора iPad.'
            },
            {
              'title': 'Замена экрана/дисплея',
              'repear_time': '60 мин.',
              'cost': '2000/2400 грн.',
              'description': 'Замена дисплея на iPad чаще всего необходима, если экран вдруг перестал показывать или была повреждена матрица.'
            },
            {
              'title': 'Замена шлейфа кнопки Power',
              'repear_time': '60 мин.',
              'cost': '550 грн.',
              'description': 'От загрязнений или неправильного использования кнопка включения может перестать работать.'
            },
            {
              'title': 'Ремонт разъема зарядки',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'Ваш iPad не видит зарядку? Мы производим ремонт разъема зарядки iPad в кратчайшие сроки.'
            },
			{
              'title': 'Замена разъема наушников',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Если у вас не работает вход для нашуников/гарнитуры на iPad, то наши мастера заменят нижний шлейф.'
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': '60 мин.',
              'cost': '200 грн.',
              'description': 'Чаще всего кнопка Home выходит из строя из-за неправильного обращения или попадания воды и грязи.'
            },
            {
              'title': 'Ремонт кнопок громкости',
              'repear_time': '60 мин.',
              'cost': '550 грн.',
              'description': 'Нижний динамик работает при звонке, в играх и музыке. При проблемах с нижним динамиком iPhone 5, его нужно заменить.'
            }
          ]
        },
        {
          'tableTitle': 'Другое',
          'rows' : [
            {
              'title': 'Наклейка пленки',
              'repear_time': '5 мин.',
              'cost': 'от 100 грн.',
              'description': 'Пленка поможет избежать Вам царапин и повреждений на переднем стекле. Стоимость указана за наклейку пленки с одной стороны и с учетом самой пленки.'
            },
            {
              'title': 'Доставка из сервиса',
              'repear_time': 'от 30 мин.',
              'cost': '100 грн.',
              'description': 'Если у Вас нет времени забрать Ваш iPad, наш курьер всегда с радостью Вам его доставит.'
            },
            {
              'title': 'Доставка в сервис',
              'repear_time': 'от 30 мин.',
              'cost': '0 грн.',
              'description': 'Курьер сможет приехать в удобное для Вас время и совершенно бесплатно.'
            }
          ]
        }
      ];
    }
  }
});