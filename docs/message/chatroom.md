## 聊天室模块

### Chatroom.send(message){#send}

`message` 参数说明:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 2.0.0 |
| targetId	  		| string 	| 	是 	| 聊天室 Id| 2.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 2.0.0 |
| content 			| object 	| 	是 	| 消息内容| 2.0.0 |
| pushContent		| string 	| 	否 	| push 内容 | 2.0.0 |
| pushData 			| object 	| 	否 	| iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData| 2.0.0 |
| count 			| string 	| 	否 	| 针对 iOS 平台，Push 时用来控制未读消息显示数 | 2.0.0 |
| verifyBlacklist 	| number 	| 	否 	| 是否过滤接收用户黑名单列表, 0: 不过滤 、1: 过滤，默认: 0 | 2.0.0 |
| isPersisted 		| string 	| 	否 	| 是否在融云服务器存储, 0: 不存储, 1: 存储, 默认: 1| 2.0.0 |
| isIncludeSender 	| string 	| 	否 	| 发送者自己是否接收此条消息, 0: 不接收, 1: 接收, 默认: 0| 2.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Chatroom.sendBroadcast(message){#sendBroadcast}

`message` 参数说明:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 2.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 2.0.0 |
| content 			| object 	| 	是 	| 消息内容| 2.0.0 |

```json
{
    "code": 200
}
```