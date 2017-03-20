# 解散会议

<!--toc-->

## 请求

### URL

```
POST {BASE_URL}/conf/dismiss/{conf_id}
```

### 请求参数列表
    无

## 响应

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确               |
| `msg`  | 文本      | 返回情况说明                        |
| `data` | 布尔值    | 是否成功 `true` &#124;  `false`           |

## 事件

见 [语音会议事件](../env/conf/index.md)一节

## 示例

请求:
```http
POST {BASE_URL}/conf/dismiss/{conf_id} HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

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
