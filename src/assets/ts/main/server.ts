/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../model/webimModel.ts"/>
/// <reference path="../../lib/RongIMlib.d.ts"/>


var mainServer = angular.module("webim.main.server", []);

mainServer.factory("mainServer", ["$http", "$q", "appconfig", function($http: angular.IHttpService, $q: angular.IQService, appconfig: any) {

    var serverBaseUrl = appconfig.getBaseUrl();
    var mainServer = {
        user: {
            sendCode: function(phone: string, region: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/send_code",
                    data: {
                        phone: phone,
                        region: region
                    }
                })
            },
            verifyCode: function(phone: string, region: string, code: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/verify_code",
                    data: {
                        phone: phone,
                        region: region,
                        code: code
                    }
                })
            },
            checkUsernameAvailable: function(userName: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/check_username_available",
                    data: {
                        username: userName
                    }
                })
            },
            checkPhoneAvailable: function(phone: string, region: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/check_phone_available",
                    data: {
                        phone: phone,
                        region: region
                    }
                })
            },
            signup: function(nickname: string, password: string, token: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/register",
                    data: {
                        nickname: nickname,
                        password: password,
                        verification_token: token
                    }
                })
            },
            signin: function(phone: string, region: string, password: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/login",
                    data: {
                        phone: phone,
                        region: region,
                        password: password
                    }
                })
            },
            logout: function() {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user//logout"
                })
            },
            getInfo: function(id: string) {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/" + id
                })
            },
            setNickName: function(nickname: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/set_nickname",
                    data: {
                        nickname: nickname
                    }
                })
            },
            getUserByPhone: function(region: string, phone: string) {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/find/" + region + "/" + phone
                });
            },
            resetPassword: function(password: string, token: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/reset_password",
                    data: {
                        password: password,
                        verification_token: token
                    }
                })
            },
            modefiyPassword: function(newPassword: string, oldPassword: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/change_password",
                    data: {
                        newPassword: newPassword,
                        oldPassword: oldPassword
                    }
                })
            },
            getToken: function() {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/get_token"
                })
            },
            getBlackList: function() {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/blacklist"
                });
            },
            addToBlackList: function(userId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/add_to_blacklist",
                    data: {
                        friendId: userId
                    }
                })
            },
            removeFromBlackList: function(userId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/user/remove_from_blacklist",
                    data: {
                        friendId: userId
                    }
                })
            },
            sync: function(version: number) {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/sync",
                    data: {
                        version: version
                    }
                });
            },
            getMyGroups: function() {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/groups"
                });
            },
            getImageToken: function() {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/user/get_image_token"
                });
            }
        },
        friend: {
            invite: function(friendId: string, message: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/friendship/invite",
                    data: {
                        friendId: friendId,
                        message: message
                    }
                });
            },
            getAll: function() {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/friendship/all",
                });
            },
            agree: function(friendId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/friendship/agree",
                    data: {
                        friendId: friendId
                    }
                })
            },
            ignore: function(friendId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/friendship/ignore",
                    data: {
                        friendId: friendId
                    }
                })
            },
            delete: function(friendId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/friendship/delete",
                    data: {
                        friendId: friendId
                    }
                })
            },
            getProfile: function(id: string) {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/friendship/" + id + "/profile",
                });
            },
            setDisplayName: function(friendId: string, displayName: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/friendship/set_display_name",
                    data: {
                        friendId: friendId,
                        displayName: displayName
                    }
                })
            }
        },
        group: {
            create: function(name: string, memberIds: string[]) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/group/create",
                    data: {
                        name: name,
                        memberIds: memberIds
                    }
                })
            },
            rename: function(groupId: string, name: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/group/rename",
                    data: {
                        name: name,
                        groupId: groupId
                    }
                })
            },
            getById: function(id: string) {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/group/" + id
                })
            },
            getGroupMember: function(id: string) {
                return $http({
                    method: "get",
                    url: serverBaseUrl + "/group/" + id + "/members"
                })
            },
            addMember: function(groupId: string, memberIds: string[]) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/group/add",
                    data: {
                        groupId: groupId,
                        memberIds: memberIds
                    }
                })
            },
            kickMember: function(groupId: string, memberIds: string[]) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/group/kick",
                    data: {
                        groupId: groupId,
                        memberIds: memberIds
                    }
                })
            },
            dismissGroup: function(groupId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/group/dismiss",
                    data: {
                        groupId: groupId
                    }
                })
            },
            quit: function(groupId: string) {
                return $http({
                    method: "POST",
                    url: serverBaseUrl + "/group/quit",
                    data: {
                        groupId: groupId
                    }
                })
            }
        }
    }
    return mainServer;
}])

