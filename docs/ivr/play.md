# 放音

## Play 节点

```
play
```

## 属性

- `finish_keys` 中断码
- `repeat` 重复播放次数

## 内容

放音文件

## 嵌套

next

## 例子

```xml
<play finish_keys="#">
  welcome.wav
  <next>http://yourhost/nextstep</next>
<play>
```

## PlayList 节点

```
playlist
```

## 属性

- `callback_url` 事件通知地址
- `finish_keys` 中断码
- `repeat` 重复播放次数

**NOTE** 覆盖 `play` 的属性

## 嵌套

`play`

`next`

## 例子

```xml
<playlist finish_keys="0123456789*#">
  <play>welcome.wav</play>
  <play>byebye.wav</play>
  <next>http://yourhost/nextstep</next>
</playlist>
```

## 事件

见 [IVR 事件](../evt/ivr/index.md)
