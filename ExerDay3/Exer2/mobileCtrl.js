module.controller("mobileCtrl", MobileCtrl)

//let value1 

// DI dependency injection - IOC
function MobileCtrl($scope, $rootScope) {

    $scope.mobile=new Mobile({model: '', color: '', price: ''});
    $scope.ind;
    $scope.editind=true;
    $scope.order = {};
    $scope.search=new Mobile({model: '', color: '', price: ''});;
    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]

    $scope.add = function() {  
        $scope.devices.push( $scope.mobile);
    }
    $scope.update = function() { 
        $scope.devices[$scope.ind].model=$scope.mobile.model;
        $scope.devices[$scope.ind].color=$scope.mobile.color;
        $scope.devices[$scope.ind].price=$scope.mobile.price;        
       
    }
    $scope.del = function(i) {  
        $scope.devices.splice(i,1);
    }
    $scope.edit = function(i) {  
        $scope.devices[i].editind=true;
        $scope.devices[i].readind=false;       
    }

    $scope.sort = function(column){
        if ($scope.order[column] == column) {
          $scope.order[column+'Desc'] = !$scope.order[column+'Desc'];
        } else {
          $scope.order[column] = column;
          $scope.order[column+'Desc'] = false;
        }
      
        $scope.currentSort = {exp: $scope.order[column], reverse: $scope.order[column+'Desc']} ;
      };
    
}

class Mobile {
    constructor({model, color, price}) {
        this.model = model
        this.color = color
        this.price = price
    }
}
