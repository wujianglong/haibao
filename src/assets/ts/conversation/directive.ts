/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../model/util.ts"/>

var conversationDire = angular.module("webim.conversation.directive", ["webim.main.server", "webim.conversation.server"]);

conversationDire.directive("conversationItem", ["$timeout", function($timeout: angular.ITimeoutService) {
    return {
        restrict: "EA",
        templateUrl: 'assets/template/messagetemplate.html',
        scope: {
            item: "="
        }, link: function(scope: any, ele: angular.IRootElementService, attrs: any) {
            if (scope.item.senderUserId) {
                $timeout(function() {
                    angular.element(ele[0].getElementsByClassName("portrait")[0]).css("background-color", webimutil.Helper.portraitColors[scope.item.senderUserId.charCodeAt(0) % webimutil.Helper.portraitColors.length]);
                }, 50);
            }
        }
    }
}]);

conversationDire.directive('contenteditableDire', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope: any, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) {
            function replacemy(e: string) {
                return e.replace(new RegExp("<[\\s\\S.]*?>", "ig"), "");
            }

            var domElement = <any>element[0];

            // scope.$watch(function() {
            //     return ngModel.$modelValue;
            // }, function(newVal: string) {
            //     if (document.activeElement === domElement) {
            //         return;
            //     }
            //     if (newVal === '' || newVal === attrs["placeholder"]) {
            //         domElement.innerHTML = attrs["placeholder"];
            //         domElement.style.color = "#a9a9a9";
            //     }
            // });
            //
            // element.bind('focus', function() {
            //     if (domElement.innerHTML == attrs["placeholder"]) {
            //         domElement.innerHTML = '';
            //         domElement.style.color = '';
            //     }
            // });
            // element.bind('blur', function() {
            //     if (domElement.innerHTML === '') {
            //         domElement.innerHTML = attrs["placeholder"];
            //         domElement.style.color = "#a9a9a9";
            //     }
            // });

            element.bind('input propertychange', function () {
                if (domElement.innerHTML == attrs["placeholder"] || domElement.innerHTML === '' || domElement.innerHTML == '<br>') {
                  element.empty();
                }
                else{
                  domElement.style.color = "";
                }
            });


            if (!ngModel) return;

            element.bind("paste", function(e: any) {
                var that = this, ohtml = that.innerHTML;
                timeoutid && clearTimeout(timeoutid);
                var timeoutid = setTimeout(function() {
                    that.innerHTML = replacemy(that.innerHTML);
                    ngModel.$setViewValue(that.innerHTML);
                    timeoutid = null;
                }, 50);
            });


            ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
            };

            webimutil.Helper.browser.msie ? element.bind("keyup paste", read) : element.bind("input", read);

            function read() {
                var html = element.html();
                html = html.replace(/^<br>$/i, "");
                html = html.replace(/<br>/gi, "\n");
                html = replacemy(html);
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if (attrs["stripBr"] && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
        }
    };
});

conversationDire.directive("preplaceholderasdfrs", [function() {
    return {

    }
}])

conversationDire.directive("ctrlEnterKeys", ["$timeout", "mainDataServer", "conversationServer", function($timeout: angular.ITimeoutService, mainDataServer: any, conversationServer: any) {
    return {
        restrict: "A",
        require: '?ngModel',
        scope: {
            fun: "&",
            ctrlenter: "=",
            content: "="
        },
        link: function(scope: any, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) {
            scope.ctrlenter = scope.ctrlenter || false;
            element.bind("keypress", function(e: any) {
                if (scope.ctrlenter) {
                    if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        scope.fun();
                        scope.$parent.$apply();
                        e.preventDefault();
                    }
                } else {
                    if (e.ctrlKey === false && e.shiftKey === false && (e.keyCode === 13 || e.keyCode === 10)) {
                        scope.fun();
                        scope.$parent.$apply();
                        e.preventDefault();
                    } else if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        //ctrl+enter 换行
                    }
                }
            })
        }
    }
}]);

