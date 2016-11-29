# 接听
<!-- toc -->

## accept 节点

```
accept
```

用于接听呼入来电。

呼入来电只有被接听成功后，才能进行其它后续 IVR 动作。
 
## 内容
无

## 嵌套
只能位于顶级，无法嵌套其它 IVR 动作，也不能被其它 IVR 动作嵌套

## 示例

```xml
<response>
    <accept />
    <next>http://yourhost/nextstep</next>   
</response>
```

