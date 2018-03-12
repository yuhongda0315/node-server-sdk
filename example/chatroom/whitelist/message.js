'use strict';

var RongSDK = require('../../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var WhiteList = Chatroom.WhiteList.Message;

/*
http://www.rongcloud.cn/docs/server/sdk/chatroom/whitelist/message.html#add
*/
var chatroom = {
	msgs: ['RC:TxtMsg01']
};
WhiteList.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
http://www.rongcloud.cn/docs/server/sdk/chatroom/whitelist/message.html#remove
*/
var chatroom = {
	msgs: ['RC:TxtMsg01']
};
WhiteList.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
http://www.rongcloud.cn/docs/server/sdk/chatroom/whitelist/message.html#getList
*/
WhiteList.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
