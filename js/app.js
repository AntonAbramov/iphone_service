
  var iApp = angular.module('iApp', []);

  iApp.controller('topMenuController',  function ($scope) {
    $scope.menuItems = [
      {'href':'/', 'title':'iPhone', 'text':'iPhone',},
      {'href':'/remont-ipad/', 'title':'iPad', 'text':'iPad',},
      {'href':'/remont-macbook/', 'title':'MacBook', 'text':'MacBook',},
      {'href':'/remont-ipod/', 'title':'iPod', 'text':'iPod',}
    ];

    

  });
  
  iApp.controller('deviceController',  function ($scope) {
    $scope.menuIphone = [
      {
        'href':'/remont-iphone/iphone-3g-3gs',
        'text': 'iPhone 3G и 3GS',
        'title':'',
        'imgSrc':'img/iphone/iphone3s.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-4',
        'text': 'iPhone 4',
        'title':'',
        'imgSrc':'img/iphone/iphone4.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-4s',
        'text': 'iPhone 4s',
        'title':'',
        'imgSrc':'img/iphone/iphone4s.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-5',
        'text': 'iPhone 5',
        'title':'',
        'imgSrc':'img/iphone/iphone5.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-5c',
        'text': 'iPhone 5c',
        'title':'',
        'imgSrc':'img/iphone/iphone5c.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-5s',
        'text': 'iPhone 5s',
        'title':'',
        'imgSrc':'img/iphone/iphone5s.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-6',
        'text': 'iPhone 6',
        'title':'',
        'imgSrc':'img/iphone/iphone6.jpg',
        'imgAlt':''
      },
      {
        'href':'/remont-iphone/iphone-6-plus',
        'text': 'iPhone 6 Plus',
        'title':'',
        'imgSrc':'img/iphone/iphone6plus.jpg',
        'imgAlt':''
      }
    ]
  });
  
