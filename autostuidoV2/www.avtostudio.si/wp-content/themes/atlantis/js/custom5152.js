jQuery(document).ready(function(){
	
	/*Add Class Js to html*/
	jQuery('html').addClass('js');	
	
	toggle_menu();
	
	topcart_effects();
	
	topsearch_effects();
	
	show_socialicon();
	
	show_lightbox();
	
	show_carousel();
	
	form_styling();
	
	fullwidthwrap();
	
	appear_effect();
	
	button_scrolltop();
	
	login_process();
	
	register_process();
	
	change_pass();
	
	addplusminus();
	
	prod_quickview();
	
	prod_infinitescroll();
	
	mobile_double_tap_to_go();
});

jQuery(window).load(function(){
	header_effect();
	slider_init();
	isotopeinit();
	parallax_effect();
});

jQuery(window).resize(function(){
	isotopeinit();
	fullwidthwrap();
	jQuery('ul.topnav').css('top','');
});

function isMobile(){
	"use strict";
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
	return onMobile;
}

function header_effect(){
	"use strict";
	/*=================================== TOPSEARCH ==============================*/
	var headertext = jQuery('#headertext');
	var outerheader = jQuery('#outerheader');
	var outerheaderw = jQuery('#outerheaderwrapper');
	var outerslider = jQuery('#outerslider');
	var wpadminbar = jQuery('#wpadminbar');
	
	var headertextheight = headertext.height();
	var headertextinnerh = headertext.innerHeight();
	var adminbarinnerh = wpadminbar.innerHeight();
	var outerheaderinnerh = outerheader.innerHeight();
	var outerheadertop = outerheader.css("top");
	var windowheight = jQuery(window).height();
	var headertextoffset = headertext.offset().top;
	var outerheaderoffset = outerheader.offset().top;
	
	/* Deprecated in 1.1.5
	if(jQuery('body').hasClass('nvrlayout3')){
		var outersliderv3 = jQuery('.nvrlayout3 #outerslider');
		var outersliderinnerh = outersliderv3.innerHeight();
		var outersliderheight = outersliderinnerh+adminbarinnerh;
		
		if(outersliderheight>windowheight){
			outersliderheight = windowheight-adminbarinnerh;
		}
		outersliderv3.css({
			'height' : outersliderheight
		});
	}
	*/
	
	if(jQuery('body').hasClass('nvrlayout9')!=true){
		outerheaderw.css('height',outerheaderinnerh);
	}
	
	headertext.css('height', headertextheight);
	jQuery(window).scroll(function(evt){
		var scrolltop = jQuery(document).scrollTop();
		
		if(jQuery('body').hasClass('nvrlayout4')){
			if(scrolltop>headertextinnerh){
				headertext.addClass("sticky");
				outerheader.addClass("sticky");
				outerslider.addClass("sticky");
			}else{
				headertext.removeClass("sticky");
				outerheader.removeClass("sticky");
				outerslider.removeClass("sticky");
			}
		}else{
			
			if(scrolltop>(outerheaderoffset)){
				outerheader.addClass("sticky");
				var postopoffset = 0;
			}else{
				outerheader.removeClass("sticky");
				var postopoffset = outerheaderoffset;
			}
			if(jQuery('nav.gn-menu-wrapper').hasClass('gn-open-part') || jQuery('nav.gn-menu-wrapper').hasClass('gn-open-all')){
				var postop = postopoffset + outerheaderinnerh;
				jQuery('nav.gn-menu-wrapper').css('top', postop);
			}
		}
	});
}

function parallax_effect(){
	if(!isMobile()){
		jQuery('.parallax, .parallax-container').each(function(){
			jQuery(this).parallax("30%", 0.1);
		});
	}
}

