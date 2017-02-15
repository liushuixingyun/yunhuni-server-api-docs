# 事件回调
<!-- toc -->

当 [oneyun.com](http://oneyun.com/) 上的实时通信过程的状态发生变化时，[oneyun.com](http://oneyun.com/) 将向一个URL发送HTTP请求，并在请求中附带相关数据。
这一过程被称作事件回调。

## 回调URL

该URL由用户自定义，来源于用户调用的应用/子账号的`回调URL`。用户在(创建应用或者修改应用信息)/(创建子账号或者修改子账号信息)时填写/修改，填写/修改时需填写完整地址，如：

```html
http://your-host/your/path?param=event
```

本文的 API URL 说明省略基础部分，在代码例子中，用${NOTIFY_URL} 表示此回调URL。

## 请求参数

以 `java` 语言为例，请求参数将封装成一个Map对象，并转换成`JSON`格式的字符串，携带在请求body中，并设置编码为`UTF-8`，其实现代码的片段是：

{% codetabs name="java", type="java" -%}
HttpPost.setEntity(new StringEntity(payload, Charset.forName("UTF-8")));
{%- endcodetabs %}

用户可解析得到回调的参数。具体回调返回参数请参考具体回调。

## 失败重试

当我们向用户指定回调URL，发送事件请求时，如果请求失败(未能收到用户的`200 OK`回复)，则会重复3次请求，如果3次都失败，则会放弃该次请求。
