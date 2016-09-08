# 语音验证码

## URL

```
POST ${prefix}/account/{account_id}/call/verify_call
```

## 请求

| 参数               | 必须  | 说明                                  |
| ----------------- | ----- | ----------------------------------- |
| from              | 否    | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的        |
| to                | 是    | 被叫号码                                |
| max_dial_duration | 否    | 最大拨号等待时间（秒），默认50秒                   |
| verify_code       | 否    | 要播放的验证码内容，只能是数字，4到8位。         |
| verify_play_file  | 否    | 验证码提示音文件，文件名或者文件名列表，文件名为开发者用户中心的放音文件名       |
| welcome_play_file | 否    | 欢迎音文件，文件名或者文件名列表，文件名为开发者用户中心的放音文件名       |
| user_data         | 否    | 用户数据,最大128个字符                       |

参数 `verify_code` 与 `verify_play_file` 不得同时为空。
两者都被赋值的情况下，首先播放 `verify_play_file` 指定的内容，然后才播放 `verify_code` 指定的内容。


#### 示例
```json
{
  "from":"400-12349789",
  "to":"13692206627",
  "max_dial_duration":60,
  "welcome_play_file": "welcome.wav",
  "verify_play_file": ["your.wav", "code.wav", "is.wav"],
  "verify_code":"324524",
  "user_data":"your data"
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
见 [语音验证码事件](../evt/simple_call/verify_call.md)
