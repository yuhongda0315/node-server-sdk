"use strict";

const Blacklist = require('./blacklist');
const Block = require('./block');

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

let register = (user) => {
	let conf = config.register;
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
			pos: 'User.register'
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
			pos: 'User.refresh'
		});
		return error;
	});
};

module.exports = {
	Block: Block,
	Blacklist: Blacklist,
	register: register,
	refresh: refresh
};