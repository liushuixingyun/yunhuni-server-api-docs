# 录音文件
<!-- toc -->

# 查询录音文件

用户应用调用该接口后，会返回录音文件分页数据列表 。

## 请求

### URL

```http
GET {BASE_URL}/recording/plist
```

### 请求参数列表

| 参数         | 有效值范围 | 是否必填       | 说明                                 |
| ---------- | ----- | ---------- | ---------------------------------- |
| `pageNo`   | 正整数   | 选填，默认为`1`  | 分页参数，查询第几页                         |
| `pageSize` | 正整数   | 选填，默认为`10` | 分页参数，每页显示记录数                       |
| `start`    | 时间字符串 | **必填 **    | 查询的开始时间，格式为：`yyyy-MM-dd HH:mm:ss ` |
| `end`      | 时间字符串 | **必填 **    | 查询的结束时间，格式为：`yyyy-MM-dd HH:mm:ss ` |

## 响应

### 响应参数列表

| 参数     | 有效值范围   | 说明                                 |
| ------ | ------- | ---------------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                         |
| `msg`  | 文本      | 返回情况说明                             |
| `data` | JSON 对象 | 返回数据对象，参见[data对象属性列表](#data对象属性列表) |

### 参数详解

#### data对象属性列表

| 属性               | 有效值范围 | 说明                        |
| ---------------- | ----- | ------------------------- |
| `pageSize`       | 正整数   | 每页记录数                     |
| `startIndex`     | 正整数   | 开始记录数                     |
| `totalCount`     | 正整数   | 总记录数                      |
| `totalPageCount` | 正整数   | 总页数                       |
| `currentPageNo`  | 正则数   | 当前页数                      |
| `result`         | 数组    | 查询数据记录，记录属性参考`录音记录对象属性列表` |

#### 录音记录对象属性列表

| 属性         | 有效值范围 | 说明               |
| ---------- | ----- | ---------------- |
| `id`       | 正整数   | 录音文件记录标识         |
| `date`     | 正整数   | 录音文件时间           |
| `duration` | 正整数   | 通话时长，单位：`秒`      |
| `size`     | 长整形   | 录音文件大小，单位：`byte` |

## 示例

请求:
```http
GET {BASE_URL}/recording/plist HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
  "pageNo": "1",
  "pageSize": "10",
  "start": "2017-01-01 00:00:00",
  "end": "2017-02-01 00:00:00"
}
```

响应:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
	"code": "000000",
	"msg": "请求成功",
	"data": {
		"pageSize": 10,
		"startIndex": 1,
		"totalCount": 2,
		"totalPageCount": 1,
		"currentPageNo": 1,
		"result": [{
			"id": "8a2d9fed5a117dbb015a1201db300004",
			"date": "2017-02-06 13:59:56",
			"duration": 120,
			"size": 524288
		},
		{
			"id": "8a2d9fed5a12cda4015a16534f66000f",
			"date": "2017-02-07 10:07:23",
			"duration": 60,
			"size": 65536
		}]
	}
} 
```

# 获取录音文件的下载地址

用户调用该接口后，平台会检查录音是否上传到OSS上，如果是的话，则会生成录音文件的临时下载地址，并将地址返回；否则，会异步将录音文件上传到OSS上，并在之后通过`录音下载通知事件`通知用户生成的生成录音文件的临时下载地址。

生产的录音文件临时下载地址的有效时间为10分钟。

### URL

```http
GET {BASE_URL}/recording/url/gen
```

### 请求参数列表

| 参数   | 有效值范围        | 是否必填   | 说明            |
| ---- | ------------ | ------ | ------------- |
| `id` | UUID HEX 字符串 | **必填** | 查询录音文件返回的录音记录 |



## 响应

### 响应参数列表

| 参数     | 有效值范围   | 说明                                 |
| ------ | ------- | ---------------------------------- |
| `code` | 数字文本    | 状态码，全0表示正确                         |
| `msg`  | 文本      | 返回情况说明                             |
| `data` | JSON 对象 | 返回数据对象，参见[data对象属性列表](#data对象属性列表) |

### 参数详解

#### data对象属性列表

| 属性      | 有效值范围 | 说明                            |
| ------- | ----- | ----------------------------- |
| `state` | 0或者1  | 0表示将通过事件通知下载地址；1表示`url`中有下载地址 |
| `url`   | 字符串   | 录音文件临时下载地址，地址有效时性为10分钟        |

## 举例

请求:
```http
GET {BASE_URL}/recording/url/gen HTTP/1.1
Host: api.yunhuni.com
Content-Type: application/json
Accept-Type: application/json
Content-Length: xxx

{
  "id": "2e2597d4849211e681c7803f5d09b29d"
}
```

响应:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xxx

{
	"code": "000000",
	"msg": "请求成功",
	"data": {
		"state": 1,
		"url": "http://yunhuni-test.oss-cn-beijing.aliyuncs.com/tenant_res/8a2a6a4a576f874001576f99fbac000e/record_voice/8a2bc67257fae1820157faef2f290002/20170329/b5fdfed7647daf121149154398b0c16a.zip?OSSAccessKeyId=nfgEUCKyOdVMVbqQ&Expires=1490784251&Signature=KaJpLI1dyrW%2BQLHTuu6TlEvK7wk%3D"
	}
}

或
{
	"code": "000000",
	"msg": "请求成功",
	"data": {
		"state": 0,
		"url": null
	}
}
```

# 事件

## 录音下载通知事件

通知用户之前请求`获取录音文件下载地址`接口的处理结果

### 回调URL

```
POST {NOTIFY_URL}
```

### 参数列表

| 参数              | 有效值范围                       | 说明                          |
| --------------- | --------------------------- | --------------------------- |
| `action`        | **event_notify**            | 事件标志：event_notify。          |
| `event`         | **recording.url_generate ** | 录音文件下载通知                    |
| `id`            | UUID HEX 字符串                | 录音文件记录标识                    |
| `subaccount_id` | `UUID`                      | 子账号id，事件所属子账号，如果为空表示是主账号的事件 |
| `url`           | URI字符串                      | 录音文件临时下载地址，地址有效时性为10分钟      |