
## 短信

### 模板短信单发
#### 请求URL

```
POST ${BASE_URL}/msg/sms/send
```

### 请求参数列表

| 参数                   | 有效值范围    |    是否必填       | 说明                                       |
| ---------------------- | --------------|---------- | ---------------------------------------- |
| `mobile`          | 字符串           |  是   | 目标号码|
| `tempId`              | 字符串          |   是  | 模板编号 |
| `tempArgs`              | 字符串         |    否    |模板中对应的参数值(中文请使用utf-8编码)，多个参数值以分号间隔。 参数值顺序与模板中变量顺序对应。  参数值个数必须与模板中变量个数一致，否则返回失败。|

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据对象，参见[data对象属性列表](#data对象属性列表)  |

### 参数详解

#### data对象属性列表

| 属性       | 有效值范围        | 说明       |
| -------- | ------------ | -------- |
| `msgKey` | 字符串  | 消息任务标识，用于查询消息发送结果 |

#### 示例

请求:
```http
POST ${BASE_URL}/msg/sms/send HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "mobile":"13750012158",
   "tempId":"100001",
   "tempArgs": "参数值1;参数值2"
}
```

响应:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
  "code": "000000",
  "msg": "请求成功",
  "data": {
      "msgKey":"40288ac9580a67f501580a6a42a40001"
    }
}
```

### 模板短信群发
#### 请求URL

```
POST ${BASE_URL}/msg/sms/mass/task
```

### 请求参数列表

| 参数                   | 有效值范围    |    是否必填       | 说明                                       |
| ---------------------- | --------------|---------- | ---------------------------------------- |
| `taskName`          | 字符串           |  是   | 群发任务名称|
| `tempId`         | 字符串          |   是  | 模板编号 |
| `tempArgs`              | 字符串          |    否    |模板中对应的参数值(中文请使用utf-8编码)，多个参数值以分号间隔。 参数值顺序与模板中变量顺序对应。  参数值个数必须与模板中变量个数一致，否则返回失败。|
| `mobiles`            | 字符串         |    是    | 发送号码，多个以逗号分割，最大数量为10000个|
| `sendTime`            | 字符串         |    是    | 发送时间，格式为“yyyy-MM-dd HH:mm:ss“（时间提交规则与群发任务功能一致，如果时间小于当前时间10分钟，则自动设置为当前时间+10分钟）， 发送时间小于当前时间+7天，大于当前时间+10分钟|

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据对象，参见[data对象属性列表](#data对象属性列表)  |

#### 示例

请求:
```http
POST ${BASE_URL}/msg/sms/mass/task HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "taskName":"测试消息",
   "tempId":"100001",
   "tempArgs": "参数值1;参数值2",
   "mobiles": "13750012158,13750012159",
   "sendTime": "2017-02-12 10:25:45"
}
```

响应:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "msgKey":"40288ac9580a67f501580a6a42a40001"
  }
}
```



### 发送结果查询
#### 请求URL

```
GET ${BASE_URL}/msg/sms/{msgKey}
```

### 请求参数列表

无

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据对象，参见[发送结果data对象属性列表](#发送结果data对象属性列表)  |


### 参数详解

#### 发送结果data对象属性列表

| 属性       | 有效值范围        | 说明       |
| -------- | ------------ | -------- |
| `msgKey` | 字符串  | 消息任务标识，用于查询消息发送结果 |
| `taskName` | 字符串  | 任务名称 |
| `tempId` | 字符串  | 模板编号 |
| `tempArgs` | 字符串  | 模板参数 |
| `sendTime` | 字符串  | 发送时间 |
| `sendType` | 字符串  | 发送类型 |
| `isMass` | boolean  | 是否是群发 |
| `sumNum` | 字符串  | 发送总数量 |
| `state` | 字符串  | 发送状态 |
| `succNum` | 字符串  | 发送成功数量 |
| `failNum` | 字符串  | 发送失败数量 |
| `pendingNum` | 字符串  | 待发送数量 |

#### 示例

请求:
```http
GET ${BASE_URL}/msg/sms/40288ac9580a67f501580a6a42a40001 HTTP/1.1
```

响应:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "msgKey":"40288ac9580a67f501580a6a42a40001",
    "taskName":"2017双11促销",
    "tempId":"tempId",
    "tempArgs":"参数值1;参数值2",
    "sendTime":"2017-02-12 10:25:45",
    "sendType":"1",
    "isMass":true,
    "sumNum":"10000",
    "state":"1",
    "succNum":"7000",
    "failNum":"2000",
    "pendingNum":"1000"
  }
}
```

