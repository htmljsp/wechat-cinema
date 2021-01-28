(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"], {
    4575: function (e, t, o) {
      "use strict";
      o.r(t);
      var n = o("9406"),
        r = o.n(n);
      for (var i in n) "default" !== i && function (e) {
        o.d(t, e, (function () {
          return n[e]
        }))
      }(i);
      t["default"] = r.a
    },
    4778: function (e, t, o) {},
    "6bd3": function (e, t, o) {
      "use strict";
      o.r(t);
      var n = o("4575");
      for (var r in n) "default" !== r && function (e) {
        o.d(t, e, (function () {
          return n[e]
        }))
      }(r);
      o("b5ae");
      var i, a, f, c, u = o("f0c5"),
        s = Object(u["a"])(n["default"], i, a, !1, null, null, null, !1, f, c);
      t["default"] = s.exports
    },
    9406: function (e, t, o) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = r(o("66fd"));

        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var i = {
          globalData: {
            playbackRate: !0,
            $wxverify: !0,
            $config: [],
            $scene: [],
            $login: !1,
            $getIP: !1,
            ShowPlay: !0,
            $points: !1,
            $theme: "black",
            systemInfo: [],
            $platform: "android"
          },
          onLaunch: function () {
            var t = this,
              o = this.$scope.globalData,
              r = wx.getLaunchOptionsSync();
            o.$scene = r, e.getStorageSync("$theme") && (o.$theme = e.getStorageSync("$theme")), "white" == o.$theme && (e.setTabBarStyle({
              color: "#A9A9A9",
              selectedColor: "#f49c36",
              backgroundColor: "#ffffff",
              borderStyle: "black"
            }), e.setBackgroundColor({
              backgroundColor: "#ffffff",
              backgroundColorTop: "#f9f9f9"
            }));
            var i = this;
            e.getSystemInfo({
              success: function (t) {
                o.$platform = t.platform;
                var n = i.md5(i.cjurl + i.mark + o.$platform + o.$scene.scene + "App.Mov.GetConfig"),
                  r = i.cjurl + "wxApi/public/?service=App.Mov.GetConfig&host=" + i.cjurl + "&scene=" + o.$scene.scene + "&mark=" + i.mark + "&platform=" + o.$platform + "&sign=" + n;
                i.api.apiRequest(r).then((function (t) {
                  200 == t.Code && (o.$config = t.Data, o.$wxverify = !o.$config.wxverify, "1" != o.$config.site.ip.radio || "boolean" == typeof e.getStorageSync("$ip") || o.$wxverify ? "1" == o.$config.site.ip.radio && 1 == e.getStorageSync("$ip") ? o.$wxverify = !0 : "0" == o.$config.site.ip.radio && e.removeStorageSync("$ip") : i.api.getIP(o.$config.site.ip.text).then((function (t) {
                    t && (o.$wxverify = !0), e.setStorageSync("$ip", t)
                  })))
                }));
                var a = wx.getMenuButtonBoundingClientRect();
                o.systemInfo.windowWidth = t.windowWidth, o.systemInfo.windowHeight = t.windowHeight, o.systemInfo.statusBarHeight = t.statusBarHeight, o.systemInfo.customWidth = a.width, o.systemInfo.customHeight = a.height, o.systemInfo.customTop = a.top, o.systemInfo.customlLeft = a.left, o.systemInfo.customBar = a.height + a.top + 10
              }
            }), this.api.getSetting().then((function (r) {
              if (e.getStorageSync("$userInfo").hasOwnProperty("user_openid_weixin") && o.$config.site.hasOwnProperty("login")) {
                var i = e.getStorageSync("$userInfo").user_openid_weixin;
                n.default.prototype.$user_login = r;
                var a = o.$config.site.login,
                  f = t.md5(i + o.$platform + o.$scene.scene + "App.User.WxLogin"),
                  c = t.cjurl + "wxApi/public/?service=App.User.WxLogin&openid=" + i + "&scene=" + o.$scene.scene + "&platform=" + o.$platform + "&sign=" + f;
                t.api.apiRequest(c).then((function (n) {
                  200 == n.Code && (0 == n.Data.user_status ? o.$wxverify = !0 : "1" == a.radio && n.Data.user_login_num >= Number(a.num) && ("android" != o.$platform && "ios" != o.$platform || (o.$wxverify = !1)), t.$user_login = !0, e.setStorageSync("$userInfo", n.Data)), o.$login = !0
                }))
              } else o.$login = !0, n.default.prototype.$user_login = !1
            }));
            var a = new Date;
            a.getDate() !== e.getStorageSync("$adTime") && (e.setStorageSync("$adNum", 0), e.setStorageSync("$adTime", a.getDate()))
          },
          onShow: function () {
            console.log("App Show")
          },
          onHide: function () {
            console.log("App Hide")
          }
        };
        t.default = i
      }).call(this, o("543d")["default"])
    },
    b3e9: function (e, t, o) {
      "use strict";
      (function (e) {
        o("880b");
        var t = u(o("66fd")),
          n = u(o("6bd3")),
          r = u(o("e785")),
          i = c(o("288e")),
          a = c(o("17cd"));

        function f() {
          if ("function" !== typeof WeakMap) return null;
          var e = new WeakMap;
          return f = function () {
            return e
          }, e
        }

        function c(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== typeof e && "function" !== typeof e) return {
            default: e
          };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, r) : null;
              i && (i.get || i.set) ? Object.defineProperty(o, r, i) : o[r] = e[r]
            } return o.default = e, t && t.set(e, o), o
        }

        function u(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function s(e, t) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), o.push.apply(o, n)
          }
          return o
        }

        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(o), !0).forEach((function (t) {
              l(e, t, o[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : s(Object(o)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            }))
          }
          return e
        }

        function l(e, t, o) {
          return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = o, e
        }
        /*   
如果您不会搭建随时联系我微信：lida2012    帮你免费搭建   

来着不拒   联系QQ249316429



        */
        t.default.prototype.md5 = r.default, t.default.prototype.db = i, t.default.prototype.api = a, t.default.prototype.cjurl = "需要替换", t.default.prototype.mark = "需要替换", t.default.prototype.iv = "需要替换", t.default.prototype.key = "需要替换", t.default.prototype.$user_login = !1, t.default.config.productionTip = !1, n.default.mpType = "app";
        var d = new t.default(p({}, n.default));
        e(d).$mount()
      }).call(this, o("543d")["createApp"])
    },
    b5ae: function (e, t, o) {
      "use strict";
      var n = o("4778"),
        r = o.n(n);
      r.a
    }
  },
  [
    ["b3e9", "common/runtime", "common/vendor"]
  ]
]);