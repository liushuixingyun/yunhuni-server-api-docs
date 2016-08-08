# 双向回拨事件

## 结束事件

- `URL`: `{prefix}/{callback_url}`
- 参数：

  - `event`: `duo_callback.end`
  - `id`
  - `begin_time`: 开始时间
  - `end_time`: 结束时间
  - `answer_time1`: 第一方接听时间，`null`表示没有成功接听。
  - `answer_time2`: 第二方接听时间，`null`表示没有成功接听。
  - `hangup_by`: `1`: 第一方挂断。`2`：第二方挂断。`0` 平台挂断。
  - `duration`: 双方通话时长（秒）
  - `record_file`: 录音文件
  - `reason`
  - `error`
  - `user_data`
