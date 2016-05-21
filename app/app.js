"use strict";

var app = angular.module('TodoApp', []);

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Items"}];
});

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
      dependencies: ["sunshine", "clippers", "hat", "water", "headphones"]
    },
    {
      id: 1,
      task: "feed the cat",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "Matt",
      urgency: "low",
      dependencies: ["food", "cat", "hat", "water", "firehose"]
    },
    {
      id: 2,
      task: "feed the whistlepig",
      isCompleted: false,
      dueDate: "12/5/17",
      assignedTo: "Matt",
      urgency: "low",
      dependencies: ["groundhog", "grass", "holes", "shed", "funnel"]
    }

  ]

  $scope.newItem = function() {
    $scope.showListView = false;
    console.log("you clicked newItem");
  };
  $scope.allItem = function() {
    $scope.showListView = true;
    console.log("you clicked allItem");
  };



});

console.log("hello");