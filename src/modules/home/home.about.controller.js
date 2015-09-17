'use strict';
import angular from 'angular';

function HomeAboutCtrl () {
	const vm = this;
	vm.page = 'This is about page!';
}

export default angular
	.module('home.about.controller', [])
	.controller('HomeAboutCtrl', HomeAboutCtrl);