conversationDire.directive("emoji", [function() {
    return {
        restrict: "E",
        scope: {
            item: "=",
            content: "="
        },
        template: '<div style="display:inline-block"></div>',
        replace: true,
        link: function(scope: any, ele: angular.IRootElementService, attr: angular.IAttributes) {

            ele.append(scope.item);
            ele.on("click", function() {
                scope.$parent.currentConversation.draftMsg = scope.$parent.currentConversation.draftMsg.replace(/\n$/, "");
                scope.$parent.currentConversation.draftMsg = scope.$parent.currentConversation.draftMsg + scope.item.children[0].getAttribute("name");
                scope.$parent.$apply();
                var obj = document.getElementById("message-content");
                webimutil.Helper.getFocus(obj);
            })
        }
    }
}]);

conversationDire.directive("voiceMessage", ["$timeout", function($timeout: angular.ITimeoutService) {
    return {
        restrict: "E",
        scope: { item: "=" },
        template: '<div class="">' +
        '<div class="Message-audio">' +
        '<span class="Message-entry" style="">' +
        // '<span class="audioBox clearfix " ng-class="{\'animate\':isplaying}" ng-click="play()"><i></i><i></i><i></i></span>'+
        '<span class="audioBox clearfix"  ng-class="{\'animate\':isplaying}" ng-click="play()"><i></i><i></i><i></i><i></i></span>' +
        '<span class="audioTimer">{{item.duration}}”</span><span class="audioState" ng-show="item.isUnReade"></span>' +
        '</span>' +
        '</div>' +
        '</div>',
        link: function(scope: any, ele: angular.IRootElementService, attr: any) {
            scope.item.duration = parseInt(scope.item.duration || scope.item.content.length / 1024);
            RongIMLib.RongIMVoice.preLoaded(scope.item.content);
            scope.play = function() {
                RongIMLib.RongIMVoice.stop();
                if (!scope.isplaying) {
                    scope.item.isUnReade = false;
                    RongIMLib.RongIMVoice.play(scope.item.content, scope.item.duration);
                    scope.isplaying = true;
                    if (scope.timeoutid) {
                        $timeout.cancel(scope.timeoutid);
                    }
                    scope.timeoutid = $timeout(function() {
                        scope.isplaying = false;
                    }, scope.item.duration * 1000);
                } else {
                    scope.isplaying = false;
                    $timeout.cancel(scope.timeoutid);
                }
            }

        }
    }
}]);

// conversationDire.directive("unknownMessage", [function () {
//         return {
//             restrict: "E",
//             scope: {
//                 item: "="
//             },
//             template: '<div class="Messages-getHistory"><b>{{item.content}}</b></div>',
//             replace: true,
//             link: function(scope: any, ele: angular.IRootElementService, attr: any) {
//             }
//         };
//     }]);

