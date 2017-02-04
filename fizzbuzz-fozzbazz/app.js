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
  
 .factory('counter', function(){
    
    var $scope = {};
    $scope.count = 0;
    $scope.display = "";
    $scope.increment = function() {
      $scope.count++;
      if ($scope.count % 3 === 0) {
        $scope.display = "FIZZ"
      }
     else if ($scope.count % 5 === 0) {
        $scope.display = "BUZZ"
      } 
     else if ($scope.count % 3 === 0 && $scope.count % 5 === 0) {
        $scope.display = "FIZZBUZZ"
      }
      else if ($scope.count % 4 === 0) {
        $scope.display = " FOZZ"
      }
      else if ($scope.count % 6 === 0) {
        $scope.display = "BAZZ"
      }
      else if ($scope.count % 4 === 0 && $scope.count % 6 === 0) {
        $scope.display = "FOZZBAZZ"
      }
     else{
      $scope.display=$scope.count;
     }      
    } 
  return $scope;
})
   
  .controller('fizzbuzzCtrl', function($scope,counter){
    $scope.increment= counter.increment();
    $scope.display = counter.display;
   
  })
  .controller('fozzbazzCtrl', function($scope,counter){
    $scope.increment = counter.increment();
    $scope.display =counter.display;
  });