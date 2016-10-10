angular.module('myApp')
  .controller('favoritesCtrl', function($scope, mainService, $state){
    $scope.favorites = mainService.getFavorites();
    $scope.removeFromFavs = function(id){
      $scope.favorites = mainService.removeFromFavs(id);
    }
  })
