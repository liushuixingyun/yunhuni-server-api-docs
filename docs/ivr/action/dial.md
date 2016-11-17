# 拨号
<!-- toc -->

## dial 节点

```
dial
```

## 属性

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `from`                | 主叫号码                          |
| `max_call_duration`   | 最大接通时间（秒）                 |
| `max_dial_duration`   | 最大拨号等待时间（秒）                         |
| `dial_voice_stop_cond`| 自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。 |  

## 内容
    被叫号码

## 嵌套

`play`, `number`, [connect](connect.md)

**NTOE** 只能嵌套一个 `play` 节点，用于播放拨号提示音，且重复播放等参数无效

**ATTENTION** 嵌套 `connect` 表示拨号成功后自动连接

## 示例

```xml
<response>
  <dial from="4001546646464">
    <number>415-123-4567</number>
    <play>ringtone.wav</play>
    <connect schedule_play_time="1470293585">
      <play repeat="3">warning.wav</play>
    </connect>
   </dial>
   <next>http://yourhost/nextstep</next>
</response>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
