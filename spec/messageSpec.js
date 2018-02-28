"use strict";
describe('Message', () => {
	let _golbal, Message, History;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		History = Message.History;
	});

	const config = require('../lib/message/api.json');
	const hisConf = require('../lib/message/history/api.json');

	describe('Send', () => {
		let conf = config.send;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Message.send(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return Message.send({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('发送单聊', () => {
			let message = _golbal.message;
			return Message.send(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('发送聊群', () => {
			let message = _golbal.groupMessage;
			return Message.send(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('发送系统消息', () => {
			let message = _golbal.systemMessage;
			return Message.send(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('发送讨论组', () => {
			let message = _golbal.discussMessage;
			return Message.send(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('群 @ 人', () => {
			let message = _golbal.groupMessage;
			return Message.send(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('SendBroadcast', () => {
		let conf = config.sendBroadcast;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Message.sendBroadcast(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return Message.sendBroadcast({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('系统广播', () => {
			let message = _golbal.broadcastMessage;
			return Message.sendBroadcast(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('SendTemplate', () => {
		let conf = config.sendTemplate;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return Message.sendTemplate({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('系统模版', () => {
			let message = _golbal.templateMessage;
			return Message.sendTemplate(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Recall', () => {
		let conf = config.recall;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failRecallMessage;
			return Message.recall(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return Message.recall({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('撤回消息', () => {
			let message = _golbal.recallMessage;
			return Message.recall(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('History.get', () => {
		let conf = hisConf.get;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failHistoryMessage;
			return History.get(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return History.get({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('获取历史消息文件地址', () => {
			let message = _golbal.historyMessage;
			return History.get(message).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('History.remove', () => {
		let conf = hisConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failHistoryMessage;
			return History.remove(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return History.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('删除历史消息文件地址', () => {
			let message = _golbal.historyMessage;
			return History.remove(message).then(result => {
				expect(result).not.toBeUndefined();
			});
		});
	});

});