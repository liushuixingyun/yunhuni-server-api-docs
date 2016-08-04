# 双向回拨

## URL
```
/SubAccounts/{SubAccountId}/Calls/DuoCallback
```

## 参数

- `from`                    主叫号码
- `to`                      被叫号码
- `custom_from`             自定义猪脚号码
- `custom_to`               自定义被叫号码
- `dial_voice`              自定义拨号音
- `dial_voice_stop_cond`    自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。
- `max_dial_duration`       最大拨号等待时间（秒）
- `max_call_duration`       最大接通时间（秒）
- `recording`               是否录音
- `countdown_time`          倒计时时间点
- `countdown_voice`         倒计时播放语音文件
- `callback_url`            结果通知地址
- `userdata`                用户数据
