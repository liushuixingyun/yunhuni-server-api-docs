# IVR回调 (beta)
<!-- toc -->

该接口由开发者实现，云呼你服务器在监听到ivr接通后，会调用该接口询问开发者第一步的ivr动作。
该接口需要返回ivr动作指令xml

## URL

```
GET ${NOTIFY_URL}
```

## 请求

### 参数列表

| 参数                     | 有效值范围                | 说明                                       |
| ---------------------- | -------------------- | ---------------------------------------- |
| `action`            | **ivr_start**|执行第一步的IVR动作标志：ivr_start。 |
| `call_id`              | UUID HEX 字符串          | 呼叫的`ID`                                |



## 响应
	ivr动作指令

## 示例

```xml
<response>
    <play finish_keys="#">welcome.wav</play>
    <next>http://yourhost/nextstep</next>
</response>
```
