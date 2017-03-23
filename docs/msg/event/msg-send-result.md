# 消息发送结果事件
<!-- toc -->

## 消发结果事件

消息单发完成后，会通消息发送结果。

### 回调URL

```
POST {NOTIFY_URL}
```
### 参数

| 参数          | 有效值范围               | 说明                     |
| ----------- | ------------------- | ---------------------- |
| `action`    | **event_notify**    | **事件标志：event_notify ** |
| `event`     | **msg.sending_complete** | 据此字段识别不同事件             |
| `msg_key`   | msg_key             | 消息任务标识                 |
| `state`     | 数值                  | 状态0表示成功1失败             |
| `failMobiles` | string                | 以 ","号分隔各个号码                  |
| `type`      | 数值                  | 0表示单发1表示群发             |


