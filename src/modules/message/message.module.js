'use strict';

routing.$inject = ['$stateProvider'];

function routing ($stateProvider) {
	$stateProvider
		.state('messages', {
			url: '/messages',
			template: require('./messages.html'),
			controllerAs: 'vm',
			resolve: {
                    loadMessagesController: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                          	var deferred = $q.defer();
                            require.ensure([], function() {
	                              // load whole module
	                              var module = require('./messages.controller.js');
	                              $ocLazyLoad.load({name: module.name});
	                              deferred.resolve(module.controller);
                          	});
                            return deferred.promise;
                    }]
              }
		})
		.state('messages.all', {
			url: '/all',
			template: require('./messages.all.html'),
			controllerAs: 'vm',
			resolve: {
				loadMessagesAllController: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                          var deferred = $q.defer();
                          require.ensure([], function() {
                              // load whole module
                              var  module = require('./messages.all.controller.js');
                              $ocLazyLoad.load({name: module.name});

                              deferred.resolve(module.controller);
                          });
                          return deferred.promise;
                }]
			}
		})
		.state('messages.new', {
        url: '/new',
        template: require('./messages.new.html'),
        controllerAs: 'vm',
        resolve: {
          loadMessagesNewController:['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
          	  var deferred = $q.defer();
              require.ensure([], function(){
                // load only controller module
                var module = require('./messages.new.controller.js');
                $ocLazyLoad.load({name: module.name});
                deferred.resolve(module.controller);
              })
              return deferred.promise;
          }]
        }
      });
}

export default angular.
	module('messages.module', [])
	.config(routing)
	.name;