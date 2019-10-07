$(function () {
    // 渲染报告精选内容
    $.ajax({
        url: "./../JSON/index.json",
        type: "get",
        success(arr) {
            content(arr.data);
            entire(arr.auto);
           

        }
    });

    function content(dot) {
        var str = '';
        for (var i = 0; i < dot.length; i++) {
            str += '<li>';
            str += '<img src="' + dot[i].img + '" class="sss">';
            str += '<div class="info">'
            str += '<p>' + dot[i].text + '</p>';
            str += '<div class="icon">';
            str += '<span class="susu">● 苏苏</span>';
            str += '<div class="praise">';
            str += '<span class="microcheiria">3</span>';
            str += '<span class="message">3</span>';
            str += '</div>';
            str += '</div>';
            str += '</div>'
            str += '</li>';
        }

        $('#sift').html(str);
    }
    //渲染首页发现酷玩页面 ，还有酷玩页面  最新

    function entire(cold) {
        var str = '';
        for (var k = 0; k < cold.length; k++) {
            str += '<li>';
            str += '<img src="' + cold[k].img + '">';
            str += '<div class="info">'
            str += '<p>' + cold[k].text + '</p>';
            str += '<p>' + cold[k].texts + '</p>';
            str += '<div class="icon">';
            str += '<span class="price">￥' + cold[k].price + '</span>';
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


    //    预加载内容代码 加载更多
    var arr = true;
    $('.playMore .jiazai').on('click', function () {
        if (arr) {
            $('.prestrain').slideDown(1500);
            $.ajax({
                url: "./../JSON/index.json",
                type: "get",
                beforeSend: function () {
                    $('.loading').show();
                    
                },
                success(arr) {
                    mores(arr.auto);

                },
                complete: function () {
                    $('.loading').hide();
                   

                }
            });

            function mores(mes) {
                var str = '';
                for (var k = 0; k < mes.length; k++) {
                    str += '<li>';
                    str += '<img src="' + mes[k].img + '">';
                    str += '<div class="info">'
                    str += '<p>' + mes[k].text + '</p>';
                    str += '<p>' + mes[k].texts + '</p>';
                    str += '<div class="icon">';
                    str += '<span class="price">￥' + mes[k].price + '</span>';
                    str += '<div class="praise">';
                    str += '<span class="microcheiria">3</span>';
                    str += '<span class="message">3</span>';
                    str += '</div>';
                    str += '</div>';
                    str += '</div>';
                    str += '</li>';
                }
                $('#more').html(str);
            }
            $('.jiazai p').text('向上收起');
            $('#xx').hide();
            $('#xs').show();



            arr = false;
        } else {

            $('.prestrain').slideUp(1500);
            $('.jiazai p').text('点击加载更多');
            $('#xx').show();
            $('#xs').hide();
            arr = true;
        }
    })




    // 图片轮播代码
    var $li_wid = $('.carousel_a li').innerWidth(); //获取li的宽度


    //手动
    function manual() {
        $('.rightarrows').on('click', function () {
            $('.carousel_a ul').stop().animate({
                "marginLeft": -$li_wid * 4 - 150
            }, 1000, function () {
                $('.carousel_a ul').css('marginLeft', '0px');
                $('.carousel_a li').slice(0, 4).appendTo($('.carousel_a ul'));
            })

        });

        var isrun = true;
        $('.leftarrows').on('click', function () {
            if (isrun) {
                isrun = false;
                $('.carousel_a ul').css('marginLeft', -$li_wid * 4 - 150);
                $('.carousel_a li').slice(-4).prependTo($('.carousel_a ul'));

                $('.carousel_a ul').stop().animate({
                    'marginLeft': '0px'
                }, 1000, function () {
                    isrun = true;
                });

            }


        });
    }
    manual();

    // 自动
    var time;

    function motion() {
        time = setInterval(function () {
            $('.carousel_a ul').animate({
                "marginLeft": -$li_wid * 4 - 155
            }, 1700, function () {
                $('.carousel_a ul').css('marginLeft', '0px');
                $('.carousel_a li').slice(0, 4).appendTo($('.carousel_a ul'));
            })
        }, 3000)

    }
    motion();

    //鼠标经过离开事件
    $('.carousel_a li').hover(function () {
        clearInterval(time);
    }, function () {
        motion();
    })

    $('.rightarrows').hover(function () {
        clearInterval(time);
    }, function () {
        motion();
    })
    $('.leftarrows').hover(function () {
        clearInterval(time);
    }, function () {
        motion();
    })




    // 首页报告精选鼠标移入特效
    $('#sift').on('mouseover', 'li', function () {
        $(this).toggleClass('lis');
    })
    $('#sift').on('mouseout', 'li', function () {
        $(this).removeClass('lis');
    })


    $('#kuwan').on('mouseover', 'li', function () {
        $(this).toggleClass('lis');
    })
    $('#kuwan').on('mouseout', 'li', function () {
        $(this).removeClass('lis');
    })

    $('.select_a').on('mouseover', 'li', function () {
        $(this).toggleClass('lis');
    })
    $('.select_a').on('mouseout', 'li', function () {
        $(this).removeClass('lis');
    })

    $('#more').on('mouseover', 'li', function () {
        $(this).toggleClass('lis');
    })
    $('#more').on('mouseout', 'li', function () {
        $(this).removeClass('lis');
    })

   


    // 返回顶部
    $(document).ready(function () {
        //首先将#btn隐藏
        $('.top').hide();
        //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 50) {
                    $(".top").fadeIn(200);
                } else {
                    $(".top").fadeOut(200);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $(".top").click(function () {
                $('body,html').animate({
                        scrollTop: 0
                    },
                    500);
                return false;
            });
        });
    });




})