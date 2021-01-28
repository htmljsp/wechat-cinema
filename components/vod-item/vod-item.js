(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/vod-item/vod-item"],{"017e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;getApp().globalData;var n={data:function(){return{WxVerify:"0",picError:!1,picLoad:!1,showImg:!1}},props:{theme:{type:[String],default:"white"},item:{type:Object,defual:function(){return{}}},scrollTop:{type:[Number,String],default:0},itemClick:{type:Boolean,default:!0}},mounted:function(){},filters:{ellipsis:function(t){return t?t.length>7?t.slice(0,6)+"...":t:""}},methods:{play:function(e){t.setStorageSync("$voddata",e),this.itemClick&&t.navigateTo({url:"../detail/detail?id="+e.vod_id})},imgload:function(t){this.showImg=!0},imgError:function(t){this.picError=!0}}};e.default=n}).call(this,n("543d")["default"])},"08a0":function(t,e,n){"use strict";n.r(e);var i=n("44b9"),r=n("ec01");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("26f1");var o,a=n("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=c.exports},"26f1":function(t,e,n){"use strict";var i=n("5825"),r=n.n(i);r.a},"44b9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]},5825:function(t,e,n){},ec01:function(t,e,n){"use strict";n.r(e);var i=n("017e"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/vod-item/vod-item-create-component',
    {
        'components/vod-item/vod-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("08a0"))
        })
    },
    [['components/vod-item/vod-item-create-component']]
]);
