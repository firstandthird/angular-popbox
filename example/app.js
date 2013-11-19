angular.module('example-app', ['ftPopbox']);

var MainController = function($scope) {
  $scope.text1 = 'This is example 1';
  $scope.text2 = 'This is example 2';


  $scope.update = function() {
    $scope.text1 = 'this is an updated example 1';
    $scope.text2 = 'this is an updated example 2';
  };
};
