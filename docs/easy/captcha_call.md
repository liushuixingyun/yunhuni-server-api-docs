# 语音验证码

## URL
```
/SubAccounts/{SubAccountId}/Calls/CaptchaCall
```

## 参数

- `from`                    主叫号码
- `to`                      被叫号码
- `custom_from`             自定义猪脚号码
- `custom_to`               自定义被叫号码
- `max_call_duration`       最大接通时间（秒）
- `max_dial_duration`       最大拨号等待时间（秒）
- `files`                   验证放音文件(列表)
- `callback_url`            结果通知地址
- `userdata`                用户数据
