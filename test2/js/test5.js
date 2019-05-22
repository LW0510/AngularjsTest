
angular.module('MyApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        // var result;
        // $scope.calc = function (e) {
        //     var flag = e.target.value;
        //     switch (flag) {
        //         case '加':
        //             result = $scope.v1 + $scope.v2;
        //             break;
        //         case '减':
        //             result = $scope.v1 - $scope.v2;
        //             break;
        //         case '乘':
        //             result = $scope.v1 * $scope.v2;
        //             break;
        //         case '除':
        //             result = $scope.v1 / $scope.v2;
        //             break;
        //         default:
        //             ;
        //
        //     }
        //
        // }


        var result;
        $scope.calc = function () {

            switch($scope.flag){
                case '加': result=$scope.v1 + $scope.v2;
                    break;
                case '减': result=$scope.v1 - $scope.v2;
                    break;
                case '乘': result=$scope.v1 * $scope.v2;
                    break;
                case '除': result=$scope.v1 / $scope.v2;
                    break;
                default:   ;

            }
            $scope.result = result;
        }
    }
    ]);



