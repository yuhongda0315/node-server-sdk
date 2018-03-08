'use strict';

var RongSDK = require('../../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var WhiteList = Chatroom.WhiteList.User;

/*
http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/whitelist/user.html#add
*/
var chatroom = {
	id: 'chatroom001',
	memberIds: ['member01']
};
WhiteList.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/whitelist/user.html#remove
*/
var chatroom = {
	id: 'chatroom001',
	memberIds: ['member02']
};
WhiteList.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/whitelist/user.html#getList
*/
var chatroom = {
	id: 'chatroom001'
};
WhiteList.getList(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
