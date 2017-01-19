# 会议邀请呼叫 (beta)
<!--toc-->

## 请求

### URL

```
POST {BASE_URL}/conf/invite_call/{conf_id}
```

### 请求参数列表

| 参数                    | 有效值范围       | 是否必填                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `from`                | 电话号码字符串     | 选填，默认为`使用系统主叫`        | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的                       |
| `to`                  | 电话号码字符串     |  **必填 **          | 被叫号码                        |
| `max_duration`        | 正整数     |  **必填 **     | 最大会议时间（秒）                |
| `max_dial_duration`   | 布尔值     |  选填，默认`false` | 最大拨号等待时间（秒），默认50秒                  |
| `play_file`           | 文件名字符串     |  选填   | 加入后在会议播放这个文件       |
| `voice_mode`          | 正整数     |选填，默认`1`  | 加入后的声音模式。参见[声音模式列表](#声音模式列表)                   |

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
| `msg`  | 文本      | 返回情况说明                        |
| `data` | JSON 对象 | 返回数据对象，参见[data对象属性列表](#data对象属性列表)|

### 参数详解

#### data对象属性列表

| 属性       | 有效值范围        | 说明       |
| -------- | ------------ | -------- |
| `callId` | UUID HEX 字符串 | 加入会议成员的call_id |

## 事件

见 [语音会议事件](../evt/conf/index.md)一节

## 示例

请求:
```http
POST {BASE_URL}/conf/invite_call/{conf_id} HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
	"from":"400-xxxxxxx",
	"to":"13692206627",
	"max_duration":1800,
	"max_dial_duration":60,
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
  "data": {
    "callId": "89d716b2fc23ebff7a0086482bda8942"
  }
}
```

