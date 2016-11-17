# 从会议退出 (beta)

<!-- toc -->

##请求

### URL

```
POST {BASE_URL}/conf/quit/{conf_id}
```

### 请求参数列表

| 参数                    | 有效值范围       | 是否必填                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `call_id`             | UUID HEX 字符串    |  **必填 **   | 会议成员的call_id                        |

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
POST {BASE_URL}/conf/quit/{conf_id} HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
	"call_id":"89d716b2fc23ebff7a0086482bda8942"
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


