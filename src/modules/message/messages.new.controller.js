'use strict';

function  MessagesNewCtrl() {
  const vm = this;
  vm.text = '';
  vm.create = function() {
    if (vm.text)
    msgStore.add(vm.text);
  }
}
MessagesNewCtrl.$inject = ['msgStore'];

export default angular.module('messages.new.controller', [
    require('./message.store').name
  ])
.controller('MessagesNewCtrl', MessagesNewCtrl);