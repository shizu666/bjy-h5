angular.module('route',['Tab','Home','Classify','Shopping','Account'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('tab',{
                url:'/tab',
                abstract: true,
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
            });

        $urlRouterProvider.otherwise('/tab/home');
});
