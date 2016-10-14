# 拨号（尚未开放）

## dial 节点

```
dial
```

## 属性

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `callback_url`          | 事件通知地址                   |
| `from`            | 接收 DTMF 码的最大长度                          |
| `max_call_duration`         | 结束码串                  |
| `first_key_timeout`   | 等待接收第一个 DTMF 码的超时时间（秒）                         |
| `continues_keys_timeout`          | 等待接收后续 DTMF 码的超时时间（秒）                  |
| `play_repeat`         | 如果出现等待超时，按照该参数重复播放提示音                   |
| `if_break_on_key`     | 是否在接收到第一个有效 DTMF 码时停止放音                          |


- `callback_url` 事件通知地址
- `from` 主叫号码
- `max_call_duration` 最大接通时间（秒）
- `max_dial_duration` 最大拨号等待时间（秒）
- `dial_voice_stop_cond` 自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。

## 内容
    被叫号码

## 嵌套

`play`, `number`, [connect](connect.md)

**NTOE** 只能嵌套一个 `play` 节点，用于播放拨号提示音，且重复播放等参数无效

**ATTENTION** 嵌套 `connect` 表示拨号成功后自动连接

## 示例

```xml
<response>
  <dial callback_url="http://userhost/callback.php?event=dial" from="4001546646464">
    <number>415-123-4567</number>
    <play>ringtone.wav</play>
    <connect schedule_play_time="1470293585">
      <play repeat=3>warning.wav</play>
    </connect>
   </dial>
   <next>http://yourhost/nextstep</next>
</response>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
