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
