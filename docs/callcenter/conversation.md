<!-- toc -->

## 解散交谈

### URL

```
DELETE {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}
```

## 合并

### URL

```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}/merge
```

将目标交谈合并到 URL PATH 中 `{conversation_id}` 指定交谈，目标交谈在合并后解散

参数                   | 有效值范围            | 必填 | 默认值     | 说明
---------------------- | ----------------------| ---- | ---------- | -----------------------------
`conversation_id`      |                       | √    |            | 被合并的目标交谈
`mode`                 | 1~4                   |      | default=1  |

## 坐席直接加入

### URL

```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}/attach
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`agent_name`           | 坐席ID                | √    |
`mode`                 | 1~4                   |      | default=1

* 该坐席必须至少处于一个 `conversation` 中(这样才有坐席连接)
* 加入后，如果 mode 不是 4，则当前mode不是4的conversation状态变为4

`mode`:

值     | 说明
------ | ---------
`1`    | 放音+收音(默认)
`2`    | 收音
`3`    | 放音
`4`    | 无

## 坐席退出

### URL

```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}/dettach
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`agent_name`           | 坐席ID                | √    |
`data`                 |                       |      |

* 退出后，如果 `conversation` 人数少于2，将自动解散
* 退出后，如果坐席所在的 `conversation` 少于1，将自动挂断分机

`mode`:

值     | 说明
------ | ---------
`1`    | 放音+收音(默认)
`2`    | 收音
`3`    | 放音
`4`    | 无


## 坐席邀请加入
按照排队规则呼叫目标坐席，连接后加入交谈。

### URL
```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}/invite_agent
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`enqueue`              | XML 字符串            | √    | 目标坐席选择条件（同排队）
`mode`                 | Integer               |      | 加入后的听/说模式，默认`1`

`mode`:

值     | 说明
------ | ---------
`1`    | 放音+收音(默认)
`2`    | 收音
`3`    | 放音
`4`    | 无

设置为4，就相当于保持

> - 只有空闲的目标坐席才有可能被排队匹配到，也才有可能被邀请加入

## 外线邀请加入
按照排队规则呼叫目标坐席，连接后加入交谈。

### URL

```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}/invite_out
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`to`                   | 电话号码              | √    | 被叫号码
`from`                 | 电话号码              |      | 主叫号码
`max_dial_seconds`     | 正整数                |      | 最大拨号等待时间
`max_answer_seconds`   | 正整数                | √    | 最大通话时间
`backgroud`            | Boolean               |      | 拨打坐席是否采用“背景”模式。默认 `false`
`mode`                 | Integer               |      | 加入后的听/说模式

`mode`:

值     | 说明
------ | ---------
`1`    | 放音+收音(默认)
`2`    | 收音
`3`    | 放音
`4`    | 无

### 获取交谈单条记录

交谈的记录形如：

```js
{
    id: "vm308mjvy3oiu6o3jn45",
    begin_time: "YYYY-MM-DD HH:MI:SS",
    agents:[
        {name: "agent-001", externsion_id: "2c-sdfi80-sigsds", call_id: "fx20mudfsdfsdf", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS"},
        {name: "agent-002", externsion_id: "xf20s9f0w5234234", call_id: "a7ccx93mcjjlee", mode: 2, begin_time: "YYYY-MM-DD HH:MI:SS"},
    ],
    outs: [
        {call_id: "xjm93cetgerjtgowe", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS"},
        {call_id: "c34ico345o34ui503", mode: 1, begin_time: "YYYY-MM-DD HH:MI:SS"},
    ]
}
```

### URL

```
GET {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation/{conversation_id}
```

### 获取交谈列表

### URL

```
GET {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/conversation
```
