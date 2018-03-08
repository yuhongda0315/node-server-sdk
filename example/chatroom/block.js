'use strict';

var RongSDK = require('../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Block = Chatroom.Block;

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/block.html#add
*/
var chatroom = {
	id: 'chrmId001',
	memberIds: ['seal9901'],
	minute: 30
};
Block.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/block.html#remove
*/
var chatroom = {
	id: 'chrmId001',
	memberIds: ['seal9901']
};
Block.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/block.html#getList
*/
var chatroom = {
	id: 'chrmId001'
};
Block.getList(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});