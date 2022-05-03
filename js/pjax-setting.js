$(function() {
    $.pjax({
        area: 'html'
    });
    $(document).on('pjax:render', function() {
        $('body').attr({
            'class': 'fadeIn'
        });
    });
});