# 坐席管理

<!-- toc -->

[yunhuni]: http://yunhuni.com/

坐席的数据结构用类 JSON 形式可表示为：

```js
{
    name: "1001",   // 坐席名称，应用服务指定，应用内唯一
    channel: "channel-01", // 坐席所在工作通道
    num: "1001",  // 坐席工号，用于播报工号
    state: "away/drinking", // 坐席状态
    skills: [ // 坐席所拥有的技能，和技能分数
        {name: "投诉", score: 80, enabled: true},
        {name: "联想笔记本", score: 90, enabled: true}
    ],
    extension: "fj2m90cuildf" // 坐席的分机
}
```

## 登录

不可重复登录

### URL
```
POST {BASE_URL}/callcenter/agent
```

#### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`name`                 | 字符/数字字符串       | √    | 该坐席的唯一标识，应用内必须唯一
`channel`              | 字符串                | √    | 坐席所在 [工作通道](../acd/channel.md) 的 `id`
`num`                  | 数字字符串            |      | 该坐席的工号，如果不填，就无法播报工号
`state`                | 状态字符串            |      | 登录后的初始状态
`skills`               | 技能数组              |      | 登录后的初始技能
`extension`           | 绑定分机的ID              | √    | 登录后初始绑定分机

- `name` 参数：
    一个应用中的坐席`name`，坐席名称必须在应用内唯一，不得超过32字符长度，只能由基本字母、数字、下划线构成

- `channel` 参数：
    座席所属通道的ID

- `num` 参数:
    报工号时使用。

- `state` 参数:
    详见 _状态设置_ 一节。

- `skills` 参数

    属性名        |       数据类型       | 必填 |  说明
    ------------- | -------------------- | ---- | ---------------
    `name`        | `String`             | √    | 技能名称
    `score`       | `int`             |      | 技能分数
    `enabled`     | `Boolean`            |      | 是否启用技能


-  `extension` 参数
    分机的ID。

### 返回参数

TODO: 补充！


## 登录示例

请求:
```http
POST {BASE_URL}/callcenter/agent HTTP/1.1
Content-Type: application/json
Accept-Type: application/json

{
    "name": "1004",
    "channel": "40288ae2587542150158754240b00000",
    "num": "1002",
    "state": "away/drinking",
    "skills": [
        {"name": "投诉", "score": 80, "enabled": true},
        {"name": "建议", "score": 90, "enabled": true}
    ],
    "extension": "40288aca587659820158765c305f0000"
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

## 注销

### URL
```
DELETE {BASE_URL}/callcenter/agent/{agent_name}
```

### 请求参数

参数                   | 有效值范围            | 必填 | 默认值  | 说明
---------------------- | ----------------------| ---- | ------- | ----------------------------------------
`force`                | `true` `false`        |      | `false` | 强行注销

#### `force`
如果坐席的分机处于呼叫中，平台禁止注销。
此时，如果设置该参数为 `true` ，平台会断开坐席分机和平台之间的呼叫，然后注销坐席。

### 返回参数

TODO: 补充！

## 注销示例

请求:
```http
DELETE {BASE_URL}/callcenter/agent/1004?force=true HTTP/1.1
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


## 报到
如果[壹耘平台][yunhuni]长时间收不到坐席的报到，就认为该坐席离线(`offine`)。

## URL
```
GET {BASE_URL}/callcenter/agent/{agent_name}/keepalive
```

### 请求参数
无


## 报到示例

请求:
```http
GET {BASE_URL}/callcenter/agent/1001/keepalive HTTP/1.1
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


## 获取坐席信息

## URL
```
GET {BASE_URL}/callcenter/agent[/{agent_name}]
```

URL 不包含 `{agent_name}` 参数，则获取坐席列表，否则获取具体的某个坐席的信息。

### 请求参数

参数                   | 有效值范围            | 必填 | 默认值  | 说明
---------------------- | ----------------------| ---- | ------- | ----------------------------------------
`pageNo`                | 数字        |   否   | 1 | 当获取多个座席时有效，第几页
`pageSize`                | 小于2000        |   否   | 20 | 当获取多个座席时有效，每一页的记录数

### 返回参数
坐席或者坐席列表

TODO: 补充！


## 获取座席信息示例

请求单个:
```http
GET {BASE_URL}/callcenter/agent/1001 HTTP/1.1
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
    "name": "1001",
    "channel": "40288ae2587542150158754240b00000",
    "num": "1002",
    "state": null,
    "extension": null,
    "skills": [
      {"name": "投诉","score": 80, "enabled": true},
      {"name": "建议","score": 90,"enabled": true}
    ]
  }
}
```


请求多个:
```http
GET {BASE_URL}/callcenter/agent?pageNo=1&pageSize=10 HTTP/1.1
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
        "name": "1003",
        "channel": "40288ae2587542150158754240b00000",
        "num": "1002",
        "state": null,
        "extension": null,
        "skills": [
          {"name": "投诉","score": 80,"enabled": true},
          {"name": "建议", "score": 90,"enabled": true}
        ]
      },
      {
        "name": "1002",
        "channel": "40288ae2587542150158754240b00000",
        "num": "1002",
        "state": null,
        "extension": null,
        "skills": [
          {"name": "投诉","score": 80,"enabled": true},
          {"name": "建议","score": 90,"enabled": true}
        ]
      },
      {
        "name": "1001",
        "channel": "40288ae2587542150158754240b00000",
        "num": "1002",
        "state": null,
        "extension": null,
        "skills": [
          {"name": "投诉","score": 80,"enabled": true},
          {"name": "建议","score": 90,"enabled": true}
        ]
      }
    ]
  }
}
```


## 设置分机

### URL
```
POST {BASE_URL}/callcenter/agent/{agent_name}/extension
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`id`                   | 分机ID                | √    | 分配给座席的分机的ID

