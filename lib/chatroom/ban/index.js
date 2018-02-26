"use strict";

/*
	参考文档：http://rongcloud.cn/docs/server.html#chatroom_message
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
	let chrmVerify = _.pick(verify.chatroom, 'memberIds', 'minute');

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
			pos: 'ChatroomBan.add'
		});
		return error;
	});
};

let remove = (chatroom) => {
	let conf = config.add;
	let chrmVerify = _.pick(verify.chatroom, 'memberIds');

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
			pos: 'ChatroomBan.remove'
		});
		return error;
	});
};

let get = (chatroom) => {
	let conf = config.get;

	return request({
		url: conf.url,
		data: {}
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
			pos: 'ChatroomBan.remove'
		});
		return error;
	});
};

module.exports = {
	add: add,
	remove: remove,
	get: get
};