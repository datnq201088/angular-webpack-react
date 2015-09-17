import angular from 'angular';
import { routing } from './user.config.js';
import UserCtrl from './user.controller.js';
import UserService from './user.service.js';

export default angular.module('app.user', [UserService])
    .config(routing)
    .controller('UserCtrl', UserCtrl)
    .name;
