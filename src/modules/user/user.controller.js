
export default function UserCtrl (UserService, $stateParams) {
	const vm = this;
	vm.id = $stateParams.userId;
	UserService.getListUser().success(function(data, status, header, config) {
		vm.user = data[vm.id-2];
	});
}
UserCtrl.$inject = ['UserService', '$stateParams'];
