$("nav ul li").hover(function () {
    $(this).children().toggleClass("on")
}, function () {
    $(this).children().toggleClass("on")
})
$("nav ul li").on('click', function () {
    $(this).children().addClass("on")
})
$(".search img").hover(function () {
    $("nav ul ").hide();
    $(".seek").show();
}, function () {
    $("nav ul ").show();
    $(".seek").hide();

});