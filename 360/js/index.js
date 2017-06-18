/**
 * Created by pc on 2017/5/25.
 */
$(function(){
    $('#dowebok').fullpage({
        //设置每一屏的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //滚到某一屏
        afterLoad:function(link,index){
          $('.section').removeClass('current');
            setTimeout(function(){
                //让动画延迟100ms
                $('.section').eq(index-1).addClass('current');
            },100);

        }
    });
});