mainServer.factory("mainDataServer", ["$q", "RongIMSDKServer", "mainServer", function($q: angular.IQService, RongIMSDKServer: RongIMSDKServer, mainServer: mainServer) {

    var mainDataServer = <mainDataServer>{};

    mainDataServer.loginUser = <webimmodel.UserInfo>{};
    mainDataServer.conversation = {
        totalUnreadCount: 0,
        conversations: <webimmodel.Conversation[]>[],
        currentConversation: <webimmodel.Conversation>{},
        updateConversations: function() {
            //更新未读总数
            var defer = $q.defer();
            var allUnreadCount = 0;
            var haveCUSTOMER_SERVICE = false;
            RongIMSDKServer.getTotalUnreadCount().then(function(data) {
                allUnreadCount = data;
            });

            RongIMSDKServer.getConversationList().then(function(list) {
                mainDataServer.conversation.conversations = [];
                for (var i = 0, length = list.length; i < length; i++) {
                    var addgroup = false;
                    var conversationitem = webimmodel.Conversation.convertToWebIM(list[i]);

                    switch (list[i].conversationType) {
                        case RongIMLib.ConversationType.CHATROOM:
                            conversationitem.title = "聊天室" + list[i].targetId;
                            break;
                        // case RongIMLib.ConversationType.CUSTOMER_SERVICE:
                        //     conversationitem.title = "客服";
                        //     break;
                        case RongIMLib.ConversationType.DISCUSSION:
                            conversationitem.title = "讨论组" + list[i].targetId;
                            break;
                        case RongIMLib.ConversationType.GROUP:
                            let group = mainDataServer.contactsList.getGroupById(list[i].targetId);
                            if (!group) {
                                addgroup = true;
                            } else {
                                //TODO:添加最后一条消息的发送人
                                if (conversationitem.lastMsg && list[i].latestMessage.objectName != "RC:GrpNtf") {
                                    var member = mainDataServer.contactsList.getGroupMember(group.id, list[i].latestMessage.senderUserId);
                                    if (member) {
                                        conversationitem.lastMsg = member.name + "：" + conversationitem.lastMsg;
                                    } else {
                                        (function(id: string, conv: webimmodel.Conversation) {
                                            mainServer.user.getInfo(id).success(function(user) {
                                                conv.lastMsg = user.result.nickname + "：" + conversationitem.lastMsg;
                                            });
                                        } (list[i].latestMessage.senderUserId, conversationitem))
                                    }
                                }
                            }
                            list[i].conversationTitle = group ? group.name : "未知群组";
                            conversationitem.title = group ? group.name : "未知群组";
                            conversationitem.firstchar = group ? group.firstchar : "";
                            conversationitem.imgSrc = group ? group.imgSrc : "";
                            break;
                        case RongIMLib.ConversationType.PRIVATE:
                            if (list[i].latestMessage.messageType == webimmodel.MessageType.ContactNotificationMessage) {
                                RongIMSDKServer.removeConversation(RongIMLib.ConversationType.PRIVATE, list[i].targetId).then(function() {

                                });
                                continue;
                            }
                            var friendinfo = mainDataServer.contactsList.getFriendById(list[i].targetId || list[i].senderUserId)
                            if (friendinfo) {
                                list[i].conversationTitle = friendinfo.displayName || friendinfo.name;
                                conversationitem.title = friendinfo.displayName || friendinfo.name;
                                conversationitem.firstchar = friendinfo.firstchar;
                                conversationitem.imgSrc = friendinfo.imgSrc;
                            } else if (list[i].targetId) {
                                (function(id: string, conv: webimmodel.Conversation) {
                                    mainServer.user.getInfo(id).success(function(rep) {
                                        // list[i].conversationTitle = rep.result.nickname;
                                        conv.title = rep.result.nickname + "(非好友)";
                                        conv.firstchar = webimutil.ChineseCharacter.getPortraitChar(rep.result.nickname);
                                    }).error(function() {
                                        conv.title = "非系统用户";
                                    });
                                })(list[i].targetId || list[i].senderUserId, conversationitem)
                            }

                            break;
                        case RongIMLib.ConversationType.SYSTEM:
                            list[i].conversationTitle = "系统消息";
                            break;
                        case RongIMLib.ConversationType.CUSTOMER_SERVICE:
                            if(list[i].unreadMessageCount){
                                haveCUSTOMER_SERVICE = true;
                                mainDataServer.conversation.totalUnreadCount = allUnreadCount - list[i].unreadMessageCount;
                            }
                            break;
                    }

                    //新创建的群组无通知，再此若没有获取到群组信息则去服务器拉取
                    if (addgroup) {
                        (function(item: webimmodel.Conversation) {
                            mainServer.group.getById(item.targetId).success(function(rep) {
                                item.title = rep.result.name;
                                item.firstchar = webimutil.ChineseCharacter.getPortraitChar(rep.result.name);

                                var group = new webimmodel.Group({
                                    id: rep.result.id,
                                    name: rep.result.name,
                                    imgSrc: rep.result.portraitUri,
                                    upperlimit: 500,
                                    fact: 1,
                                    creater: rep.result.creatorId
                                });
                                mainDataServer.contactsList.addGroup(group);
                                //获取群成员
                                mainServer.group.getGroupMember(group.id).success(function(rep) {
                                    var members = rep.result;
                                    for (var j = 0, len = members.length; j < len; j++) {
                                        var member = new webimmodel.Member({
                                            id: members[j].user.id,
                                            name: members[j].displayName || members[j].user.nickname,
                                            imgSrc: members[j].user.portraitUri,
                                            role: members[j].role
                                        });
                                        mainDataServer.contactsList.addGroupMember(group.id, member);
                                    }
                                });

                                RongIMSDKServer.getConversation(RongIMLib.ConversationType.GROUP, group.id).then(function() {

                                })
                            }).error(function(err) {
                                RongIMSDKServer.removeConversation(RongIMLib.ConversationType.GROUP, item.targetId).then(function() {

                                });
                            });
                        })(conversationitem);
                    }
                    if(list[i].conversationType == RongIMLib.ConversationType.CUSTOMER_SERVICE) continue;
                    mainDataServer.conversation.conversations.push(conversationitem);
                }
                if(!haveCUSTOMER_SERVICE){
                   mainDataServer.conversation.totalUnreadCount = allUnreadCount;
                }
                defer.resolve();
            }, function() {
                defer.reject();
            })

            return defer.promise;

        },
        createConversation: function(targetType: number, targetId: string) {
            var item = new webimmodel.Conversation();
            item.targetId = targetId;
            item.targetType = targetType;

            switch (targetType) {
                case webimmodel.conversationType.Private:
                    var friendinfo = mainDataServer.contactsList.getFriendById(targetId)
                    if (friendinfo) {
                        item.title = friendinfo.displayName || friendinfo.name;
                        item.firstchar = friendinfo.firstchar;
                    } else {
                        mainServer.user.getInfo(targetId).success(function(rep) {
                            item.title = rep.result.nickname + "(非好友)";
                            item.firstchar = webimutil.ChineseCharacter.getPortraitChar(rep.result.nickname);
                        }).error(function() {

                        });
                    }
                    break;
                case webimmodel.conversationType.Group:
                    var groupinfo = mainDataServer.contactsList.getGroupById(targetId);
                    if (groupinfo) {
                        item.title = groupinfo.name;
                        item.firstchar = groupinfo.firstchar;
                    } else {
                        mainServer.group.getById(targetId).success(function(rep) {
                            item.title = rep.result.name;
                            item.firstchar = webimutil.ChineseCharacter.getPortraitChar(rep.result.name);
                        }).error(function() {

                        });
                    }
                    break;
                default:
                    console.log("暂不支持创建此类型会话");
            }

            return item;
        },
        getConversation: function(type: number, id: string) {
            for (var i = 0, len = mainDataServer.conversation.conversations.length; i < len; i++) {
                if (mainDataServer.conversation.conversations[i].targetType == type && mainDataServer.conversation.conversations[i].targetId == id) {
                    return mainDataServer.conversation.conversations[i];
                }
            }
            return null;
        },
        setDraft: function(type: string, id: string, msg: string) {
            for (var i = 0, len = mainDataServer.conversation.conversations.length; i < len; i++) {
                if (mainDataServer.conversation.conversations[i].targetType == type && mainDataServer.conversation.conversations[i].targetId == id) {
                    mainDataServer.conversation.conversations[i].draftMsg = msg;
                    return true;
                }
            }
            return false;
        },
        clearMessagesUnreadStatus: function(type: string, targetid: string) {
            for (var i = 0, len = mainDataServer.conversation.conversations.length; i < len; i++) {
                if (mainDataServer.conversation.conversations[i].targetType == type && mainDataServer.conversation.conversations[i].targetId == targetid) {
                    mainDataServer.conversation.conversations[i].unReadNum = 0;
                    return true;
                }
            }
            return false;
        }
    };

    mainDataServer.blackList = {
        list: [],
        add: function(item: webimmodel.Friend) {
            item.firstchar = webimutil.ChineseCharacter.getPortraitChar(item.name);
            this.list.push(item);
        },
        remove: function(id: string) {
            for (var i = 0, len = this.list.length; i < len; i++) {
                if (this.list[i].id == id) {
                    this.list.splice(i, 1);
                    return true;
                }
            }
            return false;
        },
        getById: function(id: string) {
            for (var i = 0, len = this.list.length; i < len; i++) {
                if (this.list[i].id == id) {
                    return this.list[i];
                }
            }
            return null;
        }
    }

    var contactsList = {
        groupList: <webimmodel.Group[]>[],
        subgroupList: <webimmodel.Subgroup[]>[],
        getGroupById: function(id: string) {
            for (let i = 0; i < this.groupList.length; i++) {
                let item = this.groupList[i];
                if (item.id == id) {
                    return item;
                }
            }
            return null;
        },
        getFriendById: function(id: string) {
            for (var i = 0, slen = this.subgroupList.length; i < slen; i++) {
                var list = this.subgroupList[i].list;
                for (var j = 0, flen = list.length; j < flen; j++) {
                    if (list[j].id == id) {
                        return list[j];
                    }
                }
            }
            return null;
        },
        quickGetFriend: function(id: string, firstchar: string) {
            for (var i = 0, slen = this.subgroupList.length; i < slen; i++) {
                var list = this.subgroupList[i].list;
                if (this.subgroupList[i].title == firstchar) {
                    for (var j = 0, flen = list.length; j < flen; j++) {
                        if (list[j].id == id) {
                            return list[j];
                        }
                    }
                }
            }
            return null;
        },
        addFriend: function(friend: webimmodel.Friend) {
            var obj = webimutil.ChineseCharacter.convertToABC(friend.name);
            var f = webimutil.ChineseCharacter.getPortraitChar(friend.name);
            friend.setpinying({ pinyin: obj.pinyin, everychar: obj.first, firstchar: f });
            f = webimutil.ChineseCharacter.getPortraitChar2(friend.name);
            if (!this.quickGetFriend(friend.id, f)) {
                for (var i = 0, len = this.subgroupList.length; i < len; i++) {
                    if (this.subgroupList[i].title == f) {
                        this.subgroupList[i].list.push(friend);
                        return friend;
                    }
                }
                this.subgroupList.push(new webimmodel.Subgroup(f, [friend]));
                this.subgroupList.sort(function(a: webimmodel.Subgroup, b: webimmodel.Subgroup) { return a.title.charCodeAt(0) - b.title.charCodeAt(0); });
                return friend;
            }
        },
        removeFriend: function(friendId: string) {
            for (var i = 0, slen = this.subgroupList.length; i < slen; i++) {
                var list = this.subgroupList[i].list;
                for (var j = 0, flen = list.length; j < flen; j++) {
                    if (list[j].id == friendId) {
                        list.splice(j, 1);
                        if (list.length === 0) {
                            this.subgroupList.splice(i, 1);
                        }
                        mainDataServer.conversation.updateConversations();
                        return true;
                    }
                }
            }
            return false;
        },
        removeFriendFromSubgroup: function(friend: webimmodel.Friend) {
              var obj = webimutil.ChineseCharacter.convertToABC(friend.displayName || friend.name);
              var f = webimutil.ChineseCharacter.getPortraitChar(friend.displayName || friend.name);
              friend.setpinying({ pinyin: obj.pinyin, everychar: obj.first, firstchar: f });
              f = webimutil.ChineseCharacter.getPortraitChar2(friend.displayName || friend.name);
              for (var i = 0, len = this.subgroupList.length; i < len; i++) {
                  if (this.subgroupList[i].title == f) {
                      for (var j = 0, lenj = this.subgroupList[i].list.length; j < lenj; j++) {
                          if (this.subgroupList[i].list[j].id == friend.id) {
                              this.subgroupList[i].list.splice(j, 1);
                              break;
                          }
                      }
                      if (this.subgroupList[i].list.length)
                          break;
                      this.subgroupList.splice(i, 1);
                      break;
                  }
              }

        },
        updateOrAddFriend: function(friend: webimmodel.Friend) {
            var obj = webimutil.ChineseCharacter.convertToABC(friend.displayName || friend.name);
            var f = webimutil.ChineseCharacter.getPortraitChar(friend.displayName || friend.name);
            friend.setpinying({ pinyin: obj.pinyin, everychar: obj.first, firstchar: f });
            f = webimutil.ChineseCharacter.getPortraitChar2(friend.displayName || friend.name);
            var oldFriend = this.quickGetFriend(friend.id, f);
            if (!oldFriend) {
                for (var i = 0, len = this.subgroupList.length; i < len; i++) {
                    if (this.subgroupList[i].title == f) {
                        this.subgroupList[i].list.push(friend);
                        return friend;
                    }
                }
                this.subgroupList.push(new webimmodel.Subgroup(f, [friend]));
                this.subgroupList.sort(function(a: webimmodel.Subgroup, b: webimmodel.Subgroup) { return a.title.charCodeAt(0) - b.title.charCodeAt(0); });
                return friend;
            } else {
                angular.extend(oldFriend, friend);
                return oldFriend;
            }
        },
        addGroup: function(group: webimmodel.Group) {
            if (!contactsList.getGroupById(group.id)) {
                var obj = webimutil.ChineseCharacter.convertToABC(group.name);
                var f = webimutil.ChineseCharacter.getPortraitChar(group.name);
                group.setpinying({ pinyin: obj.pinyin, everychar: obj.first, firstchar: f })
                this.groupList.push(group);
            }
        },
        removeGroup: function(groupId: string) {
            for (var i = 0, len = this.groupList.length; i < len; i++) {
                if (this.groupList[i].id == groupId) {
                    this.groupList.splice(i, 1);
                    mainDataServer.conversation.updateConversations();
                    return true;
                }
            }
            return false;
        },
        find: function(str: string, arr: webimmodel.Contact[]) {
            var num = /^[0-9]+$/, abc = /^[a-zA-Z]+$/, reg = /^[0-9a-zA-Z\-]+$/;
            var str = str.trim();
            var newArr = <webimmodel.Contact[]>[];

            // if (num.test(str)) {
            //
            // } else
            if (reg.test(str)) {
                for (let i = 0; i < arr.length; i++) {
                    let item = arr[i];
                    if (item.everychar.toLowerCase().indexOf(str.toLowerCase()) !== -1 || item.pinyin.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                        newArr.push(item);
                    }
                }
            } else if (str !== "") {
                for (let i = 0; i < arr.length; i++) {
                    let item = arr[i];
                    if (item.name.indexOf(str) !== -1) {
                        newArr.push(item);
                    }
                }
            }
            return newArr;
        },
        getGroupMember: function(groupId: string, memberId: string) {
            var item = this.getGroupById(groupId);
            if (item) {
                for (let i = 0, len = item.memberList.length; i < len; i++) {
                    if (item.memberList[i].id == memberId) {
                        return item.memberList[i];
                    }
                }
            } else {

            }

            return null;
        },
        addGroupMember: function(groupId: string, member: webimmodel.Member) {
            var item = this.getGroupById(groupId);
            if (item && !contactsList.getGroupMember(groupId, member.id)) {
                var obj = webimutil.ChineseCharacter.convertToABC(member.name);

                var f = webimutil.ChineseCharacter.getPortraitChar(member.name);

                member.setpinying({ pinyin: obj.pinyin, everychar: obj.first, firstchar: f });
                item.memberList.push(member);
                item.fact = item.memberList.length;
            } else {

            }
        },
        removeGroupMember: function(groupId: string, memberid: string) {
            var item = this.getGroupById(groupId);
            if (!item) {
                throw Error("not found group:" + groupId);
            }

            for (let i = 0, len = item.memberList.length; i < len; i++) {
                var member = item.memberList[i];
                if (member.id == memberid) {
                    item.memberList.splice(i, 1);
                    item.fact = item.memberList.length;
                    return true;
                }
            }
            return false;
        }
    }
    mainDataServer.contactsList = contactsList;


    mainDataServer.notification = {
        hasNewNotification: false,
        notificationList: [],
        addNotification: function(item: webimmodel.NotificationFriend) {
            if (!this._findFriendApply(item)) {
                item.firstchar = webimutil.ChineseCharacter.getPortraitChar(item.name);
                this.notificationList.unshift(item);
            }
        },
        //离线补偿已经排除
        _findFriendApply: function(item: webimmodel.NotificationFriend) {
            if (item.id) {
                for (var i = 0, len = this.notificationList.length; i < len; i++) {
                    if (item.id === this.notificationList[i]["id"] && this.notificationList[i]["status"] == webimmodel.FriendStatus.Requested) {
                        return true;
                    }
                }
            }
            return false;
        },
        _sort: function() {
            mainDataServer.notification.notificationList = mainDataServer.notification.notificationList.sort(function(a, b) {
                return parseInt(a.timestamp) - parseInt(b.timestamp);
            });
        }

    }
    return mainDataServer;
}]);

