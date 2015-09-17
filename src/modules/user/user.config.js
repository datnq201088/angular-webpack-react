import template from './user.html';

routing.$inject = ['$stateProvider'];
export function routing($stateProvider) {
    $stateProvider
        .state('user', {
            url: '/user/:userId',
            controller: 'UserCtrl',
            controllerAs: 'vm',
            template: template
        });
}