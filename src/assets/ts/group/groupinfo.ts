/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/angular-file-upload/angular-file-upload.d.ts"/>

var groupInfo = angular.module("webim.goupinfo", []);

groupInfo.controller("groupinfoController", ["$scope", "$state", "$stateParams", "mainDataServer", "mainServer", "RongIMSDKServer",
    function($scope: any, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService, mainDataServer: mainDataServer, mainServer: mainServer, RongIMSDKServer: RongIMSDKServer) {

        $scope.$on("$viewContentLoaded", function() {
            angular.element(document.getElementById("portrait")).css("background-color", webimutil.Helper.portraitColors[$scope.groupInfo.id.charCodeAt(0) % webimutil.Helper.portraitColors.length]);
        });

        $scope.isEditable = false;

        function back() {
            if (conversationtype && conversationtype != "0") {
                $state.go("main.chat", { targetId: groupid, targetType: conversationtype });
            } else {
                $state.go("main");
            }
        }
        $scope.back = function() {
            back();
        }

        var groupid = $stateParams["groupid"];
        var conversationtype = $stateParams["conversationtype"];

        $scope.groupInfo = mainDataServer.contactsList.getGroupById(groupid);

        if (!$scope.groupInfo) {
            webimutil.Helper.alertMessage.error("您不在此群组中", 2);
            back();
        }

        if ($scope.groupInfo.creater == mainDataServer.loginUser.id) {
            $scope.groupInfo.isCreater = true;
        }

        $scope.quitGroup = function() {
            mainServer.group.quit(groupid).success(function(rep) {
                if (rep.code == 200) {
                    mainDataServer.contactsList.removeGroup(groupid);

                    RongIMSDKServer.removeConversation(webimmodel.conversationType.Group, groupid).then(function() {
                        setTimeout(function () {
                            $scope.$emit("conversationChange");
                        }, 200);
                        $state.go("main");
                        webimutil.Helper.alertMessage.success("退出成功", 2);
                    }, function() {
                        setTimeout(function () {
                            $scope.$emit("conversationChange");
                        }, 200);
                        $state.go("main");
                        webimutil.Helper.alertMessage.success("退出成功删除会话失败", 2);
                    });
                }
            }).error(function() {
                webimutil.Helper.alertMessage.error("退出失败", 2);
            });
        }
        $scope.kickMember = function() {
            var membersid = <string[]>[];
            $scope.groupInfo.memberList.filter(function(item: any) {
                if (item.isSelected) {
                    return membersid.push(item.id);
                }
            });
            mainServer.group.kickMember(groupid, membersid).success(function(rep) {
                if (rep.code == 200) {
                    for (var i = 0, len = membersid.length; i < len; i++) {
                        mainDataServer.contactsList.removeGroupMember(groupid, membersid[i]);
                    }
                    $scope.isEditable = false;
                }
            }).error(function(err) {
                console.log(err);
                webimutil.Helper.alertMessage.error("删除失败", 2);
            })
        }
        $scope.toChat = function() {
            $state.go("main.chat", { targetId: $scope.groupInfo.id, targetType: webimmodel.conversationType.Group }, { location: "replace" });
        }
        $scope.addmember = function() {
            $state.go("main.groupaddmember", { iscreate: "false", idorname: $scope.groupInfo.id })
        }

        $scope.dismiss = function() {
            //解散群组
            mainServer.group.dismissGroup(groupid).success(function(rep) {
                if (rep.code == 200) {
                    mainDataServer.contactsList.removeGroup(groupid);
                    RongIMSDKServer.removeConversation(webimmodel.conversationType.Group, groupid).then(function() {
                        setTimeout(function () {
                            $scope.$emit("conversationChange");
                        }, 200);
                        $state.go("main");
                        webimutil.Helper.alertMessage.success("解散成功", 2);
                    }, function() {
                        setTimeout(function () {
                            $scope.$emit("conversationChange");
                        }, 200);
                        $state.go("main");
                        webimutil.Helper.alertMessage.success("解散成功删除会话失败", 2);
                    });
                }
            }).error(function() {

            })
        }

    }]);

groupInfo.directive("member", ["$state", "mainDataServer", function($state: angular.ui.IStateService, mainDataServer: mainDataServer) {
    return {
        restrict: "E",
        scope: { item: "=", isshow: "=" },
        template: '<li class="chat_item groupUser_item">' +
        '<div class="select"  ng-show="isshow">' +
        '<input type="checkbox" class="hide" ng-disabled="item.id==loginUserid" id="{{item.id}}" value="136" ng-model="item.isSelected" data-count="" name="">' +
        '<label for="{{item.id}}"></label>' +
        '</div>' +
        '<div ng-click="showinfo()">' +
        '<div class="photo">' +
        '<img class="img" ng-show="item.imgSrc" ng-src="{{item.imgSrc||\'assets/img/barBg.png\'}}" alt="">' +
        '<div class="portrait" ng-show="!item.imgSrc">{{item.firstchar}}</div>' +
        '</div>' +
        '<div class="info">' +
        '<h3 class="nickname">' +
        '<span class="nickname_text">{{item.name}}</span>' +
        '</h3>' +
        '</div>' +
        '</div>' +
        '</li>',
        link: function(scope: any, ele: any, attr: any) {
            angular.element(ele[0].getElementsByClassName("portrait")[0]).css("background-color", webimutil.Helper.portraitColors[scope.item.id.charCodeAt(0) % webimutil.Helper.portraitColors.length]);

            scope.showinfo = function() {
                $state.go("main.friendinfo", { userid: scope.item.id, groupid: scope.$parent.groupInfo.id, targetid: scope.$parent.groupInfo.id, conversationtype: $state.params["conversationtype"] });
            }
            scope.loginUserid = mainDataServer.loginUser.id;
            scope.$watch("item.isSelected", function(newValue: boolean, oldValue: boolean) {
                if (newValue == oldValue) {
                    return;
                }
                // if (newValue && scope.item.id == mainDataServer.loginUser.id) {
                //     webimutil.Helper.alertMessage.error("您不可以将自己删除", 2);
                //     scope.item.isSelected = false;
                // }
            })
        }
    }
}])
