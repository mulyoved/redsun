'use strict';

angular.module('redsunApp')
  .controller('KitchensinkCtrl', function ($scope, $log, $location, routingService) {
    $scope.message = 'Hello';
    $scope.modelName = 'Kitchensink';

    $scope.kitchenSinkList = function() {

      var listURL = routingService.buildUrl($scope.modelName); // + '/' + ($scope.formName ? $scope.formName + '/' : '') + obj._id + '/edit');
      $log.log('kitchenSinkList', listURL);

      $location.path( listURL );
    }
  });
