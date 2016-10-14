# IVR-尚未开放，敬请期待

IVR 即交互式声音应答。
[yunhuni.com](http://yunhuni.com/) 的 IVR 接口是回调接口，也就是说，用户需要提供一个 HTTP URL 来接受来自 [yunhuni.com](http://yunhuni.com/) 的 IVR 回调请求，该 URL 在用户中心设置。
在收到 IVR 的HTTP回调请求后，用户的应用服务要返回一段 XML，IVR动作，如放音、录音等在XML中定义。

