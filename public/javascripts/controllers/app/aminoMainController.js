angular.module('NodeWebBase')
    .constant('userUrl', '/users/')
    .controller('aminoMainController', ['$scope','$rootScope','$http','$cookies','ngDialog','userUrl',function ($scope, $rootScope, $http, $cookies, ngDialog,userUrl) {
        $scope.scopeName = "aminoMainController";
        $scope.initWithSettings = function(res){

            $rootScope.username = res.username;
            $rootScope.fullname = res.fullname;

            $rootScope.$emit("setfullname");
            $rootScope.$emit("changeTheme", res.themeName);
        };

        $rootScope.isAppConfigured = function(){
          return $rootScope.fullname;
        };

        $rootScope.showErrorMessage = function(source, reason){
            ngDialog.openConfirm({
                template: '/views/genericError',
                controller: ['$scope', function ($scope) {
                    $scope.errorMessage = source + ":" + reason;
                    $scope.close = function () {
                        $scope.closeThisDialog(null);
                    }
                }]
            });
        };

        $rootScope.showError = function(jqxhr, testStatus, reason){
            ngDialog.openConfirm({
                template: '/views/genericError',
                controller: ['$scope', function ($scope) {
                    $scope.errorMessage = reason + ' ' + jqxhr.responseText;
                    $scope.close = function () {
                        $scope.closeThisDialog(null);
                    }
                }]
            });
        };
        $scope.sizes = [];
        $scope.setStyle = function(style)
        {
            $scope.$apply(function () {
                $scope.style = style;
                $scope.sizes.push(style.height);
            });


        };

        ///INIT
        var url = userUrl + $cookies.userId ;

        $http.get(url,{
            params: {
                access_token: $cookies.access_token
            }
        })
        .success($scope.initWithSettings)
        .error($rootScope.showError);
        ///END INIT

    }]);
