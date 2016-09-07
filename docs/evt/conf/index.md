# 语音会议事件

## 会议结束事件

- `URL`: `${notify_url}`
- 参数：

  - `event`: `conf.end`
  - `id`
  - `begin_time`: 开始时间
  - `end_time`: 结束时间
  - `user_data`

## 加入会议事件

- `URL`: `${notify_url}`
- 参数：

  - `event`: `conf.joined`
  - `id`
  - `join_time`: 加入时间
  - `call_id`:
  - `part_uri`: 手机号、座机号或VOIP帐号(未来)
  - `user_data` 用户数据

## 离开会议事件

- `URL`: `${notify_url}`
- 参数：

  - `event`: `conf.quit`
  - `id`
  - `join_time`: 加入时间
  - `quit_time`: 离开时间
  - `call_id`:
  - `part_uri`: 手机号、座机号或VOIP帐号(未来)
  - `user_data` 用户数据

## 会议放音结束事件
- `URL`: `${notify_url}`
- 参数：
	- `event`: `conf.play_end`
	- `id`
	- `begin_time`: 开始时间
	- `end_time`: 结束时间
	- `user_data` 用户数据

## 会议录音结束事件
- `URL`: `${notify_url}`
- 参数：
	- `event`: `conf.record_end`
	- `id`
	- `begin_time`: 开始时间
	- `end_time`: 结束时间
	- `user_data` 用户数据
