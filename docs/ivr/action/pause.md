# 暂停
<!-- toc -->

暂停IVR，直到超时。

## pause 节点
```
pause
```

## 属性
参数            | 说明                   
--------------- | -----------------------
`duration`       | 暂停的时间（秒）

## 内容
无

## 输出参数
参数            | 说明                   
--------------- | -----------------------
`type`          | 同一个 IVR Response 中，动作节点的标签名称
`error`         | 向 [`<next>`](./next.md) 所定义的 URL 进行请求时，附带此次 IVR 执行错误信息（如果没有错误，则不提供该参数）

## 嵌套
不可嵌套

## 示例

```xml
<response>
    <pause duration="5"></pause>
    <next>http://xxx.com/xxx</next>
</response>
```    

