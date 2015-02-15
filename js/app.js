var iApp = angular.module('iApp', []);

iApp.controller('deviceController', function ($scope) {
  $scope.menuIphone = [
    {
      'href': '/remont-iphone/iphone-3g-3gs.html',
      'text': 'iPhone 3G и 3GS',
      'title': '',
      'imgSrc': 'img/iphone/iphone3s.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-4.html',
      'text': 'iPhone 4',
      'title': '',
      'imgSrc': 'img/iphone/iphone4.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-4s.html',
      'text': 'iPhone 4s',
      'title': '',
      'imgSrc': 'img/iphone/iphone4s.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-5.html',
      'text': 'iPhone 5',
      'title': '',
      'imgSrc': 'img/iphone/iphone5.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-5c.html',
      'text': 'iPhone 5c',
      'title': '',
      'imgSrc': 'img/iphone/iphone5c.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-5s.html',
      'text': 'iPhone 5s',
      'title': '',
      'imgSrc': 'img/iphone/iphone5s.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-6.html',
      'text': 'iPhone 6',
      'title': '',
      'imgSrc': 'img/iphone/iphone6.jpg',
      'imgAlt': ''
    },
    {
      'href': '/remont-iphone/iphone-6plus.html',
      'text': 'iPhone 6 Plus',
      'title': '',
      'imgSrc': 'img/iphone/iphone6plus.jpg',
      'imgAlt': ''
    }
  ];
  $scope.menuIpad = [
    {
      'href': '/ipad-remont/ipad-1.html',
      'text': 'iPad 1',
      'title': '',
      'imgSrc': 'img/ipad/ipad1.jpg',
      'imgAlt': ''
    },
    {
      'href': '/ipad-remont/ipad-2.html',
      'text': 'iPad 2',
      'title': '',
      'imgSrc': 'img/ipad/ipad2.jpg',
      'imgAlt': ''
    },
    {
      'href': '#/ipad-remont/ipad-3.html',
      'text': 'iPad 3',
      'title': '',
      'imgSrc': 'img/ipad/ipad3.jpg',
      'imgAlt': ''
    },
    {
      'href': '#/ipad-remont/ipad-4.html',
      'text': 'iPad 4',
      'title': '',
      'imgSrc': 'img/ipad/ipad4.jpg',
      'imgAlt': ''
    },
    {
      'href': '#/ipad-remont/ipad-mini.html',
      'text': 'iPad Mini',
      'title': '',
      'imgSrc': 'img/ipad/ipad_mini.jpg',
      'imgAlt': ''
    },
    {
      'href': '#/ipad-remont/ipad-mini2.html',
      'text': 'iPad Mini2',
      'title': '',
      'imgSrc': 'img/ipad/ipad_mini2.jpg',
      'imgAlt': ''
    },
    {
      'href': '#/ipad-remont/ipad-air.html',
      'text': 'iPad Air',
      'title': '',
      'imgSrc': 'img/ipad/ipad_air.jpg',
      'imgAlt': ''
    }
  ]
});

iApp.controller('problemsController', function ($scope) {
  $scope.problemCases = [
    {
      'href': '/problems/razbilos-steklo-iphone.html',
      'text': 'Разбилось стекло',
      'title': '',
      'iconName': 'icon-hammer'
    },
    {
      'href': '/problems/iphone-ne-vklyuchaetsya.html',
      'text': 'Не включается',
      'title': '',
      'iconName': 'icon-no-mobile'
    },
    {
      'href': '/problems/wifi-ne-rabotaet.html',
      'text': 'Не работает Wi-Fi',
      'title': '',
      'iconName': 'icon-wifi'
    },
    {
      'href': '/problems/ne-rabotaet-zvuk-na-iphone.html',
      'text': 'Не работает звук',
      'title': '',
      'iconName': 'icon-mute'
    },
    {
      'href': '/problems/ne-rabotaet-displey-iphone.html',
      'text': 'Не работает дисплей',
      'title': '',
      'iconName': 'icon-tv'
    },
    {
      'href': '/problems/iphone-ne-zaryazhaetsya.html',
      'text': 'Не заряжается',
      'title': '',
      'iconName': 'icon-charge'
    },
    {
      'href': '/problems/voda-iphone.html',
      'text': 'Попала вода',
      'title': '',
      'iconName': 'icon-water'
    },
    {
      'href': '/problems/ne-rabotaet-vibrozvonok.html',
      'text': 'Не работает вибрация',
      'title': '',
      'iconName': 'icon-bell'
    },
    {
      'href': 'icon-finger',
      'text': 'Не работает тачскрин',
      'title': '',
      'iconName': 'icon-finger'
    },
    {
      'href': '/problems/iphone-byistro-razryazhaetsya.html',
      'text': 'Быстро разряжается',
      'title': '',
      'iconName': 'icon-low-battery'
    },
    {
      'href': '/problems/iphone-ne-nazhimayutsya-knopki.html',
      'text': 'Не работают кнопки',
      'title': '',
      'iconName': 'icon-circle'
    },
    {
      'href': '/problems/iphone-ne-rabotaet-mikrofon.html',
      'text': 'Не работает микрофон',
      'title': '',
      'iconName': 'icon-microphone'
    }
  ]
});

iApp.controller('priceTables', function ($scope) {
  $scope.columns = [
      'Услуга',
      'iPhone 3G/3GS',
      'iPhone 4',
      'iPhone 4S',
      'iPhone 5',
      'iPhone 5C',
      'iPhone 5S',
      'Длительность ремонта'
  ]
  $scope.rows = [
    {
      'Услуга': 'Замена стекла и дисплея (модулем)',
      'iPhone 3G/3GS': '9999 грн',
      'iPhone 4': '9999 грн',
      'iPhone 5': '9999 грн',
      'iPhone 5C': '9999 грн',
      'iPhone 4S': '9999 грн',
      'iPhone 5S': '9999 грн',
      'Длительность ремонта': '30 мин.'
    },
    {
      'Услуга': 'Замена дисплея (отдельно)',
      'iPhone 3G/3GS': '9999 грн',
      'iPhone 4': '9999 грн',
      'iPhone 5': '9999 грн',
      'iPhone 5C': '9999 грн',
      'iPhone 4S': '9999 грн',
      'iPhone 5S': '9999 грн',
      'Длительность ремонта': '30 мин.'
    },
    {
      'Услуга': 'Замена переднего стекла (отдельно)',
      'iPhone 3G/3GS': '9999 грн',
      'iPhone 4': '9999 грн',
      'iPhone 5': '9999 грн',
      'iPhone 5C': '9999 грн',
      'iPhone 4S': '9999 грн',
      'iPhone 5S': '9999 грн',
      'Длительность ремонта': '30 мин.'
    }
  ]
  $scope.body = [

  ]
});


iApp.directive('cantFind', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/views/cant-find.html',
    controller: function ($scope) {
    }
  }
});