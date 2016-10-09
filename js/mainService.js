angular.module('myApp')

  .service('mainService', function($http){
    var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
    var idUrl = "http://api.giphy.com/v1/gifs/"
    var favorites = [];

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

    this.addToFavorites = function(newId, newUrl) {
      var newFavorite = {
        id: newId,
        url: newUrl
      };

      if(favorites.length === 0){
        return favorites.push(newFavorite);
      } else {
        for(var i = favorites.length-1; i >= 0; i--){
          if(newId === favorites[i].id){
            return alert('this has already been favorited');
          } else {
            return favorites.push(newFavorite);
          }
        }
      }
    }

    this.getFavorites = function() {
      return favorites;
    }

    this.removeFromFavs = function(id) {
      for(var i = 0; i < favorites.length; i++) {
        if(id === favorites[i].id) {
          favorites.splice(i, 1);
        }
      }
    }
  })
;
