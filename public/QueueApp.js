'use strict'; 
    angular
            .module('qudini.QueueApp', [])
            .controller('QueueController',['$http','$log','$scope', function($http,$log,$scope){
        
                    $scope.customers = [];
                    $scope.customersServed = [];
                    _getCustomers();
                    _getServedCustomers();

                    $scope.onCustomerAdded = function(){
                        _getCustomers();
                    }

                    $scope.onCustomerRemoved = function(){
                        _getCustomers();
                    }

                    $scope.onCustomerServed = function(){
                        _getCustomers();
                        _getServedCustomers()
                    }

                    function _getServedCustomers(){
                        return $http.get('/api/customers/served').then(function(res){
                            $scope.customersServed = res.data;
                        })
                    }

                    function _getCustomers(){
                        return $http.get('/api/customers').then(function(res){
                            $log.info('res',res.data);
                            $scope.customers = res.data;
                        })
                    }
        }]);

 
