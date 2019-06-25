// BackgroundImageCache
try {
	document.execCommand('BackgroundImageCache', false, true);
} catch(e) {}

// menu_update
function menu_update() {
	ww = $(window).width();
	if(ww >= 769) {

		$('#menuSp').hide();
		$('#menuSpOverlay').hide();

	} else {
		csize = $('html').height();
		$('#menuSpOverlay').css('height', csize + 'px');

	}
}
function slickArr() {
	slickArrPos = $(window).width();
	$('.lo4clmMod01Wrap .slick-prev, .lo4clmMod01Wrap .slick-next').css('left', slickArrPos + 'px');
}


jQuery(document).ready(function(){

	// viewport
	if(navigator.userAgent.indexOf('iPad') != -1){
		$('head').prepend('<meta name="viewport" content="width=1140, user-scalable=yes">\n');
	} else {
		$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=1">\n');
	}

	// inputWater
	$('.inputWater').each(function () {
		$tb = $(this);
		if ($tb.val() != this.title) {
			$tb.removeClass('inputWater');
		}
	});
	$('.inputWater').focus(function () {
		$tb = $(this);
		if ($tb.val() == this.title) {
			$tb.val('');
			$tb.removeClass('inputWater');
		}
	});
	$('.inputWater').blur(function () {
		$tb = $(this);
		if ($.trim($tb.val()) == '') {
			$tb.val(this.title);
			$tb.addClass('inputWater');
		}
	});

	// Scroll
	$("a.scroll").click(function(){
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

	// a Sp
	$("a").click(function() {
		$(this).css('text-decoration','none');
		$(this).addClass('.touch');
		$(this).children('img').css('opacity','1');
	});

	// clickable
	$('.clickable').click(function() {
		window.location = $(this).find('a').attr('href');
		return false;
	});
	$('.clickableBlank').click(function() {
		var link = $(this).find('a').attr('href');
		window.open(link, '_blank');
		return false;
	});

	// pageTop
    var topBtn = $("#pageTop");
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

	// menuSp
	$('#menuSp').hide();
	$('#menuSpOverlay').hide();
	$('#header .menuBtn01').click(function(){
		$('#menuSp').slideToggle('fast');
		csize = $('html').height();
		$('#menuSpOverlay').toggle().css('height', csize + 'px');
		return false;
	});
	$('#menuSp .close01 a').click(function(){
		$('#menuSp').slideUp('fast');
		$('#menuSpOverlay').hide();
		return false;
	});

	// lo4clmMod01
	$('.lo4clmMod01Wrap .lo4clmMod01').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
			variableWidth: true
	      }
	    }
	  ]
	});
	slickArr();

	// opensub
	$(".opensub").click(function(){
		window.open(this.href,"WindowName","width=590,height=520,resizable=yes,scrollbars=yes");
		return false;
	});

	// matchHeight
	$('.lo2clmMod01 .block01 .box > .vessel').matchHeight();

	// cfm
	if($('.contactMod01').hasClass('cfm')) {
		$('.contactMod01 dl:lt(3)').wrapAll("<div class='block01'></div>");
		$('.contactMod01 dl:eq(3)').wrap("<div class='block02'></div>");
	    $('.contactMod01 dl dt:eq(0)').each(function(){
	        var txt = $(this).html();
	        $(this).html(txt.replace(/company/g,'会社名（法人の方はご入力をお願いします）'));
	    });
	    $('.contactMod01 dl dt:eq(1)').each(function(){
	        var txt = $(this).html();
	        $(this).html(txt.replace(/name/g,'お名前'));
	    });
	    $('.contactMod01 dl dt:eq(2)').each(function(){
	        var txt = $(this).html();
	        $(this).html(txt.replace(/email/g,'ご連絡先Eメールアドレス'));
	    });
	    $('.contactMod01 dl dt:eq(3)').each(function(){
	        var txt = $(this).html();
	        $(this).html(txt.replace(/message/g,'お問い合わせ内容'));
	    });
	}

});
var timer = false;
var window_default_w = jQuery(window).width();
$(window).on("resize", function() {
	if (timer !== false) {
		clearTimeout(timer);
	}
	timer = setTimeout(function() {

		var window_w = $(window).width();
		if(window_w!=window_default_w){

			menu_update();
			slickArr();

		}
	}, 200);
});
