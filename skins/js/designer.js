$(document).ready(function () {
    var reBa = $('#CCC-topic-Box-replyBox-container-textArea-Box-BlockL').height();
    var reBb = $('#CCC-topic-Box-replyBox-container-textArea-Box-BlockR').height();
    if (reBa > reBb) {
        $('#CCC-topic-Box-replyBox-container-textArea-Box-BlockR').css("height", reBa);
    }
    else {
        $('#CCC-topic-Box-replyBox-container-textArea-Box-BlockL').css("height", reBb);
    }

    $(window).scroll(function () {
        var aRx = $('.CCC-topic-Box-replyBox-container-textArea').offset().top + 85;
        var bRx = $('#CCC-topic-Zmode-replyBoxL').offset().top + 85;
        var sx = $(document).scrollTop() + $(window).height();
        if (sx < aRx) {
            $('#CCC-topic-Box-replyBox-container-textArea-replyAnchor').css({
                "margin-top": 0,
            });
        }
        else if (sx > bRx) {
            $('#CCC-topic-Box-replyBox-container-textArea-replyAnchor').css({
                "margin-top" : bRx - aRx + 85,
            });
        }
        else {
            $('#CCC-topic-Box-replyBox-container-textArea-replyAnchor').stop(true, true);
            $('#CCC-topic-Box-replyBox-container-textArea-replyAnchor').animate({
                marginTop : sx - aRx - 85
            });
        }
    });
});