angular.module('Tab',[])
    .controller('TabCtrl',['$scope','$state','$stateParams','$ionicLoading','$timeout','$templateCache','$http',
        function ($scope,$state,$stateParams,$ionicLoading,$timeout,$templateCache,$http) {

            // $ionicLoading.show({
            //     template: "正在载入数据，请稍后..."
            // });
            //
            //
            // $timeout(function(){
            //     $ionicLoading.hide();
            // },1000);


            

            //$scope.method = "JSONP";
            //$scope.url = "https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero";
            /*$scope.method = 'POST';
            $scope.url = "http://10.2.0.19:8080/mall-web/adVisit";
            var params = {
                id:"167",
                type:"2"
            }

            $http({method: $scope.method,data:params,url: $scope.url, cache: $templateCache}).
            then(function(response) {
                console.log("response",response);
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });*/


    }]);
