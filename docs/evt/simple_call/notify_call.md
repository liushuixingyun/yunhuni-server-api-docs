# 语音通知事件

## 结束事件

当语音通知被挂断时，会触发触发系统会向用户指定的`回调URL`发起请求，通知用户事件结束。

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数            | 有效值范围               | 说明                                       |
| ------------- | ------------------- | ---------------------------------------- |
| `action`               | **event_notify**         |事件标志：event_notify。 |
| `event`       | **notify_call.end** | 语音呼通知结束事件标志：notify_call.end。可根据此字段识别不同事件。 |
| `id`          | UUID HEX 字符串        | 结束的外呼通知id                               |
| `subaccount_id`       | `UUID`           | 子账号id，事件所属子账号，如果为空表示是主账号的事件|
| `begin_time`  | 时间戳                 | 开始时间                                    |
| `end_tinme`   | 时间戳                 | 结束时间                                    |
| `answer_time` | 时间戳                 | 接听时间，`null`表示未接通。                        |
| `duration`    | 自然数                 | 通话时长（秒）                                 |
| `hangup_by`   | 枚举                  | `0`: 平台；`1`用户。                           |
| `reason`      | 字符串                 | 失败原因                                    |
| `error`       | 字符串                 | 失败原因                                    |
| `user_data`   | 字符串                 | 用户自定义数据，内容由用户调用接口时上送，无内容时，返回`null` 。     |

