## 聊天室降级

### Demotion.add(objectNames){#add}

添加聊天室消息优先级方法

`chatroom` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames |	string	|	是 	| 低优先级的消息类型，每次最多提交 5 个| &nbsp;|

##### 请求成功

```json
{
    "code": 200
}
```

### Demotion.remove(objectNames){#remove}

移除聊天室消息优先级方法

`chatroom` 参数说明：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本		|
| :----------|:--------	|:-----	|:------------------------------|:-------- |
|	objectNames	 |	string	|	是 	| 低优先级的消息类型，每次最多提交 5 个。						| &nbsp;|




##### 请求成功

```json
{
    "code": 200
}
```
### Demotion.getList(){#getList}

获取聊天室消息优先级方法

##### 请求成功

```json
{
	"code": 200,
	"objectNames":[
		"RC:ImgMsg",
		"RC:ImgTextMsg",
		"RC:VcMsg"
		]
}
```
| 参数   	 |	类型		| 说明 							|最低版本		|
| :----------|:--------	|:------------------------------|:-------- |
|	objectNames |	string	| 消息类型数组。				| &nbsp;|
 

