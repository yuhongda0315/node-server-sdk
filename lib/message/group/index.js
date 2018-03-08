"use strict";

const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const isLength = utils.isLength;
const tplEngine = utils.tplEngine;
const _ = utils.underscore;
const rename = utils.rename;
const logger = utils.logger;

const Conversation = require('../../conversation-type').Conversation

const getError = utils.getError;
const check = utils.check;

let send = (message) => {
	let conf = config.send;

	let content = message.content;
	if (_.isObject(content)) {
		message.content = JSON.stringify(content);
	}

	let error = check({
		api: conf,
		model: 'message',
		data: message,
		verify: verify.message
	});
	if (error) {
		return Promise.reject(error);
	}

	message = utils.rename(message, {
		senderId: 'fromUserId',
		targetId: 'toGroupId'
	});

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
			pos: 'message.Group.send'
		});
		return error;
	});
};

let sendMention = (message) => {
	let conf = config.sendMention;

	let content = message.content;
	if (_.isObject(content)) {
		message.content = JSON.stringify(content);
	}

	let error = check({
		api: conf,
		model: 'message',
		data: message,
		verify: _.extend(verify.message, verify.mention)
	});
	if (error) {
		return Promise.reject(error);
	}

	message = utils.rename(message, {
		senderId: 'fromUserId',
		targetId: 'toGroupId',
		mentionIds: 'toUserId'
	});

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
			pos: 'message.Group.sendMention'
		});
		return error;
	});
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

	message.type = Conversation.GROUP;

	message = utils.rename(message, {
		senderId: 'fromUserId',
		type: 'conversationType',
		uId: 'messageUID'
	});

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
			pos: 'message.Group.recall'
		});
		return error;
	});
};

module.exports = {
	send: send,
	sendMention: sendMention,
	recall: recall
};
