define(function (require, exports, module) {

    // 初始化
    $.init();

    // 路由配置
    $.config = {
        routerFilter: function ($link) {
            if ($link.is('.disable-router a')) {
                return false;
            }
            return true;
        }
    };

    // 导航事件
    $('.page-group').on('click', '.bar.bar-tab a',
        function () {
            var idx = this.dataset.id,
                last_idx = localStorage.getItem('tab_id');
            if (idx === last_idx) return false;
            var active = 'active';
            $(`.${active}`).removeClass(active);
            $(this).addClass(active);
            if (idx < last_idx) {
                $(this).addClass('back');
            } else {
                $(this).removeClass('back');
            }
            $.router.load(`#${this.name}`);
            localStorage.setItem('tab_id', idx);
        });

    var todo = require('./todo.module');
    todo.init();




});