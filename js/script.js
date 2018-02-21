jQuery(document).ready(function($) {

  // モバイルメニュー
  $('.js-init-mobmenu').on('click', function() {
    if($('.js-mobmenu').hasClass('mob-hide')) {
      $('.js-mobmenu').removeClass('mob-hide');
      
    } else {
      $('.js-mobmenu').addClass('mob-hide');
    }
  });
  
  
  // ヘッダーメニュー表示
  $('#js-init-glnav>li').on({
    'mouseenter' : function() {
      var target = $(this);
      hedtimer = setTimeout(function() {
        target.children('.menu-depth-1').slideDown();
      }, 100);
    },
    'mouseleave' : function() {
      if($('.js-mobmenu').hasClass('mob-hide') && !$(this).hasClass('current')) {
        clearTimeout(hedtimer);
        $(this).children('.menu-depth-1').slideUp();
      }
    }
  });
  
  // アコーディオンレイスト
  $('.js-init-toggle').on('click', function() {
    $(this).next('.js-slide-toggle').slideToggle();
  });
  
  //mobileヘッダーメニュー表示
  $(function(){
    $('.sub_menu').hide();
    $('.main_menu').click(function(){
      $('ul.sub_menu').slideUp();
      if($('+ul.sub_menu',this).css('display') == 'none'){
        $('+ul.sub_menu',this).slideDown();
      }
    });
  });
  
});
