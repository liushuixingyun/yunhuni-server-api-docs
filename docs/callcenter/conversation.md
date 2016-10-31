<!-- toc -->

## 坐席加入

```
POST {BASE_URL}/callcenter/conversation/{conversationId}/attach
```

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`agentId`              |                       | √    |
`voiceIoMode`          |                       |      | default=1

* 该坐席必须至少处于一个 `conversation` 中(这样才有坐席连接)
* 加入后，如果 mode 不是 4，则当前mode不是4的conversation状态变为4

## 坐席退出

```
POST {BASE_URL}/callcenter/conversation/{conversationId}/dettach
```

参数                   | 有效值范围            | 必填 | 说明
---------------------- | ----------------------| ---- | ----------------------------------------
`agentId`              |                       | √    |
`data`                 |                       |      |

* 退出后，如果 `conversation` 人数少于2，将自动解散
* 退出后，如果坐席所在的 `conversation` 少于1，将自动挂断分机
