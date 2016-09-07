# 解散会议

## URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/dismiss
```

## 请求

无

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data` 是否成功true or false

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": true
}
```

## 事件

见 [语音会议事件](../env/conf/index.md)
