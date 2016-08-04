# 语音通知

## URL
```
POST /account/{account_id}/call/notify_call
```

## 参数

- `from`                    主叫号码
- `to`                      被叫号码
- `custom_from`             自定义猪脚号码
- `custom_to`               自定义被叫号码
- `files`                   通知放音文件(列表)
- `repeat`                  重复播放次数
- `max_dial_duration`       最大拨号等待时间（秒）
- `callback_url`            结果通知地址
- `userdata`                用户数据
