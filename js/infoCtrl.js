angular.module('myApp')
  .controller('infoCtrl', function($scope, mainService, $stateParams){
    var id = $stateParams.id
    $scope.getById = function(id){
      mainService.getById(id).then(function(response){
        $scope.gif = response.data.data;
      })
    }
    $scope.getById(id)
  })
