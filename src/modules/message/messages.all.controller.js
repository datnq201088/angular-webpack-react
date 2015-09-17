'use strict';
function  MessagesAllCtrl() {
	const vm = this;
	vm.msgs = msgStore.all();
}
MessagesAllCtrl.$inject = ['msgStore'];

export default angular.module('messages.all.controller', [
		require('./message.store').name
	])
.controller('MessagesAllCtrl', MessagesAllCtrl);