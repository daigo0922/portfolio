const mySwiper = new Swiper('.p-swiper__', { //名前を変える
    loop: true, //最後→最初に戻るループ再生を有効に
    autoplay: {
        delay: 3000, //何秒ごとにスライドを動かすか
        stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
        disableOnInteraction: true, //ユーザーの操作時に止める
        reverseDirection: false, //自動再生を逆向きにする
    },
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    centeredSlides: true, //中央寄せ
    pagination: {
        el: ".swiper-pagination", //paginationのclass
        clickable: true, //クリックでの切り替えを有効に

        //type: "progressbar" //paginationのタイプ (※2)
    },
    navigation: {
        prevEl: ".swiper-button-prev", //戻るボタンのclass
        nextEl: ".swiper-button-next" //進むボタンのclass
    },
    scrollbar: { //スクロールバーを表示したいとき
        el: ".swiper-scrollbar", //スクロールバーのclass
        hide: true, //操作時のときのみ表示
        draggable: true //スクロールバーを直接表示できるようにする
    },
    allowTouchMove: false, // スワイプで表示の切り替えを無効に
    slidesPerView: 1, // 一度に表示する枚数
    // breakpoints: { //画面幅による表示枚数と余白の指定
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //     },
    //     375: {
    //         slidesPerView: 1.2,
    //         spaceBetween: 15,
    //     },
    //     600: {
    //         slidesPerView: 1.2,
    //         spaceBetween: 15,
    //     },
    //     1025: {
    //         slidesPerView: 1.2,
    //         spaceBetween: 20,
    //     },
    //     1500: {
    //         slidesPerView: 1.2,
    //         spaceBetween: 20,
    //     },
    // }
});
const mySwiper2 = new Swiper('.p-swiper__staff', { //名前を変える
    loop: true, //最後→最初に戻るループ再生を有効に
    autoplay: {
        delay: 3000, //何秒ごとにスライドを動かすか
        stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
        disableOnInteraction: true, //ユーザーの操作時に止める
        reverseDirection: false, //自動再生を逆向きにする
    },
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    centeredSlides: true, //中央寄せ
    pagination: {
        el: ".swiper-pagination", //paginationのclass
        clickable: true, //クリックでの切り替えを有効に

        //type: "progressbar" //paginationのタイプ (※2)
    },
    navigation: {
        prevEl: ".swiper-button-prev", //戻るボタンのclass
        nextEl: ".swiper-button-next" //進むボタンのclass
    },
    scrollbar: { //スクロールバーを表示したいとき
        el: ".swiper-scrollbar", //スクロールバーのclass
        hide: true, //操作時のときのみ表示
        draggable: true //スクロールバーを直接表示できるようにする
    },
    allowTouchMove: false, // スワイプで表示の切り替えを無効に
    slidesPerView: 1.825,
    spaceBetween: 10,
    breakpoints: { //画面幅による表示枚数と余白の指定
        
        765: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        
    }
});

/* ===================================================
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
    fadeEffect: {
        crossFade: true
    },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullet：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

// $(document).ready(function() {
//     // クリックした要素にクラスを付与するイベントを登録
//     $('.p-header__nav-list').click(function() {
//       $(this).addClass('is-active');
//     });
// });

new WOW().init();

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
    // スムーススクロールの処理を書く
    
    let speed = 500;
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".p-header").innerHeight();
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // ページのトップを基準にターゲットの位置を取得
    let position = 0;
    if ( id != '#') {
      position = jQuery(id).offset().top - header;
    }
  
    jQuery("html, body").animate({
        scrollTop: position
     },
     speed
     );
     return false;
  });

  jQuery(window).on('scroll', function() {
    if (100 < jQuery(this).scrollTop()) {
      jQuery('.to-top').addClass('is-show');
    } else {
      jQuery('.to-top').removeClass('is-show');
    }
  });

  $(document).ready(function () {
    $(".drawer").drawer();
    $(".drawer-menu-item").on("click", function () {
      $(".drawer").drawer("close");
    });
  });