'use strict';

var IC = angular.module('IC', [
    'ngRoute'
]);

IC.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.

        when('/minigames', {
            templateUrl: 'partials/minigames.html'
        }).
        when('/creative', {
            templateUrl: 'partials/creative.html'
        }).
        when('/survival', {
            templateUrl: 'partials/survival.html'
        }).
        when('/home', {
            templateUrl: 'partials/home.html'
        }).
        otherwise({
            redirectTo: '/home'
        });

}]);
