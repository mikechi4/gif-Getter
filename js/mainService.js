angular.module('myApp')

  .service('mainService', function($http, localStorageService){
    var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
    var idUrl = "http://api.giphy.com/v1/gifs/"
    var favorites = [];
    this.term = '';
    var service = this;
    var limit = 0;

    if(localStorageService.get('favorites')){
      favorites = localStorageService.get('favorites');

    } else{
      localStorageService.store('favorites', favorites);
    }

    this.getGifs = function(tag){
      var padge = '';
      if(service.term === tag){
        limit += 24;
        padge = '&offset=' + limit;
      } else{
        service.term = tag;
        limit = 0;
      }
      return $http({
        method:'GET',
        url: giphyUrl+tag+'&limit=24' + padge + '&api_key=dc6zaTOxFJmzC'
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
        favorites.push(newFavorite);
        localStorageService.store('favorites', favorites);
        return favorites;
      } else {
        for(var i = favorites.length-1; i >= 0; i--){
          if(newId === favorites[i].id){
            return alert('this has already been favorited');
          }
        }
        favorites.push(newFavorite);
        localStorageService.store('favorites', favorites);
        return favorites;
      }
    }

    this.getFavorites = function() {
      var favorites = localStorageService.get('favorites')
      return favorites;
    }

    this.removeFromFavs = function(id) {
      var favorites = localStorageService.get('favorites')
      for(var i = 0; i < favorites.length; i++) {
        if(id === favorites[i].id) {
          favorites.splice(i, 1);
          localStorageService.store('favorites',favorites);
        }
      }
      return favorites;
    }
  })
;
