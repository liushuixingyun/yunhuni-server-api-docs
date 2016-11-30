# 后续 IVR 步骤
<!-- toc -->

## next 节点

```
next
```

除了 ['<hangup>'](./hangup.md) 之外，所有的 IVR 动作都必须和一个 `<next>` 组合使用。
平台在执行完一个 IVR 动作之后，就会向 `<next>` 的内容部分所定义的 URL 地址发送一次 HTTP 请求。
在这次请求中，包括了动作节点的输出参数和 `<next>` 的 `tag` 值。

## 内容

HTTP URL(绝对地址)

## 属性

参数                  | 说明                                     
--------------------- | -----------------------------------------
`tag`                 | URL tag 参数的值

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
