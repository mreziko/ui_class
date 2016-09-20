/**
 * Created by Reziko on 9/19/2016.
 */
angular.module("app").controller("ShoppingCartCtrl",["$scope","$http",function ($scope, $http) {
    //$scope.contents = "Hello World";

    //Calling customer service with id 2
    // $http.get("/service/customer/2").then(function (response) {
    //     console.log("Logging just the response");
    //     console.log(response);
    //     console.log("end of response");
    //     $scope.contents = response.data;
    //     console.log($scope.contents);
    // });


    //Data to post information, assume this is coming from a form element

    var data = {
        firstname: "Peter",
        lastname: "Griffing",
        address: "Sky way ls colinas",
        phone: "128-582-1236",
        email: "exampel2@cubic.com"


    };

    //Post SERVICE TO ADD INFORMATION TO THE SERVICE

    $http.post("/service/customer", data) //Here you can replace the data variable with a JSON object
        .success(function (data) {
            console.log(data);
        })
        .error(function (data) {
            console.log(data);
        });
}]);