function appear_effect(){
	"use strict";
	//Elements Fading
	jQuery('.element_from_top').each(function () {
		jQuery(this).appear(function() {
		  jQuery(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});	
	});
	
	jQuery('.element_from_bottom').each(function () {
		jQuery(this).appear(function() {
		  jQuery(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});	
	});
	
	
	jQuery('.element_from_left').each(function () {
		jQuery(this).appear(function() {
		  jQuery(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});	
	});
	
	
	jQuery('.element_from_right').each(function () {
		jQuery(this).appear(function() {
		  jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});
		
	jQuery('.element_fade_in').each(function () {
		jQuery(this).appear(function() {
		  jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});
}

/* !Fullwidth wrap for shortcodes & templates */
function fullwidthwrap(){
	"use strict";
	var thebody = jQuery('body.novaro');
	var fullww = jQuery(".nvr-fullwidthwrap");
	if( fullww.length && jQuery(".nosidebar").length ){
		fullww.each(function(){
			var getfullwidthval = getfullwidthvalue(this);
			var $_this = jQuery(this);
			
			var outerwidth = getfullwidthval.width;
			var $offset_fs = getfullwidthval.offset_fs;
			$_this.css({
				width: outerwidth,
				"margin-left": -$offset_fs
			});
			
		});
	};
	
	var stripecontainer = jQuery(".stripecontainer");
	var thepadding = 0;
	if(thebody.hasClass('nvr1100more')){
		thepadding = 16;
	}else{
		thepadding = 11;
	}
	if( stripecontainer.length ){
		stripecontainer.each(function(){
			var getfullwidthval = getfullwidthvalue(this);
			var $_this = jQuery(this);
			
			var outerwidth = getfullwidthval.width;
			var $offset_fs = getfullwidthval.offset_fs + thepadding;
			if($_this.hasClass('fullwidth')){
				$_this.css({
					width: outerwidth,
					"padding-left" : 0,
					"padding-right": 0,
					"margin-left": -$offset_fs
				});
			}else{
				$_this.css({
					width: '100%',
					"padding-left" : $offset_fs,
					"padding-right": $offset_fs,
					"margin-left": -$offset_fs
				});
			}
			
		});
	};
};

function getfullwidthvalue(elem){
	"use strict";
	
	var $_this = jQuery( elem ),
	offset_wrap = $_this.position().left;

	var $offset_fs;
	var $body = jQuery('body');
	var $scrollBar = 0;
	var $paddingvc = 0;
	
	var containerwidth = jQuery('#outermain .container').width();
	var outerwidth = (jQuery('#outercontainer').width() - (jQuery('#outercontainer').width()%2));

	var paddingcol = parseInt(jQuery('.columns').css('padding-left'));

	if( jQuery('body').hasClass('boxed') ){
		$offset_fs = ((parseInt(outerwidth) - parseInt(containerwidth)) / 2);
	} else {
			var $windowWidth = (jQuery(window).width() <= parseInt(containerwidth)) ? parseInt(containerwidth) : jQuery(window).width();
			$offset_fs = Math.ceil( ((outerwidth + $scrollBar + $paddingvc - parseInt(containerwidth)) / 2) );
	};
	
	var returnval = {
		"width" : outerwidth,
		"offset_fs" : $offset_fs
	};
	
	return returnval;
}

function toggle_menu(){
	"use strict";
	
	var outerheader = jQuery('#outerheader');
	var outermenu = jQuery("#outermenu");
	
	jQuery('a.nav-toggle').click(function(evt){

		var outerheaderinnerh = outerheader.innerHeight();
		var outermenuinnerh = outermenu.innerHeight();
		var topnavpos = outermenuinnerh ;
		
		jQuery('.topnav').css('top', topnavpos);
		jQuery('.topnav').slideToggle('slow',function(){
			if(isMobile()){
				if(jQuery('.topnav').css('display')=='block'){
					jQuery('video.video').addClass('hidden');
				}else{
					jQuery('video.video').removeClass('hidden');
				}
			}
		});
		
	});
	
	var slidermenu = jQuery("#slidermenutitle");
	var slidercont = slidermenu.parent("#slidermenucontainer");
	slidermenu.click(function(evt){
		evt.preventDefault();
		slidercont.toggleClass("openmenu");
		outerheader.toggleClass("openmenu");
	});
}

function mobile_double_tap_to_go() {
			function_selector = 'ul.topnav li:has(.mega_dropdown) > .item_link, ul.topnav li:has(.post_details) > .processed_image';
			jQuery( function_selector ).unbind();
			if( /iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test( navigator.userAgent.toLowerCase() ) ) 
			{
				var clicked_item = false;
				jQuery( function_selector ).on( 'click', function( index )
				{
					if ( clicked_item != this) {
						index.preventDefault();
						jQuery( this ).parent().addClass('keep_open');
						clicked_item = this;
					}
				});
			}
		}

function show_socialicon(){
	"use strict";
	/*=================================== SOCIAL ICON ===================================*/
	var socialicons = jQuery('ul.sn li a');
	socialicons.hover(
		function() {
			var iconimg = jQuery(this).children();
			iconimg.stop(true,true);
			iconimg.fadeOut(500);
		},
		function() {
			var iconimg = jQuery(this).children();
			iconimg.stop(true,true);
			iconimg.fadeIn(500);
		}
	);
	
	if (window.devicePixelRatio > 1) {

		socialicons.each(function(i) {
			var lowres = jQuery(this).css('background-image');
			var highres = lowres.replace(".png", "@2x.png");
			jQuery(this).css('background-image', highres);
		});
	}
}

function show_lightbox(){
	"use strict";
	/*=================================== PRETTYPHOTO ===================================*/
	jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).data('rel'));});
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',gallery_markup:'',slideshow:2000,social_tools:''});
}

function show_carousel(){
	"use strict";
	var ctype = {
		"pcarousel" : {
			"index" : '.postcarousel .flexslider-carousel',
			"minItems" : 1,
			"maxItems" : 5,
			"itemWidth" : 298
		}
	}
	
	for(var key in ctype){
		var carousel = ctype[key];
		jQuery(carousel.index).flexslider({
			animation: "slide",
			animationLoop: true,
			directionNav: true,
			controlNav: false,
			prevText : '',
			nextText : '',
			itemWidth: carousel.itemWidth,
			itemMargin: 0,
			minItems: carousel.minItems,
			maxItems: carousel.maxItems
		 });
	}
}

function slider_init(){
	"use strict";
	var slidereffect 			= interfeis_var.slidereffect;
    var slider_interval 		= interfeis_var.slider_interval;
    var slider_disable_nav 		= interfeis_var.slider_disable_nav;
    var slider_disable_prevnext	= interfeis_var.slider_disable_prevnext;
    
    if(slider_disable_prevnext=="0"){
        var direction_nav = true;
    }else{
        var direction_nav = false;
    }
    
    if(slider_disable_nav=="0"){
        var control_nav = true;
    }else{
        var control_nav = false;
    }

    jQuery('#slider .flexslider, .gallerycontainer .flexslider').flexslider({
        animation: slidereffect,
        slideshowSpeed: slider_interval,
        directionNav: direction_nav,
        controlNav: control_nav,
        smoothHeight: true,
		pauseOnHover: true,
		prevText : '',
		nextText : '',
		start : function(){
			jQuery('#slideritems').removeClass('preloader');
		}
    });
}

function isotopeinit(){
	"use strict";
	
	var postisotope = jQuery('.postscontainer.mason').isotope({
		itemSelector : '.articlewrapper'
	});
	
	postisotope.infinitescroll({
		loading: {
			finishedMsg: interfeis_var.loadfinish,
			msg: null,
			msgText: interfeis_var.postloadmore,
			img: interfeis_var.themeurl + 'images/pf-loader.gif'
		  },
			navSelector  : '#loadmore-paging',    // selector for the paged navigation 
			nextSelector : '#loadmore-paging .loadmorebutton a:first',  // selector for the NEXT link (to page 2)
			itemSelector : '.articlewrapper',     // selector for all items you'll retrieve
			bufferPx: 40
		},
       	// call Isotope as a callback
		function ( newElements ) {
			
			content_slider_init();

			var $newElems = jQuery( newElements ).css({ opacity: 0 });
			$newElems.imagesLoaded(function(){
				$newElems.animate({ opacity: 1 });
				postisotope.isotope( 'appended', $newElems, true );
				postisotope.isotope('reLayout');
				jQuery('#loadmore-paging').css('display','block');
			});
		}
	);
	
	jQuery(window).unbind('.infscr');
	
	jQuery('#loadmore-paging .loadmorebutton a:first').click(function(evt){
		postisotope.infinitescroll('retrieve');
		return false;
	});
	jQuery(document).ajaxError(function(e,xhr,opt){
		if(xhr.status==404){jQuery('#loadmore-paging a').remove();}
	});
}

function prod_infinitescroll(){
	"use strict";
	var prodisotope = jQuery('.nvr-productmasonry ul.products').isotope({
		itemSelector : 'li.product'
	});
	
	var activefilter = '*';
	
	jQuery('.isotope-filter li').click(function(){
        jQuery('.isotope-filter li').removeClass('selected');
        jQuery(this).addClass('selected');
        var selector = jQuery(this).find('a').attr('data-option-value');
		var selectortext = jQuery(this).find('a').text();
		jQuery(this).parents('.filterlist').find('a.filterbutton').html(selectortext);
        prodisotope.isotope({ filter: selector });
		activefilter = selector;
        return false;
    });
	
	prodisotope.infinitescroll({
		loading: {
			finishedMsg: 'All Products Loaded',
			msg: null,
			msgText: 'Loading More Products',
			img: interfeis_var.themeurl + 'images/pf-loader.gif'
		  },
			navSelector  : '#loadmore-paging',    // selector for the paged navigation 
			nextSelector : '#loadmore-paging .loadmorebutton a:first',  // selector for the NEXT link (to page 2)
			itemSelector : 'li.product',     // selector for all items you'll retrieve
			bufferPx: 40
		},
       	// call Isotope as a callback
		function ( newElements ) {
			
			var $newElems = jQuery( newElements ).css({ opacity: 0 });
			$newElems.imagesLoaded(function(){
				$newElems.animate({ opacity: 1 });
				prodisotope.isotope( 'insert', $newElems, true );
				prodisotope.isotope('reLayout');
				prod_quickview();
				jQuery('#loadmore-paging').css('display','block');
			});
		}
	);
	
	prodisotope.imagesLoaded()
	// An image has been loaded.
	.progress(function(instance, image) {
		// Add the effect.
		var result = image.isLoaded ? 'loaded' : 'broken';
    	console.log( 'image is ' + result + ' for ' + image.img.src );
		prodisotope.isotope('reLayout');
		var $image = jQuery(image.img).addClass('loaded');
	});
	
	jQuery(window).unbind('.infscr');
	
	jQuery(window).resize(function(){
		prodisotope.isotope('reLayout');
	});
	
	jQuery('#loadmore-paging .loadmorebutton a:first').click(function(evt){
		prodisotope.infinitescroll('retrieve');
		return false;
	});
	jQuery(document).ajaxError(function(e,xhr,opt){
		if(xhr.status==404){jQuery('#loadmore-paging a').remove();}
	});
}

function form_styling(){
	"use strict";
	/* Select */
	var selects = jQuery('select#cmbpostdomain');
	selects.wrap('<div class="nvr_selector" />');
	var selector = jQuery('.nvr_selector');
	selector.prepend('<span />');
	selector.each(function(){
		var selval = jQuery(this).find('select option:selected').text();
		var sel = jQuery(this).children('select');
		var selclass = sel.attr('class');
		jQuery(this).children('span').text(selval);
		jQuery(this).addClass(selclass);
		sel.css('width','100%');
		sel.change(function(){
			var selvals = jQuery(this).children('option:selected').text();
			jQuery(this).parent().children('span').text(selvals);
		});
	});
}

/*=================================== CUSTOM CART ===================================*/
function update_custom_cart(){
	"use strict";
	
	var numberPattern = /\d+/g;
	var itemtext = interfeis_var.totalcarttext;
	
	var the_cart = jQuery("#topminicart"),
		dropdown_cart = the_cart.find(".cartlistwrapper:eq(0)"),
		subtotal = the_cart.find('.cart_subtotal'),
		cart_widget = jQuery('.widget_shopping_cart'),
		cart_qty = the_cart.find('.cart_totalqty');
		
		var new_subtotal = dropdown_cart.find('.total');
		new_subtotal.find('strong').remove();
		subtotal.html( new_subtotal.html() );
		
		var the_quantities = dropdown_cart.find('.quantity');
		var totalqty = 0;
		the_quantities.each(function(idx,el){
			var qtytext = jQuery(el).html().match(numberPattern);
			var qtyint = parseInt(qtytext[0]);
			totalqty = totalqty + qtyint;
		});
		cart_qty.html(totalqty);
		
}

function topcart_effects(){
	"use strict";
	
	jQuery('body').bind('added_to_cart', update_custom_cart);
}

function topsearch_effects(){
	"use strict";
	
	var searchbox = jQuery('.searchbox');
	var btnsearch = searchbox.find('.submit');
	var searcharea = searchbox.find('.searcharea');
	var textsearch = searchbox.find('.txtsearch');
	
	btnsearch.on('click', function(evt){
		if(textsearch.val()==''){
			evt.preventDefault();
			if(searcharea.hasClass('shown')){
				searcharea.removeClass('shown');
				searchbox.removeClass('shown');
			}else{
				searcharea.addClass('shown');
				searchbox.addClass('shown');
			}
		}
	});
}

function addplusminus(){
	"use strict";
	
	// WooCommerce 2.3 QTY buttons back
	// Quantity buttons
	jQuery( '.woocommerce .type-product .summary div.quantity:not(.buttons_added), .woocommerce .type-product .summary td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" class="plus" />' ).prepend( '<input type="button" value="-" class="minus" />' );
	
	jQuery('.woocommerce .type-product .summary .input-text.qty').attr('type', '');
	
	jQuery( document ).on( 'click', '.plus, .minus', function() {
	
		// Get values
		var $qty		= jQuery( this ).closest( '.quantity' ).find( '.qty' ),
			currentVal	= parseFloat( $qty.val() ),
			max			= parseFloat( $qty.attr( 'max' ) ),
			min			= parseFloat( $qty.attr( 'min' ) ),
			step		= $qty.attr( 'step' );
	
		// Format values
		if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
		if ( max === '' || max === 'NaN' ) max = '';
		if ( min === '' || min === 'NaN' ) min = 0;
		if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;
	
		// Change the value
		if ( jQuery( this ).is( '.plus' ) ) {
	
			if ( max && ( max == currentVal || currentVal > max ) ) {
				$qty.val( max );
			} else {
				$qty.val( currentVal + parseFloat( step ) );
			}
	
		} else {
	
			if ( min && ( min == currentVal || currentVal < min ) ) {
				$qty.val( min );
			} else if ( currentVal > 0 ) {
				$qty.val( currentVal - parseFloat( step ) );
			}
	
		}
	
		// Trigger change event
		$qty.trigger( 'change' );
	});
}

/*=================================== QUICK VIEW ===================================*/
/*
$("img.hidden").reveal("fadeIn", 1000);
*/

function prod_quickview(){
	"use strict";
	
	jQuery('a.nvr_quickview').click(function(evt){
		
		evt.preventDefault();
		
		var pfitem = jQuery(this);
		var pfurl = jQuery(this).attr('href');
		var pajaxholder = jQuery('div.quickview-ajax-holder');
		var ajaxbutton = pajaxholder.find('a.btnajax');
		var pajaxdata = pajaxholder.find('div.quickview-ajax-data');
		
		var cactive = false;
		var loadedimages = 0;
		var loadedpercent = 0;
		var outerheader = jQuery('#outerheader');
		var wpadminbar = jQuery('#wpadminbar');
		
		var adminbarinnerh = wpadminbar.innerHeight();
		var outerheaderinnerh = outerheader.innerHeight();
		var topscrolledge = adminbarinnerh+outerheaderinnerh;
		
		pajaxholder.removeClass('preloader');
		
		if(pfitem.hasClass('active')){
			
		}else{
		
			pfitem.addClass('active');

			ajaxbutton.click(function(){
					
				pajaxholder.delay(400).fadeOut(600, function(){
					pajaxdata.empty();
					pajaxholder.perfectScrollbar('destroy');
				});
				
				pfitem.removeClass('active') ;
			  
				return false;
			});
			
			pajaxholder.fadeIn(600, function(){ 
				pajaxdata.css('visibility', 'visible');
				pajaxdata.fadeOut(100);
				pajaxholder.addClass('preloader');
				
				var jqxhr = jQuery.ajax({
					url : pfurl,
					cache : false,
					dataType : 'html',
					async : true,
					beforeSend : function(){
						pajaxdata.empty();
					},
					xhr: function(){
						var xhr = new window.XMLHttpRequest();
						/*Upload progress*/
						xhr.upload.addEventListener("progress", function(evt){
							if (evt.lengthComputable) {
								var percentComplete = evt.loaded / evt.total;
								/*Do something with upload progress*/
								console.log(percentComplete);
							}
						}, false);
						/*Download progress*/
						xhr.addEventListener("progress", function(evt){
							if (evt.lengthComputable) {
								var percentComplete = Math.round((evt.loaded/evt.total)*100);
								/*Do something with download progress*/
								console.log(percentComplete);
							}
						}, false);
						return xhr;
					}
				});
				
				jqxhr.done(function(data, textStatus){
					
					var content = data;
					
					pajaxdata.append(content);
					
					chgpicturecallback();
					
					pajaxdata.imagesLoaded()
					.always( function( instance ) {
						console.log('loading images');
					})
					.done( function( instance ) {
						pajaxholder.perfectScrollbar({includePadding : true});
						pajaxdata.delay(1000).fadeIn(900,function(){ 
							pajaxholder.removeClass('preloader'); 
							pajaxholder.scrollTop(0);
							pajaxholder.perfectScrollbar('update');
							content_slider_init();
						});
	
						jQuery('.element_fade_in').each(function () {
							jQuery(this).appear(function() {
								jQuery(this).delay(100).animate({opacity:1,right:"0px"},1000);
							});
						});
						
					})
					.fail( function() {
						console.log('all images loaded, at least one is broken');
					})
					.progress( function( instance, image ) {
						var totalimage = instance.images.length;
						var result = image.isLoaded ? 'loaded' : 'broken';
						if(result=='loaded'){
							loadedimages++;
						}
						loadedpercent = Math.round((loadedimages/totalimage)*100);
						console.log( 'image is ' + result + ' for ' + image.img.src );
					});
			
				});
				
				jqxhr.fail(function(error, textStatus){
					alert( "Request failed: " + textStatus );
				});
			
			});
		
		}
		
		return false;
	
	});
}

function button_scrolltop(){
	"use strict";
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
}

function login_process(){
	"use strict";
	/*
	jQuery('#forgot_pass').click(function(evt){
		evt.preventDefault();
		
		jQuery('#login-div').css('display','none');
		jQuery('#forgot-pass-div').css('display','block');
	});
	*/
	
	jQuery('#return_login').click(function(evt){
		evt.preventDefault();
		
		jQuery('#login-div').css('display','block');
		jQuery('#forgot-pass-div').css('display','none');
	});
	
	jQuery('#wp-login-but').click(function(evt){
		evt.preventDefault();

		var  login_user          =  jQuery('#login_user').val(); 
		var  login_pwd           =  jQuery('#login_pwd').val(); 
		var  security            =  jQuery('#security-login').val();
		var  ispop               =  jQuery('#loginpop').val();
		var  ajaxurl         	=   interfeis_var.adminurl+'admin-ajax.php';
		
		jQuery('#login_message_area').empty().append('<div class="login-alert"></div>');
		jQuery.ajax({    
			type: 'POST',
			dataType: 'json',
			url: ajaxurl,
			data: {
				'action'            :   'atlantis_ajax_login',
				'login_user'        :   login_user,
				'login_pwd'         :   login_pwd,
				'ispop'             :   ispop,
				'security-login'    :   security,
			},
			beforeSend:function(){
				jQuery('#login_message_area').empty().append('<div class="login-alert">'+interfeis_var.sendingtext+'<div>');
			},
			success:function(data) {
			   jQuery('#login_message_area').empty().append('<div class="login-alert">'+data.message+'<div>');
						 
					if (data.loggedin == true){

						interfeis_var.userid = data.newuser;
						jQuery('#ajax_login_container').remove();
						jQuery('#cover').remove();
						
						document.location.href = data.redirect;
						
						
						jQuery('#user_not_logged_in').hide();
						jQuery('#user_logged_in').show();
						
					}else{
						jQuery('#login_user').val(''); 
						jQuery('#login_pwd').val(''); 
					}
					
			},
			error: function(errorThrown){
			
			}
		});  
	
	});
}

function register_process(){
	"use strict";
	jQuery('#wp-submit-register').click(function(evt){
		evt.preventDefault();
		
		var user_login_register =  jQuery('#user_login_register').val(); 
		var user_email_register =  jQuery('#user_email_register').val(); 
		var nonce               =  jQuery('#security-register').val();
		var ajaxurl             =  interfeis_var.adminurl+'admin-ajax.php'; 
		
		
		jQuery.ajax({
			type: 'POST', 
			url: ajaxurl,
			data: {
				'action'                    :   'atlantis_ajax_register',
				'user_login_register'       :   user_login_register,
				'user_email_register'       :   user_email_register,
				'security-register'         :   nonce
			  
			},
			beforeSend:function(){
				jQuery('#register_message_area').empty().append('<div class="login-alert">'+interfeis_var.sendingtext+'</div>');
			},
			success:function(data) {
			   // This outputs the result of the ajax request
			   jQuery('#register_message_area').empty().append('<div class="login-alert">'+data+'</div>');
			   jQuery('#user_login_register').val(''); 
			   jQuery('#user_email_register').val(''); 
			},
			error: function(errorThrown){ alert(errorThrown);}
		});
	
	});

}

function change_pass(){
	"use strict";
	jQuery('#change_pass').click(function(){
		var  oldpass         =  jQuery('#oldpass').val(); 
		var  newpass         =  jQuery('#newpass').val(); 
		var  renewpass       =  jQuery('#renewpass').val(); 
		var  securitypass    =  jQuery('#security-pass').val();
		var  ajaxurl         =  interfeis_var.adminurl+'admin-ajax.php'; 
		
		 jQuery.ajax({    
		 	type: 'POST',
		 	url: ajaxurl,
			data: {
				 'action'            :   'atlantis_ajax_update_pass',
				 'oldpass'           :   oldpass,
				 'newpass'           :   newpass,
				 'renewpass'         :   renewpass,   
				 'security-pass'     :   securitypass
			},
			beforeSend:function(){
				jQuery('#profile_pass').empty().append('<div class="login-alert">'+interfeis_var.sendingtext+'<div>');
			},
			success:function(data) {
				jQuery('#profile_pass').append('<div class="login-alert">'+data+'<div>');
				jQuery('#oldpass,#newpass,#renewpass').val('');
			
			},
			error: function(errorThrown){ }
		}); 
	}); 
}