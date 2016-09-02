# 外呼通知事件

## 结束事件

- `URL`: `{prefix}/yunhuni/event/notify`
- 参数：

  - `event`: `notify_call.end`
  - `id`
  - `begin_time`: 开始时间
  - `end_tinme`: 结束时间
  - `answer_time`: 接听事件，`null`表示未接通
  - `duration`: 通话时长
  - `hangup_by`: `0`: 平台；`1`用户
  - `reason`
  - `error`
  - `user_data`
