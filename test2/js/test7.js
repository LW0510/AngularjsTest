
angular.module('MyApp', [])
    .controller('MyController', ['$scope', function ($scope) {

        $scope.stu={
            id:1001,
            name:'张三'
        }

        $scope.hobbies = ['eat','play','sleep'];
    }
    ]);



