"use strict";

app.controller("ItemListCtrl", function($scope) {

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

});