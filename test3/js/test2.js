var app = angular.module('MyApp', []);


app.controller('MyController', ['$scope', function ($scope) {

    $scope.arr = ['tom','jack','mike','alice','alex'];
    // $scope.s1 = $scope.arr[0];
    $scope.users = [
        {id:1003,name:'tom',age:20,pwd:'123'},
        {id:1004,name:'jack',age:23,pwd:'1244'},
        {id:1003,name:'mike',age:11,pwd:'123555'}
    ];
}])

