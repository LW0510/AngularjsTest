var app = angular.module('MyApp',[]);

app.controller('DirectiveController',['$scope',function ($scope) {
    $scope.name = 'tom';
    $scope.user = {'username': 'aaa','password':'123'};
}]);

/**
 * 选项： scope , 三种取值
 *  1. false
 *  从父作用域中继承，是同一个作用域，双向
 *  2.true
 *  从父作用域继承并创建一个新的作用域(指令作用域，子作用域)，单向
 *  父作用域中数据的修改会影响子作用域（因为从父继承），子作用域数据的修改不会影响父作用域（因为虽然继承了父作用域，但是还创建了一个新的作用域）
 *  3. {} 空对象
 *  创建隔离作用域，与父作用域完全无关，默认无法互相访问
 */

app.directive('first',[function () {
    return{
        scope: {},
        template: '<h2>name:{{name}}</h2>',
        controller: function($scope){
            $scope.name = 'jack';
        },


    };
}]);


app.directive('second',[function () {
    return{
        scope: true,
        template: '<h2>username:{{user.username}},password:{{user.password}}</h2>',
        controller: function($scope){
            //$scope.name = 'jack';
            $scope.user.username = 'bbb';
            $scope.user.password = '456';
        },


    };
}]);

