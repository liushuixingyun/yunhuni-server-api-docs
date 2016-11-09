<!-- toc -->

交谈的记录形如：

```js
{
    id: "vm308mjvy3oiu6o3jn45",
    channel: "cm03ogejdrljgdjgljd",
    begin_time: "YYYY-MM-DD HH:MI:SS",
    agents:[
        {name: "agent-001", extension_id: "2c-sdfi80-sigsds", call_id: "fx20mudfsdfsdf", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS", end_time: null},
        {name: "agent-002", extension_id: "xf20s9f0w5234234", call_id: "a7ccx93mcjjlee", mode: 2, begin_time: "YYYY-MM-DD HH:MI:SS", end_time: null},
    ],
    outs: [
        {call_id: "xjm93cetgerjtgowe", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS", end_time: null}
    ]
}
```

## 解散交谈

### URL

```
DELETE {BASE_URL}/callcenter/conversation/{conversation_id}
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`agent_name`           | 坐席ID                | √    |
`data`                 |                       |      |

* 退出后，如果 `conversation` 人数少于2，将自动解散
* 退出后，如果坐席所在的 `conversation` 少于1，将自动挂断分机

## 设置呼叫听说模式
设置交谈中，某个呼叫的听/说模式(Listen/Speak Mode) ，仅仅针对外线呼叫。

### URL

```
POST {BASE_URL}/callcenter/conversation/{conversation_id}/call/{call_id}/lsm
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`mode`                 | 1~4                   | √    | 

`mode`:

值     | 说明
------ | ---------
`1`    | 且听且说(默认)
`2`    | 仅听
`3`    | 仅说
`4`    | 不听不说

## 邀请坐席加入
按照排队规则呼叫目标坐席，连接后加入交谈。

### URL
```
POST {BASE_URL}/callcenter/conversation/{conversation_id}/invite_agent
```

### 请求参数

参数                   | 有效值范围            | 必填 | 默认值 | 说明
---------------------- | ----------------------| ---- | ------ | --------------------------------
`enqueue`              | XML 字符串            | √    |        | 目标坐席选择条件（同排队）
`mode`                 | Integer               |      | `1`    | 加入后的听/说模式，默认`1`

`mode`:

值     | 说明
------ | ---------
`1`    | 且听且说(默认)
`2`    | 仅听
`3`    | 仅说
`4`    | 不听不说

设置为4，就相当于保持

> - 只有空闲的目标坐席才有可能被排队匹配到，也才有可能被邀请加入

## 邀请外线加入
按照排队规则呼叫目标坐席，连接后加入交谈。

### URL

```
POST {BASE_URL}/callcenter/conversation/{conversation_id}/invite_out
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`to`                   | 电话号码              | √    | 被叫号码
`from`                 | 电话号码              |      | 主叫号码
`max_dial_seconds`     | 正整数                |      | 最大拨号等待时间
`max_answer_seconds`   | 正整数                | √    | 最大通话时间
`mode`                 | Integer               |      | 加入后的听/说模式

`mode`:

值     | 说明
------ | ---------
`1`    | 且听且说(默认)
`2`    | 仅听
`3`    | 仅说
`4`    | 不听不说

## 获取交谈单条记录

### URL

```
GET {BASE_URL}/callcenter/conversation/{conversation_id}
```

## 获取交谈列表

### URL

```
GET {BASE_URL}/callcenter/channel/{channel_id}/conversation
```
