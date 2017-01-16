# 放音
<!-- toc -->

## Play 节点

```
play
```

## 属性

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `finish_keys`         | 中断码                                    |
| `repeat`              | 重复播放次数，大于0，最多repeat 10次                              |

## 内容
放音文件

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
    <play finish_keys="#">
      welcome.wav
    </play>
    <next>http://yourhost/nextstep</next>
</response>
```

## PlayList 节点

```
playlist
```

## 属性

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `finish_keys`         | 中断码                                    |
| `repeat`              | 重复播放次数，大于0，最多repeat 10次                              |

## 嵌套
`play`

**NOTE** 覆盖 `play` 的属性，最多嵌套10个play标签

## 示例

```xml
<response>
    <playlist finish_keys="0123456789*#">
      <play>welcome.wav</play>
      <play>byebye.wav</play>
    </playlist>
     <next>http://yourhost/nextstep</next>
</response>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
