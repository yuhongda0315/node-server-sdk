"use strict";
describe('User', () => {
	var _golbal, User;

	beforeAll(function() {
		_golbal = this;
		User = _golbal.rongSDK.User;
	});

	const config = require('../lib/user.json');

	describe('getToken', () => {
		let conf = config.getToken;
		let verify = conf.verify;
		it('参数不正确, params 为空对象', () => {
			var user = {};
			return User.getToken(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.params);
			});
		});


		it('获取 Token 成功', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				name: user.name,
				portraitUri: user.portraitUri
			};
			return User.getToken(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(verify.success));
			});
		});

		it('userId 为空', () => {
			var user = _golbal.user;
			var params = {
				userId: user.emptyId,
				name: user.name,
				portraitUri: user.portraitUri
			};
			return User.getToken(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.userId.lenInvalid);
			});
		});

		it('name 超长', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				name: user.largeName,
				portraitUri: user.portraitUri
			};
			
			return User.getToken(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.name.lenInvalid);
			});
		});

		it('portraitUri 超长', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				name: user.name,
				portraitUri: user.largePortraitUri
			};
			return User.getToken(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.portraitUri.lenInvalid);
			});
		});
	});

	describe('refresh', () => {
		let conf = config.refresh;
		let verify = conf.verify;

		it('参数不正确, params 为空对象', () => {
			var user = {};
			return User.refresh(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.params);
			});
		});

		it('刷新用户信息成功', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				name: user.name,
				portraitUri: user.portraitUri
			};
			return User.refresh(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(verify.success));
			});
		});

		it('userId 为空', () => {
			var user = _golbal.user;
			var params = {
				userId: user.emptyId,
				name: user.name,
				portraitUri: user.portraitUri
			};
			return User.refresh(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.userId.lenInvalid);
			});
		});

		it('name 超长', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				name: user.largeName,
				portraitUri: user.portraitUri
			};
			return User.refresh(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.name.lenInvalid);
			});
		});

		it('portraitUri 超长', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				name: user.name,
				portraitUri: user.largePortraitUri
			};
			return User.refresh(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.portraitUri.lenInvalid);
			});
		});
	});

	describe('onLine', () => {
		let conf = config.checkOnline;
		let verify = conf.verify;

		it('参数不正确, params 为空对象', () => {
			var params = {};
			return User.checkOnline(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.params);
			});
		});

		it('获取在线状态成功', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id
			};
			return User.checkOnline(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(verify.success));
			});
		});

		it('userId 无效', () => {
			var user = _golbal.user;
			var params = {
				userId: user.emptyId
			};
			return User.checkOnline(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.userId.lenInvalid);
			});
		});
	});

	describe('block', () => {
		let conf = config.block;
		let verify = conf.verify;

		it('参数不正确, params 为空对象', () => {
			var params = {};
			return User.block(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.params);
			});
		});

		it('设置禁言成功', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				minute: user.minute
			};
			return User.block(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(verify.success));
			});
		});

		it('设置禁言时间超长', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id,
				minute: user.largeMinute
			};
			return User.block(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.minute.lenInvalid);
			});
		});

		it('userId 无效', () => {
			var user = _golbal.user;
			var params = {
				userId: user.emptyId,
				minute: user.minute
			};
			return User.block(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.userId.lenInvalid);
			});
		});
	});

	describe('unblock', () => {
		let conf = config.unblock;
		let verify = conf.verify;

		it('参数不正确, params 为空对象', () => {
			var params = {};
			return User.unblock(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.params);
			});
		});

		it('取消禁言成功', () => {
			var user = _golbal.user;
			var params = {
				userId: user.id
			};
			return User.unblock(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(verify.success));
			});
		});

		it('userId 无效', () => {
			var user = _golbal.user;
			var params = {
				userId: user.emptyId
			};
			return User.unblock(params).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(verify.userId.lenInvalid);
			});
		});
	});

	describe('queryBlock', () => {
		let conf = config.queryBlock;
		let verify = conf.verify;

		it('获取禁言列表成功', () => {
			return User.queryBlock().then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(verify.success));
			});
		});
	});
});