'use strict';

describe('Controller: KitchensinkCtrl', function () {

  // load the controller's module
  beforeEach(module('redsunApp'));

  var KitchensinkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KitchensinkCtrl = $controller('KitchensinkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
