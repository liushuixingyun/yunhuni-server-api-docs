
## 模板管理

### 添加模板
#### 请求URL

```
POST ${BASE_URL}/msg/template
```

### 请求参数列表

| 参数                   | 有效值范围    |    是否必填       | 说明                                       |
| ---------------------- | --------------|---------- | ---------------------------------------- |
| `name`              | 字符串          |   是 | 名称 |
| `type`              | 字符串  |   否 | 类型（目前有两个有效值：msg_sms、msg_ussd）不填默认为 msg_sms|
| `content`          | 字符串           |  是   | 模板内容  注意：实际发送内容，中文长度不超过62个字（包含标点符号）<br /> 1.无参数模板示例：<br /> 天猫双11全球狂欢节，全球好货不只5折。亿万优惠券10点准时开抢，现在打开淘宝或天猫客户端，开始抢红包啦！<br />2.带参数模板示例：<br />【支付宝】你的支付宝发生#*#元的交易，校验码：#*#打死都不能告诉别人哦！唯一热线95188 <br />1、变量用#*#代替 <br /> 2、内容+变量不能超过62字符|
| `remark`              | 字符串          |   否  | 备注 |

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据对象，参见[data对象属性列表](#data对象属性列表) |

### 参数详解

#### data对象属性列表

| 属性       | 有效值范围        | 说明       |
| -------- | ------------ | -------- |
| `name` | 字符串  | 名称 |
| `type` | 字符串  | 类型 |
| `templateId` | 字符串  | 模板ID |
| `content` | 字符串 | 模板内容 |
| `status` | int | 状态 |
| `remark` | 字符串 | 备注 |

#### 示例

请求:
```http
POST ${BASE_URL}/msg/template HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "name":"双11打折",
   "type":"msg_sms",
   "content":"天猫双11全球狂欢节，全球好货不只5折。",
   "remark":"双11模板"
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
              "name":"双11打折",
              "type":"msg_sms",
              "templateId":"10001",
              "content":"天猫双11全球狂欢节，全球好货不只5折。",
              "status":1,
              "remark":"双11模板"
           }
}
```


### 修改模板
#### 请求URL

```
POST ${BASE_URL}/msg/template/{templateId}
```

### 请求参数列表

| 参数                   | 有效值范围    |    是否必填       | 说明                                       |
| ---------------------- | --------------|---------- | ---------------------------------------- |
| `name`              | 字符串          |   是 | 名称 |
| `type`              | 字符串  |   否 | 类型（目前有两个有效值：msg_sms、msg_ussd）不填默认为 msg_sms|
| `content`          | 字符串           |  是   | 模板内容  注意：实际发送内容，中文长度不超过62个字（包含标点符号）<br /> 1.无参数模板示例：<br /> 天猫双11全球狂欢节，全球好货不只5折。亿万优惠券10点准时开抢，现在打开淘宝或天猫客户端，开始抢红包啦！<br />2.带参数模板示例：<br />【支付宝】你的支付宝发生#*#元的交易，校验码：#*#打死都不能告诉别人哦！唯一热线95188 <br />1、变量用#*#代替 <br /> 2、内容+变量不能超过62字符|
| `remark`              | 字符串          |   否  | 备注 |

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据对象，参见[data对象属性列表](#data对象属性列表) |


#### 示例

请求:
```http
POST ${BASE_URL}/msg/template/100001 HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "name":"双11打折",
   "type":"msg_sms",
   "content":"天猫双11全球狂欢节，全球好货不只5折。",
   "remark":"双11模板"
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
              "name":"双11打折",
              "type":"msg_sms",
              "templateId":"10001",
              "content":"天猫双11全球狂欢节，全球好货不只5折。",
              "status":1,
              "remark":"双11模板"
           }
}
```

### 删除模板
#### 请求URL

```
DELETE ${BASE_URL}/msg/template/{templateId}
```

### 请求参数列表

无

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | null   | 无 |

### 参数详解

#### 示例

请求:
```http
DELETE ${BASE_URL}/msg/template/100001 HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

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


### 查询模板

#### 请求URL

```
GET ${BASE_URL}/msg/template[/{templateId}]
```
URL 不包含 `{templateId}` 参数，则获取模板列表，否则获取具体的某个模板的信息。


### 请求参数

参数                   | 有效值范围            | 必填 | 默认值  | 说明
---------------------- | ----------------------| ---- | ------- | ----------------------------------------
`pageNo`                | 数字        |   否   | 1 | 当获取模板列表时有效，第几页
`pageSize`                | 小于1000        |   否   | 20 | 当获取模板列表时有效，每一页的记录数（上限1000）

### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据(或分页数据)对象，参见[data对象属性列表](#data对象属性列表) |

#### 示例

请求单个:
```http
GET ${BASE_URL}/msg/template/10001 HTTP/1.1
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
              "name":"双11打折",
              "type":"msg_sms",
              "templateId":"10001",
              "content":"天猫双11全球狂欢节，全球好货不只5折。",
              "status":1,
              "remark":"双11模板"
           }
}
```


请求多个:
```http
GET ${BASE_URL}/msg/template?pageNo=1&pageSize=10 HTTP/1.1
```

响应多个:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "pageSize": 10, //每一页的记录数
    "startIndex": 1, //从第几条开始
    "totalCount": 3, //总记录数
    "totalPageCount": 1, //总页数
    "currentPageNo": 1, //当前页数
    "result": [
      {
        "name":"双11打折",
        "type":"msg_sms",
        "templateId":"10002",
        "content":"天猫双11全球狂欢节，全球好货不只5折。",
        "status":1,
        "remark":"双11模板1"
      },
      {
         "name":"双11打折",
         "type":"msg_sms",
         "templateId":"10003",
         "content":"天猫双11全球狂欢节，全球好货不只6折。",
         "status":1,
         "remark":"双11模板2"
      },
      {
        "name":"双11打折",
        "type":"msg_sms",
        "templateId":"10004",
        "content":"天猫双11全球狂欢节，全球好货不只7折。",
        "status":1,
        "remark":"双11模板3"
      }
    ]
  }
}
```
