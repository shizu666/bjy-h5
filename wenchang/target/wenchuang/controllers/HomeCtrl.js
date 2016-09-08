angular.module('Home',[])
    .controller('HomeCtrl',['$scope','$state','$stateParams','$ionicLoading','$timeout','$ionicScrollDelegate',
        function ($scope,$state,$stateParams,$ionicLoading,$timeout,$ionicScrollDelegate) {
            $scope.bannerList = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
            $scope.loadMoreFlag = true;
            $scope.recommendList = [0,1,2,3];

            $scope.kindList = [
                { "img":"images/6.png",
                  "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类大是"},
                { "img":"images/6.png",
                    "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类"},
                { "img":"images/6.png",
                    "title":"种类"}

            ];

            $scope.$on('$ionicView.enter', function(){


            });

            /*$scope.slideHasChanged = function (index) {
                console.log("index",index);
            }*/

            $scope.goNextBanner = function (index) {
                console.log("index",index);
            }

            
            //上拉加载更多
            var a = 4;
            $scope.loadMore = function () {
                $scope.recommendList.push(a);
                a++;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }

            //内容滚动，搜索框背景变化
            $scope.getScrollLength = function () {
               var postion =  $ionicScrollDelegate.getScrollPosition();
                if(postion.top>200){
                    $('#search').addClass("home_searchChange");
                }else{
                    $('#search').removeClass("home_searchChange");
                }
            }



        }]);

