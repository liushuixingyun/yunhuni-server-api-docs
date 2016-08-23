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
- `callback_url` 结果通知 HTTP 地址
- `callback_method` 结果通知 HTTP 方法, `GET`(默认) or `POST`
- `user_data` 用户数据

## 回复

- `id`

## 事件
见 [语音验证码事件](../evt/simple_call/captcha_call.md)
