#### 错误码

#### Common
| 错误码 | 描述	   						
| :-----|:------------
| 20000 | 签名错误, 请排查 Appkey、Secret 是否正确
| 20001 | 调用频率超限，每秒钟限制 100 次，调整频率上限请移步至专有云 http://www.rongcloud.cn/pricing#pay
| 20002 | {{name}} 个数超限, {{name}} >= {{min}} 且 {{name}} <= {{max}}
| 20003 | {{name}} 长度超限, {{name}} >= {{min}} 且 {{name}} <= {{max}} 单位: 字节 
| 20004 | 封禁时间 minute 不正确，minute >= 1 且 minute <= 43200 单位: 分钟
| 20005 | {{name}} 为必传项
| 20006 | {{name}} 参数不正确，请检查参数类型,应该为 {{type}} 传入为 {{currentType}} 
| 20007 | {{name}} 不是合法地址，请检查 {{name}} 是否正确

#### User

| 错误码 | 描述	   						
| :-----|:------------
| 10001 | 测试人数超限, 请前往开发者后台 -> 应用 -> App Key -> 测试用户数,增加测试人数, https://developer.rongcloud.cn

#### Group

| 错误码 | 描述	   						
| :-----|:------------
| 13001 | 群组同步频率超限，每秒钟限制 100 次
| 13002 | 用户加入群组数量超限，同一用户最多加入 500 个群组
| 13003 | 群组中成员数超出上限，群组成员最多为 3000 人
| 13004 | 群组成员禁言时间超限，最大禁言时长为 43200 分钟
| 13005 | 解除群组成员禁言数量超限，单次最多解禁 20 个用户
| 13006 | 参数为空请检查
| 13007 | 提交加入群组用户 Id 超限，单次最多不超过 1000 个用户
| 13008 | 添加群组成员禁言数量超限，单次最多禁言 20 个用户
| 13009 | 禁言时长格式错误，最大禁言时长为 43200 分钟，0 为永久禁言
| 13010 | groupId 长度不正确，必须大于一个字符
| 13011 | groupName 长度不正确，必须大于一个字符

##### Message

