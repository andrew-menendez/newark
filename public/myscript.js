var app = angular.module('newark', []);



app.controller('controller1', function ($scope) {

  $scope.foo='bar';

  console.log($scope.foo);

});