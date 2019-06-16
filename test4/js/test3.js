var app = angular.module('MyApp',[]);

/**
 * 自定义指令配置：link、controller
 */

app.controller('DirectiveController',['$scope',function ($scope) {
    $scope.name = 'tom';
    $scope.age = 21;

    $scope.show = function () {
        console.log('show');
    }
}]);


//选项：link
app.directive('first',['$rootScope',function ($rootScope) {
    return{
        template: '<p>{{name}}</p>',
        //以下三个参数为形参，可以自定义，angular是按顺序依次注入的，其中，$scope为当前指令的作用域对象，
        //默认值为false,继承当前指令所在controller对象的作用域(详情见test2.html)
        //后边依次为元素，属性和所依赖的其他控制器（可以省略）
        //其中元素表示当前指令所使用的元素（指应用这个指令的那个div），这个iElm为一个jQuery对象
        link: function($scope,iElm,iAttrs,controller){
            // console.log('link');
            // console.log($scope.age);
            // console.log(iElm);
            // console.log(iAttrs);
            // console.log(iAttrs.id);

            //scope作用域提供了一个$apply()方法，用来调用父作用域（比如DirectiveController控制器）的某个方法(注意参数中的方法加小括号)，
            // 但是有个前提条件：必须把根作用域对象传进来,但是还是报错，因为执行时机不对（执行太早）
            //$scope.$apply('show()');
            
            //可以这样测试(jQuery对象iElm调用其中的on事件,当鼠标经过那个div时：
            // iElm.on('mouseover',function(){
            //     $scope.$apply('show()');
            // });
        }
    }
}]);

// 选项：controller
app.directive('second',[function(){
    return{
        template: '<p>{{name}}</p>',
        //以下三个参数和上面link里面的的三个参数是一致的，但是注意，这三个形参名字不能随意更改！！此参数为自动注入，在js压缩的时候会出问题
        //推荐手动注入
        // controller:function($scope,$element,$attrs){
        //     console.log('controller');

        // }
    
        //手动注入：
        controller:['$scope','$element','$attrs',function($scope,element,attributes){
            console.log('controller');

        }]
    }
}]);