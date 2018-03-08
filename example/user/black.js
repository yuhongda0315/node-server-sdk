'use strict';

var RongSDK = require('../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;
var UserBlack = User.Black;

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/user/black.html#add
var user = {
	id: 'ujadk90ha',
	blackIds: ['kkj9o01']
};
UserBlack.add(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/user/black.html#remove
var user = {
	id: 'ujadk90ha',
	blackIds: ['kkj9o01']
};
UserBlack.remove(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/user/black.html#getList
var user = {
	id: 'ujadk90ha'
};
UserBlack.getList(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});