var app = angular.module('MyApp',[]);


app.controller('ServiceController',['$scope','$http',function($scope,$http){

/**
 * 发送jsonp跨域请求
 */

//  $http.jsonp();


 /**
  * 实现监视用户输入，当模型数据发生变化时立即发送AJAX请求获取数据并显示在视图中
  * $watch() 方法
  * 作用：手动监视模型数据中指定变量（对象）的变化，当发生变化时执行回调函数，进行更新操作
  * 语法：$watch(参数1，参数2，参数3)
  *     参数1表示监听的数据，可以是普通变量，也可以是对象
  *     参数2表示当模型数据发生变化时要执行的回调函数
  *     参数3表示是否深度监听，true表示检查所监听对象中每个属性的变化，监听对象时需要将该参数设置为true,默认false
  */
  $scope.obj = {
    city: '南京',
    bus:  92
  };

  $scope.$watch('obj',function(newValue,oldValue,scope){

    //如果值有变化，发请求
    
  },true);


}]);