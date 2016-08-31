# 创建会议

## URL

```
POST /account/{account_id}/conf/create
```

## 请求参数

- `max_duration` 呼叫最大接通时间（秒）
- `max_parts` 最大与会方数
- `recording` 是否自动启动录音
- `auto_hangup` 会议结束自动挂断与会方
- `bgm_file` 背景音文件
- `user_data` 用户数据

## 回复

- `conf_id`

## 事件

见 [语音会议事件](../env/conf/index.md)
