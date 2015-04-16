'use strict';

/**
 * @ngdoc function
 * @name bloggerApp.controller:BlogitemCtrl
 * @description
 * # BlogitemCtrl
 * Controller of the bloggerApp
 */
angular.module('bloggerApp')
  .controller('BlogitemCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.blog = {id:"1", create_at:new Date(), comments:[{user:'abc',content:'xxxx'}],tags:"angualrjs",title:"第一篇文章", img:"../images/main/1.jpg", content:"第一篇<u>文章第一篇</u>文章第一篇文章第一篇文章"};


  });
