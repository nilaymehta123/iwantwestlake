var divId 				= '';
_btnDown 				= false;
/*Start : Toggle slide bar whe mouse up in document*/
if(window.location.hash) {
    var sHashUrl = window.location.hash;
} else {
    var sHashUrl = '#';
}

if (sHashUrl != '#') {
    location.href+='';
}

$(document).ready(function(){
    loadLightSlider();
	
    function sliderLoad() {
        $('#'+cat).parent('li').addClass('active');
        $('.tabslider').hide();
        $('#'+cat+'_tab').show();
    }
    var url         = window.location.href;
    var uri 		=	url.split('/');
    if(uri[3] == 'listings'){
        setTimeout(sliderLoad,500);
    }     

    $(".nav.nav-tabs li a").click(function(){
        $(".tabhead").removeClass("active");
        $(this.parentNode).addClass('active');
        $('.tabslider').hide();
        $('#'+this.id+'_tab').show();
    });


    $('.main-baner').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        infinite: false,
        speed: 1000,
        fade: true, 
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    });

	
    $('#lSPrev, #lSNext').show();
    $('.ext-hgt').hide();
    $('.loading').hide();

    $(".wsp-bepro_listing_typess-title").text('Specials');

    $(".pic-wrp img").attr('height','300');
    $(".pic-wrp img").attr('width','562');

    var totHeight  = document.documentElement.scrollHeight;
    var scroll     = $(window).scrollTop();

    $(window).scroll(function (event) {
        scroll     = $(window).scrollTop();
    });

    var i 				= 1;
    $("#gallery .content").each(function(){
        if(i == 1){
            $(".img").css("display","");
        }
        i++;
    });

    $(".single-img img").click(function(event){
        event.preventDefault();
        var newSRC = $(this).attr("src");
        $("#main-src").attr("src", newSRC);
    });


    $('#menu-footer-main1').children().addClass('col-sm-12');

    /*Side slide bar toggle */
    $('.side-toggle').click(function(){

        var sliderHeight 	= $('.quick-view-screen').height();
        var aSplitId 		= $(this).attr('id').split('-');
        divId 				= aSplitId[0];

        if(aSplitId[1] == 'slider'){

            $('#'+divId+'-form').animate({width:'toggle'}, { complete: function() { $('.quick-view-links').toggle(); } }, 500);
        } else {
            if(parseInt(scroll) == 0){
                var top 		= parseInt(scroll) + 131;
            }
            else{
                var top 		= parseInt(scroll) + 91;
            }

            if(top > (3/4) * totHeight){

                $('#'+divId+'-form').css('top', (top-275)+'px');
            } else {

                $('#'+divId+'-form').css('top', top+'px');		
            }
			
            $('#'+divId+'-form').animate({width:'toggle'},500);
            $('.quick-view-links').toggle();	
        }

    });

    /* close quick links slider close on click of close button. */
    $('.close-icon').click(function(e){
        e.preventDefault();
        divId 				= $(this).attr('slide-id');
        var slider 			= $('#'+divId+'-form');
        $('#'+divId+'-form').animate({width:'toggle'}, { complete: function() { $('.quick-view-links').toggle(); divId =''; } }, 500);
    });

    /*Date and time picker for side slide bar*/
    $('#DateOfBirth, #DateEstablished').datetimepicker({
        onGenerate:function( ct ){
            _btnDown = true;
        },
        timepicker:false,
        format:'m/d/Y',
        formatDate:'m/d/Y',
        startDate: '01/01/1997',
        maxDate:new Date
    });

    $(document).mousedown(function (event) {
        if(event.pageX < ($(window).width() - 30)){
            _btnDown = false;
        } else {
            _btnDown = true;
        }
    });

    $(document).mouseup(function (e) {
		
        if(!_btnDown){

            var slider = $('#'+divId+'-form');
            if (!$('.close-icon').is(e.target) && !$('.xdsoft_time').is(e.target) && !$('.side-toggle').is(e.target) && !slider.is(e.target) && slider.has(e.target).length == 0) {
                $('#'+divId+'-form').animate({width:'toggle'}, { complete: function() { $('.quick-view-links').toggle(); } }, 500);
                divId = '';
            }
        }
    });
    function loadLightSlider(){
        $('.lightSlider').lightSlider({
	    
            item:4,
            loop:false,
            slideMove:1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            freeMove: false,
            controls: true,
            responsive : [
                {
                    breakpoint:992,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                        enableTouch:true,
                        enableDrag: true,
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1,
                        enableTouch:true,
                        enableDrag: true,
                    }
                }
            ]
        });		
    }


    $(".tab-trigger").on('click',function(){
        $(".tab-menu").toggle(800);
    });

    $('.nav-tabs li a').click(function(){
        var title =$(this).text();
        var cat_title =title + " "+ 'Leasing';
        $('#cat_head').html(cat_title);
    });

    $(document).on('click', function (e){
        if(!$('.tab-trigger').is(e.target))
            $(".tab-menu").hide(800);
    });


    $('.vc_tta-tabs-list .vc_tta-tab').click(function(){
        $('.business-title h1').html($(this).text()+" Application");
    })

    $(".apply-btn").click(function(){
        $('#bc-form-title').html("Consumer Application");

    });

    if(window.location.hash){
        var hash = window.location.hash.replace('#', '');
        var title= hash.replace(/-/g, ' ');
        var titleUp=title.charAt(0).toUpperCase() + title.substring(1);
        $("#bc-form-title").html(titleUp);
    }


    $(".add-more-names a").click(function(e){
        e.preventDefault();

        var divId 		= $(this).attr("data-href");
        var content 	= $("#"+divId+"-wrapper").html();

        $("#"+divId).append(content);


        var index	=0;
        $('#'+divId+' .field-wrap').each(function(index){
            $(this).find(':input, select').each(function(){
                var newName =  $(this).attr("name");
                newName 	+=  "["+index+"]";
                $(this).attr("name", newName);
                index++;
            });
        });
    });

    /*Live chat hide*/
    /*	var chatUrl 	= "https://salesiq.zoho.com/midwayleasingandsales/float.ls?embedname=midwayleasingandsales";
     $('.live-chat').hide();
     $('.chat-btn').click(function(){
         $('.live-chat').toggle();
         $('#livechatzoho').attr('src', chatUrl)
     })*/

    /*toggle live chat*/
	
    $(function(){
        var shrinkHeader = 150;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.navbar-fixed-top').addClass('small-header');
                $('.right-column-left-bottom').addClass('small-header');
                $('.logo').addClass('small-header');
            }
            else {
                $('.navbar-fixed-top').removeClass('small-header');
                $('.right-column-left-bottom').removeClass('small-header');
                $('.logo').removeClass('small-header');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    $('.chat-btn').click(function(){
        $('.zls-btrht').attr("style", "display: inline !important");
    });

    $(function(){
        $('#menu-item-1367 a, #menu-item-1368 a').on('click', function(e){
            e.preventDefault();
            var hash = $(this).attr('href');
            if(window.location.href.indexOf("apply/") > -1) {
                window.location.hash = hash; 
                window.location.reload(true);
            } else {
                window.location = baseUrl+'apply/'+hash; 
            }
        });
    })
