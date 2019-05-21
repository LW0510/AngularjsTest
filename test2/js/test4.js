window.onload = function () {

    document.getElementById('btn').onclick = function () {
        console.log(this); //this 表示事件源
    };
};

angular.module('MyApp', [])
    .controller('EventController', ['$scope', function ($scope) {
        $scope.name = 'tom';
        $scope.show = function (e) {
            // console.log(this);
            // console.log(this === $scope); //这个this不表示数据源了，表示当前作用域对象，即 $scope .
            // console.log($scope.name);
            // console.log(this.name);
            //以上输出名字是一样的

            //需求：如果说我就要拿到 <button ng-click="show()">click me</button> 这个里面的文字,怎么办？
            //    在<button ng-click="show($event)">click me</button> 在方法里加个参数
            // console.log(e); //这里的e表示的是 事件对象 ，不是事件源对象(事件对象中包括事件源对象)

            //console.log(e.target); //事件源  注意：此处的e.target为 DOM 对象
            // console.log(e.target.innerHTML); //输出文字

            //将DOM对象转换为jQuery对象,angular.element(e.target)  为一个jQuery对象
            //console.log(angular.element(e.target).html());

            //将jQuery对象转换为DOM对象，事实上，jQuery对象就是一个DOM对象的数组
            var obj = angular.element(e.target);
            var o = obj[0].innerHTML;

        }
    }])



