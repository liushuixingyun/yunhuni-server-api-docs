# 会议放音

## 开始放音

### URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/start_play
```

### 请求

| 参数    | 是否必须 | 说明                 |
| ----- | ---- | ------------------ |
| files | 是    | 播放文件列表，列表元素个数必须大于0 |



#### 示例
```json
{
	"files":["filename1","filename2","filename3"]
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


## 停止放音

### URL

```
POST ${prefix}/account/{account_id}/conf/{conf_id}/stop_play
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
