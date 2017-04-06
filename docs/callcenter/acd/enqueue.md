# 从 IVR 进入排队
<!-- toc -->

使用 `<enqueue>` [IVR](../../ivr/index.md) 节点，对 IVR 的当前呼叫进行 ACD 排队。

该 IVR 形如：
```xml
<enqueue
        wait_voice="wait.wav"
        ring_mode="1"
        play_num="true"
        pre_num_voice="坐席.wav"
        post_num_voice="为您服务.wav"
        user_data="your data whatever here!"
>
    <route>
        <condition id="condition1"/>
    </route>
</enqueue>
```
或者指定坐席排队:
```xml
<enqueue
        wait_voice="wait.wav"
        ring_mode="1"
        play_num="true"
        pre_num_voice="坐席.wav"
        post_num_voice="为您服务.wav"
        user_data="your data whatever here!"
>
    <route>
        <agent name="2019" priority="11" queue_timeout="60" fetch_timeout="50"></agent>
    </route>
</enqueue>
```
或者指定技能排队:
```xml
<enqueue
        wait_voice="wait.wav"
        ring_mode="1"
        play_num="true"
        pre_num_voice="坐席.wav"
        post_num_voice="为您服务.wav"
        user_data="your data whatever here!"
>
    <route>
        <skill name="售后" priority="11" queue_timeout="60" fetch_timeout="50"></agent>
    </route>
</enqueue>
```

## 简述

- 1. 指定condition排队
        平台根据condition的表达式计算出符合表达式的坐席，从中选取一个坐席。
        如果坐席繁忙将排队直到超时，或者坐席变空闲
- 2. 指定坐席排队
        平台根据坐席name找到坐席，如果坐席繁忙将排队直到超时，或者坐席变空闲
- 3. 指定技能排队
        平台找到拥有该技能的坐席，从中选取一个坐席。
        如果坐席繁忙将排队直到超时，或者坐席变空闲

## `<enqueue>`属性列表

属性名称               | 有效值范围            | 必填 |   默认值     | 说明
---------------------- | --------------------- | ---- | ------------ | ----------------------------
`conversation_level`   | `1`, `2`              |      | `2`          | 该排队成功并建立交谈后，此次交谈的级别。级别`1`无法形成3方通话。（目前只支持`2`模式！）
`conversation_timeout` | 正整数                |      |              | 该排队成功并建立交谈后，此次交谈的最大允许持续时间（秒）。默认`null`表示系统默认最大交谈时间。
`choice`               | 字符串                |      | `"random`    | 选择规则：如果排队时多个满足条件的坐席排序也相同，按照该规则从中选择一个坐席。
`reserve_state`        | 状态字符串            |      | `idle`       | 该排队成功并建立交谈后，被排到的坐席如果退出该交谈后，不处于其它交谈中，则其分机被挂断，状态变成这个值
`fail_overflow`        | `true`, `false`       |      | `false`      | 是否将连接坐席分机失败视作排队溢出。是则按照溢出规则继续排队；否则排队失败退出。
`wait_voice`           | 录音文件名            |      | 空字符串     | 排队时，播放的等待声音文件
`ring_mode`            | 整数 1~5              |      | `1`          | 呼叫坐席分机期间对排队中的通话的放音模式。目前仅支持模式`1`
`ring_voice`           | 录音文件名            |      | 空字符串     | 呼叫坐席分机期间对排队中的通话播放的声音文件
`hold_voice`           | 录音文件名            |      | 空字符串     | 该排队成功并建立交谈后，如果交谈中的活动呼叫只剩下一个，则在交谈中播放这个声音文件
`play_num`             | `true`, `false`       |      | `false`      | 是否在接通坐席分机后播放该坐席的工号
`pre_num_voice`        | 录音文件名            |      | 空字符串     | 播放工号前播放的声音文件
`post_num_voice`       | 录音文件名            |      | 空字符串     | 播放工号后播放的声音文件
`user_data`                 | 任意字符串            |      | 空字符串     | 用户数据，当排队状态发生变化时，平台向用户应用服务发起的事件通知或IVR请求将带有该参数

