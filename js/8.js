$('.bottom_bf .zq').hide();
$('.bottom_bf .btn_up').hide();
$.ajax({
    url: "./../json1/8.json",
    success: function (data) {
        console.log(data);
        var in_ = doT.template($("#in_ter").text());
        $('#list').html(in_(data));
        $('#list li:gt(15)').hide();
        $("#list li").hover(function(){
            $(this).find(".desc-box").animate({bottom:0},300);
        },function(){
        $(this).find(".desc-box").animate({bottom:-60},300);
        })
        $("#list li").on('click',function(){
            window.open("./../shiyong.html");  
        })
    }
});
$('.bottom_bf .bottom_btn').on('click', function () {
    setTimeout(function(){
        $(' #list li:gt(15)').show();
        $('.bottom_bf .zq').hide();
    $('.bottom_bf .btn_up').hide();
    $('.bottom_bf .bottom_btn').show();
        //业务逻辑
     },800)
    $('.bottom_bf .zq').show();
    $('.bottom_bf .btn_up').show();
    $('.bottom_bf .bottom_btn').hide();
    // $(' #list li:gt(15)').show();
});
$('.bottom_bf .btn_up').on('click', function () {
    $('.bottom_bf .zq').hide();
    $('.bottom_bf .btn_up').hide();
    $('.bottom_bf .bottom_btn').show();
    $('.#list li:gt(15)').hide();
});