> - 坐席必须要一个分机才能正常使用话务功能。

### 返回参数
TODO: 补充！

## 设置分机示例

请求:
```http
POST {BASE_URL}/callcenter/agent/1001/extension HTTP/1.1
Content-Type: application/json
Accept-Type: application/json

{
    "id":"40288aca586222110158622286590000"
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


## 状态设置

### URL
```
POST {BASE_URL}/callcenter/agent/{agent_name}/state
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`state`                | 状态值字符串          | √    | 新的状态

用字符串表述坐席状态。

坐席状态包括基本状态和扩展状态，用类目录格式的字符串表示：

```
<基本状态>[/扩展状态]
```

如：

```
away/shitting
talking/complaint
busy/维修单录入
```

基本状态是固定的，它包括：

名称     | 可扩展 |说明
-------- | ------ |-----------------
none     |        | 正常注销，或者从未登录
offline  |       | 离线（连接异常中断）
online   |        | 在线：已经登录，但是没有设置进一步的状态
idle     |        | 空闲
fetching | √      | 平台正在呼叫该坐席的分机
talking  | √      | 服务中（分机通话中）
busy     | √      | 忙碌
away     | √      | 离开

`busy`和`away`可扩展，扩展部分是满足POSIX文件路径规范的符串，不超过256长度。

- 坐席的状态变为 `talking/*`, `fetching/*`, `offline`, `none` 时无法通过API修改。
- 通过状态修改API只能将坐席状态修改为 `busy/*`, `away/*` 或者 `idle`。
- 坐席登录后，默认的初始状态是`online`，一旦其状态由`online`变为其它非离线状态，就不能再变成`online`。
- 只有处于`idle`状态的坐席才会被平台分配到排队任务。

![坐席状态](../../../images/agent-state.svg)

### 返回参数
TODO: 补充！

## 状态设置示例

请求:
```http
POST {BASE_URL}/callcenter/agent/1001/state HTTP/1.1
Content-Type: application/json
Accept-Type: application/json

{
    "state":"busy/打印文件"
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


## 技能设置

### URL
```
POST {BASE_URL}/callcenter/agent/{agent_name}/skills
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`opts`                 | 技能操作列表          | √    | 技能操作列表

#### `opts` 参数
技能操作列表用于表示如何修改坐席的技能，该列表的元素是 `opts` 技能操作对象，该对象的属性定义是：

属性名        |       数据类型       | 必填 |  说明
------------- | -------------------- | ---- | ---------------
`opt`         | `Integer`            | √    | 操作类型，`1`表示新增或者修改，`2`表示删除，`0`表示删除所有。
`name`        | `String`             | √    | 要操作的技能。当 `opt==1`或`opt==2` 时有效。
`score`       | `Number`             |      | 坐席技能分。仅在 `opt==1` 时有效；如果坐席已经拥有该技能，不填表示不修改，否则分数为0。
`enabled`     | `Boolean`            |      | 坐席是否启用技能。仅在 `opt==1` 时有效；如果坐席已经拥有该技能，不填表示不修改，否则 `enabled==false`。

[壹耘平台][yunhuni]按照顺序执行 `skillopts` 中定义的操作
eg:
“投诉”技能分数调整为95，然后删除“洗衣机”技能，请求内容为

```js
 {
     opts:[
        {opt: 1, name: "投诉", score: 95, enabled: true},
        {opt: 2, name: "洗衣机"},
    ]
}
```

eg:
删除所有技能，请求内容为

```js
 {
     opts:[
        {opt: 0}
    ]
}
```

eg:
禁用“投诉”技能，请求内容为

```js
 {
     opts:[
        {opt: 1, name: "投诉", enabled: false}
    ]
}
```

eg:
清空所有技能，然后新建“投诉”技能，分数为60，请求内容为

```js

 {
     opts:[
        {opt: 0},
        {opt: 1, name: "投诉", score: 60, enabled: true}
    ]
}
```

### 返回参数
TODO: 补充！


## 技能设置示例

请求:
```http
POST {BASE_URL}/callcenter/agent/1001/skills HTTP/1.1
Content-Type: application/json
Accept-Type: application/json

{
    opts:[
        {"opt": 2, "name": "手机"},
        {"opt": 1, "name": "投诉","score":50, "enabled": true}
    ]
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
