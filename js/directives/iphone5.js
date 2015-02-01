angular.module('iApp').directive('pricesIphone5', function () {
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
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Диагностика бесплатна даже при отказе от ремонта.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если у Вас зависает iPhone 5 или вы забыли пароль блокировки, нужно будет прошить устройство.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла и дисплея',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Стекло меняется на новый оригинальный дисплейный модуль (стекло+дисплей).'
            },
            {
              'title': 'Замена крышки',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Замена корпуса и крышки iPhone 5 выполняется при сильных повреждениях крышки или стеклянных вставок.'
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Ремонт кнопок громкости',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если у вас не работают кнопки на iPhone 5, то наши мастера быстро произведут их ремонт.'
            },
            {
              'title': 'Ремонт кнопки Home',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Время от времени кнопка Home начинает залипать или полностью выходит из строя.'
            },
            {
              'title': 'Ремонт переключателя вибрации',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Переключатель вибрации iPhone 5 может застрять или совсем перестать работать и не включать вибро-режим.'
            },
            {
              'title': 'Ремонт кнопки включения',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'У вас не нажимается кнопка включения/блокировки на iPhone 5? Мы отремонтируем и вы снова сможете пользоваться аппаратом.'
            }
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена разъема наушников',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если у вас не работает вход для нашуников/гарнитуры на iPhone 5, то наши мастера заменят нижний шлейф.'
            },
            {
              'title': 'Замена нижнего динамика',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Нижний динамик работает при звонке, в играх и музыке. При проблемах с нижним динамиком iPhone 5, его нужно заменить.'
            },
            {
              'title': 'Замена микрофона',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если вас не слышат во время разговора или слышат тихо, то нужно заменить нижний микрофон. Если нет звука в видео-записи - то верхний. Стоимость замены одинакова.'
            },
            {
              'title': 'Замена верхнего динамика',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если вы в разговоре не слышите собеседника, то проблема может заключаться в верхнем динамике iPhone 5.'
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'У Вас быстро разряжается iPhone 5? Произвольно отключается? Скорее всего проблема в аккумуляторе.'
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'У Вас быстро разряжается iPhone 5? Произвольно отключается? Скорее всего проблема в аккумуляторе.'
            },
            {
              'title': 'Замена вибро-мотора',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Во время входящего звонка Вы не ощущаете Ваш iPhone 5, значит Вам нужно заменить вибро-мотор.'
            },
            {
              'title': 'Замена разъема зарядки',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Ваш iPhone 5 не заряжается или его не видит компьютер? Замена нижнего разъема должна решить эту проблему.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'При проблемах с задней камерой iPhone 5, таких как низкое качество изображение или его отсутствие следует заменить камеру.'
            },
            {
              'title': 'Замена передней камеры',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если Вы не можете настроить фокус или у Вас низкое качество изображения, Вам нужно заменить камеру.'
            },
            {
              'title': 'Замена датчиков света/затемнения',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если во время звонка Ваше ухо произвольно нажимает на кнопки и iPhone 5 не блокируется, значит проблема в датчике.'
            },
            {
              'title': 'Замена антенны Wi-Fi',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если у Вас плохо ловит wi-fi, Вам нужно заменить антенну.'
            },
            {
              'title': 'Замена антенны GSM',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если у Вас плохо ловит сотовая связь, скорее всего проблема в антенне.'
            }
          ]
        },
        {
          'tableTitle': 'Шлейфы',
          'rows' : [
            {
              'title': 'Замена нижнего шлейфа',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'На нижнем шлейфе расположен разъем для зарядки и наушников, антенна GSM,а также нижний микрофон.'
            },
            {
              'title': 'Замена верхнего шлейфа',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Верхний шлейф iPhone 5 отвечает за работу кнопок громкости, включения, вибро и за запись звука при съемке видео.'
            },
            {
              'title': 'Замена шлейфа кнопки Home',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'За работу кнопки Home отвечает шлейф кнопки Home.'
            }
          ]
        },
        {
          'tableTitle': 'Другое',
          'rows' : [
            {
              'title': 'Замена мат. платы 16 Gb',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Заменять материнскую плату необходимо при полной неработоспособности старой платы. Это самая дорогая деталь в телефоне.'
            },
            {
              'title': 'Замена мат. платы 32 Gb',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Заменять материнскую плату необходимо при полной неработоспособности старой платы. Это самая дорогая деталь в телефоне.'
            },
            {
              'title': 'Замена мат. платы 64 Gb',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Заменять материнскую плату необходимо при полной неработоспособности старой платы. Это самая дорогая деталь в телефоне.'
            },
            {
              'title': 'Замена микросхемы Wi-Fi',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': ''
            },
            {
              'title': 'Замена микросхемы питания',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': ''
            },
            {
              'title': 'Замена микросхемы аудио-кодека',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': ''
            },
            {
              'title': 'Пайка сетевой части',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': ''
            },
            {
              'title': 'Пайка разъема SIM',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': ''
            },
            {
              'title': 'Пайка разъемов',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': ''
            },
            {
              'title': 'Наклейка пленки',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Пленка поможет избежать Вам царапин и повреждений на переднем стекле. Стоимость указана за наклейку пленки с одной стороны и с учетом самой пленки.'
            },
            {
              'title': 'Доставка из сервиса',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Если у Вас нет времени забрать Ваш iPhone 5, наш курьер всегда с радостью Вам его доставит.'
            },
            {
              'title': 'Доставка в сервис',
              'repear_time': 'от 777 мин.',
              'cost': '99999 грн.',
              'description': 'Курьер сможет приехать в удобное для Вас время и совершенно бесплатно.'
            }
          ]
        }
      ];
    }
  }
});