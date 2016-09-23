/**
 * Created by Reziko on 9/22/2016.
 */

angular.module('shoppingCart').directive('itemList', function (scope) {
    return{
        restrict:'EA',
        scope:{itemList:'='},
        templateUrl:'/views/list.html',
        link:function (scope) {
            
        }
    }
})