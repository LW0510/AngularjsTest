var app = angular.module('MyApp',[]);

/**
 * 自定义指令配置：link、controller练习
 */

app.controller('DirectiveController',['$scope',function ($scope) {

}]);


//link方式
app.directive('mySelect',[function () {
    return{

        restrict: 'E',  //表示只能以元素的形式使用
        replace: true,
        
        //ng-options:可以对数组或对象循环(必须有一个ng-model作为依赖), "v as v" 前一个作为value,后一个作为文本显示
        template: '<select ng-options="v as v for (k,v) in arr" ng-model="opt"></select>',

        link: function($scope,iElm,iAttrs){
            $scope.arr = iAttrs.opts.split(',');
            $scope.opt = $scope.arr[0]; //默认选中第一个
        }
    };
}]);

// controller方式也可以
