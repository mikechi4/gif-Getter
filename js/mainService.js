angular.module('myApp')
  .service('mainService', function($http){
    var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
    var idUrl = "http://api.giphy.com/v1/gifs/"


    this.getGifs = function(tag){
      return $http({
        method:'GET',
        url: giphyUrl+tag+'&api_key=dc6zaTOxFJmzC'
      })
    }

    this.getById = function(id){
       return $http({
        method:'GET',
        url: idUrl+id+'?api_key=dc6zaTOxFJmzC'
      })
    }
  })
;
