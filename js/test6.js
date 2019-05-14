angular.module("MyApp", [])
    .controller("MyController",myController);


function myController($scope) {

    $scope.todos = [
        {name: "吃饭", isChecked: false},
        {name: "睡觉", isChecked: false},
        {name: "打豆豆", isChecked: true},
    ];

    $scope.add = function(){
        //判断用户输入的内容是否合法
        if(!$scope.newTodo){
            alert("输入的内容不能为空！");
            return ;
        }
        $scope.todos.unshift({name: $scope.newTodo, isChecked: false});
        $scope.newTodo = '';
    }

    // $scope.removeItem = function () {
    //     //判断用户是否选中,遍历
    //     $scope.todos.forEach(function (item, index) {
    //         if(item.isChecked){ //选中
    //             $scope.todos.splice(index,1);
    //             //注意bug,如果没有添加下一条递归语句永远删除不了相邻的后一个元素，此法不推荐
    //             $scope.removeItem();
    //         }
    //     });
    //
    //
    // }

    $scope.removeItem = function () {
       var oldTodo = $scope.todos;
       $scope.todos = [];

       //遍历，找到未选中的留下来
        oldTodo.forEach(function (item, index) {
           if(!item.isChecked){
               $scope.todos.push(item);
           }
        });

        //判断用户是否选中
        if($scope.todos.length == oldTodo.length){
            alert('请选择一项！');
        }


    }


}