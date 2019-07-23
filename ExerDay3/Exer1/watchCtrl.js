module.controller("watchCtrl", WatchCtrl)



function WatchCtrl($scope,$rootScope) {
  
   $scope.myName;
   $scope.mess='';
    $scope.$watch('myName', function(newX, old) {
        if(newX=="mhari")
        $scope.mess="Very good you guess my name";
        else{
            $scope.mess='';
        }
      
    })
        
    }
