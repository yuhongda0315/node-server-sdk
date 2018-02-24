"use strict";

const config = require('./api.json');
const request = require('../request').request;
const utils = require('../utils');

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
	
};
/*
	var params= {
		id: 'adsfikw9',
		name: 'Group01',
		members: ['userId1']
	};
*/
let create = (params) => {
	
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









