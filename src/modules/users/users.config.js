import template from './users.html';

routing.$inject = ['$stateProvider'];
export function routing($stateProvider) {
    $stateProvider
        .state('users', {
            url: '/users',
            controller: 'UsersCtrl',
            controllerAs: 'vm',
            template: template
        });
}