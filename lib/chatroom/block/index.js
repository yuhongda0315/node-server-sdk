"use strict";

/*
	参考文档：http://rongcloud.cn/docs/server.html#group_user_gag
*/

const config = require('./api.json');
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
	let chrmVerify = _.pick(verify.chatroom, 'id', 'memberIds', 'minute');

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
			pos: 'ChatroomBlock.add'
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
			pos: 'ChatroomBlock.remove'
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
			pos: 'ChatroomBlock.getList'
		});
		return error;
	});
};

module.exports = {
	add: add,
	remove: remove,
	getList: getList
}