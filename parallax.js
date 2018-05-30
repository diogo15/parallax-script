(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/*
====================
Parallax Images on Scroll 
====================   
*/

$( document ).ready(function() {

   var parallaxScroll = {
    init : function init(el, speed) {
        var scrollPosition = $(window).scrollTop();
        el.css('transform','translate3d(0px,'+(-1*((scrollPosition - el.offset().top)*speed))+'px, 0px)');
    }
    };

    $(window).bind('scroll', $.throttle( 200, handle_parallax ));    

    function handle_parallax(){
        parallaxScroll.init($('.image1'),.15);
        parallaxScroll.init($('.image2'),.08);
        parallaxScroll.init($('.image3'),.25);
        parallaxScroll.init($('.image4'),.2);
        parallaxScroll.init($('.image5'),.1);
        parallaxScroll.init($('.image6'),.1);
        parallaxScroll.init($('.image7'),.3);
    }

    handle_parallax();

});