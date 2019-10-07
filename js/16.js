var num = 60;
$('.span').on('click', function () {
    if (num == 0) {
        $(".span").text("获取验证码");
        num = 60;
    } else {
        setInterval(function () {
            num--;
            $(".span").text(num + "秒后重新发送");
        }, 1000)
    }
})


$('.btn').on('click', function () {
    if ($('.imgs').val() == '' && $('.code').val() == '') {
        alert('验证码不能为空');
        return false;
    } else if ($('.pwd').val() != $(".pwd2").val()) {
        alert('密码不一样，请重新填写');
        return false;
    } else if ($('.user').val() < 8 && $('.pwd').val() < 8) {
        alert('用户名和密码均不能小于8位数');
        return false;
    }
    $.ajax({
        url: 'https://www.apiopen.top/createUser',
        data: {
            key: '00d91e8e0cca2b76f515926a36db68f5',
            phone: $('.phone').val(),
            passwd: $('.pwd').val()
        },
        success: function (data) {
            alert(data.msg);
        }
    })
});