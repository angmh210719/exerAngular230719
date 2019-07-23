module.controller("subCalcCtrl", SubCalcCtrl)


// DI dependency injection - IOC
function SubCalcCtrl($scope) {
    //alert("hello from time controller")
        
    //this.result=0;
    $scope.result=23;
    $scope.showResult = function() { 
      $scope.result=$scope.$parent.result;
    }
        
    }