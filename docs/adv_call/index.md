# IVR 外呼

## URL

```
POST ${prefix}/account/{account_id}/call/ivr_call
```

## 请求

- `from` 主叫号码
- `to` 被叫号码
- `max_dial_duration` 最大拨号等待时间（秒）
- `max_call_duration` 最大接通时间（秒）
- `user_data` 用户数据

#### 示例
```json
{
	"from":"400-xxxxxx",
	"to":"13692206627",
	"max_dial_duration":60,
	"max_call_duration":1800,
	"user_data":"your data"
}
```

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data.callId` 呼叫id

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "callId": "89d716b2fc23ebff7a0086482bda8942"
  }
}
```


## 事件

结束: 见 [IVR 事件](../evt/ivr/index.md) 的 *呼叫结束事件*
