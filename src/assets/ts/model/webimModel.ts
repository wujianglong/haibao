/// <reference path="../../lib/window.d.ts"/>

module webimmodel {


    export class Conversation {
        public title: string;
        public targetId: string;
        public targetType: any;
        public lastTime: Date;
        public lastMsg: string;
        public unReadNum: number;
        public draftMsg: string;
        public firstchar: string;
        constructor(item?: {
            title: string,
            targetId: string,
            targetType: any,
            lastTime: Date,
            lastMsg: string,
            unReadNum: number,
            draftMsg: string,
            firstchar?: string
        }) {
            if (item) {
                this.title = item.title;
                this.targetId = item.targetId;
                this.targetType = item.targetType;
                this.lastTime = item.lastTime;
                this.lastMsg = item.lastMsg;
                this.unReadNum = item.unReadNum;
                this.draftMsg = item.draftMsg;
                this.firstchar = item.firstchar;
            }
        }

        static convertTowebim(item: RongIMLib.Conversation) {
            var lasttime: Date;
            if (item.latestMessage && item.sentTime) {
                lasttime = new Date(item.sentTime);
            }

            var msgContent = ""
            if (item.latestMessage) {

                // msgContent = Message.messageToNotification(item.latestMessage)
            }

            return new Conversation({
                title: item.conversationTitle || "",
                targetId: item.targetId || "",
                targetType: item.conversationType || "",
                lastTime: lasttime || new Date(),
                lastMsg: msgContent || "",
                unReadNum: item.unreadMessageCount,
                draftMsg: item.draft || ""
            }
            )
        }
    }




    // export enum PanelType {
    //     Text = 1, Image = 2, Voice = 3, RichContent = 4, Location = 8, InformationNotification = 9,
    //     System = 103, Time = 104, Other = 0, getHistory = 105, getMore = 106
    // }
    export enum MessageDirection {
        SEND = 1,
        RECEIVE = 2,
    }

    export enum ReceivedStatus {
        READ = 0x1,
        LISTENED = 0x2,
        DOWNLOADED = 0x4
    }

    export enum SentStatus {
        /**
         * 发送中。
         */
        SENDING = 10,
        /**
         * 发送失败。
         */
        FAILED = 20,
        /**
         * 已发送。
         */
        SENT = 30,
        /**
         * 对方已接收。
         */
        RECEIVED = 40,
        /**
         * 对方已读。
         */
        READ = 50,
        /**
         * 对方已销毁。
         */
        DESTROYED = 60,
    }

    export enum PanelType {
        Message = 1, InformationNotification = 2,
        System = 103, Time = 104, getHistory = 105, getMore = 106,
        Other = 0
    }

    export var MessageType = {
        DiscussionNotificationMessage: "DiscussionNotificationMessage ",
        TextMessage: "TextMessage",
        ImageMessage: "ImageMessage",
        VoiceMessage: "VoiceMessage",
        RichContentMessage: "RichContentMessage",
        HandshakeMessage: "HandshakeMessage",
        UnknownMessage: "UnknownMessage",
        SuspendMessage: "SuspendMessage",
        LocationMessage: "LocationMessage",
        InformationNotificationMessage: "InformationNotificationMessage",
        ContactNotificationMessage: "ContactNotificationMessage",
        ProfileNotificationMessage: "ProfileNotificationMessage",
        CommandNotificationMessage: "CommandNotificationMessage"
    }


    export enum conversationType {
        //ChartRoom = 0, CustomerService = 1, Discussion = 2, Group = 3, Private = 4, System = 5
        Private = 1, Discussion = 2, Group = 3, ChartRoom = 4, CustomerService = 5, System = 6, AppPublicService = 7, PublicService = 8
    }


    export enum NoticePanelType {
        ApplyFriend = 1, AgreedFriend = 2,
        WarningNotice = 101,
    }

