# IVR回调（尚未开放）
<!-- toc -->
该接口由开发者实现，云呼你服务器在监听到ivr接通后，会调用该接口询问开发者第一步的ivr动作。
该接口需要返回ivr动作指令xml

## URL

```
GET ${call_back}/yunhuni/ivr/start
```

## 请求

### 请求参数列表
	无

## 响应
	ivr动作指令

## 示例

```xml
<response>
    <play callback_url="http://userhost/callback.php?event=play" finish_keys="#">
      welcome.wav
      <next>http://yourhost/nextstep</next>
    <play>
<response>
```
