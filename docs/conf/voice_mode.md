# 会议成员录放音模式

# 邀请加入会议

## URL

```
POST /account/{account_id}/conf/{conf_id}/set_voice_mode
```

## 参数

- `call_id` 会议成员的 `call_id`
- `voice_mode` 加入后的声音模式。

  - `1`: 能够听；能够说
  - `2`: 不能听；能够说
  - `3`: 能够听；不能说
  - `4`: 不能听；不能说
