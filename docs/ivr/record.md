# 录音

## 节点

```
record
```

## 属性

- `callback_url` 事件通知地址
- `max_duration` 最长录音时限（秒）
- `beeping` 是否在录音之前播放"嘀"的一声
- `finish_keys` 中断码

## 内容

无

## 嵌套

无

## 事件

### 录音结束

- `URL`: `{prefix}/{callback_url}`
- 参数：

  - `type`: `record_end`
  - `call_id`
  - `record_file`
  - `error`
