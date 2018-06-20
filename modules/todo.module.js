define(function (require, exports, module) {

    this.mixins = {
        name: 'todo',
        header: $(`#todo header .title`),
        el: $(`#todo .content ul`),
        ser: require('../services/todo.service'),
        render: function () {
            this.header.text('待办');
            this.el.empty();
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
            $.each(data, (index, item) => {
                // item.submitDate = item.submitDate.substr(0, 10)
                let tpl = `<li><a data-id="?uuid=${item.taskId}" href="#recheck" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.taskName}</div> <div class="item-after">${item.submitDate}</div> </div><div class="item-text">${item.linkName}</div></div></a></li>`
                this.el.append(tpl);
            })
            // this.ser.getTodo(function (data) {
            //     this.el.empty();
            //     $.each(data, (index, item) => {
            //         // item.submitDate = item.submitDate.substr(0, 10)
            //         let tpl = `<li><a data-id="?uuid=${item.taskId}" href="#recheck" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.taskName}</div> <div class="item-after">${item.submitDate}</div> </div><div class="item-text">${item.linkName}</div></div></a></li>`
            //         this.el.append(tpl);
            //     })
            // });
        }
    }

    // 初始化
    exports.init = function () {
        localStorage.setItem('tab', 'todo');
        this.mixins.render();
    }


});