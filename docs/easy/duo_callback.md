# 双向回拨

## URL

```
POST /account/{account_id}/call/duo_callback
```

## 参数

- `from` 主叫号码
- `to` 被叫号码
- `custom_from` 自定义主叫号码
- `custom_to` 自定义被叫号码
- `ring_tone` 自定义回铃音
- `ring_tone_mode` 自定义回铃音播放模式

  - `0`：收到对端回铃后开始播放
  - `1`：拨号时即开始播放，收到对端回铃后停止播放
  - `2`：拨号时即开始播放，对端接听或者挂机后停止播放

- `max_dial_duration` 最大拨号等待时间（秒）
- `max_call_duration` 最大接通时间（秒）
- `recording` 是否录音
- `record_mode` 录音模式：

  - `0`: 双向接通后录音
  - `1`：开始呼叫第一方时启动录音
  - `2`: 开始呼叫第二方时启动录音

- `countdown_time` 倒计时时间点

- `countdown_voice` 倒计时播放语音文件
- `callback_url` 结果通知地址
- `user_data` 用户数据

## 事件

### 结束

- `URL`: `{prefix}/{callback_url}`
- 参数：

  - `type`: `hangup`
  - `answered1`: 第一方是否接听
  - `answered1`: 第二方是否接听
  - `record_file`: 录音文件
  - `duration`: 接通时长
  - `reason`
  - `error`
  - `user_data`
