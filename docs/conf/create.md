# 创建会议

## URL

```
POST ${prefix}/account/{account_id}/conf/create
```

## 请求

| 参数           | 是否必须 | 说明                    |
| ------------ | ---- | --------------------- |
| max_duration | 是    | 会议的最大允许时间，单位是秒        |
| max_parts    | 否    | 最大与会方数，默认300          |
| recording    | 否    | 是否自动启动录音              |
| auto_hangup  | 否    | 会议结束自动挂断与会方           |
| bgm_file     | 否    | 会议创建后，自动播放这个声音文件作为背景音 |
| user_data    | 否    | 用户数据，最多128个字符         |



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
