# 分机管理接口
<!-- toc -->

## 新建分机

### URL

```
POST {BASE_URL}/callcenter/extension
```

### 请求参数

参数                  | 有效值范围            | 必填   | 说明
--------------------- | --------------------- | ------ | ----------------------------------------
`type`                | 整数，分机类型枚举值  | √      | 分机类型
`user`                | 6~12字母数字位字符串  |        | SIP 注册用户名，仅用于 `type==1`的情况
`password`            | 6~12字母数字位字符串  |        | SIP 注册用密码，仅用于 `type==1`的情况
`ipaddr`              | `<ip>[:port]`         |        | SIP 网关IP地址与端口，默认5060，仅用于 `type==2`的情况
`telnum`              | 电话号码              |        | 仅用于 `type==3` 的情况

#### `type`参数
分机类型

 枚举值 | 说明
------- | --------------
 `1`    | SIP 终端。如IP电话、软电话。
 `2`    | SIP 网关。
 `3`    | 电话。普通电话，如手机、固话。

!!! warning
  目前仅仅支持 `1`

### 回复参数

参数     | 有效值范围   | 说明                           
-------- | ------------ | -----------------------------
`code`   | 数字文本     | 状态码，全0表示正确
`msg`    | 文本         | 返回情况说明
`data`   | JSON 对象    | 返回数据对象，参见[data对象属性列表](#data对象属性列表)

#### data对象属性列表

属性     | 有效值范围      | 说明
-------- | --------------- | --------
`id`     | UUID HEX 字符串 | 新建的分机的 ID


## 新建分机示例

请求:
```http
POST {BASE_URL}/新建分机 HTTP/1.1
Content-Type: application/json
Accept-Type: application/json

{
    "user":"hahaha2345637",
    "password":"123456",
    "type":1
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
  "data": "40288aca5886052a0158863f63d60000"
}
```


## 删除分机

### 请求

#### URL

```
DELETE {BASE_URL}/callcenter/extension/{extension_id}
```

#### 请求参数列表
无
### 回复

#### 回复参数列表

参数     | 有效值范围   | 说明
-------- | ------------ | -----------------------------
`code`   | 数字文本     | 状态码，全0表示正确
`msg`    | 文本         | 返回情况说明
`data`   | JSON 对象    | `null`


## 删除分机示例

请求:
```http
DELETE {BASE_URL}/callcenter/extension/40288aca5886052a0158863f63d60000 HTTP/1.1
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


无

## 列出分机

### 请求

#### URL

```
GET {BASE_URL}/callcenter/extension[/{extension_id}]
```

#### 请求参数列表

参数                   | 有效值范围            | 必填 | 默认值  | 说明
---------------------- | ----------------------| ---- | ------- | ----------------------------------------
`pageNo`                | 有效页数        |   否   | 1 | 当获取多个时有效，第几页
`pageSize`                | 小于2000        |   否   | 20 | 当获取多个时有效，每一页的记录数


### 回复

#### 回复参数列表

 参数     | 有效值范围   | 说明
--------- | ------------ | -----------------------------
`code`    | 数字文本     | 状态码，全0表示正确
`msg`     | 文本         | 返回情况说明
`data`    | 分机数据或分页数据    | 见示例和参数详解

#### 参数详解

##### 分机元素属性列表

参数                  | 有效值范围            | 说明
--------------------- | --------------------- | ----------------------------------------
`type`                | 整数，分机类型枚举值  | 分机类型
`user`                | 6~12字母数字位字符串  | SIP 注册用户名，仅用于 `type==1`的情况
`password`            | 6~12字母数字位字符串  | SIP 注册用密码，仅用于 `type==1`的情况
`ipaddr`              | `<ip>[:port]`         | SIP 网关IP地址与端口，默认5060，仅用于 `type==2`的情况
`telnum`              | 电话号码              | 仅用于 `type==3` 的情况


请求单个:
```http
GET {BASE_URL}/callcenter/extension/40288aca586222110158622286590000 HTTP/1.1
```

响应单个:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
  "code": "000000",
  "msg": "请求成功",
  "data": {
    "id": "40288aca586222110158622286590000",
    "type": "1",
    "user": "hahaha",
    "password": "123456",
    "ipaddr": null,
    "telenum": null
  }
}
```

请求多个:
```http
GET {BASE_URL}/callcenter/extension?pageNo=1&pageSize=10 HTTP/1.1
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
    "totalCount": 8, //总记录数
    "totalPageCount": 1, //总页数
    "currentPageNo": 1, //当前页数
    "result": [
          {"id": "40288aca586222110158622286590000","type": "1","user": "hahaha","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c56d30002","type": "1","user": "hahaha23","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c4aa60001","type": "1","user": "hahaha2","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c305f0000","type": "1","user": "hahaha1","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c64e80003","type": "1","user": "hahaha234","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c70010004","type": "1","user": "hahaha2345","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c7b280005","type": "1","user": "hahaha23456","password": "123456","ipaddr": null,"telenum": null},
          {"id": "40288aca587659820158765c83df0006","type": "1","user": "hahaha234567","password": "123456","ipaddr": null,"telenum": null}
        ]
  }
}
```
