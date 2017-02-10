# 交谈

<!-- toc -->

## 属性
交谈的属性有：

参数                      | 有效值范围                                | 说明
----------------------    | ----------------------------------------- | ----------------------------------------
`id`                      | ID                                        | 交谈 ID
`type`                    | ID                                        | 交谈的产生类型
`state`                   | 字符串                                    | 状态
`channel_id`              | ID                                        | 如果交谈由排队产生，该属性记录排队的通道ID；否则为空
`queue_id`                | ID                                        | 如果交谈由排队产生，该属性记录排队的ID；否则为空
`condition_id`            | ID                                        | 如果交谈由排队产生，该属性记录所满足的排队条件的ID；否则为空
`begin_time`              | 时间戳                                    | 排队开始时间
`end_time`                | 时间戳                                    | 整个交谈过程的结束时间
`end_reason`              | 字符串                                    | 结束原因
`agent_call_id`           | ID                                        | 如果交谈由坐席外呼产生，该属性坐席呼叫的ID；否则为空
`members`                  | 列表                                      | 交谈成员

用类 JSON 表示形如：

```js
{
    id: "vm308mjvy3oiu6o3jn45",
    type: "call_out",
    state: "running",
    channel: "cm03ogejdrljgdjgljd",
    end_reason: null,
    queue_id: null,
    begin_time: 147771534568,
    end_time: null,
    members:[
        {name: "agent-001", extension_id: "2c-sdfi80-sigsds", call_id: "fx20mudfsdfsdf", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS", end_time: null},
        {name: "agent-002", extension_id: "xf20s9f0w5234234", call_id: "a7ccx93mcjjlee", mode: 2, begin_time: "YYYY-MM-DD HH:MI:SS", end_time: null},
        {call_id: "xjm93cetgerjtgowe", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS", end_time: null}
    ]
}
```

### `type`

值                    | 说明
--------------------- | --------------
`queue`               | 排队产生
`call_out`            | 坐席外呼产生
`call_agent`          | 坐席呼叫其它坐席产生

### `state`

值              | 说明
--------------- | --------------
`running`       | 正在进行
`completed`     | 已经结束

## 解散交谈

### URL

```
DELETE {BASE_URL}/callcenter/conversation/{conversation_id}
```



## 设置坐席听说模式
设置交谈中，某个呼叫的听/说模式(Listen/Speak Mode) ，仅仅针对外线呼叫。

### URL

```
POST {BASE_URL}/callcenter/conversation/{conversation_id}/agent/{name}/lsm
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
GET {BASE_URL}/callcenter/conversation
```
