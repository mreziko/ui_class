/**
 * Created by Reziko on 9/21/2016.
 */

angular.module("shoppingCart").controller("homeController",["$scope","product_type_service",
    function($scope,product_type_service){

        $scope.productTypes = "";
        console.log("FROM CONTROLLER");
        console.log(product_type_service.productTypes);
        $scope.$watch(function(){
            return product_type_service.productTypes;
        },function(newVal,oldVal){
            if (oldVal != newVal){
                console.log("FROM WATCH LIST");
                console.log("NEW VAL");
                console.log(newVal);
                console.log("OLD VAL");
                console.log(oldVal);
                $scope.productTypes=newVal;
            }

        });
    }]);