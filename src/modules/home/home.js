// home.js
'use strict';
export default angular.module('home', [
		require('./home.controller').name,
		require('./home.about.controller').name,
		require('./home.directive').name
]);