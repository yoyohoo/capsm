define(function (require, exports, module) {

    this.get = function (url, successCallback, errorCallback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = state_Change;
        xhr.open('GET', url, true);
        xhr.send(null);
        function state_Change() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    successCallback(this.response);
                }
                else {
                    errorCallback && errorCallback(this.response);
                }
            }
        }
    }

    // 待办列表
    exports.getTodo = function (successCallback, errorCallback) {
        // this.get('http://192.168.6.237:9998/pending/queryFinish?operator=ZHANGZH', function (res) {
        this.get('123', function (res) {
            successCallback(JSON.parse(res).resultList)
        }, function (err) {
            successCallback([{
                taskId: 1,
                taskName: '封闭性规则复核',
                submitDate: '06-15 17:14',
                linkName: '此处是待办事项展示内容...'
            }, {
                taskId: 2,
                taskName: '封闭性规则复核2',
                submitDate: '06-15 17:14',
                linkName: '此处是待办事项展示内容...'
            }])
        })
    }


});
