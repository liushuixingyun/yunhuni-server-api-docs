# 会议邀请呼叫

## URL

```
POST /account/{account_id}/conf/{conf_id}/invite_call
```

## 参数

- `from` 主叫号码
- `to` 被叫号码
- `max_duration` 最大会议时间（秒）
- `max_dial_duration` 最大拨号等待时间（秒）
- `dial_voice_stop_cond` 自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。
- `play_file` 加入后在会议播放这个文件
- `voice_mode` 加入后的声音模式。

  - `1`: 能够听；能够说
  - `2`: 不能听；能够说
  - `3`: 能够听；不能说
  - `4`: 不能听；不能说

## 回复

- `call_id`