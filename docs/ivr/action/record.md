# 录音
<!-- toc -->

## 节点

```
record
```

## 属性

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `max_duration`        | 最长录音时限（秒）                        |
| `beeping`             | 是否在录音之前播放"嘀"的一声              |
| `finish_keys`         | 中断码                                    |

## 内容
无

## 输出参数
参数            | 说明                   
--------------- | -----------------------
`type`          | 同一个 IVR Response 中，动作节点的标签名称
`error`         | 向 [`<next>`](./next.md) 所定义的 URL 进行请求时，附带此次 IVR 执行错误信息（如果没有错误，则不提供该参数）
`record_id`     | 录音 ID

## 嵌套
无
   
## 示例

```xml
<response>
    <record finish_keys="0123456789*#">
      <max_duration>30</max_duration>
      <beeping>true</beeping>
    </record>
     <next>http://yourhost/nextstep</next>
</response>
```


## 事件

见 [IVR 事件](../evt/ivr/index.md)
