## 群聊模块

### Group.send(message){#send}

`message` 参数说明:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 2.0.0 |
| targetId	  		| string 	| 	是 	| 群组 Id| 2.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 2.0.0 |
| content 			| object 	| 	是 	| 消息内容| 2.0.0 |
| pushContent		| string 	| 	否 	| push 内容, 分为两类 [内置消息 Push](../GLOSSARY.md#inner-message-push) 、[自定义消息 Push](../GLOSSARY.md#custom-message-push) | 2.0.0 |
| pushData 			| object 	| 	否 	| iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData| 2.0.0 |
| count 			| string 	| 	否 	| 针对 iOS 平台，Push 时用来控制未读消息显示数 | 2.0.0 |
| verifyBlacklist 	| number 	| 	否 	| 是否过滤接收用户黑名单列表, 0: 不过滤 、1: 过滤，默认: 0 | 2.0.0 |
| isPersisted 		| string 	| 	否 	| 是否在融云服务器存储, 0: 不存储, 1: 存储, 默认: 1| 2.0.0 |
| isCounted 		| number 	| 	否 	| 在各端是否计数, 0: 不计数, 1: 计数, 默认: 1| 2.0.0 |
| isIncludeSender 	| string 	| 	否 	| 发送者自己是否接收此条消息, 0: 不接收, 1: 接收, 默认: 0| 2.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Group.sendMention(message){#sendMention}

发送 @ 消息

`message` 参数说明:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 2.0.0 |
| targetId	  		| string 	| 	是 	| 群组 Id| 2.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 2.0.0 |
| content 			| object 	| 	是 	| 消息内容, 需要包含 `mentionedInfo`| 2.0.0 |
| pushContent		| string 	| 	否 	| push 内容, 分为两类 [内置消息 Push](../GLOSSARY.md#inner-message-push) 、[自定义消息 Push](../GLOSSARY.md#custom-message-push) | 2.0.0 |
| pushData 			| object 	| 	否 	| iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData| 2.0.0 |
| count 			| string 	| 	否 	| 针对 iOS 平台，Push 时用来控制未读消息显示数 | 2.0.0 |
| verifyBlacklist 	| number 	| 	否 	| 是否过滤接收用户黑名单列表, 0: 不过滤 、1: 过滤，默认: 0 | 2.0.0 |
| isPersisted 		| string 	| 	否 	| 是否在融云服务器存储, 0: 不存储, 1: 存储, 默认: 1| 2.0.0 |
| isCounted 		| number 	| 	否 	| 在各端是否计数, 0: 不计数, 1: 计数, 默认: 1| 2.0.0 |
| isIncludeSender 	| string 	| 	否 	| 发送者自己是否接收此条消息, 0: 不接收, 1: 接收, 默认: 0| 2.0.0 |

`mentionedInfo` 说明:

| 参数   	 |	类型		| 说明	
| :----------|:--------	|:-----	
|	type	 |	number	| @ 功能类型，1 表示 @ 所有人、2 表示 @ 指定用户
|	userIds	 |	array	| `type` 为 2 指定用户 Id 列表， `type` 为 1 时可以为空
|	pushContent|	string	| 自定义 @ 消息 push 内容

##### 请求成功

```json
{
    "code": 200
}
```

### Group.recall(message){#recall}

撤回已发送的单聊消息，撤回时间无限制，只允许撤回用户自己发送的消息

`message` 参数说明:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 2.0.0 |
| targetId	  		| string 	| 	是 	| 群组 Id| 2.0.0 |
| uId 				| string 	| 	是 	| 消息的唯一标识，各端 SDK 发送消息成功后会返回 uId  | 2.0.0 |
| sentTime 			| object 	| 	是 	| 消息的发送时间，各端 SDK 发送消息成功后会返回 sentTime| 2.0.0 |

```json
{
    "code": 200
}
```