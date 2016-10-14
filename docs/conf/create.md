# 创建会议（尚未开放）
<!--toc-->
## 请求

### URL

```
POST {BASE_URL}/conf/create
```

### 请求参数列表

| 参数                    | 有效值范围       | 是否必填                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `max_duration`        | 正整数     |  **必填 **       | 会议的最大允许时间，单位是秒                       |
| `max_parts`           | 正整数     |  选填，默认`null`      | 最大与会方数，默认300                        |
| `recording`**尚未开放**       | 布尔值             |  选填，默认`false` | 是否自动启动录。                |
| `auto_hangup`         | 布尔值     |  选填，默认`false` | 会议结束自动挂断与会方                  |
| `bgm_file`            | 字符串     | 选填，默认`null`   |  会议创建后，自动播放这个声音文件作为背景音。       |
| `user_data`           | 不超过128字符字符串 | 选填，默认`null` ，无用户数据  | 用户数据，该呼叫的后续事件将带有该参数。                     |

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
| `callId` | UUID HEX 字符串 | 此次呼叫的 ID |

## 事件

见 [语音会议事件](../evt/conf/index.md)一节

## 示例

请求:
```http
POST {BASE_URL}/conf/create HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
    "max_duration":1800,
    "max_parts":30,
    "recording":true,
    "auto_hangup":true,
    "bgm_file":"file1",
	"user_data":"your data"
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
    "callId": "89d716b2fc23ebff7a0086482bda8941"
  }
}
```

