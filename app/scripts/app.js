'use strict';

var LB = angular.module('LB', [
    'ngRoute'
]);

LB.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.

        when('/lesvorm', {
            templateUrl: 'partials/lesvorm.html'
        }).
        when('/over-mij', {
            templateUrl: 'partials/over-mij.html'
        }).
        when('/opleidingen', {
            templateUrl: 'partials/opleidingen.html'
        }).
        when('/lessen', {
            templateUrl: 'partials/lessen.html'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html'
        }).
        otherwise({
            redirectTo: '/over-mij'
        });

}]);
