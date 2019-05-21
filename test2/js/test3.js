var app = angular.module('MyApp',[]);

//根作用域对象  作用范围是全局的
// app.run(['$rootScope',function ($rootScope) {
//     $rootScope.address = "南京";
//     var address = "北京";
//     $rootScope.show = function () {
//         //address和$rootScope.address的区别
//         console.log('hello'+address);
//         console.log('hello'+$rootScope.address);
//     }
// }]);

app.controller('FirstController',['$scope',function ($scope) {
    $scope.name = " tom";  //在作用域中定义变量
    $scope.show = function () { //在作用域中定义方法
        console.log('hello'+ $scope.name+'!');
    }

}]);

app.controller('SecondController',['$scope',function ($scope) {
    $scope.name = "jike";  //在作用域中定义变量
    // $scope.show = function () { //在作用域中定义方法
    //     console.log('hello',$scope.name+'!');
    // }
}]);

