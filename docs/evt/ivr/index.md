# IVR 事件 (beta)
<!-- toc -->

## 呼叫结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.call_end**       | 呼叫结束事件标志：ivr.call_end。可根据此字段识别不同事件。 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                               |
| `begin_time`           | 时间戳                   | 开始时间                                    |
| `answer_time`           | 时间戳                  | 应答时间                                    |
| `end_time`             | 时间戳                   | 结束时间                                    |
| `end_by`               | 字符串                   | 返回`usr` 或者 `sys`                                 |
| `reason`               | 字符串                   | 原因     |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null` 。       |


## 放音结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.play_end**       | 放音结束事件标志：ivr.play_end。可根据此字段识别不同事件。 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                               |
| `begin_time`           | 时间戳                   | 开始时间                                    |
| `end_time`             | 时间戳                   | 结束时间                                    |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null` 。       |
| `keys`                  | 字符串                   | 结束按键,无结束按键时，返回`null`。       |


## 录音结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.record_end**       | 录音结束事件标志：ivr.record_end。可根据此字段识别不同事件。 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                                |
| `begin_time`           | 时间戳                   | 开始时间                                  |
| `end_time`             | 时间戳                   | 结束时间                                  |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null` 。         |
| `record_files`         | 字符串                   | 录音文件                                  |
| `key`                  | 字符串                   | 结束按键,无结束按键时，返回`null`。       |

## 收码结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.get_end**        | 收码结束事件标志：ivr.get_end。可根据此字段识别不同事件。 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                                |
| `begin_time`           | 时间戳                   | 开始时间                                  |
| `end_time`             | 时间戳                   | 结束时间                                  |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null` 。         |
| `key`                  | 字符串                   | 结束按键码                                |

## 发码结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.put_end**        | 发码结束事件标志：ivr.put_end。可根据此字段识别不同事件。 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                                |
| `begin_time`           | 时间戳                   | 开始时间                                  |
| `end_time`             | 时间戳                   | 结束时间                                  |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null` 。         |

## 拨号结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.dial_end**       | 拨号结束事件标志：ivr.dial_end。可根据此字段识别不同事件。 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                                |
| `begin_time`           | 时间戳                   | 开始时间                                  |
| `end_time`             | 时间戳                   | 结束时间                                  |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null`, 表示被成功接听。         |


## 连接建立事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.connect_begin**       | 连接建立事件标志：ivr.connect_begin。可根据此字段识别不同事件 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                                |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null`。         |

## 连接结束事件

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `event`                | **ivr.connect_end**   | 连接结束事件标志：ivr.connect_end。可根据此字段识别不同事件 |
| `action`            | **event_notify**|事件标志：event_notify。 |
| `id`              | UUID HEX 字符串          | 呼叫的`ID`                                |
| `begin_time`           | 时间戳                   | 开始时间                                  |
| `end_time`             | 时间戳                   | 结束时间                                  |
| `error`                | 字符串                   | 错误信息。无错误时，返回`null`。         |

