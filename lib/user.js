"use strict";

const config = require('./user.json');
const request = require('./request').request;
const utils = require('./utils');

const isLength = utils.isLength;
const tplEngine = utils.tplEngine;
const _ = utils.underscore;
const getError = utils.getError;
const checkLength = utils.checkLength;

let getToken = (params) => {
	params = params || {};
	let conf = config.getToken;
	let verify = conf.verify;

	if (_.isEmpty(params)) {
		return Promise.resolve(getError(verify.params, conf));
	}
	let userIdError = checkLength({
		conf: conf,
		proto: 'userId',
		val: params.userId ||'',
		min: 1
	});

	if (userIdError) {
		return Promise.resolve(userIdError);
	}

	let nameError = checkLength({
		conf: conf,
		proto: 'name',
		val: params.name || ''
	});
	if (nameError) {
		return Promise.resolve(nameError);
	}	

	let protraitError = checkLength({
		conf: conf,
		proto: 'portraitUri',
		val: params.portraitUri || ''
	});
	if (protraitError) {
		return Promise.resolve(protraitError);
	}	

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};

let refresh = (params) => {
	params = params || {};
	let conf = config.refresh;
	let verify = conf.verify;

	if (_.isEmpty(params)) {
		return Promise.resolve(getError(verify.params, conf));
	}
	let userIdError = checkLength({
		conf: conf,
		proto: 'userId',
		val: params.userId ||'',
		min: 1
	});

	if (userIdError) {
		return Promise.resolve(userIdError);
	}

	let nameError = checkLength({
		conf: conf,
		proto: 'name',
		val: params.name || ''
	});
	if (nameError) {
		return Promise.resolve(nameError);
	}	

	let protraitError = checkLength({
		conf: conf,
		proto: 'portraitUri',
		val: params.portraitUri || ''
	});
	if (protraitError) {
		return Promise.resolve(protraitError);
	}	

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};

let checkOnline = (params) => {
	params = params || {};
	let conf = config.checkOnline;
	let verify = conf.verify;

	if (_.isEmpty(params)) {
		return Promise.resolve(getError(verify.params, conf));
	}

	let userIdError = checkLength({
		conf: conf,
		proto: 'userId',
		val: params.userId ||'',
		min: 1
	});
	if (userIdError) {
		return Promise.resolve(userIdError);
	}

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};

let block = (params) => {
	params = params || {};
	let conf = config.block;
	let verify = conf.verify;

	if (_.isEmpty(params)) {
		return Promise.resolve(getError(verify.params, conf));
	}

	let userIdError = checkLength({
		conf: conf,
		proto: 'userId',
		val: params.userId ||'',
		min: 1
	});
	if (userIdError) {
		return Promise.resolve(userIdError);
	}

	let minuteError = checkLength({
		conf: conf,
		proto: 'minute',
		val: params.minute ||''
	});
	if (minuteError) {
		return Promise.resolve(minuteError);
	}

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};

let unblock = (params) => {
	params = params || {};
	let conf = config.unblock;
	let verify = conf.verify;

	if (_.isEmpty(params)) {
		return Promise.resolve(getError(verify.params, conf));
	}

	let userIdError = checkLength({
		conf: conf,
		proto: 'userId',
		val: params.userId ||'',
		min: 1
	});
	if (userIdError) {
		return Promise.resolve(userIdError);
	}

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};

let queryBlock = () => {
	let conf = config.queryBlock;
	return request({
		url: conf.url
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};

let apis = {
	getToken: getToken,
	refresh: refresh,
	checkOnline: checkOnline,
	block: block,
	unblock: unblock,
	queryBlock: queryBlock
};

module.exports = (params) => {
	return apis;
};