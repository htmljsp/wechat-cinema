(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"], {
  "36e0": function(t, a, o) {
      "use strict";
      o.r(a);
      var e = o("e6da"),
      i = o.n(e);
      for (var n in e)"default" !== n &&
      function(t) {
          o.d(a, t, (function() {
              return e[t]
          }))
      } (n);
      a["default"] = i.a
  },
  "4cbe": function(t, a, o) {
      "use strict";
      o.d(a, "b", (function() {
          return i
      })),
      o.d(a, "c", (function() {
          return n
      })),
      o.d(a, "a", (function() {
          return e
      }));
      var e = {
          uniBar: function() {
              return Promise.all([o.e("common/vendor"), o.e("components/uni-bar/uni-bar")]).then(o.bind(null, "2814"))
          },
          narBar: function() {
              return o.e("components/narBar/narBar").then(o.bind(null, "4f20"))
          },
          uniRate: function() {
              return Promise.all([o.e("common/vendor"), o.e("components/uni-rate/uni-rate")]).then(o.bind(null, "cff9"))
          },
          customAd: function() {
              return o.e("components/custom-ad/custom-ad").then(o.bind(null, "d96e"))
          },
          uniAd: function() {
              return o.e("components/uni-ad/uni-ad").then(o.bind(null, "2c61"))
          },
          vodItem: function() {
              return o.e("components/vod-item/vod-item").then(o.bind(null, "08a0"))
          },
          message: function() {
              return o.e("components/message/message").then(o.bind(null, "c302"))
          }
      },
      i = function() {
          var t = this,
          a = t.$createElement;
          t._self._c
      },
      n = []
  },
  "4f89": function(t, a, o) {
      "use strict";
      o.r(a);
      var e = o("4cbe"),
      i = o("36e0");
      for (var n in i)"default" !== n &&
      function(t) {
          o.d(a, t, (function() {
              return i[t]
          }))
      } (n);
      o("7e43");
      var d, s = o("f0c5"),
      r = Object(s["a"])(i["default"], e["b"], e["c"], !1, null, "4496cd9e", null, !1, e["a"], d);
      a["default"] = r.exports
  },
  "7e43": function(t, a, o) {
      "use strict";
      var e = o("cbe3"),
      i = o.n(e);
      i.a
  },
  8925 : function(t, a, o) {
      "use strict"; (function(t) {
          o("880b");
          e(o("66fd"));
          var a = e(o("4f89"));
          function e(t) {
              return t && t.__esModule ? t: {
              default:
                  t
              }
          }
          t(a.
      default)
      }).call(this, o("543d")["createPage"])
  },
  cbe3: function(t, a, o) {},
  e6da: function(t, a, o) {
      "use strict"; (function(t) {
          Object.defineProperty(a, "__esModule", {
              value: !0
          }),
          a.
      default = void 0;
          var o = getApp().globalData,
          e = null,
          i = {
              data: function() {
                  return {
                      theme: o.$theme,
                      voddata: [],
                      isSc: !1,
                      laiyuanindex: 0,
                      index: 0,
                      showContent: !1,
                      likedata: {},
                      vod_content: "",
                      initialTime: 0,
                      playlist: [],
                      WxVerify: !0,
                      xuanjiid: "g0",
                      reverse: !1,
                      wxAdId: [],
                      itemClick: !1,
                      likeShow: !1,
                      trailers: [],
                      photos: [],
                      popular_comments: [],
                      keyword: "",
                      isBack: !1,
                      posterImg: "",
                      adVideo: !0,
                      maxPhotos: [],
                      gg: [],
                      picError: !1,
                      vodid: 0,
                      message: !1
                  }
              },
              onLoad: function(a) {
                  this.vodid = a.id,
                  t.getStorageSync("$voddata").vod_id == this.vodid && (this.voddata = t.getStorageSync("$voddata"));
                  var e = this;
                  o.$login ? e.refresh(e.vodid) : setTimeout((function() {
                      e.refresh(e.vodid)
                  }), 300)
              },
              onReady: function() {},
              onShareAppMessage: function(a) {
                  var o = t.getStorageSync("$userInfo").user_id,
                  e = "/pages/detail/detail?id=" + this.voddata.vod_id;
                  return o && (e = "pages/detail/detail?uid=" + o + "&id=" + this.voddata.vod_id),
                  this.api.onShare(this.voddata.vod_name + "在线观看", e, this.voddata.vod_pic)
              },
              onShareTimeline: function(a) {
                  var o = t.getStorageSync("$userInfo").user_id,
                  e = "/pages/detail/detail?id=" + this.voddata.vod_id;
                  return o && (e = "pages/detail/detail?uid=" + o + "&id=" + this.voddata.vod_id),
                  {
                      title: this.voddata.vod_name + "在线观看",
                      path: e,
                      imageUrl: this.voddata.vod_pic
                  }
              },
              onHide: function() {
                  this.isBack = !0
              },
              onShow: function() {
                  var t = this;
                  t.isBack && t.interstitialAd && t.interstitialAd.show().
                  catch((function(t) {
                      console.error(t)
                  }))
              },
              methods: {
                  contenTab: function() {
                      this.showContent = !this.showContent
                  },
                  init: function() {
                      var a = this,
                      i = this;
                      this.wxAdId = o.$config.detail.wxAdId,
                      this.gg = o.$config.detail.gg;
                      var n = parseInt(Date.parse(new Date)) / 1e3;
                      "1" == o.$config.play.isPoints && t.getStorageSync("$adNum") < parseInt(o.$config.play.num) && (0 == o.$config.play.hasOwnProperty("interval") && o.$config.play.interval, t.getStorageSync("$interval") || t.setStorageSync("$interval", 0), n - t.getStorageSync("$interval") > parseInt(o.$config.play.interval) ? o.$points = !0 : console.log(t.getStorageSync("$interval") + parseInt(o.$config.play.interval) - n + "开始下次广告")),
                      "1" == o.$config.site.message.radio && (this.message = !0),
                      wx.createInterstitialAd && i.wxAdId.cpId && (this.interstitialAd = wx.createInterstitialAd({
                          adUnitId: i.wxAdId.cpId
                      }), this.interstitialAd.onLoad((function() {})), this.interstitialAd.onError((function(t) {})), this.interstitialAd.onClose((function() {
                          a.interstitialAd.destroy(),
                          a.interstitialAd = null
                      }))),
                      wx.createRewardedVideoAd && this.wxAdId.jlspId && (e = wx.createRewardedVideoAd({
                          adUnitId: this.wxAdId.jlspId
                      }), e.onLoad((function() {})), e.onError((function(t) {})), e.onClose((function(a) {
                          if (a && a.isEnded) {
                              o.$points = !1,
                              i.playType(),
                              e.destroy();
                              var n = t.getStorageSync("$adNum");
                              t.setStorageSync("$adNum", n + 1);
                              var d = parseInt(Date.parse(new Date)) / 1e3;
                              t.setStorageSync("$interval", d)
                          } else {
                              var s = "广告完成后开始播放,是否继续观看视频";
                              o.$config.detail.adMsg.hasOwnProperty("close") && (s = o.$config.detail.adMsg.close),
                              t.showModal({
                                  content: s,
                                  confirmColor: "#ff9900",
                                  success: function(t) {
                                      t.confirm && i.adTab()
                                  }
                              })
                          }
                      }))),
                      "pages/index/index" !== o.$scene.path && i.interstitialAd && (console.log(o.$scene.path), setTimeout((function() {
                          i.interstitialAd.show().
                          catch((function(t) {
                              console.error(t)
                          }))
                      }), 1e3))
                  },
                  refresh: function(a) {
                      var e = this,
                      i = this;
                      this.WxVerify = o.$wxverify,
                      t.showLoading({
                          mask: !0,
                          title: "加载中..."
                      });
                      var n = this.md5(this.mark + "App.Mov.GetOnlineMvById" + a),
                      d = this.cjurl + "wxApi/public/?service=App.Mov.GetOnlineMvById&vodid=" + a + "&mark=" + this.mark + "&sign=" + n;
                      this.api.apiRequest(d).then((function(a) {
                          t.hideLoading(),
                          200 == a.Code && a.Data.items.length > 0 ? (i.voddata = i.api.vodCl(a.Data.items[0]), i.doubanView(), t.setStorageSync("$voddata", i.voddata), e.likedata = a.Data.level.list, e.init(), i.voddata.vod_name && t.setNavigationBarTitle({
                              title: i.voddata.vod_name
                          })) : t.showToast({
                              title: "暂无片源，联系客服反馈！",
                              icon: "none",
                              duration: 2e3
                          })
                      }))
                  },
                  doubanView: function() {
                      "1" == o.$config.detail.douban && this.voddata.hasOwnProperty("vod_douban_id") && (this.voddata.vod_douban_id < 1 ? this.searchDouban(this.voddata.vod_name) : ("1" == o.$config.detail.dbStills && this.dbStills(), "1" == o.$config.detail.dbUpdate && this.getDouban(), this.likeShow = !0))
                  },
                  searchDouban: function(a) {
                      var o = this,
                      e = this;
                      t.request({
                          url: "https://frodo.douban.com/api/v2/search?&apiKey=054022eaeae0b00e0fc068c0c0a2102a&q=" + a,
                          dataType: "json",
                          success: function(t) {
                              if (t.data.subjects.length > 0) for (var i = t.data.subjects,
                              n = 0; n < i.length; n++) {
                                  var d, s = i[n].title.replace(/[\·|\s*]/g, "");
                                  if (a = a.replace(/[\·|\s*]/g, ""), a.indexOf(s) >= 0 || s.indexOf(a) >= 0) if (i[n].hasOwnProperty("actors") && 0 != i[n].actors.length && "" !== e.voddata.vod_actor && (d = e.voddata.vod_actor.indexOf(i[n].actors[0].name), console.log("actor:" + d)), d < 0 && i[n].hasOwnProperty("directors") && 0 != i[n].directors && "" !== e.voddata.vod_director && (d = e.voddata.vod_director.indexOf(i[n].directors[0].name), console.log("directors:" + d)), d < 0 && e.voddata.vod_year == i[n].year && (d = 1, console.log("year:" + d)), d >= 0) {
                                      e.voddata.vod_score = i[n].rating.value,
                                      e.voddata.vod_douban_score = i[n].rating.value,
                                      e.voddata.vod_douban_id = i[n].id,
                                      i[n].rating.count > e.voddata.vod_hits && (e.voddata.vod_hits = i[n].rating.count),
                                      e.voddata.vod_class = i[n].genres.join(","),
                                      o.doubanInfo();
                                      break
                                  }
                              }
                          },
                          complete: function() {}
                      })
                  },
                  doubanInfo: function() {
                      var t = {};
                      this.picError && (t.vod_pic = this.voddata.vod_pic),
                      t.vod_id = this.voddata.vod_id,
                      t.vod_douban_score = this.voddata.vod_douban_score,
                      t.vod_score = this.voddata.vod_score,
                      t.vod_douban_id = this.voddata.vod_douban_id,
                      t.vod_duration = this.voddata.vod_duration,
                      t.vod_class = this.voddata.vod_class,
                      t.vod_tag = this.voddata.vod_tag,
                      t = JSON.stringify(t);
                      var a = this.md5("App.Mov.SetMovById" + t),
                      o = this.cjurl + "wxApi/public/?service=App.Mov.SetMovById&vod=" + t + "&sign=" + a;
                      this.api.apiRequest(o).then((function(t) {}))
                  },
                  poster: function(a, e) {
                      var i = this;
                      a = JSON.stringify(a),
                      t.showLoading({
                          mask: !0,
                          title: "正在生成..."
                      });
                      var n = this.md5("微信" + this.mark + e + "App.Code.WxPoster" + a),
                      d = this.cjurl + "wxApi/public/?service=App.Code.WxPoster&iMark=" + this.mark + "&app=微信&path=" + e + "&text=" + a + "&sign=" + n;
                      this.api.apiRequest(d).then((function(a) {
                          200 == a.Code && 0 != a.Data.imgUrl ? i.posterImg = a.Data.imgUrl: i.posterImg = o.$config.site.sharepic,
                          wx.previewImage({
                              current: i.posterImg,
                              urls: [i.posterImg]
                          }),
                          t.hideLoading()
                      }))
                  },
                  haibao: function() {
                      var t = o.$config.site.share;
                      if ("1" == t.type) {
                          var a = {
                              width: 400,
                              height: 500,
                              vod_name: this.voddata.vod_name,
                              vod_pic: this.voddata.vod_pic,
                              vod_actor: this.voddata.vod_actor,
                              wxText: t.wxText,
                              codeText: "微信长按识别进入"
                          },
                          e = "pages/detail/detail?id=" + this.voddata.vod_id;
                          this.poster(a, e)
                      } else o.$config.site.sharepic && wx.previewImage({
                          current: o.$config.site.sharepic,
                          urls: [o.$config.site.sharepic]
                      })
                  },
                  dbStills: function() {
                      var a = this,
                      o = "tv";
                      1 != a.voddata.type_id && 23 != a.voddata.type_id || (o = "movie"),
                      t.request({
                          url: "https://frodo.douban.com/api/v2/" + o + "/" + this.voddata.vod_douban_id + "/photos?start=0&count=12&apiKey=054022eaeae0b00e0fc068c0c0a2102a",
                          method: "GET",
                          header: {
                              "Content-Type": "application/text"
                          },
                          success: function(t) {
                              if (404 != t.data.code) {
                                  var o = t.data.photos.length,
                                  e = [],
                                  i = [];
                                  if (o > 0) {
                                      for (var n = 0; n < o; n++) e[n] = t.data.photos[n].image.small.url,
                                      i[n] = t.data.photos[n].image.large.url;
                                      a.maxPhotos = i,
                                      a.photos = e,
                                      a.likeShow = !0
                                  }
                              }
                          },
                          fail: function() {}
                      })
                  },
                  showPhotos: function(a) {
                      var o = this;
                      t.previewImage({
                          current: a,
                          urls: o.maxPhotos,
                          longPressActions: {
                              itemList: ["发送给朋友", "保存图片", "收藏"],
                              success: function(t) {},
                              fail: function(t) {
                                  console.log(t.errMsg)
                              }
                          }
                      })
                  },
                  getDouban: function() {
                      var a = this;
                      t.request({
                          url: "https://frodo.douban.com/api/v2/movie/" + this.voddata.vod_douban_id + "?apikey=054022eaeae0b00e0fc068c0c0a2102a",
                          method: "GET",
                          header: {
                              "Content-Type": "application/text"
                          },
                          success: function(o) { (a.voddata.vod_douban_score != o.data.rating.value || a.picError && a.voddata.vod_pic !== o.data.pic.normal) && (a.voddata.vod_douban_score = o.data.rating.value, a.voddata.vod_score = o.data.rating.value, a.voddata.vod_duration = o.data.durations[0], a.voddata.vod_class = o.data.genres.join(","), a.picError && (a.voddata.vod_pic = o.data.pic.normal), t.setStorageSync("$voddata", a.voddata), a.doubanInfo())
                          },
                          fail: function() {}
                      })
                  },
                  getDate: function(t) {
                      t != this.voddata.vod_id && this.refresh(t)
                  },
                  play: function() {
                      var a = this;
                      if ("1" == o.$config.detail.play.radio && o.$config.detail.play.APPID) o.$config.detail.play.APPID.indexOf("pages") >= 0 ? t.navigateTo({
                          url: o.$config.detail.play.APPID
                      }) : t.showModal({
                          title: "",
                          content: "该版本即将停用,前往新版使用",
                          confirmText: "确定",
                          success: function(e) {
                              e.confirm && t.navigateToMiniProgram({
                                  appId: o.$config.detail.play.APPID,
                                  path: "pages/detail/detail?id=" + a.voddata.vod_id,
                                  success: function(t) {}
                              })
                          }
                      });
                      else if (o.$points && e) {
                          var i = "正在加载视频,广告完成后开始播放!";
                          o.$config.detail.adMsg.hasOwnProperty("start") && (i = o.$config.detail.adMsg.start),
                          t.showModal({
                              content: i,
                              success: function(t) {
                                  t.confirm ? a.adTab() : "0" == o.$config.play.enforce && (console.log("详情不强制观看广告跳过"), this.playType())
                              }
                          })
                      } else this.playType()
                  },
                  adTab: function() {
                      var t = this;
                      e.show().
                      catch((function() {
                          e.load().then((function() {
                              return e.show()
                          })).
                          catch((function(a) {
                              e.destroy(),
                              o.$points = !1,
                              t.playType()
                          }))
                      }))
                  },
                  playType: function() {
                      this.voddata.vod_play_from.length < 1 ? t.showToast({
                          title: "Sorry，暂无播放源，联系客服反馈!",
                          icon: "none",
                          duration: 3e3
                      }) : t.navigateTo({
                          url: "../kankan/kankan?id=" + this.voddata.vod_id
                      })
                  },
                  navigate: function() {
                      t.setStorageSync("$web", o.$config.detail.gzh.pic),
                      t.navigateTo({
                          url: "../web/web"
                      })
                  },
                  BackPage: function() {
                      t.navigateBack({
                          delta: 1
                      })
                  },
                  BackIndex: function() {
                      t.switchTab({
                          url: "/pages/index/index"
                      })
                  },
                  imgError: function() {
                      this.picError = !0
                  }
              }
          };
          a.
      default = i
      }).call(this, o("543d")["default"])
  }
},
[["8925", "common/runtime", "common/vendor"]]]);