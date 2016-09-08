# 将通话加入到会议

## URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/join
```

## 请求

| 参数           | 是否必须 | 说明                                       |
| ------------ | ---- | ---------------------------------------- |
| call_id      | 是    | 要加入的呼叫的ID                                |
| max_duration | 是    | 最大会议时间（秒）                                |
| play_file    | 否    | 加入后在会议播放这个文件                             |
| voice_mode   | 否    | 加入后的声音模式，``1``: 能够听；能够说，`2`: 不能听；能够说，`3`: 能够听；不能说，`4`: 不能听；不能说；默认1 |



#### 示例
```json
{
	"call_id":"89d716b2fc23ebff7a0086482bda8942",
	"max_duration":1800,
	"play_file":"file1",
	"voice_mode":1
}
```

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data` 是否成功true or false

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": true
}
```

## 事件

见 [语音会议事件](../env/conf/index.md)
