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
        this.get('', function (res) {
            successCallback(JSON.parse(res).resultList)
        }, function (err) {
            successCallback([{
                uuid: 1,
                title: '封闭性规则复核',
                time: '06-15 17:14',
                summary: '此处是待办事项展示内容...'
            }, {
                uuid: 2,
                title: '封闭性规则复核2',
                time: '06-15 17:14',
                summary: '此处是待办事项展示内容...'
            }])
        })
    }


});
