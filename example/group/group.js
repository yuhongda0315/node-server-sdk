'use strict';

var RongSDK = require('../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Group = RongSDK.Group;

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#sync
*/
var user = {
	id: 'martin9901',
	groups: [{id: 'group999', name: 'RongCloud'}]
};
Group.sync(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#create
*/
var group = {
	id: 'watergroup',
	name: 'WaterGroup',
	memberIds: ['sea9901', 'sea9902']
};
Group.create(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#invite
*/
var group = {
	id: 'watergroup',
	memberIds: ['sea9901', 'sea9902']
};
Group.invite(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#join
*/
var group = {
	id: 'watergroup',
	memberId: 'sea9901'
};
Group.join(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#quit
*/
var group = {
	id: 'watergroup',
	memberId: 'sea9901'
};
Group.quit(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs//group/group.html#kick
*/
var group = {
	id: 'watergroup',
	memberIds: ['sea9901', 'sea9902']
};
Group.kick(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#dismiss
*/
var params = {
	id: 'watergroup',
	operator: 'sea9901'
};
Group.dismiss(params).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#refresh
*/
var group = {
	id: 'watergroup',
	name: 'RongCloud'
};
Group.refresh(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/group/group.html#getMembers
*/
var group = {
	id: 'watergroup'
};
Group.getMembers(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
