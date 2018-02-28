### 文档导航

```{mermaid}
graph TB
   subgraph 聊天室模块
		聊天室
		聊天室-全局禁言
		聊天室-成员禁言
		聊天室-封禁
		聊天室-消息降级
		聊天室-消息分发
		聊天室-保活
		聊天室-白名单
    end
    click 聊天室 "http://www.github.com" "点击前往"
```

```{mermaid}
graph TB
    subgraph 用户模块
        用户
        用户-黑名单
        用户-封禁
        用户-在线状态
	end

	subgraph 群组模块
		群组
		群组-禁言
	end

    subgraph 消息模块
        消息
		历史消息
    end

    subgraph 会话模块
		会话
    end

    subgraph 敏感词模块
		敏感词
    end

	subgraph 错误码模块
		错误码
    end
    click 咨询方案 "http://www.github.com" "This is a link"
```
