/**
 * Created by SeyerOpup on 10/12/2016.
 */
(function () {
  'use strict';
  angular.module('meanStack').controller('AuthController', _authController)
  _authController.$inject = ['$auth'];
  function _authController ($auth) {
    var vm = this;

    vm.register = function () {
      $auth.signup(vm.user);
    }

  }

})();