### `choice`属性

枚举值   | 说明
-------- | -----
`random` | 随机。从排序最大靠前的多个坐席中随机选中一个。
`lru`    | Least Recently Used。从排序最大靠前的多个坐席中随机选中最近最少使用的（最长时间未进行交谈）。

#### `ring_mode`属性

枚举值         | 说明
-------------- | -----
`1`            | 排队等待，以及呼叫目标坐席的分机期间，始终播放`wait_voice`指定的声音文件。此时`ring_voice`参数无效。
`2` (尚不支持) | 对目标坐席的分机发起呼叫时，停止播放`wait_voice`指定的声音文件；开始播放`ring_voice`指定的声音文件；呼叫坐席分机成功或者结束后停止播放。
`3` (尚不支持) | 对目标坐席的分机发起呼叫时，停止播放`wait_voice`指定的声音文件；开始播放`ring_voice`指定的声音文件；收到坐席分机回铃后停止播放，并透传回铃音。
`4` (尚不支持) | 对目标坐席的分机发起呼叫时，继续播放`wait_voice`指定的声音文件；收到目标坐席分机的回铃后，播放`ring_voice`指定的声音文件。
`5` (尚不支持) | 对目标坐席的分机发起呼叫时，继续播放`wait_voice`指定的声音文件，收到坐席分机回铃后停止播放，并透传回铃音。此时`ring_voice`参数无效。

## `<route>`节点
`<route>`是排队条件(`<condition>`)的容器。

`<enqueue>` **必须** 包含 **至少一个** `<route>`节点。

排队时，平台按照`<route>`在 XML 中的顺序，依次使用其中的`<condition>`进行排队。

如果一个`<route>`中所有`<condition>`都排队超时，则使用下一个`<route>`继续排队。这种情况被称为“排队溢出”。

## `<condition>`节点
IVR 使用该节点表明使用哪个 [排队条件](condition.md) ，这些条件需要预先进行设置。

这个节点的父节点必须是`<route>`

### `<condition>`属性列表

属性名称               | 有效值范围            | 必填 |   默认值     | 说明
---------------------- | --------------------- | ---- | ------------ | ----------------------------
`id`                   | 排队条件ID            | √    |              |

## `<agent>`节点
用于直接定位到坐席。
其父亲节点必须是`<route>`

属性名称               | 有效值范围            | 必填 |   默认值     | 说明
---------------------- | --------------------- | ---- | ------------ | ----------------------------
`name`                 | 坐席名称              | √    |              |
`priority`             | 整数                  |      | `0`          | 排队优先级
`queue_timeout`        | 正整数                |      | `null`       | 该条件的排队等待超时时间。默认`null`表示一直等待直到呼叫结束。`0`表示找不到坐席就立即超时。
`fetch_timeout`        | 正整数                |      | `50`       | 该条件的坐席分机接听超时时间。默认50s。

## `<skill>`节点
用于通过技能找坐席。
其父亲节点必须是`<route>`

属性名称               | 有效值范围            | 必填 |   默认值     | 说明
---------------------- | --------------------- | ---- | ------------ | ----------------------------
`name`                 | 技能名称              | √    |              |
`priority`             | 整数                  |      | `0`          | 排队优先级
`queue_timeout`        | 正整数                |      | `null`       | 该条件的排队等待超时时间。默认`null`表示一直等待直到呼叫结束。`0`表示找不到坐席就立即超时。
`fetch_timeout`        | 正整数                |      | `50`       | 该条件的坐席分机接听超时时间。默认50s。

----

## 注意：

> - 一个 `<enqueue>` 节点只能且必须使用一个，不可出现多个！
> - `<route>` 内只能有一个 `<condition>` 或者一个 `<agent>` 或者一个 `<skill>`，不可混合使用
