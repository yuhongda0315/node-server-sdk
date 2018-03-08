'use strict';
let rongSDK = require('./index')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

let User = rongSDK.User;
let UserBlock = User.Block;
let UserBlack = User.Black;

let Sensitive = rongSDK.Sensitive;
let Message = rongSDK.Message
let HistoryMessage = Message.History;
let Conversation = rongSDK.Conversation;

let Group = rongSDK.Group;
let GroupGag = Group.Gag;

let Chatroom = rongSDK.Chatroom;
let ChatroomBlock = Chatroom.Block;
let ChatroomDistribute = Chatroom.Distribute;
let ChatroomBan = Chatroom.Ban;
let ChatroomGag = Chatroom.Gag;
let ChatroomDemotion = Chatroom.Demotion;
let ChatroomWhiteList = Chatroom.WhiteList;

let ChrmUserWhiteList = ChatroomWhiteList.User;
let ChrmMessageWhiteList = ChatroomWhiteList.Message;

var userInfo = {
	id: 'ujadk90ha',
	name: 'Maritn',
	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982',
	minute: 0
};

// User.register(userInfo).then(result => {
// 	console.log(result);
// }, error => { 
// 	console.log(error);
// });

// User.refresh(userInfo).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// var userInfo = {
// 	id: 'ujadk90ha',
// 	minute: 10,
// 	blackIds: ['1001', '1002', '1003', '2001']
// };

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

//type: 1 敏感词屏蔽
// let rule = {
// 	keyword: 'QQ',
// 	type: 1
// };
// Sensitive.add(rule).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

//敏感词批量删除
// Sensitive.remove({
// 	keywords: ['天空的颜色']
// }).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// //type 0 敏感词替换， type 1 敏感词屏蔽， 默认获取全部
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

// let message = {
// 	type: 'SYSTEM',
// 	senderId: '__SYSTEM__',
// 	objectName: 'RC:TxtMsg',
// 	template: {
// 		content: '{name}, 语文成绩 {score} 分 {push}'
// 	},
// 	content: {
// 		sea9901: {
// 			data: {'{name}': '小明', '{score}': '90'},
// 			push: '{name} 考试成绩'
// 		},
// 		sea9902: {
// 			data: {'{name}': '小红', '{score}': '95'},
// 			push: '{name} 考试成绩'
// 		}
// 	}
// };

// Message.sendTemplate(message).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let message = {
// 	date: '2018030613'
// };

// HistoryMessage.get(message).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let user = {
// 	id: 'martin9901',
// 	groups: [{id: 'group999', name: 'RongCloud'}]
// };
// Group.sync(user).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	name: 'WaterGroup',
// 	memberIds: ['sea9901', '201802261151']
// };
// Group.create(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	memberIds: ['sea9901']
// };
// Group.quit(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	name: 'Water',
// 	memberIds: ['member01', 'member02']
// };
// Group.join(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	memberIds: ['member02']
// };
// Group.kick(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	name: 'Water'
// };
// Group.refresh(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup'
// };
// Group.getMembers(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	memberIds: ['member01'],
// 	minute: 43200
// };

// GroupGag.add(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup',
// 	memberIds: ['member01']
// };
// GroupGag.remove(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let group = {
// 	id: 'watergroup'
// };
// GroupGag.getList(group).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let conversation = {
// 	type: 'PRIVATE',
// 	userId: 'member01',
// 	targetId: 'watergroup'
// };
// Conversation.get(conversation).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = [{
// 	id: 'chatroom001',
// 	name: 'chatroomName001'
// },{
// 	id: 'chatroom002',
// 	name: 'chatroomName002'
// }];
// Chatroom.create(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: ['chatroom001', 'chatroom002']
// };
// Chatroom.destory(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: ['chatroom001', 'chatroom002']
// };
// Chatroom.get(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'chatroom001'
// };
// Chatroom.getMembers(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'ChartRoomId',
// 	memberIds: ['seal9901', 'sea9901']
// };
// Chatroom.isExist(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'ChartRoomId',
// 	memberIds: ['seal9901'],
// 	minute: 30
// };

// ChatroomBlock.add(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'ChartRoomId',
// 	memberIds: ['seal9901']
// };

// ChatroomBlock.remove(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'ChartRoomId'
// };

// ChatroomBlock.getList(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'ChartRoomId'
// };

// ChatroomDistribute.resume(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	memberIds: ['member01', 'member02'],
// 	minute: 30
// };

// ChatroomBan.add(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'chatroom001',
// 	memberIds: ['member01', 'member02'],
// 	minute: 30
// };

// ChatroomGag.add(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'chatroom001',
// 	memberIds: ['member01', 'member02']
// };

// ChatroomGag.remove(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });


// let chatroom = {
// 	id: 'chatroom001'
// };

// ChatroomGag.getList(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });


// let chatroom = {
// 	msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
// };
// ChatroomDemotion.add(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	msgs: ['RC:TxtMsg']
// };
// ChatroomDemotion.remove(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {};
// ChatroomDemotion.getList(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'chatroom001',
// 	memberIds: ['member01']
// };
// ChrmUserWhiteList.add(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'chatroom001',
// 	memberIds: ['member01']
// };
// ChrmUserWhiteList.remove(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
// 	id: 'chatroom001'
// };
// ChrmUserWhiteList.getList(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });


// let chatroom = {
// 	msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
// };
// ChrmMessageWhiteList.add(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// let chatroom = {
	//id: 'chatroom001',
	// msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
// };
// ChrmMessageWhiteList.remove(chatroom).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

// ChrmMessageWhiteList.getList().then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });