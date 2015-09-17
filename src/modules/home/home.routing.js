// home.routing

'use strict';
import angular from 'angular';

function routing($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    template: require('./home.html'),
    controller: 'HomeCtrl as vm',
    resolve: {
      loadHomeController: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
        var deferred = $q.defer();
        require.ensure([], function() {
                              // load whole module
                              var module = require('./home');
                              $ocLazyLoad.load({name: 'home'});
                              deferred.resolve(module.controller);
                            });
        return deferred.promise();
      }]
    }
  })
  .state('home.about', {
   url: '/about',
   controller: 'HomeAboutCtrl',
   controllerAs: 'vm',
   template: require('./home.about.html')
 })
}
routing.$inject = ['$stateProvider'];
export default angular.module('home.routing', []).
config(routing)
.name;




