define(function (require, exports, module) {

    this.mixins = {
        id: 'recheck',
        header: $(`#recheck header .title`),
        el: $(`#recheck .content ul`),
        ser: require('../services/recheck.service'),
        render: function () {
            this.header.text('复核');
            $.showPreloader();
            var data = this.ser.getRecheck(),
                tpl = '<li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">付款账户类型</div><div class="item-input"><input readonly type="text" placeholder="类型"></div></div></div></li><li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">付款账户信息</div><div class="item-input"><input readonly type="text" placeholder="经纪_普通经纪"></div></div></div></li><li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">收款账户类型</div><div class="item-input"><input readonly type="text" placeholder="单账户"></div></div></div></li><li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">收款账户信息</div><div class="item-input"><input readonly type="text" placeholder="0120229838383/平安证券"></div></div></div></li><li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">付款是否报备</div><div class="item-input"><input readonly type="text" placeholder="是"></div></div></div></li><li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">收款是否报备</div><div class="item-input"><input readonly type="text" placeholder="否"></div></div></div></li><li><div class="item-content"><div class="item-media"><i class="icon icon-form-name"></i></div><div class="item-inner"><div class="item-title label">支付方向</div><div class="item-input"><input readonly type="text" placeholder="双向"></div></div></div></li><li class="align-top"><div class="item-content"><div class="item-media"><i class="icon icon-form-comment"></i></div><div class="item-inner"><div class="item-title label">备注</div><div class="item-input"><textarea placeholder="请输入备注"></textarea></div></div></div></li>';
            this.el.empty()
                .append(tpl);
            setTimeout(function () {
                $.hidePreloader();
            }, 100);
        }
    }

    function back() {
        $.router.back('#todo', true);
    }

    exports.init = function () {
        $.pageId = this.mixins.id;
        this.mixins.header.parent().on('click', '.back', back);
        this.mixins.render();
    }

});