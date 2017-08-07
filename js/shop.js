$(function () {
    var num = 0;
    $('.addbuycar').click(function () {
        if(num==0) return ;
        $(this).css('backgroundColor', '#F81313');
        var countmoney = 1 * $(this).parent().find('.price').children('.serve-price').text();
        // alert( countmoney);
        countmoney *= num;
        console.log(countmoney);
        // console.log(countmoney);
        // console.log(typeof(countmoney))
        $('.countmoney .price').html(countmoney);
    });
    $('.l-content').on('click', '.numedit', function () {
        if ($(this).hasClass('minus')) {
            if (num <= 0) num = 0;
            else num--;
        } else if ($(this).hasClass('plus')) {
            if (num >= 99) num = 99;
            else num++;
        }
        $(this).parent().find('.num').text(num);
    });
})