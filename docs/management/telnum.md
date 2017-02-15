
## 号码查询
    分页查询租户拥有的平台号码。

### 请求URL

```
GET ${BASE_URL}/management/telnum
```

### 请求参数列表

| 参数                   | 有效值范围               | 说明                                       |
| ---------------------- | ------------------------ | ---------------------------------------- |
| `pageNo`              | *正整数*                   |页数，默认1|
| `pageSize`            | *1-1000*                   |每页数据条数，默认10|


### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | JSON 对象   | 返回数据对象，参见[data对象属性列表](#data对象属性列表)|

### 参数详解

#### data对象属性列表

| 属性       | 有效值范围        | 说明       |
| -------- | ------------ | -------- |
| `pageSize` | 整数 | 每页条数 |
| `startIndex` | 整数 | 当前页第一条数据的索引 |
| `totalCount` | 整数 | 总条数 |
| `totalPageCount` | 整数 | 总页数 |
| `currentPageNo` | 整数 | 当前页 |
| `result` | Array | 列表数据 |
| `result.id` | UUID | 号码资源id |
| `result.appId` | UUID | 绑定的应用id，为空代表未被应用绑定 |
| `result.subaccount` | UUID | 绑定的子账号id，为空代表未被子账号绑定 |
| `result.telnum` | String | 号码 |



#### 示例

请求:
```http
GET {BASE_URL}/management/telnum?used=1&pageNo=1&pageSize=10 HTTP/1.1
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
  "data": {
        "pageSize": 10,
        "startIndex": 1,
        "totalCount": 1,
        "totalPageCount": 1,
        "currentPageNo": 1,
        "result": [
          {
            "id": "40246efgs45huyhjgh5fdf686566dfg3",
            "appId": "8a2bc67258cdafa80158cdbc57180000",
            "subaccount": "40288aca58e24b7f0158e24bb0750018",
            "telnum": "8675522730044"
          }
        ]
      }
    }
}
```


## 号码绑定子账号
    将号码资源绑定到子账号，号码只能被该子账号使用

### 请求URL

```
POST ${BASE_URL}/management/telnum/{id}/subaccount
```

### 请求参数列表

| 参数                   | 有效值范围               | 说明                                       |
| ---------------------- | ------------------------ | ---------------------------------------- |
| `subaccountId`         | UUID                    |子账号Id,不能为空|


### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | boolean   | 绑定成功true,失败false|


#### 示例

请求:
```http
POST ${BASE_URL}/management/telnum/40246efgs45huyhjgh5fdf686566dfg3/subaccount HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx
{
   "subaccountId":"40288aca58e24b7f0158e24bb0750018"
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
  "data": true
}
```

## 号码解绑子账号
    将号码资源绑定到子账号，号码只能被该子账号使用

### 请求URL

```
DELETE ${BASE_URL}/management/telnum/{id}/subaccount
```

### 请求参数列表

| 参数                   | 有效值范围               | 说明                                       |
| ---------------------- | ------------------------ | ---------------------------------------- |
| `subaccountId`         | UUID                    |子账号Id,不能为空|


### 响应参数列表

| 参数     | 有效值范围   | 说明                            |
| ------ | ------- | ----------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                    |
| `msg`  | 文本        | 返回情况说明                        |
| `data` | boolean   | 绑定成功true,失败false|


#### 示例

请求:
```http
DELETE ${BASE_URL}/management/telnum/40246efgs45huyhjgh5fdf686566dfg3/bindSubaccount?subaccountId=40288aca58e24b7f0158e24bb0750018 HTTP/1.1
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
  "data": true
}
```
