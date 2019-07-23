module.controller("calcCtrl", CalcCtrl)


// DI dependency injection - IOC
function CalcCtrl($scope,$rootScope) {
    //alert("hello from time controller")
    
    this.firstV;
    this.secondV;
    this.op;
    this.result;
    $rootScope.result=this.result;
    $scope.changeOp = function(param) { 
        switch(param){
        case '*': 
        this.result=this.firstV * this.secondV;
        $rootScope.result=this.result;
        this.op="*";   
        break;
        case '/': 
        this.result=this.firstV /this.secondV; 
        $rootScope.result=this.result;
        this.op="/";  
        break;
        case '-':  
        this.result=this.firstV- this.secondV;  
        $rootScope.result=this.result;
        this.op="-";
        break;
        case '+':  
        this.result=this.firstV+ this.secondV; 
        $rootScope.result=this.result;
        this.op="+"; 
        break;
        default:  
        this.result=this.firstV+ this.secondV;
        $rootScope.result=this.result;
        this.op="+";
        break; 
    }
          
    }

  //  $scope.calc = new CalcClass('','')

}

//class CalcClass {
 //   constructor(firstV, secondV) {
//        this.firstV = firstV;
//        this.secondV = secondV;             
 //   }
//}