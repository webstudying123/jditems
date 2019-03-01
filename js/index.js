(function(window){
//轮播图
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
//轮播图的滚动
var header =document.getElementById('header');
     var sliderh=document.getElementById('slider').offsetHeight;
     window.addEventListener('scroll',function(){
        //获取页面滚出去的距离
        var dis=document.documentElement.scrollTop ||this.document.body.scrollTop;
        var opacity=dis/sliderh;
        // console.log(opacity);
        if(dis<sliderh){
            header.style.backgroundColor='rgba(222, 24, 27,'+opacity+')';
        }else {
            header.style.backgroundColor='rgb(222, 24, 27)';
        }
     })
//倒计时
   var time=2*60*60;
   var ilist=document.querySelectorAll('#main .time i');
//    console.log(ilist);
   setInterval(function(){
    time--;
    var hour=Math.floor(time/3600);
    var minute=Math.floor(time%3600/60);
    var second=time%60;

   ilist[0].innerHTML=Math.floor(hour/10);
   ilist[1].innerHTML=hour%10;

   ilist[3].innerHTML=Math.floor(minute/10);
   ilist[4].innerHTML=minute%10;

   ilist[6].innerHTML=Math.floor(second/10);
   ilist[7].innerHTML=second%10;



   },1000)
       

})(window)