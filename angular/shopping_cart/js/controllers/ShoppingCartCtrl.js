/**
 * Created by Reziko on 9/19/2016.
 */
angular.module("ShoppingCart").controller("ShoppingCartCtrl",["$scope","$http",function ($scope, $http) {
    $scope.contents="Hello World";
    $http.get("/service/customer/2").then(function (response) {
        console.log("logging just the response");
        console.log(response);
        console.log("end of reponse");
        $scope.contents = response.data;
        console.log($scope.contents);
    });
}]);