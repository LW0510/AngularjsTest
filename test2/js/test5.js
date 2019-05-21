window.onload = function () {

    document.getElementById('btn').onclick = function () {
        console.log(this); //this 表示事件源
    };
};

angular.module('MyApp', [])
    .controller('EventController', ['$scope', function ($scope) {
        $scope.name = 'tom';
        $scope.show = function (e) {


        }
    }])



