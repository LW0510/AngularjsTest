var app = angular.module('MyApp',[]);

/**
 * 在AngularJS中，系统内置的服务都是以$开头，所有自定义的服务尽量避免以$开头
 * 自定义服务的三种方式：
 * 1.使用Module的factory方法，
 * 2.使用Module的service方法，
 * 3.使用Module的provider方法，复杂，但功能最强大，可拓展
 */

//方式1：使用Module的factory方法，必须有返回值，即必须有return返回结果，一般返回包含各种定义方法的对象
//思考：为什么返回的是一个对象？因为我们知道，服务一般是包含了很多功能，即很多方法，对于多个方法我们可以用一个对象来封装。
app.factory('FirstService',[function(){
  return {
    fun:function(){
      console.log('执行FirstService的fun()');
    },
    calc:function(num1,num2){
      return num1+num2;
    }

  }
}]);


//方式2：使用Module的service方法，无需返回值
app.service('SecondService',[function(){
  this.fun = function(){

  };
}]);


//方式3：使用Module的provider方法
app.provider('ThirdService',{
  $get:function(){
    return {
      fun:function(){
        console.log('执行ThirdService中的fun()');
      }
    }
  }
});


app.controller('ServiceController',['$scope','FirstService',function($scope,FirstService){
  $scope.doService1 = function(){
    FirstService.fun();
  }

}]);