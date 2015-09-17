function MessagesCtrl() {
	const vm = this;
	console.log('Message page');
}

export default angular
    .module('messages.controller', [])
    .controller('MessagesCtrl', MessagesCtrl);
