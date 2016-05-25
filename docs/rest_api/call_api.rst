呼叫 API
#########

通过呼叫 :term:`REST` API，可获取一个呼叫的信息，建立一个新的呼叫，或者对活动呼叫进行操作。

呼叫的属性
**********

============== ============== ====================================================
属性           数据类型       描述
============== ============== ====================================================
sid            String         呼叫的唯一 ID，是一个32字符的UUID
parentCallSid  String         如果该呼叫实在另外一个呼叫的基础上发起的，该属性值是这个基础呼叫的ID，否则为 ``null``
accountSid     String         建立该呼叫的账号ID
appSid         String         呼叫所属应用的ID
from           String         主叫号码
to             String         被叫号码
status         String         呼叫状态，有： ``pending`` ``initiated`` ``answered`` ``ringing`` ``canceled`` ``completed`` ``failed`` ``busy`` ``no-answer``
direction      String         呼叫方向 ``inbound`` ``outbound``
endCause       Integer        呼叫结束原因编码
endBy          String         结束通话的一方。系统侧： ``sys`` 用户侧： ``usr``
beginTime      DateTime
ringTime       DateTime
answerTime     DateTime
endTime        DateTime
userData       String         用户自定义数据
============== ============== ====================================================

获取呼叫的信息
***************

.. http:get:: /v1/account/(account_sid)/call/(call_sid)

    以账号 `account_sid` 的身份获取呼叫(`call_sid`)的信息。

    :param str account_sid: 账号SID
    :param str call_sid: 呼叫SID
    :<header Accept: `application/xml`
    :>header Content-Type: `application/xml`

例如，SID为 `366d2698221811e68a5168f7288d9a79` 的账号，
查看SID为 `421a60ac221811e68e3768f7288d9a79` 的呼叫的信息。

用户应用服务请求：

.. code-block:: http

    GET /v1/account/366d2698221811e68a5168f7288d9a79/call/421a60ac221811e68e3768f7288d9a79 HTTP/1.1
    Accept: application/xml

:term:`云呼你` 回复：

.. code-block:: http

    HTTP/1.1 200 OK
    Content-Type: application/xml
    
    <response>
        <call>
            <sid>167ae21e1cbe11e6ac5f68f7288d9a79</sid>
            <appSid>e1644a7eed5088b159577c5802d8be38</appSid>
            <accountSid>68743464634131314313637414321231</accountSid>
            <from>14158141819</from>
            <to>14153855708</to>
            <status>completed</status>
            <direction>outbound</direction>
            <endCause>16</endCause>
            <endBy>usr<endBy/>
            <beginTime>2010-01-01 08:02:17</beginTime>
            <endTime>2010-01-01 08:02:47</endTime>
        </call>
    </response>

获取呼叫的列表
***************

.. http:get:: /v1/account/(account_sid)/call

    以账号 `account_sid` 的身份获取该账号下属的呼叫列表。

    :param str account_sid: 账号SID

发起呼叫
*********

.. http:post:: /v1/account/(account_sid)/call

    以账号 `account_sid` 的身份发起呼叫（呼出）， :term:`云呼你` 返回新建呼叫的相关信息。

    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :>header Content-Type: `application/xml`

发起呼叫时，用户应用在 `HTTP Content` 的 `XML` 数据中填写参数。
参数有：

=============================== ============= ====== ====================================================
属性                            数据类型      必填   描述
=============================== ============= ====== ====================================================
appSid                          String               当使用主账号发起呼叫时，该参数必须指定。当使用子账号时，该参数不必指定，将自动与子帐号所属应用保持一致。
from                            String               主叫号码
to                              String        √      被叫号码
userData                        String               用户数据
callConfirmCallback             String               外拨确认回调URL。如果不填，使用APP设置。
onStatus                        String               呼叫状态变化事件通知URL。如果不填，不会有事件通知。
=============================== ============= ====== ====================================================

:term:`云呼你` 返回的呼叫信息包括以下属性：

:todo: ...