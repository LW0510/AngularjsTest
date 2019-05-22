
angular.module('MyApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.count = 0;

        $scope.doAdd = function () {
            //this.count++;     //此处 this == $scope
            $scope.count++;
        }

       // 自定义事件
        $scope.$on('MyClick',function () {
            $scope.count++;
            // this.count++      //此处this是window  this != $scope ,所以不能这样写
        });
    }
    ]);



