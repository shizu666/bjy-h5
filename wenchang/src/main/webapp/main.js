/*angular.module('app',['ionic','route','factory','global','ngResource'])
    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
        //$ionicConfigProvider.platform.ios.tabs.style('standard');
        //$ionicConfigProvider.platform.ios.tabs.position('bottom');
        //$ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');

        //$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        //$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        //$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
        //
        //$ionicConfigProvider.platform.ios.views.transition('ios');
        //$ionicConfigProvider.platform.android.views.transition('android');

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js


    });*/
/**
 * 入口文件
 * 2014-11-30 mon
 */
require.config({
    baseUrl: "",
    paths: {
        "angular" : "lib/angular.min",
        "angular-resource" : "lib/angular-resource.min",
        "angular-sanitize" : "lib/angular-sanitize.min",
        "angular-route" : "lib/angular-route.min",
        "ocLazyLoad":"lib/ocLazyLoad.require.min",
        "jquery":"lib/jquery-2.1.3.min",
        "Factory" : "factory/factory",
        //"Directive" : "directives/playtourDirective",
        "Route" : "route/route",
        "App" : "module/app"
    },
    waitSeconds: 0,
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-resource':{
            deps: ["angular"],
            exports: 'angular-resource'
        },
        'angular-route':{
            deps: ['angular'],   //依赖什么模块
            exports: 'angular-route'
        },
        'angular-sanitize':{
            deps: ['angular'],   //依赖什么模块
            exports: 'angular-sanitize'
        },
        'ocLazyLoad': ['angular'],
        'App':['ocLazyLoad'],
    }
});

require(['angular','angular-resource','angular-sanitize','angular-route',
        'ocLazyLoad','jquery','Factory','Route','App'],
    function (angular){
        angular.bootstrap(document,["app"]);
    });

