# 加入会议

## join_conf 节点
```
join_conf
```

## 属性

- `callback_url`            事件通知地址
- `conf_id`                 要加入的会议的ID
- `max_duration`            最大会议时间（秒）
- `voice_mode`              加入后的声音模式。
  * ``1``: 能够听；能够说
  * ``2``: 不能听；能够说
  * ``3``: 能够听；不能说
  * ``4``: 不能听；不能说

## 内容
无

## 嵌套
* [`play`](play.md): 加入后在会议播放这个文件

**Note** 只能嵌套一个 [`play`](play.md) 且其重复播放参数无效

eg:

```xml
<join_conf conf_id="44001" call_id="52342323452">
  <play>somebody_joined.wav</play>
</join_conf>
```
