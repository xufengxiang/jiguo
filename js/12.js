$.ajax({
    url: "./json1/12.json",
    success: function (data) {
        console.log(data);
        var in_ = doT.template($("#in_ter").text());
        $('#list').html(in_(data));
        $("#list li").hover(function(){
                    $(this).find(".desc-box").animate({bottom:0},300);
                },function(){
                $(this).find(".desc-box").animate({bottom:-60},300);
                })
        
    }
});