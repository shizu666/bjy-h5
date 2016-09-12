angular.module('Tab',[])
    .controller('TabCtrl',['$scope','$state','$stateParams','$ionicLoading','$timeout','$templateCache','$http','HttpJsonp',
        'HttpGet',
        function ($scope,$state,$stateParams,$ionicLoading,$timeout,$templateCache,$http,HttpJsonp
        ,HttpGet) {

            // $ionicLoading.show({
            //     template: "正在载入数据，请稍后..."
            // });
            //
            //
            // $timeout(function(){
            //     $ionicLoading.hide();
            // },1000);

            

            //$scope.url3 = "https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero";
            $scope.url2 = "http://rate.tmall.com/listTagClouds.htm?itemId=44890545950&isAll=true&isInner=true&_ksTS=1440214254542_329&callback=JSON_CALLBACK";

            $scope.url = "http://192.168.9.121:8080/mall-web/address/addressInfo?callback=JSON_CALLBACK&id=1200002";
           // $scope.url2 = "http://192.168.9.121:8080/mall-web/address/addressInfo?id=1200002";
           /* $http.get('http://rest.ihiss.com:9000/user/current',{
                headers : {'X-Access-Token':token}
            });*/



           /* HttpGet.back($scope.url2).success(function (data) {
                console.log("data2",data);
            });*/

            HttpJsonp.back($scope.url).success(function (data) {
                console.log("data3",data);
            }).error(function (data) {
                console.log("cuwu",data);
            });




        }]);
