/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Line-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-expand': '&#xe63d;',
		'i-expand2': '&#xe63e;',
		'i-retina': '&#xe63c;',
		'i-talk': '&#xe600;',
		'i-chat': '&#xe601;',
		'i-share': '&#xe602;',
		'i-link': '&#xe603;',
		'i-mobile': '&#xe604;',
		'i-monitor': '&#xe605;',
		'i-bell': '&#xe606;',
		'i-shopping': '&#xe607;',
		'i-import': '&#xe608;',
		'i-upload': '&#xe609;',
		'i-download': '&#xe60a;',
		'i-user-group': '&#xe60b;',
		'i-user': '&#xe60c;',
		'i-book': '&#xe60d;',
		'i-price-tag': '&#xe60e;',
		'i-bookmark': '&#xe60f;',
		'i-reload': '&#xe610;',
		'i-reload2': '&#xe611;',
		'i-camera': '&#xe612;',
		'i-camera-video': '&#xe613;',
		'i-checkmark': '&#xe614;',
		'i-X': '&#xe615;',
		'i-bars': '&#xe616;',
		'i-chevron-down': '&#xe617;',
		'i-chevron-left': '&#xe618;',
		'i-chevron-right': '&#xe619;',
		'i-chevron-up': '&#xe61a;',
		'i-cloud': '&#xe61b;',
		'i-gear': '&#xe61c;',
		'i-star-o': '&#xe61d;',
		'i-star': '&#xe61e;',
		'i-heart-o': '&#xe61f;',
		'i-heart': '&#xe620;',
		'i-home': '&#xe621;',
		'i-inbox': '&#xe622;',
		'i-location': '&#xe623;',
		'i-marker': '&#xe624;',
		'i-microphone': '&#xe625;',
		'i-volume-high': '&#xe626;',
		'i-volume-medium': '&#xe627;',
		'i-volume-low': '&#xe628;',
		'i-volume-mute': '&#xe629;',
		'i-previous': '&#xe62a;',
		'i-rewind': '&#xe62b;',
		'i-record': '&#xe62c;',
		'i-play': '&#xe62d;',
		'i-pause': '&#xe62e;',
		'i-stop': '&#xe62f;',
		'i-forward': '&#xe630;',
		'i-next': '&#xe631;',
		'i-paper': '&#xe632;',
		'i-folder': '&#xe633;',
		'i-calendar': '&#xe634;',
		'i-mail': '&#xe635;',
		'i-pin': '&#xe636;',
		'i-search': '&#xe637;',
		'i-paperclip': '&#xe638;',
		'i-stopwatch': '&#xe639;',
		'i-clock': '&#xe63a;',
		'i-trash': '&#xe63b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
