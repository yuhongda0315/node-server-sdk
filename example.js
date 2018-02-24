'use strict';
let rongSDK = require('./index')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

let User = rongSDK.User;
let Sensitive = rongSDK.Sensitive;
let Message = rongSDK.Message

var userInfo = {
	id: 'ujadk90ha',
	name: 'Maritn',
	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
};

// User.getToken(userInfo).then(result => {
// 	console.log(result);
// }, error => { 
// 	console.log(error);
// });

// User.refresh(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// userInfo = {
// 	id: 'ujadk90ha',
// 	minute: 10,
// 	blackIds: ['1001', '1002', '1003', '2001']
// };

// let UserBlack = User.Black;
// UserBlack.add(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// UserBlack.getList(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// UserBlack.remove(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let UserBlock = User.Block;
// UserBlock.add(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// UserBlock.remove(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// UserBlock.getList(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });


// let OnlineStatus = User.OnlineStatus;

// OnlineStatus.get(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let rule = {
// 	keyword: '小米手机',
// 	replace: 'iPhone7'
// };
// Sensitive.add(rule).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// type: 1 敏感词屏蔽
// let rule = {
// 	keyword: 'QQ',
// 	type: 1
// };
// Sensitive.add(rule).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// //敏感词批量删除
// Sensitive.remove({
// 	keywords: ['天空的颜色']
// }).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// type 0 敏感词替换， type 1 敏感词屏蔽， 默认获取全部
// Sensitive.getList().then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });


/*
	type: PRIVATE | GROUP | SYSTEM | CHATROOM | DISCUSSION

	let message = {
		type: 'PRIVATE',
		senderId: 2191,
		targetId: 2192,
		receiverIds: 2034,
		objectName: 'RC:TxtMsg',
		content: {
			content: 'Martin'
		},
		pushContent: "push 内容",
		pushData: {
			data: "hello"
		},
		count: 1,
		verifyBlacklist: 0,
		isPersisted: 1,
		isCounted: 1,
		isIncludeSender: 0,
		contentAvailable: 0
	};
*/

// let message = {
// 	type: 'PRIVATE',
// 	senderId: 'sea9902',
// 	targetId: 'sea9901',
// 	// 群组定向消息
// 	// receiverIds: [],
// 	objectName: 'RC:TxtMsg',
// 	content: {
// 		content: 'helloworld'
// 	}
// };

// let message = {
// 	type: 'GROUP',
// 	senderId: 'sea9902',
// 	targetId: 'group01',
// 	// 群组定向消息
// 	mentionIds: ['sea9903'],
// 	objectName: 'RC:TxtMsg',
// 	content: {
// 		content: 'helloworld 000111'
// 	}
// };

// Message.send(message).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

/*
	type: CHATROOM | SYSTEM
*/
// let message = {
// 	type: 'SYSTEM',
// 	senderId: '__SYSTEM__',
// 	objectName: 'RC:TxtMsg',
// 	content: {
// 		content: '文本消息测试-chat'
// 	}
// };

// Message.sendBroadcast(message).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

/*
	type:  PRIVATE | GROUP | DISCUSSION
*/
// let message = {
// 	senderId: 'sea9901',
// 	type: 'PRIVATE',
// 	targetId: 'sea9902',
// 	uId: '5GSB-RPM1-KP8H-9JHF',
// 	sentTime: 1519444243981
// };

// Message.recall(message).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

let message = {
	type: 'SYSTEM',
	senderId: '__SYSTEM__',
	objectName: 'RC:TxtMsg',
	template: {
		content: '{name}, 语文成绩 {score} 分'
	},
	content: {
		sea9901: {
			data: {'{name}': '小明', '{score}': '90'},
			push: '{name} 考试成绩'
		},
		sea9902: {
			data: {'{name}': '小红', '{score}': '95'},
			push: '{name} 考试成绩'
		}
	}
};

Message.sendTemplate(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
