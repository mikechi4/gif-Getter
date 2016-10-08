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
