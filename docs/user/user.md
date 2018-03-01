## 用户模块

### User.register(user){#register}

注册用户，返回用户在融云的唯一身份标识 `Token`

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	string	|	是 	| 用户唯一标识					||
|	name	 |	string	|	是 	| 用户名称						||
|	portrait |	string	|	是 	| 合法的用户头像地址				| &nbsp;|

##### 请求成功

```json
{
    "code": 200,
    "userId": "ujadk90ha",
    "token": "SfJQnrPDLZNMxSl+cNLZNMxSl+cNGDRLrkqw5cNGDRLrkqw5Xap7yf5"
}
```

### User.refresh(user){#refresh}

更改用户信息

`user` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	id		 |	string	|	是 	| 用户唯一标识					||
|	name	 |	string	|	是 	| 用户名称						||
|	portrait |	string	|	是 	| 合法的用户头像地址				| &nbsp;|

##### 请求成功

```json
{
    "code": 200
}
```