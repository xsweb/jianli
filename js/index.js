/**
 * Created by tuoniao_king on 2016/10/8.
 */
$(function(){
    $('.menu a').on('click',function(){
        $(this).addClass('current').siblings().removeClass('current');
    })
})