# 发送码

## 节点

```
get
```

## 属性

- `valid_keys` 有效 DTMF 码范围字符串
- `max_keys` 接收 DTMF 码的最大长度
- `finish_keys` 结束码串
- `first_key_timeout` 等待接收第一个 DTMF 码的超时时间（秒）
- `continues_keys_timeout` 等待接收后续 DTMF 码的超时时间（秒）
- `play_repeat` 如果出现等待超时，按照该参数重复播放提示音
- `if_break_on_key` 是否在接收到第一个有效 DTMF 码时停止放音

## 内容

无

## 嵌套

[`playlist`](play.md), [`play`](play.md),[`next`](next.md)

**NOTE** 此时 [`playlist`](play.md) 或 [`play`](play.md) 的参数无效

eg:

```xml
<get valid_keys="0123456789#" finish_keys="#">
  <playlist>
    <play>please.wav<play>
    <play>input.wav<play>
  <playlist>
  <next>http://yourhost/nextstep</next>
</get>
```

```xml
<get valid_keys="0123456789#" finish_keys="#">
  <play>please_input.wav<play>
  <next>http://yourhost/nextstep</next>
</get>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
