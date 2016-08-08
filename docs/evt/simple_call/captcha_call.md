# 语音验证码事件

## 结束事件

- `URL`: `{prefix}/{callback_url}`
- 参数：

  - `event`: `captcha_call.end`
  - `id`
  - `begin_time`: 开始时间
  - `end_time`: 结束时间
  - `answer`: 接听时间，`null`表示没有成功接听。
  - `keys`: 输入的电话按键码。
  - `duration`: 通话时长（秒）
  - `hangup_by`: `0`: 平台；`1`用户
  - `reason`
  - `error`
  - `user_data`
