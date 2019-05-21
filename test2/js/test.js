var app = angular.module('MyApp',[]);

//根作用域对象  作用范围是全局的
app.run(['$rootScope',function ($rootScope) {
    $rootScope.address = "南京";
}]);

