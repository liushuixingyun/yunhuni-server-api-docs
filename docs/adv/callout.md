# IVR 外呼

## URL

```
POST /account/{account_id}/call/ivr_call
```

## 参数

- `from` 主叫号码
- `to` 被叫号码
- `custom_from` 自定义猪脚号码
- `custom_to` 自定义被叫号码
- `max_dial_duration` 最大拨号等待时间（秒）
- `max_call_duration` 最大接通时间（秒）
- `callback_url` 结果通知地址
- `user_data` 用户数据

## 事件

### 结束

- `URL`: `{prefix}/{callback_url}`
- 参数：

  - `type`: `hangup`
  - `answered`: 是否接听
  - `duration`: 接通时长
  - `reason`
  - `user_data`
