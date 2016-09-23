/**
 * Created by Reziko on 9/21/2016.
 */
angular.module("shoppingCart").service("product_type_service", ["$http", function($http){


    //calling inventory_type
    this.productTypes = "Hello World";
    var obj =this;


    $http.get("/service/inventorytype").then(function(response){
        console.log("loggin just the response");
        console.log("End of response");
        //this.productTypes={};

        obj.productTypes= response.data;
        console.log(obj.productTypes);
    });
    
        
}]);