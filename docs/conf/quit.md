# 从会议退出

## URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/invite_call
```

## 请求

- `call_id` 会议成员的 `call_id`

#### 示例
```json
{
	"call_id":"89d716b2fc23ebff7a0086482bda8942"
}
```

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