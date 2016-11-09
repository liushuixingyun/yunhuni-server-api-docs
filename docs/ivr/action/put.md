# 发送码（尚未开放）

## send_dtmf 节点

```
send_dtmf
```

## 属性
    无
    
## 内容
要发送的 DTMF 码串 默认0123456789*#ABCD

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
