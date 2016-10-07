angular.module('myApp')
  .controller('searchCtrl', function($scope, mainService, $state, $stateParams){

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

    // $scope.giveBorder = function(){
    //   alert('HELLOOO');
    // }
  })
;
