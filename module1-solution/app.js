( function (){
  'use strict';
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject=['$scope'];


  function LunchCheckController($scope){
    $scope.lunch_menu='';
    $scope.color='';


    $scope.check= function (){
      var input = $scope.lunch_menu.split(',');
      var noList= 0;
      input.forEach((item) => {
            if (item != false) {
                        noList++;
                    }
                });
      if(noList >0 && noList <= 3){
        $scope.message ="Enjoy!";
        $scope.color='green';
      }
      else if(noList>=4){
        $scope.message = "Too much!";
        $scope.color='green';
      }
      else{
        $scope.message = "Please enter data first";
        $scope.color='red';
      }
    }
  }
})();
