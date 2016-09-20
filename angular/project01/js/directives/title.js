/**
 * Created by Reziko on 9/9/2016.
 */

angular.module('app').directive('appTitle', function () {
   return {
      restrict:'EAMC', // Element, Attribut, Comment, Class
       //template:'<h1>Hello World</h1>',
       templateUrl:'/views/title.html',
       controller:function ($scope) {
           $scope.title='Shopping Cart';
       },
       link: function (scope) {
           scope.title='from directive';
       }
       
   } ;
});