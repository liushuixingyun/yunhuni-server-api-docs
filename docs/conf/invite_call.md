# 邀请加入会议

## URL
```
POST /account/{account_id}/conf/{conf_id}/invite_call
```

## 参数
- `from`                    主叫号码
- `to`                      被叫号码
- `custom_from`             自定义猪脚号码
- `custom_to`               自定义被叫号码
- `max_call_duration`       最大接通时间（秒）
- `max_dial_duration`       最大拨号等待时间（秒）
- `dial_voice_stop_cond`    自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。
- `voice_file`              加入后在会议播放这个文件
- `voice_mode`              加入后的声音模式。
  * ``1``: 能够听；能够说
  * ``2``: 不能听；能够说
  * ``3``: 能够听；不能说
  * ``4``: 不能听；不能说
