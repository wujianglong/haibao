var Polling = {
    SearchMpInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setId = function(a) {
            b.id = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    SearchMpOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MpInfo: function() {
        var b = {};
        this.setMpid = function(a) {
            b.mpid = a;
        };
        this.setName = function(a) {
            b.name = a;
        };
        this.setType = function(a) {
            b.type = a;
        };
        this.setTime = function(a) {
            b.time = a;
        };
        this.setPortraitUri = function(a) {
            b.portraitUrl = a;
        };
        this.setExtra = function(a) {
            b.extra = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    PullMpInput: function() {
        var b = {};
        this.setMpid = function(a) {
            b.mpid = a;
        };
        this.setTime = function(a) {
            b.time = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    PullMpOutput: function() {
        var b = {};
        this.setStatus = function(a) {
            b.status = a;
        };
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MPFollowInput: function() {
        var b = {};
        this.setId = function(a) {
            b.id = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MPFollowOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    NotifyMsg: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setTime = function(a) {
            b.time = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    SyncRequestMsg: function() {
        var b = {};
        this.setSyncTime = function(a) {
            b.syncTime = a || 0;
        };
        this.setIspolling = function(a) {
            b.ispolling = !!a;
        };
        this.setIsweb = function(a) {
            b.isweb = !!a;
        };
        this.setIsPullSend = function(a) {
            b.isPullSend = !!a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    UpStreamMessage: function() {
        var b = {};
        this.setSessionId = function(a) {
            b.sessionId = a;
        };
        this.setClassname = function(a) {
            b.classname = a;
        };
        this.setContent = function(a) {
            if (a) {
                b.content = a;
            }
        };
        this.setPushText = function(a) {
            b.pushText = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    DownStreamMessages: function() {
        var b = {};
        this.setList = function(a) {
            b.list = a;
        };
        this.setSyncTime = function(a) {
            b.syncTime = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    DownStreamMessage: function() {
        var b = {};
        this.setFromUserId = function(a) {
            b.fromUserId = a;
        };
        this.setType = function(a) {
            b.type = a;
        };
        this.setGroupId = function(a) {
            b.groupId = a;
        };
        this.setClassname = function(a) {
            b.classname = a;
        };
        this.setContent = function(a) {
            if (a) {
                b.content = a;
            }
        };
        this.setDataTime = function(a) {
            b.dataTime = a;
        };
        this.setStatus = function(a) {
            b.status = a;
        };
        this.setMsgId = function(a) {
            b.msgId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    CreateDiscussionInput: function() {
        var b = {};
        this.setName = function(a) {
            b.name = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    CreateDiscussionOutput: function() {
        var b = {};
        this.setId = function(a) {
            b.id = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInvitationInput: function() {
        var b = {};
        this.setUsers = function(a) {
            b.users = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    LeaveChannelInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelEvictionInput: function() {
        var b = {};
        this.setUser = function(a) {
            b.user = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RenameChannelInput: function() {
        var b = {};
        this.setName = function(a) {
            b.name = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfoInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfoOutput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setChannelId = function(a) {
            b.channelId = a;
        };
        this.setChannelName = function(a) {
            b.channelName = a;
        };
        this.setAdminUserId = function(a) {
            b.adminUserId = a;
        };
        this.setFirstTenUserIds = function(a) {
            b.firstTenUserIds = a;
        };
        this.setOpenStatus = function(a) {
            b.openStatus = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfosInput: function() {
        var b = {};
        this.setPage = function(a) {
            b.page = a;
        };
        this.setNumber = function(a) {
            b.number = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfosOutput: function() {
        var b = {};
        this.setChannels = function(a) {
            b.channels = a;
        };
        this.setTotal = function(a) {
            b.total = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MemberInfo: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setUserName = function(a) {
            b.userName = a;
        };
        this.setUserPortrait = function(a) {
            b.userPortrait = a;
        };
        this.setExtension = function(a) {
            b.extension = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupMembersInput: function() {
        var b = {};
        this.setPage = function(a) {
            b.page = a;
        };
        this.setNumber = function(a) {
            b.number = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupMembersOutput: function() {
        var b = {};
        this.setMembers = function(a) {
            b.members = a;
        };
        this.setTotal = function(a) {
            b.total = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetUserInfoInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetUserInfoOutput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setUserName = function(a) {
            b.userName = a;
        };
        this.setUserPortrait = function(a) {
            b.userPortrait = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetSessionIdInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetSessionIdOutput: function() {
        var b = {};
        this.setSessionId = function(a) {
            b.sessionId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNupTokenInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNupTokenOutput: function() {
        var b = {};
        this.setDeadline = function(a) {
            b.deadline = a;
        };
        this.setToken = function(a) {
            b.token = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNdownloadUrlInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setKey = function(a) {
            b.key = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNdownloadUrlOutput: function() {
        var b = {};
        this.setDownloadUrl = function(a) {
            b.downloadUrl = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    Add2BlackListInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RemoveFromBlackListInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    QueryBlackListInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    QueryBlackListOutput: function() {
        var b = {};
        this.setUserIds = function(a) {
            b.userIds = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    BlackListStatusInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    BlockPushInput: function() {
        var b = {};
        this.setBlockeeId = function(a) {
            b.blockeeId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ModifyPermissionInput: function() {
        var b = {};
        this.setOpenStatus = function(a) {
            b.openStatus = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupInput: function() {
        var b = {};
        this.setGroupInfo = function(c) {
            for (var d = 0, a = []; d < c.length; d++) {
                a.push({
                    id: c[d].getContent().id,
                    name: c[d].getContent().name
                });
            }
            b.groupInfo = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupInfo: function() {
        var b = {};
        this.setId = function(a) {
            b.id = a;
        };
        this.setName = function(a) {
            b.name = a;
        };
        this.getContent = function() {
            return b;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupHashInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setGroupHashCode = function(a) {
            b.groupHashCode = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupHashOutput: function() {
        var b = {};
        this.setResult = function(a) {
            b.result = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChrmInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChrmOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChrmPullMsg: function() {
        var b = {};
        this.setSyncTime = function(a) {
            b.syncTime = a;
        };
        this.setCount = function(a) {
            b.count = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RelationsInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setMsg = function(a) {
            b.msg = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RelationsOutput: function() {
        var b = {};
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RelationInfo: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setMsg = function(a) {
            b.msg = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    HistoryMessageInput: function() {
        var b = {};
        this.setTargetId = function(a) {
            b.targetId = a;
        };
        this.setDataTime = function(a) {
            b.dataTime = a;
        };
        this.setSize = function(a) {
            b.size = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    HistoryMessagesOuput: function() {
        var b = {};
        this.setList = function(a) {
            b.list = a;
        };
        this.setSyncTime = function(a) {
            b.syncTime = a;
        };
        this.setHasMsg = function(a) {
            b.hasMsg = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    }
};

for (var f in Polling) {
    Polling[f].decode = function(b) {
        var back = {}, val = JSON.parse(b) || eval("(" + b + ")");
        for (var i in val) {
            back[i] = val[i];
            back["get" + i.charAt(0).toUpperCase() + i.slice(1)] = function() {
                return val[i];
            };
        }
        return back;
    };
}

(function(h) {
    function p(v, A) {
        var z = (v & 65535) + (A & 65535), w = (v >> 16) + (A >> 16) + (z >> 16);
        return w << 16 | z & 65535;
    }
    function t(v, w) {
        return v << w | v >>> 32 - w;
    }
    function c(B, y, w, v, A, z) {
        return p(t(p(p(y, B), p(v, z)), A), w);
    }
    function b(y, w, C, B, v, A, z) {
        return c(w & C | ~w & B, y, w, v, A, z);
    }
    function j(y, w, C, B, v, A, z) {
        return c(w & B | C & ~B, y, w, v, A, z);
    }
    function o(y, w, C, B, v, A, z) {
        return c(w ^ C ^ B, y, w, v, A, z);
    }
    function a(y, w, C, B, v, A, z) {
        return c(C ^ (w | ~B), y, w, v, A, z);
    }
    function d(G, B) {
        G[B >> 5] |= 128 << B % 32;
        G[(B + 64 >>> 9 << 4) + 14] = B;
        var y, A, z, w, v, F = 1732584193, E = -271733879, D = -1732584194, C = 271733878;
        for (y = 0; y < G.length; y += 16) {
            A = F;
            z = E;
            w = D;
            v = C;
            F = b(F, E, D, C, G[y], 7, -680876936);
            C = b(C, F, E, D, G[y + 1], 12, -389564586);
            D = b(D, C, F, E, G[y + 2], 17, 606105819);
            E = b(E, D, C, F, G[y + 3], 22, -1044525330);
            F = b(F, E, D, C, G[y + 4], 7, -176418897);
            C = b(C, F, E, D, G[y + 5], 12, 1200080426);
            D = b(D, C, F, E, G[y + 6], 17, -1473231341);
            E = b(E, D, C, F, G[y + 7], 22, -45705983);
            F = b(F, E, D, C, G[y + 8], 7, 1770035416);
            C = b(C, F, E, D, G[y + 9], 12, -1958414417);
            D = b(D, C, F, E, G[y + 10], 17, -42063);
            E = b(E, D, C, F, G[y + 11], 22, -1990404162);
            F = b(F, E, D, C, G[y + 12], 7, 1804603682);
            C = b(C, F, E, D, G[y + 13], 12, -40341101);
            D = b(D, C, F, E, G[y + 14], 17, -1502002290);
            E = b(E, D, C, F, G[y + 15], 22, 1236535329);
            F = j(F, E, D, C, G[y + 1], 5, -165796510);
            C = j(C, F, E, D, G[y + 6], 9, -1069501632);
            D = j(D, C, F, E, G[y + 11], 14, 643717713);
            E = j(E, D, C, F, G[y], 20, -373897302);
            F = j(F, E, D, C, G[y + 5], 5, -701558691);
            C = j(C, F, E, D, G[y + 10], 9, 38016083);
            D = j(D, C, F, E, G[y + 15], 14, -660478335);
            E = j(E, D, C, F, G[y + 4], 20, -405537848);
            F = j(F, E, D, C, G[y + 9], 5, 568446438);
            C = j(C, F, E, D, G[y + 14], 9, -1019803690);
            D = j(D, C, F, E, G[y + 3], 14, -187363961);
            E = j(E, D, C, F, G[y + 8], 20, 1163531501);
            F = j(F, E, D, C, G[y + 13], 5, -1444681467);
            C = j(C, F, E, D, G[y + 2], 9, -51403784);
            D = j(D, C, F, E, G[y + 7], 14, 1735328473);
            E = j(E, D, C, F, G[y + 12], 20, -1926607734);
            F = o(F, E, D, C, G[y + 5], 4, -378558);
            C = o(C, F, E, D, G[y + 8], 11, -2022574463);
            D = o(D, C, F, E, G[y + 11], 16, 1839030562);
            E = o(E, D, C, F, G[y + 14], 23, -35309556);
            F = o(F, E, D, C, G[y + 1], 4, -1530992060);
            C = o(C, F, E, D, G[y + 4], 11, 1272893353);
            D = o(D, C, F, E, G[y + 7], 16, -155497632);
            E = o(E, D, C, F, G[y + 10], 23, -1094730640);
            F = o(F, E, D, C, G[y + 13], 4, 681279174);
            C = o(C, F, E, D, G[y], 11, -358537222);
            D = o(D, C, F, E, G[y + 3], 16, -722521979);
            E = o(E, D, C, F, G[y + 6], 23, 76029189);
            F = o(F, E, D, C, G[y + 9], 4, -640364487);
            C = o(C, F, E, D, G[y + 12], 11, -421815835);
            D = o(D, C, F, E, G[y + 15], 16, 530742520);
            E = o(E, D, C, F, G[y + 2], 23, -995338651);
            F = a(F, E, D, C, G[y], 6, -198630844);
            C = a(C, F, E, D, G[y + 7], 10, 1126891415);
            D = a(D, C, F, E, G[y + 14], 15, -1416354905);
            E = a(E, D, C, F, G[y + 5], 21, -57434055);
            F = a(F, E, D, C, G[y + 12], 6, 1700485571);
            C = a(C, F, E, D, G[y + 3], 10, -1894986606);
            D = a(D, C, F, E, G[y + 10], 15, -1051523);
            E = a(E, D, C, F, G[y + 1], 21, -2054922799);
            F = a(F, E, D, C, G[y + 8], 6, 1873313359);
            C = a(C, F, E, D, G[y + 15], 10, -30611744);
            D = a(D, C, F, E, G[y + 6], 15, -1560198380);
            E = a(E, D, C, F, G[y + 13], 21, 1309151649);
            F = a(F, E, D, C, G[y + 4], 6, -145523070);
            C = a(C, F, E, D, G[y + 11], 10, -1120210379);
            D = a(D, C, F, E, G[y + 2], 15, 718787259);
            E = a(E, D, C, F, G[y + 9], 21, -343485551);
            F = p(F, A);
            E = p(E, z);
            D = p(D, w);
            C = p(C, v);
        }
        return [ F, E, D, C ];
    }
    function q(w) {
        var x, v = "";
        for (x = 0; x < w.length * 32; x += 8) {
            v += String.fromCharCode(w[x >> 5] >>> x % 32 & 255);
        }
        return v;
    }
    function k(w) {
        var x, v = [];
        v[(w.length >> 2) - 1] = undefined;
        for (x = 0; x < v.length; x += 1) {
            v[x] = 0;
        }
        for (x = 0; x < w.length * 8; x += 8) {
            v[x >> 5] |= (w.charCodeAt(x / 8) & 255) << x % 32;
        }
        return v;
    }
    function l(v) {
        return q(d(k(v), v.length * 8));
    }
    function e(x, A) {
        var w, z = k(x), v = [], y = [], B;
        v[15] = y[15] = undefined;
        if (z.length > 16) {
            z = d(z, x.length * 8);
        }
        for (w = 0; w < 16; w += 1) {
            v[w] = z[w] ^ 909522486;
            y[w] = z[w] ^ 1549556828;
        }
        B = d(v.concat(k(A)), 512 + A.length * 8);
        return q(d(y.concat(B), 512 + 128));
    }
    function u(y) {
        var A = "0123456789abcdef", w = "", v, z;
        for (z = 0; z < y.length; z += 1) {
            v = y.charCodeAt(z);
            w += A.charAt(v >>> 4 & 15) + A.charAt(v & 15);
        }
        return w;
    }
    function n(v) {
        return unescape(encodeURIComponent(v));
    }
    function r(v) {
        return l(n(v));
    }
    function m(v) {
        return u(r(v));
    }
    function i(v, w) {
        return e(n(v), n(w));
    }
    function s(v, w) {
        return u(i(v, w));
    }
    function g(w, x, v) {
        if (!x) {
            if (!v) {
                return m(w);
            }
            return r(w);
        }
        if (!v) {
            return s(x, w);
        }
        return i(x, w);
    }
    h.md5 = g;
    if (typeof define === "function" && define.amd) {
        define("md5", function() {
            return g;
        });
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = g;
        } else {
            h.md5 = g;
        }
    }
})(this);

var RongIMLib;

(function(r) {
    (function(s) {
        s[s.IN_BLACK_LIST = 0] = "IN_BLACK_LIST";
        s[s.NOT_IN_BLACK_LIST = 1] = "NOT_IN_BLACK_LIST";
    })(r.BlacklistStatus || (r.BlacklistStatus = {}));
    var m = r.BlacklistStatus;
    (function(s) {
        s[s.XHR_POLLING = 0] = "XHR_POLLING";
        s[s.WEBSOCKET = 1] = "WEBSOCKET";
        s[s.HTTP = 0] = "HTTP";
        s[s.HTTPS = 1] = "HTTPS";
    })(r.ConnectionChannel || (r.ConnectionChannel = {}));
    var o = r.ConnectionChannel;
    (function(s) {
        s[s.CONNECTED = 0] = "CONNECTED";
        s[s.CONNECTING = 1] = "CONNECTING";
        s[s.DISCONNECTED = 2] = "DISCONNECTED";
        s[s.KICKED_OFFLINE_BY_OTHER_CLIENT = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT";
        s[s.NETWORK_UNAVAILABLE = 3] = "NETWORK_UNAVAILABLE";
    })(r.ConnectionStatus || (r.ConnectionStatus = {}));
    var g = r.ConnectionStatus;
    (function(s) {
        s[s.DO_NOT_DISTURB = 0] = "DO_NOT_DISTURB";
        s[s.NOTIFY = 1] = "NOTIFY";
    })(r.ConversationNotificationStatus || (r.ConversationNotificationStatus = {}));
    var b = r.ConversationNotificationStatus;
    (function(s) {
        s[s.NONE = 0] = "NONE";
        s[s.PRIVATE = 1] = "PRIVATE";
        s[s.DISCUSSION = 2] = "DISCUSSION";
        s[s.GROUP = 3] = "GROUP";
        s[s.CHATROOM = 4] = "CHATROOM";
        s[s.CUSTOMER_SERVICE = 5] = "CUSTOMER_SERVICE";
        s[s.SYSTEM = 6] = "SYSTEM";
        s[s.APP_PUBLIC_SERVICE = 7] = "APP_PUBLIC_SERVICE";
        s[s.PUBLIC_SERVICE = 8] = "PUBLIC_SERVICE";
    })(r.ConversationType || (r.ConversationType = {}));
    var d = r.ConversationType;
    (function(s) {
        s[s.OPENED = 0] = "OPENED";
        s[s.CLOSED = 1] = "CLOSED";
    })(r.DiscussionInviteStatus || (r.DiscussionInviteStatus = {}));
    var e = r.DiscussionInviteStatus;
    (function(s) {
        s[s.TIMEOUT = -1] = "TIMEOUT";
        s[s.UNKNOWN = -2] = "UNKNOWN";
        s[s.SEND_FREQUENCY_TOO_FAST = 20604] = "SEND_FREQUENCY_TOO_FAST";
        s[s.NOT_IN_DISCUSSION = 21406] = "NOT_IN_DISCUSSION";
        s[s.JOIN_IN_DISCUSSION = 21407] = "JOIN_IN_DISCUSSION";
        s[s.CREATE_DISCUSSION = 21408] = "CREATE_DISCUSSION";
        s[s.INVITE_DICUSSION = 21409] = "INVITE_DICUSSION";
        s[s.NOT_IN_GROUP = 22406] = "NOT_IN_GROUP";
        s[s.NOT_IN_CHATROOM = 23406] = "NOT_IN_CHATROOM";
        s[s.GET_USERINFO_ERROR = 23407] = "GET_USERINFO_ERROR";
        s[s.FORBIDDEN_IN_CHATROOM = 23408] = "FORBIDDEN_IN_CHATROOM";
        s[s.REJECTED_BY_BLACKLIST = 405] = "REJECTED_BY_BLACKLIST";
        s[s.RC_NET_CHANNEL_INVALID = 30001] = "RC_NET_CHANNEL_INVALID";
        s[s.RC_NET_UNAVAILABLE = 30002] = "RC_NET_UNAVAILABLE";
        s[s.RC_MSG_RESP_TIMEOUT = 30003] = "RC_MSG_RESP_TIMEOUT";
        s[s.RC_HTTP_SEND_FAIL = 30004] = "RC_HTTP_SEND_FAIL";
        s[s.RC_HTTP_REQ_TIMEOUT = 30005] = "RC_HTTP_REQ_TIMEOUT";
        s[s.RC_HTTP_RECV_FAIL = 30006] = "RC_HTTP_RECV_FAIL";
        s[s.RC_NAVI_RESOURCE_ERROR = 30007] = "RC_NAVI_RESOURCE_ERROR";
        s[s.RC_NODE_NOT_FOUND = 30008] = "RC_NODE_NOT_FOUND";
        s[s.RC_DOMAIN_NOT_RESOLVE = 30009] = "RC_DOMAIN_NOT_RESOLVE";
        s[s.RC_SOCKET_NOT_CREATED = 30010] = "RC_SOCKET_NOT_CREATED";
        s[s.RC_SOCKET_DISCONNECTED = 30011] = "RC_SOCKET_DISCONNECTED";
        s[s.RC_PING_SEND_FAIL = 30012] = "RC_PING_SEND_FAIL";
        s[s.RC_PONG_RECV_FAIL = 30013] = "RC_PONG_RECV_FAIL";
        s[s.RC_MSG_SEND_FAIL = 30014] = "RC_MSG_SEND_FAIL";
        s[s.RC_CONN_ACK_TIMEOUT = 31e3] = "RC_CONN_ACK_TIMEOUT";
        s[s.RC_CONN_PROTO_VERSION_ERROR = 31001] = "RC_CONN_PROTO_VERSION_ERROR";
        s[s.RC_CONN_ID_REJECT = 31002] = "RC_CONN_ID_REJECT";
        s[s.RC_CONN_SERVER_UNAVAILABLE = 31003] = "RC_CONN_SERVER_UNAVAILABLE";
        s[s.RC_CONN_USER_OR_PASSWD_ERROR = 31004] = "RC_CONN_USER_OR_PASSWD_ERROR";
        s[s.RC_CONN_NOT_AUTHRORIZED = 31005] = "RC_CONN_NOT_AUTHRORIZED";
        s[s.RC_CONN_REDIRECTED = 31006] = "RC_CONN_REDIRECTED";
        s[s.RC_CONN_PACKAGE_NAME_INVALID = 31007] = "RC_CONN_PACKAGE_NAME_INVALID";
        s[s.RC_CONN_APP_BLOCKED_OR_DELETED = 31008] = "RC_CONN_APP_BLOCKED_OR_DELETED";
        s[s.RC_CONN_USER_BLOCKED = 31009] = "RC_CONN_USER_BLOCKED";
        s[s.RC_DISCONN_KICK = 31010] = "RC_DISCONN_KICK";
        s[s.RC_DISCONN_EXCEPTION = 31011] = "RC_DISCONN_EXCEPTION";
        s[s.RC_QUERY_ACK_NO_DATA = 32001] = "RC_QUERY_ACK_NO_DATA";
        s[s.RC_MSG_DATA_INCOMPLETE = 32002] = "RC_MSG_DATA_INCOMPLETE";
        s[s.BIZ_ERROR_CLIENT_NOT_INIT = 33001] = "BIZ_ERROR_CLIENT_NOT_INIT";
        s[s.BIZ_ERROR_DATABASE_ERROR = 33002] = "BIZ_ERROR_DATABASE_ERROR";
        s[s.BIZ_ERROR_INVALID_PARAMETER = 33003] = "BIZ_ERROR_INVALID_PARAMETER";
        s[s.BIZ_ERROR_NO_CHANNEL = 33004] = "BIZ_ERROR_NO_CHANNEL";
        s[s.BIZ_ERROR_RECONNECT_SUCCESS = 33005] = "BIZ_ERROR_RECONNECT_SUCCESS";
        s[s.BIZ_ERROR_CONNECTING = 33006] = "BIZ_ERROR_CONNECTING";
        s[s.MSG_ROAMING_SERVICE_UNAVAILABLE = 33007] = "MSG_ROAMING_SERVICE_UNAVAILABLE";
        s[s.FORBIDDEN_IN_GROUP = 22408] = "FORBIDDEN_IN_GROUP";
        s[s.CONVER_REMOVE_ERROR = 34001] = "CONVER_REMOVE_ERROR";
        s[s.CONVER_GETLIST_ERROR = 34002] = "CONVER_GETLIST_ERROR";
        s[s.CONVER_SETOP_ERROR = 34003] = "CONVER_SETOP_ERROR";
        s[s.CONVER_TOTAL_UNREAD_ERROR = 34004] = "CONVER_TOTAL_UNREAD_ERROR";
        s[s.CONVER_TYPE_UNREAD_ERROR = 34005] = "CONVER_TYPE_UNREAD_ERROR";
        s[s.CONVER_ID_TYPE_UNREAD_ERROR = 34006] = "CONVER_ID_TYPE_UNREAD_ERROR";
        s[s.GROUP_SYNC_ERROR = 35001] = "GROUP_SYNC_ERROR";
        s[s.GROUP_MATCH_ERROR = 35002] = "GROUP_MATCH_ERROR";
        s[s.CHATROOM_ID_ISNULL = 36001] = "CHATROOM_ID_ISNULL";
        s[s.CHARTOOM_JOIN_ERROR = 36002] = "CHARTOOM_JOIN_ERROR";
        s[s.CHATROOM_HISMESSAGE_ERROR = 36003] = "CHATROOM_HISMESSAGE_ERROR";
        s[s.BLACK_ADD_ERROR = 37001] = "BLACK_ADD_ERROR";
        s[s.BLACK_GETSTATUS_ERROR = 37002] = "BLACK_GETSTATUS_ERROR";
        s[s.BLACK_REMOVE_ERROR = 37003] = "BLACK_REMOVE_ERROR";
        s[s.DRAF_GET_ERROR = 38001] = "DRAF_GET_ERROR";
        s[s.DRAF_SAVE_ERROR = 38002] = "DRAF_SAVE_ERROR";
        s[s.DRAF_REMOVE_ERROR = 38003] = "DRAF_REMOVE_ERROR";
        s[s.SUBSCRIBE_ERROR = 39001] = "SUBSCRIBE_ERROR";
        s[s.QNTKN_FILETYPE_ERROR = 41001] = "QNTKN_FILETYPE_ERROR";
        s[s.QNTKN_GET_ERROR = 41002] = "QNTKN_GET_ERROR";
        s[s.COOKIE_ENABLE = 51001] = "COOKIE_ENABLE";
    })(r.ErrorCode || (r.ErrorCode = {}));
    var p = r.ErrorCode;
    (function(s) {
        s[s.IMAGE = 1] = "IMAGE";
        s[s.AUDIO = 2] = "AUDIO";
        s[s.VIDEO = 3] = "VIDEO";
        s[s.FILE = 100] = "FILE";
    })(r.MediaType || (r.MediaType = {}));
    var a = r.MediaType;
    (function(s) {
        s[s.SEND = 1] = "SEND";
        s[s.RECEIVE = 2] = "RECEIVE";
    })(r.MessageDirection || (r.MessageDirection = {}));
    var j = r.MessageDirection;
    (function(s) {
        s[s.IMAGE = 1] = "IMAGE";
        s[s.AUDIO = 2] = "AUDIO";
        s[s.VIDEO = 3] = "VIDEO";
    })(r.FileType || (r.FileType = {}));
    var l = r.FileType;
    (function(s) {
        s[s.RC_REAL_TIME_LOCATION_NOT_INIT = -1] = "RC_REAL_TIME_LOCATION_NOT_INIT";
        s[s.RC_REAL_TIME_LOCATION_SUCCESS = 0] = "RC_REAL_TIME_LOCATION_SUCCESS";
        s[s.RC_REAL_TIME_LOCATION_GPS_DISABLED = 1] = "RC_REAL_TIME_LOCATION_GPS_DISABLED";
        s[s.RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT = 2] = "RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT";
        s[s.RC_REAL_TIME_LOCATION_IS_ON_GOING = 3] = "RC_REAL_TIME_LOCATION_IS_ON_GOING";
        s[s.RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT = 4] = "RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT";
        s[s.RC_REAL_TIME_LOCATION_JOIN_FAILURE = 5] = "RC_REAL_TIME_LOCATION_JOIN_FAILURE";
        s[s.RC_REAL_TIME_LOCATION_START_FAILURE = 6] = "RC_REAL_TIME_LOCATION_START_FAILURE";
        s[s.RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE = 7] = "RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE";
    })(r.RealTimeLocationErrorCode || (r.RealTimeLocationErrorCode = {}));
    var q = r.RealTimeLocationErrorCode;
    (function(s) {
        s[s.RC_REAL_TIME_LOCATION_STATUS_IDLE = 0] = "RC_REAL_TIME_LOCATION_STATUS_IDLE";
        s[s.RC_REAL_TIME_LOCATION_STATUS_INCOMING = 1] = "RC_REAL_TIME_LOCATION_STATUS_INCOMING";
        s[s.RC_REAL_TIME_LOCATION_STATUS_OUTGOING = 2] = "RC_REAL_TIME_LOCATION_STATUS_OUTGOING";
        s[s.RC_REAL_TIME_LOCATION_STATUS_CONNECTED = 3] = "RC_REAL_TIME_LOCATION_STATUS_CONNECTED";
    })(r.RealTimeLocationStatus || (r.RealTimeLocationStatus = {}));
    var c = r.RealTimeLocationStatus;
    (function(s) {
        s[s.READ = 1] = "READ";
        s[s.LISTENED = 2] = "LISTENED";
        s[s.DOWNLOADED = 4] = "DOWNLOADED";
    })(r.ReceivedStatus || (r.ReceivedStatus = {}));
    var n = r.ReceivedStatus;
    (function(s) {
        s[s.EXACT = 0] = "EXACT";
        s[s.FUZZY = 1] = "FUZZY";
    })(r.SearchType || (r.SearchType = {}));
    var k = r.SearchType;
    (function(s) {
        s[s.SENDING = 10] = "SENDING";
        s[s.FAILED = 20] = "FAILED";
        s[s.SENT = 30] = "SENT";
        s[s.RECEIVED = 40] = "RECEIVED";
        s[s.READ = 50] = "READ";
        s[s.DESTROYED = 60] = "DESTROYED";
    })(r.SentStatus || (r.SentStatus = {}));
    var i = r.SentStatus;
    (function(s) {
        s[s.ACCEPTED = 0] = "ACCEPTED";
        s[s.UNACCEPTABLE_PROTOCOL_VERSION = 1] = "UNACCEPTABLE_PROTOCOL_VERSION";
        s[s.IDENTIFIER_REJECTED = 2] = "IDENTIFIER_REJECTED";
        s[s.SERVER_UNAVAILABLE = 3] = "SERVER_UNAVAILABLE";
        s[s.TOKEN_INCORRECT = 4] = "TOKEN_INCORRECT";
        s[s.NOT_AUTHORIZED = 5] = "NOT_AUTHORIZED";
        s[s.REDIRECT = 6] = "REDIRECT";
        s[s.PACKAGE_ERROR = 7] = "PACKAGE_ERROR";
        s[s.APP_BLOCK_OR_DELETE = 8] = "APP_BLOCK_OR_DELETE";
        s[s.BLOCK = 9] = "BLOCK";
        s[s.TOKEN_EXPIRE = 10] = "TOKEN_EXPIRE";
        s[s.DEVICE_ERROR = 11] = "DEVICE_ERROR";
    })(r.ConnectionState || (r.ConnectionState = {}));
    var h = r.ConnectionState;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var a = function() {
        function c() {}
        c.getInstance = function() {
            if (!c._instance) {
                throw new Error("RongIMClient is not initialized. Call .init() method first.");
            }
            return c._instance;
        };
        c.init = function(g, e) {
            if (!c._instance) {
                c._instance = new c();
            }
            if (document.location.protocol == "http:") {
                c.schemeType = b.ConnectionChannel.HTTP;
            } else {
                c.schemeType = b.ConnectionChannel.HTTPS;
            }
            var d = new b.FeaturePatcher();
            d.patchAll();
            c._memoryStore = {
                token: "",
                callback: null,
                hasModules: true,
                global: window,
                lastReadTime: new b.LimitableMap(),
                conversationList: [],
                appKey: g,
                publicServiceMap: new b.PublicServiceMap(),
                listenerList: [],
                providerType: 1,
                deltaTime: 0,
                filterMessages: [],
                isSyncRemoteConverList: false,
                isUseWebSQLProvider: false
            };
            c._cookieHelper = new b.CookieProvider();
            if (e && Object.prototype.toString.call(e) == "[object Object]") {
                c._dataAccessProvider = e;
                c._memoryStore.isUseWebSQLProvider = true;
            } else {
                c._dataAccessProvider = new b.ServerDataProvider();
            }
            c.MessageParams = {
                TextMessage: {
                    objectName: "RC:TxtMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                ImageMessage: {
                    objectName: "RC:ImgMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                DiscussionNotificationMessage: {
                    objectName: "RC:DizNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                VoiceMessage: {
                    objectName: "RC:VcMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                RichContentMessage: {
                    objectName: "RC:ImgTextMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                HandshakeMessage: {
                    objectName: "",
                    msgTag: new b.MessageTag(true, true)
                },
                UnknownMessage: {
                    objectName: "",
                    msgTag: new b.MessageTag(true, true)
                },
                SuspendMessage: {
                    objectName: "",
                    msgTag: new b.MessageTag(true, true)
                },
                LocationMessage: {
                    objectName: "RC:LBSMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                InformationNotificationMessage: {
                    objectName: "RC:InfoNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                ContactNotificationMessage: {
                    objectName: "RC:ContactNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                ProfileNotificationMessage: {
                    objectName: "RC:ProfileNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                CommandNotificationMessage: {
                    objectName: "RC:CmdNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                CommandMessage: {
                    objectName: "RC:CmdMsg",
                    msgTag: new b.MessageTag(false, false)
                },
                TypingStatusMessage: {
                    objectName: "RC:TypSts",
                    msgTag: new b.MessageTag(false, false)
                }
            };
            c.MessageType = {
                TextMessage: "TextMessage",
                ImageMessage: "ImageMessage",
                DiscussionNotificationMessage: "DiscussionNotificationMessage",
                VoiceMessage: "VoiceMessage",
                RichContentMessage: "RichContentMessage",
                HandshakeMessage: "HandshakeMessage",
                UnknownMessage: "UnknownMessage",
                SuspendMessage: "SuspendMessage",
                LocationMessage: "LocationMessage",
                InformationNotificationMessage: "InformationNotificationMessage",
                ContactNotificationMessage: "ContactNotificationMessage",
                ProfileNotificationMessage: "ProfileNotificationMessage",
                CommandNotificationMessage: "CommandNotificationMessage",
                CommandMessage: "CommandMessage",
                TypingStatusMessage: "TypingStatusMessage"
            };
        };
        c.connect = function(g, h) {
            b.CheckParam.getInstance().check([ "string", "object" ], "connect", true);
            c.bridge = b.Bridge.getInstance();
            c._memoryStore.token = g;
            c._memoryStore.callback = h;
            if (!navigator.cookieEnabled) {
                h.onError(b.ErrorCode.COOKIE_ENABLE);
                return;
            }
            c.bridge.connect(c._memoryStore.appKey, g, {
                onSuccess: function(i) {
                    h.onSuccess(i);
                },
                onError: function(i) {
                    if (i == b.ConnectionState.TOKEN_INCORRECT || !i) {
                        h.onTokenIncorrect();
                    } else {
                        h.onError(i);
                    }
                }
            });
            for (var e = 0, d = c._memoryStore.listenerList.length; e < d; e++) {
                c.bridge.setListener(c._memoryStore.listenerList[e]);
            }
            c._memoryStore.listenerList.length = 0;
            return c._instance;
        };
        c.reconnect = function(d) {
            c.bridge.reconnect(d);
        };
        c.registerMessageType = function(g, i, d, h) {
            if (!g) {
                throw new Error("messageType can't be empty,postion -> registerMessageType");
            }
            if (!i) {
                throw new Error("objectName can't be empty,postion -> registerMessageType");
            }
            if (Object.prototype.toString.call(h) == "[object Array]") {
                var e = b.ModelUtil.modleCreate(h);
                c.RegisterMessage[g] = e;
            } else {
                if (Object.prototype.toString.call(h) == "[object Function]" || Object.prototype.toString.call(h) == "[object Object]") {
                    if (!h.encode) {
                        throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");
                    }
                    if (!h.decode) {
                        throw new Error("decode method has not realized -> registerMessageType");
                    }
                } else {
                    throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");
                }
            }
            c.RegisterMessage[g].messageName = g;
            c.MessageType[g] = g;
            c.MessageParams[g] = {
                objectName: i,
                msgTag: d
            };
            registerMessageTypeMapping[i] = g;
        };
        c.setConnectionStatusListener = function(d) {
            if (c.bridge) {
                c.bridge.setListener(d);
            } else {
                c._memoryStore.listenerList.push(d);
            }
        };
        c.setOnReceiveMessageListener = function(d) {
            if (c.bridge) {
                c.bridge.setListener(d);
            } else {
                c._memoryStore.listenerList.push(d);
            }
        };
        c.prototype.logout = function() {
            c.bridge.disconnect();
            c.bridge = null;
        };
        c.prototype.disconnect = function() {
            c.bridge.disconnect();
        };
        c.prototype.getCurrentConnectionStatus = function() {
            return b.Bridge._client.channel.connectionStatus;
        };
        c.prototype.getConnectionChannel = function() {
            if (b.Transportations._TransportType == b.Socket.XHR_POLLING) {
                return b.ConnectionChannel.XHR_POLLING;
            } else {
                if (b.Transportations._TransportType == b.Socket.WEBSOCKET) {
                    return b.ConnectionChannel.WEBSOCKET;
                }
            }
        };
        c.prototype.getStorageProvider = function() {
            if (c._memoryStore.providerType == 1) {
                return "ServerDataProvider";
            } else {
                return "OtherDataProvider";
            }
        };
        c.prototype.setFilterMessages = function(d) {
            if (Object.prototype.toString.call(d) == "[object Array]") {
                c._memoryStore.filterMessages = d;
            }
        };
        c.prototype.getCurrentUserId = function() {
            return b.Bridge._client.userId;
        };
        c.prototype.getDeltaTime = function() {
            return c._memoryStore.deltaTime;
        };
        c.prototype.clearMessages = function(g, d, e) {
            c._dataAccessProvider.clearMessages(g, d, e);
        };
        c.prototype.clearMessagesUnreadStatus = function(g, d, e) {
            c._dataAccessProvider.updateMessages(g, d, "readStatus", null, e);
        };
        c.prototype.deleteMessages = function(h, d, e, g) {
            c._dataAccessProvider.removeMessage(h, d, e, g);
        };
        c.prototype.sendLocalMessage = function(d, e) {
            b.CheckParam.getInstance().check([ "object", "object" ], "sendLocalMessage");
            c._dataAccessProvider.updateMessage(d);
            this.sendMessage(d.conversationType, d.targetId, d.content, e);
        };
        c.prototype.sendMessage = function(e, m, h, k) {
            b.CheckParam.getInstance().check([ "number", "string", "object", "object" ], "sendMessage");
            if (!b.Bridge._client.channel) {
                k.onError(b.ErrorCode.RC_NET_UNAVAILABLE, null);
                return;
            }
            if (!b.Bridge._client.channel.socket.socket.connected) {
                k.onError(b.ErrorCode.TIMEOUT, null);
                throw new Error("connect is timeout! postion:sendMessage");
            }
            var g = new Modules.UpStreamMessage();
            g.setSessionId(c.MessageParams[h.messageName].msgTag.getMessageTag());
            g.setClassname(c.MessageParams[h.messageName].objectName);
            g.setContent(h.encode());
            var i = g.toArrayBuffer();
            if (Object.prototype.toString.call(i) == "[object ArrayBuffer]") {
                i = [].slice.call(new Int8Array(i));
            }
            var j = null, l = this, d = new b.Message();
            this.getConversation(e, m, {
                onSuccess: function(n) {
                    j = n;
                }
            });
            d.content = h;
            d.conversationType = e;
            d.senderUserId = b.Bridge._client.userId;
            d.objectName = c.MessageParams[h.messageName].objectName;
            d.targetId = m;
            d.sentTime = new Date().getTime();
            d.messageDirection = b.MessageDirection.SEND;
            d.sentStatus = b.SentStatus.SENT;
            d.messageType = h.messageName;
            if (h.messageName != "TypingStatusMessage") {
                if (!j) {
                    j = l.createConversation(e, m, "");
                }
                j.sentTime = new Date().getTime();
                j.sentStatus = b.SentStatus.SENDING;
                j.senderUserName = "";
                j.senderUserId = b.Bridge._client.userId;
                j.notificationStatus = b.ConversationNotificationStatus.DO_NOT_DISTURB;
                j.latestMessage = d;
                j.unreadMessageCount = 0;
                j.setTop();
            }
            c._dataAccessProvider.addMessage(e, m, d);
            c.bridge.pubMsg(e.valueOf(), i, m, {
                onSuccess: function(n) {
                    d.messageUId = n.messageUId;
                    d.sentTime = n.timestamp;
                    d.sentStatus = b.SentStatus.SENT;
                    if (h.messageName != "TypingStatusMessage") {
                        j.latestMessage = d;
                    }
                    k.onSuccess(d);
                },
                onError: function(n) {
                    d.sentStatus = b.SentStatus.FAILED;
                    j.latestMessage = d;
                    k.onError(n, d);
                }
            }, null);
        };
        c.prototype.sendTypingStatusMessage = function(i, e, d, h) {
            var g = this;
            if (d in c.MessageParams) {
                g.sendMessage(i, e, b.TypingStatusMessage.obtain(c.MessageParams[d].objectName, ""), {
                    onSuccess: function() {
                        h.onSuccess();
                    },
                    onError: function(j) {
                        h.onError(j, null);
                    }
                });
            }
        };
        c.prototype.sendStatusMessage = function(e, g, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.sendTextMessage = function(i, e, g, d) {
            var h = b.TextMessage.obtain(g);
            this.sendMessage(i, e, h, d);
        };
        c.prototype.insertMessage = function(i, d, g, e, h) {
            c._dataAccessProvider.addMessage(i, d, e, h);
        };
        c.prototype.getHistoryMessages = function(i, d, g, e, h) {
            b.CheckParam.getInstance().check([ "number", "string", "number|null|global|object", "number", "object" ], "getHistoryMessages");
            if (e > 20) {
                throw new Error("HistroyMessage count must be less than or equal to 20!");
            }
            if (i.valueOf() < 0) {
                throw new Error("ConversationType must be greater than -1");
            }
            c._dataAccessProvider.getHistoryMessages(i, d, g, e, h);
        };
        c.prototype.getRemoteHistoryMessages = function(k, g, i, h, j) {
            b.CheckParam.getInstance().check([ "number", "string", "number|null|global|object", "number", "object" ], "getRemoteHistoryMessages");
            if (h > 20) {
                j.onError(b.ErrorCode.RC_CONN_PROTO_VERSION_ERROR);
                return;
            }
            if (k.valueOf() < 0) {
                j.onError(b.ErrorCode.RC_CONN_PROTO_VERSION_ERROR);
                return;
            }
            var e = new Modules.HistoryMessageInput(), d = this;
            e.setTargetId(g);
            if (!i) {
                e.setDataTime(c._memoryStore.lastReadTime.get(k + g));
            } else {
                e.setDataTime(i);
            }
            e.setSize(h);
            c.bridge.queryMsg(HistoryMsgType[k], b.MessageUtil.ArrayForm(e.toArrayBuffer()), g, {
                onSuccess: function(o) {
                    c._memoryStore.lastReadTime.set(k + g, b.MessageUtil.int64ToTimestamp(o.syncTime));
                    var n = o.list.reverse();
                    for (var m = 0, l = n.length; m < l; m++) {
                        n[m] = b.MessageUtil.messageParser(n[m]);
                    }
                    j.onSuccess(n, !!o.hasMsg);
                },
                onError: function() {
                    j.onSuccess([], false);
                }
            }, "HistoryMessagesOuput");
        };
        c.prototype.hasRemoteUnreadMessages = function(d, g) {
            var e = null;
            window.RCCallback = function(h) {
                g.onSuccess(!!+h.status);
                e.parentNode.removeChild(e);
            };
            e = document.createElement("script");
            e.src = b.MessageUtil.schemeArrs[c.schemeType][0] + "://api.cn.ronghub.com/message/exist.js?appKey=" + encodeURIComponent(c._memoryStore.appKey) + "&token=" + encodeURIComponent(d) + "&callBack=RCCallback&_=" + Date.now();
            document.body.appendChild(e);
            e.onerror = function() {
                g.onError(b.ErrorCode.UNKNOWN);
                e.parentNode.removeChild(e);
            };
        };
        c.prototype.getTotalUnreadCount = function(d) {
            c._dataAccessProvider.getTotalUnreadCount(d);
        };
        c.prototype.getConversationUnreadCount = function(d, e) {
            c._dataAccessProvider.getConversationUnreadCount(d, e);
        };
        c.prototype.getUnreadCount = function(g, d, e) {
            c._dataAccessProvider.getUnreadCount(g, d, e);
        };
        c.prototype.clearUnreadCount = function(g, d, e) {
            c._dataAccessProvider.clearUnreadCount(g, d, e);
        };
        c.prototype.setMessageExtra = function(d, e, g) {
            c._dataAccessProvider.setMessageExtra(d, e, g);
        };
        c.prototype.setMessageReceivedStatus = function(e, d, g) {
            c._dataAccessProvider.setMessageReceivedStatus(e, d, g);
        };
        c.prototype.setMessageSentStatus = function(e, d, g) {
            c._dataAccessProvider.setMessageSentStatus(e, d, g);
        };
        c.prototype.clearTextMessageDraft = function(g, d) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "clearTextMessageDraft");
            var e = "darf_" + g + "_" + d;
            delete c._memoryStore[e];
            return true;
        };
        c.prototype.getTextMessageDraft = function(g, d) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getTextMessageDraft");
            if (d == "" || g < 0) {
                throw new Error("params error : " + b.ErrorCode.DRAF_GET_ERROR);
            }
            var e = "darf_" + g + "_" + d;
            return c._memoryStore[e];
        };
        c.prototype.saveTextMessageDraft = function(h, d, g) {
            b.CheckParam.getInstance().check([ "number", "string", "string", "object" ], "saveTextMessageDraft");
            var e = "darf_" + h + "_" + d;
            c._memoryStore[e] = g;
            return true;
        };
        c.prototype.clearConversations = function(g) {
            var e = [];
            for (var d = 1; d < arguments.length; d++) {
                e[d - 1] = arguments[d];
            }
            if (e.length == 0) {
                e = [ b.ConversationType.CHATROOM, b.ConversationType.CUSTOMER_SERVICE, b.ConversationType.DISCUSSION, b.ConversationType.GROUP, b.ConversationType.PRIVATE, b.ConversationType.SYSTEM, b.ConversationType.PUBLIC_SERVICE, b.ConversationType.APP_PUBLIC_SERVICE ];
            }
            c._dataAccessProvider.clearConversations(e, g);
        };
        c.prototype.getConversation = function(h, d, g) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getConversation");
            var e = c._dataAccessProvider.getConversation(h, d);
            g.onSuccess(e);
        };
        c.prototype.pottingConversation = function(d) {
            var g = c._dataAccessProvider.getConversation(d.type, d.userId), e = this, h = false;
            if (!g) {
                g = new b.Conversation();
            } else {
                h = true;
            }
            g.conversationType = d.type;
            g.targetId = d.userId;
            g.latestMessage = b.MessageUtil.messageParser(d.msg);
            g.latestMessageId = g.latestMessage.messageId;
            g.objectName = g.latestMessage.objectName;
            g.receivedStatus = g.latestMessage.receivedStatus;
            g.receivedTime = g.latestMessage.receiveTime;
            g.sentStatus = g.latestMessage.sentStatus;
            g.sentTime = g.latestMessage.sentTime;
            if (!h) {
                g.unreadMessageCount = 0;
            }
            if (g.conversationType == b.ConversationType.DISCUSSION) {
                e.getDiscussion(d.userId, {
                    onSuccess: function(i) {
                        g.conversationTitle = i.name;
                    },
                    onError: function(i) {}
                });
            }
            c._dataAccessProvider.addConversation(g, {
                onSuccess: function(i) {}
            });
        };
        c.prototype.sortConversationList = function(e) {
            var l = [];
            for (var h = 0, d = e.length; h < d; h++) {
                if (e[h].isTop) {
                    l.push(e[h]);
                    e.splice(h, 1);
                    continue;
                }
                for (var g = 0; g < d - h - 1; g++) {
                    if (e[g].sentTime < e[g + 1].sentTime) {
                        var k = e[g];
                        e[g] = e[g + 1];
                        e[g + 1] = k;
                    }
                }
            }
            c._memoryStore.conversationList = l.concat(e);
        };
        c.prototype.getConversationList = function(g, e) {
            b.CheckParam.getInstance().check([ "object", "null|array|object|global" ], "getConversationList");
            var d = this;
            c._dataAccessProvider.getConversationList({
                onSuccess: function(h) {
                    if (e) {
                        g.onSuccess(h);
                    } else {
                        d.sortConversationList(c._memoryStore.conversationList);
                        g.onSuccess(c._memoryStore.conversationList);
                    }
                }
            }, e);
        };
        c.prototype.getRemoteConversationList = function(h, g) {
            b.CheckParam.getInstance().check([ "object", "null|array|object|global" ], "getRemoteConversationList");
            var e = new Modules.RelationsInput(), d = this;
            e.setType(1);
            c.bridge.queryMsg(26, b.MessageUtil.ArrayForm(e.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(l) {
                    if (l.info) {
                        for (var k = 0, j = l.info.length; k < j; k++) {
                            d.pottingConversation(l.info[k]);
                        }
                    }
                    if (g) {
                        var m = [];
                        Array.forEach(g, function(i) {
                            Array.forEach(c._memoryStore.conversationList, function(n) {
                                if (n.conversationType == i) {
                                    m.push(n);
                                }
                            });
                        });
                        h.onSuccess(m);
                    } else {
                        h.onSuccess(c._memoryStore.conversationList);
                    }
                },
                onError: function() {
                    h.onSuccess([]);
                }
            }, "RelationsOutput");
        };
        c.prototype.createConversation = function(h, d, e) {
            b.CheckParam.getInstance().check([ "number", "string", "string" ], "createConversation");
            var g = new b.Conversation();
            g.targetId = d;
            g.conversationType = h;
            g.conversationTitle = e;
            g.latestMessage = {};
            g.unreadMessageCount = 0;
            c._dataAccessProvider.addConversation(g, {
                onSuccess: function(i) {}
            });
            return g;
        };
        c.prototype.removeConversation = function(h, d, g) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "removeConversation");
            var e = new Modules.RelationsInput();
            e.setType(h);
            c.bridge.queryMsg(27, b.MessageUtil.ArrayForm(e.toArrayBuffer()), d, {
                onSuccess: function() {
                    c._dataAccessProvider.removeConversation(h, d, {
                        onSuccess: function() {
                            g.onSuccess(true);
                        },
                        onError: function() {
                            g.onError(b.ErrorCode.CONVER_REMOVE_ERROR);
                        }
                    });
                },
                onError: function() {
                    g.onError(b.ErrorCode.CONVER_REMOVE_ERROR);
                }
            });
        };
        c.prototype.setConversationToTop = function(g, d, e) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "setConversationToTop");
            c._dataAccessProvider.setConversationToTop(g, d, e);
        };
        c.prototype.getConversationNotificationStatus = function(g, d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.setConversationNotificationStatus = function(h, e, d, g) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getNotificationQuietHours = function(d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.removeNotificationQuietHours = function(d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.setNotificationQuietHours = function(e, d, g) {
            throw new Error("Not implemented yet");
        };
        c.prototype.addMemberToDiscussion = function(d, g, h) {
            b.CheckParam.getInstance().check([ "string", "array", "object" ], "addMemberToDiscussion");
            var e = new Modules.ChannelInvitationInput();
            e.setUsers(g);
            c.bridge.queryMsg(0, b.MessageUtil.ArrayForm(e.toArrayBuffer()), d, {
                onSuccess: function() {
                    h.onSuccess();
                },
                onError: function() {
                    h.onError(b.ErrorCode.JOIN_IN_DISCUSSION);
                }
            });
        };
        c.prototype.createDiscussion = function(g, h, i) {
            b.CheckParam.getInstance().check([ "string", "array", "object" ], "createDiscussion");
            var e = new Modules.CreateDiscussionInput(), d = this;
            e.setName(g);
            c.bridge.queryMsg(1, b.MessageUtil.ArrayForm(e.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(j) {
                    if (h.length > 0) {
                        d.addMemberToDiscussion(j, h, {
                            onSuccess: function() {},
                            onError: function(k) {
                                i.onError(k);
                            }
                        });
                    }
                    i.onSuccess(j);
                },
                onError: function() {
                    i.onError(b.ErrorCode.CREATE_DISCUSSION);
                }
            }, "CreateDiscussionOutput");
        };
        c.prototype.getDiscussion = function(d, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "getDiscussion");
            var e = new Modules.ChannelInfoInput();
            e.setNothing(1);
            c.bridge.queryMsg(4, b.MessageUtil.ArrayForm(e.toArrayBuffer()), d, g, "ChannelInfoOutput");
        };
        c.prototype.quitDiscussion = function(d, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "quitDiscussion");
            var e = new Modules.LeaveChannelInput();
            e.setNothing(1);
            c.bridge.queryMsg(7, b.MessageUtil.ArrayForm(e.toArrayBuffer()), d, g);
        };
        c.prototype.removeMemberFromDiscussion = function(d, g, h) {
            b.CheckParam.getInstance().check([ "string", "string", "object" ], "removeMemberFromDiscussion");
            var e = new Modules.ChannelEvictionInput();
            e.setUser(g);
            c.bridge.queryMsg(9, b.MessageUtil.ArrayForm(e.toArrayBuffer()), d, h);
        };
        c.prototype.setDiscussionInviteStatus = function(d, e, h) {
            b.CheckParam.getInstance().check([ "string", "number", "object" ], "setDiscussionInviteStatus");
            var g = new Modules.ModifyPermissionInput();
            g.setOpenStatus(e.valueOf());
            c.bridge.queryMsg(11, b.MessageUtil.ArrayForm(g.toArrayBuffer()), d, {
                onSuccess: function(i) {
                    h.onSuccess();
                },
                onError: function() {
                    h.onError(b.ErrorCode.INVITE_DICUSSION);
                }
            });
        };
        c.prototype.setDiscussionName = function(d, g, h) {
            b.CheckParam.getInstance().check([ "string", "string", "object" ], "setDiscussionName");
            var e = new Modules.RenameChannelInput();
            e.setName(g);
            c.bridge.queryMsg(12, b.MessageUtil.ArrayForm(e.toArrayBuffer()), d, h);
        };
        c.prototype.joinGroup = function(e, i, h) {
            b.CheckParam.getInstance().check([ "string", "string", "object" ], "joinGroup");
            var d = new Modules.GroupInfo();
            d.setId(e);
            d.setName(i);
            var g = new Modules.GroupInput();
            g.setGroupInfo([ d ]);
            c.bridge.queryMsg(6, b.MessageUtil.ArrayForm(g.toArrayBuffer()), e, h, "GroupOutput");
        };
        c.prototype.quitGroup = function(e, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "quitGroup");
            var d = new Modules.LeaveChannelInput();
            d.setNothing(1);
            c.bridge.queryMsg(8, b.MessageUtil.ArrayForm(d.toArrayBuffer()), e, g);
        };
        c.prototype.syncGroup = function(e, m) {
            b.CheckParam.getInstance().check([ "array", "object" ], "syncGroup");
            for (var j = 0, h = [], l = [], d = e.length; j < d; j++) {
                if (h.length === 0 || !(e[j].id in h)) {
                    h.push(e[j].id);
                    var k = new Modules.GroupInfo();
                    k.setId(e[j].id);
                    k.setName(e[j].name);
                    l.push(k);
                }
            }
            var g = new Modules.GroupHashInput();
            g.setUserId(b.Bridge._client.userId);
            g.setGroupHashCode(md5(h.sort().join("")));
            c.bridge.queryMsg(13, b.MessageUtil.ArrayForm(g.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(i) {
                    if (i === 1) {
                        var n = new Modules.GroupInput();
                        n.setGroupInfo(l);
                        c.bridge.queryMsg(20, b.MessageUtil.ArrayForm(n.toArrayBuffer()), b.Bridge._client.userId, {
                            onSuccess: function() {
                                m.onSuccess();
                            },
                            onError: function() {
                                m.onError(b.ErrorCode.GROUP_MATCH_ERROR);
                            }
                        }, "GroupOutput");
                    } else {
                        m.onSuccess();
                    }
                },
                onError: function() {
                    m.onError(b.ErrorCode.GROUP_SYNC_ERROR);
                }
            }, "GroupHashOutput");
        };
        c.prototype.joinChatRoom = function(i, d, h) {
            b.CheckParam.getInstance().check([ "string", "number", "object" ], "joinChatRoom");
            if (i != "") {
                b.Bridge._client.chatroomId = i;
            } else {
                h.onError(b.ErrorCode.CHATROOM_ID_ISNULL);
                return;
            }
            var g = new Modules.ChrmInput();
            g.setNothing(1);
            c.bridge.queryMsg(19, b.MessageUtil.ArrayForm(g.toArrayBuffer()), i, {
                onSuccess: function() {
                    h.onSuccess();
                    var e = new Modules.ChrmPullMsg();
                    d == 0 && (d = -1);
                    e.setCount(d);
                    e.setSyncTime(0);
                    b.Bridge._client.queryMessage("chrmPull", b.MessageUtil.ArrayForm(e.toArrayBuffer()), i, 1, {
                        onSuccess: function(r) {
                            var p = b.MessageUtil.int64ToTimestamp(r.syncTime);
                            c._cookieHelper.setItem(b.Bridge._client.userId + "CST", p);
                            var q = r.list;
                            if (c._memoryStore.filterMessages.length > 0) {
                                for (var o = 0, n = q.length; o < n; o++) {
                                    for (var m = 0, l = c._memoryStore.filterMessages.length; m < l; m++) {
                                        if (c.MessageParams[c._memoryStore.filterMessages[m]].objectName != q[o].classname) {
                                            b.Bridge._client.handler.onReceived(q[o]);
                                        }
                                    }
                                }
                            } else {
                                for (var o = 0, k = q.length; o < k; o++) {
                                    b.Bridge._client.handler.onReceived(q[o]);
                                }
                            }
                        },
                        onError: function(j) {
                            h.onError(b.ErrorCode.CHATROOM_HISMESSAGE_ERROR);
                        }
                    }, "DownStreamMessages");
                },
                onError: function() {
                    h.onError(b.ErrorCode.CHARTOOM_JOIN_ERROR);
                }
            }, "ChrmOutput");
        };
        c.prototype.quitChatRoom = function(h, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "quitChatRoom");
            var d = new Modules.ChrmInput();
            d.setNothing(1);
            c.bridge.queryMsg(17, b.MessageUtil.ArrayForm(d.toArrayBuffer()), h, g, "ChrmOutput");
        };
        c.prototype.getRemotePublicServiceList = function(g, j, i, h) {
            var e = new Modules.PullMpInput(), d = this;
            if (!i) {
                e.setTime(0);
            } else {
                e.setTime(c._memoryStore.lastReadTime.get(j + b.Bridge._client.userId));
            }
            e.setMpid("");
            c.bridge.queryMsg(28, b.MessageUtil.ArrayForm(e.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(k) {
                    c._memoryStore.publicServiceMap.publicServiceList.length = 0;
                    c._memoryStore.publicServiceMap.publicServiceList = k;
                },
                onError: function() {}
            }, "PullMpOutput");
        };
        c.prototype.getPublicServiceList = function(d) {
            b.CheckParam.getInstance().check([ "object" ], "getPublicServiceList");
            d.onSuccess(c._memoryStore.publicServiceMap.publicServiceList);
        };
        c.prototype.getPublicServiceProfile = function(d, g, h) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getPublicServiceProfile");
            var e = c._memoryStore.publicServiceMap.get(d, g);
            h.onSuccess(e);
        };
        c.prototype.pottingPublicSearchType = function(e, d) {
            var g = 0;
            if (e == 0) {
                g |= 3;
                if (d == 0) {
                    g |= 12;
                } else {
                    g |= 48;
                }
            } else {
                if (e == 1) {
                    g |= 1;
                    if (d == 0) {
                        g |= 8;
                    } else {
                        g |= 32;
                    }
                } else {
                    g |= 2;
                    if (e == 0) {
                        g |= 4;
                    } else {
                        g |= 16;
                    }
                }
            }
            return g;
        };
        c.prototype.searchPublicService = function(e, g, h) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "searchPublicService");
            var d = new Modules.SearchMpInput();
            d.setType(this.pottingPublicSearchType(0, e));
            d.setId(g);
            c.bridge.queryMsg(29, b.MessageUtil.ArrayForm(d.toArrayBuffer()), b.Bridge._client.userId, h, "SearchMpOutput");
        };
        c.prototype.searchPublicServiceByType = function(d, g, h, j) {
            b.CheckParam.getInstance().check([ "number", "number", "string", "object" ], "searchPublicServiceByType");
            var i = d == b.ConversationType.APP_PUBLIC_SERVICE ? 2 : 1;
            var e = new Modules.SearchMpInput();
            e.setType(this.pottingPublicSearchType(i, g));
            e.setId(h);
            c.bridge.queryMsg(29, b.MessageUtil.ArrayForm(e.toArrayBuffer()), b.Bridge._client.userId, j, "SearchMpOutput");
        };
        c.prototype.subscribePublicService = function(e, i, j) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "subscribePublicService");
            var g = new Modules.MPFollowInput(), h = this, d = e == b.ConversationType.APP_PUBLIC_SERVICE ? "mcFollow" : "mpFollow";
            g.setId(i);
            c.bridge.queryMsg(d, b.MessageUtil.ArrayForm(g.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function() {
                    h.getRemotePublicServiceList(null, null, null, {
                        onSuccess: function() {},
                        onError: function() {}
                    });
                    j.onSuccess();
                },
                onError: function() {
                    j.onError(b.ErrorCode.SUBSCRIBE_ERROR);
                }
            }, "MPFollowOutput");
        };
        c.prototype.unsubscribePublicService = function(e, i, j) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "unsubscribePublicService");
            var g = new Modules.MPFollowInput(), h = this, d = e == b.ConversationType.APP_PUBLIC_SERVICE ? "mcUnFollow" : "mpUnFollow";
            g.setId(i);
            c.bridge.queryMsg(d, b.MessageUtil.ArrayForm(g.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function() {
                    c._memoryStore.publicServiceMap.remove(e, i);
                    j.onSuccess();
                },
                onError: function() {
                    j.onError(b.ErrorCode.SUBSCRIBE_ERROR);
                }
            }, "MPFollowOutput");
        };
        c.prototype.addToBlacklist = function(e, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "addToBlacklist");
            var d = new Modules.Add2BlackListInput();
            d.setUserId(e);
            c.bridge.queryMsg(21, b.MessageUtil.ArrayForm(d.toArrayBuffer()), e, {
                onSuccess: function() {
                    g.onSuccess();
                },
                onError: function() {
                    g.onError(b.ErrorCode.BLACK_ADD_ERROR);
                }
            });
        };
        c.prototype.getBlacklist = function(e) {
            b.CheckParam.getInstance().check([ "object" ], "getBlacklist");
            var d = new Modules.QueryBlackListInput();
            d.setNothing(1);
            c.bridge.queryMsg(23, b.MessageUtil.ArrayForm(d.toArrayBuffer()), b.Bridge._client.userId, e, "QueryBlackListOutput");
        };
        c.prototype.getBlacklistStatus = function(e, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "getBlacklistStatus");
            var d = new Modules.BlackListStatusInput();
            d.setUserId(e);
            c.bridge.queryMsg(24, b.MessageUtil.ArrayForm(d.toArrayBuffer()), e, {
                onSuccess: function(h) {
                    g.onSuccess(b.BlacklistStatus[h]);
                },
                onError: function() {
                    g.onError(b.ErrorCode.BLACK_GETSTATUS_ERROR);
                }
            });
        };
        c.prototype.removeFromBlacklist = function(e, g) {
            b.CheckParam.getInstance().check([ "string", "object" ], "removeFromBlacklist");
            var d = new Modules.RemoveFromBlackListInput();
            d.setUserId(e);
            c.bridge.queryMsg(22, b.MessageUtil.ArrayForm(d.toArrayBuffer()), e, {
                onSuccess: function() {
                    g.onSuccess();
                },
                onError: function() {
                    g.onError(b.ErrorCode.BLACK_REMOVE_ERROR);
                }
            });
        };
        c.prototype.getFileToken = function(d, g) {
            b.CheckParam.getInstance().check([ "number", "object" ], "getQnTkn");
            if (!/(1|2|3)/.test(d.toString())) {
                g.onError(b.ErrorCode.QNTKN_FILETYPE_ERROR);
                return;
            }
            var e = new Modules.GetQNupTokenInput();
            e.setType(d);
            c.bridge.queryMsg(30, b.MessageUtil.ArrayForm(e.toArrayBuffer()), b.Bridge._client.userId, g, "GetQNupTokenOutput");
        };
        c.prototype.getFileUrl = function(d, h, g) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getQnTkn");
            if (!/(1|2|3)/.test(d.toString())) {
                g.onError(b.ErrorCode.QNTKN_FILETYPE_ERROR);
                return;
            }
            var e = new Modules.GetQNdownloadUrlInput();
            e.setType(d);
            e.setKey(h);
            c.bridge.queryMsg(31, b.MessageUtil.ArrayForm(e.toArrayBuffer()), b.Bridge._client.userId, g, "GetQNdownloadUrlOutput");
        };
        c.prototype.addRealTimeLocationListener = function(g, d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getRealTimeLocation = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getRealTimeLocationCurrentState = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getRealTimeLocationParticipants = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.joinRealTimeLocation = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.quitRealTimeLocation = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.startRealTimeLocation = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.updateRealTimeLocationStatus = function(h, d, g, e) {
            throw new Error("Not implemented yet");
        };
        c.MessageType = {};
        c.RegisterMessage = {};
        c._memoryStore = {};
        c.isNotPullMsg = false;
        return c;
    }();
    b.RongIMClient = a;
    if ("function" === typeof require && "object" === typeof module && module && module.id && "object" === typeof exports && exports) {
        module.exports = b;
    } else {
        if ("function" === typeof define && define.amd) {
            define("RongIMLib", [ "md5", "//cdn.ronghub.com/Long.js", "//cdn.ronghub.com/byteBuffer.js", "//cdn.ronghub.com/protobuf-min-2.7.js" ], function() {
                return b;
            });
        } else {
            window.RongIMClient = a;
        }
    }
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(i) {
    (function(k) {
        k[k.AT_MOST_ONCE = 0] = "AT_MOST_ONCE";
        k[k.AT_LEAST_ONCE = 1] = "AT_LEAST_ONCE";
        k[k.EXACTLY_ONCE = 2] = "EXACTLY_ONCE";
        k[k.DEFAULT = 3] = "DEFAULT";
    })(i.Qos || (i.Qos = {}));
    var j = i.Qos;
    (function(k) {
        k[k.CONNECT = 1] = "CONNECT";
        k[k.CONNACK = 2] = "CONNACK";
        k[k.PUBLISH = 3] = "PUBLISH";
        k[k.PUBACK = 4] = "PUBACK";
        k[k.QUERY = 5] = "QUERY";
        k[k.QUERYACK = 6] = "QUERYACK";
        k[k.QUERYCON = 7] = "QUERYCON";
        k[k.SUBSCRIBE = 8] = "SUBSCRIBE";
        k[k.SUBACK = 9] = "SUBACK";
        k[k.UNSUBSCRIBE = 10] = "UNSUBSCRIBE";
        k[k.UNSUBACK = 11] = "UNSUBACK";
        k[k.PINGREQ = 12] = "PINGREQ";
        k[k.PINGRESP = 13] = "PINGRESP";
        k[k.DISCONNECT = 14] = "DISCONNECT";
    })(i.Type || (i.Type = {}));
    var a = i.Type;
    var g = [ "invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz", [ "", "ppMsgP", "pdMsgP", "pgMsgP", "chatMsg", "pcMsgP", "", "pmcMsgN", "pmpMsgN" ], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm", "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation", "pullMp", "schMp", "qnTkn", "qnUrl" ];
    var e = function() {
        function k(m, l, n) {
            this.connectionStatus = -1;
            this.url = m.host + "/websocket?appId=" + n.appId + "&token=" + encodeURIComponent(n.token) + "&sdkVer=" + n.sdkVer + "&apiVer=" + n.apiVer;
            this.self = n;
            this.socket = b.getInstance().createServer();
            this.socket.connect(this.url, l);
            if (typeof k._ConnectionStatusListener == "object" && "onChanged" in k._ConnectionStatusListener) {
                var o = this;
                o.socket.on("StatusChanged", function(p) {
                    if (p === i.ConnectionStatus.DISCONNECTED) {
                        k._ConnectionStatusListener.onChanged(i.ConnectionStatus.DISCONNECTED);
                        n.clearHeartbeat();
                        return;
                    }
                    o.connectionStatus = p;
                    k._ConnectionStatusListener.onChanged(p);
                });
            } else {
                throw new Error("setConnectStatusListener:Parameter format is incorrect");
            }
            this.socket.on("message", n.handler.handleMessage);
            this.socket.on("disconnect", function(p) {
                n.channel.socket.fire("StatusChanged", p ? p : 2);
            });
        }
        k.prototype.writeAndFlush = function(l) {
            this.socket.send(l);
        };
        k.prototype.reconnect = function(l) {
            i.MessageIdHandler.clearMessageId();
            this.socket = this.socket.reconnect();
            if (l) {
                this.self.reconnectObj = l;
            }
        };
        k.prototype.disconnect = function(l) {
            this.socket.disconnect(l);
        };
        return k;
    }();
    i.Channel = e;
    var b = function() {
        function k() {
            this.socket = null;
            this._events = {};
        }
        k.getInstance = function() {
            return new k();
        };
        k.prototype.connect = function(m, l) {
            if (this.socket) {
                if (m) {
                    this.on("connect", l || new Function());
                }
                if (m) {
                    this.currentURL = m;
                }
                this.socket.createTransport(m);
            }
            return this;
        };
        k.prototype.createServer = function() {
            var l = this.getTransport(this.checkTransport());
            if (l === null) {
                throw new Error("the channel was not supported");
            }
            return l;
        };
        k.prototype.getTransport = function(l) {
            if (l == k.XHR_POLLING) {
                this.socket = new i.PollingTransportation(this);
            } else {
                if (l == k.WEBSOCKET) {
                    this.socket = new i.SocketTransportation(this);
                }
            }
            return this;
        };
        k.prototype.send = function(l) {
            if (this.socket) {
                if (this.checkTransport() == k.WEBSOCKET) {
                    this.socket.send(l);
                } else {
                    this.socket.send(this._encode(l));
                }
            }
        };
        k.prototype.onMessage = function(l) {
            this.fire("message", l);
        };
        k.prototype.disconnect = function(l) {
            this.socket.disconnect(l);
            this.fire("disconnect", l);
            return this;
        };
        k.prototype.reconnect = function() {
            if (this.currentURL) {
                return this.connect(this.currentURL, null);
            } else {
                throw new Error("reconnect:no have URL");
            }
        };
        k.prototype.checkTransport = function() {
            if (i.RongIMClient._memoryStore.global.WEB_XHR_POLLING) {
                i.Transportations._TransportType = k.XHR_POLLING;
            }
            return i.Transportations._TransportType;
        };
        k.prototype.fire = function(l, m) {
            if (l in this._events) {
                for (var n = 0, o = this._events[l].length; n < o; n++) {
                    this._events[l][n](m);
                }
            }
            return this;
        };
        k.prototype.on = function(l, m) {
            if (!(typeof m == "function" && l)) {
                return this;
            }
            if (l in this._events) {
                i.MessageUtil.indexOf(this._events, m) == -1 && this._events[l].push(m);
            } else {
                this._events[l] = [ m ];
            }
            return this;
        };
        k.prototype.removeEvent = function(m, p) {
            if (m in this._events) {
                for (var o = 0, n = this._events[m].length; o < n; o++) {
                    if (this._events[m][o] == p) {
                        this._events[m].splice(o, 1);
                    }
                }
            }
            return this;
        };
        k.prototype._encode = function(l) {
            var m = "?messageid=" + l.getMessageId() + "&header=" + l.getHeaderFlag() + "&sessionid=" + i.RongIMClient._cookieHelper.getItem(i.Navigation.Endpoint.userId + "sId");
            if (!/(PubAckMessage|QueryConMessage)/.test(l._name)) {
                m += "&topic=" + l.getTopic() + "&targetid=" + (l.getTargetId() || "");
            }
            return {
                url: m,
                data: "getData" in l ? l.getData() : ""
            };
        };
        k.XHR_POLLING = "xhr-polling";
        k.WEBSOCKET = "websocket";
        return k;
    }();
    i.Socket = b;
    var c = function() {
        function k(l, m) {
            this.timeoutMillis = 1e5;
            this.timeout_ = 0;
            this.sdkVer = "2.0.6";
            this.apiVer = Math.floor(Math.random() * 1e6);
            this.channel = null;
            this.handler = null;
            this.userId = "";
            this.reconnectObj = {};
            this.heartbeat = 0;
            this.chatroomId = "";
            this.SyncTimeQueue = [];
            this.token = l;
            this.appId = m;
            this.SyncTimeQueue.state = "complete";
        }
        k.prototype.resumeTimer = function() {
            if (!this.timeout_) {
                this.timeout_ = setTimeout(function() {
                    if (!this.timeout_) {
                        return;
                    }
                    try {
                        this.channel.disconnect();
                    } catch (l) {
                        throw new Error(l);
                    }
                    clearTimeout(this.timeout_);
                    this.timeout_ = 0;
                    this.channel.reconnect();
                    this.channel.socket.fire("StatusChanged", 5);
                }, this.timeoutMillis);
            }
        };
        k.prototype.pauseTimer = function() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
                this.timeout_ = 0;
            }
        };
        k.prototype.connect = function(l) {
            if (i.Navigation.Endpoint.host) {
                if (i.Transportations._TransportType == b.WEBSOCKET) {
                    if (!window.WebSocket) {
                        l.onError(i.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION);
                        return;
                    }
                }
                this.handler = new h(this);
                this.handler.setConnectCallback(l);
                var m = this;
                this.channel = new e(i.Navigation.Endpoint, function() {
                    i.Transportations._TransportType == b.WEBSOCKET && m.keepLive();
                }, this);
                this.channel.socket.fire("StatusChanged", 1);
            } else {
                l.onError(i.ConnectionState.NOT_AUTHORIZED);
            }
        };
        k.prototype.keepLive = function() {
            if (this.heartbeat > 0) {
                clearInterval(this.heartbeat);
            }
            var l = this;
            this.heartbeat = setInterval(function() {
                l.resumeTimer();
                l.channel.writeAndFlush(new i.PingReqMessage());
            }, 3e4);
        };
        k.prototype.clearHeartbeat = function() {
            clearInterval(this.heartbeat);
            this.heartbeat = 0;
            this.pauseTimer();
        };
        k.prototype.publishMessage = function(q, n, m, l, r) {
            var o = i.MessageIdHandler.messageIdPlus(this.channel.reconnect);
            if (!o) {
                return;
            }
            var p = new i.PublishMessage(q, n, m);
            p.setMessageId(o);
            if (l) {
                p.setQos(j.AT_LEAST_ONCE);
                this.handler.putCallback(new i.PublishCallback(l.onSuccess, l.onError), p.getMessageId(), r);
            } else {
                p.setQos(j.AT_MOST_ONCE);
            }
            this.channel.writeAndFlush(p);
        };
        k.prototype.queryMessage = function(r, n, m, o, l, s) {
            if (r == "userInf") {
                if (k.userInfoMapping[m]) {
                    l.onSuccess(k.userInfoMapping[m]);
                    return;
                }
            }
            var p = i.MessageIdHandler.messageIdPlus(this.channel.reconnect);
            if (!p) {
                return;
            }
            var q = new i.QueryMessage(r, n, m);
            q.setMessageId(p);
            q.setQos(o);
            this.handler.putCallback(new i.QueryCallback(l.onSuccess, l.onError), q.getMessageId(), s);
            this.channel.writeAndFlush(q);
        };
        k.prototype.invoke = function(s) {
            var m, n, q, r = this, p, t = this.SyncTimeQueue.shift();
            if (t == undefined) {
                return;
            }
            if (!window.Modules) {
                var l = new Date().getTime() + 200, o = new Date().getTime();
                while (o < l) {
                    o = new Date().getTime();
                }
            }
            this.SyncTimeQueue.state = "pending";
            if (t.type != 2) {
                m = i.RongIMClient._cookieHelper.getItem(this.userId) || "0";
                n = new Modules.SyncRequestMsg();
                n.setIspolling(false);
                q = "pullMsg";
                p = this.userId;
            } else {
                m = i.RongIMClient._cookieHelper.getItem(this.userId + "CST") || "0";
                n = new Modules.ChrmPullMsg();
                n.setCount(0);
                q = "chrmPull";
                if (this.chatroomId === "") {
                    throw new Error("syncTime:Received messages of chatroom but was not init");
                }
                p = this.chatroomId;
            }
            if (t.pulltime <= m) {
                this.SyncTimeQueue.state = "complete";
                this.invoke();
                return;
            }
            if (s) {
                n.setIsPullSend(true);
            }
            n.setSyncTime(m);
            this.queryMessage(q, i.MessageUtil.ArrayForm(n.toArrayBuffer()), p, j.AT_LEAST_ONCE, {
                onSuccess: function(y) {
                    r.SyncTimeQueue.state = "complete";
                    var v = i.MessageUtil.int64ToTimestamp(y.syncTime), x = r.userId;
                    if (q == "chrmPull") {
                        x += "CST";
                    }
                    i.RongIMClient._memoryStore.isSyncRemoteConverList = true;
                    i.RongIMClient._cookieHelper.setItem(x, v);
                    r.invoke();
                    var w = y.list;
                    for (var u = 0; u < w.length; u++) {
                        d._client.handler.onReceived(w[u]);
                    }
                },
                onError: function() {
                    r.SyncTimeQueue.state = "complete";
                    r.invoke();
                }
            }, "DownStreamMessages");
        };
        k.prototype.syncTime = function(l, m) {
            this.SyncTimeQueue.push({
                type: l,
                pulltime: m
            });
            if (this.SyncTimeQueue.length == 1 && this.SyncTimeQueue.state == "complete") {
                this.invoke(!l);
            }
        };
        k.prototype.__init = function(l) {
            this.channel = new e(i.Navigation.Endpoint, l, this);
        };
        k.userInfoMapping = {};
        return k;
    }();
    i.Client = c;
    var d = function() {
        function k() {}
        k.getInstance = function() {
            return new k();
        };
        k.prototype.connect = function(n, l, m) {
            if (!window.Modules) {
                i.RongIMClient._memoryStore.hasModules = false;
                return;
            }
            k._client = new i.Navigation().connect(n, l, m);
            return k._client;
        };
        k.prototype.setListener = function(l) {
            if (typeof l == "object") {
                if (typeof l.onChanged == "function") {
                    e._ConnectionStatusListener = l;
                } else {
                    if (typeof l.onReceived == "function") {
                        e._ReceiveMessageListener = l;
                    }
                }
            }
        };
        k.prototype.reconnect = function(l) {
            k._client.channel.reconnect(l);
        };
        k.prototype.disconnect = function() {
            k._client.clearHeartbeat();
            k._client.channel.disconnect(2);
        };
        k.prototype.queryMsg = function(m, n, l, p, o) {
            if (typeof m != "string") {
                m = g[m];
            }
            k._client.queryMessage(m, n, l, j.AT_MOST_ONCE, p, o);
        };
        k.prototype.pubMsg = function(m, n, l, p, o) {
            k._client.publishMessage(g[10][m], n, l, p, o);
        };
        return k;
    }();
    i.Bridge = d;
    var h = function() {
        function k(l) {
            this.map = {};
            this.connectCallback = null;
            if (!e._ReceiveMessageListener) {
                throw new Error("please set onReceiveMessageListener");
            }
            this._onReceived = e._ReceiveMessageListener.onReceived;
            this._client = l;
            this.syncMsgMap = new Object();
        }
        k.prototype.putCallback = function(l, n, o) {
            var m = {
                Callback: l,
                Message: o
            };
            m.Callback.resumeTimer();
            this.map[n] = m;
        };
        k.prototype.setConnectCallback = function(l) {
            if (l) {
                this.connectCallback = new i.ConnectAck(l.onSuccess, l.onError, this._client);
                this.connectCallback.resumeTimer();
            }
        };
        k.prototype.onReceived = function(s, n) {
            var m, q, l;
            if (s._name != "PublishMessage") {
                m = s;
                i.RongIMClient._cookieHelper.setItem(this._client.userId, i.MessageUtil.int64ToTimestamp(m.dataTime));
            } else {
                if (s.getTopic() == "s_ntf") {
                    m = Modules.NotifyMsg.decode(s.getData());
                    this._client.syncTime(m.type, i.MessageUtil.int64ToTimestamp(m.time));
                    return;
                } else {
                    if (s.getTopic() == "s_msg") {
                        m = Modules.DownStreamMessage.decode(s.getData());
                        i.RongIMClient._cookieHelper.setItem(this._client.userId, i.MessageUtil.int64ToTimestamp(m.dataTime));
                    } else {
                        if (d._client.sdkVer && d._client.sdkVer == "1.0.0") {
                            return;
                        }
                        m = Modules.UpStreamMessage.decode(s.getData());
                        var r = s.getTopic();
                        var o = r.substr(0, 2);
                        m.groupId = s.getTargetId();
                        if (o == "pp") {
                            m.type = 1;
                        } else {
                            if (o == "pd") {
                                m.type = 2;
                            } else {
                                if (o == "pg") {
                                    m.type = 3;
                                } else {
                                    if (o == "chat") {
                                        m.type = 4;
                                    }
                                }
                            }
                        }
                        m.fromUserId = this._client.userId;
                        m.dataTime = Date.parse(new Date().toString());
                    }
                }
                if (!m) {
                    return;
                }
            }
            q = i.MessageUtil.messageParser(m, this._onReceived);
            if (n) {
                q.messageUId = n.getMessageUId();
                q.sentTime = n.getTimestamp();
            }
            if (q === null) {
                return;
            }
            if (q.messageType != "TypingStatusMessage") {
                l = i.RongIMClient._dataAccessProvider.getConversation(q.conversationType, q.targetId);
                if (!l) {
                    l = i.RongIMClient.getInstance().createConversation(q.conversationType, q.targetId, "");
                }
                if (l.conversationType != 0) {
                    l.unreadMessageCount = l.unreadMessageCount + 1;
                    if (i.MessageUtil.supportLargeStorage()) {
                        var p = i.LocalStorageProvider.getInstance().getItem("cu" + d._client.userId + l.conversationType + l.targetId);
                        i.LocalStorageProvider.getInstance().setItem("cu" + d._client.userId + l.conversationType + q.targetId, Number(p) + 1);
                    }
                }
                l.receivedTime = new Date().getTime();
                l.receivedStatus = i.ReceivedStatus.READ;
                l.senderUserId = q.sendUserId;
                l.notificationStatus = i.ConversationNotificationStatus.DO_NOT_DISTURB;
                l.latestMessageId = q.messageId;
                l.latestMessage = q;
                l.sentTime = q.sentTime;
                l.setTop();
            }else {
                for (var key in RongIMClient.MessageParams) {
                    if (RongIMClient.MessageParams[key].objectName == q.content.typingContentType) {
                        q.content.typingContentType = key;
                    }
                }
            }
            this._onReceived(q);
        };
        k.prototype.handleMessage = function(n) {
            if (!n) {
                return;
            }
            switch (n._name) {
              case "ConnAckMessage":
                d._client.handler.connectCallback.process(n.getStatus(), n.getUserId(), n.getTimestamp());
                break;

              case "PublishMessage":
                if (n.getQos() != 0) {
                    d._client.channel.writeAndFlush(new i.PubAckMessage(n.getMessageId()));
                }
                if (n.getSyncMsg() && n.getQos() != 0) {
                    d._client.handler.syncMsgMap[n.getMessageId()] = n;
                } else {
                    d._client.handler.onReceived(n);
                }
                break;

              case "QueryAckMessage":
                if (n.getQos() != 0) {
                    d._client.channel.writeAndFlush(new i.QueryConMessage(n.getMessageId()));
                }
                var l = d._client.handler.map[n.getMessageId()];
                if (l) {
                    l.Callback.process(n.getStatus(), n.getData(), n.getDate(), l.Message);
                    delete d._client.handler.map[n.getMessageId()];
                }
                break;

              case "PubAckMessage":
                var m = d._client.handler.map[n.getMessageId()];
                if (m) {
                    m.Callback.process(n.getStatus() || 0, n.getMessageUId(), n.getTimestamp(), m.Message);
                    delete d._client.handler.map[n.getMessageId()];
                } else {
                    d._client.handler.onReceived(d._client.handler.syncMsgMap[n.messageId], n);
                    delete d._client.handler.syncMsgMap[n.getMessageId()];
                }
                break;

              case "PingRespMessage":
                d._client.pauseTimer();
                break;

              case "DisconnectMessage":
                d._client.channel.disconnect(n.getStatus());
                break;

              default:            }
        };
        return k;
    }();
    i.MessageHandler = h;
})(RongIMLib || (RongIMLib = {}));

var __extends = this && this.__extends || function(g, a) {
    for (var e in a) {
        if (a.hasOwnProperty(e)) {
            g[e] = a[e];
        }
    }
    function c() {
        this.constructor = g;
    }
    g.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
};

var RongIMLib;

(function(c) {
    var g = function() {
        function h(i) {
            this.timeout = null;
            this.onError = null;
            if (i && typeof i == "number") {
                this.timeoutMillis = i;
            } else {
                this.timeoutMillis = 3e4;
                this.onError = i;
            }
        }
        h.prototype.resumeTimer = function() {
            var i = this;
            if (this.timeoutMillis > 0 && !this.timeout) {
                this.timeout = setTimeout(function() {
                    i.readTimeOut(true);
                }, this.timeoutMillis);
            }
        };
        h.prototype.pauseTimer = function() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        h.prototype.readTimeOut = function(i) {
            if (i && this.onError) {
                this.onError(c.ErrorCode.TIMEOUT);
            } else {
                this.pauseTimer();
            }
        };
        return h;
    }();
    c.MessageCallback = g;
    var e = function() {
        function h() {
            this.publicServiceList = [];
        }
        h.getInstance = function() {
            return new h();
        };
        h.prototype.pottingProfile = function(j) {
            var i;
            this.profile = new c.PublicServiceProfile();
            i = JSON.parse(j.extra);
            this.profile.isGlobal = i.isGlobal;
            this.profile.introduction = i.introduction;
            this.profile.menu = i.menu;
            this.profile.hasFollowed = i.follow;
            this.profile.publicServiceId = j.mpid;
            this.profile.name = j.name;
            this.profile.portraitUri = j.portraitUrl;
            this.profile.conversationType = j.type == "mc" ? c.ConversationType.APP_PUBLIC_SERVICE : c.ConversationType.PUBLIC_SERVICE;
            this.publicServiceList.push(this.profile);
        };
        h.prototype.mapping = function(l, i) {
            switch (i) {
              case "GetUserInfoOutput":
                var j = new c.UserInfo(l.userId, l.userName, l.userPortrait);
                return j;

              case "GetQNupTokenOutput":
                return {
                    deadline: c.MessageUtil.int64ToTimestamp(l.deadline),
                    token: l.token
                };

              case "GetQNdownloadUrlOutput":
                return {
                    downloadUrl: l.downloadUrl
                };

              case "CreateDiscussionOutput":
                return l.id;

              case "ChannelInfoOutput":
                var m = new c.Discussion();
                m.creatorId = l.adminUserId;
                m.id = l.channelId;
                m.memberIdList = l.firstTenUserIds;
                m.name = l.channelName;
                m.isOpen = l.openStatus;
                return m;

              case "GroupHashOutput":
                return l.result;

              case "QueryBlackListOutput":
                return l.userIds;

              case "SearchMpOutput":
              case "PullMpOutput":
                if (l.info) {
                    var k = this;
                    Array.forEach(l.info, function(n) {
                        setTimeout(k.pottingProfile(n), 100);
                    });
                }
                return this.publicServiceList;

              default:
                return l;
            }
        };
        return h;
    }();
    c.CallbackMapping = e;
    var b = function(i) {
        __extends(h, i);
        function h(k, j) {
            i.call(this, j);
            this._cb = k;
            this._timeout = j;
        }
        h.prototype.process = function(j, l, k, m) {
            this.readTimeOut();
            if (j == 0) {
                if (m) {
                    m.setSentStatus = j;
                }
                this._cb({
                    messageUId: l,
                    timestamp: k
                });
            } else {
                this._timeout(j);
            }
        };
        h.prototype.readTimeOut = function(j) {
            g.prototype.readTimeOut.call(this, j);
        };
        return h;
    }(g);
    c.PublishCallback = b;
    var a = function(i) {
        __extends(h, i);
        function h(k, j) {
            i.call(this, j);
            this._cb = k;
            this._timeout = j;
        }
        h.prototype.process = function(j, l, k, n) {
            this.readTimeOut();
            if (n && l && j == 0) {
                try {
                    l = e.getInstance().mapping(Modules[n].decode(l), n);
                } catch (m) {
                    this._timeout(c.ErrorCode.UNKNOWN);
                    return;
                }
                if ("GetUserInfoOutput" == n) {
                    c.Client.userInfoMapping[l.userId] = l;
                }
                this._cb(l);
            } else {
                j > 0 ? this._timeout(j) : this._cb(j);
            }
        };
        h.prototype.readTimeOut = function(j) {
            g.prototype.readTimeOut.call(this, j);
        };
        return h;
    }(g);
    c.QueryCallback = a;
    var d = function(i) {
        __extends(h, i);
        function h(l, k, j) {
            i.call(this, k);
            this._client = j;
            this._cb = l;
            this._timeout = k;
        }
        h.prototype.process = function(l, n, p) {
            this.readTimeOut();
            if (l == 0) {
                var q = c.RongIMClient._cookieHelper.getItem(c.RongIMClient._cookieHelper.getItemKey("navi"));
                var m = c.RongIMClient._cookieHelper.getItemKey("navi");
                var k = decodeURIComponent(q).split(",");
                if (!k[1]) {
                    q = encodeURIComponent(q) + n;
                    c.RongIMClient._cookieHelper.setItem(m, q);
                }
                if (c.RongIMClient._memoryStore.isUseWebSQLProvider) {
                    c.RongIMClient._dataAccessProvider.database.init(n);
                }
                this._client.userId = n;
                if (!c.RongIMClient.isNotPullMsg) {
                    this._client.syncTime();
                }
                if (this._client.reconnectObj.onSuccess) {
                    this._client.reconnectObj.onSuccess(n);
                    delete this._client.reconnectObj.onSuccess;
                } else {
                    var o = this;
                    setTimeout(function() {
                        o._cb(n);
                    }, 500);
                }
                c.Bridge._client.channel.socket.fire("StatusChanged", 0);
                c.RongIMClient._memoryStore.deltaTime = new Date().getTime() - p;
            } else {
                if (l == 6) {
                    var j = {};
                    var o = this;
                    new c.Navigation().getServerEndpoint(this._client.token, this._client.appId, function() {
                        o._client.clearHeartbeat();
                        new c.Client(o._client.token, o._client.appId).__init.call(j, function() {
                            c.Transportations._TransportType == "websocket" && o._client.keepLive();
                        });
                        o._client.channel.socket.fire("StatusChanged", 2);
                    }, o._timeout, false);
                } else {
                    if (this._client.reconnectObj.onError) {
                        this._client.reconnectObj.onError(l);
                        delete this._client.reconnectObj.onError;
                    } else {
                        this._timeout(l);
                    }
                }
            }
        };
        h.prototype.readTimeOut = function(j) {
            g.prototype.readTimeOut.call(this, j);
        };
        return h;
    }(g);
    c.ConnectAck = d;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {
            window.getServerEndpoint = function(d) {
                a.RongIMClient._cookieHelper._host = c.Endpoint.host = d.server;
                var e = a.RongIMClient._cookieHelper.getItemKey("navi");
                e !== null && a.RongIMClient._cookieHelper.removeItem(e);
                a.RongIMClient._cookieHelper.setItem("navi" + md5(a.Bridge._client.token).slice(8, 16), d.server + "," + (d.userId || ""));
            };
        }
        c.prototype.connect = function(i, g, j) {
            var e = a.RongIMClient._cookieHelper.getItem("appId");
            if (e && e != i) {
                a.RongIMClient._cookieHelper.clearItem();
                a.RongIMClient._cookieHelper.setItem("appId", i);
            }
            if (!e) {
                a.RongIMClient._cookieHelper.setItem("appId", i);
            }
            var d = new a.Client(g, i);
            var h = this;
            this.getServerEndpoint(g, i, function() {
                d.connect(j);
            }, j.onError, true);
            return d;
        };
        c.prototype.getServerEndpoint = function(m, g, h, n, i) {
            if (i) {
                var k = md5(m).slice(8, 16), l = a.RongIMClient._cookieHelper.getItem(a.RongIMClient._cookieHelper.getItemKey("navi")), o = a.RongIMClient._cookieHelper.getItem("navi" + k);
                if (l == o && o !== null && a.RongIMClient._cookieHelper.getItem("rongSDK") == a.Transportations._TransportType) {
                    var j = decodeURIComponent(l).split(",");
                    setTimeout(function() {
                        a.RongIMClient._cookieHelper._host = c.Endpoint.host = j[0];
                        c.Endpoint.userId = j[1];
                        h();
                    }, 500);
                    return;
                }
            }
            var e = {
                "navUrl-Debug": a.MessageUtil.schemeArrs[a.RongIMClient.schemeType][0] + "://119.254.111.49:9100/",
                "navUrl-Release": a.MessageUtil.schemeArrs[a.RongIMClient.schemeType][0] + "://nav.cn.ronghub.com/"
            }, d = document.createElement("script");
            d.src = e["navUrl-Release"] + (a.RongIMClient._memoryStore.global.WEB_XHR_POLLING ? "cometnavi.js" : "navi.js") + "?appId=" + g + "&token=" + encodeURIComponent(m) + "&callBack=getServerEndpoint&t=" + new Date().getTime();
            document.body.appendChild(d);
            d.onerror = function() {
                n(a.ConnectionState.TOKEN_INCORRECT);
            };
            if ("onload" in d) {
                d.onload = h;
            } else {
                d.onreadystatechange = function() {
                    d.readyState == "loaded" && h();
                };
            }
        };
        c.Endpoint = new Object();
        return c;
    }();
    a.Navigation = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(n) {
    var k = function() {
        function o(p) {
            this._name = "BaseMessage";
            this.lengthSize = 0;
            if (p instanceof n.Header) {
                this._header = p;
            } else {
                this._header = new n.Header(p, false, n.Qos.AT_MOST_ONCE, false);
            }
        }
        o.prototype.read = function(p, q) {
            this.readMessage(p, q);
        };
        o.prototype.write = function(r) {
            var p = new n.BinaryHelper();
            var q = p.convertStream(r);
            this._headerCode = this.getHeaderFlag();
            q.write(this._headerCode);
            this.writeMessage(q);
            return q;
        };
        o.prototype.getHeaderFlag = function() {
            return this._header.encode();
        };
        o.prototype.getLengthSize = function() {
            return this.lengthSize;
        };
        o.prototype.toBytes = function() {
            return this.write([]).getBytesArray();
        };
        o.prototype.isRetained = function() {
            return this._header.retain;
        };
        o.prototype.setRetained = function(p) {
            this._header.retain = p;
        };
        o.prototype.setQos = function(p) {
            this._header.qos = Object.prototype.toString.call(p) == "[object Object]" ? p : n.Qos[p];
        };
        o.prototype.setDup = function(p) {
            this._header.dup = p;
        };
        o.prototype.isDup = function() {
            return this._header.dup;
        };
        o.prototype.getType = function() {
            return this._header.type;
        };
        o.prototype.getQos = function() {
            return this._header.qos;
        };
        o.prototype.messageLength = function() {
            return 0;
        };
        o.prototype.writeMessage = function(p) {};
        o.prototype.readMessage = function(p, q) {};
        o.prototype.init = function(p) {
            var r, s, q = this;
            for (s in p) {
                if (!p.hasOwnProperty(s)) {
                    continue;
                }
                r = s.replace(/^\w/, function(t) {
                    var u = t.charCodeAt(0);
                    return "set" + (u >= 97 ? String.fromCharCode(u & ~32) : t);
                });
                if (r in q) {
                    if (s == "status") {
                        q[r](disconnectStatus[p[s]] ? disconnectStatus[p[s]] : p[s]);
                    } else {
                        q[r](p[s]);
                    }
                }
            }
        };
        return o;
    }();
    n.BaseMessage = k;
    var c = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, arguments.length == 0 || arguments.length == 3 ? n.Type.CONNECT : arguments[0]);
            this._name = "ConnectMessage";
            this.CONNECT_HEADER_SIZE = 12;
            this.protocolId = "RCloud";
            this.binaryHelper = new n.BinaryHelper();
            this.protocolVersion = 3;
            switch (arguments.length) {
              case 0:
              case 1:
              case 3:
                if (!arguments[0] || arguments[0].length > 64) {
                    throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0]);
                }
                this.clientId = arguments[0];
                this.cleanSession = arguments[1];
                this.keepAlive = arguments[2];
                break;
            }
        }
        o.prototype.messageLength = function() {
            var q = this.binaryHelper.toMQttString(this.clientId).length;
            q += this.binaryHelper.toMQttString(this.willTopic).length;
            q += this.binaryHelper.toMQttString(this.will).length;
            q += this.binaryHelper.toMQttString(this.appId).length;
            q += this.binaryHelper.toMQttString(this.token).length;
            return q + this.CONNECT_HEADER_SIZE;
        };
        o.prototype.readMessage = function(s) {
            this.protocolId = s.readUTF();
            this.protocolVersion = s.readByte();
            var r = s.readByte();
            this.hasAppId = (r & 128) > 0;
            this.hasToken = (r & 64) > 0;
            this.retainWill = (r & 32) > 0;
            this.willQos = r >> 3 & 3;
            this.hasWill = (r & 4) > 0;
            this.cleanSession = (r & 32) > 0;
            this.keepAlive = s.read() * 256 + s.read();
            this.clientId = s.readUTF();
            if (this.hasWill) {
                this.willTopic = s.readUTF();
                this.will = s.readUTF();
            }
            if (this.hasAppId) {
                try {
                    this.appId = s.readUTF();
                } catch (q) {
                    throw new Error(q);
                }
            }
            if (this.hasToken) {
                try {
                    this.token = s.readUTF();
                } catch (q) {
                    throw new Error(q);
                }
            }
            return s;
        };
        o.prototype.writeMessage = function(r) {
            var s = this.binaryHelper.convertStream(r);
            s.writeUTF(this.protocolId);
            s.write(this.protocolVersion);
            var q = this.cleanSession ? 2 : 0;
            q |= this.hasWill ? 4 : 0;
            q |= this.willQos ? this.willQos >> 3 : 0;
            q |= this.retainWill ? 32 : 0;
            q |= this.hasToken ? 64 : 0;
            q |= this.hasAppId ? 128 : 0;
            s.write(q);
            s.writeChar(this.keepAlive);
            s.writeUTF(this.clientId);
            if (this.hasWill) {
                s.writeUTF(this.willTopic);
                s.writeUTF(this.will);
            }
            if (this.hasAppId) {
                s.writeUTF(this.appId);
            }
            if (this.hasToken) {
                s.writeUTF(this.token);
            }
            return s;
        };
        return o;
    }(k);
    n.ConnectMessage = c;
    var m = function(o) {
        __extends(p, o);
        function p(r) {
            o.call(this, arguments.length == 0 ? n.Type.CONNACK : arguments.length == 1 ? arguments[0] instanceof n.Header ? arguments[0] : n.Type.CONNACK : null);
            this._name = "ConnAckMessage";
            this.MESSAGE_LENGTH = 2;
            this.binaryHelper = new n.BinaryHelper();
            var q = this;
            switch (arguments.length) {
              case 0:
              case 1:
                if (!(arguments[0] instanceof n.Header)) {
                    if (arguments[0] in n.ConnectionState) {
                        if (arguments[0] == null) {
                            throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");
                        }
                        q.setStatus(arguments[0]);
                    }
                }
                break;
            }
        }
        p.prototype.messageLength = function() {
            var q = this.MESSAGE_LENGTH;
            if (this.userId) {
                q += this.binaryHelper.toMQttString(this.userId).length;
            }
            return q;
        };
        p.prototype.readMessage = function(s, r) {
            s.read();
            var q = +s.read();
            if (q >= 0 && q <= 9) {
                this.setStatus(q);
            } else {
                throw new Error("Unsupported CONNACK code:" + q);
            }
            if (r > this.MESSAGE_LENGTH) {
                this.setUserId(s.readUTF());
                var u = s.readUTF();
                var t = s.readLong();
                this.setTimestamp(t);
            }
        };
        p.prototype.writeMessage = function(q) {
            var r = this.binaryHelper.convertStream(q);
            r.write(128);
            switch (+status) {
              case 0:
              case 1:
              case 2:
              case 5:
              case 6:
                r.write(+status);
                break;

              case 3:
              case 4:
                r.write(3);
                break;

              default:
                throw new Error("Unsupported CONNACK code:" + status);
            }
            if (this.userId) {
                r.writeUTF(this.userId);
            }
            return r;
        };
        p.prototype.setStatus = function(q) {
            this.status = q;
        };
        p.prototype.setUserId = function(q) {
            this.userId = q;
        };
        p.prototype.getStatus = function() {
            return this.status;
        };
        p.prototype.getUserId = function() {
            return this.userId;
        };
        p.prototype.setTimestamp = function(q) {
            this.timestrap = q;
        };
        p.prototype.getTimestamp = function() {
            return this.timestrap;
        };
        return p;
    }(k);
    n.ConnAckMessage = m;
    var h = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, q instanceof n.Header ? q : n.Type.DISCONNECT);
            this._name = "DisconnectMessage";
            this.MESSAGE_LENGTH = 2;
            this.binaryHelper = new n.BinaryHelper();
            if (!(q instanceof n.Header)) {
                if (q in n.ConnectionStatus) {
                    this.status = q;
                }
            }
        }
        o.prototype.messageLength = function() {
            return this.MESSAGE_LENGTH;
        };
        o.prototype.readMessage = function(r) {
            r.read();
            var q = +r.read();
            if (q >= 0 && q <= 5) {
                this.setStatus(disconnectStatus[q] ? disconnectStatus[q] : q);
            } else {
                throw new Error("Unsupported CONNACK code:" + q);
            }
        };
        o.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            q.write(0);
            if (+status >= 1 && +status <= 3) {
                q.write(+status - 1);
            } else {
                throw new Error("Unsupported CONNACK code:" + status);
            }
        };
        o.prototype.setStatus = function(q) {
            this.status = q;
        };
        o.prototype.getStatus = function() {
            return this.status;
        };
        return o;
    }(k);
    n.DisconnectMessage = h;
    var d = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, q && q instanceof n.Header ? q : n.Type.PINGREQ);
            this._name = "PingReqMessage";
        }
        return o;
    }(k);
    n.PingReqMessage = d;
    var e = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q && q instanceof n.Header ? q : n.Type.PINGRESP);
            this._name = "PingRespMessage";
        }
        return p;
    }(k);
    n.PingRespMessage = e;
    var l = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q);
            this._name = "RetryableMessage";
            this.binaryHelper = new n.BinaryHelper();
        }
        p.prototype.messageLength = function() {
            return 2;
        };
        p.prototype.writeMessage = function(u) {
            var s = this.binaryHelper.convertStream(u), q = this.getMessageId(), t = q & 255, r = (q & 65280) >> 8;
            s.write(r);
            s.write(t);
            return s;
        };
        p.prototype.readMessage = function(r, q) {
            var s = r.read() * 256 + r.read();
            this.setMessageId(parseInt(s, 10));
        };
        p.prototype.setMessageId = function(q) {
            this.messageId = q;
        };
        p.prototype.getMessageId = function() {
            return this.messageId;
        };
        return p;
    }(k);
    n.RetryableMessage = l;
    var b = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q instanceof n.Header ? q : n.Type.PUBACK);
            this.msgLen = 2;
            this.date = 0;
            this.millisecond = 0;
            this.timestamp = 0;
            this.binaryHelper = new n.BinaryHelper();
            this._name = "PubAckMessage";
            if (!(q instanceof n.Header)) {
                o.prototype.setMessageId.call(this, q);
            }
        }
        p.prototype.messageLength = function() {
            return this.msgLen;
        };
        p.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            l.prototype.writeMessage.call(this, q);
        };
        p.prototype.readMessage = function(r, q) {
            l.prototype.readMessage.call(this, r);
            this.date = r.readInt();
            this.status = r.read() * 256 + r.read();
            this.millisecond = r.read() * 256 + r.read();
            this.timestamp = this.date * 1e3 + this.millisecond;
            this.messageUId = r.readUTF();
        };
        p.prototype.setStatus = function(q) {
            this.status = q;
        };
        p.prototype.setTimestamp = function(q) {
            this.timestamp = q;
        };
        p.prototype.setMessageUId = function(q) {
            this.messageUId = q;
        };
        p.prototype.getStatus = function() {
            return this.status;
        };
        p.prototype.getDate = function() {
            return this.date;
        };
        p.prototype.getTimestamp = function() {
            return this.timestamp;
        };
        p.prototype.getMessageUId = function() {
            return this.messageUId;
        };
        return p;
    }(l);
    n.PubAckMessage = b;
    var g = function(o) {
        __extends(p, o);
        function p(s, q, r) {
            o.call(this, arguments.length == 1 && s instanceof n.Header ? s : arguments.length == 3 ? n.Type.PUBLISH : 0);
            this._name = "PublishMessage";
            this.binaryHelper = new n.BinaryHelper();
            this.syncMsg = false;
            if (arguments.length == 3) {
                this.topic = s;
                this.targetId = r;
                this.data = typeof q == "string" ? this.binaryHelper.toMQttString(q) : q;
            }
        }
        p.prototype.messageLength = function() {
            var q = 10;
            q += this.binaryHelper.toMQttString(this.topic).length;
            q += this.binaryHelper.toMQttString(this.targetId).length;
            q += this.data.length;
            return q;
        };
        p.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            q.writeUTF(this.topic);
            q.writeUTF(this.targetId);
            l.prototype.writeMessage.apply(this, arguments);
            q.write(this.data);
        };
        p.prototype.readMessage = function(r, q) {
            var s = 6;
            this.date = r.readInt();
            this.topic = r.readUTF();
            s += this.binaryHelper.toMQttString(this.topic).length;
            this.targetId = r.readUTF();
            s += this.binaryHelper.toMQttString(this.targetId).length;
            l.prototype.readMessage.apply(this, arguments);
            this.data = new Array(q - s);
            this.data = r.read(this.data);
        };
        p.prototype.setTopic = function(q) {
            this.topic = q;
        };
        p.prototype.setData = function(q) {
            this.data = q;
        };
        p.prototype.setTargetId = function(q) {
            this.targetId = q;
        };
        p.prototype.setDate = function(q) {
            this.date = q;
        };
        p.prototype.setSyncMsg = function(q) {
            this.syncMsg = q;
        };
        p.prototype.getSyncMsg = function() {
            return this.syncMsg;
        };
        p.prototype.getTopic = function() {
            return this.topic;
        };
        p.prototype.getData = function() {
            return this.data;
        };
        p.prototype.getTargetId = function() {
            return this.targetId;
        };
        p.prototype.getDate = function() {
            return this.date;
        };
        return p;
    }(l);
    n.PublishMessage = g;
    var j = function(p) {
        __extends(o, p);
        function o(s, q, r) {
            p.call(this, s instanceof n.Header ? s : arguments.length == 3 ? n.Type.QUERY : null);
            this.binaryHelper = new n.BinaryHelper();
            this._name = "QueryMessage";
            if (arguments.length == 3) {
                this.data = typeof q == "string" ? this.binaryHelper.toMQttString(q) : q;
                this.topic = s;
                this.targetId = r;
            }
        }
        o.prototype.messageLength = function() {
            var q = 0;
            q += this.binaryHelper.toMQttString(this.topic).length;
            q += this.binaryHelper.toMQttString(this.targetId).length;
            q += 2;
            q += this.data.length;
            return q;
        };
        o.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            q.writeUTF(this.topic);
            q.writeUTF(this.targetId);
            l.prototype.writeMessage.call(this, q);
            q.write(this.data);
        };
        o.prototype.readMessage = function(r, q) {
            var s = 0;
            this.topic = r.readUTF();
            this.targetId = r.readUTF();
            s += this.binaryHelper.toMQttString(this.topic).length;
            s += this.binaryHelper.toMQttString(this.targetId).length;
            this.readMessage.apply(this, arguments);
            s += 2;
            this.data = new Array(q - s);
            r.read(this.data);
        };
        o.prototype.setTopic = function(q) {
            this.topic = q;
        };
        o.prototype.setData = function(q) {
            this.data = q;
        };
        o.prototype.setTargetId = function(q) {
            this.targetId = q;
        };
        o.prototype.getTopic = function() {
            return this.topic;
        };
        o.prototype.getData = function() {
            return this.data;
        };
        o.prototype.getTargetId = function() {
            return this.targetId;
        };
        return o;
    }(l);
    n.QueryMessage = j;
    var i = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, q instanceof n.Header ? q : n.Type.QUERYCON);
            this._name = "QueryConMessage";
            if (!(q instanceof n.Header)) {
                p.prototype.setMessageId.call(this, q);
            }
        }
        return o;
    }(l);
    n.QueryConMessage = i;
    var a = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q);
            this._name = "QueryAckMessage";
            this.binaryHelper = new n.BinaryHelper();
        }
        p.prototype.readMessage = function(r, q) {
            l.prototype.readMessage.call(this, r);
            this.date = r.readInt();
            this.setStatus(r.read() * 256 + r.read());
            if (q > 0) {
                this.data = new Array(q - 8);
                this.data = r.read(this.data);
            }
        };
        p.prototype.getData = function() {
            return this.data;
        };
        p.prototype.getStatus = function() {
            return this.status;
        };
        p.prototype.getDate = function() {
            return this.date;
        };
        p.prototype.setDate = function(q) {
            this.date = q;
        };
        p.prototype.setStatus = function(q) {
            this.status = q;
        };
        p.prototype.setData = function(q) {
            this.data = q;
        };
        return p;
    }(l);
    n.QueryAckMessage = a;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(d) {
    var e = function() {
        function h(j) {
            var i = new d.BinaryHelper();
            this.out = i.convertStream(j);
        }
        h.prototype.writeMessage = function(i) {
            if (i instanceof d.BaseMessage) {
                i.write(this.out);
            }
        };
        return h;
    }();
    d.MessageOutputStream = e;
    var b = function() {
        function h(j, i) {
            if (!i) {
                var k = new d.BinaryHelper().convertStream(j);
                this.flags = k.readByte();
                this._in = k;
            } else {
                this.flags = j.headerCode;
            }
            this.header = new d.Header(this.flags);
            this.isPolling = i;
            this.In = j;
        }
        h.prototype.readMessage = function() {
            switch (this.header.getType()) {
              case 1:
                this.msg = new d.ConnectMessage(this.header);
                break;

              case 2:
                this.msg = new d.ConnAckMessage(this.header);
                break;

              case 3:
                this.msg = new d.PublishMessage(this.header);
                this.msg.setSyncMsg(this.header.getSyncMsg());
                break;

              case 4:
                this.msg = new d.PubAckMessage(this.header);
                break;

              case 5:
                this.msg = new d.QueryMessage(this.header);
                break;

              case 6:
                this.msg = new d.QueryAckMessage(this.header);
                break;

              case 7:
                this.msg = new d.QueryConMessage(this.header);
                break;

              case 9:
              case 11:
              case 13:
                this.msg = new d.PingRespMessage(this.header);
                break;

              case 8:
              case 10:
              case 12:
                this.msg = new d.PingReqMessage(this.header);
                break;

              case 14:
                this.msg = new d.DisconnectMessage(this.header);
                break;

              default:
                throw new Error("No support for deserializing " + this.header.getType() + " messages");
            }
            if (this.isPolling) {
                this.msg.init(this.In);
            } else {
                this.msg.read(this._in, this.In.length - 1);
            }
            return this.msg;
        };
        return h;
    }();
    d.MessageInputStream = b;
    var g = function() {
        function h(i, j, k, l) {
            this.retain = false;
            this.qos = d.Qos.AT_LEAST_ONCE;
            this.dup = false;
            this.syncMsg = false;
            if (i && +i == i && arguments.length == 1) {
                this.retain = (i & 1) > 0;
                this.qos = (i & 6) >> 1;
                this.dup = (i & 8) > 0;
                this.type = i >> 4 & 15;
                this.syncMsg = (i & 8) == 8;
            } else {
                this.type = i;
                this.retain = j;
                this.qos = k;
                this.dup = l;
            }
        }
        h.prototype.getSyncMsg = function() {
            return this.syncMsg;
        };
        h.prototype.getType = function() {
            return this.type;
        };
        h.prototype.encode = function() {
            var i = this;
            switch (this.qos) {
              case d.Qos[0]:
                i.qos = d.Qos.AT_MOST_ONCE;
                break;

              case d.Qos[1]:
                i.qos = d.Qos.AT_LEAST_ONCE;
                break;

              case d.Qos[2]:
                i.qos = d.Qos.EXACTLY_ONCE;
                break;

              case d.Qos[3]:
                i.qos = d.Qos.DEFAULT;
                break;
            }
            var j = this.type << 4;
            j |= this.retain ? 1 : 0;
            j |= this.qos << 1;
            j |= this.dup ? 8 : 0;
            return j;
        };
        h.prototype.toString = function() {
            return "Header [type=" + this.type + ",retain=" + this.retain + ",qos=" + this.qos + ",dup=" + this.dup + "]";
        };
        return h;
    }();
    d.Header = g;
    var c = function() {
        function h() {}
        h.prototype.writeUTF = function(p, m) {
            var k = [], o = 0;
            for (var l = 0, j = p.length; l < j; l++) {
                var n = p.charCodeAt(l);
                if (n >= 0 && n <= 127) {
                    o += 1;
                    k.push(n);
                } else {
                    if (n >= 128 && n <= 2047) {
                        o += 2;
                        k.push(192 | 31 & n >> 6);
                        k.push(128 | 63 & n);
                    } else {
                        if (n >= 2048 && n <= 65535) {
                            o += 3;
                            k.push(224 | 15 & n >> 12);
                            k.push(128 | 63 & n >> 6);
                            k.push(128 | 63 & n);
                        }
                    }
                }
            }
            for (var l = 0, j = k.length; l < j; l++) {
                if (k[l] > 255) {
                    k[l] &= 255;
                }
            }
            if (m) {
                return k;
            }
            if (o <= 255) {
                return [ 0, o ].concat(k);
            } else {
                return [ o >> 8, o & 255 ].concat(k);
            }
        };
        h.prototype.readUTF = function(m) {
            if (Object.prototype.toString.call(m) == "[object String]") {
                return m;
            }
            var j = "", o = m;
            for (var k = 0, n = o.length; k < n; k++) {
                if (o[k] < 0) {
                    o[k] += 256;
                }
                var l = o[k].toString(2), r = l.match(/^1+?(?=0)/);
                if (r && l.length == 8) {
                    var p = r[0].length, q = o[k].toString(2).slice(7 - p);
                    for (var s = 1; s < p; s++) {
                        q += o[s + k].toString(2).slice(2);
                    }
                    j += String.fromCharCode(parseInt(q, 2));
                    k += p - 1;
                } else {
                    j += String.fromCharCode(o[k]);
                }
            }
            return j;
        };
        h.prototype.convertStream = function(i) {
            if (i instanceof a) {
                return i;
            } else {
                return new a(i);
            }
        };
        h.prototype.toMQttString = function(i) {
            return this.writeUTF(i);
        };
        return h;
    }();
    d.BinaryHelper = c;
    var a = function() {
        function h(i) {
            this.position = 0;
            this.writen = 0;
            this.poolLen = 0;
            this.binaryHelper = new c();
            this.pool = i;
            this.poolLen = i.length;
        }
        h.prototype.check = function() {
            return this.position >= this.pool.length;
        };
        h.prototype.readInt = function() {
            if (this.check()) {
                return -1;
            }
            var j = "";
            for (var l = 0; l < 4; l++) {
                var k = this.pool[this.position++].toString(16);
                if (k.length == 1 && l > 1) {
                    k = "0" + k;
                }
                j += k.toString(16);
            }
            return parseInt(j, 16);
        };
        h.prototype.readLong = function() {
            if (this.check()) {
                return -1;
            }
            var j = "";
            for (var l = 0; l < 8; l++) {
                var k = this.pool[this.position++].toString(16);
                if (k.length == 1 && l > 1) {
                    k = "0" + k;
                }
                j += k;
            }
            return parseInt(j, 16);
        };
        h.prototype.readTimestamp = function() {
            if (this.check()) {
                return -1;
            }
            var j = "";
            for (var k = 0; k < 8; k++) {
                j += this.pool[this.position++].toString(16);
            }
            j = j.substring(2, 8);
            return parseInt(j, 16);
        };
        h.prototype.readUTF = function() {
            if (this.check()) {
                return -1;
            }
            var i = this.readByte() << 8 | this.readByte();
            return this.binaryHelper.readUTF(this.pool.subarray(this.position, this.position += i));
        };
        h.prototype.readByte = function() {
            if (this.check()) {
                return -1;
            }
            var i = this.pool[this.position++];
            if (i > 255) {
                i &= 255;
            }
            return i;
        };
        h.prototype.read = function(i) {
            if (i) {
                return this.pool.subarray(this.position, this.poolLen);
            } else {
                return this.readByte();
            }
        };
        h.prototype.write = function(j) {
            var i = j;
            if (Object.prototype.toString.call(i).toLowerCase() == "[object array]") {
                [].push.apply(this.pool, i);
            } else {
                if (+i == i) {
                    if (i > 255) {
                        i &= 255;
                    }
                    this.pool.push(i);
                    this.writen++;
                }
            }
            return i;
        };
        h.prototype.writeChar = function(i) {
            if (+i != i) {
                throw new Error("writeChar:arguments type is error");
            }
            this.write(i >> 8 & 255);
            this.write(i & 255);
            this.writen += 2;
        };
        h.prototype.writeUTF = function(j) {
            var i = this.binaryHelper.writeUTF(j);
            [].push.apply(this.pool, i);
            this.writen += i.length;
        };
        h.prototype.toComplements = function() {
            var k = this.pool;
            for (var j = 0; j < this.poolLen; j++) {
                if (k[j] > 128) {
                    k[j] -= 256;
                }
            }
            return k;
        };
        h.prototype.getBytesArray = function(i) {
            if (i) {
                return this.toComplements();
            }
            return this.pool;
        };
        return h;
    }();
    d.RongIMStream = a;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c(d) {
            this.connected = false;
            this.isClose = false;
            this.queue = [];
            this.empty = new Function();
            this._socket = d;
            return this;
        }
        c.prototype.createTransport = function(d, e) {
            if (!d) {
                throw new Error("URL can't be empty");
            }
            this.url = d;
            this.socket = new WebSocket(a.MessageUtil.schemeArrs[a.RongIMClient.schemeType][1] + "://" + d);
            this.socket.binaryType = "arraybuffer";
            this.addEvent();
            return this.socket;
        };
        c.prototype.send = function(d) {
            if (!this.connected && !this.isClose) {
                this.queue.push(d);
                return;
            }
            if (this.isClose) {
                throw new Error("The Connection is closed,Please open the Connection!!!");
            }
            var h = new a.RongIMStream([]), g = new a.MessageOutputStream(h);
            g.writeMessage(d);
            var e = h.getBytesArray(true);
            var i = new Int8Array(e);
            this.socket.send(i.buffer);
            return this;
        };
        c.prototype.onData = function(d) {
            if (a.MessageUtil.isArray(d)) {
                this._socket.onMessage(new a.MessageInputStream(d).readMessage());
            } else {
                this._socket.onMessage(new a.MessageInputStream(a.MessageUtil.ArrayFormInput(d)).readMessage());
            }
            return "";
        };
        c.prototype.onClose = function(e) {
            var d = this;
            d.isClose = true;
            d.socket = this.empty;
            a.Bridge._client.clearHeartbeat();
            if (e.code == 1006 && !this._status) {
                d._socket.fire("StatusChanged", a.ConnectionStatus.NETWORK_UNAVAILABLE);
            } else {
                d._status = 0;
                d._socket.fire("StatusChanged", a.ConnectionStatus.DISCONNECTED);
            }
        };
        c.prototype.onError = function(d) {
            console.log(d);
            throw new Error(d);
        };
        c.prototype.addEvent = function() {
            var d = this;
            d.socket.onopen = function() {
                d.connected = true;
                d.isClose = false;
                d.doQueue();
                d._socket.fire("connect");
            };
            d.socket.onmessage = function(e) {
                if (typeof e.data == "string") {
                    d.onData(e.data.split(","));
                } else {
                    d.onData(e.data);
                }
            };
            d.socket.onerror = function(e) {
                d.onError(e);
            };
            d.socket.onclose = function(e) {
                d.onClose(e);
            };
        };
        c.prototype.doQueue = function() {
            var e = this;
            for (var g = 0, d = e.queue.length; g < d; g++) {
                e.send(e.queue[g]);
            }
        };
        c.prototype.disconnect = function(d) {
            var e = this;
            if (e.socket.readyState) {
                e.isClose = true;
                if (d) {
                    e._status = d;
                }
                this.socket.close();
            }
        };
        c.prototype.reconnect = function() {
            this.disconnect();
            this.createTransport(this.url);
        };
        return c;
    }();
    a.SocketTransportation = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var a = function() {
        function c(d) {
            this.empty = new Function();
            this.connected = false;
            this.queue = [];
            this.socket = d;
            return this;
        }
        c.prototype.createTransport = function(e, h) {
            if (!e) {
                throw new Error("Url is empty,Please check it!");
            }
            this.url = e;
            var d = b.RongIMClient._cookieHelper.getItem(b.Navigation.Endpoint.userId + "sId"), g = this;
            if (d) {
                setTimeout(function() {
                    g.onSuccess('{"status":0,"userId":"' + b.Navigation.Endpoint.userId + '","headerCode":32,"messageId":0,"sessionid":"' + d + '"}');
                    g.connected = true;
                }, 500);
                return this;
            }
            this.getRequest(e, true);
            return this;
        };
        c.prototype.requestFactory = function(e, h, d) {
            var g = this.XmlHttpRequest();
            if (d) {
                g.multipart = true;
            }
            g.open(h || "GET", b.MessageUtil.schemeArrs[b.RongIMClient.schemeType][0] + "://" + e);
            if (h == "POST" && "setRequestHeader" in g) {
                g.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
            }
            return g;
        };
        c.prototype.getRequest = function(d, g) {
            var e = this;
            e.xhr = this.requestFactory(d, "GET");
            if ("onload" in e.xhr) {
                e.xhr.onload = function() {
                    e.xhr.onload = e.empty;
                    if (this.responseText == "lost params") {
                        e.onError();
                    } else {
                        e.onSuccess(this.responseText, g);
                    }
                };
                e.xhr.onerror = function() {
                    e.disconnect();
                };
            } else {
                e.xhr.onreadystatechange = function() {
                    if (e.xhr.readyState == 4) {
                        e.xhr.onreadystatechange = e.empty;
                        if (/^(200|202)$/.test(e.xhr.status)) {
                            e.onSuccess(e.xhr.responseText, g);
                        } else {
                            if (/^(400|403)$/.test(e.xhr.status)) {
                                e.onError();
                            } else {
                                e.disconnect();
                            }
                        }
                    }
                };
            }
            e.xhr.send();
        };
        c.prototype.send = function(e) {
            var d = this;
            this.sendxhr = this.requestFactory(b.Navigation.Endpoint.host + "/websocket" + e.url, "POST");
            if ("onload" in d.sendxhr) {
                d.sendxhr.onload = function() {
                    d.sendxhr.onload = d.empty;
                    d.onData(d.sendxhr.responseText);
                };
                d.sendxhr.onerror = function() {
                    d.sendxhr.onerror = d.empty;
                };
            } else {
                d.sendxhr.onreadystatechange = function() {
                    if (d.sendxhr.readyState == 4) {
                        this.onreadystatechange = this.empty;
                        if (/^(202|200)$/.test(d.sendxhr.status)) {
                            d.onData(d.sendxhr.responseText);
                        }
                    }
                };
            }
            d.sendxhr.send(JSON.stringify(e.data));
        };
        c.prototype.onData = function(e, h) {
            if (!e || e == "lost params") {
                return;
            }
            var d = this, g = JSON.parse(e);
            if (g.userId) {
                b.Navigation.Endpoint.userId = g.userId;
            }
            if (h) {
                b.RongIMClient._cookieHelper.setItem(b.Navigation.Endpoint.userId + "sId", h);
            }
            if (!b.MessageUtil.isArray(g)) {
                g = [ g ];
            }
            Array.forEach(g, function(i) {
                d.socket.fire("message", new b.MessageInputStream(i, true).readMessage());
            });
            return "";
        };
        c.prototype.XmlHttpRequest = function() {
            var d = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest(), e = this;
            if ("undefined" != typeof XMLHttpRequest && d) {
                return new XMLHttpRequest();
            } else {
                if ("undefined" != typeof XDomainRequest) {
                    return new XDomainRequest();
                } else {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
            }
        };
        c.prototype.onClose = function() {
            if (this.xhr) {
                if (this.xhr.onload) {
                    this.xhr.onreadystatechange = this.xhr.onload = this.empty;
                } else {
                    this.xhr.onreadystatechange = this.empty;
                }
                this.xhr.abort();
                this.xhr = null;
            }
            if (this.sendxhr) {
                if (this.sendxhr.onload) {
                    this.sendxhr.onreadystatechange = this.sendxhr.onload = this.empty;
                } else {
                    this.sendxhr.onreadystatechange = this.empty;
                }
                this.sendxhr.abort();
                this.sendxhr = null;
            }
        };
        c.prototype.disconnect = function() {
            b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "sId");
            this.onClose();
        };
        c.prototype.reconnect = function() {
            this.disconnect();
            this.createTransport(this.url);
        };
        c.prototype.onSuccess = function(e, g) {
            var d = e.match(/"sessionid":"\S+?(?=")/);
            this.onData(e, d ? d[0].slice(13) : 0);
            if (/"headerCode":-32,/.test(e)) {
                b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "sId");
                return;
            }
            this.getRequest(b.Navigation.Endpoint.host + "/pullmsg.js?sessionid=" + b.RongIMClient._cookieHelper.getItem(b.Navigation.Endpoint.userId + "sId"));
            this.connected = true;
            g && this.socket.fire("connect");
        };
        c.prototype.onError = function() {
            b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "sId");
            this.onClose();
            this.connected = false;
            this.socket.fire("disconnect");
        };
        return c;
    }();
    b.PollingTransportation = a;
})(RongIMLib || (RongIMLib = {}));

var typeMapping = {
    "RC:TxtMsg": "TextMessage",
    "RC:ImgMsg": "ImageMessage",
    "RC:VcMsg": "VoiceMessage",
    "RC:ImgTextMsg": "RichContentMessage",
    "RC:LBSMsg": "LocationMessage",
    "RC:InfoNtf": "InformationNotificationMessage",
    "RC:ContactNtf": "ContactNotificationMessage",
    "RC:ProfileNtf": "ProfileNotificationMessage",
    "RC:CmdNtf": "CommandNotificationMessage",
    "RC:DizNtf": "DiscussionNotificationMessage",
    "RC:CmdMsg": "CommandMessage",
    "RC:TypSts": "TypingStatusMessage"
}, registerMessageTypeMapping = {}, HistoryMsgType = {
    4: "qryCMsg",
    2: "qryDMsg",
    3: "qryGMsg",
    1: "qryPMsg",
    6: "qrySMsg",
    7: "qryPMsg",
    8: "qryPMsg"
}, disconnectStatus = {
    1: 6
};

var RongIMLib;

(function(RongIMLib) {
    var Transportations = function() {
        function Transportations() {}
        Transportations._TransportType = RongIMLib.Socket.WEBSOCKET;
        return Transportations;
    }();
    RongIMLib.Transportations = Transportations;
    var PublicServiceMap = function() {
        function PublicServiceMap() {
            this.publicServiceList = [];
        }
        PublicServiceMap.prototype.get = function(publicServiceType, publicServiceId) {
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (this.publicServiceList[i].conversationType == publicServiceType && publicServiceId == this.publicServiceList[i].publicServiceId) {
                    return this.publicServiceList[i];
                }
            }
        };
        PublicServiceMap.prototype.add = function(publicServiceProfile) {
            var isAdd = true, me = this;
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (me.publicServiceList[i].conversationType == publicServiceProfile.conversationType && publicServiceProfile.publicServiceId == me.publicServiceList[i].publicServiceId) {
                    this.publicServiceList.unshift(this.publicServiceList.splice(i, 1)[0]);
                    isAdd = false;
                    break;
                }
            }
            if (isAdd) {
                this.publicServiceList.unshift(publicServiceProfile);
            }
        };
        PublicServiceMap.prototype.replace = function(publicServiceProfile) {
            var me = this;
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (me.publicServiceList[i].conversationType == publicServiceProfile.conversationType && publicServiceProfile.publicServiceId == me.publicServiceList[i].publicServiceId) {
                    me.publicServiceList.splice(i, 1, publicServiceProfile);
                    break;
                }
            }
        };
        PublicServiceMap.prototype.remove = function(conversationType, publicServiceId) {
            var me = this;
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (me.publicServiceList[i].conversationType == conversationType && publicServiceId == me.publicServiceList[i].publicServiceId) {
                    this.publicServiceList.splice(i, 1);
                    break;
                }
            }
        };
        return PublicServiceMap;
    }();
    RongIMLib.PublicServiceMap = PublicServiceMap;
    var ConversationMap = function() {
        function ConversationMap() {
            this.conversationList = [];
        }
        ConversationMap.prototype.get = function(conversavtionType, targetId) {
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType == conversavtionType && this.conversationList[i].targetId == targetId) {
                    return this.conversationList[i];
                }
            }
            return null;
        };
        ConversationMap.prototype.add = function(conversation) {
            var isAdd = true;
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
                    this.conversationList.unshift(this.conversationList.splice(i, 1)[0]);
                    isAdd = false;
                    break;
                }
            }
            if (isAdd) {
                this.conversationList.unshift(conversation);
            }
        };
        ConversationMap.prototype.replace = function(conversation) {
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
                    this.conversationList.splice(i, 1, conversation);
                    break;
                }
            }
        };
        ConversationMap.prototype.remove = function(conversation) {
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
                    this.conversationList.splice(i, 1);
                    break;
                }
            }
        };
        return ConversationMap;
    }();
    RongIMLib.ConversationMap = ConversationMap;
    var MessageUtil = function() {
        function MessageUtil() {}
        MessageUtil.supportLargeStorage = function() {
            if (window.localStorage) {
                return true;
            } else {
                return false;
            }
        };
        MessageUtil.checkStorageSize = function() {
            return JSON.stringify(localStorage).length < 468e4;
        };
        MessageUtil.ArrayForm = function(typearray) {
            if (Object.prototype.toString.call(typearray) == "[object ArrayBuffer]") {
                var arr = new Int8Array(typearray);
                return [].slice.call(arr);
            }
            return typearray;
        };
        MessageUtil.ArrayFormInput = function(typearray) {
            if (Object.prototype.toString.call(typearray) == "[object ArrayBuffer]") {
                var arr = new Uint8Array(typearray);
                return arr;
            }
            return typearray;
        };
        MessageUtil.indexOf = function(arr, item, from) {
            for (var l = arr.length, i = from < 0 ? Math.max(0, +from) : from || 0; i < l; i++) {
                if (arr[i] == item) {
                    return i;
                }
            }
            return -1;
        };
        MessageUtil.isArray = function(obj) {
            return Object.prototype.toString.call(obj) == "[object Array]";
        };
        MessageUtil.forEach = function(arr, func) {
            if ([].forEach) {
                return function(arr, func) {
                    [].forEach.call(arr, func);
                };
            } else {
                return function(arr, func) {
                    for (var i = 0; i < arr.length; i++) {
                        func.call(arr, arr[i], i, arr);
                    }
                };
            }
        };
        MessageUtil.remove = function(array, func) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (func(array[i])) {
                    return array.splice(i, 1)[0];
                }
            }
            return null;
        };
        MessageUtil.int64ToTimestamp = function(obj, isDate) {
            if (obj.low === undefined) {
                return obj;
            }
            var low = obj.low;
            if (low < 0) {
                low += 4294967295 + 1;
            }
            low = low.toString(16);
            var timestamp = parseInt(obj.high.toString(16) + "00000000".replace(new RegExp("0{" + low.length + "}$"), low), 16);
            if (isDate) {
                return new Date(timestamp);
            }
            return timestamp;
        };
        MessageUtil.messageParser = function(entity, onReceived) {
            var message = new RongIMLib.Message(), content = entity.content, de, objectName = entity.classname, val, isUseDef = false;
            try {
                if (RongIMLib.RongIMClient._memoryStore.global.WEB_XHR_POLLING) {
                    val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayForm(content.buffer).slice(content.offset, content.limit) : content);
                    de = JSON.parse(val);
                } else {
                    val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayFormInput(content.buffer).subarray(content.offset, content.limit) : content);
                    de = JSON.parse(val);
                }
            } catch (ex) {
                de = val;
                isUseDef = true;
            }
            if ("Expression" in RongIMLib && de.content) {
                de.content = de.content.replace(/[\uf000-\uf700]/g, function(x) {
                    return eval("RongIMLib.Expression.calcUTF(x) || x");
                });
            }
            if (objectName in typeMapping) {
                var str = "new RongIMLib." + typeMapping[objectName] + "(de)";
                message.content = eval(str);
                message.messageType = typeMapping[objectName];
            } else {
                if (objectName in registerMessageTypeMapping) {
                    var str = "new RongIMLib.RongIMClient.RegisterMessage." + registerMessageTypeMapping[objectName] + "(de)";
                    if (isUseDef) {
                        message.content = eval(str).decode(de);
                    } else {
                        message.content = eval(str);
                    }
                    message.messageType = registerMessageTypeMapping[objectName];
                } else {
                    message.content = new RongIMLib.UnknownMessage({
                        content: de,
                        objectName: objectName
                    });
                    message.messageType = "UnknownMessage";
                }
            }
            message.sentTime = MessageUtil.int64ToTimestamp(entity.dataTime);
            message.senderUserId = entity.fromUserId;
            message.conversationType = entity.type;
            if (entity.fromUserId == RongIMLib.Bridge._client.userId) {
                message.targetId = entity.groupId;
            } else {
                message.targetId = /^[234]$/.test(entity.type || entity.getType()) ? entity.groupId : message.senderUserId;
            }
            if (entity.direction == 1) {
                message.messageDirection = RongIMLib.MessageDirection.SEND;
            } else {
                message.messageDirection = RongIMLib.MessageDirection.RECEIVE;
            }
            if ((entity.status & 2) == 2) {
                message.hasReceivedByOtherClient = true;
            }
            message.messageUId = entity.msgId;
            message.receivedTime = new Date().getTime();
            message.messageId = message.conversationType + "_" + ~~(Math.random() * 16777215);
            message.objectName = objectName;
            return message;
        };
        MessageUtil.schemeArrs = [ [ "http", "ws" ], [ "https", "wss" ] ];
        MessageUtil.sign = {
            converNum: 1,
            msgNum: 1,
            isMsgStart: true,
            isConvStart: true
        };
        return MessageUtil;
    }();
    RongIMLib.MessageUtil = MessageUtil;
    var MessageIdHandler = function() {
        function MessageIdHandler() {}
        MessageIdHandler.init = function() {
            this.messageId = +(RongIMLib.RongIMClient._cookieHelper.getItem("msgId") || RongIMLib.RongIMClient._cookieHelper.setItem("msgId", 0) || 0);
        };
        MessageIdHandler.messageIdPlus = function(method) {
            this.isXHR && this.init();
            if (this.messageId >= 65535) {
                method();
                return false;
            }
            this.messageId++;
            this.isXHR && RongIMLib.RongIMClient._cookieHelper.setItem("msgId", this.messageId);
            return this.messageId;
        };
        MessageIdHandler.clearMessageId = function() {
            this.messageId = 0;
            this.isXHR && RongIMLib.RongIMClient._cookieHelper.setItem("msgId", this.messageId);
        };
        MessageIdHandler.getMessageId = function() {
            this.isXHR && this.init();
            return this.messageId;
        };
        MessageIdHandler.messageId = 0;
        MessageIdHandler.isXHR = Transportations._TransportType === RongIMLib.Socket.XHR_POLLING;
        return MessageIdHandler;
    }();
    RongIMLib.MessageIdHandler = MessageIdHandler;
    var CheckParam = function() {
        function CheckParam() {}
        CheckParam.getInstance = function() {
            return new CheckParam();
        };
        CheckParam.prototype.check = function(f, position, d) {
            var c = arguments.callee.caller;
            if ("_client" in RongIMLib.Bridge || d) {
                for (var g = 0, e = c.arguments.length; g < e; g++) {
                    if (!new RegExp(this.getType(c.arguments[g])).test(f[g])) {
                        throw new Error("The index of " + g + " parameter was wrong type " + this.getType(c.arguments[g]) + " [" + f[g] + "] -> position:" + position);
                    }
                }
            } else {
                throw new Error("The parameter is incorrect or was not yet instantiated RongIMClient -> position:" + position);
            }
        };
        CheckParam.prototype.getType = function(str) {
            var temp = Object.prototype.toString.call(str).toLowerCase();
            return temp.slice(8, temp.length - 1);
        };
        return CheckParam;
    }();
    RongIMLib.CheckParam = CheckParam;
    var LimitableMap = function() {
        function LimitableMap(limit) {
            this.map = {};
            this.keys = [];
            this.limit = limit || 10;
        }
        LimitableMap.prototype.set = function(key, value) {
            if (this.map.hasOwnProperty(key)) {
                if (this.keys.length === this.limit) {
                    var firstKey = this.keys.shift();
                    delete this.map[firstKey];
                }
                this.keys.push(key);
            }
            this.map[key] = value;
        };
        LimitableMap.prototype.get = function(key) {
            return this.map[key] || 0;
        };
        LimitableMap.prototype.remove = function(key) {
            delete this.map[key];
        };
        return LimitableMap;
    }();
    RongIMLib.LimitableMap = LimitableMap;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(c) {
    var a = function() {
        function g(h) {
            throw new Error("This method is abstract, you must implement this method in inherited class.");
        }
        g.obtain = function() {
            throw new Error("This method is abstract, you must implement this method in inherited class.");
        };
        return g;
    }();
    c.MessageContent = a;
    var d = function(h) {
        __extends(g, h);
        function g() {
            h.apply(this, arguments);
        }
        return g;
    }(a);
    c.NotificationMessage = d;
    var b = function(h) {
        __extends(g, h);
        function g() {
            h.apply(this, arguments);
        }
        return g;
    }(a);
    c.StatusMessage = b;
    var e = function() {
        function g() {}
        g.modelClone = function(h) {
            var j = {};
            for (var i in h) {
                if (i != "messageName" && "encode" != i) {
                    j[i] = h[i];
                }
            }
            return j;
        };
        g.modleCreate = function(h) {
            if (h.length < 1) {
                throw new Error("Array is empty  -> registerMessageType.modleCreate");
            }
            var i = function(k) {
                for (var j in h) {
                    if (k[h[j]]) {
                        i.prototype[h[j]] = k[h[j]];
                    }
                }
                this.encode = function() {
                    return JSON.stringify(c.ModelUtil.modelClone(this));
                };
            };
            return i;
        };
        return g;
    }();
    c.ModelUtil = e;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var c = function() {
        function e(g) {
            this.messageName = "IsTypingStatusMessage";
            var h = g;
        }
        e.prototype.encode = function() {
            return undefined;
        };
        e.prototype.getMessage = function() {
            return null;
        };
        return e;
    }();
    b.IsTypingStatusMessage = c;
    var a = function() {
        function e(g) {
            this.messageName = "HandshakeMessage";
            var h = g;
        }
        e.prototype.encode = function() {
            return undefined;
        };
        e.prototype.getMessage = function() {
            return null;
        };
        return e;
    }();
    b.HandshakeMessage = a;
    var d = function() {
        function e(g) {
            this.messageName = "SuspendMessage";
            var h = g;
        }
        e.prototype.encode = function() {
            return undefined;
        };
        e.prototype.getMessage = function() {
            return null;
        };
        return e;
    }();
    b.SuspendMessage = d;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(g) {
    var e = function() {
        function i(j) {
            this.messageName = "InformationNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");
            }
            this.message = j.message;
            this.extra = j.extra;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(j) {
            return new i({
                message: j,
                extra: ""
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.InformationNotificationMessage = e;
    var b = function() {
        function i(j) {
            this.messageName = "CommandMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");
            }
            try {
                if (Object.prototype.toString.call(j.data) == "[object String]") {
                    this.data = JSON.parse(j.data);
                } else {
                    this.data = j.data;
                }
            } catch (k) {
                this.data = j.data;
            }
            this.name = j.name;
            this.extra = j.extra;
        }
        i.obtain = function(j) {
            return new i({
                data: j,
                extra: ""
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.CommandMessage = b;
    var a = function() {
        function i(j) {
            this.messageName = "ContactNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");
            }
            this.operation = j.operation;
            this.targetUserId = j.targetUserId;
            this.message = j.message;
            this.extra = j.extra;
            this.sourceUserId = j.sourceUserId;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(k, j, l, m) {
            return new e({
                operation: k,
                sourceUserId: j,
                targetUserId: l,
                message: m
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        i.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse";
        i.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse";
        i.CONTACT_OPERATION_REQUEST = "ContactOperationRequest";
        return i;
    }();
    g.ContactNotificationMessage = a;
    var c = function() {
        function i(j) {
            this.messageName = "ProfileNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
            }
            this.operation = j.operation;
            try {
                if (Object.prototype.toString.call(j.data) == "[object String]") {
                    this.data = JSON.parse(j.data);
                } else {
                    this.data = j.data;
                }
            } catch (k) {
                this.data = j.data;
            }
            this.extra = j.extra;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(j, k) {
            return new i({
                operation: j,
                data: k
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.ProfileNotificationMessage = c;
    var d = function() {
        function i(j) {
            this.messageName = "CommandNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
            }
            try {
                if (Object.prototype.toString.call(j.data) == "[object String]") {
                    this.data = JSON.parse(j.data);
                } else {
                    this.data = j.data;
                }
            } catch (k) {
                this.data = j.data;
            }
            this.name = j.name;
            this.extra = j.extra;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(j, k) {
            return new i({
                name: j,
                data: k,
                extra: ""
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.CommandNotificationMessage = d;
    var h = function() {
        function i(j) {
            this.messageName = "DiscussionNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");
            }
            this.extra = j.extra;
            this.extension = j.extension;
            this.type = j.type;
            this.isHasReceived = j.isHasReceived;
            this.operation = j.operation;
            this.user = j.user;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.DiscussionNotificationMessage = h;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(l) {
    var a = function() {
        function m(n) {
            this.messageName = "TextMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");
            }
            this.content = n.content;
            this.extra = n.extra;
            if (n.user) {
                this.user = n.user;
            }
        }
        m.obtain = function(n) {
            return new m({
                extra: "",
                content: n
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.TextMessage = a;
    var b = function() {
        function m(n) {
            this.messageName = "TypingStatusMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");
            }
            this.typingContentType = n.typingContentType;
            this.data = n.data;
        }
        m.obtain = function(n, o) {
            return new m({
                typingContentType: n,
                data: o
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.TypingStatusMessage = b;
    var g = function() {
        function m(n) {
            this.messageName = "VoiceMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");
            }
            this.content = n.content;
            this.duration = n.duration;
            this.extra = n.extra;
            if (n.user) {
                this.user = n.user;
            }
        }
        m.obtain = function(n, o) {
            return new m({
                content: n,
                duration: o,
                extra: ""
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.VoiceMessage = g;
    var k = function() {
        function m(n) {
            this.messageName = "ImageMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");
            }
            this.content = n.content;
            this.imageUri = n.imageUri;
            this.extra = n.extra;
            if (n.user) {
                this.user = n.user;
            }
        }
        m.obtain = function(o, n) {
            return new m({
                content: o,
                imageUri: n,
                extra: ""
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.ImageMessage = k;
    var e = function() {
        function m(n) {
            this.messageName = "LocationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");
            }
            this.latiude = n.latitude;
            this.longitude = n.longitude;
            this.poi = n.poi;
            this.content = n.content;
            this.extra = n.extra;
            if (n.user) {
                this.user = n.user;
            }
        }
        m.obtain = function(q, o, p, n) {
            return new m({
                latitude: o,
                longitude: o,
                poi: p,
                content: n,
                extra: ""
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.LocationMessage = e;
    var c = function() {
        function m(n) {
            this.messageName = "RichContentMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");
            }
            this.title = n.title;
            this.content = n.content;
            this.imageUri = n.imageUri;
            this.extra = n.extra;
            this.url = n.url;
            if (n.user) {
                this.user = n.user;
            }
        }
        m.obtain = function(q, p, o, n) {
            return new m({
                title: q,
                content: p,
                imageUri: o,
                url: n,
                extra: ""
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.RichContentMessage = c;
    var j = function() {
        function m(n) {
            this.messageName = "UnknownMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");
            }
            this.message = n;
        }
        m.prototype.encode = function() {
            return "";
        };
        return m;
    }();
    l.UnknownMessage = j;
    var d = function() {
        function m(n) {
            this.messageName = "PublicServiceCommandMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");
            }
            this.content = n.content;
            this.extra = n.extra;
            this.menuItem = n.menuItem;
            if (n.user) {
                this.user = n.user;
            }
        }
        m.obtain = function(n) {
            return new m({
                content: "",
                command: "",
                menuItem: n,
                extra: ""
            });
        };
        m.prototype.encode = function() {
            return JSON.stringify(l.ModelUtil.modelClone(this));
        };
        return m;
    }();
    l.PublicServiceCommandMessage = d;
    var h = function() {
        function m(n) {
            this.messageName = "PublicServiceMultiRichContentMessage";
            this.richContentMessages = n;
        }
        m.prototype.encode = function() {
            return null;
        };
        return m;
    }();
    l.PublicServiceMultiRichContentMessage = h;
    var i = function() {
        function m(n) {
            this.messageName = "PublicServiceRichContentMessage";
            this.richContentMessage = n;
        }
        m.prototype.encode = function() {
            return null;
        };
        return m;
    }();
    l.PublicServiceRichContentMessage = i;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(j) {
    var a = function() {
        function k(o, q, m, y, u, w, B, v, l, A, p, n, x, t, z, s, r) {
            this.conversationTitle = o;
            this.conversationType = q;
            this.draft = m;
            this.isTop = y;
            this.latestMessage = u;
            this.latestMessageId = w;
            this.notificationStatus = B;
            this.objectName = v;
            this.receivedStatus = l;
            this.receivedTime = A;
            this.senderUserId = p;
            this.senderUserName = n;
            this.sentStatus = x;
            this.sentTime = t;
            this.targetId = z;
            this.unreadMessageCount = s;
            this.senderPortraitUri = r;
        }
        k.prototype.setTop = function() {
            j.RongIMClient._dataAccessProvider.addConversation(this, {
                onSuccess: function(l) {}
            });
        };
        return k;
    }();
    j.Conversation = a;
    var i = function() {
        function k(p, o, n, l, m) {
            this.creatorId = p;
            this.id = o;
            this.memberIdList = n;
            this.name = l;
            this.isOpen = m;
        }
        return k;
    }();
    j.Discussion = i;
    var e = function() {
        function k(n, l, m) {
            this.id = n;
            this.name = l;
            this.portraitUri = m;
        }
        return k;
    }();
    j.Group = e;
    var h = function() {
        function k(v, o, m, s, y, w, l, A, n, u, q, z, t, r, p, x) {
            this.content = v;
            this.conversationType = o;
            this.extra = m;
            this.objectName = s;
            this.messageDirection = y;
            this.messageId = w;
            this.receivedStatus = l;
            this.receivedTime = A;
            this.senderUserId = n;
            this.sentStatus = u;
            this.sentTime = q;
            this.targetId = z;
            this.messageType = t;
            this.messageUId = r;
            this.hasReceivedByOtherClient = p;
            this.isLocalMessage = x;
        }
        return k;
    }();
    j.Message = h;
    var d = function() {
        function k(m, l) {
            this.isCounted = m;
            this.isPersited = l;
        }
        k.prototype.getMessageTag = function() {
            if (this.isCounted && this.isPersited) {
                return 3;
            } else {
                if (this.isCounted || !this.isPersited) {
                    return 2;
                } else {
                    if (!this.isCounted || this.isPersited) {
                        return 1;
                    } else {
                        if (!this.isCounted && !this.isPersited) {
                            return 0;
                        }
                    }
                }
            }
        };
        return k;
    }();
    j.MessageTag = d;
    var g = function() {
        function k(p, n, o, l, m) {
            this.id = p;
            this.name = n;
            this.type = o;
            this.sunMenuItems = l;
            this.url = m;
        }
        return k;
    }();
    j.PublicServiceMenuItem = g;
    var b = function() {
        function k(s, r, q, m, n, p, o, l) {
            this.conversationType = s;
            this.introduction = r;
            this.menu = q;
            this.name = m;
            this.portraitUri = n;
            this.publicServiceId = p;
            this.hasFollowed = o;
            this.isGlobal = l;
        }
        return k;
    }();
    j.PublicServiceProfile = b;
    var c = function() {
        function k(m, l, n) {
            this.userId = m;
            this.name = l;
            this.portraitUri = n;
        }
        return k;
    }();
    j.UserInfo = c;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {
            this.database = new a.DBUtil();
        }
        c.prototype.addConversation = function(g, j) {
            var e = true;
            for (var h = 0, d = a.RongIMClient._memoryStore.conversationList.length; h < d; h++) {
                if (a.RongIMClient._memoryStore.conversationList[h].conversationType === g.conversationType && a.RongIMClient._memoryStore.conversationList[h].targetId === g.targetId) {
                    a.RongIMClient._memoryStore.conversationList.unshift(a.RongIMClient._memoryStore.conversationList.splice(h, 1)[0]);
                    e = false;
                    break;
                }
            }
            if (e) {
                a.RongIMClient._memoryStore.conversationList.unshift(g);
            }
            j.onSuccess(true);
        };
        c.prototype.removeConversation = function(j, e, h) {
            for (var g = 0, d = a.RongIMClient._memoryStore.conversationList.length; g < d; g++) {
                if (a.RongIMClient._memoryStore.conversationList[g].conversationType === j && a.RongIMClient._memoryStore.conversationList[g].targetId === e) {
                    a.RongIMClient._memoryStore.conversationList.splice(g, 1);
                    if (a.MessageUtil.supportLargeStorage()) {
                        a.LocalStorageProvider.getInstance().removeItem("cu" + a.Bridge._client.userId + j + e);
                    }
                    break;
                }
            }
            h.onSuccess(true);
        };
        c.prototype.addMessage = function(h, d, e, g) {
            if (g) {
                g.onSuccess(new a.Message());
            }
        };
        c.prototype.removeMessage = function(h, d, e, g) {
            g.onSuccess(true);
        };
        c.prototype.removeLocalMessage = function(h, e, d, g) {
            g.onSuccess(true);
        };
        c.prototype.updateMessage = function(d, e) {
            e.onSuccess(d);
        };
        c.prototype.clearMessages = function(g, d, e) {
            e.onSuccess(true);
        };
        c.prototype.updateMessages = function(j, d, e, h, i) {
            var g = this;
            if (e == "readStatus") {
                if (a.RongIMClient._memoryStore.conversationList.length > 0) {
                    g.getConversationList({
                        onSuccess: function(k) {
                            Array.forEach(k, function(l) {
                                if (l.conversationType == j && l.targetId == d) {
                                    l.unreadMessageCount = 0;
                                }
                            });
                        },
                        onError: function(k) {
                            i.onError(k);
                        }
                    }, null);
                }
            }
            i.onSuccess(true);
        };
        c.prototype.getConversation = function(k, e) {
            var j = null;
            for (var g = 0, d = a.RongIMClient._memoryStore.conversationList.length; g < d; g++) {
                if (a.RongIMClient._memoryStore.conversationList[g].conversationType == k && a.RongIMClient._memoryStore.conversationList[g].targetId == e) {
                    j = a.RongIMClient._memoryStore.conversationList[g];
                    if (a.MessageUtil.supportLargeStorage()) {
                        var h = a.LocalStorageProvider.getInstance().getItem("cu" + a.Bridge._client.userId + k + e);
                        if (j.unreadMessageCount == 0) {
                            j.unreadMessageCount = Number(h);
                        }
                    }
                }
            }
            return j;
        };
        c.prototype.getConversationList = function(g, d) {
            if (a.RongIMClient._memoryStore.conversationList.length == 0 || a.RongIMClient._memoryStore.isSyncRemoteConverList) {
                a.RongIMClient.getInstance().getRemoteConversationList({
                    onSuccess: function(h) {
                        if (a.MessageUtil.supportLargeStorage()) {
                            Array.forEach(a.RongIMClient._memoryStore.conversationList, function(j) {
                                var i = a.LocalStorageProvider.getInstance().getItem("cu" + a.Bridge._client.userId + j.conversationType + j.targetId);
                                if (j.unreadMessageCount == 0) {
                                    j.unreadMessageCount = Number(i);
                                }
                            });
                        }
                        a.RongIMClient._memoryStore.isSyncRemoteConverList = false;
                        g.onSuccess(h);
                    },
                    onError: function(h) {
                        g.onSuccess([]);
                    }
                }, d);
            } else {
                if (d) {
                    var e = [];
                    Array.forEach(d, function(h) {
                        Array.forEach(a.RongIMClient._memoryStore.conversationList, function(i) {
                            if (i.conversationType == h) {
                                e.push(i);
                            }
                        });
                    });
                    g.onSuccess(e);
                } else {
                    g.onSuccess(a.RongIMClient._memoryStore.conversationList);
                }
            }
        };
        c.prototype.clearConversations = function(d, e) {
            Array.forEach(d, function(g) {
                Array.forEach(a.RongIMClient._memoryStore.conversationList, function(h) {
                    if (g == h.conversationType) {
                        a.RongIMClient.getInstance().removeConversation(h.conversationType, h.targetId, {
                            onSuccess: function() {},
                            onError: function() {}
                        });
                    }
                });
            });
            e.onSuccess(true);
        };
        c.prototype.getHistoryMessages = function(i, d, g, e, h) {
            a.RongIMClient.getInstance().getRemoteHistoryMessages(i, d, g, e, h);
        };
        c.prototype.getTotalUnreadCount = function(e) {
            var d = 0;
            Array.forEach(a.RongIMClient._memoryStore.conversationList, function(g) {
                d += g.unreadMessageCount;
            });
            e.onSuccess(d);
        };
        c.prototype.getConversationUnreadCount = function(e, g) {
            var d = 0;
            Array.forEach(e, function(h) {
                Array.forEach(a.RongIMClient._memoryStore.conversationList, function(i) {
                    if (i.conversationType == h) {
                        d += i.unreadMessageCount;
                    }
                });
            });
            g.onSuccess(d);
        };
        c.prototype.getUnreadCount = function(h, d, g) {
            var e = this.getConversation(h, d);
            g.onSuccess(e ? e.unreadMessageCount : 0);
        };
        c.prototype.clearUnreadCount = function(h, d, g) {
            var e = this.getConversation(h, d);
            if (e) {
                if (a.MessageUtil.supportLargeStorage()) {
                    a.LocalStorageProvider.getInstance().removeItem("cu" + a.Bridge._client.userId + h + d);
                }
                e.unreadMessageCount = 0;
            }
            g.onSuccess(true);
        };
        c.prototype.setConversationToTop = function(h, d, g) {
            var e = this.getConversation(h, d);
            this.addConversation(e, g);
        };
        c.prototype.setMessageExtra = function(d, e, g) {
            g.onSuccess(true);
        };
        c.prototype.setMessageReceivedStatus = function(e, d, g) {
            g.onSuccess(true);
        };
        c.prototype.setMessageSentStatus = function(e, d, g) {
            g.onSuccess(true);
        };
        return c;
    }();
    a.ServerDataProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.prototype.init = function(e) {
            var g = this, i = false;
            g.userId = e;
            g.db = openDatabase("RongIMLibDB", "1.0", "RongIMLibDB", 10 * 1024 * 1024);
            if (g.db) {
                i = true;
                var d = "CREATE TABLE IF NOT EXISTS T_CONVERSATION_" + e + " (CONVERSATIONTYPE,TARGETID,CONTENT,SENTTIME,ISTOP)";
                var h = "CREATE TABLE IF NOT EXISTS T_MESSAGE_" + e + " (ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,MESSAGETYPE,MESSAGEUID,CONVERSATIONTYPE,TARGETID,SENTTIME,CONTENT,LOCALMSG)";
                g.execUpdate(d);
                g.execUpdate(h);
            }
            return i;
        };
        c.prototype.execSearchByParams = function(e, d, g) {
            this.db.transaction(function(h) {
                h.executeSql(e, d, function(i, j) {
                    g(j.rows);
                });
            });
        };
        c.prototype.execSearch = function(d, e) {
            this.db.trasaction(function(g) {
                g.executeSql(d, function(h, i) {
                    e(i.rows);
                });
            });
        };
        c.prototype.execUpdateByParams = function(e, d) {
            this.db.transaction(function(g) {
                g.executeSql(e, d);
            });
        };
        c.prototype.execUpdate = function(d) {
            this.db.transaction(function(e) {
                e.executeSql(d);
            });
        };
        return c;
    }();
    a.DBUtil = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {
            this.database = new a.DBUtil();
        }
        c.prototype.updateConversation = function(d, g) {
            var e = "UPDATE T_CONVERSATION_" + this.database.userId + " T SET T.CONTENT = ?,T.SENTTIME = ?,T.ISTOP = ? WHERE T.CONVERSATIONTYPE = ? AND T.TARGETID = ?";
            this.database.execUpdateByParams(e, [ JSON.stringify(d), d.sentTime, d.isTop, d.conversationType, d.targetId ]);
        };
        c.prototype.addConversation = function(g, h) {
            var e = this;
            var d = "SELECT * FROM T_CONVERSATION_" + e.database.userId + " T WHERE T.CONVERSATIONTYPE = ? AND T.TARGETID = ?";
            e.database.execSearchByParams(d, [ String(g.conversationType), g.targetId ], function(i) {
                if (i.length > 0) {
                    e.updateConversation(g, h);
                } else {
                    var j = "INSERT INTO T_CONVERSATION_" + this.database.userId + "(CONVERSATIONTYPE,TARGETID,CONTENT,SENTTIME,ISTOP) VALUES(?,?,?,?,?)";
                    e.database.execUpdateByParams(j, [ g.conversationTitle, g.targetId, JSON.stringify(g), g.sentTime, g.isTop ]);
                }
                h.onSuccess(true);
            });
        };
        c.prototype.removeConversation = function(h, d, g) {
            var e = "DELETE FROM T_CONVERSATION_" + this.database.userId + " T WHERE T.CONVERSATIONTYPE = ? AND T.TARGETID = ?";
            this.database.execUpdateByParams(e, [ h, d ]);
            g.onSuccess(true);
        };
        c.prototype.addMessage = function(j, e, g, i) {
            var h = "INSERT INTO T_MESSAGE_" + this.database.userId + " T (MESSAGETYPE,MESSAGEUID,CONVERSATIONTYPE,TARGETID,SENTTIME,CONTENT,LOCALMSG)VALUES(?,?,?,?,?,?,?)";
            var d = g.messageUId ? 0 : 1;
            this.database.execUpdateByParams(h, [ g.messageType, g.messageUId, g.conversationType, g.targetId, g.sentTime, JSON.stringify(g), d ]);
        };
        c.prototype.removeMessage = function(i, d, e, h) {
            if (e.length == 0) {
                return;
            }
            var g = "DELETE FROM T_MESSAGE_" + this.database.userId + " T WHERE T.MESSAGEUID IN (?)";
            this.database.execUpdateByParams(g, [ e.join(",") ]);
        };
        c.prototype.removeLocalMessage = function(i, d, e, h) {
            if (e.length == 0) {
                return;
            }
            var g = "DELETE FROM T_MESSAGE_" + this.database.userId + " T WHERE T.ID IN (?) AND T.MESSAGEUID IS NULL AND T.CONVERSATIONTYPE = ? AND T.TARGETID = ?";
            this.database.execUpdateByParams(g, [ e.join(","), i, d ]);
        };
        c.prototype.updateMessage = function(d, g) {
            var e = "UPDATE T_MESSAGE_" + this.database.userId + " T SET T.MESSAGEUID = ?,T.SENTTIME = ? ";
        };
        c.prototype.updateMessages = function(i, d, e, g, h) {
            throw new Error("Not implemented yet");
        };
        c.prototype.clearMessages = function(h, d, g) {
            var e = "DELETE FROM T_MESSAGE_" + this.database.userId + " T WHERE T.CONVERSATIONTYPE = ? AND T.TARGETID = ? ";
            this.database.execUpdateByParams(e, [ h, d ]);
        };
        c.prototype.getConversation = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getConversationList = function(e, d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.clearConversations = function(d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getHistoryMessages = function(i, d, g, e, h) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getTotalUnreadCount = function(d) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getConversationUnreadCount = function(d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.getUnreadCount = function(g, d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.clearUnreadCount = function(g, d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.setConversationToTop = function(g, d, e) {
            throw new Error("Not implemented yet");
        };
        c.prototype.setMessageExtra = function(d, e, g) {
            throw new Error("Not implemented yet");
        };
        c.prototype.setMessageReceivedStatus = function(e, d, g) {
            throw new Error("Not implemented yet");
        };
        c.prototype.setMessageSentStatus = function(e, d, g) {
            throw new Error("Not implemented yet");
        };
        return c;
    }();
    a.WebSQLDataProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.prototype.setItem = function(e, d) {
            var g = new Date();
            g.setTime(g.getTime() + 15 * 24 * 3600 * 1e3);
            document.cookie = e + "=" + decodeURIComponent(d) + ";path=/;expires=" + g.toGMTString();
        };
        c.prototype.getItem = function(e) {
            var d = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            if (d != null) {
                return d[2];
            }
            return null;
        };
        c.prototype.removeItem = function(d) {
            if (this.getItem(d)) {
                document.cookie = d + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
            }
        };
        c.prototype.getItemKey = function(g) {
            var e = document.cookie.match(new RegExp("(^| )navi\\w+?=([^;]*)(;|$)")), j = "";
            if (e) {
                for (var h = 0, d = e.length; h < d; h++) {
                    if (e[h].indexOf(g) > -1) {
                        j = e[h];
                        break;
                    }
                }
            }
            return j ? j.split("=")[0].replace(/^\s/, "") : null;
        };
        c.prototype.clearItem = function() {
            var e = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (e) {
                for (var d = e.length; d--; ) {
                    document.cookie = e[d] + "=0;path=/;expires=" + new Date(0).toUTCString();
                }
            }
        };
        c.prototype.onOutOfQuota = function() {
            return 4 * 1024;
        };
        return c;
    }();
    a.CookieProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.getInstance = function() {
            return new c();
        };
        c.prototype.setItem = function(e, d) {
            localStorage.setItem(e.toString(), d);
        };
        c.prototype.getItem = function(d) {
            return localStorage.getItem(d ? d.toString() : "");
        };
        c.prototype.removeItem = function(d) {
            localStorage.removeItem(d.toString());
        };
        c.prototype.clearItem = function() {
            localStorage.clear();
        };
        c.prototype.onOutOfQuota = function() {
            return JSON.stringify(localStorage).length;
        };
        return c;
    }();
    a.LocalStorageProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var a = function() {
        function c() {
            this.script = document.createElement("script");
            this.head = document.getElementsByTagName("head")[0];
            b.Transportations._TransportType = b.Socket.WEBSOCKET;
            if ("WebSocket" in window && "ArrayBuffer" in window && WebSocket.prototype.CLOSED === 3 && !window.WEB_XHR_POLLING) {
                this.script.src = "//cdn.ronghub.com/protobuf-min-2.7.js";
                this.head.appendChild(this.script);
            } else {
                b.Transportations._TransportType = "xhr-polling";
                window.Modules = Polling;
            }
        }
        return c;
    }();
    b.FeatureDectector = a;
    if (document.readyState == "interactive" || document.readyState == "loading" || document.readyState == "complete") {
        new a();
    } else {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                new a();
            }, false);
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState == "interactive" || document.readyState == "loading" || document.readyState == "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        new a();
                    }
                });
            }
        }
    }
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(RongIMLib) {
    var FeaturePatcher = function() {
        function FeaturePatcher() {}
        FeaturePatcher.prototype.patchAll = function() {
            this.patchJSON();
            this.patchForEach();
        };
        FeaturePatcher.prototype.patchForEach = function() {
            if (!Array.forEach) {
                Array.forEach = function(arr, func) {
                    for (var i = 0; i < arr.length; i++) {
                        func.call(arr, arr[i], i, arr);
                    }
                };
            }
        };
        FeaturePatcher.prototype.patchJSON = function() {
            if (!window.JSON) {
                window.JSON = function() {
                    function JSON() {}
                    JSON.parse = function(sJSON) {
                        return eval("(" + sJSON + ")");
                    };
                    JSON.stringify = function(value) {
                        return this.str("", {
                            "": value
                        });
                    };
                    JSON.str = function(key, holder) {
                        var i, k, v, length, mind = "", partial, value = holder[key], me = this;
                        if (value && typeof value === "object" && typeof value.toJSON === "function") {
                            value = value.toJSON(key);
                        }
                        switch (typeof value) {
                          case "string":
                            return me.quote(value);

                          case "number":
                            return isFinite(value) ? String(value) : "null";

                          case "boolean":
                          case "null":
                            return String(value);

                          case "object":
                            if (!value) {
                                return "null";
                            }
                            partial = [];
                            if (Object.prototype.toString.apply(value) === "[object Array]") {
                                length = value.length;
                                for (i = 0; i < length; i += 1) {
                                    partial[i] = me.str(i, value) || "null";
                                }
                                v = partial.length === 0 ? "[]" : "[" + partial.join(",") + "]";
                                return v;
                            }
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = me.str(k, value);
                                    if (v) {
                                        partial.push(me.quote(k) + ":" + v);
                                    }
                                }
                            }
                            v = partial.length === 0 ? "{}" : "{" + partial.join(",") + "}";
                            return v;
                        }
                    };
                    JSON.quote = function(string) {
                        var me = this;
                        me.rx_escapable.lastIndex = 0;
                        return me.rx_escapable.test(string) ? '"' + string.replace(me.rx_escapable, function(a) {
                            var c = me.meta[a];
                            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                        }) + '"' : '"' + string + '"';
                    };
                    JSON.rx_escapable = new RegExp('[\\"\\\\"\0--­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]', "g");
                    JSON.meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "''": "\\''",
                        "\\": "\\\\"
                    };
                    return JSON;
                }();
            }
        };
        return FeaturePatcher;
    }();
    RongIMLib.FeaturePatcher = FeaturePatcher;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.prototype.load = function(h, e, g) {
            var d = document.createElement("script");
            d.async = true;
            if (e) {
                if (d.addEventListener) {
                    d.addEventListener("load", function(i) {
                        var j = i.target || i.srcElement;
                        e(j.src);
                    }, false);
                } else {
                    if (d.readyState) {
                        d.onreadystatechange = function(i) {
                            var j = i.srcElement;
                            e(j.src);
                        };
                    }
                }
            }
            if (g) {
                d.onerror = function(i) {
                    var j = i.target || i.srcElement;
                    g(j.src);
                };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
            d.src = h;
        };
        return c;
    }();
})(RongIMLib || (RongIMLib = {}));
