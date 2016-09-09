angular.module('factory',[])
    .factory('HttpGet',['$http',function ($http) {

        return {
           back:function (url) {
               return $http.get(url);
           }
        }

    }])
    .factory('HttpPost',['$http',function ($http) {

        return {
            back:function (url,params) {
                return $http.post(url,params,{'Content-Type':'application/x-www-form-urlencoded'});
            }
        }

    }])
    .factory('HttpJsonp',['$http',function ($http) {

        return {
            back:function (url) {
                return $http.jsonp(url);
            }
        }

    }]);

