const utils = require('../../lib/utils');
const _ = utils.underscore;

beforeAll(function() {
    this.user = {
        emptyId: '',
        largeId: _.times(35, () => { return 'Id' }).join(''),
        largeName: _.times(64, () => { return 'name' }).join(''),
        largePortraitUri: _.times(100, () => { return 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982' }).join(''),
        id: 'ujadk90ha',
        name: 'Martin',
        portraitUri: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982',
        minute: 10,
        largeMinute: 543200
    };
});