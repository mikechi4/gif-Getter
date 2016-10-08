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
      console.log("fav array " +favorites);
      console.log("fav length " +favorites.length);

      if(favorites.length === 0){
        favorites.push(newFavorite);
      } else {
        for(var i = favorites.length-1; i >= 0; i--){
          if(newId === favorites[i].id){
            return alert('this has already been favorited');
          } else {
            favorites.push(newFavorite);
            return alert('added to favorites');            
          }
        }
      }
    }
  })
;
