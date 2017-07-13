'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

  .controller('OpenWeatherCtrl',
    //['$scope','openWeatherMap','stormLocations','ISO3166',
    ['$scope','openWeatherMap','exampleLocations','stormLocations','ISO3166',
      function($scope,openWeatherMap,exampleLocations,stormLocations,ISO3166) {
      //function($scope,openWeatherMap,stormLocations,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    $scope.exampleLocations = exampleLocations;
    $scope.stormLocations = stormLocations;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: exampleLocations[ 0 ]
    });

    // Get forecast data for location as given in $scope.location
    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    // Set $scope.location and execute search on API
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
