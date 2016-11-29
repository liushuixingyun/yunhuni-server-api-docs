# 拒接
<!-- toc -->

## refuse 节点

```
refuse
```

用于拒接呼入来电

## 属性
参数                  | 有效值范围       | 默认值 | 说明
--------------------- | ---------------- | ------ | -----------------------------
`code`                | 正整数           | `603`  | 拒接原因代码

### code 属性
该属性的值依照 SIP 协议定义，见：

https://en.wikipedia.org/wiki/List_of_SIP_response_codes

目前，平台支持的拒接原因值有：

- 486 Busy Here
- 487 Request Terminated
- 600 Busy Everywhere
- 603 Decline

除此之外的值都不被接受！

## 属性
无
 
## 内容
无

## 嵌套
只能位于顶级，无法嵌套其它 IVR 动作，也不能被其它 IVR 动作嵌套

## 示例

```xml
<response>
    <refuse code="486" />
</response>
```

