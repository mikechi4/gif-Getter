angular.module('myApp')
  .controller('mainCtrl', function($scope, mainService, $state){

    $scope.getGifs = function(tag){
      mainService.getGifs(tag).then(function(response){
        $scope.gifs = response.data.data;
        $scope.tag = '';
        if(response.data.data.length > 0) {
          $state.go('search')
        } else {
          $state.go('noResults')
        }
      })
    }

  })
;
