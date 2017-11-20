"use strict";

const config = require('./group.json');
const request = require('./request').request;
const utils = require('./utils');

const isLength = utils.isLength;
const tplEngine = utils.tplEngine;
const _ = utils.underscore;
const getError = utils.getError;
const checkLength = utils.checkLength;
const rename = utils.rename;
/*
	params.userId
	params.groups{
		'groupId': 'groupName',
		'groupId': 'groupName'
	}
*/
let sync = (params) => {
	params = params || {};
	let conf = config.sync;
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

	let groups = params.groups || {};
	var _groups = {};
	let groupTpl = 'group[{id}]';
	_.each(groups, (id, name) => {
		let key = tplEngine(groupTpl, {
			id: id
		});
		_groups[key] = name;
	});
	params.groups = _groups;

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text;
	}).catch(error => {
		return getError(error, conf);
	});
};
/*
	var params= {
		id: 'adsfikw9',
		name: 'Group01',
		members: ['userId1']
	};
*/
let create = (params) => {
	params = params || {};
	let conf = config.create;
	let verify = conf.verify;

	if (_.isEmpty(params)) {
		return Promise.resolve(getError(verify.params, conf));
	}

	let groupIdError = checkLength({
		conf: conf,
		proto: 'id',
		val: params.id || '',
		min: 1
	});

	if (groupIdError) {
		return Promise.resolve(groupIdError);
	}

	let groupNameError = checkLength({
		conf: conf,
		proto: 'name',
		val: params.name
	});

	if (groupNameError) {
		return Promise.resolve(groupNameError);
	}

	params = rename(params, {
		id: 'groupId',
		name: 'groupName'
	});

	let members = params.members;
	delete params.members;

	

	return request({
		url: conf.url,
		data: params
	}).then(result => {
		return result.text
	}).catch(error => {
		return getError(error, conf);
	});
};

let join = (params) => {

};

let quit = (params) => {

};

let dismiss = (params) => {

};

let refresh = (params) => {

};

let queryMembers = (params) => {

};

let apis = {
	sync: sync,
	create: create,
	join: join,
	quit: quit,
	dismiss: dismiss,
	refresh: refresh,
	queryMembers: queryMembers
};

module.exports = (params) => {
	return apis;
};









