"use strict";
const utils = require('../../lib/utils');
const _ = utils.underscore;
const RongCloud = require('../../index');

beforeAll(function() {
    let appkey = '8luwapkvucoil';
    let secret = 'y0icysjl4h3LWz';

    this.rongSDK = RongCloud({
        appkey: appkey,
        secret: secret
    });

    this.appkey = appkey;
    this.secret = secret;

    this.user = {
        minute: 10,
        largeMinute: 543200,

        id: 'ujadk90ha',
        largeId: _.times(35, () => {
            return 'Id'
        }).join(''),
        emptyId: '',

        name: 'Martin',
        largeName: _.times(64, () => {
            return 'name'
        }).join(''),

        portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982',
        largePortraitUri: _.times(100, () => {
            return 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
        }).join(''),

        blackIds: ['1001', '1002', '1003', '2001']
    };

    this.group = {
        id: 'groupId1',
        emptyId: '',
        largeName: _.times(64, () => {
            return 'name'
        }).join(''),
        sync: {
            id: 'martin9901',
            groups: [{id: 'group999', name: 'RongCloud'}]
        },
        create: {
            id: 'kl9k98mn',
            name: 'RongCloud',
            memberIds: ['ujadk90ha']
        },
        join: {
            id: 'kl9k98mn',
            name: 'RongCloud',
            memberIds: ['ujsk100a']
        },
        quit: {
            id: 'kl9k98mn',
            memberIds: ['sea9901']
        },
        dismiss: {
            id: 'kl987hkl',
            operator: 'sea9901'
        },
        kick: {
            id: 'kl9k98mn',
            memberIds: ['sea9901']
        },
        refresh: {
            id: 'watergroup',
            name: 'Water'
        },
        getMembers: {
            id: 'kl9k98mn'
        }
    };

    this.groupGag = {
        add: {
            id: 'watergroup',
            memberIds: ['member01'],
            minute: 43200
        },
        remove: {
            id: 'watergroup',
            memberIds: ['member01']
        },
        getList: {
            id: 'watergroup'
        }
    };
    this.sensitive = {
        keyword: '小米手机',
        replace: 'iPhone7',
        keywords: ['法轮功'],
        largeKeywords: ['法轮功', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
        ]
    };


    this.message = {
        type: 'PRIVATE',
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.failMessage = {
        type: 'PRIVATE',
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        //必须是对象，此处举反例验证
        content: 'helloworld'
    };

    this.groupMessage = {
        type: 'GROUP',
        senderId: 'sea9902',
        targetId: 'group01',
        mentionIds: ['sea9903'],
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.systemMessage = {
        type: 'SYSTEM',
        senderId: '__SYSTEM__',
        targetId: 'dkadnn901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.discussMessage = {
        type: 'DISCUSSION',
        senderId: 'sea9901',
        targetId: 'dkadnn901dis',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.broadcastMessage = {
        type: 'SYSTEM',
        senderId: '__SYSTEM__',
        objectName: 'RC:TxtMsg',
        content: {
            content: '文本消息测试-system'
        }
    };

    this.broadcastChrmMessage = {
        type: 'CHATROOM',
        senderId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: '文本消息测试-chat'
        }
    };

    this.templateMessage = {
        type: 'SYSTEM',
        senderId: '__SYSTEM__',
        objectName: 'RC:TxtMsg',
        template: {
            content: '{name}, 语文成绩 {score} 分'
        },
        content: {
            sea9901: {
                data: {
                    '{name}': '小明',
                    '{score}': '90'
                },
                push: '{name} 考试成绩'
            },
            sea9902: {
                data: {
                    '{name}': '小红',
                    '{score}': '95'
                },
                push: '{name} 考试成绩'
            }
        }
    };

    this.recallMessage = {
        type: 'PRIVATE',
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        },
        sentTime: 1458389271011,
        uId: 'MUSD-FKDS-AAF1-09FH'
    };

    this.failRecallMessage = {
        type: 'CHATROOM',
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        },
        sentTime: 1458389271011,
        uId: 'MUSD-FKDS-AAF1-09FH'
    };

    this.historyMessage = {
        date: 2018022710
    };

    this.failHistoryMessage = {
        date: 201802271011
    };

    this.conversation = {
        mute: {
             type: 'PRIVATE',
             userId: 'member01',
             targetId: 'watergroup'
        },
        unmute: {
             type: 'PRIVATE',
             userId: 'member01',
             targetId: 'watergroup'
        },
        get: {
             type: 'PRIVATE',
             userId: 'member01',
             targetId: 'watergroup'
        }
    };
    this.chatroom = {
        create: [{
            id: 'MNiuhfd91k',
            name: '大融云'
        }],
        destory: {
            id: ['MNiuhfd91k', 'testChrmId']
        },
        get: {
            id: ['MNiuhfd91k', 'testChrmId']
        },
        getMembers: {
            id: 'MNiuhfd91k'
        },
        isExist: {
            id: 'ChartRoomId',
            memberIds: ['seal9901', 'sea9901']
        },
        banAdd: {
            memberIds: ['member01', 'member02'],
            minute: 30
        },
        banRemove: {
            memberIds: ['member01', 'member02']
        },
        blockAdd: {
             id: 'ChartRoomId',
             memberIds: ['seal9901'],
             minute: 30
        },
        blockRemove: {
             id: 'ChartRoomId',
             memberIds: ['seal9901']
        },
        blockgetList: {
             id: 'ChartRoomId'
        },
        demotionAdd: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        demotionRemove: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        distributeResume: {
            id: 'ChartRoomId'
        },
        distributeStop: {
            id: 'ChartRoomId'
        },
        gagAdd: {
            id: 'chatroom001',
            memberIds: ['member01', 'member02'],
            minute: 30
        },
        gagRemove: {
            id: 'chatroom001',
            memberIds: ['member01', 'member02'],
            minute: 30
        },
        gaggetList: {
            id: 'chatroom001'
        },
        keepaliveAdd: {
            id: 'chatroom001'
        },
        keepaliveRemove: {
            id: 'chatroom001'
        },
        whiteMsgAdd: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        whiteMsgRemove: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        whiteUserAdd: {
             id: 'chatroom001',
             memberIds: ['member01']
        },
        whiteUserRemove: {
             id: 'chatroom001',
             memberIds: ['member01']
        },
        whiteUsergetList: {
             id: 'chatroom001'
        }
    };
});