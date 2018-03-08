"use strict";

/*
	参考文档：http://rongcloud.cn/docs/server.html#group
*/

const Gag = require('./gag');

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

let sync = (user) => {
	let conf = config.sync;

	let error = check({
		api: conf,
		model: 'user',
		data: user,
		verify: verify.user
	});
	if (error) {
		return Promise.reject(error);
	}

	let data = _.pick(user, 'id');
	data = utils.rename(data, {
		id: 'userId'
	});
	
	let groupIdTpl = 'group[{{id}}]';
	let groups = user.groups;

	// 数据转换 [{"id": "wer987","name":"greoupName1"}] => {'group[wer987]': greoupName1}
	_.each(groups, (group) => {
		let groupId = utils.tplEngine(groupIdTpl, {
			id: group.id
		});
		data[groupId] = group.name;
	});

	return request({
		url: conf.url,
		data: data
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
			pos: 'group.sync'
		});
		return error;
	});
};

let create = (group) => {
	let conf = config.create;

	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: verify.group
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		name: 'groupName',
		memberIds: 'userId'
	});
	return request({
		url: conf.url,
		data: group
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
			pos: 'group.create'
		});
		return error;
	});
};

let invite = (group) => {
	let conf = config.invite;

	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.omit(verify.group, 'name')
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		name: 'groupName',
		memberIds: 'userId'
	});
	return request({
		url: conf.url,
		data: group
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
			pos: 'group.invite'
		});
		return error;
	});	
};

let join = (group) => {
	let conf = config.join;

	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.extend(_.omit(verify.group, 'memberIds', 'name'), verify.member)
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		name: 'groupName',
		memberId: 'userId'
	});
	return request({
		url: conf.url,
		data: group
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
			pos: 'group.join'
		});
		return error;
	});	
};

let quit = (group) => {
	let conf = config.quit;

	let groupVerify = verify.group;
	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.extend(_.pick(groupVerify, 'id'), verify.member)
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		memberId: 'userId'
	});
	return request({
		url: conf.url,
		data: group
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
			pos: 'group.quit'
		});
		return error;
	});
};

let dismiss = (group) => {
	let conf = config.dismiss;

	let groupVerify = verify.group;
	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.pick(groupVerify, 'id')
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		operator: 'userId'
	});

	return request({
		url: conf.url,
		data: group
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
			pos: 'group.dismiss'
		});
		return error;
	});
};

let kick = (group) => {
	let conf = config.kick;

	let groupVerify = verify.group;
	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.pick(groupVerify, 'id', 'memberIds')
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		memberIds: 'userId'
	});
	return request({
		url: conf.url,
		data: group
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
			pos: 'group.kick'
		});
		return error;
	});
};

let refresh = (group) => {
	let conf = config.refresh;

	let groupVerify = verify.group;
	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.pick(groupVerify, 'id', 'name')
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId',
		name: 'groupName'
	});

	return request({
		url: conf.url,
		data: group
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
			pos: 'group.refresh'
		});
		return error;
	});
};

let getMembers = (group) => {
	let conf = config.getMembers;

	let groupVerify = verify.group;
	let error = check({
		api: conf,
		model: 'group',
		data: group,
		verify: _.pick(groupVerify, 'id')
	});
	if (error) {
		return Promise.reject(error);
	}

	group = utils.rename(group, {
		id: 'groupId'
	});

	return request({
		url: conf.url,
		data: group
	}).then(result => {
		return utils.rename(result.text, {
			users: 'members'
		});
	}).catch(error => {
		error = getError({
			code: error,
			errors: conf.response.fail
		});
		logger.log({
			content: error,
			level: 'error',
			pos: 'group.getMembers'
		});
		return error;
	});
};

module.exports = {
	Gag: Gag,
	sync: sync,
	create: create,
	invite: invite,
	join: join,
	quit: quit,
	dismiss: dismiss,
	refresh: refresh,
	kick: kick,
	getMembers: getMembers
};