define(function (require, exports, module) {

    this.mixins = {
        name: 'todo',
        el: $(`#todo .content ul`),
        ser: require('../services/todo.service'),
        render: function () {
            var self = this;
            var data = [{
                taskId: 1,
                taskName: '封闭性规则复核',
                submitDate: '06-15 17:14',
                linkName: '此处是待办事项展示内容...'
            }, {
                taskId: 2,
                taskName: '封闭性规则复核2',
                submitDate: '06-15 17:14',
                linkName: '此处是待办事项展示内容...'
            }];
            self.el.empty();
            $.each(data, (index, item) => {
                // item.submitDate = item.submitDate.substr(0, 10)
                let tpl = `<li><a data-id="?uuid=${item.taskId}" href="#recheck" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.taskName}</div> <div class="item-after">${item.submitDate}</div> </div><div class="item-text">${item.linkName}</div></div></a></li>`
                self.el.append(tpl);
            })
            // this.ser.getTodo(function (data) {
            //     self.el.empty();
            //     $.each(data, (index, item) => {
            //         // item.submitDate = item.submitDate.substr(0, 10)
            //         let tpl = `<li><a data-id="?uuid=${item.taskId}" href="#recheck" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.taskName}</div> <div class="item-after">${item.submitDate}</div> </div><div class="item-text">${item.linkName}</div></div></a></li>`
            //         self.el.append(tpl);
            //     })
            // });
        }
    }

    // 初始化
    exports.init = function () {
        localStorage.setItem('tab', 'todo');
        this.mixins.render();
        var recheck = require('./recheck.module');
        recheck.init();
    }


});
