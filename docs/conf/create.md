# 创建会议

## URL
```
POST /account/{account_id}/conf/create
```

## 参数

- `max_duration`            最大存活时间（秒）
- `max_parts`               最大与会方数
- `recording`               是否自动启动录音
- `auto_hangup`             会议结束自动挂断与会方
- `bgm_file`                背景音文件
- `callback_url`            事件通知地址
- `user_data`                用户数据

## 事件

### 会议结束
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `dismiss`
  - `conf_id`
  - `duration`: 会议时长
  - `user_data`

### 加入会议
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `join`
  - `conf_id`
  - `call_id`
  - `user_data`

### 退出会议
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `leave`
  - `conf_id`
  - `call_id`
  - `user_data`

### 放音结束
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `play_end`
  - `conf_id`
  - `user_data`

### 录音结束
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `play_end`
  - `conf_id`
  - `record_file`
  - `user_data`
