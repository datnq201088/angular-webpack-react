import angular from 'angular';

function HomeCtrl($timeout) {
    const vm = this;
    vm.page = 'Hom Page';
    vm.person = 'Hello';
    vm.test = [];
    vm.test.data = [];
    vm.react = true;
    vm.totalWatcher = 0;

    vm.changeMode = function() {
        vm.react = !vm.react;
        $timeout(function() {
            vm.countWatcher();
        }, 2000);
    }
    vm.clickHandler = function() {
        console.log("in AngularJS");
    }
    vm.countWatcher = function() {
        var root = angular.element(document.getElementsByTagName('body'));

        var watchers = [];

        var f = function(element) {
            angular.forEach(['$scope', '$isolateScope'], function(scopeProperty) {
                if (element.data() && element.data().hasOwnProperty(scopeProperty)) {
                    angular.forEach(element.data()[scopeProperty].$$watchers, function(watcher) {
                        watchers.push(watcher);
                    });
                }
            });

            angular.forEach(element.children(), function(childElement) {
                f(angular.element(childElement));
            });
        };

        f(root);

        // Remove duplicate watchers
        var watchersWithoutDuplicates = [];
        angular.forEach(watchers, function(item) {
            if (watchersWithoutDuplicates.indexOf(item) < 0) {
                watchersWithoutDuplicates.push(item);
            }
        });

        vm.totalWatcher = watchersWithoutDuplicates.length;
    }
    vm.refresh = function() {
        console.log('start update data');
        for (var i = 0; i < 1500; ++i) {
            vm.test.data[i] = {};
            for (var j = 0; j < 5; ++j) {
                vm.test.data[i][j] = Math.random();
            }
        }
        console.log('data is updated successfully!');

    }
    vm.refresh();
    $timeout(function() {
        vm.countWatcher();
    }, 2000);


}
HomeCtrl.$inject = ['$timeout'];

export default angular
    .module('home.controller', [])
    .controller('HomeCtrl', HomeCtrl);
