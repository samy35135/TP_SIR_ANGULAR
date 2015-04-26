'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AjoutCtrl
 * @description
 * # AjoutCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
.controller('AjoutCtrl', function ($scope, $http) {
    $scope.reponse = '';
	$scope.update = function(person) {
    	$scope.reponse = 'Envoie des données';

		$http.post('//localhost:8080/rest/personne/insererpersonne', person).
			success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				$scope.reponse = 'la personne est enregistré, vous devriez allez voir la liste pour voir par vous-même';
			}).
			error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
   				$scope.reponse = 'Une erreur est apparue, avez-vous bien le rest qui tourne sur localhost:8080 ? Si non, allez voir dans le code pour changer l\'url';

			});
	};


});
