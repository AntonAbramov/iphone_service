angular.module('iApp').directive('pricesIphone5c', function () {
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
              'description': 'Диагностика бесплатна даже при отказе от ремонта.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': 'от 30 мин.',
              'cost': 'от 250 грн.',
              'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': '30 мин.',
              'cost': '100 грн.',
              'description': 'Если Вы забыли пароль блокировки iPhone 5C Вам потребуется прошивка с потерей информации.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла и дисплея (модулем)',
              'repear_time': '30 мин.',
              'cost': '1200/1400 грн.',
              'description': 'Дисплейный модуль меняется, если не работает дисплей или разбито стекло.'
            },
            {
              'title': 'Замена корпуса',
              'repear_time': '60 мин.',
              'cost': '1200 грн.',
              'description': 'Пластиковый корпус iPhone 5С может сломаться от падения или очень сильно поцарапаться.'
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': '30 мин.',
              'cost': '200 грн.',
              'description': 'Если у Вас через раз срабатывает кнопка Home или залипает, то наши мастера в кратчайшие сроки устранят эту проблему.'
            },
            {
              'title': 'Замена переключателя вибро',
              'repear_time': '25 мин.',
              'cost': '300 грн.',
              'description': 'Если на iPhone 5С невозможно выключить или включить беззвучный режим, то нужно поменять переключатель вибро.'
            },
            {
              'title': 'Замена кнопок громкости',
              'repear_time': '30 мин.',
              'cost': '300 грн.',
              'description': 'Если у Вас не работают или залипают кнопки громкости, наши мастера с радостью исправят данную проблему, починив кнопки громкости.'
            },
            {
              'title': 'Замена кнопки включения/блокировки',
              'repear_time': '60 мин.',
              'cost': '350 грн.',
              'description': 'Кнопка включения не нажимается? Это часто приводит к проблеме, что вы не можете включить iPhone 5С. Мы заменим кнопку Power на iPhone в кратчайшие сроки.'
            }

            
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена полифонического динамика',
              'repear_time': '25 мин.',
              'cost': '350 грн.',
              'description': 'Нижний динамик отвечает за исходящие звуки: во время звонка, в играх, при воспроизведении музыки.'
            },
            {
              'title': 'Замена микрофона',
              'repear_time': '25 мин.',
              'cost': '350 грн.',
              'description': 'Если Вас не слышат, значит скорее всего проблема в нижнем микрофоне.'
            },
            {
              'title': 'Замена разговорного динамика',
              'repear_time': '25 мин.',
              'cost': '300 грн.',
              'description': 'Если Вы не слышите собеседника, значит скорее всего проблема в верхнем динамике.'
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': '5 мин.',
              'cost': '400 грн.',
              'description': 'Если у Вас iPhone 5C быстро разряжается, вероятно проблема в аккумуляторе.'
            },
            {
              'title': 'Замена вибро-мотора',
              'repear_time': '25 мин.',
              'cost': '200 грн.',
              'description': 'Если iPhone 5C перестал вибрировать, возможно вышел из строя вибро-мотор или кнопка вибрации.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '15 мин.',
              'cost': '400 грн.',
              'description': 'При проблемах с задней камерой iPhone 5С, таких как низкое качество изображение или его отсутствие, следует заменить камеру.'
            },
            {
              'title': 'Замена передней камеры',
              'repear_time': '30 мин.',
              'cost': '350 грн.',
              'description': 'При проблемах с фронтальной камерой iPhone 5С, таких как низкое качество изображение или его отсутствие, следует заменить камеру.'
            },
            {
              'title': 'Замена датчиков света/затемнения',
              'repear_time': '45 мин.',
              'cost': '350 грн.',
              'description': 'Этот датчик выключает экран iPhone 5С, когда вы прикладываете аппарат к уху во время разговора и не дает случайно нажиматься кнопкам.'
            },
            {
              'title': 'Замена антенны Wi-Fi',
              'repear_time': '30 мин.',
              'cost': '350 грн.',
              'description': 'Если у Вас плохой сигнал wi-fi, значит нужно заменить антенну.'
            },
            {
              'title': 'Замена антенны GSM',
              'repear_time': '30 мин.',
              'cost': '350 грн.',
              'description': 'Если у Вас плохо ловит сотовая связь, возможно нужно заменить антенну GSM.'
            }
          ]
        },
        {
          'tableTitle': 'Шлейфы',
          'rows' : [
            {
              'title': 'Замена шлейфа кнопки Home',
              'repear_time': '60 мин.',
              'cost': '250 грн.',
              'description': 'За работу кнопки Home отвечает шлейф кнопки Home'
            },
            {
              'title': 'Замена верхнего шлейфа',
              'repear_time': '60 мин.',
              'cost': '350 грн.',
              'description': 'Верхний шлейф iPhone 5С отвечает за работу кнопок громкости, включения, вибро и за запись звука при съемке видео'
            },
            {
              'title': 'Замена разъёма синхронизации и зарядки',
              'repear_time': '30 мин.',
              'cost': '350 грн.',
              'description': 'На нижнем шлейфе расположен разъем для зарядки и наушников, антенна GSM,а также нижний микрофон'
            },
            {
              'title': 'Замена разъёма для наушников (аудиоджека)',
              'repear_time': '30 мин.',
              'cost': '400 грн.',
              'description': ''
            }
          ]
        },
        {
          'tableTitle': 'Другое',
          'rows' : [
            {
              'title': 'Замена мат. платы 16 Gb',
              'repear_time': '45 мин.',
              'cost': 'Уточняйте цену и наличие.',
              'description': 'Заменять материнскую плату необходимо при полной неработоспособности старой платы. Это самая дорогая деталь в телефоне.'
            },
            {
              'title': 'Замена мат. платы 32 Gb',
              'repear_time': '45 мин.',
              'cost': 'Уточняйте цену и наличие.',
              'description': 'Заменять материнскую плату необходимо при полной неработоспособности старой платы. Это самая дорогая деталь в телефоне.'
            },
            {
              'title': 'Наклейка пленки',
              'repear_time': '5 мин.',
              'cost': 'от 80 грн.',
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