#### 快速开始

1、安装 Node

[Node 官网](https://nodejs.org), 支持的最低为 `0.12.18+`

2、安装 RongCloud Node Server SDK

```
npm install rongcloud-sdk
```

3、配置及使用

```js
// 移步开发者后台获取：https://developer.rongcloud.cn
var appkey = '8alwspkvucoim', 
	secret = 'yaicmsjl0a3LWz';
var RongCloud = require('rongcloud-sdk');

// 获取 SDK 实例
var Rong = RongCloud({
	appkey: appkey,
	secret: secret
});

// 以获取用户 Token 为例
var User = Rong.User;
var user = {
	id: 'mnktiytan0',
	name: 'Martin',
	portrait: 'http://oojs2ztoq.bkt.clouddn.com/faf20fae77e2e0bdafd7c148e6193418.jpg'
};
User.getToken(user).then(result => {
	console.log(result);
}, error => { 
	console.log(error);
});
```