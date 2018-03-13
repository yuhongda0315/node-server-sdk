'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Ban = Chatroom.Ban;

/*
API 文档: http://www.rongcloud.cn/docs/server/sdk/chatroom/ban.html#add
*/
var chatroom = {
	memberIds: ['member01', 'member02'],
	minute: 30
};
Ban.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server/sdk/chatroom/ban.html#remove
*/
var chatroom = {
	memberIds: ['member01', 'member02']
};
Ban.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server/sdk/chatroom/ban.html#getList
*/
Ban.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});