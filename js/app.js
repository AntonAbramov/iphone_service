var iApp = angular.module('iApp', []);

  iApp.controller('deviceController',  function ($scope) {
    $scope.menuIphone = [
      {
        'href':'/remont-iphone/iphone-3g-3gs.html',
        'text': 'iPhone 3G и 3GS',
        'title':'',
        'imgSrc':'img/iphone/iphone3s.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-4.html',
        'text': 'iPhone 4',
        'title':'',
        'imgSrc':'img/iphone/iphone4.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-4s.html',
        'text': 'iPhone 4s',
        'title':'',
        'imgSrc':'img/iphone/iphone4s.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-5.html',
        'text': 'iPhone 5',
        'title':'',
        'imgSrc':'img/iphone/iphone5.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-5c.html',
        'text': 'iPhone 5c',
        'title':'',
        'imgSrc':'img/iphone/iphone5c.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-5s.html',
        'text': 'iPhone 5s',
        'title':'',
        'imgSrc':'img/iphone/iphone5s.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-6.html',
        'text': 'iPhone 6',
        'title':'',
        'imgSrc':'img/iphone/iphone6.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-6plus.html',
        'text': 'iPhone 6 Plus',
        'title':'',
        'imgSrc':'img/iphone/iphone6plus.jpg',
        'imgAlt':''
      }
    ]
  });

iApp.controller('problemsController',  function ($scope) {
    $scope.problemCases = [
      {
        'href':'/problems/razbilos-steklo-iphone/',
        'text': 'Разбилось стекло',
        'title':'',
        'iconName':'icon-hammer'
      },
      {
        'href':'/problems/iphone-ne-vklyuchaetsya/',
        'text': 'Не включается',
        'title':'',
        'iconName':'icon-no-mobile'
      },
      {
        'href':'/problems/wifi-ne-rabotaet-ili-ploho-lovit-na-iphone/',
        'text': 'Не работает Wi-Fi',
        'title':'',
        'iconName':'icon-wifi'
      },
      {
        'href':'/problems/ne-rabotaet-zvuk-na-iphone/',
        'text': 'Не работает звук',
        'title':'',
        'iconName':'icon-mute'
      },
      {
        'href':'/problems/ne-rabotaet-displey-iphone/',
        'text': 'Не работает дисплей',
        'title':'',
        'iconName':'icon-tv'
      },
      {
        'href':'/problems/iphone-ne-zaryazhaetsya/',
        'text': 'Не заряжается',
        'title':'',
        'iconName':'icon-charge'
      },
      {
        'href':'/problems/voda/',
        'text': 'Попала вода',
        'title':'',
        'iconName':'icon-water'
      },
      {
        'href':'/problems/ne-rabotaet-vibrozvonok/',
        'text': 'Не работает вибрация',
        'title':'',
        'iconName':'icon-bell'
      },
      {
        'href':'icon-finger',
        'text': 'Не работает тачскрин',
        'title':'',
        'iconName':'icon-finger'
      },
      {
        'href':'/problems/iphone-byistro-razryazhaetsya/',
        'text': 'Быстро разряжается',
        'title':'',
        'iconName':'icon-low-battery'
      },
      {
        'href':'/problems/ne-nazhimayutsya-knopki-na-iphone/',
        'text': 'Не работают кнопки',
        'title':'',
        'iconName':'icon-circle'
      },
      {
        'href':'/problems/vas-ne-slyishit-sobesednik-ne-rabotaet-mikrofon-iphone/',
        'text': 'Не работает микрофон',
        'title':'',
        'iconName':'icon-microphone'
      }
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