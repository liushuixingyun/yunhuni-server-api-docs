# 开始排队
<!-- toc -->

这是一个 [IVR](../../ivr/index.md) 节点！

```xml
<enqueue waitPlayFile="music.wav" playAgentNum="true" preAgentNumPlayFile="坐席.wav" postAgentNumPlayFile="为您服务.wav" data="my queue data">
    <filter data="this is filter 1">
        <condition timeout="20" priority="60" data="condition 1">
            <where>
                <![CDATA[
                '投诉' in skills and skills['手机'] > 60
                ]]>
            </where>
            <sort>
                <![CDATA[
                (skills['投诉'] * 0.4 + skills['手机'] * 0.6) / 2
                ]]>
            </sort>
        </condition>
        <condition timeout="10" priority="50" data="condition 2">
            <where>
                <![CDATA[
                (skills['投诉'] > 75) or (skills['投诉'] > 60 and '手机' in skills)
                ]]>
            </where>
            <sort>
                <![CDATA[
                (skills['投诉'] + skills['手机']) / 2
                ]]>
            </sort>
        </condition>
    </filter>
    <filter data="this is filter 2">
        <condition timeout="30" priority="100" data="condition 3" >
            <where>&apos;投诉&apos; in skills</where>
            <sort mode="desc">skills[&apos;投诉&apos;]</sort>
        </condition>
    </filter>
    <filter data="this is filter 3">
        <condition timeout="10" priority="900" data="condition 4" >
            <where>
            <![CDATA[
            id == '9527'
            ]]>
            </where>
        </condition>
    </filter>
</enqueue>
```

## `enqueue` 标签
“开始排队”——IVR功能的顶层标签。

其子节点标签只能是`filter`，且至少拥有一个`filter`标签。

## `filter` 标签
“排队过滤器”

其父节点必须是`queue`。

其子节点标签只能是`condition`，且至少拥有一个`condition`标签。

**注意:**

> 同一个 `filter` 在的 `condition` 首先按照优先级反序匹配（优先级相同的按照DOM的自然顺序）。
> 
> 如果都未匹配上，就等待，直到该 `filter` 中所有的 `condition` 都等待超时。
> 
> `filter` 中所有的 `condition` 都等待超时后，转到下一个 `filter` 继续这个排队。

## `condition` 标签
“过滤条件”

注意：`filter` 中的多个 `condition` 可以同时进行排队等待！

其父节点必须是`filter`。

### `timeout` 属性
该 `condition` 排队的最大等待时间长度（秒）。

**`contidiont`** 的最大等待时间是由其包含的`condition`的`timeout`决定的。

### `playAgentNum`
是否播放坐席工号

### `preAgentNumPlayFile`
播放工号之前的播放文件

### `postAgentNumPlayFile`
播放工号之后的播放文件

## `data`
`<enqueue>` `<filter>` `<condition>` 3个节点分别拥有各自的用户自定义数据，在排队产生事件通知时，该参数被传给用户服务。

## `where` 标签
“过滤条件表达式”

父节点是 `<condition>`，一个`condition`有且只有一个`where`，如果没有，则格式错误；如果有多个，只有第一个有效。

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
'投诉' in skills and skills['手机'] > 60
```

eg 3:

要求拥有“投诉”技能，且技能分数大于75；或者“投诉”技能技能分数小于75，但是大于等于60，且拥有“手机”技能。

```python
skills['投诉'] > 75 or (skills['投诉'] > 60 and '手机' in skills)
```

eg 4:

指定坐席"9527"

```python
id == '9527'
```

## `sort` 标签
“过滤条件排序表达式”

父节点是 `<condition>`，一个`condition`最多有一个`sort`，如果没有，则不排序；如果有多个，只有第一个有效。

用 `mode` 属性指定升序或者降序，默认降序

`mode` 属性：

- `"asc"`: 升序
- `"desc"`: 降序（默认）

其内容文本是“过滤排序条件”的表达式。
该内容可以放在`CDATA`内，也可以直接作为节点的内容。
如果没有使用`CDATA`，注意转义字符！

eg 2:

按坐席的“投诉”技能分数排序

```python
skills['投诉']
```

eg 2:

按坐席的“投诉”技能和“手机”技能的平均分排序

```python
(skills['投诉'] + skills['手机']) / 2
```

eg 3:

按坐席的“投诉”技能和“手机”技能的加权平均分排序，权值分别是 40% 和 60%

```python
(skills['投诉'] * 0.4 + skills['手机'] * 0.6) / 2
```
