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
| repeat            | 否    | 重复播放次数，默认1，表示播放两次。注意，0表示播放一次，不重复。
| play_file         | 否    | 验证码提示音文件，文件名或者文件名列表，文件名为开发者用户中心的放音文件名       |
| verify_code       | 否    | 要播放的验证码内容，只能是十进制数字，1到12个字符。         |
| user_data         | 否    | 用户数据,最大128个字符                       |

参数 `play_file` 与 `verify_code` 不得同时为空。
两者都被赋值的情况下，首先播放 `play_file` 指定的文件，然后才播放 `verify_code` 中的内容。

#### 示例
```json
{
  "from": "400-12349789",
  "to": "13692206627",
  "max_dial_duration": 60,
  "repeat": 2,
  "play_file": ["hello.wav", "your.wav", "code.wav", "is.wav"],
  "verify_code": "324524",
  "user_data": "your data"
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
