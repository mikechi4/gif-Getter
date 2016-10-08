angular.module('myApp')
  .controller('favoritesCtrl', function($scope, mainService, $state){
    $scope.favorites = mainService.getFavorites();

  })
