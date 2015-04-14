angular.module('iApp').directive('pricesIpad3', function () {
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
              'repear_time': '30 мин.',
              'cost': '0 грн.',
              'description': 'Если проблема сразу не ясна, то для определения причины неисправности мы проводим диагностику.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': '2 часа.',
              'cost': 'от 300 грн.',
              'description': 'Если Ваш iPhone 5S упал в воду, для начала его нужно отключить и провести чистку.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': '30 мин.',
              'cost': '100 грн.',
              'description': 'Если у Вас зависает iPad 3 или вы забыли пароль блокировки, нужно будет прошить устройство.'
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
              'description': 'На вашем iPad 3 разбилось стекло? Замена стекла на iPad 3 в нашем сервисе занимает около часа и ваш планшет опять будет как новый.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '1,5 часа.',
              'cost': '1400/1600 грн.',
              'description': 'При очень сильном ударе корпус iPad 3 может повредиться. В этому случае потребуется его замена.'
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'Не нажимается кнопка Home на iPad 3? Мы проведем ремонт и кнопка заработает как новая!'
            },
            {
              'title': 'Замена переключателя вибро',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'Основные признаки неполадки кнопки вибрации iPhone 5S: невозможно отключить звук, кнопка расшаталась или запала, произвольно включается и отключается звук.'
            },
            {
              'title': 'Замена кнопок громкости',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'Если Вы не можете убавить или прибавить звук, кнопка громкости залипает - это доставляет очень много неудобств при прослушивании аудио- или видео.'
            },
            {
              'title': 'Замена кнопки включения/блокировки',
              'repear_time': '60 мин.',
              'cost': '550 грн.',
              'description': 'От загрязнений или неправильного использования кнопка включения может перестать работать.'
            }

            
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена полифонического динамика',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'Не работает динамик на iPad 3? Сервисный центр проведет ремонт и исправит вашу проблему.'
            },
            {
              'title': 'Замена микрофона',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'Если Вас не слышит собеседник, скорее всего вышел из строя нижний микрофон.'
            },
            {
              'title': 'Замена дисплея',
              'repear_time': '60 мин.',
              'cost': '2200/2400 грн.',
              'description': 'Дисплей на iPad 3 не работает? Замена дисплея производится профессиональными мастерами в нашем сервис-центре.'
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': '60 мин.',
              'cost': '700/1000 грн.',
              'description': 'Аккумулятор iPad 3 не заряжается или не держит заряд? Замена аккумулятора решит эту проблему.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Камера на iPad 3 не часто выходит из строя, но если у вас есть искажения или камера совсем не работает, то её можно заменить.'
            },
            {
              'title': 'Замена передней камеры',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Если Вы не можете настроить фокус или у Вас низкое качество изображения, Вам нужно заменить камеру.'
            },
            {
              'title': 'Ремонт разъёма синхронизации (зарядки)',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Если iPad 3 не заряжается или его не видит компьютер, то проблема, скорее всего, в разъеме.'
            },
            {
              'title': 'Замена антенны Wi-Fi',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Если у Вас плохо ловит wi-fi, Вам нужно заменить антенну.'
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
              'description': 'Если у Вас нет времени забрать Ваш iPhone 5, наш курьер всегда с радостью Вам его доставит.'
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