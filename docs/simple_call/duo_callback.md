# 双向回拨

## URL

```
POST /account/{account_id}/call/duo_callback
```

## 参数

- `from1` 第一方主叫号码
- `to1` 第一方被叫号码
- `from2` 第二方主叫号码
- `to2` 第二方被叫号码
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

- `callback_url` 结果通知 HTTP 地址
- `callback_method` 结果通知 HTTP 方法, `GET`(默认) or `POST`
- `user_data` 用户数据

## 回复

- `id`

## 事件

见 [双向回拨事件](../evt/simple_call/duo_callback.md)一节
