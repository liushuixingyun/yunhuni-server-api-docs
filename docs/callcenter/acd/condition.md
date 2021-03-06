# 排队条件

<!-- toc -->

通过排队条件，将人工通话请求任务按照业务要求分派给不同的坐席。

## 对象格式
其属性有：

参数                   | 有效值范围            | 说明
---------------------- | --------------------- | ----------------------------------------
`id`                   | UUID                  | ID
`where`                | 条件选择表达式        | 条件选择表达式
`sort`                 | 排序表达式            | 排序表达式
`priority`             | 0~99 整数             | 优先级
`queue_timeout`        | 正整数                | 该条件的排队等待超时时间
`fetch_timeout`        | 正整数                | 该条件的坐席分机接听超时时间
`remark`               | 字符串                | 备注

用类 JSON 形式表示该对象的属性：

```js
{
    id: "fg0234mujosijdfsdf",
    where: "1==1",
    sort: null,
    priority: 100,
    queue_timeout: 15,
    fetch_timeout:45,
    remark: "全部坐席排队"
}
```

## 新建

### URL
```
POST {BASE_URL}/callcenter/condition
```

### 请求参数

参数                   | 有效值范围            | 必填 | 默认值          | 说明
---------------------- | --------------------- | ---- | --------------  | ----------------------------------------
`where`                | 条件选择表达式        | √    |                 |
`sort`                 | 排序表达式            |      | `null`          | 默认不排序，所有的坐席权值相同。
`priority`             | 0~99 整数             |      | `0`             | 数值大的优先级高。默认值是 `0`。
`queue_timeout`        | 1-1000           	   |√     |                 | 该条件的排队等待超时时间(秒)。
`fetch_timeout`        | 1-60		           |      | 45	            | 该条件的坐席分机接听超时时间(秒)。
`remark`               | 字符串                |      | `null`          | 备注

### 返回参数

参数                   | 有效值范围            | 必填 | 说明
---------------------- | --------------------- | ---- | ----------------------------------------
`id`                   | uuid                  | √    | 条件的ID


## 删除

### URL
```
DELETE {BASE_URL}/callcenter/condition/{condition_id}
```

注意：

> - 一旦删除条件，这个条件上正在进行的排队会将无法排到坐席，直到超时。
> - 删除条件后，不要在IVR中继续使用这个条件排队。

## 修改

### URL
```
POST {BASE_URL}/callcenter/condition/{condition_id}
```

### 请求参数
与 [新建](#新建) 相同

## 获取多条记录

### URL
```
GET {BASE_URL}/callcenter/condition
```

### 返回参数列表

参数                   | 有效值范围            | 必填 | 说明
---------------------- | --------------------- | ---- | ----------------------------------------
`result`               | 数组                  | √    | 条件列表

其列表元素是一个 JSON 对象，该对象的属性见 [对象格式](#对象格式)

## 获取单条记录

### URL
```
GET {BASE_URL}/callcenter/condition/{condition_id}
```

### 返回参数列表

参数                   | 有效值范围            | 必填 | 说明
---------------------- | --------------------- | ---- | ----------------------------------------
`result`               | 对象                  | √    | 单个条件对象

`result` 对象的属性定义见 [对象格式](#对象格式)

## 条件表达式语法

注意：**表达式必须以分号结束**

### 算术运算符

设定变量A 的值为10，变量B 的值为 20，那么：

> `+`	加法	A + B 输出结果 30

> `-`	减法	A - B 输出结果 -10

> `*`	乘法	A * B 输出结果 200

> `/`	除法	B / A 输出结果 2

> `%`	取余	B % A 输出结果 0

### 关系运算符
设定 变量A 的值为10，变量B 的值为 20，那么：

> `==`	等于，检测两个值是否相等，相等返回 true，否则返回 false	(A == B) 为 false。

> `!=`	不等于，检测两个值是否相等，相等返回 false，否则返回 true<	(A != B) 为 true。

> `>`	大于，如果左边的值大于右边的值，返回 true，否则返回 false	(A > B) 为 false。

> `<`	小于，如果左边的值大于右边的值，返回 false，否则返回 true	(A < B) 为 true。

> `>=`	大于等于，如果左边的值大于等于右边的值，返回 true，否则返回 false	(A >= B) 返回 false。

> `<=`	小于等于， 如果左边的值小于等于右边的值，返回 true，否则返回 false	(A <= B) 返回 true。

### 逻辑运算符
设定 A 的值为 true，B 的值为 false：

> `&&`	逻辑与操作符。 若 A 为 false，则返回 A，否则返回 B。	(A && B) 为 false。

> `||`	逻辑或操作符。 若 A 为 true，则返回 A，否则返回 B。	(A || B) 为 true。


### 内置函数

> get   获取坐席技能分 参数为技能名称字符串  返回类型为数值

> has   判断坐席是否有某个技能 参数为技能名称字符串  返回类型为布尔值

`where`表达式为布尔表达式，例如：

```
get("技能1") > 60 && get("技能2") > 50;
(get("技能1") + get("技能2")) >=100;
```

sort表达式为数值表达式，例如

```
get("技能1") + get("技能2");
(get("技能1") + get("技能2")) /2;
```
