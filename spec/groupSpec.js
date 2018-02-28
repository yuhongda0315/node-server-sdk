"use strict";
describe('Group', () => {
	let _golbal, Group, GroupGag;
	beforeAll(function() {
		_golbal = this;
		Group = _golbal.rongSDK.Group;
		GroupGag = Group.Gag;
	});

	const config = require('../lib/group/api.json');
	const gagConf = require('../lib/group/gag/api.json');

	describe('Sync', () => {
		let conf = config.sync;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group;
			return Group.sync({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('同步群组', () => {
			let group = _golbal.group;
			return Group.sync(group.sync).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Create', () => {
		let conf = config.create;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.create;
			return Group.create({
				id: group.id,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.create;
			return Group.create({
				id: group.id,
				name: group.name,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group;
			return Group.create(group.create).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Join', () => {
		let conf = config.join;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.join;
			return Group.join({
				id: group.id,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.join;
			return Group.join({
				id: group.id,
				name: group.name,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.join;
			return Group.join(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Quit', () => {
		let conf = config.quit;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.quit;
			return Group.quit({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.quit;
			return Group.quit({
				id: group.id,
				name: group.name,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.quit;
			return Group.quit(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Dismiss', () => {
		let conf = config.dismiss;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.dismiss;
			return Group.dismiss({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.dismiss;
			return Group.dismiss({
				id: group.id,
				operator: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.dismiss;
			return Group.dismiss(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Kick', () => {
		let conf = config.kick;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.kick;
			return Group.kick({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.kick;
			return Group.kick({
				id: group.id,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.kick;
			return Group.kick(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Refresh', () => {
		let conf = config.refresh;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.refresh;
			return Group.refresh({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.refresh;
			return Group.refresh(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('getMembers', () => {
		let conf = config.getMembers;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.getMembers;
			return Group.getMembers({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.getMembers;
			return Group.getMembers(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupGag.add', () => {
		let conf = gagConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupGag.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.groupGag.add;
			return GroupGag.add({
				id: group.id,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupGag.add;
			return GroupGag.add(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupGag.remove', () => {
		let conf = gagConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupGag.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.groupGag.remove;
			return GroupGag.remove({
				id: group.id,
				memberIds: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupGag.remove;
			return GroupGag.remove(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupGag.getList', () => {
		let conf = gagConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupGag.getList({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupGag.getList;
			return GroupGag.getList(group).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});
});