# IVR

IVR 即交互式声音应答。
[oneyun.com](http://oneyun.com/) 的 IVR 接口是回调接口，也就是说，用户需要提供一个 HTTP URL 来接受来自 [oneyun.com](http://oneyun.com/) 的 IVR 回调请求，该 URL 在用户中心设置。
在收到 IVR 的HTTP回调请求后，用户的应用服务要返回一段 XML，IVR动作，如放音、录音等在XML中定义。

除了 ['<hangup>'](./hangup.md) 之外，所有的 IVR 动作都必须和一个 `<next>` 组合使用。
平台在执行完一个 IVR 动作之后，就会向 `<next>` 的内容部分所定义的 URL 地址发送一次 HTTP 请求。
在这次请求中，包括了动作节点的输出参数和 `<next>` 的 `tag` 值。
