beforeAll(function() {
	this.find = (obj, proto) => {
		return eval('obj.' + proto);
	};
});