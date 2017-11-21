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

let errorHandler = (_error, conf) => {
	// TODO: 处理 XML
	_error = JSON.parse(_error.response.text);
	var code = _error.code;
	var error = conf.error;
	var msg = error[code] || _error;
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
	let model = params.model;
	model = conf.params[model];

	let proto = params.proto;
	let protoVerify = model[proto].verify;
	let val = params.val;
	let min = params.min;
	let max = protoVerify.maxLen

	let error = null;

	let isLen = isLength({
		val: val,
		min: min,
		max: max
	});

	if (isLen) {
		error = getError(protoVerify.lenInvalid, conf);
	}

	return error;
};

exports.rename = (obj, newNames) => {
	return _.reduce(newNames, function(memo, val, index) {
		memo[val] = obj[index];
		return memo;
	}, _.omit(obj, _.keys(newNames)));
};