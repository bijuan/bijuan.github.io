/**
 * Created by pc on 2017/5/25.
 */
$(function(){
    $('#dowebok').fullpage({
        //����ÿһ������ɫ
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //����ĳһ��
        afterLoad:function(link,index){
          $('.section').removeClass('current');
            setTimeout(function(){
                //�ö����ӳ�100ms
                $('.section').eq(index-1).addClass('current');
            },100);

        }
    });
});