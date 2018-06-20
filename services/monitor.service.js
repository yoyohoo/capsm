define(function (require, exports, module) {

    // 银行列表
    exports.getBank = function () {
        return [{
            uuid: 1,
            title: '5000-平安银行存管',
            img: 'img/u55.png',
            level: 'warning',
            percent: '60%',
            amount: '6,000,000元'
        }, {
            uuid: 2,
            title: '5100-招商银行存管',
            img: 'img/u67.png',
            level: 'normal',
            percent: '80%',
            amount: '30,000,000元'
        }, {
            uuid: 3,
            title: '5200-建设银行存管',
            img: 'img/u73.png',
            level: 'danger',
            percent: '20%',
            amount: '2,000,000元'
        },]

    }


});