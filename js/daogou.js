$(function($){

    $.ajax({
        url: "./../JSON/index.json",
        type: "get",
        success(arr) {
            console.log(arr.databases);
            shopping(arr.database);
            hottest(arr.databases);
            $(".select_a .select_b").on('click',function(){
                window.open("./../000.html");  
            })
        }
    });


     // 渲染导购页面里面 最新
    function shopping(spng) {
    var str ='';
    for(var j = 0; j < spng.length;j++){
        str+='<li class="select_b">';
        str+='<div class="dg1"></div>';
        str+='<div class="dg2"></div>';
        str+='<div class="dg3">';
        str+='<img src="'+spng[j].img+'">';
        str+='<div class="dg5">';
        str+='<p class="name">'+spng[j].text+'</p>';
        str+='<p class="name1">';
        str+='<span class="microcheiria">3</span>';
        str+='<span class="message">3</span>'
        str+='</p>';
        str+='</div>';
        str+='</div>';
        str+='</li>';
    }
    $('.select_a').html(str);
    
    }

    // 渲染 导购里面 最热 页面

    function hottest(hst) {
        var str ='';
        for(var j = 0; j < hst.length;j++){
            str+='<li class="select_b">';
            str+='<div class="dg1"></div>';
            str+='<div class="dg2"></div>';
            str+='<div class="dg3">';
            str+='<img src="'+hst[j].img+'">';
            str+='<div class="dg5">';
            str+='<p class="name">'+hst[j].text+'</p>';
            str+='<p class="name1">';
            str+='<span class="microcheiria">3</span>';
            str+='<span class="message">3</span>'
            str+='</p>';
            str+='</div>';
            str+='</div>';
            str+='</li>';
        }
        $('.select_c').html(str);
        
        }
})