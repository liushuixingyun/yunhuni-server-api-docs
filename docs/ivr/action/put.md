# 发码
<!-- toc -->

发送DTMF码

## send_dtmf 节点

```
send_dtmf
```

## 属性
无
    

## 内容
要发送的 DTMF 码串 默认0123456789*#ABCD

## 输出参数
参数            | 说明                   
--------------- | -----------------------
`type`          | 同一个 IVR Response 中，动作节点的标签名称
`error`         | 向 [`<next>`](./next.md) 所定义的 URL 进行请求时，附带此次 IVR 执行错误信息（如果没有错误，则不提供该参数）

## 嵌套
无

## 示例
```xml
<response>
    <send_dtmf>0123456789*#ABCD</send_dtmf>
    <next>http://yourhost/nextstep</next>
</response>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
