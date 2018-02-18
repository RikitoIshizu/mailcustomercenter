$(function(){

  $(window).scroll(function() {
    var scroll_top = $(this).scrollTop(); //スクロール位置
    var offset = $("#sidemenu_show").offset(); //ヘッダー表示位置

    if ( scroll_top > offset.top ) {
      //alert("正常に作動しています。");
      $("#side_menu").fadeIn(1000);
    } else {
      $("#side_menu").fadeOut(1000);
    }

  })

});

// $(this).toggleClass('change_hamburger');
