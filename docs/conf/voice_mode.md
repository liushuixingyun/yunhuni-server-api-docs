# 设置会议成员录放音模式（尚未开放）
<!-- toc -->
##请求

### URL

```
POST {BASE_URL}/conf/{conf_id}/set_voice_mode
```

### 请求参数列表

| 参数                    | 有效值范围       | 是否必填                | 说明                                       |
| --------------------- | ----------- | ------------------- | ---------------------------------------- |
| `call_id`             | UUID HEX 字符串    |  **必填 **   | 会议成员的call_id                       |
| `voice_mode`          | 正整数             |选填，默认`1`  | 录放音模式。参见[录放音模式](#录放音模式)                   |

### 参数详解

#### 声音模式列表 
| 枚举值  | 说明                                  |
| ---- | ---------------------------------------- |
| `1`  | 能够听；能够说。 |
| `2`  | 不能听；能够说。 |
| `3`  | 能够听；不能说。 |
| `4`  | 不能听；不能说。 |

## 事件
见 [语音会议事件](../env/conf/index.md)

## 示例

请求:
```http
POST {BASE_URL}/conf/{conf_id}/set_voice_mode HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
    "call_id`":"89d716b2fc23ebff7a0086482bda8942",
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
