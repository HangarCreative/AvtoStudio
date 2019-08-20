jQuery(document).ready(function(){
	
	/*Add Class Js to html*/
	jQuery('html').addClass('js');	
	
	content_slider_init();
	show_prodcarousel();
	show_tab();
	show_toggle();
	show_imglightbox();
	counter_effect();
	quickviewajax();
	
});

jQuery(window).load(function(){
	prodisotopeinit();
});

jQuery(window).resize(function(){
	prodisotopeinit();
});

function content_slider_init(){
	"use strict";
	if(typeof interfeis_var.slidereffect == "undefined"){
		var slidereffect 		= "fade";
	}else{
		var slidereffect 		= interfeis_var.slidereffect;
	}
	
	if(typeof interfeis_var.slider_interval == "undefined"){
		var slider_interval 		= 8000;
	}else{
		var slider_interval 		= interfeis_var.slider_interval;
	}
	
	if(typeof interfeis_var.slider_disable_nav == "undefined"){
		var slider_disable_nav 		= "0";
	}else{
		var slider_disable_nav 		= interfeis_var.slider_disable_nav;
	}
	
	if(typeof interfeis_var.slider_disable_prevnext == "undefined"){
		var slider_disable_prevnext	= "0";
	}else{
		var slider_disable_prevnext	= interfeis_var.slider_disable_prevnext;
	}
	
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

    jQuery('#outermain .flexslider, #footerwrapper .flexslider, #outerheader .flexslider').flexslider({
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

function show_prodcarousel(){
	"use strict";
	var ctype = {
		"pcarousel" : {
			"index" : '.prodcarousel .flexslider-carousel',
			"minItems" : 2,
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

function show_tab(){
	"use strict";
	/*jQuery tab */
	var pathurl = window.location.href.split("#tab");
	var deftab = "";
	var tabconts = jQuery(".tabcontainer");
	
	tabconts.each(function(){
		var tabcont = jQuery(this);
		var tabbod = tabcont.children(".tab-body");
		tabbod.children(".tab-content").hide(); /* Hide all content */
		if(pathurl.length>1){ 
			deftab = "#"+pathurl[1];
			var pdeftab = tabcont.find("a[href="+deftab+"]").parent().addClass("active").show();
			var tabcondeftab = deftab;
			tabbody.children(tabcondeftab).show();
		}else{
			var tabul = tabcont.children("ul.tabs");
			tabul.children("li:first").addClass("active").show(); /* Activate first tab */
			tabbod.children(".tab-content:first").show(); /* Show first tab content */
		}
	});
	/* On Click Event */
	jQuery("ul.tabs:not(.wc-tabs) li").click(function() {
		var thetabs = jQuery(this).parent("ul.tabs");
		var tabbody = thetabs.next();
		thetabs.children("li").removeClass("active");
		jQuery(this).addClass("active"); /* Add "active" class to selected tab */
		tabbody.children(".tab-content").hide();
		var activeTab = jQuery(this).find("a").attr("href"); /* Find the rel attribute value to identify the active tab + content */
		tabbody.children(activeTab).fadeIn(200);
		return false;
	});
}

function show_toggle(){
	"use strict";
	/*jQuery toggle*/
	jQuery(".toggle_container").hide();
	var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
	if (isiPhone){
		jQuery("h2.trigger").click(function(){
			if( jQuery(this).hasClass("active")){
				jQuery(this).removeClass("active");
				jQuery(this).next().css('display','none');
			}else{
				jQuery(this).addClass("active");
				jQuery(this).next().css('display','block');
			}
		});
	}else{
		jQuery("h2.trigger").click(function(){
			jQuery(this).toggleClass("active").next().slideToggle("slow");
		});
	}
}

function show_imglightbox(){
	"use strict";
	/*=================================== PRETTYPHOTO ===================================*/
	jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).data('rel'));});
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',gallery_markup:'',slideshow:2000,social_tools:''});
}


function counter_effect(){
	"use strict";
	//Animated Counters
	jQuery(".counters").appear(function() {
		var counter = jQuery(this).html();
		jQuery(this).countTo({
			from: 0,
			to: counter,
			speed: 2000,
			refreshInterval: 60,
		});
	});
}

function prodisotopeinit(){
    var prodf_container = jQuery('.pfilter_container.woocommerce');
    var pfilter = '';
    prodf_container.each(function(idx){
        
        pfilter = jQuery(this);
        var prodisotope = pfilter.find('.product_filter ul.products').isotope({
            itemSelector : 'li.product'
        });

        var activefilter = '*';

        pfilter.find('.isotope-filter li').click(function(){
            pfilter.find('.isotope-filter li').removeClass('selected');
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
                    prodisotope.isotope( 'insert', $newElems, true ).isotope({filter : activefilter});
                    prodisotope.isotope('reLayout');
                    quickviewajax();
                    jQuery('#loadmore-paging').css('display','block');
                });
            }
        );

        jQuery(window).unbind('.infscr');

        jQuery('#loadmore-paging .loadmorebutton a:first').click(function(evt){
            prodisotope.infinitescroll('retrieve');
            return false;
        });
        jQuery(document).ajaxError(function(e,xhr,opt){
            if(xhr.status==404){jQuery('#loadmore-paging a').remove();}
        });
        
    });
}

function quickviewajax(){
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

function chgpicturecallback(){
	"use strict";
	
	if(jQuery.isFunction(jQuery.fn.wc_variation_form)){
		jQuery('form.variations_form').wc_variation_form();
	}
	jQuery('form.variations_form .variations select').change();
	jQuery('.quickview-container .images a').removeAttr('rel');
	var mainimage = jQuery('.quickview-container .images a.woocommerce-main-image');
	mainimage.on('click',function(evt){
		evt.preventDefault();
	}).css('cursor','default');
	jQuery('.thumbnails a').on('click',function(evt){
		evt.preventDefault();
		var imgsrc = jQuery(this).attr('href');
		mainimage.find('img').attr("src",imgsrc);
	});
	
	// Quantity buttons
	jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');

	// Target quantity inputs on product pages
	jQuery("input.qty:not(.product-quantity input.qty)").each(function(){

		var min = parseFloat( jQuery(this).attr('min') );

		if ( min && min > 0 && parseFloat( jQuery(this).val() ) < min ) {
			jQuery(this).val( min );
		}

	});
	
	var qcselector = jQuery('.quickview-container .nvr_selector');
	qcselector.each(function(){
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