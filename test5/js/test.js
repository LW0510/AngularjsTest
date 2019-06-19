var app = angular.module('MyApp',[]);


/**
 * 使用AngularJS的$timeout服务
 * 当使用AngularJS服务时会监视作用域中的数据的变化，当监视到变化时会自动进行更新操作
 * 注:  AngularJS中监视数据变化是由$watch服务实现的
 */
// app.run(['$rootScope','$timeout',function($rootScope,$timeout){
//   $timeout(function(){
//     $rootScope.name = 'tom';
//   },3000);
// }]);


/**
 * 使用原生js的settimeout
 * 当使用非AngularJS服务时不会自动更新，因为监视更新操作默认只对AngularJS上下文的操作有效
 * 因此需要手动调用该作用域对象的$apply()或$digest()方法通知监视服务$watch进行更新操作
 * 注：调用$apply()方法时其本质是在调用$digest（）方法，内部触发
 */
app.run(['$rootScope',function($rootScope){
  setTimeout(function(){
    console.log('时间到！');
    $rootScope.name = 'ttt'
  },3000);
}]);



app.controller('ServiceController',['$scope','$http',function($scope,$http){


}]);