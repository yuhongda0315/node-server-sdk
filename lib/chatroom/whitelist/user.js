"use strict";

/*
	参考文档：http://rongcloud.cn/docs/server.html#chatroom_user_whitelist_query
*/

const config = require('./user-api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const rename = utils.rename;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let add = (chatroom) => {
	let conf = config.add;
	let chrmVerify = _.pick(verify.chatroom, 'id', 'memberIds');
	let error = check({
		api: conf,
		model: 'chatroom',
		data: chatroom,
		verify: chrmVerify
	});

	if (error) {
		return Promise.reject(error);
	}

	chatroom = utils.rename(chatroom, {
		id: 'chatroomId',
		memberIds: 'userId'
	});

	return request({
		url: conf.url,
		data: chatroom
	}).then(result => {
		return result.text;
	}).catch(error => {
		error = getError({
			code: error,
			errors: conf.response.fail
		});
		logger.log({
			content: error,
			level: 'error',
			pos: 'ChatroomUserWhiteList.add'
		});
		return error;
	});
};

let remove = (chatroom) => {
	let conf = config.remove;
	let chrmVerify = _.pick(verify.chatroom, 'id', 'memberIds');
	let error = check({
		api: conf,
		model: 'chatroom',
		data: chatroom,
		verify: chrmVerify
	});

	if (error) {
		return Promise.reject(error);
	}

	chatroom = utils.rename(chatroom, {
		id: 'chatroomId',
		memberIds: 'userId'
	});

	return request({
		url: conf.url,
		data: chatroom
	}).then(result => {
		return result.text;
	}).catch(error => {
		error = getError({
			code: error,
			errors: conf.response.fail
		});
		logger.log({
			content: error,
			level: 'error',
			pos: 'ChatroomUserWhiteList.remove'
		});
		return error;
	});
};

let getList = (chatroom) => {
	let conf = config.getList;

	let chrmVerify = _.pick(verify.chatroom, 'id');
	let error = check({
		api: conf,
		model: 'chatroom',
		data: chatroom,
		verify: chrmVerify
	});

	if (error) {
		return Promise.reject(error);
	}

	chatroom = utils.rename(chatroom, {
		id: 'chatroomId'
	});

	return request({
		url: conf.url,
		data: chatroom
	}).then(result => {
		return utils.rename(result.text, {
			users: 'memberIds'
		});
	}).catch(error => {
		error = getError({
			code: error,
			errors: conf.response.fail
		});
		logger.log({
			content: error,
			level: 'error',
			pos: 'ChatroomUserWhiteList.getList'
		});
		return error;
	});
};

module.exports = {
	add: add,
	remove: remove,
	getList: getList
};
