'use strict';

var RongSDK = require('../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var Group = Message.Group;

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/message/group.html#send
var message = {
	senderId: 'sea9902',
	targetId: 'markoiwm',
	objectName: 'RC:TxtMsg',
	content: {
		content: '你好，小明'
	}
};
Group.send(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/**
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/message/group.html#sendMention
*/ 
var message = {
	senderId: 'sea9902',
	targetId: 'markoiwm',
	mentionIds: ['kladd', 'almmn1'],
	objectName: 'RC:TxtMsg',
	content: {
		content: '你好，小明'
	}
};
Group.sendMention(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/message/private.html#recall

客户端发送消息成功后可以取到消息的 uId 和 sentTime，可通过客户端将参数传到服务端
*/
var message = {
	senderId: 'sea9901',
	targetId: 'markoiwm',
	uId: '5GSB-RPM1-KP8H-9JHF',
	sentTime: 1519444243981
};
Group.recall(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
