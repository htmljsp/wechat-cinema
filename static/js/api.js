import * as CryptoJS from './aes.js';
import Vue from 'vue';
function vodCl(data) {

	if (typeof data.vod_play_from == 'string' ) {
		data.vod_play_from = data.vod_play_from.split('$$$');
		data.vod_play_url = data.vod_play_url.split('$$$');
		data.vod_author = data.vod_author.split(',');
		data.vod_content = data.vod_content.replace(/<[^bai>]+>/g,"");
		data.vod_mincontent = data.vod_content.substr(0, 85) + '... ';
		data.vod_play_url = data.vod_play_from.map((item, idx) => [item, data.vod_play_url[idx]]);
		var le = [];
		for (var i = 0; i < data.vod_play_url.length; i++) { 
			if(getApp().globalData.$config.play.hasOwnProperty('vodPlayer')){
		    	var sort = getApp().globalData.$config.play.vodPlayer;
				var index = sort.id.indexOf(data.vod_play_from[i]);
				if(index < 0){
					le.unshift(i);
				}else{
					data.vod_play_url[i][0] = sort.title[index];
					data.vod_play_url[i][3] = data.vod_play_from[i];
				}
		    }
			var a = data.vod_play_url[i][1].replace(/#/g, '"},{"title":"');
			data.vod_play_url[i][1] =JSON.parse('[{"title":"' + a.replace(/\$/g, '","src":"') + '"}]') ;
			data.vod_play_url[i][2] = data.vod_play_url[i][1].length;
		}
		for (let i = 0; i < le.length; i++) {
		    data.vod_play_from.splice(le[i], 1);
			data.vod_play_url.splice(le[i], 1);
		}

		if(getApp().globalData.$config.play.hasOwnProperty('vodPlayer')){
			var vodPlayer = getApp().globalData.$config.play.vodPlayer;
			data.vod_play_url.sort((prev, next) => {  
			   return vodPlayer.title.indexOf(prev[0]) - vodPlayer.title.indexOf(next[0])
			 })
			
		}
		if(data.type_id == 2 || data.type_id == 3 || data.type_id == 4){
			data.vod_play_url.sort((prev, next) => {  
			   return  next[2] - prev[2]
			 })
		}
		uni.setStorageSync('$voddata', data); 
		return data;
	}else{
		uni.setStorageSync('$voddata', data); 
		return data;
	}
	
}

function apiRequest(url) {
	return new Promise((red, rej) => {
		uni.request({ //取配置信息注册会员
			url: url,
			dataType: "json",
			success: (res) => {
				
				if(typeof res.data.Data=='string'){
					res.data.Data = JSON.parse(CryptoJS.pwd(res.data.Data, Vue.prototype.key, Vue.prototype.iv));
				}
				//console.log(res.data.Data);
				red(res.data)
			},
			fail: () => {
				rej();
			},
			complete: () => {}
		});
	})

}

function getSetting() {
	return new Promise((red, rej) => {
		uni.getSetting({
		   success(res) {
			   //console.log(res);
		      if (res.authSetting['scope.userInfo']) {
		      	// 用户信息已授权，获取用户信息
		      	red(true)
		      } else if (!res.authSetting['scope.userInfo']) {
		      	red(false) 
		      }
		   },
		   fail() {
		   	console.log("获取已授权选项失败");
		   	 red(false) 
		   }
		})
	})
}
// function getUserInfo() {
	
// }
function login() {
	return new Promise((red, rej) => {
		uni.login({
			provider: 'weixin',
			success:loginRes=>{
				uni.request({ //取配置信息
					url: 'https://api.weixin.qq.com/sns/jscode2session',
					dataType:"json",
					data: {
						'grant_type' : 'authorization_code',
						'appid'	  : getApp().globalData.$config.site.appid,
						'secret'  : getApp().globalData.$config.site.AppSecret,
						'js_code' : loginRes.code
					},
					success: (res) => {								
						red(res.data.openid) 
					}
				});
			}
		})
	})
}
function onShare(name,pathUrl,pic){
	if(!name){
		name = getApp().globalData.$config.index.share.title;
	}
	if(!pathUrl){
		pathUrl = 'pages/index/index?from=index'
	}
	if(!pic){
		pic = getApp().globalData.$config.index.share.image
	}
	return {
		title: name,
		path: pathUrl,
		imageUrl: pic,
		success: function(res) {
			
		},
		fail: function(res) {
			
		}
	}
}
function getIP(text) {
	if(text == ''){
		text = '腾讯云';
	}
	return new Promise((red, rej) => {
		uni.request({ //取配置信息注册会员
			url: 'https://mip.chinaz.com/?query=',
			success: (res) => {
				//console.log(res);
				if(res.statusCode == 200){
					var ip = res.data.indexOf(text);
					if(ip >= 0){
						red(true)
					}else{
						red(false)
					}
					
				}
			},
			fail: () => {
				red(false)
			},
			complete: () => {}
		});
	})
}


function wxRegister(url) {
	var $app = getApp().globalData;
	return new Promise((red, rej) => {
		uni.showLoading({
			mask: true,
			title: "正在登录"
		});
		uni.request({ //取配置信息注册会员
			url: url,
			dataType: "json",
			success: (res) => {
				uni.hideLoading();
				if(typeof res.data.Data=='string'){
					res.data.Data = JSON.parse(CryptoJS.pwd(res.data.Data, Vue.prototype.key, Vue.prototype.iv));
				}
				var val = res.data;
				if (val.Code == 200) {
					var log = $app.$config.site.login;
					if (val.Data.code == 200) {
						Vue.prototype.$user_login = true;
						if(val.Data.userInfo.user_status == 0){
							$app.$wxverify = true;
						}else if (log.radio == '1' && val.Data.userInfo.user_login_num  >= Number(log.num)){
							if($app.$platform =='android'|| $app.$platform =='ios'){
								$app.$wxverify = false;
							}
						}
						uni.setStorageSync('$new', true);
						uni.setStorageSync('$userInfo', val.Data.userInfo);
						red(true)
					}
				}else{
					red(false)
				}
				uni.showToast({
					title: val.Data.tips,
					icon: "none",
					duration: 2000
				});
			}
		});
	})
	
	
}
export {
	vodCl,
	apiRequest,
	getSetting,
	onShare,
	login,
	getIP,
	wxRegister,
}
