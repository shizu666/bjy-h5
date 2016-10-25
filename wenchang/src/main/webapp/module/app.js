define(['angular'], function (angular) {
    var app = angular.module('app',['ngResource','ngRoute','ngSanitize','ionic','oc.lazyLoad','global']);
    app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
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


    });
    return app;
});
