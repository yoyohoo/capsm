define(function (require, exports, module) {

    this.mixins = {
        id: 'monitor',
        header: $(`#monitor header .title`),
        el1: $(`#tab1 ul`),
        el2: $(`#tab2 ul`),
        ser: require('../services/monitor.service'),
        render: function (tab) {
            switch (tab) {
                case '#tab1':
                    break;
                case '#tab2':
                    this.el2.empty();
                    var data = this.ser.getBank();
                    $.each(data, (index, item) => {
                        var tpl = `<li><a data-id="${item.uuid}" href="javascript:" class="item-link item-content"><div class="item-media"><img style="width:100px;" src="${item.img}"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">${item.title}</div><div class="item-after"></div></div><div class="item-subtitle">存管比例 - <span class="${item.level}">${item.percent}</span></div><div class="item-text">${item.amount}</div></div></a></li>`;
                        this.el2.append(tpl);
                    })
                    break;
                default:
                    break;
            }
            setActive(tab);
        }
    }

    var self = this,
        setActive = function (tab) {
            $('#monitor .buttons-tab').removeClass('active');
            $(`#monitor [href="${tab}"]`).addClass('active');

            $('.tab').removeClass('active');
            $(`${tab}`).addClass('active');
        };
    exports.toggle = function () {
        var tab = $(this).attr('href');
        self.mixins.render(tab);
    }

    exports.init = function () {
        $.pageId = this.mixins.id;
        this.mixins.header.text('监控');
        // 默认展示三方存管
        this.mixins.render('#tab2');
    }


});
