## 用户模块

### User.register(user){#register}

注册用户，生成用户在融云的唯一身份标识 `Token`，各端 SDK 使用 `Token` 连接融云服务器

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	string	|	是 	| 唯一标识，最大长度 30 个字符，建议使用 `英文字母`、`数字` 混排	|2.0.0|
|	name	 |	string	|	是 	| 名称，最大长度 60 个字符	||
|	portrait |	string	|	是 	| 合法的头像地址，最大长度 800 个字符，例: `http://rongcloud.cn/portrait.jpg` 类型不限制, 建议: `jpg`、`gif`、`png`| &nbsp;|

##### 请求成功

```json
{
    "code": 200,
    "userId": "ujadk90ha",
    "token": "SfJQnrPDLZNMxSl+cNLZNMxSl+cNGDRLrkqw5cNGDRLrkqw5Xap7yf5"
}
```
| 参数   	 |	类型		| 说明	
| :----------|:--------	|:-----	
|	userId	 |	string	| 用户唯一标识
|	token	 |	string	| 对应在融云服务器的唯一标识

### User.refresh(user){#refresh}

用户信息发生变化，通过此 API 刷新融云服务器对应用户信息

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	string	|	是 	| 唯一标识，最大长度 30 个字符，建议使用 `英文字母`、`数字` 混排	|2.0.0|
|	name	 |	string	|	是 	| 名称，最大长度 60 个字符		|2.0.0|
|	portrait |	string	|	是 	| 合法的头像地址，最大长度 800 个字符，例: `http://rongcloud.cn/portrait.jpg` 类型不限制, 建议: `jpg`、`gif`、`png`| 2.0.0|

##### 请求成功

```json
{
    "code": 200
}
```


