# IVR 外呼

## URL

```
POST ${prefix}/account/{account_id}/call/ivr_call
```

## 请求
| 参数                | 是否必须 | 说明                           |
| ----------------- | ---- | ---------------------------- |
| from              | 否    | 主叫号码，只能填租用的号码，不填平台会自动选择一个可用的 |
| to                | 是    | 被叫号码                         |
| max_dial_duration | 否    | 最大拨号等待时间（秒），默认50秒            |
| max_call_duration | 是    | 最大接通时间（秒）                    |
| user_data         | 否    | 用户数据,最大128个字符                |


#### 示例

```json
{
	"from":"400-xxxxxx",
	"to":"13692206627",
	"max_dial_duration":60,
	"max_call_duration":1800,
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

结束: 见 [IVR 事件](../evt/ivr/index.md) 的 *呼叫结束事件*
