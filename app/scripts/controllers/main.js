'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
.controller('MainCtrl', function ($scope, $http) {
  $scope.persons = {};
	$http({
		method: 'GET',
		url: '//localhost:8080/rest/personne/personnes'
	})
	.success(function (data, status, headers, config) {
		$scope.variableTest = data;
    $scope.persons = data;
	})
	.error(function (data, status, headers, config) {
		// erreur de récupération :(
	});
});
