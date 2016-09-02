# IVR 外呼

## URL

```
POST /account/{account_id}/call/ivr_call
```

## 参数

- `from` 主叫号码
- `to` 被叫号码
- `max_dial_duration` 最大拨号等待时间（秒）
- `max_call_duration` 最大接通时间（秒）
- `user_data` 用户数据

## 回复

- `call_id`

## 事件

结束: 见 [IVR 事件](../evt/ivr/index.md) 的 *呼叫结束事件*
