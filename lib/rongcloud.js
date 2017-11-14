var request = require('./request');
var User = require('./user');
var utils = require('./utils');

var _ = utils.underscore;

var modules = {
	User: User
};

module.exports = function(params) {
	request.init(params);
	return _.each(modules, (_module, name) => {
		return modules[name] = _module(params);
	});
};