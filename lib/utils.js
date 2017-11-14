"use strict";

const crypto = require('crypto');

const _ = require('underscore');

exports.underscore = _;

exports.sha1 = (input) => {
	let shasum = crypto.createHash('sha1');
	shasum.update(input);
	return shasum.digest('hex');
};

exports.tplEngine = (temp, data, regexp) => {
	if (!(Object.prototype.toString.call(data) === "[object Array]")) data = [data];
	var ret = [];
	for (var i = 0, j = data.length; i < j; i++) {
		ret.push(replaceAction(data[i]));
	}
	return ret.join("");

	function replaceAction(object) {
		return temp.replace(regexp || (/{([^}]+)}/g), function(match, name) {
			if (match.charAt(0) == '\\') return match.slice(1);
			return (object[name] != undefined) ? object[name] : '{' + name + '}';
		});
	}
};

/*
	params.val,
	params.minLen
	params.maxLen
*/
let isLength = (params) => {
	let val = params.val;
	let min = params.min || 0;
	let len = val.length || val;
	let max = params.max;

	let isLen = false;

	if (len < min) {
		isLen = true;
	}

	if (len > max) {
		isLen = true;
	}

	return isLen;
}
exports.isLength = isLength;

exports.isIllegalUrl = (params) => {
	var url = params.url;
	
};

let errorHandler = (error, conf) => {
	// TODO: 处理 XML
	error = JSON.parse(error.response.text);
	var code = error.code;
	var msgs = conf.responses;
	var msg = msgs[code] || error;
	return JSON.stringify(msg);
};

let getError = (code, conf) => {
	let info = JSON.stringify({
		code: code
	});
	let error = {
		response: {
			text: info
		}
	};
	var isResponse = (typeof code == 'object');
	if (isResponse) {
		error = code;
	}
	return errorHandler(error, conf);
};
exports.getError = getError;

exports.checkLength = (params) => {
	let conf = params.conf;
	let verify = conf.verify;

	let proto = params.proto;
	let val = params.val;
	let min = params.min;

	var error = null;

	let protoVerify = verify[proto];

	var isLen = isLength({
		val: val,
		min: min,
		max: protoVerify.maxLen
	});
	if (isLen) {
		error = getError(protoVerify.lenInvalid, conf);
	}

	return error;
};