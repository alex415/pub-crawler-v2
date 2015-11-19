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






// CONTROLLER
app.controller('MainController', ['$scope', function($scope) {

    $scope.submit = function () {


    };

}]);
