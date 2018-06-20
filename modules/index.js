define(function (require, exports, module) {

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
    $(document).on('click', '#footer a',
        function () {
            var idx = this.dataset.id,
                last_idx = localStorage.getItem('tab_id');
            if (idx === last_idx) return false;
            setActive($(this));
            if (idx < last_idx) {
                $(this).addClass('back');
            } else {
                $(this).removeClass('back');
            }
            $.router.load(`#${this.name}`);
            localStorage.setItem('tab_id', idx);
        });

    var todo = require('./todo.module'),
        message = require('./message.module'),
        recheck = require('./recheck.module'),
        monitor = require('./monitor.module'),
        toggleBar = function (b) {
            if (b)
                $('#footer').show();
            else
                $('#footer').hide();
        },
        setActive = function (target) {
            var active = 'active';
            $(`.${active}`).removeClass(active);
            target.addClass(active);
        };

    // 页面初始化
    $(document).on("pageInit", '.page', function (e, pageId, $page) {
        setActive($(`#footer a[name=${pageId}]`));
        switch (pageId) {
            case 'message':
                message.init();
                break;
            case 'recheck':
                recheck.init();
                break;
            case 'monitor':
                monitor.init();
                break;
            default:
                todo.init();
                break;
        }
    });

    // 消息操作
    $(document).on('click', '#message li a', message.popActions);

    // 复核
    $(document).on('click', '#re-reject', function () {
        $.alert('退回成功！')
    });
    $(document).on('click', '#re-agree', function () {
        $.alert('复核成功！')
    });

    // 监控
    $(document).on('click', '#monitor .buttons-tab a', monitor.toggle);


    // 初始化生效
    $.init();

});