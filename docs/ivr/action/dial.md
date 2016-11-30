# 拨号(beta)
<!-- toc -->

## dial 节点

```
dial
```

## 属性

参数                  | 说明                                     
--------------------- | -----------------------------------------
`from`                | 主叫号码
`max_call_duration`   | 最大接通时间（秒）
`max_dial_duration`   | 最大拨号等待时间（秒）
`dial_voice_stop_cond`| 自定义拨号音停止播放条件。0：振铃停止；1：接听或者挂断停止。

## 内容
被叫号码

## 输出参数
参数                  | 说明                                     
--------------------- | -----------------------------------------
`type`                | 同一个 IVR Response 中，动作节点的标签名称
`error`               | 如果 IVR 执行错误，将输出错误描述；如果没有错误，平台不会提供该参数


## 嵌套

[`<play>`](./play.md),  [`<connect>`](./connect.md) 

**NTOE**

> 最多只能嵌套一个 [`<play>`](./play.md) 节点，用于播放拨号提示音。
> 嵌套在 [`<dial>`](./dial.md) 中的 [`<play>`](./play.md) 所指定的录音文件将在拨号时循环播放，其重复播放等参数无效。
> 
> 如果不嵌套 [`<dial>`](./dial.md) ，拨号时，原呼叫会听到被叫的原始拨号音。

**ATTENTION** 目前，必须和 [`<connect>`](./connect.md) 配合使用！

## 示例

```xml
<response>
  <dial from="4001546646464">
    <number>415-123-4567</number>
    <play>ringtone.wav</play>
    <connect/>
   </dial>
   <next>http://yourhost/nextstep</next>
</response>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
