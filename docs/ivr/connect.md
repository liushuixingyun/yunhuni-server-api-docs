# 连接

## connect 节点
```
connect
```

用于连接非自动连接的拨号

## 属性
- `callback_url`            事件通知地址
- `max_duration`            最大连接时间（秒）
- `mode`                    连接模式
  - `1`：	连接双方均可互相听到
  - `2`：	仅连接的第二方可以听到第一方;第一方听不到第二方
  - `3`：	仅连接的第一方可以听到第二方;第二方听不到第一方
- `recording`               是否录音
- `volume1`                 双通道连接建立后的第一方音量
- `volume2`                 双通道连接建立后的第二方音量
- `play_time`               本次连接通话进行到这个时间点播放声音

## 内容
无

## 嵌套
`play`

**NOTE** 重复参数有效

eg:

```xml
<connect schedule_play_time="1470293585">
  <play repeat=3>warning.wav</play>
</connect>
```

## 事件

### 连接建立
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `connect_begin`
  - `call_id`

### 连接结束
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `connect_end`
  - `call_id`
  - `connected`: 是否连接上了？
  - `error`
  - `duration`: 时长
