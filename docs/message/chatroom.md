## 聊天室模块

### Chatroom.send(message){#send}

`message` 参数说明:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 2.0.0 |
| targetId	  		| string 	| 	是 	| 聊天室 Id| 2.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 2.0.0 |
| content 			| object 	| 	是 	| 消息内容| 2.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Chatroom.broadcast(message){#broadcast}

向应用内所有聊天室发送消息

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