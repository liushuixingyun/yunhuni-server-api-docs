# 将通话加入到会议

## URL

```
POST /account/{account_id}/conf/{conf_id}/join
```

## 参数

- `call_id` 要加入的呼叫的ID
- `max_duration` 最大会议时间（秒）
- `play_file` 加入后在会议播放这个文件
- `voice_mode` 加入后的声音模式。

  - `1`: 能够听；能够说
  - `2`: 不能听；能够说
  - `3`: 能够听；不能说
  - `4`: 不能听；不能说

## 回复

无
