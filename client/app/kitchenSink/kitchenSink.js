'use strict';

angular.module('redsunApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kitchenSink', {
        url: '/kitchenSink',
        templateUrl: 'app/kitchenSink/kitchenSink.html',
        controller: 'KitchensinkCtrl'
      });
  });