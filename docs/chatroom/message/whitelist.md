## 聊天室消息白名单模块

### Whitelist.add(objectNames){#add}

添加聊天室消息白名单

`objectNames` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames |	string	|	是 	| 禁言时长，以分钟为单位，最大值为 43200 分钟。（必传）| &nbsp;|

##### 请求成功

```json
{
    "code": 200
}
```

### Whitelist.remove(objectNames){#remove}

删除聊天室消息白名单

`objectNames` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames	 |	string	|	是 	| 用户 Id，可同时移除多个用户，最多不超过 20 个。（必传）						| &nbsp;|




##### 请求成功

```json
{
    "code": 200
}
```
### Whitelist.getList(){#getList}

获取聊天室消息白名单

##### 请求成功

```json
{
	"code": 200,
	"objectNames":["RC:ImgMsg","RC:ImgTextMsg","RC:VcMsg"]
}
```
| 参数   	 |	类型		| 说明 							|最低版本		|
| :----------|:--------	|:------------------------------|:-------- |
|	members |	string	| 白名单用户数组。				| &nbsp;|
 

