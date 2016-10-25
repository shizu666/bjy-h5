angular.module('GoodDetail',[])
    .controller('GoodDetailCtrl',['$scope','$state','$stateParams','$ionicLoading','$timeout',
        function ($scope,$state,$stateParams,$ionicLoading,$timeout) {



            $scope.$on('$ionicView.enter', function(){
                $scope.title = $stateParams.id;

            });




        }]);


