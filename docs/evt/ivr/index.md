# IVR 事件

## 呼叫结束事件

- `event`: `ivr.call_end`
- `call_id`
- `begin_time`
- `answer_time`
- `end_time`
- `end_by`: `usr` | `sys`
- `reason`
- `error`

## 放音结束事件

- `event`: `ivr.play_end`
- `call_id`
- `begin_time`: 开始时间
- `end_time`: 结束时间
- `error`: 错误信息，如果有的话
- `key`: 结束按键，如果有的话

## 录音结束事件

- `event`: `ivr.record_end`
- `call_id`
- `begin_time`: 开始时间
- `end_time`: 结束时间
- `error`: 错误信息，如果有的话
- `record_files`: 录音文件
- `key`: 结束按键，如果有的话

## 收码结束事件

- `event`: `ivr.get_end`
- `call_id`
- `begin_time`: 开始时间
- `end_time`: 结束时间
- `error`: 错误信息，如果有的话
- `keys`: 收到的按键码

## 发码结束事件

- `event`: `ivr.put_end`
- `call_id`
- `begin_time`: 开始时间
- `end_time`: 结束时间
- `error`: 错误信息，如果有的话

## 拨号结束事件

- `event`: `ivr.dial_end`
- `call_id`
- `begin_time`: 开始时间
- `end_time`: 结束时间
- `error`: 错误信息，如果有的话。没有错误表示被成功接听。

## 连接建立事件

- `event`: `ivr.connect_begin`
- `call_id`
- `error`: 错误信息，如果有的话。

## 连接结束事件

- `event`: `ivr.connect_end`
- `call_id`
- `error`: 错误信息，如果有的话。
- `begin_time`: 开始时间
- `end_time`: 结束时间
