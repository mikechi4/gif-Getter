angular.module('myApp')
  .controller('mainCtrl', function($scope, mainService){

    $scope.getGifs = function(tag){
      mainService.getGifs(tag).then(function(response){
        $scope.gifs = response.data.data;
        $scope.gifLength = response.data.data.length
        $scope.tag = '';
      })
    }

  })
;
