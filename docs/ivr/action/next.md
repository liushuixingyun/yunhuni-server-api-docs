# 后续 IVR 步骤
<!-- toc -->

## next 节点

```
next
```

除了 ['<hangup>'](./hangup.md) 之外，所有的 IVR 动作都必须和一个 `<next>` 组合使用。
平台在执行完一个 IVR 动作之后，就会向 `<next>` 的内容部分所定义的 URL 地址发送一次 HTTP 请求。
在这次请求中，包括了动作节点的输出参数和 `<next>` 的 `tag` 值。

只有顶级动作节点才有输出参数！

## 内容

HTTP URL(绝对地址)

## 属性

参数                  | 说明                                     
--------------------- | -----------------------------------------
`tag`                 | 用户自定义 URL tag 参数的值

## 输出参数
`<next>`会输出其所在的 IVR Response 中的实际动作的输出参数。
输出参数会以 Query String 的形式追加到`<next>`的内容(URL)中。

参数                  | 说明                                     
--------------------- | -----------------------------------------
`type`                | 同一个 IVR Response 中，动作节点的标签名称
`error`               | 如果 IVR 执行错误，将输出错误描述；如果没有错误，平台不会提供该参数


## 嵌套

除了 ['<hangup>'](./hangup.md)，所有的 IVR 动作都必须和一个 `<next>` 标签组合使用。

## 例子

```xml
<response>
    <get valid_keys="0123456789#" finish_keys="#">
      <playlist>
        <play>please.wav</play>
        <play>input.wav</play>
      </playlist>
    </get>
    <next tag="mytag">http://yourhost/nextstep</next>
</response>
```

在用户输入 `123#` [`<get>`](./get.md) 接收按键结束后，平台将发送 HTTP GET 请求到：

```url
http://yourhost/nextstep?tag=mytag&keys=123
```
