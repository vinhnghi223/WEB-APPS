$(document).ready( function($) {
// IE7 zindex fix
$(function() {
	var zIndexNumber = 1000;
	$('div').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= 10;
	});
});

// PNG fix
$(document).pngFix();

// Sliders
// Home Slider
$('#slider').cycle({
fx: 'scrollVert',
speed: 1000,
timeout: 14000,
prev: '#slider_prev',
next: '#slider_next',
cleartypeNoBg: 'true',
after: onAfter
});
function onAfter(curr,next,opts) {
var caption = (opts.currSlide + 1) + '/' + opts.slideCount;
$('#slide_count').html(caption);
}
	
// Beer picture Slider
$('#picture_content').cycle({
fx: 'scrollVert',
speed: 1000,
timeout: 0,
next: '.next',
cleartypeNoBg: 'true'
});

	
// Timeline Slider
$('#timeline_slider').cycle({ 
fx:     'fade', 
speed:  'fast', 
timeout: 0,
next: '#timeline_next', 
prev: '#timeline_prev', 
pager:  '#timeline_nav', 
cleartypeNoBg: 'true',
pagerAnchorBuilder: function(idx, slide) { 
// return selector string for existing anchor 
return '#timeline_nav li:eq(' + idx + ') a'; 
} 
});
	  
// Facebook Statuspress Slider
$('.statuspress').cycle({
fx: 'fade',
timeout: 14000,
delay: 500,
cleartypeNoBg: 'true'
});

 
// Age Verification
var currentYear = (new Date).getFullYear();
var year_accepted = currentYear - 19;
	

// Age From validator
$("#age_form").validate({
		 messages:{
			 day: { required: 'You are missing a field / Un des champs n&#8217;est pas compl&eacute;t&eacute;'},
			 month: { required: 'You are missing a field / Un des champs n&#8217;est pas compl&eacute;t&eacute;'},
			 year: { required: 'You are missing a field / Un des champs n&#8217;est pas compl&eacute;t&eacute;'}
			 },
		 rules: {
			
			day: {
			required: true,
			range: [1, 31]
		 	},
			
			month: {
			required: true,
			range: [1, 12]
		 	},
			
			year: {
			required: true,
      	 	max: year_accepted,
	     	minlength: 4
		 	}
	
  		},

errorPlacement: function (error, element) {
element.parents("#age_form").find("#error_msg").append(error);
}

});


// Sign Up validator
$(".sign_up").validate({
errorElement: "div",
errorPlacement: function (error, element) {
element.parents("span").append(error);
},

submitHandler: function(form) {
jQuery(form).ajaxSubmit({
target: ".sign_up"
});
$(".loader").fadeIn();
}
});

// Clear input on focus
$(".clear").focus(function (){
$(this).val("");
});

// Single page email form validator
$(".email_form").validate({
errorElement: "div",
errorPlacement: function (error, element) {
element.parents("span").append(error);
},
submitHandler: function(form) {
jQuery(form).ajaxSubmit({
target: ".email_form"
});
$(".loader").fadeIn();
}
});


// Drop down sub-menus
$('.drop_down').hide();	
$(".trigger").hover(
function () {
$(this).children('.drop_down').show();
}, 
function () {
$('.drop_down').hide();
}
);


// Contact Region Show-Slide animation
$(".region").click(function (){
$(this).parent().parent().children("div").slideToggle();
});

// Contact individual Show-Slide animation
$(".half ul li:nth-child(1) a").addClass("link_dd");
$(".half ul li:nth-child(2)").addClass("dd").hide();
$(".half ul li a").click(function(){
$(this).parent("li").next("li").slideToggle();
return false;
});

$('#fineprint li:last a').addClass('last');

// Email share controls
$("#share_email").click(function(){
$("#email_form_wrap").fadeIn();
});
$("#email_form_wrap #close").click(function(){
$("#email_form_wrap").fadeOut();
});

$(".anchorLink").click(function (){
$("h3").removeClass("highlight");
var highlight_link = $(this).attr("href"); 
$(highlight_link).parent().addClass("highlight");
});

$(".promo_tab").hide();
$(".promo_tab:first").show();
<!-- Promo Drop Down  -->
$(".promo_menu li a").click(function(){
$(".promo_tab").hide();
var activeTab = $(this).attr("href"); 
$("#"+activeTab).fadeIn();
return false;
});



/* -------------------------------------- */
/* ----------- twitter script ----------- */
/* -------------------------------------- */
var pageSize = 11;
var username = 'MooseheadLager';
var currentPage = 1;

var appendTweet = function(tweet, id, date, screen_name) {
    friendlyTime = TwitterDateConverter(date);
    $("<p />").html("<a href='//twitter.com/#!/"+screen_name+"' target='_blank' class='screen_name'>@"+screen_name+"</a> "+tweet+"<div class='date'>"+friendlyTime+"</div>").appendTo($("#twitter_tweets"));
};

var loadTweets = function() {
    var url = "/wp-content/themes/Moosehead_2010/functions/social/twitter/";
    $.getJSON(url,function(data) {
        $.each(data, function(i, post) {
            appendTweet(post.text, post.id, post.created_at, post.user['screen_name']);
        });
    });
};

loadTweets();

$('#twitter_more').click(function(e){
    e.preventDefault();

    if($('#twitter_tweets p.active').length < 1) {
        $('#twitter_tweets p:first').addClass('active');
        $('#twitter_tweets p:last').addClass('last');

        $('#twitter_tweets p').each(function(){
            offset = $(this).position();
            offset = offset.top;
            $(this).attr('data-top',offset);
        })
    }

    var activeItem = $('#twitter_tweets p.active');
    var newActiveItem = $('#twitter_tweets p.active').next();
    var scrollAmount = '-'+newActiveItem.attr('data-top');

    if(!activeItem.is(':last-child')){
        activeItem.removeClass('active');
        newActiveItem.addClass('active');

        $('#twitter_tweets').animate({
            top: scrollAmount
        }, 300 );

        if(newActiveItem.is(':last-child')){
            $('#twitter_more').addClass('disabled');
        }
    }
})


});
/* ----------------------------------- */
/* ----- END of document.ready() ----- */
/* ----------------------------------- */






function TwitterDateConverter(time){
    var v = time.split(' ');
    var date =  new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
    var diff = (((new Date()).getTime() - date.getTime()) / 1000);
    var day_diff = Math.floor(diff / 86400);

    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
        return;

     return day_diff == 0 && (
     diff < 60 && "just now" ||
     diff < 120 && "1 minute ago" ||
     diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
     diff < 7200 && "1 hour ago" ||
     diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
     day_diff == 1 && "Yesterday" ||
     day_diff < 7 && day_diff + " days ago" ||
     day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}

