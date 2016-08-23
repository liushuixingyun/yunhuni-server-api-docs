# 外呼通知

## URL

```
POST /account/{account_id}/call/notify_call
```

## 参数

- `from` 主叫号码
- `to` 被叫号码
- `files` 通知放音文件(列表)
- `repeat` 重复播放次数
- `max_dial_duration` 最大拨号等待时间（秒）
- `callback_url` 结果通知地址
- `callback_method` 结果通知 HTTP 方法, `GET`(默认) or `POST`
- `user_data` 用户数据

## 回复

- `id`

## 事件

见 [外呼通知事件](../evt/simple_call/notify_call.md)
