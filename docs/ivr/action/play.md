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
| `repeat`              | 重复播放次数                              |


## 内容
    放音文件

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
| `repeat`              | 重复播放次数                              |

## 嵌套
`play`

**NOTE** 覆盖 `play` 的属性

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
