/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('meanStack')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('API_URL', 'http://localhost:5000/');

})();
