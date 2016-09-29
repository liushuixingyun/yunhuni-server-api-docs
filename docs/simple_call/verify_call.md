# 语音验证码

用户应用调用该接口后， [yunhuni.com](http://yunhuni.com/) 向被叫方发起呼叫；
在接听后，播放提示语音和验证码内容。

## 请求

### URL

```
POST {BASE_URL}/account/{account_id}/call/verify_call
```

### 请求对象属性列表

|          参数        |       有效值范围          |      默认值          |         说明          |
| ------------------- |-------------------------- | ------------------- | --------------------- |
| `from`              | 电话号码字符串             | `null`: 使用系统主叫 | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的        |
| `to`                | 电话号码字符串             |                     | 被叫号码                                |
| `max_dial_duration` | 正整数                    | `45`                | 最大拨号等待时间（秒），默认50秒                   |
| `repeat`            | 非负整数                  | `0`                 | 重复播放次数。`1`表示播放两次（重复一次）；`2`表示播放三次（重复两次）。注意，0表示播放一次，不重复播放。 |
| `play_file`         | 文件名字符串              | `null`: 无提示语音    | 验证码提示音文件名 |
| `verify_code`       | 12位以内十进制正整数字符串 |                      | 要播放的验证码内容，只能是十进制数字，1到12个字符。 |
| `user_data`         | 不超过128字符字符串       | `null`: 无用户数据    | 用户数据，该呼叫的后续事件将带有该参数 |

参数 `play_file` 与 `verify_code` 不得同时为空。
两者都被赋值的情况下，首先播放 `play_file` 指定的文件，然后才播放 `verify_code` 中的内容。

## 回复

### 回复对象属性列表

属性      |   有效值范围    |                   说明                                
--------- | -------------- | -------------------------------------
`code`    | 数字文本       | 状态码，全0表示正确
`msg`     | 文本           | 返回情况说明
`data`    | JSON 对象      | 返回数据对象

### `data` 对象属性列表

属性       |   有效值范围   |                   说明                                
--------- | -------------- | -------------------------------------
`callId`  | UUID HEX 字符串 | 此次呼叫的 ID      

## 事件
见 [语音验证码事件](../evt/simple_call/verify_call.md)

## 示例

请求：

```http
POST {BASE_URL}/account/{account_id}/call/verify_call HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
  "from": "075589877675",
  "to": "13967446745",
  "verify_code": "759345"
}
```

回复:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "callId": "89d716b2fc23ebff7a0086482bda8942"
  }
}
```
