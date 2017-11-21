"use strict";

const Black = require('./black');

const config = require('./user.json');
const request = require('./request').request;
const utils = require('./utils');

const isLength = utils.isLength;
const tplEngine = utils.tplEngine;
const _ = utils.underscore;
const getError = utils.getError;
const checkLength = utils.checkLength;
const rename = utils.rename;

let getToken = (user) => {
	user = user || {};
	let conf = config.getToken;

	let userIdError = checkLength({
		conf: conf,
		model: 'user',
		proto: 'id',
		val: user.id || '',
		min: 1
	});
	if (userIdError) {
		return Promise.resolve(userIdError);
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
		return getError(error, conf);
	});
};

let refresh = (params) => {};

let apis = {
	Black: Black,
	getToken: getToken,
	refresh: refresh
};

module.exports = (params) => {
	return apis;
};