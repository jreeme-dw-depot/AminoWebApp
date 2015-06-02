angular.module('NodeWebBase', ['ngRoute', 'logout','aoSettings','ngCookies', 'ngDialog'])
	.controller('layoutController', ['$scope','$rootScope', function ($scope,$rootScope) {
		$rootScope.themes = [
			{
				name: 'Bootstrap',
                bootstrapCss: 'javascripts/vendor/bootstrap/dist/css',
                appCss:'/stylesheets/app/amino_base.css'
			},
			{
				name: 'Sandstone',
                bootstrapCss: 'stylesheets/themes/sandstone',
				appCss:'/stylesheets/app/amino_base.css'
			},
			{
				name: 'Slate',
				bootstrapCss: 'stylesheets/themes/slate',
				appCss:'/stylesheets/app/amino_slate.css'
			},
			{
				name: 'Darkly',
				bootstrapCss: 'stylesheets/themes/darkly',
				appCss:'/stylesheets/app/amino_slate.css'
			},
			{
				name: 'Cyborg',
				appCss:'/stylesheets/app/amino_slate.css',
				bootstrapCss: 'stylesheets/themes/cyborg'
			}
		];

		$rootScope.theme = $rootScope.themes[0];

		$rootScope.$on('changeTheme', function (event, themeName) {
			angular.forEach($rootScope.themes, function(theme){
				if(theme.name === themeName)
				{
					$rootScope.theme = theme;
					$rootScope.$emit('themeChanged');
				}
			});

		});
}]);
