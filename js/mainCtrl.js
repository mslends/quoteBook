angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {

// wrote getData function to call my dataService.js
$scope.getData = function() {
  $scope.quotes = dataService.getData();
}



// wrote removeData function that calls my dataService.removeData() function and tells it to remove that object from my quotes array.
$scope.removeData = function(text) {
  dataService.removeData(text);
}


// wrote addData function that calls my dataService.addData() function. It then tells the function to add any data that I input into the text field to a new object, and add that to the quotes array.
$scope.addData = function() {
  dataService.addData($scope.newQuote);
}







$scope.getData();
});
