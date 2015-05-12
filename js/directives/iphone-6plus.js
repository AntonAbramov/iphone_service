angular.module('iApp').directive('pricesIphone6plus', function () {
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
              'cost': '150 грн.',
              'description': 'Если у Вас зависает iPhone 6 или вы забыли пароль блокировки, нужно будет прошить устройство.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла и дисплея(модуль)',
              'repear_time': '40 мин.',
              'cost': '12000/13000 грн.',
              'description': 'Дисплейный модуль меняется, если не работает дисплей или разбито стекло.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '60 мин.',
              'cost': '5600/6100 грн.',
              'description': 'Если у Вас гнутый корпус или много царапин, нужно будет заменить корпус.'
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': '35 мин.',
              'cost': '500 грн.',
              'description': 'Время от времени кнопка Home начинает залипать или полностью выходит из строя.'
            },
            {
              'title': 'Замена переключателя вибро',
              'repear_time': '45 мин.',
              'cost': '600 грн.',
              'description': 'Основные признаки неполадки кнопки вибрации iPhone 6: невозможно отключить звук, кнопка расшаталась или запала, произвольно включается и отключается звук.'
            },
            {
              'title': 'Замена кнопок громкости',
              'repear_time': '30 мин.',
              'cost': '600 грн.',
              'description': 'Если Вы не можете убавить или прибавить звук, кнопка громкости залипает - это доставляет очень много неудобств при прослушивании аудио- или видео.'
            },
            {
              'title': 'Замена кнопки включения/блокировки',
              'repear_time': '45 мин.',
              'cost': '600 грн.',
              'description': 'Чаще всего выходит из строя кнопка включения у iPhone 6.'
            }
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена аккумулятора',
              'repear_time': '30 мин.',
              'cost': '600 грн.',
              'description': 'У Вас быстро разряжается iPhone 6? Произвольно отключается? Скорее всего проблема в аккумуляторе.'
            },
            {
              'title': 'Замена вибро-мотора',
              'repear_time': '25 мин.',
              'cost': '600 грн.',
              'description': 'Во время входящего звонка Вы не ощущаете Ваш iPhone 6, значит Вам нужно заменить вибро-мотор.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '20 мин.',
              'cost': '750 грн.',
              'description': 'Если Вы не можете настроить фокус или у Вас низкое качество изображения, Вам нужно заменить камеру.'
            },
            {
              'title': 'Замена передней камеры',
              'repear_time': '30 мин.',
              'cost': '700 грн.',
              'description': 'Если Вы не можете настроить фокус или у Вас низкое качество изображения, Вам нужно заменить камеру.'
            },
            {
              'title': 'Замена датчиков света/затемнения',
              'repear_time': '40 мин.',
              'cost': '600 грн.',
              'description': 'Если во время звонка Ваше ухо произвольно нажимает на кнопки и iPhone 6 не блокируется, значит проблема в датчике.'
            },
            {
              'title': 'Замена антенны Wi-Fi',
              'repear_time': '45 мин.',
              'cost': '550 грн.',
              'description': 'Если у Вас плохо ловит wi-fi, Вам нужно заменить антенну.'
            },
            {
              'title': 'Замена антенны GSM',
              'repear_time': '45 мин.',
              'cost': '550 грн.',
              'description': 'Если у Вас плохо ловит сотовая связь, скорее всего проблема в антенне.'
            }
          ]
        },
        {
          'tableTitle': 'Шлейфы',
          'rows' : [
            {
              'title': 'Замена шлейфа кнопки Home',
              'repear_time': '30 мин.',
              'cost': '600 грн.',
              'description': 'За работу кнопки Home отвечает шлейф кнопки Home.'
            },
            {
              'title': 'Замена верхнего шлейфа',
              'repear_time': '35 мин.',
              'cost': '600 грн.',
              'description': 'Верхний шлейф iPhone 6 отвечает за работу кнопок громкости, включения, вибро и за запись звука при съемке видео.'
            },
            {
              'title': 'Замена шлейфа разьема синхронизации и зарядки',
              'repear_time': '45 мин.',
              'cost': '750 грн.',
              'description': 'На нижнем шлейфе расположен разъем для зарядки и наушников, а также нижний микрофон.'
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