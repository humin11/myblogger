'use strict';

describe('Controller: BlogitemCtrl', function () {

  // load the controller's module
  beforeEach(module('bloggerApp'));

  var BlogitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogitemCtrl = $controller('BlogitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
