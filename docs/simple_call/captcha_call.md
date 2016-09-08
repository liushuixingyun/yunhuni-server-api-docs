# 语音验证码

## URL

```
POST ${prefix}/account/{account_id}/call/captcha_call
```

## 请求

| 参数                | 是否必须 | 说明                                  |
| ----------------- | ---- | ----------------------------------- |
| from              | 否    | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的        |
| to                | 是    | 被叫号码                                |
| max_dial_duration | 否    | 最大拨号等待时间（秒），默认50秒                   |
| verify_code       | 否    | 接收有效字符范围，默认0123456789*#ABCD         |
| max_keys          | 否    | 接收输入的最大长度，一旦达到最大长度，此次接收过程即宣告结束，默认11 |
| files             | 否    | 提示放音文件的名称(列表),值为开发者用户中心的放音文件名       |
| user_data         | 否    | 用户数据,最大128个字符                       |



#### 示例
```json
{
    "from":"400-12349789",
    "to":"13692206627",
    "max_dial_duration":60,
  	"verify_code":"123456789*#A"
  	"max_keys":18
    "files":["file1","file2"],
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
见 [语音验证码事件](../evt/simple_call/captcha_call.md)
