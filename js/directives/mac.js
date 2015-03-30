angular.module('iApp').directive('pricesMacbook', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/views/prices-macbook.html',
    controller: function ($scope) {
      $scope.pricesTable = [
        {
          'tableTitle': 'Основное',
          'rows': [
            {
              'title': 'Диагностика',
              'repear_time': 'от 60 мин.',
              'cost': '0 грн.',
              'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
            },
            {
              'title': 'Ремонт после воды',
              'repear_time': 'от 60 мин.',
              'cost': 'от 300 грн.',
              'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
            },
            {
              'title': 'Чистка от пыли',
              'repear_time': 'от 60 мин.',
              'cost': ' 350 грн.',
              'description': ''
            },
            {
              'title': 'Замена жесткого диска',
              'repear_time': 'от 3 часов.',
              'cost': ' 700 грн.',
              'description': ''
            },
            {
              'title': 'Замена клавиатуры',
              'repear_time': 'от 3 часов.',
              'cost': ' 1400 грн.',
              'description': ''
            },
            {
              'title': 'Замена термопасты',
              'repear_time': 'от 60 мин.',
              'cost': ' 350 грн.',
              'description': ''
            },
            {
              'title': 'Замена wi-fi модуля',
              'repear_time': 'от 60 мин.',
              'cost': ' 850 грн.',
              'description': ''
            },
            {
              'title': 'Замена провода на зарядке',
              'repear_time': 'от 60 мин.',
              'cost': ' 700 грн.',
              'description': ''
            },
            {
              'title': 'Ремонт USB',
              'repear_time': 'от 60 мин.',
              'cost': ' 1400 грн.',
              'description': ''
            },
            {
              'title': 'Замена батареи',
              'repear_time': '60 мин.',
              'cost': ' 350 грн.',
              'description': ''
            },
            {
              'title': 'Замена жк матрицы',
              'repear_time': 'от 2 часов.',
              'cost': ' 1400 грн.',
              'description': ''
            },
            {
              'title': 'Замена оперативной памяти',
              'repear_time': 'от 2 часов.',
              'cost': '350 грн.',
              'description': ''
            },
            {
              'title': 'Замена тачпада',
              'repear_time': 'от 60 мин.',
              'cost': '500 грн.',
              'description': ''
            },
            {
              'title': 'Ремонт разъема зарядки ',
              'repear_time': 'от 60 мин.',
              'cost': '700 грн.',
              'description': ''
            },
            {
              'title': 'Восстановление видеокарты',
              'repear_time': 'от 2 часов.',
              'cost': '2500 грн.',
              'description': ''
            },
            {
              'title': 'Восстановление данных с HDD',
              'repear_time': 'от 2 часов.',
              'cost': '2500 грн.',
              'description': ''
            },
            {
              'title': 'Замена CD-привода',
              'repear_time': 'от 2 часов.',
              'cost': ' 350 грн.',
              'description': ''
            },
            {
              'title': 'Гравировка клавиатуры ',
              'repear_time': '24 часа.',
              'cost': ' 700 грн.',
              'description': ''
            },
            {
              'title': 'Замена CD-привода на SSD или HDD (optibay)',
              'repear_time': 'от 60 мин.',
              'cost': '700 грн.',
              'description': ''
            },
            {
              'title': 'Замена кулера',
              'repear_time': 'от 60 мин.',
              'cost': '500 грн.',
              'description': ''
            }
          ]
        }
      ];
    }
  }
});