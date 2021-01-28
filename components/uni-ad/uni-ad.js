(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ad/uni-ad"],{"2c61":function(e,t,n){"use strict";n.r(t);var a=n("644f"),r=n("b04e");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("3eaf");var c,f=n("f0c5"),i=Object(f["a"])(r["default"],a["b"],a["c"],!1,null,"5224f1ac",null,!1,a["a"],c);t["default"]=i.exports},"3eaf":function(e,t,n){"use strict";var a=n("8514"),r=n.n(a);r.a},"644f":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c},u=[]},8514:function(e,t,n){},b04e:function(e,t,n){"use strict";n.r(t);var a=n("fce6"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},fce6:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{gg:{type:Object,defual:function(){return{}}}},data:function(){return{}},methods:{ggImage:function(){var t=this;switch(t.gg.type){case"0":e.setStorageSync("$web",t.gg.url),e.navigateTo({url:"../web/web"});break;case"1":e.navigateToMiniProgram({appId:t.gg.url,path:"",success:function(e){}});break;case"2":t.gg.url&&wx.previewImage({current:t.gg.url,urls:[t.gg.url]});break;case"3":t.gg.url&&e.navigateTo({url:t.gg.url});break}}}};t.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ad/uni-ad-create-component',
    {
        'components/uni-ad/uni-ad-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2c61"))
        })
    },
    [['components/uni-ad/uni-ad-create-component']]
]);
