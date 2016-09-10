'use strict';
require('./create-data-table.scss');
const angular = require('angular');
const sampleApp = angular.module('sampleApp');

sampleApp.component('createDataTable',{
  template: require('./create-data-table.html'),
  controller: 'CreateTableController',
  controllerAs:'creatteTableCtrl'
});

sampleApp.controller('CreateTableController', ['$scope', '$http', CreateTableController]);
function CreateTableController($scope, $http){
  $http.get('https://gist.githubusercontent.com/evanjacobs/c150c0375030dc4de65e9b95784dc894/raw/35c5f455b147703db3989df0cb90f5781c3b312f/usage_data.json')
  .then(function(response){
    response.data.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    response.data[0].date;
    $scope.list = response.data;
  });
  $scope.byMonth = function (){
    value: new Date(2016,8,24);
  };
}
