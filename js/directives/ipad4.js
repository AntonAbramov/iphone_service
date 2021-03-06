angular.module('iApp').directive('pricesIpad4', function () {
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
              'cost': '350 грн.',
              'description': 'Рекомендуется как можно быстрее провести чистку и сушку аппарата, дабы избежать более серьезных последствий.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': '30 мин.',
              'cost': '100 грн.',
              'description': 'Если у Вас зависает iPad 4 или вы забыли пароль блокировки, нужно будет прошить устройство.'
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
              'description': 'На вашем iPad 4 разбилось стекло? Замена стекла на iPad 4 в нашем сервисе занимает около часа и ваш планшет опять будет как новый.'
            },
			{
              'title': 'Замена дисплея',
              'repear_time': '60 мин.',
              'cost': '2200/2400 грн.',
              'description': 'Дисплей на iPad 4 не работает? Замена дисплея производится профессиональными мастерами в нашем сервис-центре.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '60 мин.',
              'cost': '1400/1600 грн.',
              'description': 'При очень сильном ударе корпус iPad 4 может повредиться. В этому случае потребуется его замена.'
            },
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': '60 мин.',
              'cost': '550 грн.',
              'description': 'Время от времени кнопка Home начинает залипать или полностью выходит из строя.'
            },
            {
              'title': 'Замена переключателя вибро',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Если на iPad 4 не работает переключатель вибро или блокировки поворота экрана, то после ремонта в нашем сервисе все заработает как новое.'
            },
            {
              'title': 'Замена кнопок громкости',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Если Вы не можете убавить или прибавить звук, кнопка громкости залипает - это доставляет очень много неудобств при прослушивании аудио- или видео.'
            },
            {
              'title': 'Замена кнопки включения/блокировки',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Не работает кнопка включения? Мы починим и вы снова сможете без проблем выключать iPad 4.'
            }

            
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена аккумулятора',
              'repear_time': '60 мин.',
              'cost': '700/1000 грн.',
              'description': 'Аккумулятор iPad 4 не заряжается или не держит заряд? Замена аккумулятора решит эту проблему.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Камера на iPad 4 не часто выходит из строя, но если у вас есть искажения или камера совсем не работает, то её можно заменить.'
            },
            {
              'title': 'Замена передней камеры',
              'repear_time': '60 мин.',
              'cost': '600 грн.',
              'description': 'Если Вы не можете настроить фокус или у Вас низкое качество изображения, Вам нужно заменить камеру.'
            },
			{
              'title': 'Замена микрофона',
              'repear_time': '60 мин.',
              'cost': '550 грн.',
              'description': ''
            },
			{
              'title': 'Замена полифонического динамика',
              'repear_time': '60 мин.',
              'cost': '550 грн.',
              'description': ''
            },
			{
              'title': 'Замена разъёма для наушников',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': ''
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
          'tableTitle': 'Шлейфы',
          'rows' : [
            {
              'title': 'Замена шлейфа кнопки Home',
              'repear_time': '60 мин.',
              'cost': '500 грн.',
              'description': 'За работу кнопки Home отвечает шлейф кнопки Home.'
            },
            {
              'title': 'Замена шлейфа разьема синхронизации и зарядки',
              'repear_time': '60 мин.',
              'cost': '650 грн.',
              'description': 'Если iPad 4 не заряжается или его не видит компьютер, то проблема, скорее всего, в разъеме.'
            }
          ]
        },
        {
          'tableTitle': 'Другое',
          'rows' : [
            {
              'title': 'Наклейка пленки',
              'repear_time': '5 мин.',
              'cost': 'от 140 грн.',
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