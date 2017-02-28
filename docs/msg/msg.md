
## 短信

### 模板短信单发
#### 请求URL

```
POST ${BASE_URL}/msg/sms/send
```

### 请求参数列表

| 参数                   | 有效值范围    |    是否必填       | 说明                                       |
| ---------------------- | --------------|---------- | ---------------------------------------- |
| `destPhone`          | 字符串           |  是   | 目标号码（必须为移动号码）|
| `tempId`              | 字符串          |   是  | 模板编号 |
| `tempArgs`              | 字符串         |    否    |模板中对应的参数值(中文请使用utf-8编码)，多个参数值以分号间隔。 参数值顺序与模板中变量顺序对应。  参数值个数必须与模板中变量个数一致，否则返回失败。|

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | null |

#### 示例

请求:
```http
POST ${BASE_URL}/msg/sms/send HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "destPhone":"13750012158",
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
  "data": null
}
```

### 模板短信群发
#### 请求URL

```
POST ${BASE_URL}/msg/sms/add/task
```

### 请求参数列表

| 参数                   | 有效值范围    |    是否必填       | 说明                                       |
| ---------------------- | --------------|---------- | ---------------------------------------- |
| `taskName`          | 字符串           |  是   | 群发任务名称|
| `templateId`         | 字符串          |   是  | 模板编号 |
| `args`              | 字符串          |    否    |模板中对应的参数值(中文请使用utf-8编码)，多个参数值以分号间隔。 参数值顺序与模板中变量顺序对应。  参数值个数必须与模板中变量个数一致，否则返回失败。|
| `mobiles`            | 字符串         |    是    | 发送号码，多个以逗号分割，最大数量为10000个|
| `sendTime`            | 字符串         |    是    | 发送时间，格式为“yyyyMMddHHmmss“（时间提交规则与群发任务功能一致，如果时间小于当前时间10分钟，则自动设置为当前时间+10分钟）， 发送时间小于当前时间+7天，大于当前时间+10分钟|

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | null |

#### 示例

请求:
```http
POST ${BASE_URL}/msg/sms/add/task HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "taskName":"测试消息",
   "templateId":"100001",
   "args": "参数值1;参数值2",
   "mobiles": "13750012158;13750012159",
   "sendTime": "20170212102545"
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
  "data": null
}
```