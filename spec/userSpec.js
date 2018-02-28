"use strict";
describe('User', () => {
	let _golbal, User, UserBlack, UserBlock, OnlineStatus;

	beforeAll(function() {
		_golbal = this;
		User = _golbal.rongSDK.User;
		UserBlack = User.Black;
		UserBlock = User.Block;
		OnlineStatus = User.OnlineStatus;
	});

	const config = require('../lib/user/api.json');

	const blackConf = require('../lib/user/black/api.json');
	const blockConf = require('../lib/user/block/api.json');
	const onlineConf = require('../lib/user/online-status/api.json');

	describe('getToken', () => {
		let conf = config.getToken;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.portrait
			};
			return User.getToken(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largePortraitUri,
				name: user.name,
				portrait: user.portrait
			};
			return User.getToken(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('id 为空', () => {
			let user = _golbal.user;
			return User.getToken({
				name: user.name,
				portrait:user.portrait
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('name 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.largeName,
				portrait: user.portraitUri
			};
			return User.getToken(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('portrait 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.largePortraitUri
			};
			return User.getToken(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('refresh', () => {
		let conf = config.refresh;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.portrait
			};
			return User.refresh(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largePortraitUri,
				name: user.name,
				portrait: user.portrait
			};
			return User.refresh(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('id 为空', () => {
			let user = _golbal.user;
			return User.refresh({
				name: user.name,
				portrait:user.portrait
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('name 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.largeName,
				portrait: user.portraitUri
			};
			return User.refresh(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('portrait 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.largePortraitUri
			};
			return User.refresh(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Black.add', () => {
		let conf = blackConf.add;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				blackIds: user.blackIds
			};
			return UserBlack.add(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largePortraitUri,
				blackIds: []
			};
			return UserBlack.add(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				blackIds: user.blackIds
			};
			return UserBlack.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('blackIds 不是数组', () => {
			let user = _golbal.user;
			user = {
				blackIds: user.blackIds
			};
			return UserBlack.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Black.getList', () => {
		let conf = blackConf.getList;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserBlack.getList(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: []
			};
			return UserBlack.getList(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				blackIds: user.blackIds
			};
			return UserBlack.getList(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Black.remove', () => {
		let conf = blackConf.remove;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				blackIds: user.blackIds
			};
			return UserBlack.remove(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});


		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				blackIds: []
			};
			return UserBlack.remove(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				blackIds: user.blackIds
			};
			return UserBlack.remove(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('blackIds 不是数组', () => {
			let user = _golbal.user;
			user = {
				blackIds: user.blackIds
			};
			return UserBlack.remove(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Block.add', () => {
		let conf = blockConf.add;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				minute: user.minute
			};
			return UserBlock.add(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largeName,
				minute: user.minute
			};
			return UserBlock.add(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('minute is too long', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				minute: user.largeMinute
			};
			return UserBlock.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				minute: _golbal.minute
			};
			return UserBlock.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Block.getList', () => {
		let conf = blockConf.getList;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserBlock.getList(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Block.remove', () => {
		let conf = blockConf.remove;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserBlock.remove(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});


		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largeId
			};
			return UserBlock.remove(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = {};
			return UserBlock.remove(user).then(result => {
				expect(result).toBeUndefined();
			}, error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('OnlineStatus', () => {

		let conf = onlineConf.get;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return OnlineStatus.get(user).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: []
			};
			return OnlineStatus.get(user).then(result => {
				result = JSON.parse(result);
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 为必传项', () => {
			let user = _golbal.user;
			user = { };
			return OnlineStatus.get(user).catch(error => {
				error = JSON.parse(error);
				expect(error.code).not.toBeUndefined();
			});
		});
	});

});