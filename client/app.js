var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'paritals/logreg.html'
        })
        .otherwise({
            redirectTo: '/'
        })
})