与会方 API
##############

与会方是 :doc:`会议 <conf_api>` 的子资源。

.. note::
    与会方实际上是一个 :doc:`呼叫 <call_api>` ，其基本属性与 :doc:`呼叫 <call_api>` 的属性完全一致。

.. attention::
    一个呼叫在同一时刻至多只能属于一个  :doc:`会议 <conf_api>` 。

与会方的属性
*************

其基本属性与 :doc:`呼叫 <call_api>` 的属性完全一致，在此基础上，增加了会议相关属性，这些属性有：

======================= ============== ====================================================
属性                    数据类型       描述
======================= ============== ====================================================
confSid                 String         所属会议的唯一ID，是一个32字符的UUID
muted                   Boolean        是否无声
silent                  Boolean        是否静音
enterTime               DateTime
exitTime                DateTime
======================= ============== ====================================================

获取与会方列表
****************

.. http:get:: /v1/account/(account_sid)/conf/(conf_sid)/call

    获取SID为 `conf_sid` 的会议所属的与会方列表
    
    :param str account_sid: 账号SID
    :param str conf_sid: 会议SID
    :<header Accept: `application/xml`
    :>header Content-Type: `application/xml`

获取单个与会方信息
*******************

.. http:get:: /v1/account/(account_sid)/conf/(conf_sid)/call/(call_sid)

    获取SID为 `conf_sid` 的会议中，SID为 `call_sid` 的呼叫的与会方的信息
    
    :param str account_sid: 账号SID
    :param str conf_sid: 会议SID
    :param str call_sid: 与会方的呼叫SID
    :<header Accept: `application/xml`
    :>header Content-Type: `application/xml`

踢除与会方
************

.. http:get:: /v1/account/(account_sid)/conf/(conf_sid)/call/(call_sid)/dispose

    获取SID为 `conf_sid` 的会议中，SID为 `call_sid` 的呼叫的与会方的信息
    
    :param str account_sid: 账号SID
    :param str conf_sid: 会议SID
    :param str call_sid: 与会方的呼叫SID
    :<header Content-Type: `application/xml`
    :>header Content-Type: `application/xml`

.. warning::
    踢除与会方后，该呼叫仍然没有断线。
