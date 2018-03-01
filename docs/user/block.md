## 用户封禁

文档约定: `代码示例` 中 `UserBlock` 模块来自如下代码:

```js
var RongCloud = require('rongcloud-sdk');
var appkey = '8alwspkvucoim', 
	secret = 'yaicmsjl0a3LWz';
var Rong = RongCloud({
	appkey: appkey,
	secret: secret
});
var User = Rong.User;
// 获取 UserBlock 模块
var UserBlock = User.Block;
```

### UserBlock.add(user)

用户在封禁期间不能连接融云服务器，封禁期满后自动解除封禁

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本	|
| :----------|:--------	|:-----	|:------------------------------|:----- |
|	id		 |	number	|	是 	| 用户唯一标识					||
|	minute	 |	string	|	是 	| 封禁时长 0 - 43200 分钟, 0 表示永久封禁|&nbsp;|

请求成功:

```json
{
    "code": 200
}
```

示例代码:

```js
var user = {
	id: 'mnktiytan0',
	minute: 60
};
UserBlock.add(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
```

### UserBlock.remove(user)

解除用户封禁

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本	|
| :----------|:--------	|:-----	|:------------------------------|:----- |
|	id		 |	number	|	是 	| 用户唯一标识					||

请求成功:

```json
{
    "code": 200
}
```

示例代码:

```js
var user = {
	id: 'mnktiytan0'
};
UserBlock.remove(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
```

### UserBlock.getList()

获取封禁用户列表

请求成功:

```json
{
	"code": 200,
	"users": [{
		"blockEndTime": "2018-03-01 11:04:18",
		"userId": "ujadk90ha"
	}]
}
```

示例代码:

```js
UserBlock.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
```