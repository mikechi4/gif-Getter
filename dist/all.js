angular.module('myApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl:'../views/about.html'
      })
      .state('search', {
        url:'/search',
        templateUrl: '../views/search.html',
        controller: 'searchCtrl'
      })
      .state('noResults', {
        url:'/noResults',
        templateUrl: '../views/noResults.html'
      })
      .state('info', {
        url: '/info/:id',
        templateUrl: '../views/info.html',
        controller: 'infoCtrl'
      })
      .state('favorites', {
        url: '/favorites',
        templateUrl: '../views/favorites.html',
        controller: 'favoritesCtrl'
      })
  })
;

angular.module('myApp')
  .controller('favoritesCtrl', function($scope, mainService, $state){
    $scope.favorites = mainService.getFavorites();
    $scope.removeFromFavs = function(id){
      $scope.favorites = mainService.removeFromFavs(id);
    }
  })

angular.module('myApp')
  .controller('infoCtrl', function($scope, mainService, $stateParams){
    var id = $stateParams.id
    $scope.getById = function(id){
      mainService.getById(id).then(function(response){
        $scope.gif = response.data.data;
      })
    }
    $scope.getById(id)

    //add to favorites
    $scope.addToFavorites = function(id, url) {
      mainService.addToFavorites(id, url);
    }
  })

angular.module("myApp")
   .service("localStorageService", function($http) {
     this.store = function(name, data) {
       localStorage.setItem(name, JSON.stringify(data));
       return 'saved';
     };
     this.get = function(name) {
       var item = localStorage.getItem(name);
       return JSON.parse(item);
     };
   });

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

angular.module('myApp')
  .controller('searchCtrl', function($scope, mainService, $state, $stateParams){

    $scope.serviceTag = mainService.term;
    $scope.getGifs = function(tag){
      mainService.getGifs(tag).then(function(response){
        $scope.gifs = response.data.data;
        $scope.count = response.data;
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

angular.module('myApp')
  .directive('headerDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/headerTmpl.html'
    }
  })
