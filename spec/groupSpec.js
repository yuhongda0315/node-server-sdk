// "use strict";
// describe('Group', () => {
// 	let _golbal, Group;
// 	beforeAll(function() {
// 		_golbal = this;
// 		Group = _golbal.rongSDK.Group;
// 	});

// 	const config = require('../lib/group.json');

// 	describe('sync', () => {
// 		let conf = config.sync;
// 		let verify = conf.verify;
// 		it('参数不正确, params 为空对象', () => {
// 			let params = {};
// 			return Group.sync(params).then(result => {
// 				result = JSON.parse(result);
// 				expect(result.code).toEqual(verify.params);
// 			});
// 		});

// 		it('userId 无效', () =>{
// 			let params = {
// 				userId: _golbal.user.empty
// 			};
// 			return Group.sync(params).then(result => {
// 				result = JSON.parse(result);
// 				expect(result.code).toEqual(verify.userId.lenInvalid);
// 			});
// 		});

// 		it('同步群组关系成功', () => {
// 			let params = _golbal.group.sync;
// 			return Group.sync(params).then(result => {
// 				result = JSON.parse(result);
// 				expect(result.code).toEqual(Number(verify.success));
// 			});
// 		});
// 	});

// 	describe('create', () => {
// 		let conf = config.create;
// 		let verify = conf.verify;
// 		it('参数不正确, params 为空对象', () => {
// 			let params = {};
// 			return Group.create(params).then(result => {
// 				result = JSON.parse(result);
// 				expect(result.code).toEqual(verify.params);
// 			});
// 		});

// 		it('groupId 无效', () => {
// 			let params = {
// 				id: _golbal.group.emptyId
// 			};
// 			return Group.create(params).then(result => {
// 				result = JSON.parse(result);
// 				expect(result.code).toEqual(verify.id.lenInvalid);
// 			});
// 		});

// 		it('groupName 无效', () => {
// 			var group =  _golbal.group;
// 			let params = {
// 				id: group.id,
// 				name: group.largeName
// 			};
// 			return Group.create(params).then(result => {
// 				result = JSON.parse(result);
// 				expect(result.code).toEqual(verify.name.lenInvalid);
// 			});
// 		});

// 		// it('创建群成功', () => {
// 		// 	let params = _golbal.group.create;
// 		// 	return Group.create(params).then(result => {
// 		// 		result = JSON.parse(result);
// 		// 		expect(result.code).toEqual(Number(verify.success));
// 		// 	});
// 		// });
// 	});
// });