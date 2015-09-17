import angular from 'angular';

class UsersService {
    constructor($http) {
        this.$http = $http;
    }
    getListUser() {
        return this.$http.get('/listuser.json');
    }
}
UsersService.$inject = ['$http'];

export default angular.module('users.service', [])
    .service('UsersService', UsersService)
    .name;
