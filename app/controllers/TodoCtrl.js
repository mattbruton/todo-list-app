"use strict";

app.controller("TodoCtrl", function($scope) {
  $scope.welcome = "hello";

  $scope.showListView = true;

  $scope.newTask = {};

  $scope.items = [

    {
      id: 0,
      task: "feed the dog",
      isCompleted: false,
      dueDate: "12/5/17",
      assignedTo: "Matt",
      urgency: "high",
      dependencies: "groundhog, grass, holes, shed, funnel"
    },
    {
      id: 1,
      task: "feed the cat",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "Matt",
      urgency: "low",
      dependencies: "groundhog, grass, holes, shed, funnel"
    },
    {
      id: 2,
      task: "feed the whistlepig",
      isCompleted: false,
      dueDate: "12/5/17",
      assignedTo: "Matt",
      urgency: "low",
      dependencies: "groundhog, grass, holes, shed, funnel"
    }

  ];

  $scope.newItem = function() {
    $scope.showListView = false;
    console.log("you clicked newItem");
  };
  $scope.allItem = function() {
    $scope.showListView = true;
    console.log("you clicked allItem");
  };

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id =$scope.items.length;
    console.log("you added a new Item", $scope.newTask);
    $scope.items.push($scope.newTask);
    $scope.newTask = "";
  };

});