会议 API
#############

通过会议 :term:`REST` API，用户应用服务主动地可获取一个会议的信息，建立一个新的会议，或者对活动会议进行操作。

会议的属性
**********

======================= ============== ====================================================
属性                    数据类型        描述
======================= ============== ====================================================
sid                     String         会议的唯一 ID，是一个32字符的UUID
accountSid              String         建立该会议的账号ID
appSid                  String         会议所属应用的ID
maxPart                 Integer        最大与会方数量
status                  String         会议状态，有：

                                       * ``initiated``: 会议已经创建，但是还没有任何与会方加入
                                       * ``waiting``: 会议创建后，只有一个与会方加入，等待其它与会方加入
                                       * ``running``: 一个以上的一会放加入过会议之后，会与即处于运行状态
                                       * ``disposed``: 会议结束

disposePartThreshold    Integer        会议自动释放的与会方数量阈值
beginTime               DateTime
endTime                 DateTime
waitPlayFile            String         第一个与会方首次加入后，等待其它与会方期间播放的声音文件
backgroundPlayFile      String         会议背景声音文件
enterPlayFile           String         与会方加入时会议播放文件
exitPlayFile            String         与会方退出时，会议播放文件
recordFile              String         创建会议时，即启动录音，将录音放到这个文件
userData                String         用户自定义数据
onStatus                String         会议状态变化事件通知URL
onEnter
onExit
onDisposed
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
可用参数有：

:todo: 需要提供的参数……

.. attention::
    会议创建后需要在?分钟内有人加入，否则会议会被自动删除

解散会议
*************

.. http:post:: /v1/account/(account_sid)/conf/(conf_sid)/dismiss

    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`
    :>header Content-Type: `application/xml`

:todo: 需要提供的参数……

开始会议录音
**************

.. http:post:: /v1/account/(account_sid)/conf/(conf_sid)/start_record

    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`
    :>header Content-Type: `application/xml`

请求参数有：

======================= ============== ====================================================
属性                    数据类型        描述
======================= ============== ====================================================
recordFile              String         录音文件名
======================= ============== ====================================================

回复参数有：

:todo: 回复什么咧？

停止会议录音
**************

.. http:post:: /v1/account/(account_sid)/conf/(conf_sid)/stop_record

    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`

请求参数有：应该没有吧

回复参数有：

:todo: 回复什么咧？

开始会议放音
**************

.. http:post:: /v1/account/(account_sid)/conf/(conf_sid)/start_play

    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`
    :>header Content-Type: `application/xml`

请求参数有：

======================= ============== ====================================================
属性                     数据类型       描述
======================= ============== ====================================================
playFile                String         放音文件名
======================= ============== ====================================================

回复参数有：

:todo: 回复什么咧？

停止会议放音
**************

.. http:post:: /v1/account/(account_sid)/conf/(conf_sid)/stop_play

    :param str account_sid: 账号SID
    :<header Accept: `application/xml`
    :<header Content-Type: `application/xml`

请求参数有：应该没有吧

回复参数有：
