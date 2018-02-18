$(function($) {
  $(document).ready(function() {
    $('.btn').click(function(){ //クリックしたら
      $('.drawr').animate({height:'toggle'}); //animateで表示・非表示
      $(this).toggleClass('change_hamburger'); //toggleでクラス追加・削除
    });
  });
});
