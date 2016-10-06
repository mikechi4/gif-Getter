angular.module('myApp')
  .service('mainService', function($http){
    var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
    this.getGifs = function(tag){
      return $http({
        method:'GET',
        url: giphyUrl+tag+'&api_key=dc6zaTOxFJmzC'
      })
    }
  })
;
