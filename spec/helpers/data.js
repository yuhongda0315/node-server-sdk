"use strict";
const utils = require('../../lib/utils');
const _ = utils.underscore;

beforeAll(function() {
    let appkey = '8luwapkvucoil';
    let secret = 'y0icysjl4h3LWz';

    this.rongSDK = require('../../index')({
        appkey: appkey,
        secret: secret
    });

    this.user = {
        emptyId: '',
        largeId: _.times(35, () => { return 'Id' }).join(''),
        largeName: _.times(64, () => { return 'name' }).join(''),
        largePortraitUri: _.times(100, () => { return 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982' }).join(''),
        id: 'ujadk90ha',
        name: 'Martin',
        portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982',
        minute: 10,
        largeMinute: 543200
    };

    this.group = {
        id: 'groupId1',
        emptyId: '',
        largeName: _.times(64, () => { return 'name' }).join(''),
        sync: {
            userId: 'ujadk90ha',
            groups: {
                groupId1: 'groupName1',
                groupId2: 'groupName2'
            }
        },
        create: {
            id: 'kl9k98mn',
            name: 'RongCloud',
            members: ['ujadk90ha']
        }
    };
});