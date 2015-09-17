import angular from 'angular';
import { routing } from './users.config.js';
import UsersCtrl from './users.controller.js';
import UserService from '../user/user.service.js';

export default angular.module('app.users', [UserService])
.config(routing)
.controller('UsersCtrl', UsersCtrl)
.name;