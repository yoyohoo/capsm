define(function (require, exports, module) {

    this.mixins = {
        name: 'todo',
        el: $(`#todo .content ul`),
        ser: require('../services/todo.service'),
        render: function () {
            var self = this;
            this.ser.getTodo(function (data) {
                self.el.empty();
                $.each(data, (index, item) => {
                    let tpl = `<li><a data-id="?uuid=${item.taskId}" href="#recheck" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.taskName}</div> <div class="item-after">${item.submitDate}</div> </div><div class="item-text">${item.linkName}</div></div></a></li>`
                    self.el.append(tpl);
                })
            });
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