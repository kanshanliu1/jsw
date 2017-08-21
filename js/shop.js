$(function () {
    // 点击减号事件
    $('.main').on('click', '.glyphicon-minus', function () {
        var keynum = +$(this).parent().parent().children().find('.keynum').val();
        if (keynum <= 0) {
            keynum == 0;
            return;
        };
        keynum--;
        $(this).parent().parent().children().find('.keynum').val(keynum);
        countprice();
    })
    // 点击加号事件
    $('.main').on('click', '.glyphicon-plus', function () {
        var keynum = +$(this).parent().parent().children().find('.keynum').val();
        if (keynum >= 99) {
            keynum == 99;
            return;
        };
        keynum++;
        $(this).parent().parent().children().find('.keynum').val(keynum);
        countprice();
    })
    // 从购物车删除按钮事件
    $('.main').on('click', '.delcar', function () {
        $(this).parent().parent().children().find('.keynum').val(0);
        countprice();
    });
    //键入数量改变事件
    $('.main').on('blur', '.keynum', function () {
        if ($(this).val() == '') {
            $(this).val(0);
        }
        countprice()
    })
    // 结算总价格事件
    function countprice() {
        var countkeynum = 0;
        var countprice = 0;
        $('.keynum').each(function (index, ) {
            countprice += +($(this).parents().siblings('.price').children('.serve-price').text()) * (+$(this).val());
            countkeynum += +$(this).val();
        })
        // console.log('商品总数量' + countkeynum);
        // console.log('总价格是' + countprice);
        $('.countmoney .price').text(countprice);
        $('.youhuimoney .price').text(countkeynum * 200);
        $('.actualmoney .price').text(countprice - (countkeynum * 200));
    }
})