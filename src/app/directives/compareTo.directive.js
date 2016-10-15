/**
 * Created by SeyerOpup on 10/12/2016.
 */
(function () {
  'use strict';
  angular.module('meanStack').directive('compareTo', _compareTo)
  _compareTo.$inject = ['$parse'];
  function _compareTo ($parse) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ngModel) {
        var mainModel = $parse(attrs.compareTo);
        var secondModel = $parse(attrs.ngModel);

        scope.$watch(attrs.ngModel, function (newValue) {
          ngModel.$setValidity(attrs.name, newValue === mainModel(scope))
        })

        scope.$watch(attrs.compareTo, function (newValue) {
          ngModel.$setValidity(attrs.name, newValue === secondModel(scope))
        })
      }
    }
  }
})();
