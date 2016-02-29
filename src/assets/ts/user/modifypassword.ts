/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/angular-file-upload/angular-file-upload.d.ts"/>

var modifypassword = angular.module("webim.usermodifypassword", ["webim.main.server"]);

modifypassword.controller("modifypasswordController", ["$scope", "$state", "mainServer",
    function($scope: any, $state: angular.ui.IStateService, mainServer: mainServer) {
        $scope.user = {
            oldpassword: "",
            newpassword: "",
            repeatpassword: ""
        }

        $scope.validate = {
            oldpassworderror: false
        }
        $scope.$watch("user.oldpassword", function() {
            $scope.validate.oldpassworderror = false;
        })

        $scope.back = function() {
            $state.go("main.userinfo");
        }

        $scope.save = function() {
            if ($scope.formModifyPWD.$valid) {
                //修改密码
                mainServer.user.modefiyPassword($scope.user.newpassword, $scope.user.oldpassword).success(function(rep) {
                    if (rep.code == 200) {
                        $state.go("main.userinfo");
                        webimutil.Helper.alertMessage.success("修改成功", 2);
                    } else if (rep.code == 1000) {
                        $scope.validate.oldpassworderror = true;
                    }

                }).error(function(rep) {

                });
            }
        }

    }]);
