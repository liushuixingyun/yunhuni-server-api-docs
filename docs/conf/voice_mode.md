# 会议成员录放音模式


## URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/set_voice_mode
```

## 请求

- `call_id` 会议成员的 `call_id`
- `voice_mode` 声音模式。

  - `1`: 能够听；能够说
  - `2`: 不能听；能够说
  - `3`: 能够听；不能说
  - `4`: 不能听；不能说
  
#### 示例
```json
{
	"call_id`":"89d716b2fc23ebff7a0086482bda8942",
	"voice_mode":1
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
