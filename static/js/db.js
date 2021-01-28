// 打开数据库

function scDB(vod) {

	var isSc = false;
	var key = "lishi";
	try {
		var data = uni.getStorageSync(key);
		data = JSON.parse(data);
		if (data) {
			var vodindex = 0;
			var isvod = false;
			var islishi = false;
			for (var i = 0; i < data.length; i++) {
				if (data[i].vod_id == vod.vod_id) {
					data.splice(i, 1);
					break;
				}
			}
			data.unshift(vod);
			data.length > 10 && data.pop(); //历史数组大于10删除  pop()删除最后一个数组 
			uni.setStorageSync(key, JSON.stringify(data)); //储存在存储
		}
	} catch (e) {
	    var data = [vod];
	    uni.setStorageSync(key, JSON.stringify(data)); //储存在存储
	}
	
}

function getLSDB(vod_id) {
	var vod = {};
	var key = "lishi";
	try {
		var data = uni.getStorageSync(key);
		data = JSON.parse(data);
		if (data.length > 0) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].vod_id == vod_id) {
					vod = data[i];
					break;
				}
			}
		}
	} catch (e) {

	}
	return vod;

}

function setLSDB(vod) {
	var key = "lishi";
	try {
		var data = uni.getStorageSync(key);
		data = JSON.parse(data);
		if (data) {
			//console.log(uni.getStorageSync('lishi'));
			for (var i = 0; i < data.length; i++) {
				if (data[i].vod_id == vod.vod_id) {
					data.splice(i, 1);
					break;
				}
			}
			data.unshift(vod);
			data.length > 10 && data.pop(); //历史数组大于10删除  pop()删除最后一个数组 
			uni.setStorageSync(key, JSON.stringify(data)); //储存在存储
		}
	} catch (e) {
		var data = [vod];
		uni.setStorageSync(key, JSON.stringify(data)); //储存在存储
	}


}

function DeleteDB(vod) {
	var key = "lishi";
	var data = uni.getStorageSync(key);
	data = JSON.parse(data);
	if (data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].vod_id == vod.vod_id) {
				console.log(data[i].vod_id );
				data.splice(i, 1);
				break;
			}
		}
		
	}
	uni.setStorageSync(key, JSON.stringify(data)); //储存在存储
}




export {
	scDB,
	getLSDB,
	setLSDB,
	DeleteDB
}
