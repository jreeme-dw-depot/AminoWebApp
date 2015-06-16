angular.module('NodeWebBase', ['ngRoute', 'logout','aoSettings','ngCookies', 'ngDialog'])
	.controller('layoutController', ['$scope','themeChangedMsg','changeThemeMsg','themeService',
		function ($scope,themeChangedMsg,changeThemeMsg,themeService) {

		$scope.themeService = themeService;


	}]);
