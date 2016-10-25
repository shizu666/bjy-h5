/*angular.module('factory',[])


    .factory('HomeMessage',['$resource',function ($resource){
        return $resource('HomeMessage');
    }]);*/


define(['App'], function (app) {
    app
        .factory('HomeMessage',['$resource',function ($resource){
            return $resource('HomeMessage');
        }]);


});
