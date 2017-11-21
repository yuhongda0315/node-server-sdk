'use strict';
let rongSDK = require('./index')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

let User = rongSDK.User;

var userInfo = {
	id: 'ujadk90ha',
	name: 'Maritn',
	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
};
User.getToken(userInfo).then(result => {
	console.log(result);
});

