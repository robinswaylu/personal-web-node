'use strict';

angular.module('icard')


  .factory('ClockinService', function ($http) {

    var postConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;'
      }
    };
    var paginationConfig = {
      params: {
        'page': 1
      }
    };

    return {
      get: function (lastPage, callback) {
        paginationConfig.params.page = lastPage;
        $http.get('/api/service/checkin', paginationConfig).success(function (data) {
          callback(data); // pagination data
        });
      },
      put: function (id, putData, callback) {
        $http.put('/api/service/checkin/' + id, putData, postConfig).success(function (data) {
          callback(data);
        });
      },
      post: function (postData, callback) {
        $http.post('/api/service/staff', postData, postConfig).success(function (data) {
          callback(data);
        });
      },
      delete: function (id, callback) {
        $http.delete('/api/service/staff/' + id, postConfig).success(function (data) {
          callback(data);
        });
      }
    };
  });