angular.module("MyApp", [])
    .controller("MyController", myController);

function myController($scope) {
    //初始化message数据
    $scope.message = "";
    //保存message数据
    $scope.saveMessage = "";
    //计算剩余字数
    $scope.getCount = function () {
        if ($scope.message.length > 100) {
            $scope.message = $scope.message.slice(0, 100);
        }
        return 100 - $scope.message.length;
    };

    //保存数据
    $scope.save = function () {
        // $scope.saveMessage = $scope.message;
        localStorage.setItem('note_key', JSON.stringify($scope.message));
        alert("保存成功!");
    };

    $scope.get = function () {
        $scope.message = JSON.parse(localStorage.getItem('note_key') || '[]');
    }

    $scope.clear = function () {
        $scope.message = "";
        localStorage.removeItem('note_key');
    }
}