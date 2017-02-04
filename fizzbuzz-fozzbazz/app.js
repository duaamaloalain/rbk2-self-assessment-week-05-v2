angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */
  var $scope={}
  .factory('counter', function(){
    $scope.counter=0;
    $scope.counter++;
  })

  .controller('fizzbuzzCtrl', function(){
    if ($scope.counter % 3 === 0){
      return "FIZZ"; 
    }else if ($scope.counter % 5 === 0){
      return "BUZZ";
    }else if ($scope.counter % 3 === 0 && $scope.counter % 5 === 0 ){
      return "FIZZBUZZ";
    }
  })

  .controller('fozzbazzCtrl', function(){
    if ($scope.counter % 4 === 0){
      return "FOZZ"; 
    }else if ($scope.counter % 6 === 0){
      return "BAZZ";
    }else if ($scope.counter % 4 === 0 && $scope.counter % 6 === 0 ){
      return "FOZZBAZZ";
    } 
  });
