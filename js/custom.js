$('.tit .btn').click(function () {
  // $('.nav').css({display:"block"});
  // $('.nav').show();
  // $('.nav').slideDown();
  // $('.nav').toggle();
  // $('.nav').fadeToggle();
  $('.nav').slideToggle();
  $(this).toggleClass('on');
});


// banner
// $(document).ready(function () {
  $('.ban').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //갤러리
  $('.gallery_img').slick({
    arrows:false,
    // autoplaySpeed: 2000,
  });

  $('.gallery_btn .play').click(function(){
    $('.gallery_img').slick('slickPlay');

  })
  $('.gallery_btn .pause').click(function(){
    $('.gallery_img').slick('slickPause');
  })
  $('.gallery_btn .prev').click(function(){
    $('.gallery_img').slick('slickPrev');
  })
  $('.gallery_btn .next').click(function(){
    $('.gallery_img').slick('slickNext');
  })




// });

//탭메뉴

let tab_list=$('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active>ul').show();

// $().click(function(e){
//   e.preventDefault();
// });


// $('.tab_menu>ul>li>a').click(function(e){
//   e.preventDefault();
//   var $this =$(this);
//   $this.next().show();
//   //.next 바로 아래의 요소(아래 동생)
// });


$('.tab_menu>ul>li>a').click(function(e){
  e.preventDefault();
  var $this =$(this);
  // $this.next().show();
  //.next 바로 아래의 요소(아래 동생)
  // .parent() --> 클릭한것의 부모
  //.siblings() --> 나를 제외한 형제들
  // $this.parent('li').addClass('active');
  // $this.parent('li').siblings('li').removeClass('active');
  // $this.parent('li').siblings('li').find('ul').hide();


  $this.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
  // $this.parent('li').addClass('active');
  // $this.parent('li').siblings('li').removeClass('active');
  // $this.parent('li').siblings('li').find('ul').hide();
});

// layer popup

$('.layer').click(function(e){
  e.preventDefault();
  $('#layer').fadeIn();
});

$('#layer .close').click(function(ev){
  ev.preventDefault();
  $('#layer').fadeOut();
})


// 윈도우 팝업
$('.window').click(function(event){
  event.preventDefault();
  window.open("popup.html", "popup-win", "width=900,height=590, left=100, top=200");

});

// light gallery

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});
