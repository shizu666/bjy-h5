angular.module('route',['Tab','Home','Classify','Shopping','Account','GoodDetail','GoodsList'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('tab',{
                url:'/tab',
                abstract: true,
                cache: false,
                templateUrl:'views/tab.html',
                controller:'TabCtrl'
            })

            
            .state('tab.home',{
                url:'/home',
                views: {
                    'tab-home': {
                        templateUrl:'views/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('tab.classify',{
                url:'/classify',
                views: {
                    'tab-classify': {
                        templateUrl:'views/classify.html',
                        controller: 'ClassifyCtrl'
                    }
                }
            })
            .state('tab.shopping',{
                url:'/shopping',
                views: {
                    'tab-shopping': {
                        templateUrl:'views/shopping.html',
                        controller: 'ShoppingCtrl'
                    }
                }
            })
            .state('tab.account',{
                url:'/account',
                views: {
                    'tab-account': {
                        templateUrl:'views/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('goodDetail',{
                url:'/goodDetail/:id',
                templateUrl:'views/goodDetail.html',
                controller: 'GoodDetailCtrl'
            })
            .state('goodsList',{
                url:'/goodsList/:id',
                templateUrl:'views/goodsList.html',
                controller: 'GoodsListCtrl'
            });

        $urlRouterProvider.otherwise('/tab/home');
});
