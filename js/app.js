// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

if($(window).scrollTop() >= 20) {
	$(".top-bar-container").addClass("top-bar-shadow");
}
else
{
	$(".top-bar-container").removeClass("top-bar-shadow");
}

$(window).scroll(function() {
	if($(window).scrollTop() >= 20) {
		$(".top-bar-container").addClass("top-bar-shadow");
	}
	else
	{
		$(".top-bar-container").removeClass("top-bar-shadow");
	}
});

//courtesy of css-tricks
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top - 75 //offset is minus 75px because of header bar
	    }, 1000);
	    return false;
	  }
	}
});