# 排队条件

<!-- toc -->

TODO: 排队条件是什么？ blabla...

## 新建

### URL
```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/condition
```

### 请求参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`name`                 | 字符/数字字符串       | √    | 排队条件的名称，工作通道内唯一
`where`                | 条件选择表达式        | √    |
`sort`                 | 排序表达式            |      |
`priority`             | `Integer`             |      | 数值大的优先级高。默认值是 `0`
`timeout`              | 正整数                |      | 该条件的排队等待+坐席分机接听的总超时时间,不填表示超时值是无穷大
`queue_timeout`        | 正整数                |      | 该条件的排队等待超时时间,不填表示超时值是无穷大
`fetch_timeout`        | 正整数                |      | 该条件的坐席分机接听超时时间,不填表示超时值是无穷大

#### where 表达式
该参数应提供一条表达式，表达式的结果应能够转换为布尔型。

平台针对每一个坐席，用该表达式进行计算，如果计算结果为真，则表明该坐席符合此排队条件。

其内置的变量有：

- `skills`: 坐席的技能列表

```py
skills['技能名称']
```

将返回技能的分数，如果技能不存在，返回 `0`。

eg:

要求拥有“投诉”技能
```py
'投诉' in skills
```

要求拥有“投诉”技能和“手机”技能，且“手机”技能分数大于60
```py
'投诉' in skills and skills['手机'] > 60.0
```

要求拥有“投诉”技能，且技能分数大于75；或者“投诉”技能技能分数小于75，但是大于等于60，且拥有“手机”技能。
```py
skills['投诉'] > 75.0 or (skills['投诉'] > 60.0 and '手机' in skills)
```

#### sort 表达式
该参数应提供一条表达式，表达式的结果应能够转换为数值类型。

平台针对每一个坐席，用该表达式进行计算，并按照结果值的大小反序排列，排名高的坐席被优先选中。

其内置的变量有：

- `skills`: 坐席的技能列表。参见 [where 表达式](#where-表达式)

eg:

按坐席的“投诉”技能分数排序
```py
skills['投诉']
```

按坐席的“投诉”技能和“手机”技能的平均分排序
```py
(skills['投诉'] + skills['手机']) / 2.0
```

按坐席的“投诉”技能和“手机”技能的加权平均分排序，权值分别是 40% 和 60%
```py
(skills['投诉'] * 0.4 + skills['手机'] * 0.6) / 2.0
```

#### 超时参数
`timeout` `queue_timeout` `fetch_timeout` 三项中：

- 如果 `timeout` 不为空，排队等待和坐席分机接听超时之和不可大于它，无论这两个参数值时多少
- `queue_timeout` 过大时，平台可能会在这个时间到达之前就呼叫超时失败
- 即使超时值是无穷大，用户等待不耐烦也会挂断通话

## 删除

### URL
```
DELETE {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/condition/{condition_name}
```

## 修改

### URL
```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/condition/{condition_name}
```

## 获取列表

### URL
```
GET {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/condition
```

## 获取单条记录

### URL
```
GET {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}/condition/{condition_name}
```