    export enum FriendStatus {
        Requesting = 10, Requested = 11,
        Agreed = 20, Ignored = 21, Deleted = 30,
        GroupNotification = 101//群通知消息
    }

    export enum CommandNotificationMessageType {
        ApplyGroup = 1, InviteAddGroup = 2, KickOutGroup = 3,
        AcceptApplyGroup = 101, RejectApplyGroup = 102, AcceptInviteAddGroup = 201, RejectInviteAddGroup = 202
    }

    export class ChatPanel {
        panelType: PanelType
        constructor(type: PanelType) {
            this.panelType = type;
        }
    }

    function convertCommonMsg(item: RongIMLib.Message) {
        var msg = <any>{
            conversationType: item.conversationType || null,
            // details: item.getDetail(),
            // extra: item.getExtra(),
            direction: item.messageDirection || null,
            messageId: item.messageId,
            // messageTag: item.getMessageTag(),

            messageType: item.messageType,
            // objectName: item.getObjectName(),
            // receivedStatus: item.getReceivedStatus(),
            receivedTime: (new Date(item.receivedTime)),
            senderUserId: item.senderUserId,
            sendTime: item.sentTime ? (new Date(item.sentTime)) : null,
            targetId: item.targetId,
            senderUserName: "",
            senderUserImgSrc: "",
            messageUId: item.messageUId
        };
        return msg;
    }


    export class Message extends ChatPanel {
        content: any;
        conversationType: any;
        extra: string;
        objectName: string;
        messageDirection: MessageDirection;
        messageId: string;
        receivedStatus: ReceivedStatus;
        receivedTime: Date;
        senderUserId: string;
        sentStatus: SentStatus;
        sentTime: Date;
        targetId: string;
        messageType: string;
        constructor(content?: any, conversationType?: string, extra?: string, objectName?: string, messageDirection?: MessageDirection, messageId?: string, receivedStatus?: ReceivedStatus, receivedTime?: number, senderUserId?: string, sentStatus?: SentStatus, sentTime?: number, targetId?: string, messageType?: string) {
            super(PanelType.Message);
        }
        static convert(SDKmsg: any) {

            var msg = new Message();
            msg.conversationType = SDKmsg.conversationType;
            msg.extra = SDKmsg.extra;
            msg.objectName = SDKmsg.objectName
            msg.messageDirection = SDKmsg.messageDirection;
            msg.messageId = SDKmsg.messageId;
            msg.receivedStatus = SDKmsg.receivedStatus;
            msg.receivedTime = new Date(SDKmsg.receivedTime);
            msg.senderUserId = SDKmsg.senderUserId;
            msg.sentStatus = SDKmsg.sendStatusMessage;
            msg.sentTime = new Date(SDKmsg.sentTime);
            msg.targetId = SDKmsg.targetId;
            msg.messageType = SDKmsg.messageType;

            switch (msg.messageType) {
                case MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.emojiToHTML) {
                        content = RongIMLib.RongIMEmoji.emojiToHTML(content);
                    }
                    texmsg.content = content;

                    msg.content = texmsg;
                    break;
                case MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;

                    msg.content = image;
                    break;

                case MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;

                    msg.content = voice;
                    break;

                case MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;

                    msg.content = rich;
                    break;
                case MessageType.LocationMessage:
                    var location = new LocationMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    location.content = content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;

                    msg.content = location;
                    break;
                case MessageType.InformationNotificationMessage:
                    var info = new InformationNotificationMessage();
                    info.content = SDKmsg.content.content;

                    msg.content = info;
                    break;
                case MessageType.DiscussionNotificationMessage:
                    var discussion = new DiscussionNotificationMessage();
                    discussion.extension = SDKmsg.content.extension;
                    discussion.operation = SDKmsg.content.operation;
                    discussion.type = SDKmsg.content.type;
                    discussion.isHasReceived = SDKmsg.content.isHasReceived;

                    msg.content = discussion;
                default:
                    console.log("未处理消息类型:" + SDKmsg.messageType);
                    break;
            }
            if (msg.content) {
                msg.content.userInfo = SDKmsg.content.userInfo;
            }

