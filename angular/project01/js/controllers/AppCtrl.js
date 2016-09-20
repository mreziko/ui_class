/**
 * Created by Reziko on 9/8/2016.

angular.module('app').controller('AppCtrl',
    function ($scope) {
        $scope.person = {
            'name':'John doe'
        };
        
    }
);*/

angular.module('app').controller('AppCtrl',['$scope', 'itemTypesSer',
    function ($scope,itemTypesSer) {
        console.log(itemTypesSer.itemTypes);
        $scope.itemTypes = itemTypesSer.itemTypes;
        //$scope.itemTypes =['electronics','game','home','cell','appliance', 'computer'];
        $scope.title = 'Sample Shopping Cart';
        $scope.description= {
            'title':'word of CEO',
            'text':'lorem epsom Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry'+
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ' +
            'scrambled it to make a type specimen book. It has survived not only five centuries, but also '+
            'the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s '
        };

    }]);