mainServer.factory("RongIMSDKServer", ["$q", function($q: angular.IQService) {
    var RongIMSDKServer = <any>{};

    RongIMSDKServer.init = function(appkey: string) {
        RongIMLib.RongIMClient.init(appkey);
    }

    RongIMSDKServer.connect = function(token: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.connect(token, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onTokenIncorrect: function() {
                defer.reject({ tokenError: true });
            },
            onError: function(errorCode) {
                defer.reject({ errorCode: errorCode });
                var info = '';
                switch (errorCode) {
                    case RongIMLib.ErrorCode.TIMEOUT:
                        info = '连接超时';
                        break;
                    case RongIMLib.ErrorCode.UNKNOWN:
                        info = '未知错误';
                        break;
                    case RongIMLib.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION:
                        info = '不可接受的协议版本';
                        break;
                    case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                        info = 'appkey不正确';
                        break;
                    case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                        info = '服务器不可用';
                        break;
                    case RongIMLib.ConnectionState.NOT_AUTHORIZED:
                        info = '未认证';
                        break;
                    case RongIMLib.ConnectionState.REDIRECT:
                        info = '重新获取导航';
                        break;
                    case RongIMLib.ConnectionState.APP_BLOCK_OR_DELETE:
                        info = '应用已被封禁或已被删除';
                        break;
                    case RongIMLib.ConnectionState.BLOCK:
                        info = '用户被封禁';
                        break;
                }
                console.log("失败:" + info);
            }
        });

        return defer.promise;
    }

    RongIMSDKServer.getInstance = function() {
        return RongIMLib.RongIMClient.getInstance();
    }

    RongIMSDKServer.setOnReceiveMessageListener = function(option: any) {
        RongIMLib.RongIMClient.setOnReceiveMessageListener(option);
    }

    RongIMSDKServer.setConnectionStatusListener = function(option: any) {
        RongIMLib.RongIMClient.setConnectionStatusListener(option);
    }

    RongIMSDKServer.sendMessage = function(conver: number, targetId: string, content: any) {
        var defer = $q.defer();

        RongIMLib.RongIMClient.getInstance().sendMessage(+conver, targetId, content, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(errorCode, message) {
                defer.reject({ errorCode: errorCode, message: message });
                var info = '';
                switch (errorCode) {
                    case RongIMLib.ErrorCode.TIMEOUT:
                        info = '超时';
                        break;
                    case RongIMLib.ErrorCode.UNKNOWN:
                        info = '未知错误';
                        break;
                    case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                        info = '在黑名单中，无法向对方发送消息';
                        //TODO:addmessage() 您的消息已经发出,但被对方拒收
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                        info = '不在讨论组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_GROUP:
                        info = '不在群组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                        info = '不在聊天室中';
                        break;
                    default:
                        info = "";
                        break;
                }
                console.log('发送失败:' + info);
            }
        });

        return defer.promise;
    }

    RongIMSDKServer.reconnect = function(callback: any) {
        RongIMLib.RongIMClient.reconnect(callback);
    }

    RongIMSDKServer.clearUnreadCount = function(type: number, targetid: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().clearUnreadCount(type, targetid, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    }


    RongIMSDKServer.getTotalUnreadCount = function() {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
            onSuccess: function(num) {
                defer.resolve(num);
            },
            onError: function() {
                defer.reject();
            }
        });
        return defer.promise;
    }

    RongIMSDKServer.getConversationList = function() {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getConversationList({
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(error) {
                defer.reject(error);
            }
        }, null);
        return defer.promise;
    }

    // RongIMSDKServer.conversationList = function() {
    //     return RongIMLib.RongIMClient._memoryStore.conversationList;
    //     // return RongIMLib.RongIMClient.conversationMap.conversationList;
    // }

    RongIMSDKServer.removeConversation = function(type: number, targetId: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().removeConversation(type, targetId, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function(error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    }

    RongIMSDKServer.createConversation = function(type: number, targetId: string, title: string) {
        RongIMLib.RongIMClient.getInstance().createConversation(type, targetId, title);
    }

    RongIMSDKServer.getConversation = function(type: number, targetId: string) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getConversation(type, targetId, {
            onSuccess: function(data) {
                defer.resolve(data);
            },
            onError: function() {
                defer.reject();
            }
        });
        return defer.promise;
    }

    RongIMSDKServer.getDraft = function(type: number, targetId: string) {
        return RongIMLib.RongIMClient.getInstance().getTextMessageDraft(type, targetId) || "";
    }

    RongIMSDKServer.setDraft = function(type: number, targetId: string, value: string) {
        return RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(type, targetId, value);
    }

    RongIMSDKServer.clearDraft = function(type: number, targetId: string) {
        return RongIMLib.RongIMClient.getInstance().clearTextMessageDraft(type, targetId);
    }

    RongIMSDKServer.getHistoryMessages = function(type: number, targetId: string, num: number) {
        var defer = $q.defer();
        RongIMLib.RongIMClient.getInstance().getHistoryMessages(type, targetId, null, num, {
            onSuccess: function(data, has) {
                defer.resolve({
                    data: data,
                    has: has
                });
            },
            onError: function(error) {
                defer.reject(error);
            }
        })
        return defer.promise;
    }

    RongIMSDKServer.disconnect = function() {
        RongIMLib.RongIMClient.getInstance().disconnect();
    }

    RongIMSDKServer.logout = function() {
        if (RongIMLib && RongIMLib.RongIMClient) {
            RongIMLib.RongIMClient.getInstance().logout();
        }
    }

    return RongIMSDKServer;
}]);

