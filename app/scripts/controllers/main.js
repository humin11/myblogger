'use strict';

/**
 * @ngdoc function
 * @name bloggerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bloggerApp
 */
angular.module('bloggerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
