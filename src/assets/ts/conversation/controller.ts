/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/angular-file-upload/angular-file-upload.d.ts"/>
/// <reference path="../../../../vendor/qiniu/qiniu.d.ts"/>

var conversationCtr = angular.module("webim.conversation.controller", ["webim.main.server", "webim.conversation.server"]);
var IMGDOMAIN = "http://7xogjk.com1.z0.glb.clouddn.com/";
function adjustScrollbars() {
    var ele = document.getElementById("Messages");
    if (!ele)
        return;
    ele.style.height = document.documentElement.clientHeight -
        parseFloat(getComputedStyle(document.querySelector('.inputBox')).height) -
        parseFloat(getComputedStyle(document.querySelector('.box_hd')).height) + "px";

    ele.scrollTop = ele.scrollHeight;
}

conversationCtr.controller("conversationController", ["$scope", "$state", "mainDataServer", "conversationServer", "mainServer", "RongIMSDKServer", "$http",
    function($scope: any, $state: angular.ui.IStateService, mainDataServer: mainDataServer, conversationServer: conversationServer, mainServer: mainServer, RongIMSDKServer: RongIMSDKServer, $http: angular.IHttpService) {

        var targetId = $state.params["targetId"];
        var targetType = Number($state.params["targetType"]);

        //判断是否有此会话没有则创建一个。清除未读消息
        var conversation = {};
        $scope.messagesloading = true;
        RongIMSDKServer.getConversation(targetType, targetId).then(function(data) {
            if (!data) {
                var conv = mainDataServer.conversation.createConversation(targetType, targetId);
                mainDataServer.conversation.currentConversation = conv;
                $scope.currentConversation = conv;
            } else {
                mainDataServer.conversation.currentConversation = mainDataServer.conversation.getConversation(targetType, targetId);
                $scope.currentConversation = mainDataServer.conversation.currentConversation;
            }
            $scope.currentConversation.draftMsg = RongIMSDKServer.getDraft(targetType, targetId);

        }, function() {

        });

        // RongIMSDKServer.clearMessagesUnreadStatus(targetType, targetId);
        RongIMSDKServer.clearUnreadCount(targetType, targetId);
        setTimeout(function () {
            $scope.$emit("conversationChange");
        }, 200);



        //初次会话消息加载有问题
        conversationServer.historyMessagesCache[targetType + "_" + targetId] = conversationServer.historyMessagesCache[targetType + "_" + targetId] || [];

        $scope.conversationServer = conversationServer;

        var currenthis = conversationServer.historyMessagesCache[targetType + "_" + targetId];
        if (currenthis.length == 0) {
            conversationServer.getHistory(targetId, targetType, 3).then(function(has) {
                if (has) {
                    conversationServer.unshiftHistoryMessages(targetId, targetType, new webimmodel.GetMoreMessagePanel());
                }
                conversationServer.conversationMessageList = currenthis;
                setTimeout(function() {
                    adjustScrollbars();
                    $scope.messagesloading = false;
                }, 0)
            }, function(err) {
                conversationServer.conversationMessageList = currenthis;
                setTimeout(function() {
                    adjustScrollbars();
                }, 0)
            });
            //以上是历史消息
        } else {
            //有未读消息
            conversationServer.conversationMessageList = currenthis;
            setTimeout(function() {
                adjustScrollbars();
                $scope.messagesloading = false;
            }, 0)
        }

        $scope.tofriendinfo = function() {
            if ($scope.currentConversation.targetType == webimmodel.conversationType.Private) {
                $state.go("main.friendinfo", { userid: targetId, groupid: "0", targetid: targetId, conversationtype: targetType });
            } else {
                $state.go("main.groupinfo", { groupid: targetId, conversationtype: targetType });
            }
        }

        $scope.touserinfo = function(userid: string) {
            $state.go("main.friendinfo", { userid: userid, groupid: "0", targetid: targetId, conversationtype: targetType });
        }

        function packmysend(msg: any, msgType: string) {
            var msgouter = new RongIMLib.Message();
            msgouter.content = msg;
            msgouter.conversationType = targetType;
            msgouter.targetId = targetId;
            msgouter.sentTime = (new Date()).getTime() - RongIMLib.RongIMClient.getInstance().getDeltaTime();
            msgouter.messageDirection = RongIMLib.MessageDirection.SEND;
            msgouter.messageType = msgType;
            msgouter.senderUserId = mainDataServer.loginUser.id;
            return msgouter;
        }

        $scope.sendBtn = function() {
            $scope.showemoji = false;

            if (!targetType && !targetId) {
                webimutil.Helper.alertMessage.error("请选择一个会话对象", 2);
                return;
            }

            var con = RongIMLib.RongIMEmoji.symbolToEmoji($scope.currentConversation.draftMsg);

            if (con == "") {
                return;
            }

            //发送消息
            var msg = RongIMLib.TextMessage.obtain(con);

            RongIMSDKServer.sendMessage(targetType, targetId, msg).then(function() {

            }, function(error) {
                console.log(error);
            });

            var msgouter = packmysend(msg, webimmodel.MessageType.TextMessage);

            //添加消息到历史消息并清空发送消息框
            conversationServer.addHistoryMessages(targetId, targetType, webimmodel.Message.convertMsg(msgouter));
            setTimeout(function () {
                $scope.$emit("msglistchange");
                $scope.$emit("conversationChange");
            }, 200);
            $scope.currentConversation.draftMsg = "";

            var obj = document.getElementById("message-content");
            webimutil.Helper.getFocus(obj);
        }

        $scope.back = function() {
            $state.go("main");
        }

        $scope.$watch("currentConversation.draftMsg", function(newVal: string, oldVal: string) {
            if (newVal === oldVal)
                return;

            RongIMSDKServer.setDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal)
            mainDataServer.conversation.setDraft($scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal);
        })



        $scope.getHistoryMessage = function() {
            conversationServer.historyMessagesCache[targetType + "_" + targetId] = [];
            conversationServer.getHistory(targetId, targetType, 20).then(function(has) {
                conversationServer.conversationMessageList = conversationServer.historyMessagesCache[targetType + "_" + targetId];
                if (has) {
                    conversationServer.unshiftHistoryMessages(targetId, targetType, new webimmodel.GetMoreMessagePanel());
                }
                // setTimeout(function() {
                //     adjustScrollbars();
                // }, 0)
            });
        }

        $scope.getMoreMessage = function() {
            conversationServer.historyMessagesCache[targetType + "_" + targetId].shift();
            conversationServer.getHistory(targetId, targetType, 20).then(function(has) {
                if (has) {
                    conversationServer.unshiftHistoryMessages(targetId, targetType, new webimmodel.GetMoreMessagePanel());
                }
            });
        }

        $scope.$on("msglistchange", function() {
            setTimeout(function() {
                adjustScrollbars();
            }, 0)
        });

        //显示表情
        $scope.showemoji = false;
        document.addEventListener("click", function(e: any) {
            if ($scope.showemoji && e.target.className != "iconfont-smile") {
                $scope.$apply(function() {
                    $scope.showemoji = false;
                });
            }
        });
        // $scope.emojiList = RongIMLib.Expression.getAllExpression(60, 0);

        $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 60);



        // if (!conversationServer.uploadFileToken) {
        //     mainServer.user.getImageToken().success(function(rep) {
        //         //qiniu上传
        //         conversationServer.uploadFileToken = rep.result.token;
        //         uploadFileInit();
        //     }).error(function() {
        //         webimutil.Helper.alertMessage.error("图片上传初始化失败", 2);
        //     });
        // } else {
        //     uploadFileInit();
        // }

        conversationServer.initUpload = function(){
          mainServer.user.getImageToken().success(function(rep) {
              //qiniu上传
              conversationServer.uploadFileToken = rep.result.token;
              uploadFileInit();
          }).error(function() {
              webimutil.Helper.alertMessage.error("图片上传初始化失败", 2);
          });
        }
        conversationServer.initUpload();
        $scope.uploadStatus = {
            show: false,
            progress: 0,
            cancle: function() {
                qiniuuploader.stop && qiniuuploader.stop();
                $scope.uploadStatus.show = false;
                $scope.uploadStatus.progress = 0;
                qiniuuploader.files.pop();
            }
        }
        var qiniuuploader: any;
        function uploadFileInit() {
            qiniuuploader = Qiniu.uploader({
                // runtimes: 'html5,flash,html4',
                runtimes: 'html5,html4',
                browse_button: 'upload-file',
                container: 'MessageForm',
                drop_element: 'Message',
                max_file_size: '100mb',
                // flash_swf_url: 'js/plupload/Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                // uptoken_url: "http://webim.demo.rong.io/getUploadToken",
                uptoken: conversationServer.uploadFileToken,
                domain: IMGDOMAIN,
                get_new_uptoken: false,
                unique_names: true,
                filters: {
                    mime_types: [{ title: "Image files", extensions: "jpg,gif,png" }],
                    prevent_duplicates: false
                },
                multi_selection: false,
                // auto_start: true,
                init: {
                    'FilesAdded': function(up: any, files: any) {

                        if ($scope.uploadStatus.show) {
                            webimutil.Helper.alertMessage.error("正在上传请稍后", 2);
                            // up.removeFile(file);
                            for (var i = 0, len = files.length; i < len; i++) {
                                up.removeFile(files[0]);
                            }
                        } else {
                            qiniuuploader.start();
                        }
                    },
                    'BeforeUpload': function(up: any, file: any) {
                        $scope.uploadStatus.show = true;
                        $scope.$apply();
                    },
                    'UploadProgress': function(up: any, file: any) {
                        console.log(file.name + file.percent);
                        $scope.uploadStatus.progress = file.percent + "%";
                        setTimeout(function() {
                            $scope.$apply();
                        })
                    },
                    'UploadComplete': function() {
                    },
                    'FileUploaded': function(up: any, file: any, info: any) {
                        $scope.uploadStatus.show = false;
                        $scope.uploadStatus.progress = 0;
                        $scope.$apply();
                        !function(info: any) {
                            var info = JSON.parse(info);
                            webimutil.ImageHelper.getThumbnail(file.getNative(), 60000, function(obj: any, data: any) {
                                var im = RongIMLib.ImageMessage.obtain(data, IMGDOMAIN + info.key);

                                var content = packmysend(im, webimmodel.MessageType.ImageMessage);
                                RongIMSDKServer.sendMessage($scope.currentConversation.targetType, $scope.currentConversation.targetId, im).then(function() {
                                  setTimeout(function () {
                                      $scope.$emit("msglistchange");
                                      $scope.$emit("conversationChange");
                                  }, 200);
                                }, function() {
                                  setTimeout(function () {
                                      $scope.$emit("msglistchange");
                                      $scope.$emit("conversationChange");
                                  }, 200);
                                })
                                conversationServer.addHistoryMessages($scope.currentConversation.targetId, $scope.currentConversation.targetType,
                                    webimmodel.Message.convertMsg(content));
                                setTimeout(function() {
                                    $scope.$emit("msglistchange");
                                    $scope.$emit("conversationChange");
                                }, 200);
                            })
                        } (info)

                    },
                    'Error': function(up: any, err: any, errTip: any) {
                        $scope.uploadStatus.show = false;
                        webimutil.Helper.alertMessage.error("上传图片出错！", 2);

                    }
                    // ,
                    // 'Key': function(up: any, file: any) {
                    //     var key = "";
                    //     // do something with key
                    //     return key
                    // }
                }
            });
        }

        function uploadBase64(file: string) {
            var pic = "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";
            var req = {
                method: 'POST',
                url: 'http://up.qiniu.com/putb64/-1',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Authorization': "UpToken " + conversationServer.uploadFileToken
                },
                withCredentials: false,
                data: file
            };
            $http(req).success(function (res) {
                // callback && callback.onSuccess && callback.onSuccess();
                console.log('uploadBase64', res);
            }).error(function () {
            });
        }

        setTimeout(function() {
            var obj = document.getElementById("message-content");
            webimutil.Helper.getFocus(obj);
        });

    }])
