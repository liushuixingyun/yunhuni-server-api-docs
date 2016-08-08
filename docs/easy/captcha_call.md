# 语音验证码

## URL

```
POST /account/{account_id}/call/captcha_call
```

## 参数

- `from` 主叫号码
- `to` 被叫号码
- `custom_from` 自定义主叫号码
- `custom_to` 自定义被叫号码
- `max_call_duration` 最大接通时间（秒）
- `max_dial_duration` 最大拨号等待时间（秒）
- `files` 验证放音文件(列表)
- `callback_url` 结果通知地址
- `user_data` 用户数据

## 事件

### 结束

- `URL`: `{prefix}/{callback_url}`
- 参数：

  - `type`: `hangup`
  - `answered`: 是否接听
  - `keys`: 用户输入的按键码
  - `duration`: 接通时长
  - `reason`
  - `error`
  - `user_data`
