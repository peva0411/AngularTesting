(function() {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config([
        '$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', { templateUrl: 'Angular/Expense/expense.html' })
                .when('/admin', { templateUrl: 'Angular/Admin/admin.html' })
                .otherwise({ redirectTo: '/' });
        }
    ]);
})();