jQuery( ".navbar-inverse .navbar-nav > li > a" ).wrapInner( "<span></span>");

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 30,
  headerEl = document.getElementById('sticky-header');
  var sliderMargin = $('.static-margin');
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
	sliderMargin.addClass("active-static-margin");
  } else {
    headerEl.classList.remove("smaller");
	sliderMargin.removeClass("active-static-margin");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

function update_flyoutcart() {
    jQuery.ajax({
        url: '/frontapi.asp',
        dataType: 'json',
        type: 'GET',
        cache: false,
        data: {
            module: 'cartajax',
        },
        success: function (data) {
            if (data.ItemsInCart != undefined) {
                if (data.ItemsInCart.length > 0) {
                    jQuery('#floating-cart').fadeIn(300);
                }
            }
        },
        error: function (objError) {
            //alert('Error');
            return;
        }
    });
}

function addcart_callback(productDiv, data) {
    jQuery(productDiv).addClass('ajaxcart-complete');
    setTimeout(function () { jQuery(productDiv).removeClass('ajaxcart-complete'); }, 1000);

    var itemsInCart = 0;
    var subtotal = 0;

    jQuery(data.ItemsInCart).each(function (index, item) {
        itemsInCart += item.qty;
        subtotal += (item.price * item.qty);
    });
    //minicart - subtotal
    jQuery('.minicart-items').text(itemsInCart);
    update_flyoutcart();

    var currency = jQuery('body').data('currency');
    jQuery('.minicart-subtotal').text(currency + subtotal);
   
}

function mailinglist_callfront(form) {
    jQuery(form).find('.mailinglist-input').prop('disabled', true);
    jQuery(form).find('.mailinglist-submit').prop('disabled', true);
    jQuery(form).find('#mailing-btn-txt').addClass('hidden');
    jQuery(form).find('#mailing-btn-load').removeClass('hidden');

    jQuery('#mailinglist-response').slideUp(300);
    jQuery('#mailinglist-response div').addClass('hidden');
}

function mailinglist_response(form, response) {

    jQuery(form).find('.mailinglist-input').prop("disabled", false);
    jQuery(form).find('.mailinglist-submit').prop("disabled", false);


    if (response == 1 || response == 3) {
        jQuery('#mailinglist-response .mailinglist-subscribed').removeClass('hidden');
        jQuery('#mailinglist-response').slideDown(300);
    }
    else if (response == -1) {
        jQuery('#mailinglist-response .mailinglist-unsubscribed').removeClass('hidden');
        jQuery('#mailinglist-response').slideDown(300);
    }
    else if (response == 2) {
        jQuery('#mailinglist-response .mailinglist-error').removeClass('hidden');
        jQuery('#mailinglist-response').slideDown(300);
    }

    jQuery(form).find('#mailing-btn-txt').removeClass('hidden');
    jQuery(form).find('#mailing-btn-load').addClass('hidden');

}

function moveMenu() {
    var respWidth = window.innerWidth;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari/") !== -1 && ua.indexOf("chrom") === -1) {
        respWidth = jQuery(window).width();
    }

    if (respWidth < 767) {
        jQuery('#menulinks').appendTo('#mobile-menulinks');
        jQuery('#categories').appendTo('#mobile-categories');
    }
    else {
        jQuery('#menulinks').appendTo('#menulinks-outer');
        jQuery('#categories').appendTo('#navbar');
    }
}

 


jQuery(document).ready(function () {

    update_flyoutcart();

    jQuery('#mobile-menu-trigger').click(function (e) {
        e.preventDefault();

        jQuery('#mobile-menu').show(0, function () {
            jQuery('body').addClass('menu-open');
        });
    });

    jQuery('.mobile-menu-close').click(function (e) {
        e.preventDefault();

        jQuery('body').removeClass('menu-open');
        setTimeout(function () {
            jQuery('#mobile-menu').hide(0);
        }, 250);
    });

 var delay=3000, setTimeoutConst;
    var respWidth = window.innerWidth;
    if (respWidth >= 767) {
    	jQuery('.navbar .dropdown').hover(function () {
			 setTimeoutConst = setTimeout(function() {
    		jQuery(this).find('.dropdown-menu').first().stop(true, true).delay('fast').fadeIn('slow');
			 }, delay); 
    	}, function () {
    		jQuery(this).find('.dropdown-menu').first().stop(true, true).delay('fast').fadeOut('fast');
             clearTimeout(setTimeoutConst);
    	});

    	jQuery('.navbar .dropdown > a').click(function () {
    		location.href = this.href;
    	});
    }

});



jQuery(window).load(function () {
    moveMenu();
});
jQuery(window).resize(function () {
    moveMenu();
});

jQuery(function ($) {
	$('.navbar .dropdown').hover(function () {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).fadeIn();

	}, function () {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).fadeOut();

	});

	$('.navbar .dropdown > a').click(function () {
		location.href = this.href;
	});

});


//nishma's js for shipping questions and assistance page


    var colll = document.getElementsByClassName("bar");
    var i;
    
    for (i = 0; i < colll.length; i++) {
      colll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var barcontent = this.nextElementSibling;
        if (barcontent.style.display === "block") {
          barcontent.style.display = "none";
			
        } else {
          barcontent.style.display = "block";
		  barcontent.scrollIntoView({behavior: 'smooth'});
			
        }
      });
    }


if (window.location.href.indexOf("UPS") != -1) {	
 document.getElementById("UPS").style.display = "block";
  }
 else if (window.location.href.indexOf("LTL") != -1) {
 document.getElementById("LTL").style.display = "block";
}
 else  if (window.location.href.indexOf("Shipping") != -1){
 document.getElementById("Shipping").style.display = "block"; 
 } 
 else  if (window.location.href.indexOf("Order") != -1){
 document.getElementById("Order").style.display = "block"; 
 } 
 else  if (window.location.href.indexOf("Free") != -1){
 document.getElementById("Free").style.display = "block"; 
} 
 else  if (window.location.href.indexOf("Questions") != -1){
 document.getElementById("Questions").style.display = "block"; 
} 
 else  if (window.location.href.indexOf("WhyWeDontShipDirectly") != -1){
 document.getElementById("WhyWeDontShipDirectly").style.display = "block"; 
} 
else  if (window.location.href.indexOf("NoticeofDefectorDamage") != -1){
 document.getElementById("NoticeofDefectorDamage").style.display = "block"; 
} 
else  if (window.location.href.indexOf("GeneralTermsandConditions") != -1){
 document.getElementById("GeneralTermsandConditions").style.display = "block"; 
} 
else  if (window.location.href.indexOf("ProcessingTime") != -1){
 document.getElementById("ProcessingTime").style.display = "block"; 
} 
else  if (window.location.href.indexOf("submit-tax-exempt-paperwork") != -1){
    document.getElementById("submit-tax-exempt-paperwork").style.display = "block"; 
   }

	

