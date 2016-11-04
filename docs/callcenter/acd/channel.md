# 工作通道

<!-- toc -->

TODO: 工作通道是什么？ blabla...

## 新建

### URL
```
POST {BASE_URL}/callcenter/{callcenter_id}/channel
```

### 请求参数列表

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`name`                 | 字符/数字字符串       | √    | 工作通道的名称，应用内唯一
`max_agent`            | `Integer`             | √    | 该工作通道所容纳的最大坐席数量
`max_queue_condition`  | `Integer`             | √    | 该工作通道所容纳的最大排队条件设置数量
`max_queue_task`       | `Integer`             | √    | 该工作通道所容纳的最大排队任务数量

### 返回参数
TODO: 补充

## 删除

### URL
```
DELETE {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}
```

## 修改

### URL
```
POST {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}
```

## 获取列表

### URL
```
GET {BASE_URL}/callcenter/{callcenter_id}/channel
```

## 获取单条记录

### URL
```
GET {BASE_URL}/callcenter/{callcenter_id}/channel/{channel_name}
```
