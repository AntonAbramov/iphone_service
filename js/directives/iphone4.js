angular.module('iApp').directive('pricesIphone4', function () {
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
              'repear_time': 'от 15 мин.',
              'cost': 'бесплатно',
              'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': 'от 45 мин.',
              'cost': 'от 150 грн.',
              'description': 'Уронили iPhone 4 в воду? Даже если телефон попал в снег, то он мог выйти из строя.'
            },
            {
              'title': 'Перепрошивка, программный ремонт',
              'repear_time': 'от 20 мин.',
              'cost': '140 грн.',
              'description': 'Прошивка может потребоваться, если iPhone зависает, глючит или если вы неудачно обновились.'
            }
          ]
        },
        {
          'tableTitle': 'Корпус',
          'rows' : [
            {
              'title': 'Замена стекла (отдельно)',
              'repear_time': 'от 2 час.',
              'cost': 'от 400грн.',
              'description': 'Уронили и разбили стекло на iPhone 4. Мы ставим только оригинальные стекла и по самым низким ценам.'
            },
            {
              'title': 'Замена задней крышки',
              'repear_time': '5 мин.',
              'cost': '200 грн.',
              'description': 'Крышка iPhone 4 может царапаться,появиться трещины от падения.'
            }
          ]
        },
        {
          'tableTitle': 'Комплектующие',
          'rows' : [
            {
              'title': 'Замена экрана/дисплея (модуль)',
              'repear_time': '30 мин.',
              'cost': 'от 650 грн.',
              'description': 'Дисплей перестал показывать изображение? Или имеются искажения, полосы и другие неисправности?'
            },
            {
              'title': 'Замена полифонического динамика',
              'repear_time': 'от 15 мин.',
              'cost': 'от 200 грн.',
              'description': 'Если вдруг у вас пропал звук в iPhone, а именно: нет звука на громкой связи, нет звука в играх, нет звука звонка, - то нужно проверить и заменить нижний (полифонический) динамик.'
            },
            {
              'title': 'Замена микрофона',
              'repear_time': 'от 20 мин.',
              'cost': 'от 200 грн.',
              'description': 'Вас не слышит собеседник? Или, может быть, при записи видео не пишется звук? Скорее всего дело в микрофоне iPhone и может потребоваться его замена.'
            },
            {
              'title': 'Замена разговорного динамика',
              'repear_time': 'от 20 мин.',
              'cost': 'от 200 грн.',
              'description': 'Верхний (слуховой) динамик в iPhone используется только в разговоре, поэтому, если вы не слышите собеседника, то, скорее всего, нужно заменить верхний динамик.'
            },
            {
              'title': 'Замена аккумулятора',
              'repear_time': '10 мин.',
              'cost': '250 грн.',
              'description': 'Ваш аккумулятор все чаще приходится заряжать и он быстрее садится? Новый аккумулятор решит все проблемы!'
            },
            {
              'title': 'Замена вибро-мотора',
              'repear_time': '10 мин.',
              'cost': '200 грн.',
              'description': 'Вибромотор от падений может начать барахлить, звенеть или вообще перестать работать. Его замена занимает довольно мало времени.'
            },
            {
              'title': 'Замена задней камеры',
              'repear_time': '10 мин.',
              'cost': '200 грн.',
              'description': 'Задняя камера iPhone может выдавать плохое изображение или вообще не запускаться, в этом случае, мы заменим её на новую.'
            },
            {
              'title': 'Замена датчиков освещения и приближения ',
              'repear_time': 'от 30 мин',
              'cost': '250 грн.',
              'description': 'Этот датчик выключает экран iPhone, когда вы прикладываете аппарат к уху во время разговора и не дает случайно нажиматься кнопкам.'
            },
            {
              'title': 'Ремонт модуля Wi-Fi',
              'repear_time': 'от 2 час.',
              'cost': '750 грн.',
              'description': 'Если у вас сильно снизился уровень приема Wi-Fi, то проблема скорее всего в антенне и потребуется её заменить.'
            },
            {
              'title': 'Замена модемной части аппарата',
              'repear_time': 'от 3 час.',
              'cost': '1300 грн.',
              'description': 'Телефон может часто терять сеть и хуже ловить сотовую связь, если неисправна GSM-антенна.'
            },
            {
              'title': 'Замена кнопок громкости',
              'repear_time': 'от 20 мин',
              'cost': '250 грн.',
              'description': 'Невозможность убавить или прибавить звук, приводит к тому, что вы не слышите звука при исправном динамике. Достаточно просто заменить кнопки громкости iPhone и все заработает.'
            }
          ]
        },
        {
          'tableTitle': 'Кнопки',
          'rows' : [
            {
              'title': 'Замена кнопки Home',
              'repear_time': 'от 20 мин.',
              'cost': '200 грн.',
              'description': 'Чаще всего кнопка Home выходит из строя из-за неправильного обращения или попадания воды и грязи. Обычно при этом достаточно заменить её шлейф.'
            },
            {
              'title': 'Замена переключателя вибро',
              'repear_time': 'от 30 мин.',
              'cost': '250 грн.',
              'description': 'Рычажок вибрации может выйти из строя и тогда вы не сможете включить или выключить беззвучный режим.'
            },
            {
              'title': 'Замена кнопки включения/блокировки',
              'repear_time': 'от 20 мин',
              'cost': '250 грн.',
              'description': 'Кнопка включения не нажимается? Это часто приводит к проблеме, что вы не можете включить iPhone. Мы заменим кнопку Power на iPhone в кратчайшие сроки.'
            }
          ]
        },
        {
          'tableTitle': 'Шлейфы',
          'rows' : [
            {
              'title': 'Замена шлейфа кнопки Home',
              'repear_time': 'от 45 мин.',
              'cost': '200 грн.',
              'description': 'Самая главная кнопка в телефоне iPhone – это кнопка Home, которая находится под дисплеем. Она чаще других ломается и при ремонте необходимо менять данный шлейф.'
            },
            {
              'title': 'Замена верхнего шлейфа',
              'repear_time': 'от 30 мин.',
              'cost': '250 грн.',
              'description': 'Обычно, замена верхнего шлейфа необходима, если не работает работает кнопка включения iPhone или при неполадках с датчиком света.'
            },
            {
              'title': 'Замена разъёма синхронизации и зарядки ',
              'repear_time': 'от 20 мин',
              'cost': '250 грн.',
              'description': 'Проблемы связанные с зарядкой или подключением к компьютеру iPhone чаще всего решаются заменой нижнего шлейфа.'
            },
            {
              'title': 'Замена разъёма для наушников (аудиоджека) ',
              'repear_time': 'от 30 мин.',
              'cost': '250 грн.',
              'description': 'Если в iPhone не работает разъем наушником или не нажимаются кнопки громкости, то необходимо проверить аудиошлейф.'
            }
          ]
        },
        {
          'tableTitle': 'Другое',
          'rows' : [
            {
              'title': 'Замена мат. платы 16 Gb',
              'repear_time': 'от 20 мин',
              'cost': 'Цену уточняйте',
              'description': 'Заменять материнскую плату необходимо при полной неработоспособности старой платы. Это самая дорогая деталь в телефоне.'
            },
            {
              'title': 'Замена микросхемы Wi-Fi',
              'repear_time': 'от 2 час.',
              'cost': '750 грн.',
              'description': ''
            },
            {
              'title': 'Пайка разъема SIM',
              'repear_time': 'от 20 мин',
              'cost': '',
              'description': ''
            },
            {
              'title': 'Доставка из сервиса',
              'repear_time': 'от 20 мин',
              'cost': '150грн.',
              'description': ''
            },
            {
              'title': 'Доставка в сервис',
              'repear_time': 'от 20 мин',
              'cost': 'бесплатно',
              'description': ''
            }
          ]
        }
      ];
    }
  }
});