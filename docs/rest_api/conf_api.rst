会议 API
#############

通过会议 :term:`REST` API，用户应用服务主动地可获取一个会议的信息，建立一个新的会议，或者对活动会议进行操作。

会议的属性
**********

======================= ============== ====================================================
属性                    数据类型       描述
======================= ============== ====================================================
sid                     String         会议的唯一 ID，是一个32字符的UUID
accountSid              String         建立该会议的账号ID
appSid                  String         会议所属应用的ID
status                  String         会议状态，有：

                                       * ``initiated``
                                       * ``running``
                                       * ``ringing``
                                       * ``completed``

beginTime               DateTime
endTime                 DateTime
userData                String         用户自定义数据
onStatus                String         会议状态变化事件通知URL
======================= ============== ====================================================

获取会议的信息
***************

.. http:get:: /v1/account/(account_sid)/conf/(conf_sid)

    获取SID为 `conf_sid` 的会议的属性
    
    :param str account_sid: 账号SID
    :param str conf_sid: 会议SID
    :<header Accept: `application/xml`
    :>header Content-Type: `application/xml`

新建会议
*************

.. http:post:: /v1/account/(account_sid)/conf
    
    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`
    :>header Content-Type: `application/xml`
    
新建会议时，用户应用需要在 `HTTP Content` 的 `XML` 数据中填写参数。
参数有：

=============================== ============= ====== ====================================================
属性                            数据类型      必填   描述
=============================== ============= ====== ====================================================
appSid                          String               当使用主账号发起呼叫时，该参数必须指定。当使用子账号时，该参数不必指定，将自动与子帐号所属应用保持一致。
userData                        String               用户数据
onStatus                        String               会议状态变化事件通知URL。如果不填，不会有事件通知。
=============================== ============= ====== ====================================================

.. attention::
    会议创建后需要在10分钟内有人加入，否则会议会被自动删除。当会议人有人加入变成无人时，会议自动被删除。

解散会议
*************

.. http:post:: /v1/account/(account_sid)/conf/(conf_sid)/dispose
    
    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`
    :>header Content-Type: `application/xml`

:todo: 需要提供的参数……