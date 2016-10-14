# 主动调用
<!-- toc -->

## 基础 URL
本文中所有 REST API 的 URL 均有以下基础部分：

```
https://api.yunhuni.cn/v1/account/鉴权账号/
```

本文的 API URL 说明省略基础部分，在代码例子中，用 {BASE_URL} 表示URL的公共基础部分。

云呼你的 REST API 只接受 HTTPS 连接，以保证安全。

用户可以从`管理控制台`首页中的`开发者账号`模块的`接口API`获取。

## 请求参数

请求参数分为两部分，分别在`Head头部`和`请求body体`中。Head头部中包含以下列表参数：

| 头         | 描述   | 样例值                                      | 备注                              |
| --------- | ---- | ---------------------------------------- | ------------------------------- |
| AppID     | 应用标识 | 4028b834234224480155de541c7b0000         | 用户指定的应用标识                       |
| CertID    | 鉴权账号 | 9053053bc1dc6e766e8b64bbbacfa84b         | 用户通过登录控制台获取                     |
| Signature | 签名   | V4cGkWXYi57SXFpXh5r6vDrpxGy45ZlF/K1FdhOm0lk= | 使用HmacSHA256签名算法组合请求数据进行签名，参考鉴权 |
| Timestamp | 时间戳  | 20160701121000                           | 时间戳为调用时的时间以yyyyMMddHHmmss格式提供   |

其他参数，则转换成`JSON`格式的字符串，携带在请求body中，并设置编码为`UTF-8`。以HttpPost为例，如下：

```java
 HttpPost.setEntity(new StringEntity(payload, Charset.forName("UTF-8")));
```

## 鉴权

API网关鉴权使用`鉴权账号`和`密钥`配合完成。

鉴权账号：用户可以从`管理控制台`首页中的`开发者账号`模块的`鉴权账号`获取。

密钥：用户可以从`管理控制台`首页中的`开发者账号`模块的`密钥`获取。

**注意** ：API调用签名过期时间目前限制为5分钟。

用户需要进行对上传数据做鉴权操作，步骤如下：

{% codetabs name="java", type="java" -%}
 /**
 * 获取签名数据
 * @param method HTTP请求方法，POST GET PUT DELETE
 * @param payload Post请求时的包体进行MD5签名
 * @param contentType HTTP请求的内容类型
 * @param timestamp 时间戳为调用时的时间以yyyyMMddHHmmss格式提供 必须同请求头中的时间戳保持一致
 * @param appId 应用APP标识
 * @param uri 请求的API 的地址
 * @return 返回签名内容
 */
public static String getSign(String method,String payload,String contentType,String timestamp,String appId,String uri){
    // 是否有post 或者 put  body
    boolean hasContent = METHOD_HAS_CONTENT.contains(method);
    //j8bm4n329cHi4lSMdMJG482wfaF0POq4PmzQn7lK8XM
    String contentMd5 = hasContent ? (new Md5PasswordEncoder()).encodePassword(payload, null) : "";
    String contentType1 = hasContent ? contentType : "";
    // 组织签名数据
    StringBuilder toSign = new StringBuilder();
    toSign.append(method).append("\n")
            .append(contentMd5).append("\n")
            .append(contentType1).append("\n")
            .append(timestamp).append("\n")
            .append(appId).append("\n")
            .append(uri);
    return toSign.toString();
}
/**
 * 使用HmacSHA256签名算法进行签名
 * @param secret 密钥
 * @param data 签名数据
 * @return 签名后数据
 */
public static String calculateHMAC(String secret, String data) {
    try {
        SecretKeySpec signingKey = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(signingKey);
        byte[] rawHmac = mac.doFinal(data.getBytes());
        String result = new String(Base64.encodeBase64(rawHmac));
        return result;
    } catch (GeneralSecurityException e) {
        throw new IllegalArgumentException();
    }
}
{%- language name="php", type="php" -%}
/**
 * 获取签名数据
 * @param method HTTP请求方法，POST GET PUT DELETE
 * @param payload Post请求时的包体进行MD5签名
 * @param contentType HTTP请求的内容类型
 * @param timestamp 时间戳为调用时的时间以yyyyMMddHHmmss格式提供 必须同请求头中的时间戳保持一致
 * @param appId 应用APP标识
 * @param apiUri 请求的API 的地址
 * @return 返回签名内容
 */
function getSign($method, $payload, $contentType, $timestamp, $appId, $apiUri)
{
    //是否 有post 或者 put  body
    $hasConent = $method ? true : false;
    $contentMd5 = isset($hasConent) ? md5($payload) : '';
    $contentType = isset($hasConent) ? $contentType : '';
    $sign = $method . "\n" . $contentMd5 . "\n" . $contentType . "\n" . $timestamp . "\n" . $appId . "\n" . $apiUri;
    return $sign;
}

/**
 *HmacSHA256签名算法
 * @param secret 密钥
 * @param data 签名数据
 * @return 签名后数据
 */
function calculateHMAC($secret, $data)
{
    $secret = hash_hmac('sha256', $data, $secret, true);
    $result = base64_encode($secret);
    return $result;
}

{%- endcodetabs %}

补充：参与签名内容

| 签名组成部分           | 描述                           | 样例                                       |
| ---------------- | ---------------------------- | ---------------------------------------- |
| API请求URI         | 请求的API 的地址                   | /v1/account/1234123412341234/call/1234123411234 |
| APPID            | 应用APP标识                      |                                          |
| HTTP ContentType | HTTP请求的内容类型                  | application/json;charset=UTF-8           |
| HTTP METHOD      | HTTP请求方法，POST GET PUT DELETE | POST                                     |
| MD5(Payload)     | Post请求时的包体进行MD5签名            | j8bm4n329cHi4lSMdMJG482wfaF0POq4PmzQn7lK8XM |
| Timestamp        | 时间戳                          | 时间戳为调用时的时间以yyyyMMddHHmmss格式提供必须同请求头中的时间戳保持一致 |

## 响应

### 成功响应
```json
{
    "code": "000000",
    "msg": "请求成功",
    "data": {
        "callId": "8af4eaf75775c93e0157792090b60008",
        "user_data": ""
    }
}
```

### 失败响应

```http
response result = HTTP Status 401 - Bad credentials
```


