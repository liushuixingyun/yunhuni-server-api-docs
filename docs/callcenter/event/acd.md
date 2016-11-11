# ACD 排队事件
<!-- toc -->

## 排队状态变化

参数                      | 有效值范围                          | 说明
----------------------    | ----------------------------------- | ----------------------------------------
`event`                   | **callcenter.queue.state_changed**  | 据此字段识别不同事件
`id`                      | ID                                  | 排队任务的ID
`type`                    | 字符串                              | 排队类型
`channel_id`              | ID                                  | 排队通道ID
`previous_state`          | 字符串                              | 上次状态（变化之前的状态）
`latest_state`            | 字符串                              | 最新状态（变化之后的状态）
`condition_id`            | ID                                  | 选中的条件（如果指定Agent，则该参数为空）
`agent_name`              | 坐席名称                            | 选中的坐席
`begin_time`              | 时间戳                              | 排队开始时间
`call_time`               | 时间戳                              | 最近一次排队选中坐席，开始呼叫坐席分机的时间
`talk_time`               | 时间戳                              | 排队选中坐席，呼叫坐席分机成功的时间
`end_time`                | 时间戳                              | 整个排队过程的结束时间
`end_reason`              | 字符串                              | 排队结束原因
`origin_call_id`          | ID                                  | 在IVR引发的排队中，此属性记录IVR呼叫的`ID`。API引发的排队中，此参数为空
`agent_extension_id`      | ID                                  | 坐席分机ID
`agent_call_id`           | ID                                  | 呼叫坐席分机的呼叫ID
`data`                    | 字符串                              | 用户数据

### 排队状态
有：

值              | 说明
--------------- | --------------
`pending`       | 起始状态
`waiting`       | 排队等待中
`calling`       | 选中了坐席，连接坐席分机中
`completed`     | 排队结束。可能时连接坐席分机成功，也可能时排队超时或者失败

![排队状态](../../../images/queue-state.png)

### `type`

值              | 说明
--------------- | --------------
`ivr`           | IVR 引发的排队
`call_agent`    | 呼叫坐席API引发的排队
`fwd_agent`     | 前传到坐席API引发的排队
`xfer_agent`    | 后传到坐席API引发的排队
`invite_agent`  | 邀请坐席API引发的排队

### `end_reason`

值                     | 说明
---------------------- | --------------
`success`              | 排队成功（选定了坐席，且呼叫坐席分机成功）
`timeout`              | 排队超时
`hangup`               | 排队或者呼叫坐席期间排队发起方的呼叫挂断
`cancel`               | 排队或者呼叫坐席期间调用API取消排队
`call_fail`            | 呼叫坐席分机失败
`forward`              | 排队被前传
