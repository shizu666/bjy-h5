/*angular.module('route',['Tab','Home','Classify','Shopping','Account','GoodDetail','GoodsList'])
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
});*/

/**
 * 路由
 */
define(['App'], function(app){
    return app
        .config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider) {
                var loadFunction = function($templateCache, $ocLazyLoad, $q, $http,name,files,htmlURL){
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load ({
                        name: name,
                        files: files
                    }).then(function() {
                        return $http.get(htmlURL)
                            .success(function(data, status, headers, config) {
                                return lazyDeferred.resolve(data);
                            }).
                            error(function(data, status, headers, config) {
                                return lazyDeferred.resolve(data);
                            });
                    });
                };

                $stateProvider
                    /*.state('tab',{
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
                    })*/


                    .state('goodDetail', {
                        url: '/goodDetail/:id',
                        templateProvider: function() { return lazyDeferred.promise; },
                        controller: 'GoodDetailCtrl',
                        resolve: {
                            load: function($templateCache, $ocLazyLoad, $q, $http) {
                                loadFunction($templateCache, $ocLazyLoad, $q, $http,'app.goodDetail',
                                    ['controllers/GoodDetailCtrl.js'],
                                    'views/goodDetail.html?ver='+wxVersion);
                            }
                        }
                    })
                    .state('goodsList', {
                        url: '/goodsList/:id',
                        templateProvider: function() { return lazyDeferred.promise; },
                        controller: 'GoodsListCtrl',
                        resolve: {
                            load: function($templateCache, $ocLazyLoad, $q, $http) {
                                loadFunction($templateCache, $ocLazyLoad, $q, $http,'app.goodsList',
                                    ['controllers/GoodsListCtrl.js'],
                                    'views/goodsList.html?ver='+wxVersion);
                            }
                        }
                    });

               // $urlRouterProvider.otherwise('/tab/home');
                $urlRouterProvider.otherwise('/goodsList/1');
            }])
        .run(function ($rootScope){
            $rootScope.unBindUserPhoneNum = '';
            $rootScope.picVer = '1.0.1';
        });
});
