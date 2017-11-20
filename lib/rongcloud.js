"use strict";
const request = require('./request');
const User = require('./user');
const Group = require('./group');
const utils = require('./utils');

const _ = utils.underscore;

let modules = {
	User: User,
	Group: Group
};

module.exports = function(params) {
	request.init(params);
	return _.each(modules, (_module, name) => {
		return modules[name] = _module(params);
	});
};