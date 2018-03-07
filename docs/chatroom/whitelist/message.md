## 聊天室消息白名单模块

### Whitelist.add(message){#add}

添加聊天室消息白名单

`message` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames |	array	|	是 	| [消息类型](../GLOSSARY.md#message)列表 | &nbsp;|

##### 请求成功

```json
{
    "code": 200
}
```

### Whitelist.remove(message){#remove}

删除聊天室消息白名单

`message` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames	 |	string	|	是 	| [消息类型](../GLOSSARY.md#message)列表 						| &nbsp;|

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
|	objectNames |	string	| 	白名单消息类型列表			| &nbsp;|
 

