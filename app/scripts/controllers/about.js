'use strict';

/**
 * @ngdoc function
 * @name bloggerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bloggerApp
 */
angular.module('bloggerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
