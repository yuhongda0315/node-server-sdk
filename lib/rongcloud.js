"use strict";
const request = require('./request');
const User = require('./user');
const Sensitive = require('./sensitive');
const utils = require('./utils');
const Message = require('./message');
const Group = require('./group');
const Conversation = require('./conversation');
const Chatroom = require('./chatroom');

const _ = utils.underscore;

let modules = {
	User: User,
	Sensitive: Sensitive,
	Message: Message,
	Group: Group,
	Conversation: Conversation,
	Chatroom: Chatroom
};

module.exports = function(params) {
	request.init(params);
	return modules;
};