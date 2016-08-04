# 放音

## Play 节点
```
play
```

## 属性
- `finish_keys`             中断码
- `repeat`                  重复播放次数

## 内容
放音文件

## 嵌套
无

## 例子
```xml
<play callback_url="http://userhost/callback.php?event=play" finish_keys="#">
  welcome.wav
<play>
```

## PlayList 节点
```
playlist
```
## 属性
- `callback_url`            事件通知地址
- `finish_keys`             中断码
- `repeat`                  重复播放次数

**NOTE** 覆盖 `play` 的属性

## 嵌套
`play`

## 例子
```xml
<playlist callback_url="http://userhost/callback.php?event=play" finish_keys="0123456789*#">
  <play>welcome.wav</play>
  <play>byebye.wav</play>
</playlist>
```

## 事件

### 放音结束
- `URL`: `{prefix}/{callback_url}`
- 参数：
  - `type`: `play_end`
  - `call_id`
  - `error`
