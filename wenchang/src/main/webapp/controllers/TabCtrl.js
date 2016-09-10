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


            


            //$scope.url = "https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero";
           //$scope.url = "http://rate.tmall.com/listTagClouds.htm?itemId=44890545950&isAll=true&isInner=true&_ksTS=1440214254542_329&callback=jsonp_review_tags";

            $scope.url = "http://192.168.9.109:80/mall-web/adVisit?id=167&type=2";
           /* $http.get('http://rest.ihiss.com:9000/user/current',{
                headers : {'X-Access-Token':token}
            });*/

            HttpGet.back($scope.url).success(function (data) {
                console.log("data",data);
            });

    }]);
