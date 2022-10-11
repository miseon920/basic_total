$(function () {
    var num = $('.shoes .num');
    var shoes = $('.shoes .case ul');
    var s_height = $('.shoes .case').height();

    $(num).find('li').click(function () {
        var idx = $(this).index();
        //console.log(idx);
        var top_pos = s_height * idx;
        $(shoes).css({ top: - top_pos + "px" });

    });

    $('.face .face_box ul').click(function () {
        $(this).toggleClass('on');
    });
});