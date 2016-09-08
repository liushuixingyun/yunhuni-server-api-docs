# 会议邀请呼叫

## URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/invite_call
```

## 请求

| 参数                   | 是否必须 | 说明                                       |
| -------------------- | ---- | ---------------------------------------- |
| from                 | 否    | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的             |
| to                   | 是    | 被叫号码                                     |
| max_duration         | 是    | 最大会议时间（秒）                                |
| max_dial_duration    | 否    | 最大拨号等待时间（秒），默认50秒                        |
| dial_voice_stop_cond | 否    | 自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。          |
| play_file            | 否    | 加入后在会议播放这个文件                             |
| voice_mode           | 否    | 加入后的声音模式，``1``: 能够听；能够说，`2`: 不能听；能够说，`3`: 能够听；不能说，`4`: 不能听；不能说；默认1 |



#### 示例
```json
{
	"from":"400-xxxxxxx",
	"to":"13692206627",
	"max_duration":1800,
	"max_dial_duration":60,
	"dial_voice_stop_cond":1,
	"play_file":"file1",
	"voice_mode":1
}
```

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data.callId` 呼叫id

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "callId": "89d716b2fc23ebff7a0086482bda8942"
  }
}
```

## 事件

见 [语音会议事件](../env/conf/index.md)
