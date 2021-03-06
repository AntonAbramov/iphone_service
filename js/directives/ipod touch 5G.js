angular.module('iApp').directive('pricesIphone6', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/views/prices-iphone.html',
    controller: function ($scope){
      $scope.pricesTable = [
        {
          'tableTitle': 'Основное',
          'rows' : [
            {
              'title': 'Диагностика',
              'repear_time': '20 мин.',
              'cost': '0 грн.',
              'description': 'Если проблема сразу не ясна, то для определения причины неисправности мы проводим диагностику.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': '30 мин.',
              'cost': '100 грн.',
              'description': 'Если у Вас зависает iPod Touch 5 или вы забыли пароль блокировки, нужно будет прошить устройство.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла и дисплея(модуль)',
              'repear_time': '40 мин.',
              'cost': '1500 грн.',
              'description': 'Дисплейный модуль меняется, если не работает дисплей или разбито стекло.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '60 мин.',
              'cost': '800 грн.',
              'description': 'Если у Вас гнутый корпус или много царапин, нужно будет заменить корпус.'
            },
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': '35 мин.',
              'cost': '150 грн.',
              'description': 'Время от времени кнопка Home начинает залипать или полностью выходит из строя.'
            },
            {
              'title': 'Замена кнопок громкости',
              'repear_time': '30 мин.',
              'cost': '550 грн.',
              'description': 'Если Вы не можете убавить или прибавить звук, кнопка громкости залипает - это доставляет очень много неудобств при прослушивании аудио- или видео.'
            },
            {
              'title': 'Замена кнопки включения/блокировки',
              'repear_time': '45 мин.',
              'cost': '550 грн.',
              'description': 'Чаще всего выходит из строя кнопка включения у iPod Touch 5.'
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': '30 мин.',
              'cost': '500 грн.',
              'description': 'У Вас быстро разряжается iPod Touch 5 ? Произвольно отключается? Скорее всего проблема в аккумуляторе.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '20 мин.',
              'cost': '450 грн.',
              'description': 'Если Вы не можете настроить фокус или у Вас низкое качество изображения, Вам нужно заменить камеру.'
            },
            {
              'title': 'Ремонт модуля WiFi',
              'repear_time': '45 мин.',
              'cost': '950 грн.',
              'description': 'Если у Вас плохо ловит wi-fi, Вам нужно заменить антенну.'
            },
            {
              'title': 'Замена антенны GSM',
              'repear_time': '45 мин.',
              'cost': '450 грн.',
              'description': 'Если у Вас плохо ловит сотовая связь, скорее всего проблема в антенне.'
            },
            {
              'title': 'Замена шлейфа кнопки Home',
              'repear_time': '30 мин.',
              'cost': '500 грн.',
              'description': 'За работу кнопки Home отвечает шлейф кнопки Home.'
            },
            {
              'title': 'Замена разъёма для наушников (аудиоджека) ',
              'repear_time': '35 мин.',
              'cost': '650 грн.',
              'description': ''
            },
            {
              'title': 'Замена шлейфа разьема синхронизации и зарядки',
              'repear_time': '45 мин.',
              'cost': '500 грн.',
              'description': 'На нижнем шлейфе расположен разъем для зарядки и наушников, а также нижний микрофон.'
            },
            {
              'title': 'Доставка из сервиса',
              'repear_time': 'от 30 мин.',
              'cost': '100 грн.',
              'description': 'Если у Вас нет времени забрать Ваш iPod Touch 5, наш курьер всегда с радостью Вам его доставит.'
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