define(function (require, exports, module) {

    this.mixins = {
        id: 'message',
        header: $(`#message header .title`),
        el: $(`#message .content ul`),
        ser: require('../services/message.service'),
        render: function () {
            this.header.text('消息');
            this.el.empty();
            var data = this.ser.getMessage();
            $.each(data, (index, item) => {
                item.cls = item.dealed ? 'ms-deal' : 'ms-undeal';
                var tpl = `<li><a class="${item.cls}" data-id="?uuid=${item.uuid}" href="javascript:" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.title}</div><div class="item-after">${item.submitDate}</div></div><div class="item-text">${item.summary}<span>已处理</span></div></div></a></li>`;
                this.el.append(tpl);
            })
        }
    }

    exports.popActions = function () {
        var actions = [{
            text: '处理',
            // label: true,
            onClick: function () {
                setTimeout(function () {
                    $.alert("处理成功");
                }, 500);
            }
        }, {
            text: '删除',
            bold: true,
            color: 'danger',
            onClick: function () {
                setTimeout(function () {
                    $.alert("删除成功");
                }, 500);
            }
        }, {
            text: '取消'
        }];
        var groups = [actions];
        $.actions(groups);
        if (this.className === 'ms-deal') {
            $('.actions-modal-button').first().hide()
        } else {
            $('.actions-modal-button').first().css('display', 'block')
        }
    }

    exports.init = function () {
        $.pageId = this.mixins.id;
        this.mixins.render();
    }

});