"use strict";

app.controller("ItemListCtrl", function($scope,$http,$location) {

  $scope.items = [];


  var getItems = function() {
    $http.get("https://nss-matt-todo-app.firebaseio.com/items.json")
      .success(function(itemObject) {
       var itemCollection = itemObject;
       Object.keys(itemCollection).forEach(function(key) {
          itemCollection[key].id = key;
         $scope.items.push(itemCollection[key]);
        })
      });
    }

  getItems();

  $scope.itemDelete = function(itemId) {
    console.log("", itemId);
    $http
      .delete(`https://nss-matt-todo-app.firebaseio.com/items/${itemId}.json`)
      .success(function(response) {
        $scope.items = [];
        getItems();
      })
  }
    

});