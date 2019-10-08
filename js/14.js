$('.bottom_bf .zq').hide();
$('.bottom_bf .btn_up').hide();

var time = null;

$.ajax({
    url: "./json1/14.json",
    success: function (data) {
        console.log(data);
        var in_ = doT.template($("#in_ter").text());
        $('#list').html(in_(data));
    }
});

$('.bottom_bf .bottom_btn').on('click', function () {
    $('.bottom_bf .zq').show();
    $('.bottom_bf .btn_up').show();
    $('.bottom_bf .bottom_btn').hide();
    $('.reportCenter #list li:gt(4)').show();
});
$('.bottom_bf .btn_up').on('click', function () {
    $('.bottom_bf .zq').hide();
    $('.bottom_bf .btn_up').hide();
    $('.bottom_bf .bottom_btn').show();
    $('.reportCenter #list li:gt(4)').hide();
});