import template from './admin.html';
routing.$inject = ['$stateProvider'];
export function routing($stateProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            controller: 'AdminCtrl',
            controllerAs: 'vm',
            template: template
        });
}