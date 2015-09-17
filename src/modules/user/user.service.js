import angular from 'angular';
class UserService {
  constructor($http) {
    this.$http = $http
  }

  getInfo() {
    return {
      id: 1,
      name: 'Nguyen Quoc Dat'
    };
  }
  getListUser() {
        return this.$http.get('/listuser.json');
    }
}
UserService.$inject = ['$http'];

export default angular.module('user.service', [])
  .service('UserService', UserService)
  .name;