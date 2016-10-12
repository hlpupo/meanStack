(function () {
  'use strict';

  angular
    .module('meanStack')
    .controller('MainController', MainController);

  MainController.$inject = ['$meanStack']

  function MainController ($meanStack) {
    var vm = this;
    vm.text = '';
    vm.messages = '';
    getMessage();

    vm.postMessage = function () {
      $meanStack.sendMessage(vm.text)
    }

    /**
     * Get all message
     */
    function getMessage() {
      $meanStack.getMessage().then(function (data) {
        console.log(data)
        vm.messages = data.data;
      })

    }
  }
})();
