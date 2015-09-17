export default function UsersCtrl (UserService) {
	const vm = this;
	vm.users = [];
	UserService.getListUser().success(function(data, status, header, config) {
		vm.users = data;
	});
}
UsersCtrl.$inject = ['UserService'];
