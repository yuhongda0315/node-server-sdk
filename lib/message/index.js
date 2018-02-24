"use strict";

const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const isLength = utils.isLength;
const tplEngine = utils.tplEngine;
const _ = utils.underscore;
const rename = utils.rename;
const logger = utils.logger;

const getError = utils.getError;
const check = utils.check;

let send = (message) => {
	let conf = config.send;

	message.content = JSON.stringify(message.content);

	let error = check({
		api: conf,
		model: 'message',
		data: message,
		verify: verify.message
	});
	if (error) {
		return Promise.reject(error);
	}

	let idMap = {
		PRIVATE: 'toUserId',
		GROUP: 'toGroupId',
		SYSTEM: 'toUserId',
		CHATROOM: 'toChatroomId',
		DISCUSSION: 'toDiscussionId'
	};

	let type = message.type;
	message = utils.rename(message, {
		senderId: 'fromUserId',
		targetId: idMap[type]
	});

	if (_.isArray(message.mentionIds)) {
		message = utils.rename(message, {
			mentionIds: 'toUserId'
		});
	}

	delete message.type;

	return request({
		url: conf.url[type],
		data: message
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
			pos: 'message.send'
		});
		return error;
	});
};

let sendBroadcast = (message) => {
	let conf = config.sendBroadcast;
	message.content = JSON.stringify(message.content);

	let error = check({
		api: conf,
		model: 'broadcast',
		data: message,
		verify: verify.broadcast
	});
	if (error) {
		return Promise.reject(error);
	}

	message = utils.rename(message, {
		senderId: 'fromUserId'
	});

	let type = message.type;

	delete message.type;

	return request({
		url: conf.url[type],
		data: message
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
			pos: 'message.sendBroadcast'
		});
		return error;
	});
};

let sendTemplate = (message) => {

};

let recall = (message) => {
	let conf = config.recall;

	let error = check({
		api: conf,
		model: 'message',
		data: message,
		verify: verify.recallMsg
	});

	if (error) {
		return Promise.reject(error);
	}
	
	let typeMap = {
		PRIVATE: 1,
		DISCUSSION: 2,
		GROUP: 3
	};

	let type = message.type;
	message.type = typeMap[type];

	message = utils.rename(message, {
		senderId: 'fromUserId',
		type: 'conversationType',
		uId: 'messageUID'
	});

	delete message.type;

	return request({
		url: conf.url,
		data: message
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
			pos: 'message.recall'
		});
		return error;
	});
};

module.exports = {
	send: send,
	sendTemplate: sendTemplate,
	sendBroadcast: sendBroadcast,
	recall: recall
};
