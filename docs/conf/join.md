# 将通话加入到会议 （尚未开放）
<!--toc-->

##请求

### URL

```
POST {BASE_URL}/conf/{conf_id}/join
```

### 请求参数列表

| 参数                    | 有效值范围       | 是否必填                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `call_id`             | UUID HEX 字符串    |  **必填 **   | 要加入的呼叫的ID                        |
| `max_duration`        | 正整数             |  **必填 **   | 最大会议时间（秒）                |
| `play_file`           | 文件名字符串       |  选填   | 加入后在会议播放这个文件       |
| `voice_mode`          | 正整数             |选填，默认`1`  | 加入后的声音模式。参见[声音模式列表](#声音模式列表)                   |

### 参数详解

#### 声音模式列表 
| 枚举值  | 说明                                  |
| ---- | ---------------------------------------- |
| `1`  | 能够听；能够说。 |
| `2`  | 不能听；能够说。 |
| `3`  | 能够听；不能说。 |
| `4`  | 不能听；不能说。 |

## 响应

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | 布尔值      | 成功返回`true`；失败返回`false` |

## 事件

见 [语音会议事件](../evt/conf/index.md)一节

## 示例

请求:
```http
POST {BASE_URL}/conf/{conf_id}/invite_call HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
	"call_id":"89d716b2fc23ebff7a0086482bda8942",
	"max_duration":1800,
	"play_file":"file1",
	"voice_mode":1
}
```

响应:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
   "code": "000000",
    "msg": "请求成功",
    "data": true
}
```

