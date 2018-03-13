## 聊天室消息白名单模块

设置消息白名单后，服务器负载高时聊天室中此类型消息不会被丢弃，设置 2 后小时生效

设置白名单后，消息优先级高于 [High Level](../demotion.md#demotion) 消息

此功能需开通 [专有云服务](http://www.rongcloud.cn/deployment#proprietary-cloud)

### Whitelist.add(message){#add}

添加聊天室消息白名单

`message` 参数的**属性说明**：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames |	array	|	是 	| [消息类型](../../GLOSSARY.md#message)列表 | 3.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Whitelist.remove(message){#remove}

删除聊天室消息白名单

`message` 参数的**属性说明**：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames	 |	string	|	是 	| [消息类型](../../GLOSSARY.md#message)列表 						| 3.0.0 |

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
|	objectNames |	string	| 	白名单消息类型列表			| 3.0.0 |
 

