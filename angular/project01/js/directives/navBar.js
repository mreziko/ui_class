/**
 * Created by Reziko on 9/12/2016.
 */

angular.module('app').directive('navBar', function () {
    return{
        restrict:'EAC',
        templateUrl:'/views/left-nav.html'
    };
});