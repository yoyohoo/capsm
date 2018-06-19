/*
 * name: 常用函数库
 * auth: zxf
 * date: 2018-01-25
 */

/**
 * name: 获取当前url参数值
 * example: var url = 'https://vuejs.org/v2/api?p=abc&v=okay';
 *          var p = url.getUrlParam('v');
 */
String.prototype.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
        str = this.substr(this.indexOf('?')),
        r = str.substr(1).match(reg);
    return r ? unescape(r[2]) : null;
}

/**
 * name: 货币千分位
 * example: var num = '65699.3';
 *          var money = num.toMoney();
 */
Number.prototype.toMoney =
    String.prototype.toMoney =
    function () {
        var s = this + '';
        if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00 
        if (/\.\d$/.test(s)) s += "0"; //正则判断 
        while (/\d{4}(\.|,)/.test(s)) //符合条件则进行替换 
            s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); //每隔3位添加一个 
        return s;
    }

/**
 * name: 日期格式化
 * example: new Date().format('yyyy-MM-dd')
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * name: 浅拷贝（推荐）
 * example: var obj = { a: 1, fn: function () {}, arr: [2, [3, 4, 5]] };
 *          var newObj = obj.shallowClone()
 */
Object.prototype.shallowClone = function () {
    var obj = this,
        newObj = {};
    for (var key in obj) {
        obj.hasOwnProperty(key) &&
            (newObj[key] = obj[key])
    }
    return newObj;
}

/**
 * name: 简单深拷贝（无法拷贝函数）
 * example: var obj = { a: 1, fn: function () {}, arr: [2, [3, 4, 5]] };
 *          var newObj = obj.simpleDeepClone()
 */
Object.prototype.simpleDeepClone = function () {
    return JSON.parse(JSON.stringify(this));
}

/**
 * name: 完全深拷贝
 * example: var obj = { a: 1, fn: function () {}, arr: [2, [3, 4, 5]] };
 *          var newObj = obj.deepClone()
 */
Object.prototype.deepClone = function () {
    var obj = this,
        newObj = obj.constructor === Array ? [] : {};
    for (var key in obj) {
        obj.hasOwnProperty(key) &&
            (newObj[key] = typeof obj[key] === 'object' ?
                deepClone(obj[key]) : obj[key])
    }
    return newObj;
}

/**
 * name: 一维数组去重
 * example: var arr = [1, 2, 3, 2];
 *          var uniqueArr = arr.unique();
 */
Array.prototype.unique = function () {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        obj[this[i]] = null
    }
    return Object.getOwnPropertyNames(obj)
}

/**
 * name: JSON数组去重，最后一次key生效
 * key： 唯一键
 * example: var jsonArr = [{ id: 1, name: 'a1' }, { id: 2, name: 'b' }, { id: 1, name: 'a2' }];
 *          var uniqueJSON = jsonArr.uniqueJSON('id');
 */
Array.prototype.uniqueJSON = function (key) {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        obj[this[i][key]] = this[i]
    }
    return Object.values(obj);
}