define(function (require, exports, module) {

    this.mixins = {
        name: 'recheck',
        header: $(`#recheck header`),
        el: $(`#recheck .content`),
        ser: require('../services/recheck.service'),
        render: function () {
            var data = this.ser.getRecheck(),
                tpl = '';
            this.el.empty()
                .append(tpl);
        }
    }

    exports.init = function () {
        this.mixins.header.on('click', '.back',
            function () {
                if (window.isEx)
                    $.router.load('#todo', true)
                else
                    $.router.back();
            })
        // this.mixins.render();
    }


});