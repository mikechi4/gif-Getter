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
        controller: 'mainCtrl'
      })
      // .state('gifInfo', {
      //   url:'/gif/:id',
      //   templateUrl: '../views/searchCtrl.html',
      //   controller: 'searchCtrl'
      // })
  })
;
