# 创建会议

## URL

```
POST ${prefix}/account/{account_id}/conf/create
```

## 请求

- `max_duration` 呼叫最大接通时间（秒）
- `max_parts` 最大与会方数
- `recording` 是否自动启动录音
- `auto_hangup` 会议结束自动挂断与会方
- `bgm_file` 背景音文件
- `user_data` 用户数据 会在会议事件通知中返回给开发者

#### 示例
```json
{
    "max_duration":1800,
    "max_parts":30,
    "recording":true,
    "auto_hangup":true,
    "bgm_file":"file1",
	"user_data":"your data"
}
```

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data.confId` 会议id

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "confId": "89d716b2fc23ebff7a0086482bda8941"
  }
}
```

## 事件

见 [语音会议事件](../env/conf/index.md)
