## 聊天室降级

聊天室消息级别分两种: `High Level`、`Low Level`

默认全部消息类型为 `High Level` 的消息，当服务器负载高时 `Low Level` 的消息优先被丢弃，让出资源给 `High Level` 的消息

### Demotion.add(message){#add}

添加应用内聊天室降级消息

`message` 参数说明：

| 参数   	 	|	类型		| 必填	| 说明 												 |最低版本		|
| :-------------|:--------	|:-----	|:---------------------------------------------------|:-------- |
|	objectNames |	string	|	是 	| [消息类型](../GLOSSARY.md#message)列表，最多 20 个	 | 3.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Demotion.remove(message){#remove}

移除应用内聊天室降级消息

`message` 参数说明：

| 参数   	 	 |	类型		| 必填	| 说明 									|最低版本		|
| :--------------|:--------	|:-----	|:--------------------------------------|:-------- |
|	objectNames	 |	string	|	是 	| [消息类型](../GLOSSARY.md#message)列表	| 3.0.0 |


##### 请求成功

```json
{
    "code": 200
}
```

### Demotion.getList(){#getList}

获取应用内聊天室降级消息

##### 请求成功

```json
{
	"code": 200,
	"objectNames":[
		"RC:ImgMsg",
		"RC:ImgTextMsg"	
	]
}
```
| 参数   	 	|	类型		| 说明 							
| :-------------|:--------	|:------------------------------
|	objectNames |	string	| 消息类型数组				
 

