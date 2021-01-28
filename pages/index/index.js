(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    1421: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = getApp().globalData,
          i = {
            onLoad: function () {
              var t = this;
              n.$login ? t.refresh() : setTimeout((function () {
                t.refresh()
              }), 300)
            },
            onShareAppMessage: function (e) {
              var i = t.getStorageSync("$userInfo").user_id,
                a = "pages/index/index";
              return i && (a = "pages/index/index?uid=" + i), {
                title: n.$config.index.share.title,
                path: a,
                imageUrl: n.$config.index.share.image,
                success: function (t) {},
                fail: function (t) {}
              }
            },
            onShareTimeline: function (e) {
              var i = t.getStorageSync("$userInfo").user_id,
                a = "pages/index/index";
              return i && (a = "pages/index/index?uid=" + i), {
                title: n.$config.index.share.title,
                path: a,
                imageUrl: n.$config.index.share.image
              }
            },
            onReady: function () {},
            onShow: function () {
              this.theme = n.$theme, this.adShow = !0, wx.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
              })
            },
            onHide: function () {
              this.adShow = !1, this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null)
            },
            data: function () {
              return {
                theme: n.$theme,
                cardCur: 0,
                swiperList: [],
                movieInfo: [],
                showTip: !0,
                gg: {
                  image: ""
                },
                time: 0,
                tanchuang: {
                  image: ""
                },
                notice: "感谢您的支持...",
                wxverify: !0,
                wxAdId: [],
                adShow: !0
              }
            },
            
            
            
            methods: {
              init: function () {
                var t = this,
                  e = this;
                this.wxverify = n.$wxverify, this.wxAdId = n.$config.index.wxAdId, this.tanchuang = n.$config.index.tanchuang, this.notice = n.$config.index.notice, this.openTc(), wx.createInterstitialAd && this.wxAdId.cpId && (this.interstitialAd = wx.createInterstitialAd({
                  adUnitId: this.wxAdId.cpId
                }), this.interstitialAd.onLoad((function () {})), this.interstitialAd.onError((function (t) {})), this.interstitialAd.onClose((function () {
                  t.interstitialAd.destroy(), t.interstitialAd = null
                }))), this.interstitialAd && setTimeout((function () {
                  e.interstitialAd.show().catch((function (t) {
                    console.error(t)
                  }))
                }), 1500)
              },
              refresh: function () {
                var e = this;
                t.showLoading({
                  mask: !0,
                  title: "加载中..."
                });
                var n = this.md5(this.mark + "App.Mov.GetSyLevelAll"),
                  i = this.cjurl + "wxApi/public/?service=App.Mov.GetSyLevelAll&mark=" + this.mark + "&sign=" + n;
                this.api.apiRequest(i).then((function (n) {
                  200 == n.Code && (e.init(), t.hideLoading(), e.swiperList = n.Data.lunbo, e.movieInfo = n.Data.item, e.update())
                }))
              },
              cardSwiper: function (t) {
                this.cardCur = t.detail.current
              },
              getDate: function (e) {
                t.setStorageSync("$voddata", e), t.navigateTo({
                  url: "../detail/detail?id=" + e.vod_id
                })
              },
              history: function () {
                t.navigateTo({
                  url: "../history/history?tab=0"
                })
              },
              getSearch: function () {
                t.navigateTo({
                  url: "../search/search"
                })
              },
              typeTab: function (e, i) {
                "1" == n.$config.index.more ? t.navigateTo({
                  url: "../tuijian/tuijian?id=" + e + "&name=" + i
                }) : t.switchTab({
                  url: "../fenlei/fenlei"
                })
              },
              ggImage: function (e, n) {
                switch (e) {
                  case "0":
                    t.setStorageSync("$web", n), t.navigateTo({
                      url: "../web/web"
                    });
                    break;
                  case "1":
                    t.navigateToMiniProgram({
                      appId: n,
                      path: "",
                      success: function (t) {}
                    });
                    break;
                  case "2":
                    n && wx.previewImage({
                      current: n,
                      urls: [n]
                    });
                    break;
                  case "3":
                    n && t.navigateTo({
                      url: n
                    });
                    break
                }
              },
              update: function () {
                var e = t.getUpdateManager();
                e.onUpdateReady((function () {
                  t.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function (t) {
                      t.confirm && e.applyUpdate()
                    }
                  })
                })), e.onUpdateFailed((function (t) {}))
              },
              openTc: function () {
                var e = new Date;
                "1" == this.tanchuang.radio && (this.time = e.getDate(), this.time !== t.getStorageSync("$time") && this.$refs.tanchuang.open()), this.time !== t.getStorageSync("$playbackRate") ? n.playbackRate = !0 : n.playbackRate = !1
              },
              tcTab: function () {
                this.$refs.tanchuang.close(), t.setStorageSync("$time", this.time)
              },
              white: function () {
                "white" != this.theme && (this.theme = "white", getApp().globalData.$theme = "white", t.setTabBarStyle({
                  color: "#A9A9A9",
                  selectedColor: "#f49c36",
                  backgroundColor: "#ffffff",
                  borderStyle: "black"
                }), t.setBackgroundColor({
                  backgroundColor: "#ffffff",
                  backgroundColorTop: "#f9f9f9"
                }), t.setStorageSync("$theme", "white"))
              },
              black: function () {
                "black" != this.theme && (this.theme = "black", getApp().globalData.$theme = "black", t.setTabBarStyle({
                  color: "#A9A9A9",
                  selectedColor: "#f49c36",
                  backgroundColor: "#323232",
                  borderStyle: "black"
                }), t.setBackgroundColor({
                  backgroundColor: "#000000",
                  backgroundColorTop: "#222222"
                }), t.setStorageSync("$theme", "black"))
              }
            }
          };
        e.default = i
      }).call(this, n("543d")["default"])
    },
    2827: function (t, e, n) {},
    "3e63": function (t, e, n) {
      "use strict";
      (function (t) {
        n("880b");
        i(n("66fd"));
        var e = i(n("3f54"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    "3f54": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("5b61"),
        a = n("5ee7");
      for (var o in a) "default" !== o && function (t) {
        n.d(e, t, (function () {
          return a[t]
        }))
      }(o);
      n("d2dd");
      var r, c = n("f0c5"),
        u = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
      e["default"] = u.exports
    },
    "5b61": function (t, e, n) {
      "use strict";
      n.d(e, "b", (function () {
        return a
      })), n.d(e, "c", (function () {
        return o
      })), n.d(e, "a", (function () {
        return i
      }));
      var i = {
          uniBar: function () {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-bar/uni-bar")]).then(n.bind(null, "2814"))
          },
          narBar: function () {
            return n.e("components/narBar/narBar").then(n.bind(null, "4f20"))
          },
          uniNoticeBar: function () {
            return n.e("components/uni-notice-bar/uni-notice-bar").then(n.bind(null, "1ad4"))
          },
          customAd: function () {
            return n.e("components/custom-ad/custom-ad").then(n.bind(null, "d96e"))
          },
          vodItem: function () {
            return n.e("components/vod-item/vod-item").then(n.bind(null, "08a0"))
          },
          strugglerUniappAddTip: function () {
            return n.e("components/struggler-uniapp-add-tip/struggler-uniapp-add-tip").then(n.bind(null, "ca6e"))
          },
          uniPopup: function () {
            return n.e("components/uni-popup/uni-popup").then(n.bind(null, "3982"))
          }
        },
        a = function () {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        o = []
    },
    "5ee7": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("1421"),
        a = n.n(i);
      for (var o in i) "default" !== o && function (t) {
        n.d(e, t, (function () {
          return i[t]
        }))
      }(o);
      e["default"] = a.a
    },
    d2dd: function (t, e, n) {
      "use strict";
      var i = n("2827"),
        a = n.n(i);
      a.a
    }
  },
  [
    ["3e63", "common/runtime", "common/vendor"]
  ]
]);