interface RongIMSDKServer {
    init(appkey: string): void
    connect(token: string): angular.IPromise<string>
    setConnectionStatusListener(listener: any): void
    setOnReceiveMessageListener(listener: any): void
    removeConversation(type: number, targetId: string): angular.IPromise<boolean>
    clearUnreadCount(type: number, targetid: string): angular.IPromise<boolean>
    getTotalUnreadCount(): angular.IPromise<number>
    sendMessage(conver: number, targetId: string, content: any): angular.IPromise<RongIMLib.Message>
    // conversationList(): any
    getConversationList(): angular.IPromise<RongIMLib.Conversation[]>
    getConversation(type: number, targetId: string): angular.IPromise<RongIMLib.Conversation>
    createConversation(type: number, targetId: string, title: string): RongIMLib.Conversation
    getDraft(type: number, targetId: string): string
    setDraft(type: number, targetId: string, valur: string): boolean
    clearDraft(type: number, targetId: string): boolean
    getHistoryMessages(type: number, targetId: string, num: number): angular.IPromise<{ data: RongIMLib.Message[], has: boolean }>
    disconnect(): void
    logout(): void
    reconnect(callback?: any): void
}

interface mainDataServer {
    loginUser: webimmodel.UserInfo
    conversation: {
        totalUnreadCount: number
        conversations: webimmodel.Conversation[]
        currentConversation: webimmodel.Conversation,
        updateConversations(): angular.IPromise<any>
        createConversation(targetType: number, targetId: string): webimmodel.Conversation
        getConversation(type: number, id: string): webimmodel.Conversation
        setDraft(type: string, id: string, msg: string): boolean
        clearMessagesUnreadStatus(type: string, id: string): boolean
    }
    contactsList: {
        groupList: webimmodel.Group[],
        // friendList: webimmodel.Friend[],
        subgroupList: webimmodel.Subgroup[],
        getGroupById(id: string): webimmodel.Group
        getFriendById(id: string): webimmodel.Friend
        // getSubgroupFriendById(id: string): webimmodel.Friend
        addFriend(friend: webimmodel.Friend): webimmodel.Friend
        removeFriend(id: string): boolean
        updateOrAddFriend(friend: webimmodel.Friend): webimmodel.Friend
        removeFriendFromSubgroup(friend: webimmodel.Friend): void
        addGroup(group: webimmodel.Group): void
        removeGroup(id: string): boolean;
        find(str: string, arr: webimmodel.Contact[]): webimmodel.Contact[]
        getGroupMember(groupId: string, memberId: string): webimmodel.Member
        addGroupMember(groupId: string, member: webimmodel.Member): any
        removeGroupMember(groupId: string, memberid: string): boolean
    }
    notification: {
        hasNewNotification: boolean
        notificationList: any[]
        addNotification(item: any): void
        _findFriendApply(item: any): boolean
        _sort(): void
    }
    blackList: {
        list: any[]
        add(item: webimmodel.Friend): void
        remove(id: string): boolean
        getById(id: string): webimmodel.Friend
    }
}

