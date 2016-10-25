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


                HttpGet.back("http://192.168.9.136:8080/wms-web/services/inbound/getPrePurchaseProduct/11111?baseWarehouseCode=sh001")
                    .success(function (data) {
                        console.log("ddd",data);
                    })
                    .error(function (data) {
                            console.log("data",data);
                    });




        }]);
