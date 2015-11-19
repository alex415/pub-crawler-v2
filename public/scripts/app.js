var app = angular.module('pubCrawler', ['ngRoute', 'ngAutocomplete', 'ngMap']);

// ROUTES
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
}]);


// SERVICES
app.factory('findBars', ['$http', function($http) {

    var factory = {
      get: function(geoLocation) {
        return $http.get("http://");
      }
    };
    return factory;
}]);

app.factory('getPictures', ['$http', function($http) {

    var factory = {
      get: function(bar) {
        return $http.get("http://");
      }
    };
    return factory;
}]);


// CONTROLLER
app.controller('MainController', ['$scope', function($scope) {

    $scope.$watch('searchInput', function() {
      $scope.submit();
    });

    $scope.submit = function () {
      console.log("hello");

    };

}]);
