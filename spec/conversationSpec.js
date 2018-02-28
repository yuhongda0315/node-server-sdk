"use strict";
describe('Conversation', () => {
	let _golbal, Conversation;
	beforeAll(function() {
		_golbal = this;
		Conversation = _golbal.rongSDK.Conversation;
	});
	const config = require('../lib/conversation/api.json');

	describe('Mute', () => {
		let conf = config.mute;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let conversation = _golbal.conversation;
			return Conversation.mute({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let conversation = _golbal.conversation;
			return Conversation.mute(conversation.mute).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let conversation = _golbal.conversation.mute;
			conversation.type = 'PP';
			return Conversation.mute(conversation).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Unmute', () => {
		let conf = config.unmute;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let conversation = _golbal.conversation;
			return Conversation.unmute({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let conversation = _golbal.conversation;
			return Conversation.unmute(conversation.unmute).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let conversation = _golbal.conversation.unmute;
			conversation.type = 'PP';
			return Conversation.unmute(conversation).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Get', () => {
		let conf = config.get;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let conversation = _golbal.conversation;
			return Conversation.get({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let conversation = _golbal.conversation;
			return Conversation.get(conversation.get).then(result => {
				result = JSON.parse(result);
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let conversation = _golbal.conversation.get;
			conversation.type = 'PP';
			return Conversation.get(conversation).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
});