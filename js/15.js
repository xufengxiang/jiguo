$('.bottom_bf .zq').hide();
$('.bottom_bf .btn_up').hide();

$.ajax({
    url:"./../json1/15.json",
    success:function(data) {
        console.log(data);
        var in_= doT.template($("#in_ter").text());
        $('#list').html(in_(data));
        $('.reportCenter #list li:gt(4)').hide();
        // $('.bottom_bf .bottom_btn').on('click',function(){
        //     $('.bottom_bf .zq').show();
        //     $('.bottom_bf .btn_up').show();
        //     $('.bottom_bf .bottom_btn').hide();
        // });

    }
});

$('.bottom_bf .bottom_btn').on('click',function(){
    setTimeout(function(){
        $('.reportCenter #list li:gt(4)').show();
        $('.bottom_bf .zq').hide();
    $('.bottom_bf .btn_up').hide();
    $('.bottom_bf .bottom_btn').show();
     },800)
    $('.bottom_bf .zq').show();
    $('.bottom_bf .btn_up').show();
    $('.bottom_bf .bottom_btn').hide();
//     $('.reportCenter #list li:gt(4)').show();
});
$('.bottom_bf .btn_up').on('click',function(){
    $('.bottom_bf .zq').hide();
    $('.bottom_bf .btn_up').hide();
    $('.bottom_bf .bottom_btn').show();
    $('.reportCenter #list li:gt(4)').hide();
});