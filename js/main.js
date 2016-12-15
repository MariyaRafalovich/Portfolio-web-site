$(window).load(function() {

/*-----------------------------------------------------------------------------------*/
/*   INIT SKROLLR
/*-----------------------------------------------------------------------------------*/
    var s = skrollr.init({
        forceHeight: false
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        skrollr.init().destroy();
    }
    if ($(window).width() < 1024) {
        skrollr.init().destroy();
    }
    $(window).on('resize', function() {
        if ($(window).width() < 1024) {
            skrollr.init().destroy();
        } else {
            var s = skrollr.init({
                forceHeight: false
            });
        }
    });
});

(function($) {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 4000);

/*-----------------------------------------------------------------------------------*/
/*   SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
    $.scrollTo = $.fn.scrollTo = function(o, t, n) {
        return this instanceof $ ? (n = $.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: "swing",
                duration: 800,
                complete: $.noop,
                step: $.noop
            }
        }, n), this.each(function() {
            var a = $(this);
            a.stop().animate({
                scrollLeft: isNaN(Number(o)) ? $(t).offset().left + n.gap.x : o,
                scrollTop: isNaN(Number(t)) ? $(t).offset().top + n.gap.y : t
            }, n.animation)
        })) : $.fn.scrollTo.apply($("html, body"), arguments)
    };
    $('.smoothscroll a').click(function(e) {
        $('html,body').scrollTo(this.hash, this.hash, {
            'axis': 'y'
        });
        e.preventDefault();
    });

})(jQuery);