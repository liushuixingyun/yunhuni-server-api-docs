# 会议放音
<!--toc-->

# 开始放音

## 请求

### URL

```
POST {BASE_URL}/conf/start_play/{conf_id}
```

### 请求

### 请求参数列表

| 参数                  | 有效值范围       | 是否必填                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `files`               | JSON 对象        |  **必填 **   | 播放文件列表，列表元素个数必须大于0                        |

## 响应

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | 布尔值      | 成功返回`true`；失败返回`false` |

## 事件
见 [语音会议事件](../env/conf/index.md)

## 示例

请求:
```http
POST {BASE_URL}/conf/start_play/{conf_id} HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
	"files":["filename1","filename2","filename3"]
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

# 停止放音

## 请求

### URL

```
POST {BASE_URL}/conf/{conf_id}/stop_play
```

### 请求

### 请求参数列表
    无

## 响应

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | 布尔值      | 成功返回`true`；失败返回`false` |

## 事件
见 [语音会议事件](../env/conf/index.md)

## 示例

请求:
```http
POST {BASE_URL}/conf/{conf_id}/stop_play HTTP/1.1
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
