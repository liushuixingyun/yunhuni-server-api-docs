# 模板审核结果事件
<!-- toc -->

## 模板审核结果事件

申请模板后，审核完成，会通知模板审核记过。

### 回调URL

```
POST {NOTIFY_URL}
```
### 参数

| 参数          | 有效值范围                     | 说明                            |
| ----------- | ------------------------- | ----------------------------- |
| `action`    | **event_notify**          | **事件标志：event_notify **        |
| `event`     | **msg.template_complete** | 据此字段识别不同事件                    |
| `temp_id`   | temp_id                   | 模板标识                          |
| `status`    | 数值                        | 状态1表示成功-1失败                   |
| `reason`    | 字符串                       | 审核失败会返回失败原因                   |
| `checkTime` | 字符串                       | 审核时间，格式：`yyyy-MM-dd hh:mm:ss` |