            return msg;
        }

    }


    // export class Message extends ChatPanel {
    //     content: string;
    //     conversationType: any;
    //     details: any;
    //     extra: any;
    //     direction: number;
    //     messageId: string;
    //     messageTag: string;
    //     messageType: string;
    //     objectName: string;
    //     receivedStatus: string;
    //     receivedTime: Date;
    //     senderUserId: string;
    //     sendTime: Date;
    //     targetId: string;
    //
    //     senderUserName: string;
    //     senderUserImgSrc: string;
    //
    //     messageUId: string
    //
    //
    //     constructor(type: PanelType, item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //         messageUId: string;
    //     }) {
    //         super(type);
    //         this.content = item.content;
    //         this.conversationType = item.conversationType;
    //         // this.details = item.details;
    //         // this.extra = item.extra;
    //         this.direction = item.direction;
    //         this.messageId = item.messageId;
    //         this.messageTag = item.messageTag;
    //         this.messageType = item.messageType;
    //         // this.objectName = item.objectName;
    //         // this.receivedStatus = item.receivedStatus;
    //         this.receivedTime = item.receivedTime;
    //         this.senderUserId = item.senderUserId;
    //         this.sendTime = item.sendTime;
    //         this.targetId = item.targetId;
    //
    //         this.senderUserName = item.senderUserName;
    //         this.senderUserImgSrc = item.senderUserImgSrc;
    //         this.messageUId = item.messageUId;
    //     }
    //
    //     static convertCommonMsg = convertCommonMsg;
    //
    //     static convertMsg(item: RongIMLib.Message): webimmodel.Message {
    //
    //
    //
    //         var msg: any;
    //         switch (item.messageType) {
    //             case MessageType.TextMessage:
    //                 var content = "";
    //                 var txtmsg = <RongIMLib.TextMessage>item.content;
    //                 content = txtmsg.content || "";
    //                 content = webimutil.Helper.escapeSymbol.escapeHtml(content);
    //
    //                 content = RongIMLib.RongIMEmoji.emojiToHTML(content);
    //                 var tmp = convertCommonMsg(item);
    //                 tmp.content = content;
    //                 msg = new webimmodel.TextMessage(tmp);
    //                 break;
    //             case MessageType.ImageMessage:
    //                 var content = "";
    //                 var imgmsg = <RongIMLib.ImageMessage>item.content;
    //                 content = imgmsg.content || "";
    //                 if (content.indexOf("base64,") == -1) {
    //                     content = "data:image/png;base64," + content;
    //                 }
    //                 var tmp = convertCommonMsg(item);
    //                 tmp.content = content;
    //                 tmp.imageUri = imgmsg.imageUri;
    //                 msg = new webimmodel.ImageMessage(tmp);
    //                 break;
    //             case MessageType.VoiceMessage:
    //                 var tmp = convertCommonMsg(item);
    //                 var voimsg = <RongIMLib.VoiceMessage>item.content;
    //                 tmp.content = voimsg.content;
    //                 tmp.duration = voimsg.duration;
    //
    //                 msg = new webimmodel.VoiceMessage(tmp);
    //                 break;
    //             case MessageType.LocationMessage:
    //                 var content = "";
    //                 var locmsg = <RongIMLib.LocationMessage>item.content;
    //                 content = locmsg.imgUri || "";
    //                 if (content.indexOf("base64,") == -1) {
    //                     content = "data:image/png;base64," + content;
    //                 }
    //                 var tmp = convertCommonMsg(item);
    //                 tmp.content = content;
    //                 tmp.latitude = locmsg.latiude;
    //                 tmp.longitude = locmsg.longitude;
    //                 tmp.poi = locmsg.poi;
    //
    //                 msg = new webimmodel.LocationMessage(tmp);
    //                 break;
    //             case MessageType.RichContentMessage:
    //
    //                 var tmp = convertCommonMsg(item);
    //                 var richmsg = <RongIMLib.RichContentMessage>item.content;
    //                 tmp.content = richmsg.content;
    //                 tmp.title = richmsg.title;
    //                 tmp.imageUri = richmsg.imageUri;
    //
    //                 msg = new webimmodel.RichContentMessage(tmp)
    //                 break;
    //             case MessageType.ContactNotificationMessage:
    //                 var tmp = convertCommonMsg(item);
    //                 var conmsg = <RongIMLib.ContactNotificationMessage>item.content;
    //                 tmp.content = conmsg.message;
    //                 tmp.operation = conmsg.operation;
    //                 tmp.sourceUserId = conmsg.sourceUserId;
    //                 tmp.targetUserId = conmsg.targetUserId;
    //                 tmp.message = conmsg.content;
    //
    //                 switch (tmp.operation) {
    //                     case "Request":
    //                         tmp.noticeType = NoticePanelType.ApplyFriend;
    //                         break;
    //                     case "AcceptResponse":
    //                         tmp.noticeType = NoticePanelType.AgreedFriend;
    //                         tmp.content = "同意加为好友"
    //                         break;
    //                     case "RejectResponse":
    //                         // tmp.noticeType = NoticePanelType.WarningNotice;
    //                         // tmp.content = "拒绝加为好友"
    //                         console.log("拒绝好友通知消息未支持");
    //                         break;
    //                 }
    //                 msg = new webimmodel.ContactNotificationMessage(tmp);
    //                 break;
    //             case MessageType.CommandNotificationMessage:
    //                 var tmp = convertCommonMsg(item);
    //                 var commsg = <RongIMLib.CommandNotificationMessage>item.content;
    //                 tmp.data = commsg.data;
    //                 tmp.name = commsg.name;
    //                 tmp.data = JSON.parse(commsg.data);
    //
    //                 msg = new webimmodel.CommandNotificationMessage(tmp);
    //                 break;
    //             case MessageType.InformationNotificationMessage:
    //                 var tmp = convertCommonMsg(item);
    //                 var infomsg = <RongIMLib.InformationNotificationMessage>item.content;
    //                 tmp.content = infomsg.content;
    //                 msg = new webimmodel.InformationNotificationMessage(tmp);
    //                 break;
    //             default:
    //                 if (item.objectName == "RC:GrpNtf") {
    //                     var tmp = convertCommonMsg(item);
    //                     var grpntf = <any>item.content;
    //
    //                     tmp.content = grpntf.message;
    //                     msg = new webimmodel.InformationNotificationMessage(tmp);
    //                 } else {
    //                     msg = {};
    //                     console.log("has unknown message type")
    //                 }
    //         }
    //
    //         return msg;
    //     }
    //
    //     static messageToNotification = function(msg: any) {
    //         if (!msg)
    //             return null;
    //         var msgtype = msg.messageType, msgContent: string;
    //         if (msgtype == MessageType.ImageMessage) {
    //             msgContent = "[图片]";
    //         } else if (msgtype == MessageType.LocationMessage) {
    //             msgContent = "[位置]";
    //         } else if (msgtype == MessageType.VoiceMessage) {
    //             msgContent = "[语音]";
    //         } else if (msgtype == MessageType.ContactNotificationMessage || msgtype == MessageType.CommandNotificationMessage) {
    //             msgContent = "[通知消息]";
    //         } else if (msg.objectName == "RC:GrpNtf") {
    //             var data = msg.content.message.content.data.data
    //             switch (msg.content.message.content.operation) {
    //                 case "Add":
    //                     msgContent = data.targetUserDisplayNames.join("、") + " 加入了群组";
    //                     break;
    //                 case "Quit":
    //                     msgContent = data.operatorNickname + " 退出了群组";
    //                     break;
    //                 case "Kicked":
    //                     //operatorNickname
    //                     msgContent = data.targetUserDisplayNames.join("、") + " 被剔出群组";
    //                     break;
    //                 case "Rename":
    //                     msgContent = data.operatorNickname + " 修改了群名称";
    //                     break;
    //                 case "Create":
    //                     msgContent = data.operatorNickname + " 创建了群组";
    //                     break;
    //                 case "Dismiss":
    //                     msgContent = data.operatorNickname + " 解散了群组 " + data.targetGroupName;
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         }
    //         else {
    //             msgContent = msg.content ? msg.content.content : "";
    //
    //             msgContent = webimutil.Helper.escapeSymbol.escapeHtml(msgContent);
    //             msgContent = RongIMLib.RongIMEmoji.emojiToSymbol(msgContent);
    //             // if (!webimutil.Helper.browser.chrome) {
    //             msgContent = msgContent.replace(/\n/g, " ");
    //             msgContent = msgContent.replace(/([\w]{49,50})/g, "$1 ");
    //             // }
    //
    //         }
    //         return msgContent;
    //     }
    // }

    // export class TextMessage extends Message {
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Text, item);
    //     }
    // }
    //
    // export class ImageMessage extends Message {
    //
    //     imageUri: string;
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //
    //         imageUri: string;
    //
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Image, item);
    //         this.imageUri = item.imageUri;
    //     }
    // }
    //
    // export class VoiceMessage extends Message {
    //     duration: number;
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //
    //         duration: number;
    //         isUnReade: boolean;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Voice, item);
    //         this.duration = item.duration;
    //     }
    // }
    //
    // export class LocationMessage extends Message {
    //     latitude: number;
    //     longitude: number;
    //     poi: string;
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //
    //         latitude: number;
    //         longitude: number;
    //         poi: string;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Location, item);
    //         this.latitude = item.latitude;
    //         this.longitude = item.longitude;
    //         this.poi = item.poi;
    //     }
    // }
    //
    // export class RichContentMessage extends Message {
    //     title: string;
    //     imageUri: string;
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //
    //         title: string;
    //         imageUri: string;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.RichContent, item);
    //         this.title = item.title;
    //         this.imageUri = item.imageUri;
    //     }
    // }
    //
    // export class ContactNotificationMessage extends Message {
    //
    //     operation: string;
    //     sourceUserId: string;
    //     targetUserId: string;
    //     message: string;
    //
    //     noticeType: number;
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //
    //         operation: string;
    //         sourceUserId: string;
    //         targetUserId: string;
    //         message: string;
    //         noticeType: number;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Other, item);
    //         this.operation = item.operation;
    //         this.sourceUserId = item.sourceUserId;
    //         this.targetUserId = item.targetId;
    //         this.message = item.message;
    //         this.noticeType = item.noticeType;
    //     }
    // }
    //
    // export class CommandNotificationMessage extends Message {
    //     name: string;
    //     data: any;
    //     noticeType: number;
    //
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //
    //         name: string;
    //         data: any;
    //         noticeType: number;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Other, item);
    //         this.data = item.data;
    //         this.name = item.name;
    //         this.noticeType = item.noticeType;
    //     }
    // }
    //
    // export class InformationNotificationMessage extends Message {
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.InformationNotification, item);
    //     }
    // }

    // export class CroupChangeNotificationMessage extends Message {
    //     constructor(item: {
    //         content: string;
    //         conversationType: any;
    //         // details: string;
    //         // extra: string;
    //         direction: number;
    //         messageId: string;
    //         messageTag: string;
    //         messageType: string;
    //         // objectName: string;
    //         // receivedStatus: string;
    //         receivedTime: Date;
    //         senderUserId: string;
    //         sendTime: Date;
    //         targetId: string;
    //
    //         senderUserName: string;
    //         senderUserImgSrc: string;
    //         messageUId: string;
    //     }) {
    //         super(PanelType.Other, item);
    //     }
    // }

    export class TextMessage {
        userInfo: UserInfo;
        content: string;
        constructor(msg?: any) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
    }
    export class InformationNotificationMessage {
        userInfo: UserInfo;
        content: string;
        extra: string;
        messageName: string;
    }

    export class ImageMessage {
        userInfo: UserInfo;
        content: string;
        imageUri: string;
    }

    export class VoiceMessage {
        userInfo: UserInfo;
        content: string;
        duration: string;
    }

    export class LocationMessage {
        userInfo: UserInfo;
        content: string;
        latiude: number;
        longitude: number;
        poi: string;
    }

    export class RichContentMessage {
        userInfo: UserInfo;
        content: string;
        title: string;
        imageUri: string;
    }

    export class DiscussionNotificationMessage {
        userInfo: UserInfo;
        extension: string;
        type: number;
        isHasReceived: boolean;
        operation: string;
        extra: string;
        messageName: string;
    }

    export class GetHistoryPanel extends ChatPanel {
        constructor() {
            super(PanelType.getHistory)
        }
    }

    export class GetMoreMessagePanel extends ChatPanel {
        constructor() {
            super(PanelType.getMore)
        }
    }

    export class TimePanl extends ChatPanel {
        sendTime: Date
        constructor(time: Date) {
            super(PanelType.Time)
            this.sendTime = time;
        }
    }

    export class WarningNoticeMessage {
        status: number;
        content: string;
        timestamp: number;//用于通知消息排序
        constructor(content: string) {
            this.content = content;
            this.status = webimmodel.FriendStatus.GroupNotification
        }
    }


    export class NotificationFriend {
        id: string
        name: string
        portraitUri: string
        content: string
        status: string
        timestamp: number//用于通知消息排序
        firstchar: string

        constructor(item: {
            id: string,
            name: string,
            portraitUri: string,
            content: string,
            status: string
            timestamp: number
        }) {
            this.id = item.id;
            this.name = item.name;
            this.portraitUri = item.portraitUri;
            this.content = item.content;
            this.status = item.status;
            this.timestamp = item.timestamp;
        }

    }


    export class UserInfo {
        constructor(public id?: string,
            public nickName?: string,
            public portraitUri?: string,
            public phone?: string,
            public region?: string,
            public firstchar?: string) { }
    }

    export class Contact {
        id: string;
        name: string;
        imgSrc: string;
        pinyin: string;
        everychar: string;
        firstchar: string;

        constructor(item?: {
            id: string;
            name: string;
            imgSrc: string;
        }) {
            this.id = item.id;
            this.name = item.name;
            this.imgSrc = item.imgSrc;
        }

        setpinying(item: {
            pinyin: string;
            everychar: string;
            firstchar: string;
        }) {
            this.pinyin = item.pinyin;
            this.everychar = item.everychar;
            this.firstchar = item.firstchar;
        }
    }
    export class Friend extends Contact {
        displayName: string
        constructor(item: {
            id: string;
            name: string;
            imgSrc: string;
        }) {
            super(item);
        }
    }

    export class Subgroup {
        title: string
        list: Friend[]
        constructor(title: string, list: Friend[]) {
            this.title = title;
            this.list = list;
        }
    }

    export class Group extends Contact {
        upperlimit: number;
        fact: number;
        creater: string;
        memberList: Member[];

        constructor(item: {
            id: string;
            name: string;
            imgSrc: string;
            upperlimit: number;
            fact: number;
            creater: string;
        }) {
            super(item);
            this.upperlimit = item.upperlimit;
            this.fact = item.fact;
            this.creater = item.creater;
            this.memberList = []
        }

    }

    export class Member extends Contact {
        id: string;
        name: string;
        imgSrc: string;
        role: string;
        // pinyin: string;
        // first: string;
        constructor(item: {
            id: string;
            name: string;
            imgSrc: string;
            role?: string;
        }) {
            super(item);
            this.role = item.role;
        }
    }

}