interface mainServer {
    user: {
        sendCode(phone: string, region: string): angular.IHttpPromise<any>
        verifyCode(phone: string, region: string, code: string): angular.IHttpPromise<any>
        checkUsernameAvailable(username: string): angular.IHttpPromise<any>
        checkPhoneAvailable(phone: string, region: string): angular.IHttpPromise<any>
        signup(nickname: string, password: string, token: string): angular.IHttpPromise<any>
        signin(phone: string, region: string, password: string): angular.IHttpPromise<any>
        logout(): angular.IHttpPromise<any>
        getInfo(id: string): angular.IHttpPromise<{ result: { id: string, nickname: string, portraitUri: string, displayName: string }, code: number }>
        getUserByPhone(region: string, phone: string): angular.IHttpPromise<any>
        setNickName(nickname: string): angular.IHttpPromise<any>
        resetPassword(password: string, token: string): angular.IHttpPromise<any>
        modefiyPassword(newPassword: string, oldPassword: string): angular.IHttpPromise<any>
        getToken(): angular.IHttpPromise<any>
        getBlackList(): angular.IHttpPromise<any>
        addToBlackList(userId: string): angular.IHttpPromise<any>
        removeFromBlackList(userId: string): angular.IHttpPromise<any>
        sync(version: number): angular.IHttpPromise<any>
        getMyGroups(): angular.IHttpPromise<any>
        getImageToken(): angular.IHttpPromise<{ code: string, result: { target: string, token: string } }>
    }
    friend: {
        getAll(): angular.IHttpPromise<any>
        agree(friendId: string): angular.IHttpPromise<any>
        invite(friendId: number, message: string): angular.IHttpPromise<any>
        ignore(friendId: string): angular.IHttpPromise<any>
        getProfile(id: string): angular.IHttpPromise<any>
        delete(friendId: string): angular.IHttpPromise<any>
        setDisplayName(friendId: string, displayName: string): angular.IHttpPromise<any>
    }
    group: {
        create(name: string, memberIds: string[]): angular.IHttpPromise<any>
        rename(groupId: string, name: string): angular.IHttpPromise<any>
        getById(id: string): angular.IHttpPromise<{ result: { id: string, name: string, portraitUri: string, memberCount: string, creatorId: string }, code: number }>
        getGroupMember(id: string): angular.IHttpPromise<any>
        addMember(groupId: string, memberIds: string[]): angular.IHttpPromise<{ result: { displayName: string, role: string, createdAt: string, user: { id: string, nickname: string, portraitUri: string } }[], code: number }>
        kickMember(groupId: string, membersId: string[]): angular.IHttpPromise<any>
        dismissGroup(groupId: string): angular.IHttpPromise<any>
        quit(groupId: string): angular.IHttpPromise<any>
    }
}
