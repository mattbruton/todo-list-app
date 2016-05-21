"use strict";

var app = angular.module('TodoApp', []);

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Items"}];
});

app.controller("TodoCtrl", function($scope) {
  $scope.welcome = "hello";

  $scope.showListView = true;

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