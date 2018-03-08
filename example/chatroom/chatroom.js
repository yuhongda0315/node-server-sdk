'use strict';

var RongSDK = require('../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/chatroom.html#create
*/
var chatroom = {
	id: 'chrm001',
	name: 'RongCloud'
};
Chatroom.create(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/chatroom.html#destory
*/
var chatroom = {
	id: 'chrm001'
};
Chatroom.destory(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/chatroom.html#get
*/
var params = {
	ids: ['chrm001']
};
Chatroom.get(params).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/chatroom.html#getMembers
*/
var chatroom = {
	id: 'chrm002',
	count: 20,
	order: 1
};
Chatroom.getMembers(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/chatroom/chatroom.html#isExist
*/
var chatroom = {
	id: 'chrm002',
	memberIds: ['seal9901', 'sea9902']
};
Chatroom.isExist(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});