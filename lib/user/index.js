"use strict";

const Black = require('./black');
const Block = require('./block');
const OnlineStatus = require('./online-status');

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

let getToken = (user) => {
	let conf = config.getToken;
	let error = check({
		api: conf,
		model: 'user',
		data: user,
		verify: verify.user
	});

	if (error) {
		return Promise.reject(error);
	}

	user = rename(user, {
		id: 'userId',
		portrait: 'portraitUri'
	});

	return request({
		url: conf.url,
		data: user
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
			pos: 'getToken'
		});
		return error;
	});
};

let refresh = (user) => {
	let conf = config.refresh;
	let error = check({
		api: conf,
		model: 'user',
		data: user,
		verify: verify.user
	});

	if (error) {
		return Promise.reject(error);
	}

	user = rename(user, {
		id: 'userId',
		portrait: 'portraitUri'
	});

	return request({
		url: conf.url,
		data: user
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
			pos: 'refresh'
		});
		return error;
	});
};

module.exports = {
	Block: Block,
	Black: Black,
	OnlineStatus: OnlineStatus,
	getToken: getToken,
	refresh: refresh
};