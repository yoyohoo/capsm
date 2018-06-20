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
            setActive($(this));
            $.router.load(`#${this.name}`);
        });

    var todo = require('./todo.module'),
        message = require('./message.module'),
        recheck = require('./recheck.module'),
        monitor = require('./monitor.module'),
        toggleBar = function (b) {
            if (b)
                $('#footer').show();
            else
                $('#footer').css('display', 'none');
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
                toggleBar(true)
                break;
            case 'recheck':
                toggleBar(false)
                recheck.init();
                break;
            case 'monitor':
                toggleBar(true)
                monitor.init();
                break;
            default:
                toggleBar(true)
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

    // 设置
    $(document).on('click', '#settings .label-switch', function () {
        var msg = $(this).find('input')[0].checked ? '关闭通知' : '开启通知';
        $.toast(msg);
    });

    // 监控
    $(document).on('click', '#monitor .buttons-tab a', monitor.toggle);


    // 初始化生效
    $.init();

});