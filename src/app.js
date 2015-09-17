// css
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import  angular from 'angular';
import uirouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';
import react from 'react';
// import ngreact from 'ngreact';

import {routing} from './app.config.js';

// common
import common from './modules/common/common.module';
// feature
import home  from './modules/home/home.module';
import messages from './modules/message/message.module';

import admin  from './modules/admin/admin.module';
import user  from './modules/user/user.module';
import users from './modules/users/users.module';


const app = angular.module('app',
	[uirouter, ocLazyLoad, common, home, messages, users, user])
.config(routing);





