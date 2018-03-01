## 用户模块

### User.register(user){#register}

注册用户，返回用户在融云的唯一身份标识 `Token`

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	string	|	是 	| 用户唯一标识					||
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

{% codetabs name="Java", type="java" -%}
String appKey = "e0x9wycfx7flq";
String appSecret = "STCevzDS6Xy18n";
RongCloud rongCloud = RongCloud.getInstance(appKey, appSecret);
UserModel user = new UserModel()
        .setId("userId1")
        .setName("username")
        .setPortraitUri("http://www.rongcloud.cn/images/logo.png");
TokenResult result = rongCloud.User.getToken(user);

{%- language name="Node", type="js" -%}
var RongCloud = require('rongcloud-sdk');
var appkey = '8alwspkvucoim', 
	secret = 'yaicmsjl0a3LWz';
var Rong = RongCloud({
	appkey: appkey,
	secret: secret
});
// 获取 User 模块
var User = Rong.User;
var user = {
	id: 'mnktiytan0',
	name: 'Martin',
	portrait: 'http://oojs2ztoq.bkt.clouddn.com/faf20fae77e2e0bdafd7c148e6193418.jpg'
};
User.register(user).then(result => {
	console.log(result);
}, error => { 
	console.log(error);
});
{%- endcodetabs %}

### User.refresh(user){#refresh}

更改用户信息

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	string	|	是 	| 用户唯一标识					||
|	name	 |	string	|	是 	| 用户名称						||
|	portrait |	string	|	是 	| 合法的用户头像地址				| &nbsp;|

请求成功：

```json
{
    "code": 200
}
```

示例代码：

{% codetabs name="Java", type="java" -%}
String appKey = "e0x9wycfx7flq";
String appSecret = "STCevzDS6Xy18n";
RongCloud rongCloud = RongCloud.getInstance(appKey, appSecret);
UserModel user = new UserModel()
        .setId("userId1")
        .setName("username")
        .setPortraitUri("http://www.rongcloud.cn/images/logo.png");
TokenResult result = rongCloud.User.refresh(user);

{%- language name="Node", type="js" -%}
var RongCloud = require('rongcloud-sdk');
var appkey = '8alwspkvucoim', 
	secret = 'yaicmsjl0a3LWz';
var Rong = RongCloud({
	appkey: appkey,
	secret: secret
});
// 获取 User 模块
var User = Rong.User;
var user = {
	id: 'mnktiytan0',
	name: 'Martin',
	portrait: 'http://oojs2ztoq.bkt.clouddn.com/faf20fae77e2e0bdafd7c148e6193418.jpg'
};
User.refresh(user).then(result => {
	console.log(result);
}, error => { 
	console.log(error);
});
{%- endcodetabs %}