## 用户模块

文档约定: `代码示例` 中 `User` 模块来自如下代码:

```js
var RongCloud = require('rongcloud-sdk');
var appkey = '8alwspkvucoim', 
	secret = 'yaicmsjl0a3LWz';
var Rong = RongCloud({
	appkey: appkey,
	secret: secret
});
// 获取 User 模块
var User = Rong.User;
```

### User.getToken(user)

Token 是各端 SDK 连接融云服务器的唯一标识，Token 与 `user` 是一对一的关系。

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	number	|	是 	| 用户唯一标识					||
|	name	 |	string	|	是 	| 用户名称						||
|	portrait |	string	|	是 	| 合法的用户头像地址				| &nbsp;|

请求成功：

```json
{
    "code": 200,
    "userId": "ujadk90ha",
    "token": "SfJQnrPDLZNMxSl+cNLZNMxSl+cNGDRLrkqw5cNGDRLrkqw5Xap7yf5"
}
```

示例代码：

```js
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

### User.refresh(user)

当用户头像、名称变更时，为保证 Push 信息准确更新用户信息至融云服务器，5 分钟后生效。

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	number	|	是 	| 用户唯一标识					||
|	name	 |	string	|	是 	| 用户名称						||
|	portrait |	string	|	是 	| 合法的用户头像地址				| &nbsp;|

请求成功：

```json
{
    "code": 200
}
```

示例代码：

```js
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
