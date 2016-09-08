# 会议录音

## 开始录音

### URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/start_record
```

### 请求

| 参数           | 是否必须 | 说明        |
| ------------ | ---- | --------- |
| max_duration | 否    | 默认时间为会议时长 |

- `max_duration` 录音时长（秒）

#### 示例

```json
{
	"max_duration`":600
}
```

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data` 是否成功true or false

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": true
}
```


## 停止录音

### URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/stop_record
```

## 请求
	无

## 响应
- `code` 错误码， 000000表示正常
- `msg` 错误信息
- `data` 是否成功true or false

#### 示例
```json
{
  "code": "000000",
  "msg": "请求成功",
  "data": true
}
```

## 事件

见 [语音会议事件](../env/conf/index.md)
