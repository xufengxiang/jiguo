$(function ($) {
//    渲染酷玩页面，最热

    $.ajax({
        url: "./../JSON/hot.json",
        type: "get",
        success(arr) {
            console.log(arr.auto);
            entire(arr.auto);
        

        }
    });

    function entire(cold){
        var str='';
        for (var k = 0; k <cold.length; k++) {
            str += '<li>';
            str += '<img src="' + cold[k].img + '">';
            str += '<div class="info">'
            str += '<p>' + cold[k].text + '</p>';
            str += '<p>' + cold[k].texts + '</p>';
            str += '<div class="icon">';
            str += '<span class="price">￥'+cold[k].price+'</span>';
            str += '<div class="praise">';
            str += '<span class="microcheiria">3</span>';
            str += '<span class="message">3</span>';
            str += '</div>';
            str += '</div>';
            str += '</div>';
            str += '</li>';
        }
        $('#kuwan').html(str);
    }      

    
    // 酷玩页面最热动态效果
    $('#kuwan').on('mouseover','li',function(){
        $(this).toggleClass('lis');
    })
    $('#kuwan').on('mouseout','li',function(){
        $(this).removeClass('lis');
    })







})