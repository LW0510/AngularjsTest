var app = angular.module('MyApp', []);

//自定义过滤器
//功能：将字符串反转
app.filter('reverse', function () {
    return function (data, symbol) {
        if (!symbol) {
            symbol = '';
        }
        if (typeof data === 'string') {
            var arr = data.split(symbol);
            arr.reverse();
            return arr.join(symbol);
        }
        if (typeof data == 'number') {
            var arr = (data + '').split(symbol);
            arr.reverse();
            return parseFloat(arr.join(symbol));
        }
        //判断是否为数组，数组为引用类型
        // if(data.constructor.name === 'Array'){
        //
        // }
        if(angular.isArray(data)){
            //如果是操作作用域中的数组，由于每次处理都会引起作用域中数据的变化，所以可能会报错。
            // return data.reverse();
            var temp = new Array();
            for(var index in data){
                temp.push(data[index]);
            }
            return temp.reverse();
        }
            return data;
    }
});


//在作用域中也可以过滤，然后将过滤数据传到页面

app.controller('MyController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.str = $filter('reverse')(['1','2','3']);
}])

