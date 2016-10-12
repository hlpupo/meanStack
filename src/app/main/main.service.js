(function () {
  'use strict';
  angular.module('meanStack').service('$meanStack', _meanStack)

  _meanStack.$inject = ['$http', '$q']

  function _meanStack ($http, $q) {
    return {
      'sendMessage' : function (data) {
        $http.post('http://localhost:5000/api/message', { msg : data })
      },
      'getMessage' : function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'http://localhost:5000/api/message',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (response, status) {
          deferred.resolve({'code': status, 'data': response});
        }).error(function (data) {
          deferred.reject(data);
        });
        return deferred.promise;
      }
    }
  }
})()
