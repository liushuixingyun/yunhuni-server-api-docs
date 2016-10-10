# 双向回拨挂断
用户应用调用该接口后， [yunhuni.com](http://yunhuni.com/) 首先向第一个被叫方发起呼叫；在第一方接听后，向二方放发起呼叫；第二方接听后，双方通话。

期间用户可通过调用双向回拨接口挂断接口，主动结束双向回拨。

## 请求

### URL

```
POST {BASE_URL}/call/duo_callback_cancel
```

### 请求参数列表

| 参数       | 有效值范围        | 是否必填   | 说明                  |
| -------- | ------------ | ------ | ------------------- |
| `callId` | UUID HEX 字符串 | **必填** | 欲挂断的双向回拨返回的`呼叫的 ID` |



## 响应

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本      | 返回情况说明                        |
| `data` | JSON 对象 | 返回数据对象，参见`参数详解`中的`data对象属性列表` |

### 参数详解

#### data对象属性列表

| 属性       | 有效值范围        | 说明       |
| -------- | ------------ | -------- |
| `callId` | UUID HEX 字符串 | 此次呼叫的 ID |

## 事件

见 [双向回拨事件](../evt/simple_call/duo_callback.md)一节

## 举例

请求:
```http
POST {BASE_URL}/account/{account_id}/call/duo_callback HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
  "callId": "2e2597d4849211e681c7803f5d09b29d"
}
```

回复:
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
