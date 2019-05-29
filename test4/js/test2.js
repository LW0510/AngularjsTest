var app = angular.module('MyApp',[]);

/**
 * @ 用于字符串 （简单类型，如String,number）
 * 将父作用域中的特定属性绑定到隔离作用域中，单向绑定
 * 注: 绑定简单类型时不能用 =
 */
app.directive('first',[function () {
    return{
        scope: {
            //将父作用域中的name绑定（继承）到隔离作用域中
            //name:'@username',     //@ 符号后面的名称必须与html中指令里添加的属性名相同
            name:'@',               //@ 符号可以后面不加名称，那么html中指令里添加的属性名即为 name
            age:'@',
        },
        template: 'name:<input type="text" ng-model="name"><br>' +
            'age:<input type="text" ng-model="age"><br>' +
            'name={{name}},age={{age}},',
        // controller: function($scope){
        //     $scope.name = 'jack';
        // },
        // link: function ($scope, iElm, iAttrs, controller) {
        //
        // }


    };
}]);


/**
 *      =   用于对象
 *      将父作用域中的特定对象绑定到隔离作用域中，双向绑定
 */
app.directive('second',[function () {
    return{
        scope: {
            user:"=",
        },
        template: 'name:<input type="text" ng-model="user.name"><br>' +
            'age:<input type="text" ng-model="user.age"><br>' +
            'user.name={{user.name}},age={{user.age}},',
        // controller: function($scope){
        //     $scope.name = 'jack';
        // },
        // link: function ($scope, iElm, iAttrs, controller) {
        //
        // }


    };
}]);




/**
 *      &   用于方法
 *      将父作用域中的特定方法绑定到隔离作用域中，
 */
app.directive('third',[function () {
    return{
        scope: {
            click:"&",      //绑定一个父作用域中的方法，将来根据click参数来决定调用父作用域中的某个方法
        },
        template: '<input type="button" ng-click="click()" value="按钮1">'



    };
}]);


app.controller('DirectiveController',['$scope',function ($scope) {
    $scope.name = 'tom';
    $scope.age = 21;
    $scope.user = {name: 'jack',age:25};

    $scope.study = function () {
        console.log('welcome to itany');
    }
}]);