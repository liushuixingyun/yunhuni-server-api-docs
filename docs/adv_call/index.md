# IVR 呼出
<!-- toc -->

## 请求

### URL

```
POST ${BASE_URL}/call/ivr_call
```

## 请求参数列表
| 参数                | 是否必须 | 说明                           |
| ----------------- | ---- | ---------------------------- |
| from              | 否    | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的 |
| to                | 是    | 被叫号码                         |
| max_dial_duration | 否    | 最大拨号等待时间（秒），默认50秒            |
| max_call_duration | 是    | 最大接通时间（秒）                    |
| user_data         | 否    | 用户数据,最大128个字符                |



## 响应

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



## 示例

请求:
```http
POST {BASE_URL}/call/ivr_call HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
	"from":"400-xxxxxx",
	"to":"13692206627",
	"max_dial_duration":60,
	"max_call_duration":1800,
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
    "callId": "2e2597d4849211e681c7803f5d09b29d"
  }
}
```


## 事件

结束: 见 [IVR 事件](../evt/ivr/index.md) 的 *呼叫结束事件*
