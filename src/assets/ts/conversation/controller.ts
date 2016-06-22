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
        var pasteImgFile : any = null;
        if(webimutil.Helper.os.mac){
           if(webimutil.Helper.browser.safari){
             angular.element(document.getElementsByClassName("expressionWrap")).css("top", "-230px");
           }
        }
        else{
           angular.element(document.getElementsByClassName("expressionWrap")).css("top", "-250px");
           angular.element(document.getElementsByClassName("expressionWrap")).css("padding", "5px 18px");
        }

        $scope.messagesloading = true;
        $scope.showCutScreen = false;
        if (window.Electron){
          $scope.showCutScreen = true;
        }
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
        // setTimeout(function () {
        //     $scope.$emit("conversationChange");
        // }, 200);



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
                conversationServer.conversationMessageListShow = webimutil.Helper.cloneObject(currenthis);
                setTimeout(function() {
                    adjustScrollbars();
                    $scope.messagesloading = false;
                }, 0)
            }, function(err) {
                conversationServer.conversationMessageList = currenthis;
                conversationServer.conversationMessageListShow = webimutil.Helper.cloneObject(currenthis);
                setTimeout(function() {
                    adjustScrollbars();
                }, 0)
            });
            //以上是历史消息
        } else {
            //有未读消息
            conversationServer.conversationMessageList = currenthis;
            conversationServer.conversationMessageListShow = webimutil.Helper.cloneObject(currenthis);
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

        function addmessage(msg: webimmodel.Message) {
            var hislist = conversationServer.historyMessagesCache[msg.conversationType + "_" + msg.targetId] = conversationServer.historyMessagesCache[msg.conversationType + "_" + msg.targetId] || []
            if (hislist.length == 0) {
                hislist.push(new webimmodel.GetHistoryPanel());
                if (msg.sentTime.toLocaleDateString() != (new Date()).toLocaleDateString())
                    hislist.push(new webimmodel.TimePanl(msg.sentTime));
            }
            conversationServer.addHistoryMessages(msg.targetId, msg.conversationType, msg);
            if (msg.messageType == webimmodel.MessageType.ImageMessage) {
                setTimeout(function() {
                    $scope.$broadcast("msglistchange");
                }, 200)
            } else {
                $scope.$broadcast("msglistchange");
            }
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
                if(error.errorCode == 405){
                  var msg = webimutil.Helper.cloneObject(error.message);
                  msg.content = "您的消息已经发出，但被对方拒收";
                  msg.panelType = webimmodel.PanelType.InformationNotification;
                  addmessage(msg);
                }
            });

            var msgouter = packmysend(msg, webimmodel.MessageType.TextMessage);

            //添加消息到历史消息并清空发送消息框
            conversationServer.addHistoryMessages(targetId, targetType, webimmodel.Message.convertMsg(msgouter));
            $scope.$emit("msglistchange");
            // setTimeout(function () {
            //     $scope.$emit("conversationChange");
            // }, 200);
            $scope.mainData.conversation.updateConStatic(webimmodel.Message.convertMsg(msgouter), true, true);
            $scope.currentConversation.draftMsg = "";

            var obj = document.getElementById("message-content");
            webimutil.Helper.getFocus(obj);
        }

        $scope.back = function() {
            $state.go("main");
        }

        $scope.sendImg = function(){
            //TODO:获取base64
            // uploadBase64();
        }

        $scope.showPasteDiv = function(visible: boolean){
           var pic = <any>document.getElementsByClassName("previewPic")[0];
           var picBackground = <any>document.getElementsByClassName("previewPicLayer")[0];
           if(visible){
             pic.style.visibility = "visible";
             picBackground.style.visibility = "visible";
             pic.focus();
           }else{
             pic.style.visibility = "hidden";
             picBackground.style.visibility = "hidden";
             showLoading(false);
           }
        }

        $scope.uploadPasteImage = function(){
          var reg = new RegExp('^data:image/[^;]+;base64,');
          var picContent = <any>document.getElementsByClassName("picContent")[0];
          var base64Code = picContent.src;
          base64Code = base64Code.replace(reg,'');
          showLoading(true);
          uploadBase64(base64Code, pasteImgFile);
          // $scope.showPasteDiv(false);
        }

        $scope.takeScreenShot = function () {
          if (window.Electron) {
              if (typeof window.Electron.screenShot === "undefined"){
                 console.log('您的app版本过低,不支持截图功能')
                 return;
              }
              window.Electron.screenShot();
          }
        };

        $scope.$on('showPasteDiv', function(event: any, visible: boolean) {
          $scope.showPasteDiv(visible);
        });

        $scope.$on('uploadPasteImage', function(event: any) {
          $scope.uploadPasteImage();
        });

        function showLoading(visible: boolean){
           var loading = <any>document.getElementsByClassName("load-container")[0];
           if(visible){
             loading.style.visibility = "visible";
           }else{
             loading.style.visibility = "hidden";
           }
        }

        function getThumbnailAndSendImg(info: any, file: any) {
          webimutil.ImageHelper.getThumbnail(file, 60000, function(obj: any, data: any) {
              var reg = new RegExp('^data:image/[^;]+;base64,');
              var dataFinal = data.replace(reg, '');
              var im = RongIMLib.ImageMessage.obtain(dataFinal, IMGDOMAIN + info.key);
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

        $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 60);  //128



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
                                var reg = new RegExp('^data:image/[^;]+;base64,');
                                var dataFinal = data.replace(reg, '');
                                var im = RongIMLib.ImageMessage.obtain(dataFinal, IMGDOMAIN + info.key);
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

        function uploadBase64(strBase64: string, file: any) {
            var req = {
                method: 'POST',
                url: 'http://up.qiniu.com/putb64/-1',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Authorization': "UpToken " + conversationServer.uploadFileToken
                },
                withCredentials: false,
                data: strBase64
            };
            $http(req).success(function (res) {
                // callback && callback.onSuccess && callback.onSuccess();
                getThumbnailAndSendImg(res, file);
                showLoading(false);
                $scope.showPasteDiv(false);
            }).error(function (err) {
                console.log('uploadBase64', err);
                showLoading(false);
                webimutil.Helper.alertMessage.error("上传图片出错！", 2);
            });
        }

        window.upload_base64 = function () {
            var obj = document.getElementById("message-content");
            if(obj){
                obj.focus();
                document.execCommand("Paste");
                // window.Electron.currentWebContents ? window.Electron.currentWebContents.paste() : window.Electron.currentWindow && window.Electron.currentWindow.webContents.paste()

            }
        }

        setTimeout(function() {
            var obj = document.getElementById("message-content");
            webimutil.Helper.getFocus(obj);
        });

        function handlePaste(e: any) {
            var reg = new RegExp('^data:image/[^;]+;base64,');
            for (var i = 0 ; i < e.clipboardData.items.length ; i++) {
                var item = e.clipboardData.items[i];
                if (item.type.indexOf("image") > -1) {
                     var fr = new FileReader;
                     var data = item.getAsFile();
                     fr.onloadend = function() {
                        var base64Code = fr.result;
                        // base64Code = base64Code.replace(reg,'');
                        // uploadBase64(base64Code, data);
                        var picContent = <any>document.getElementsByClassName("picContent")[0];
                        picContent.src =  base64Code;
                        $scope.showPasteDiv(true);
                     };

                     fr.readAsDataURL(data);
                     pasteImgFile = data;
                } else {
                    console.log("Discardingimage paste data" + item.type);
                }
            }
        }
        document.getElementById("message-content").
            addEventListener("paste", handlePaste);
        // element.bind("paste", function(e: any) {
        //     handlePaste(e);
        // });

    }])
