'use strict';
(function () {
    angular.module('qudini.QueueApp')
        .directive('addCustomer', AddCustomer)


    function AddCustomer($http){
        return {
            restrict: 'E',
            scope:{
                onAdded: '&'
            },
            templateUrl:'/add-customer/add-customer.html',
            link: function(scope){

                scope.products = [
                    {name: 'Grammatical advice'},
                    {name: 'Magnifying glass repair'},
                    {name: 'Cryptography advice'}
                ];

                scope.addCustomer = function(){

                }

                //add customer object
                scope.add = function(){
                    scope.dataObj = {
                        name : scope.name,
                        product: {name: scope.product.name}
                    };

                    $http.post('http://localhost:1337/api/customer/add', scope.dataObj); 
                    location.reload();
                }
            }
        }
    }

})();

