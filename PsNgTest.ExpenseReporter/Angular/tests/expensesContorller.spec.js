/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-route.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../app.js" />
/// <reference path="../Expense/expensesController.js" />


describe('ExpensesController', function () {

    var $controllerConstructor;
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('Should have three expense items', function() {

        var ctrl = $controllerConstructor('expensesController', { $scope: scope });
        expect(ctrl.expenseItems.length).toBe(3);

    });

});