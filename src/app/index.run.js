(function() {
  'use strict';

  angular
    .module('meanStack')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