conversationDire.directive("textMessage", [function() {
    return {
        restrict: "E",
        scope: {
            item: "="
        },
        template: '<div class="">' +
        '<div class="Message-text">' +
        '<pre class="Message-entry" ng-bind-html="content|trustHtml">' +
        '</pre>' +
        '<br></span></div>' +
        '</div>',
        replace: true,
        link: function(scope: any, ele: angular.IRootElementService, attr: any) {
            var EMailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/gi
            var EMailArr = <string[]>[];
            scope.content = scope.item.content.replace(EMailReg, function(str: any) {
                EMailArr.push(str);
                return '[email`' + (EMailArr.length - 1) + ']';
            });

            var URLReg = /(((ht|f)tp(s?))\:\/\/)?((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|(www.|[a-zA-Z].)[a-zA-Z0-9\-\.]+\.(com|cn|edu|gov|mil|net|org|biz|info|name|museum|us|ca|uk|me|im))(\:[0-9]+)*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*/gi

            scope.content = scope.content.replace(URLReg, function(str: any, $1: any) {
                if ($1) {
                    return '<a target="_blank" href="' + str + '">' + str + '</a>';
                } else {
                    return '<a target="_blank" href="//' + str + '">' + str + '</a>';
                }
            });

            for (var i = 0, len = EMailArr.length; i < len; i++) {
                scope.content = scope.content.replace('[email`' + i + ']', '<a href="mailto:' + EMailArr[i] + '">' + EMailArr[i] + '<a>');
            }
        }
    }
}])

conversationDire.directive("imageMessage", [function() {
    return {
        restrict: "E",
        scope: { item: "=" },
        template: '<div class="">' +
        '<div class="Message-img">' +
        '<span id="{{\'rebox_\'+$id}}" ng-click="showBigImage()"   class="Message-entry gallery" style="">' +
        '<!-- <p>发给您一张示意图</p> -->' +
        // '<img ng-src="{{item.content||\'../../static/images/barBg.png\'}}" data-image="{{item.imageUri}}" alt=""/>' +
        '<a href="{{item.imageUri||\'../../static/images/barBg.png\'}}"><img ng-src="{{item.content||\'../../static/images/barBg.png\'}}"  data-image="{{item.imageUri}}" alt=""/></a>' +
        '</span>' +
        '</div>' +
        '</div>',
        link: function(scope: any, ele: angular.IRootElementService, attr: any) {
            var img = new Image();
            img.src = scope.item.imageUri;
            setTimeout(function() {
                $('#rebox_' + scope.$id).rebox({ selector: 'a' }).bind("rebox:open", function() {
                    //jQuery rebox 点击空白关闭
                    var rebox = <any>document.getElementsByClassName("rebox")[0];
                    rebox.onclick = function(e: any) {
                        if (e.target.tagName.toLowerCase() != "img") {
                            var rebox_close = <any>document.getElementsByClassName("rebox-close")[0];
                            rebox_close.click();
                            rebox = null; rebox_close = null;
                        }
                    }
                });
            })



            img.onload = function() {

                scope.$apply(function() {
                    scope.item.content = scope.item.imageUri
                });
            }
            scope.showBigImage = function() {

            }
        }
    }
}])

conversationDire.directive("bigImage", [function() {
    return {
        restrict: "E",
        scope: { show: "=", imagesrc: "=" },
        template: '<div class="bigimage-background">' +
        '<div class="bigimage">' +
        '<img src="imagesrc"></img>' +
        '</div>' +
        '</div>',
        link: function(scope: any, ele: angular.IRootElementService, attr: any) {

        }
    }
}]);

conversationDire.directive("richContentMessage", [function() {
    return {
        restrict: "E",
        scope: {
            item: "="
        },
        template: '   <div class="" >' +
        '<div class="Message-image-text">' +
        '<span class="Message-entry" style="">' +
        '<div class="image-textBox">' +
        '<h4>{{item.title}}</h4>' +
        '<div class="cont clearfix">' +
        '<img ng-src="{{item.imageUri||\'../../static/images/barBg.png\'}}" alt=""/>' +
        '<div>{{item.content}}</div>' +
        '</div>' +
        '</div>' +
        '</span>' +
        '</div>' +
        '</div>'
    }
}]);

conversationDire.directive("locationMessage", [function() {
    return {
        restrict: "E",
        scope: {
            item: "="
        },
        template: ' <div class="">' +
        '<div class="Message-map">' +
        '<span class="Message-entry" style="">' +
        '<div class="mapBox">' +
        '<img ng-src="{{item.content||\'../../static / images / barBg.png\'}" alt=""/>' +
        '<span>{{item.poi}}</span>' +
        '</div>' +
        '</span>' +
        '</div>' +
        '</div>'
    }
}])

conversationDire.directive("dateMessage", [function() {
    return {
        restrict: "E",
        scope: { date: "=" },
        template: '<div class="Messages-date"><b style="cursor: default;">{{date|historyTime}}</b></div>',
        link: function(scope: any, ele: angular.IRootElementService, attr: any) {
        }
    }
}]);
conversationDire.directive("getHistoryMessage", [function() {
    return {
        restrict: "E",
        scope: { myclick: "&" },
        template: '<div class="Messages-getHistory"><b ng-click="myclick()" class="" style="cursor: pointer;">查看历史消息</b></div>',
        link: function(scope: any, ele: angular.IRootElementService, attr: any) {
        }
    }
}]);
conversationDire.directive("getMoreMessage", [function() {
    return {
        restrict: "E",
        scope: { myclick: "&" },
        template: '<div class="Messages-getHistory"><b ng-click="myclick()" class="" style="cursor: pointer;">获取更多历史消息</b></div>'
    }
}]);
