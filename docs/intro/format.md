# 格式

## URL
```
https://api.yunhuni.com/v1/*
```

## 包体

### 请求

{% method %}

{% sample lang="json" %}
```json
{
  "method": "method_name",
  "params": {
    "param1": "value1",
    "param2": "value2",
    "paramX": "valueX",
  }
}
```
{% sample lang="xml" %}
```xml
<request method="method_name">
  <params>
    <param key="param1" value="value1">
    <param key="param2" value="value2">
    <param key="paramX" value="valueX">
  </params>
</request>
```

{% endmethod %}

### 回复

{% method %}

{% sample lang="json" %}
```json
{
  "result": "the_result"
}
```
{% sample lang="xml" %}
```xml
<response>
  <result>the_result<result>
</response>
```

{% endmethod %}
