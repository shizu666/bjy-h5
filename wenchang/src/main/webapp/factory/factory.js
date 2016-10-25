angular.module('factory',[])


    .factory('HomeMessage',['$resource',function ($resource){
        return $resource('HomeMessage');
    }]);

