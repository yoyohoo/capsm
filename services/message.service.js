define(function (require, exports, module) {

    // 消息列表
    exports.getMessage = function () {

        return [{
            uuid: 1,
            title: '警告提醒',
            submitDate: '06-15 17:14',
            dealed: false,
            summary: '【警告】【数据采集】证券融资融券系统数据采集失败，已发生一小时，请尽快处理！'
        }, {
            uuid: 2,
            title: '警告提醒',
            submitDate: '一天前',
            dealed: true,
            summary: '【警告】【数据采集】证券融资融券系统数据采集失败，已发生一天，请尽快处理！'
        }]
    }


});