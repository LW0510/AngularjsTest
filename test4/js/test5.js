var app = angular.module('MyApp',[]);

/**
 * 自定义指令配置：link、controller练习
 */

app.controller('DirectiveController',['$scope',function ($scope) {

}]);



app.directive('first',[function () {
    return{
        restrict: 'AE',

        controller: function($scope,$element,$attrs,$transclude){

            //定义非公开的方法，属于当前指令作用域
            $scope.show = function(){
                console.log('show');
            };

            //定义公开方法，可以被其他指令调用
            this.play = function(){
                console.log('play');
            }
        }

    };
}]);


// 选项：require
app.directive('second',[function(){
    return{
        // require: 'first',   //表示依赖first这个指令，注意：默认在同一级查找这个指令
        require: '^first',      //加了^  表示可以在不同级查找
        restrict: 'A',

        link: function($scope,iElm,iAttrs,controller){
            // console.log(controller); //注意：这个controller就是first指令中的controller
            controller.play();      //可以调用first指令中controller中的play()方法，但是无法调用其$scope.show()方法，因为只属于作用域
        }
    };
}]);


