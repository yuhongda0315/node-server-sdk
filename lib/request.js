"use strict";

const superagent = require('superagent');

const utils = require('./utils');
const _ = utils.underscore;
const tplEngine = utils.tplEngine;
const sha1 = utils.sha1;

let config = {
	appkey: '',
	secret: '',
	format: 'json',
	api: 'http://api.cn.ronghub.com',
	sms: 'http://api.sms.ronghub.com'
};

let headers = {
	Nonce: parseInt(Math.random() * 0xffffff),
	Timestamp: Date.parse(new Date()) / 1000,
	Signature: ''
};

let urlTpl = '{domain}/{url}.{format}';
/*
	let params = {
		domainType: 'api' | 'sms',
		data: {},
		submitType: 'form',
		success: function(result){},
		error: function(error){}
	};

*/
let request = (_params) => {
	let params = {
		domainType: 'api',
		url: '',
		data: {},
		submitType: 'form'
	};

	_.extend(params, _params);

	params.domain = config[params.domainType];
	params.format = config.format;

	let url = tplEngine(urlTpl, params);
	let submitType = params.submitType;
	let data = params.data;

	return superagent
		.post(url)
		.set(headers)
		.type(submitType)
		.send(data);
};

let init = (_config) => {
	_.extend(config, _config);

	headers['App-Key'] = config.appkey;
	headers.secret = config.secret;

	let signTpl = '{secret}{Nonce}{Timestamp}';

	let singature = tplEngine(signTpl, headers);

	headers.Signature = sha1(singature);

	delete headers.secret;
};

module.exports = {
	init: init,
	request: request
};