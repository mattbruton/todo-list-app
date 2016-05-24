"use strict";

app.controller("ItemNewCtrl", function($scope, $http, $location) {
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    task: "",
    urgency: ""
  };

  $scope.items = [];

  $scope.addNewItem = function() {

    $http.post("https://nss-matt-todo-app.firebaseio.com/items.json",
    JSON.stringify({
      assignedTo: $scope.newTask.assignedTo,
      dependencies: $scope.newTask.dependencies,
      dueDate: $scope.newTask.dueDate,
      isCompleted: false,
      task: $scope.newTask.task,
      urgency: $scope.newTask.urgency
    })
  )
    .success(function(response) {
      $location.url("/items/list");
    });
    
  };

});