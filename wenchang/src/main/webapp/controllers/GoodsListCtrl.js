angular.module('controllers',['ionic'])
    .controller('GoodsListCtrl',['$scope','$state','$stateParams','$ionicLoading','$timeout',
        function ($scope,$state,$stateParams,$ionicLoading,$timeout) {



            $scope.$on('$ionicView.enter', function(){
                $scope.id = $stateParams.id;

            });





        }]);



