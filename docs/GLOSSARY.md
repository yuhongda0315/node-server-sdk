### 消息类型{#message}

消息类型分两类 `内置消息类型`、`自定义消息类型`，内置消息类型定义了常用消息，例如 `文本消息`、`图片消息` 等，若内置消息无法满足业务需求，可以使用自定消息类型	

#### 内置消息{#inner-message}

##### 消息类型{#inner-message-type}

##### 文本消息

消息类型: `RC:TxtMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| 文本消息内容
|	extra	 |	any		|	否 	| 附加信息，例如: 发送消息携带用户信息

结构示例:

```json
{
	"content": "你好 RongCloud!",
	"extra": {
		"id": "mndk90",
		"name": "孙大圣"
	}
}
```

##### 图片消息

消息类型: `RC:ImgMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| `jpg` 类型缩略图，格式为 Base64，不包含头信息 `data:image/jpg;base64,`
|	imageUri |	string	|	是 	| 图片消息 URL
|	extra	 |	any		|	否 	| 附加信息

JSON 示例:

```json
{
	"content": "iVBORw0KGgoAAAAN...5ErkJggg==",
	"imageUri": "http://www.rongcloud.cn/avatar.jpg",
	"extra": "附加信息"
}
```

##### 语音消息

消息类型: `RC:VcMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| 语音内容，格式为 Base64 类型的 AMR
|	duration |	number	|	是 	| 语音时长，单位: 秒
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"content": "IyFBTVIKPJEXFr5me...5ErkJggg==",
	"duration": 10,
	"extra": "附加信息"
}
```

##### 文件消息

消息类型: `RC:FileMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	name  	 |	string	|	是 	| 名称
|	size 	 |	number	|	是 	| 大小，单位: 字节
|	type	 |	stirng	|	是 	| 类型，文件后缀名，不包含 `.`
|	fileUrl	 |	string	|	是 	| 文件地址
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"name": "user.md",
	"size": 3014,
	"type": "md",
	"fileUrl": "http://www.rongcloud.com/user.md",
	"extra": "附加信息"
}
```

##### 位置消息

消息类型: `RC:LBSMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| `jpg` 类型缩略图，格式为 Base64，不包含头信息 `data:image/jpg;base64,`
|	latitude |	number	|	是 	| 经度
|	longitude|	number	|	是 	| 纬度
|	poi	 	 |	string	|	是 	| 位置信息
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"content": "/9j/4AAQSkZJRgABA...jUHg4p9aos//2Q==",
	"latitude": 24.114,
	"longitude": 334.221,
	"poi": "北京市朝阳区北苑路北辰泰岳大厦",
	"extra": "helloExtra"
}
```

##### Push 内容{#inner-message-push}

| 消息   	 |	类型		| 单聊		|  群聊
| :----------|:--------	|:----------| :-------	
| 文本消息	 |RC:TxtMsg	||
| 图片消息	 |RC:ImgMsg	||
| 语音消息	 |RC:VcMsg	||
| 文件消息	 |RC:FileMsg||
| 位置消息	 |RC:LBSMsg	||

#### 自定义消息{#custom-message}

##### 消息类型{#custom-message-type}

##### Push 内容{#custom-message-push}