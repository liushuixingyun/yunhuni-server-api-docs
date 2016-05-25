呼叫 API
#########

通过呼叫 :term:`REST` API，可获取一个呼叫的信息，建立一个新的呼叫，或者对活动呼叫进行操作。

呼叫的属性
**********
============== ============ ====================================================
属性           数据类型      描述
============== ============ ====================================================
callSid        String       呼叫的唯一 ID，是一个32字符的UUID
parentCallSid  String       如果该呼叫实在另外一个呼叫的基础上发起的，该属性值是这个基础呼叫的ID，否则为`Null`
accountSid     String       建立该呼叫的账号ID
appSid         String       呼叫所属应用的ID
from           String       主叫号码
to             String       被叫号码
status         String       呼叫状态，有：`pending` `initiated` `answered` `ringing` `canceled` `completed` `failed` `busy` `no-answer`
direction      String       呼叫方向 `inbound` `outbound`
endCause       Integer      呼叫结束原因编码
endBy          String       结束通话的一方 系统侧：`sys` 用户侧：`usr`
beginTime      DateTime
ringTime       DateTime
answerTime     DateTime
endTime        DateTime
userData       String       用户自定义数据
============== ============ ====================================================

获取呼叫的信息
***************

.. http:get:: /v1/accounts/(str:account_sid)/calls/(str:call_sid)

以账号 `account_sid` 的身份获取呼叫(`call_sid`)的信息。

.. code-block:: http

    GET
