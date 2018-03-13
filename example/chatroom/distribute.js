'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Distribute = Chatroom.Distribute;

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/distribute.html#stop
*/
var chatroom = {
	id: 'chrmId001'
};
Distribute.stop(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/distribute.html#resume
*/
var chatroom = {
	id: 'chrmId001'
};
Distribute.resume(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
