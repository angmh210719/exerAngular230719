module.controller("calc2Ctrl", Calc2Ctrl)


// DI dependency injection - IOC
function Calc2Ctrl($scope,$rootScope) {
    //alert("hello from time controller")
        
   // $scope.result=0;
   $scope.res=0;
    $scope.showRes = function() { 
      $scope.res=$rootScope.result;
   }
        
    }

  //  $scope.calc = new CalcClass('','')