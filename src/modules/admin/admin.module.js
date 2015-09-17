import angular from 'angular';
import { routing } from './admin.config.js';
import AdminCtrl from './admin.controller.js';


export default angular.module('app.admin', [])
    .config(routing)
    .controller('AdminCtrl', AdminCtrl)
    .name;
