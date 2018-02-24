"use strict";
const request = require('./request');
const User = require('./user');
const Sensitive = require('./sensitive');
const utils = require('./utils');
const Message = require('./message');

const _ = utils.underscore;

let modules = {
	User: User,
	Sensitive: Sensitive,
	Message: Message
};

module.exports = function(params) {
	request.init(params);
	return modules;
};