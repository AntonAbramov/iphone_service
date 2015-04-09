angular.module('iApp').directive('siteHeader', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/views/site-header.html',
    controller: function ($scope){
      $scope.menuItems = [
        {'href':'/', 'title':'iPhone', 'text':'iPhone', selected: ''},
        {'href':'/ipad-remont.html', 'title':'iPad', 'text':'iPad'},
        {'href':'/remont-macbook.html', 'title':'MacBook', 'text':'MacBook'},
        {'href':'#/remont-ipod/', 'title':'iPod', 'text':'iPod'}
      ];
    }
  }
})