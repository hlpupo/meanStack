(function() {
  'use strict';

  angular
    .module('meanStack')
    .config(config);

  config.$inject = ['$logProvider', 'toastrConfig', '$authProvider', 'API_URL'];
  function config($logProvider, toastrConfig, $authProvider, API_URL) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    $authProvider.baseUrl = API_URL;
    $authProvider.singupUrl = API_URL + 'auth/signup';
  }

})();
