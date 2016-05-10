/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/angular-file-upload/angular-file-upload.d.ts"/>

var discussionInfo = angular.module("webim.discussioninfo", []);

discussionInfo.controller("discussioninfoController", ["$scope", "$state", "$stateParams", "mainDataServer", "mainServer", "RongIMSDKServer",
    function($scope: any, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService, mainDataServer: mainDataServer, mainServer: mainServer, RongIMSDKServer: RongIMSDKServer) {

        $scope.$on("$viewContentLoaded", function() {
            angular.element(document.getElementById("portrait")).css("background-color", webimutil.Helper.portraitColors[$scope.discussionInfo.id.charCodeAt(0) % webimutil.Helper.portraitColors.length]);
        });

        $scope.isEditable = true;

        function back() {
            if (conversationtype && conversationtype != "0") {
                $state.go("main.chat", { targetId: discussionid, targetType: conversationtype });
            } else {
                $state.go("main");
            }
        }
        $scope.back = function() {
            back();
        }

        var discussionid = $stateParams["discussionid"];
        var conversationtype = $stateParams["conversationtype"];

        $scope.discussionInfo = mainDataServer.contactsList.getDiscussionById(discussionid);

        if (!$scope.discussionInfo) {
            webimutil.Helper.alertMessage.error("您不在此讨论组中", 2);
            back();
        }

        if ($scope.discussionInfo.creater == mainDataServer.loginUser.id) {
            $scope.discussionInfo.isCreater = true;
        }

        $scope.quitDiscussion = function() {
            RongIMSDKServer.quitDiscussion(discussionid, {
              onSuccess: function () {
                mainDataServer.contactsList.removeDiscussion(discussionid);

                RongIMSDKServer.removeConversation(webimmodel.conversationType.Discussion, discussionid).then(function() {
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
              },
              onError: function () {
                  webimutil.Helper.alertMessage.error("退出失败", 2);
              }
            });
        }

        $scope.kickMember = function() {
            var membersid = <string[]>[];
            $scope.discussionInfo.memberList.filter(function(item: any) {
                if (item.isSelected) {
                    return membersid.push(item.id);
                }
            });
            RongIMSDKServer.removeMemberFromDiscussion(discussionid, membersid[0], {
              onSuccess: function () {
                // for (var i = 0, len = membersid.length; i < len; i++) {
                    mainDataServer.contactsList.removeDiscussionMember(discussionid, membersid[0]);
                // }
                $scope.isEditable = true;
              },
              onError: function () {
                // console.log(err);
                webimutil.Helper.alertMessage.error("删除失败", 2);
              }
            });
        }
        $scope.toChat = function() {
            $state.go("main.chat", { targetId: $scope.discussionInfo.id, targetType: webimmodel.conversationType.Discussion }, { location: "replace" });
        }
        $scope.addmember = function() {
            $state.go("main.discussionaddmember", { iscreate: "false", idorname: $scope.discussionInfo.id })
        }

        $scope.dismiss = function() {
            //解散群组
            // mainServer.discussion.dismissDiscussion(discussionid).success(function(rep) {
            //     if (rep.code == 200) {
            //         mainDataServer.contactsList.removeDiscussion(discussionid);
            //         RongIMSDKServer.removeConversation(webimmodel.conversationType.Discussion, discussionid).then(function() {
            //             setTimeout(function () {
            //                 $scope.$emit("conversationChange");
            //             }, 200);
            //             $state.go("main");
            //             webimutil.Helper.alertMessage.success("解散成功", 2);
            //         }, function() {
            //             setTimeout(function () {
            //                 $scope.$emit("conversationChange");
            //             }, 200);
            //             $state.go("main");
            //             webimutil.Helper.alertMessage.success("解散成功删除会话失败", 2);
            //         });
            //     }
            // }).error(function() {
            //
            // })
        }

    }]);

// discussionInfo.directive("member", ["$state", "mainDataServer", function($state: angular.ui.IStateService, mainDataServer: mainDataServer) {
//     return {
//         restrict: "E",
//         scope: { item: "=", isshow: "=" },
//         template: '<li class="chat_item discussionUser_item">' +
//         '<div class="select"  ng-show="isshow">' +
//         '<input type="checkbox" class="hide" ng-disabled="item.id==loginUserid" id="{{item.id}}" value="136" ng-model="item.isSelected" data-count="" name="">' +
//         '<label for="{{item.id}}"></label>' +
//         '</div>' +
//         '<div ng-click="showinfo()">' +
//         '<div class="photo">' +
//         '<img class="img" ng-show="item.imgSrc" ng-src="{{item.imgSrc||\'assets/img/barBg.png\'}}" alt="">' +
//         '<div class="portrait" ng-show="!item.imgSrc">{{item.firstchar}}</div>' +
//         '</div>' +
//         '<div class="info">' +
//         '<h3 class="nickname">' +
//         '<span class="nickname_text">{{item.name}}</span>' +
//         '</h3>' +
//         '</div>' +
//         '</div>' +
//         '</li>',
//         link: function(scope: any, ele: any, attr: any) {
//             angular.element(ele[0].getElementsByClassName("portrait")[0]).css("background-color", webimutil.Helper.portraitColors[scope.item.id.charCodeAt(0) % webimutil.Helper.portraitColors.length]);
//
//             scope.showinfo = function() {
//                 $state.go("main.friendinfo", { userid: scope.item.id, discussionid: scope.$parent.discussionInfo.id, targetid: scope.$parent.discussionInfo.id, conversationtype: $state.params["conversationtype"] });
//             }
//             scope.loginUserid = mainDataServer.loginUser.id;
//             scope.$watch("item.isSelected", function(newValue: boolean, oldValue: boolean) {
//                 if (newValue == oldValue) {
//                     return;
//                 }
//                 // if (newValue && scope.item.id == mainDataServer.loginUser.id) {
//                 //     webimutil.Helper.alertMessage.error("您不可以将自己删除", 2);
//                 //     scope.item.isSelected = false;
//                 // }
//             })
//         }
//     }
// }])
