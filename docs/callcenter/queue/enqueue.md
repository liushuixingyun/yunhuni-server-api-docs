# 开始排队
<!-- toc -->

这是一个 [IVR](../../ivr/index.md) 节点！

```xml
<enqueue waitPlayFile="music.wav" playAgentNum="true" preAgentNumPlayFile="坐席.wav" postAgentNumPlayFile="为您服务.wav" data="my queue data">
    <condition data="this is condition 1">
        <filter timeout="20" priority="60" data="filter 1">
            <![CDATA[
            '投诉' in skills and skills['手机'] > 60
            ]]>
        </filter>
        <filter timeout="10" priority="50" data="filter 2"/>
            <![CDATA[
            (skills['投诉'] > 75) or (skills['投诉'] > 60 AND '手机' in skills)
            ]]>
        </filter>
    </condition>
    <condition data="this is condition 2">
        <filter timeout="30" priority="100" data="filter 3" >
            &apos;投诉&apos; in skills
        </filter>
    </condition>
    <condition data="this is condition 3">
        <filter timeout="10" priority="900" data="filter 4" >
            <![CDATA[
            id == '9527'
            ]]>
        </filter>
    </condition>
</enqueue>
```

## `enqueue` 标签
“开始排队”——IVR功能的顶层标签。

其子节点标签只能是`condition`，且至少拥有一个`condition`标签。

## `condition` 标签
“排队条件”

其父节点必须是`queue`。

其子节点标签只能是`filter`，且至少拥有一个`filter`标签。

**注意:**

> 同一个 `condition` 在的 `filter` 首先按照优先级反序匹配。
> 
> 如果都未匹配上，就等待，直到该 `condition` 中所有的 `filter` 都等待超时。
> 
> `condition` 中所有的 `filter` 都等待超时后，转到下一个 `condition` 继续这个排队。

## `filter` 标签
“过滤器”

其父节点必须是`condition`。

其内容文本是“过滤条件”的表达式。
该内容可以放在`CDATA`内，也可以直接作为节点的内容。
如果没有使用`CDATA`，注意转义字符！

eg 2:

要求拥有“投诉”技能

```python
'投诉' in skills
```

eg 2:

要求拥有“投诉”技能和“手机”技能，且“手机”技能分数大于60

```python
'投诉' in skills AND skills['手机'] > 60
```

eg 3:

要求拥有“投诉”技能，且技能分数大于75；或者“投诉”技能技能分数小于75，但是大于等于60，且拥有“手机”技能。

```python
skills AND skills['投诉'] > 75 or (skills['投诉'] > 60 AND '手机' in skills)
```

eg 4:

指定坐席"9527"

```python
id == '9527'
```

### `timeout` 属性
该 `filter` 排队的最大等待时间长度（秒）。

**`contidiont`** 的最大等待时间是由其包含的`filter`的`timeout`决定的。

### `playAgentNum`
是否播放坐席工号

### `preAgentNumPlayFile`
播放工号之前的播放文件

## `postAgentNumPlayFile`
播放工号之后的播放文件

## `data`
用户自定义数据，在排队产生事件通知时，该参数被传给用户服务。
