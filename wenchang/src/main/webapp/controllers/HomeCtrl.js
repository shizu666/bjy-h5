angular.module('controllers',[])
    .controller('HomeCtrl',['$scope','$state','$stateParams','$ionicLoading','$timeout','$ionicScrollDelegate',
        function ($scope,$state,$stateParams,$ionicLoading,$timeout,$ionicScrollDelegate) {
            $scope.bannerList = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
            $scope.loadMoreFlag = true; //上拉显示更多控制
            $scope.showToTop = false;//显示滑动顶部按钮
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

            //点击头banner
            $scope.goNextBanner = function (index) {
                console.log("index",index);
            }

            //内容滚动，搜索框背景变化
            $scope.getScrollLength = function () {
               var postion =  $ionicScrollDelegate.getScrollPosition();
                if(postion.top>85&&postion.top<100){
                    $('#search').addClass("home_searchChange");
                }else if(postion.top>=100){
                    $('#search').addClass("home_searchChange2");
                    $scope.showToTop = true;
                }else{
                    $('#search').removeClass("home_searchChange");
                    $('#search').removeClass("home_searchChange2");
                    $scope.showToTop = false;
                }
            }

            
            //去商品分类页
            $scope.goGoods = function (index) {
                $state.go("goodsList",{id:index});
            }
            
            
            //返回页面头部
            $scope.returnTop = function () {
                $ionicScrollDelegate.scrollTop();
                $scope.showToTop = false;
            }

            //上拉加载更多
            var a = 4;
            $scope.loadMore = function () {
                $scope.recommendList.push(a);
                a++;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }


        }]);

