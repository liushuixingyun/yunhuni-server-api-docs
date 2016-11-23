# 创建会议 (developing)

## create_conf 节点

```
create_conf
```

## 属性

| 参数                  | 说明                                      |
| --------------------- |  ---------------------------------------- |
| `callback_url`        | 事件通知地址                              |
| `max_duration`        | 最大会议时间（秒）                        |
| `max_parts`           | 最大与会方数                              |
| `recording`           | 是否自动启动录音                          |
| `auto_hangup`         | 会议结束自动挂断所有的与会方              |
| `bgm_file`            | 背景音文件                                |
| `callback_url`        | 事件通知地址                              |
| `callback_method`     | 结果通知 HTTP 方法, `GET`(默认) or `POST` |

## 内容
    无

## 嵌套
    无

## 事件
见 [会议 REST API](/docs/conf/create.md)
