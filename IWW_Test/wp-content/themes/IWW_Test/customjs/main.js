var loader = '<img width="16" height="16" style="position:absolute;top:40px;right:25px;z-index:2;width:16px;height:16px;" src="https://iwantwestlake.blob.core.windows.net/media/2014/12/loading16x16.gif">',
    xhr_address, xhr_make,
    _serviceBaseUrl,
    map_xhr, map_interval, map_ini_interval,
    map_markers = new Array(),
    map_trigger_monitor,
    map_trigger_submit = false,
    isTrigger = false;
    isTrigger_submit = false;

jQuery(document).ajaxStart(function() {
	//initiate loader
	jQuery.ytLoad({
       registerAjaxHandlers: false,
			startPercentage: 50,
	    startDuration: 2000,
	    completeDuration: 500,
	    fadeDelay: 2000,
	    fadeDuration: 2000
   });	
   
	jQuery.ytLoad('start');
});


jQuery(document).ajaxStop(function() {
   jQuery.ytLoad('complete');
   jQuery.ytLoad('error');
});


var dealers = new function() {

	this.getNearestDealers = function(invoke_type, street, city, state, zip, lat, lng, call_type, async, triggerPanFlag){	 
		var param;
		switch(invoke_type)	{
			case 'address': {
				param = {
					street: street,
					city: city,
					state: state,
					zip: zip,
					invoke_type: "address"
				};	
				break;
			}
			case 'coords': {
				param = {
					latitude: lat,
					longitude: lng,
					invoke_type: "coords"
				};	
				break;
			}
			case 'ziplatlng': {
				param = {
					latitude: lat,
					longitude: lng,
					invoke_type: "ziplatlng"
				};	
				break;
			}
		}
		
		window.map_xhr = jQuery.ajax({
			url: window._serviceBaseUrl + '/services/?service=get-nearest-dealers', 
			type: "POST",
			dataType: "json",
			async: async,
			data: param,			
			beforeSend: function(){
				jQuery('#map_dealer_loader').show();
			},
			success: function(data){ 				
				if(parseInt(data.count, 10)>0){
					var temp = "";
					if (call_type == 'address' || call_type == 'ziplatlng') {
					    //voucher dealer based on user address / zip code
						jQuery('#hf_dealers').val(JSON.stringify(data.dealers));
					}	

					for (i in window.map_markers) {
						window.map_markers[i].setMap(null);
					}	
					window.map_markers.splice(0, window.map_markers.length);
					
					for(var i = 0; i < data.count; i++){ 
						temp += "<div class='map-dealer' data-email='" + data.dealers[i].email + "' ";
						temp += "data-lat='" + data.dealers[i].lat + "' data-lng='" + data.dealers[i].lng + "' >";
						temp += "<a href='#' onclick='showDealer(this); return false;'><div>" + data.dealers[i].name + "</div>";
						temp += "<div>" + data.dealers[i].address + "</div>";
						temp += "<div>" + data.dealers[i].city + ", " + data.dealers[i].state + " " + data.dealers[i].zip + "</div>";
						temp += "<div>" + data.dealers[i].phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") + "</div>";
						temp += "</a></div>";
						addMarker(data.dealers[i].lat, data.dealers[i].lng);
						
						jQuery('#hf_source_lat').val(data.dealers[i].sourcelat);
						jQuery('#hf_source_lng').val(data.dealers[i].sourcelng);
					}
									
					jQuery('.map-dealers-list').empty().html(temp);  
					jQuery('#map_dealer_loader').hide();
					if (triggerPanFlag) {
						triggerPanTo();
					}	
				}
				else{
					var notfoundmsg = "<div style='margin:0 auto;color:white;'>No dealer(s) found. Please try again.</div>";
					jQuery('.map-dealers-list').empty().html(notfoundmsg);  
					jQuery('#hf_dealers').val('');
				}		
				setTimeout(function(){ mapListener(); }, 3000);
				jQuery('#map_dealer_loader').hide();	
			},		
			error : function (xhr, textStatus, errorThrown) {   
				var notfoundmsg = "<div style='margin:0 auto;color:white;margin-top:50px;margin-bottom:50px;'>Sorry, service is not available at the moment. Please try again later.</div>";
				jQuery('.map-dealers-list').empty().html(notfoundmsg);  
				jQuery('#map_dealer_loader').hide();					
				//jQuery('#hf_dealers').val('');
			}
		});
	}
}


function triggerPanTo(){
	
	window.map_ini_interval = setInterval( function(){ 
		if (window[jQuery('#hf_site_map').val()]!=undefined && jQuery('#hf_source_lat').val().trim!='' && jQuery('#hf_source_lng').val().trim()!='') { 
			window.map_trigger_monitor = true;	
			//var laLatLng = new google.maps.LatLng( jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());
			//window[jQuery('#hf_site_map').val()].panTo(laLatLng);
			fitLocationToMap('', '');
			clearInterval(window.map_ini_interval);
			setTimeout( function(){ window.map_trigger_monitor = false; }, 1000); 
		}
	}, 1000);

}


function showDealer(e){
	var laLatLng = new google.maps.LatLng( jQuery(e).parent().attr('data-lat'),  jQuery(e).parent().attr('data-lng'));

	window.map_trigger_monitor = true;
	window[jQuery('#hf_site_map').val()].panTo(laLatLng);
	setTimeout(function(){ window.map_trigger_monitor = false; }, 4000);
	
}

function mapListener(){
	//handle race condition
	try {
	    window[jQuery('#hf_site_map').val()].addListener("idle", function () {
	        mapIdleListener();
	    });
	}catch(e){
		window.map_interval = setInterval( function(){ 
			if (window[jQuery('#hf_site_map').val()]!=undefined) { 
			window[jQuery('#hf_site_map').val()].addListener("idle", function(){ mapIdleListener();} );
			clearInterval(window.map_interval);
			}
		}, 1000);	
	}	
	
}

function mapIdleListener() {
	
	if (window.map_trigger_monitor==true) return;	
	
	//cancel previous call, should only affect on process
	window.map_xhr.abort();

    // Parameter - invoke_type, street, city, state, zip, lat, lng, call_type, async, triggerPanFlag
	dealers.getNearestDealers("coords", "", "", "", "", window[jQuery('#hf_site_map').val()].getCenter().lat(), window[jQuery('#hf_site_map').val()].getCenter().lng(), 'coords', true, false);
}
	
function addMarker(lat, lang){
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lang),
		icon: 'https://iwantwestlake.blob.core.windows.net/media/iwwMarker.png',
		map: window[jQuery('#hf_site_map').val()]
	});
	window.map_markers[window.map_markers.length] = marker;
}

function fitLocationToMap(latitude, longitude) {
	var bounds = new google.maps.LatLngBounds();
	if (latitude!='' && longitude!='') {
		bounds.extend(new google.maps.LatLng(latitude, longitude));
	}	
	
	for (i in window.map_markers) {
		bounds.extend(new google.maps.LatLng(window.map_markers[i].position.lat() , window.map_markers[i].position.lng()));
	}
	window[jQuery('#hf_site_map').val()].fitBounds(bounds);
}

/*******************************************************
 * ON LOAD PAGE EVENT
 * CLICK EVENTS
 *******************************************************/
jQuery(function () {

	jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').attr('disabled', false);
	jQuery('#txt_buyer_referrer').hide(); //ie
	
	getVehicleYears();	
	
	dealers.getNearestDealers("coords", "", "", "", "", window.latitude, window.longitude, 'coords', true, true);	

    /*
	window.map_ini_interval = setInterval( function(){ 
		if (window[jQuery('#hf_site_map').val()]!=undefined && jQuery('#hf_source_lat').val().trim!='' && jQuery('#hf_source_lng').val().trim()!='') { 
			var laLatLng = new google.maps.LatLng( jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());

			console.log(laLatLng);
			window[jQuery('#hf_site_map').val()].panTo(laLatLng);

			fitLocationToMap(jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());
			clearInterval(window.map_ini_interval);
		}
	}, 1000);
    */
	
	jQuery('#co-buyer').attr('style', 'cursor:default;');
	
	jQuery('#sel_buyer_vehicle_year').on('change', function() {
		if (jQuery(this).val().trim()!='' ) {
			getVehicleMakes();
			jQuery('#sel_buyer_vehicle_model').html('').append('<option value=""></option>');
		} else {
			window.xhr_make.abort();
			jQuery('#sel_buyer_vehicle_make, #sel_buyer_vehicle_model').html('').append('<option value=""></option>');	
		}		
	});
	jQuery('#sel_buyer_vehicle_make').on('change', function() {
		if (jQuery(this).val().trim()!='' ) {	
			getVehicleModels();
		} else {
			window.xhr_make.abort();
			jQuery('#sel_buyer_vehicle_model').html('').append('<option value=""></option>');				
		}		
	});
	
	jQuery('#sel_buyer_referrer').on('change', function() {
		if (jQuery(this).val()=='Other') {
			jQuery('#txt_buyer_referrer').show().focus();
		} else {
			jQuery('#txt_buyer_referrer').hide();
		}
	});

    // Invoke only if in homepage
    /*
	Product Backlog Item 140844:[Westlake-IWW] Add new field on the form

    if(jQuery('body').hasClass('home')) {
	    computeDownPayment(jQuery('#price_range').val());
	}
	jQuery('#price_range').on('change', function () {
	    pRange = jQuery(this).val();
	    computeDownPayment(pRange);
	});
	*/
/*
	jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').on('change', function () {

		setTimeout(function(){ 
		    if (window.map_trigger_submit) {
		        return;
		    }

		    //ignore on submit event
			if (jQuery('#txt_buyer_address').val().trim()!='' && jQuery('#txt_buyer_city').val().trim()!='' && 
			    jQuery('#sel_buyer_state').val().trim() != '' && jQuery('#txt_buyer_zip').val().trim() != '') {
			try { 
				window.xhr_address.abort();
			} catch (err) {
			}

			//console.log('validate address on #txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip field completion');
			verifyAddress(true, 'buyer', jQuery('#txt_buyer_address').val(), jQuery('#txt_buyer_city').val(), jQuery('#sel_buyer_state').val(), jQuery('#txt_buyer_zip').val());
		}
		}, 100);
*/
	
    //optional for now***
    /*
	jQuery('#txt_cobuyer_address,	#txt_cobuyer_city, #sel_cobuyer_state, #txt_cobuyer_zip').on('blur', function(){
		return;
	});
    */

	if (jQuery('html').hasClass('ie8')) {	
		jQuery('#txt_buyer_residence_yr, #txt_buyer_residence_mo, #txt_buyer_employment_yr, #txt_buyer_employment_mo, #txt_cobuyer_residence_yr, #txt_cobuyer_residence_mo, #txt_cobuyer_employment_yr, #txt_cobuyer_employment_mo').each(function() {
			jQuery(this).placeholder();
		});
	}	
	
    
	jQuery('#txt_buyer_residence_yr, #txt_buyer_residence_mo, #txt_buyer_employment_yr, #txt_buyer_employment_mo, #txt_cobuyer_residence_yr, #txt_cobuyer_residence_mo, #txt_cobuyer_employment_yr, #txt_cobuyer_employment_mo').on('blur', function(){
	    el = jQuery(this);
		setTimeout(function(){
			if (jQuery(el).val().trim()!=='' && jQuery(el).val().trim()!=jQuery(el).attr('placeholder')){ 
				jQuery(el).val( jQuery(el).val()+' '+(parseInt(jQuery(el).val(),10)>1 ? jQuery(el).attr('placeholder') : jQuery(el).attr('placeholder').substr(0, jQuery(el).attr('placeholder').length-1)) );
			}
		}, 100);	
	});
    

	jQuery("#txt_buyer_dob").datepicker({
		showOn: "both",
		buttonImage: "https://iwantwestlake.blob.core.windows.net/media/2014/12/i-calendar.png",
		dateFormat: 'mm/dd/yy',
		buttonImageOnly: true,
		buttonText: "Select date",
		yearRange: "1913:-18y",
		defaultDate:  new Date((new Date().getFullYear()-18), 0, 1),
		changeMonth: true,
		changeYear: true,
		showOtherMonths: true,
		selectOtherMonths: true,
        onSelect: function () {
            validateDOB('txt_buyer_dob');
        }
	});
	
	jQuery("#txt_cobuyer_dob").datepicker({
	    showOn: "both",
	    buttonImage: "https://iwantwestlake.blob.core.windows.net/media/2014/12/i-calendar.png",
	    dateFormat: 'mm/dd/yy',
	    buttonImageOnly: true,
	    buttonText: "Select date",

	    yearRange: "1913:-18y",
	    defaultDate: new Date((new Date().getFullYear() - 18), 0, 1),
	    changeMonth: true,
	    changeYear: true,
	    showOtherMonths: true,
	    selectOtherMonths: true,
	    onSelect: function () {
	        validateDOB('txt_cobuyer_dob');
        }
	});
	
	//Radio	
	function customRadio(radioName){
        var radioButton = jQuery('input[name="'+ radioName +'"]');
        jQuery(radioButton).each(function(){
            jQuery(this).wrap( "<span class='custom-radio'></span>" );
            if(jQuery(this).is(':checked')){
                jQuery(this).parent().addClass("selected");
            }
        });
        jQuery(radioButton).click(function(){
            if(jQuery(this).is(':checked')){
                jQuery(this).parent().addClass("selected");
            }
            jQuery(radioButton).not(this).each(function(){
                jQuery(this).parent().removeClass("selected");
            });
        });
    }
    customRadio("rb_buyer_co_applicant");
	customRadio("rb_buyer_existing_customer1");
	
	function customCheckbox(checkboxName) {
		var checkBox = jQuery('input[name="'+ checkboxName +'"]');
		jQuery(checkBox).each(function(){
            jQuery(this).wrap( "<span class='custom-checkbox'></span>" );
            if(jQuery(this).is(':checked')){
                jQuery(this).parent().addClass("selected");
            }
        });

        jQuery(checkBox).click(function(){
            jQuery(this).parent().toggleClass("selected");
        });
    }
	customCheckbox("cbx_agree");
	
	//Prevent tab2 from clicking;
	jQuery('#form-tab .nav ul li').eq(1).on('click', function(e){ e.preventDefault(); return false;})
	
	//Onclick yes add co-buyer;
	jQuery('#rb_buyer_co_applicant_yes').on('click', function(){ 
		jQuery('#co-buyer').parent().addClass('active');
		jQuery( ".tab-pane" ).eq(1).addClass('active in')
		jQuery('#buyer').parent().removeClass('active');	
		jQuery( ".tab-pane" ).eq(0).removeClass('active in');
		jQuery('html, body').animate({ scrollTop: jQuery("#co-buyer").offset().top-50 }, 'fast');
		
		//revert event
		jQuery('#form-tab .nav ul li').eq(1).unbind('click');
		jQuery('#co-buyer').attr('style', 'cursor:pointer;');
	});
	
	jQuery('#rb_buyer_co_applicant_no').on('click', function(){  
		jQuery('#co-buyer').attr('style', 'cursor:default;');
		jQuery('#form-tab .nav ul li').eq(1).on('click', function(e){ e.preventDefault(); return false;})
	});

	jQuery("#txt_buyer_account_no, #txt_cobuyer_account_no").mask("9?9999999999999999999999999999",{placeholder:" "});	
	jQuery("#txt_buyer_mo_payment, #txt_buyer_mo_gross_income, #txt_cobuyer_mo_payment, #txt_cobuyer_mo_gross_income").mask("9?999999999",{placeholder:""});
	
	jQuery("#txt_buyer_residence_yr,#txt_cobuyer_residence_yr,#txt_buyer_residence_yr,#txt_cobuyer_residence_yr,#txt_buyer_residence_mo,#txt_cobuyer_residence_mo,#txt_buyer_employment_yr,#txt_cobuyer_employment_yr,#txt_buyer_employment_mo,#txt_cobuyer_employment_mo").mask("9?9",{placeholder:""});

	jQuery("#txt_buyer_ssn").mask("999-99-9999",{placeholder:""});
	jQuery("#txt_cobuyer_ssn").mask("999-99-9999",{placeholder:""});

	jQuery("#txt_buyer_dob, #txt_cobuyer_dob").mask("99/99/9999", {placeholder:"MM/DD/YYYY"});
	jQuery("#txt_buyer_zip, #txt_cobuyer_zip").mask("99999",{placeholder:""});
	jQuery("#txt_buyer_phone, #txt_buyer_employer_phone, #txt_cobuyer_phone, #txt_cobuyer_employer_phone").mask("(999)999-9999",{placeholder:""});


    // DOB marking of error border
    jQuery("#txt_buyer_dob, #txt_cobuyer_dob").keydown(function(e) {
        e.preventDefault();
    });
    
    jQuery("#txt_buyer_dob").on("blur",function (e) {
        if (isTrigger && isTrigger_submit) validateDOB('txt_buyer_dob');
    });
    jQuery("#txt_cobuyer_dob").on("blur", function (e) {
        if (isTrigger && isTrigger_submit) validateDOB('txt_cobuyer_dob');
    });
    jQuery("#txt_buyer_phone").on("blur", function (e) {
        if (isTrigger && isTrigger_submit) validatePhone('txt_buyer_phone');
    });
    jQuery("#txt_buyer_employer_phone").on("blur", function(e) {
        if (isTrigger && isTrigger_submit) validatePhone('txt_buyer_employer_phone');
    });
    jQuery("#txt_buyer_employer_phone, #txt_buyer_phone, #txt_buyer_dob, #txt_cobuyer_dob").on('change', function () {
        id = jQuery(this).attr('id');
        if (jQuery('#' + id).val().length == 0 && isTrigger_submit) {
            jQuery('#' + id).removeClass("valid").addClass('error');
        }
        isTrigger = true;
    });

	jQuery("#txt_buyer_residence_yr,#txt_cobuyer_residence_yr,#txt_buyer_residence_yr,#txt_cobuyer_residence_yr,#txt_buyer_residence_mo,#txt_cobuyer_residence_mo,#txt_buyer_employment_yr,#txt_cobuyer_employment_yr,#txt_buyer_employment_mo,#txt_cobuyer_employment_mo, #txt_buyer_mo_gross_income, #txt_buyer_mo_payment, #txt_cobuyer_mo_payment, #txt_cobuyer_mo_gross_income").on('blur', function(item) {
		if (jQuery('#'+item.currentTarget.id).hasClass('error') && jQuery('#'+item.currentTarget.id).val().length==1) {
			var RE = /^[0-9]*$/;
			if (RE.test(jQuery('#'+item.currentTarget.id).val())) {
				jQuery('#'+item.currentTarget.id).removeClass('error');
			}
			
		}
	}); 
   
	
	function validateDOB(id) {

        if(jQuery('#' +id).val().length == 0) {
	        jQuery('#'+id).removeClass("valid").addClass('error');
        } else {
	        jQuery('#'+id).removeClass("error").addClass('valid');
	        if(!validateDate(id)) {
	            if (!jQuery('#comment-input h2').eq(0).find('span').hasClass('dob-error')) {
	                var msg = "<span class='dob-error'>Sorry, the date appears to be invalid! You must be 18 Years of age or older to apply.</span>";
	                jQuery('#comment-input h2').eq(0).append(msg);
	                jQuery('.dob-error').css({ 'display': 'inline'
			        });
	                jQuery('#txt_buyer_dob').removeClass("valid").addClass("error");
	                jQuery('html, body').animate({
			        scrollTop: jQuery("#buyer").offset().top -50
	                }, 'fast');

	                return false;
	                }
	            } else {
	            if (jQuery('#comment-input h2').eq(0).find('span').hasClass('dob-error')) {
	                jQuery('#comment-input h2').eq(0).find('.dob-error').remove();
	            }
	        }
	    }
	}

	function validatePhone(id) {
	    if (jQuery('#' + id).val().length == 0) {
	        jQuery('#' + id).removeClass("valid").addClass('error');
	    } else {
	        jQuery('#' + id).removeClass("error").addClass('valid');
	    }
	}

	// submit form
	jQuery('#bt_submit').on('click', function () {
	    isTrigger_submit = true;
	    window.map_trigger_submit = true;

	    if (jQuery('#co-buyer').parent().hasClass('active')) {
			jQuery('#co-buyer').parent().removeClass('active');
			jQuery('.tab-pane').eq(1).removeClass('active in');
			jQuery('#buyer').parent().addClass('active');	
			jQuery(".tab-pane").eq(0).addClass('active in');
		}
		
		if (!jQuery('#cbx_agree').is(':checked')) {
			jQuery('#cbx_agree').parent().addClass("error");  //set appearance temporarily
		}
			
		var result = validator.form();
		
		if(result){
			validateDOB('txt_buyer_dob');
			
			if (!validateSubmitAddress()) {
			    return false;
			}

			if (!jQuery('#cbx_agree').is(':checked')) {
				jQuery('#cbx_agree').parent().addClass("error"); 
				jQuery('.error-wrap').html('<label><span class="errMsgTitle">Please fill in the highlighted field.</span> <span class="errMsgSmall">All fields are required, except those that are labeled \"(optional)\".</span></label>');
				jQuery('.error-wrap').slideDown("fast");
				jQuery('html, body').animate({ scrollTop: jQuery("#buyer").offset().top-50 }, 'fast');
				window.map_trigger_submit = false;
				return false;
			}
		
			//clear co-buyer fields if not chosen
			if (jQuery('#rb_buyer_co_applicant_no').is(':checked')) {
				jQuery('.co-buyer-form input').val('');
				jQuery('.co-buyer-form select').val('');
			}

			//double check if dealers are present
		    //make dealers optional upon submission - 08/14/2015
			// if (jQuery('#hf_dealers').val().trim()=='') {
				// if (jQuery('#nu_once_address_validate').length >=1 ) {
					// jQuery('#nu_once_address_validate').empty().html('Sorry, service is not available at the moment. Please try again later.');	
				// } else {
					// jQuery('.submit-button').after('<div id="nu_once_address_validate" class="error-unavailable">Sorry, service is not available at the moment. Please try again later.</div>');
				// }				
				// return false;
			// }
			
			if (jQuery('#nu_once_address_validate').length >=1 ) {
				jQuery('#nu_once_address_validate').empty().html('<img width="16" height="16" style="position:relative;top:5px;" src="https://iwantwestlake.blob.core.windows.net/media/2014/12/loading16x16.gif"> Processing..');	
			} else {
				jQuery('.submit-button').after('<div id="nu_once_address_validate"><img width="16" height="16" style="position:relative;top:5px;" src="https://iwantwestlake.blob.core.windows.net/media/2014/12/loading16x16.gif"> Processing..</div>');	
			}
			
			jQuery("#dfrm").submit();
		}
		window.map_trigger_submit = false;
		return false;		
	});	
    

	var validator = jQuery("#dfrm").validate({
	    onfocusout: false,
		errorPlacement: function(error, element) { },
		invalidHandler: function(e, validator) {
		    var errors = validator.numberOfInvalids();
			var limit 	= validator.errorList.length;
			var invalidError = 0;
			var reqCount = 0;

			for(ctr=0; ctr<limit; ctr++) {
			    if (validator.errorList[ctr].method == 'required') {
			        reqCount++;
			    }
			    if (validator.errorList[ctr].method != 'required') {
			        invalidError++;
			    }
			}
			
			if (errors) {
				var msg = '<label><span class="errMsgTitle">Please fill in the highlighted field'+(errors>1?'s':'')+'.</span> <span class="errMsgSmall">All fields are required, except those that are labeled \"(optional)\".</span></label>';
				if (invalidError>0 && reqCount==0) { // show this if only error remaining, validation is done on all fields***
					msg = '<label>Please check the value'+(reqCount>1?'s':'')+' entered on the highlighted field'+(invalidError>1?'s':'')+'.</label>';
				}
				
				jQuery('.error-wrap').html(msg);
				jQuery('html, body').animate({
					scrollTop: jQuery('#dfrm').offset().top - 100
				}, 500, function(){
					jQuery('.error-wrap').slideDown("fast");
				});
				return false;
			} else {				
				return true;
			}
		},
		rules: {
		}
	});

	//preload images
	jQuery('#preloadImg-Container').append(loader);
	jQuery('#preloadImg-Container').append('<img src="https://iwantwestlake.blob.core.windows.net/media/2014/12/checkbox-on.png" width=1 height=1>');
	jQuery('#preloadImg-Container').append('<img src="https://iwantwestlake.blob.core.windows.net/media/2014/12/checkbox-on.png" width=1 height=1>');
	
	//for IE, thank you page, iframe pdf fix
	if (jQuery('#ifrOverlayIe').length>=1) {
		jQuery('#ifrOverlayIe').css('height', jQuery('#header').height()+1);
		if (jQuery('.logo').css('display')=='block') {jQuery('#ifrOverlayIe').css('left',0);} 

	}
	
	function validateSubmitAddress(){
		
		if (jQuery('#txt_buyer_address').val().trim()=='' || jQuery('#txt_buyer_city').val().trim()=='' || 
			jQuery('#sel_buyer_state').val().trim()=='' || jQuery('#txt_buyer_zip').val().trim()=='')	{
			return false;		
		}
		
		if ( jQuery('#txt_buyer_address').attr('validate-address')==jQuery('#txt_buyer_address').val() && 
			jQuery('#txt_buyer_address').attr('validate-city')==jQuery('#txt_buyer_city').val() && 
			jQuery('#txt_buyer_address').attr('validate-state')==jQuery('#sel_buyer_state').val() && 
			jQuery('#txt_buyer_address').attr('validate-zip')==jQuery('#txt_buyer_zip').val() && 
			jQuery('#txt_buyer_address').attr('data-status')=='invalid' 
		) {
			return false;
		}
		
		if ( jQuery('#txt_buyer_address').attr('validate-address')=='' && 
			jQuery('#txt_buyer_address').attr('validate-city')=='' && 
			jQuery('#txt_buyer_address').attr('validate-state')=='' && 
			jQuery('#txt_buyer_address').attr('validate-zip')=='' && 
			jQuery('#txt_buyer_address').attr('data-status')=='invalid' 
		) {
			return false;
		}
		
		if ( jQuery('#txt_buyer_address').attr('validate-address')==jQuery('#txt_buyer_address').val() && 
			jQuery('#txt_buyer_address').attr('validate-city')==jQuery('#txt_buyer_city').val() && 
			jQuery('#txt_buyer_address').attr('validate-state')==jQuery('#sel_buyer_state').val() && 
			jQuery('#txt_buyer_address').attr('validate-zip')==jQuery('#txt_buyer_zip').val() && 
			jQuery('#txt_buyer_address').attr('data-status')=='valid' 
		) {
			return true;
		}


		//revalidate 
		try {
			window.xhr_address.abort();
		} catch(err) { }	
				
		if (jQuery('#nu_once_address_validate').length >=1 ) {
			jQuery('#nu_once_address_validate').empty().html('<img width="16" height="16" style="position:relative;top:5px;" src="https://iwantwestlake.blob.core.windows.net/media/2014/12/loading16x16.gif"> Validating Residential Address. Please wait.');
		} else {
			jQuery('.submit-button').after('<div id="nu_once_address_validate"><img width="16" height="16" style="position:relative;top:5px;" src="https://iwantwestlake.blob.core.windows.net/media/2014/12/loading16x16.gif"> Validating Residential Address. Please wait.</div>');
		}	
		
		//console.log('validate address on form submission');
		verifyAddress(false, 'buyer', jQuery('#txt_buyer_address').val(), jQuery('#txt_buyer_city').val(), jQuery('#sel_buyer_state').val(), jQuery('#txt_buyer_zip').val());

		jQuery('#nu_once_address_validate').html('');
				
		if (jQuery('#txt_buyer_address').attr('data-status')=='invalid' || jQuery('#txt_buyer_address').attr('data-status')=='unavailable') {
			jQuery('html, body').animate({ scrollTop: jQuery('#comment-input h2').eq(1).offset().top-50 }, 'fast');
			window.map_trigger_submit = false;
			return false;
		}

		return true;
	}

	function computeDownPayment(pRange) {
	    pRange = pRange.split('-');
	    percentage = .20;

	    pRange1 = stringFormat.convertPreformattedStringAmountToFloat(pRange[0]);
	    pRange2 = stringFormat.convertPreformattedStringAmountToFloat(pRange[1]);
     
	    downPayment = '$' + stringFormat.addCommas(parseInt(pRange1) * percentage) + ' - $' + stringFormat.addCommas(parseInt(pRange2) * percentage);
	    jQuery('#txt_down_payment').val(downPayment);

	    return downPayment;
	}
});



function validateDate(id) { 
	var eighteenYearsAgo = moment().subtract(18, "years");
    var birthday = moment(jQuery("#"+id).val());
    
    if (!birthday.isValid()) {
        return false;  
    }
    else if (eighteenYearsAgo.isAfter(birthday)) {
        return true;  
    }
    else {	
        return false;   
    }
}

function getVehicleYears() {
    var label = jQuery('#sel_buyer_vehicle_year').parent().find('label').html();
    
	jQuery.ajax({
		url: '/services/?service=get-vehicle-years', 
		type: "POST",
		dataType: "json", 
		beforeSend: function() {
			jQuery('#sel_buyer_vehicle_year').parent().find('label').append(window.loader);
		},
		success: function(data){
		    if (data.status == 'active') {
				for(ctr=0;ctr<data.years.length;ctr++) {
					jQuery('#sel_buyer_vehicle_year').append('<option value="'+data.years[ctr]+'">'+data.years[ctr]+'</option>');
				}
			}
			jQuery('#sel_buyer_vehicle_year').parent().find('label').html(label);
		},		
		error : function (xhr, textStatus, errorThrown) {   
			jQuery('#sel_buyer_vehicle_year').parent().find('label').html(label);	
		}
	});
}

function getVehicleMakes() {
	var label 	= jQuery('#sel_buyer_vehicle_make').parent().find('label').html();
	window.xhr_make = jQuery.ajax({
		url: window._serviceBaseUrl + '/services/?service=get-vehicle-make', 
		type: "POST",
		data: { 'vehicleYear':jQuery('#sel_buyer_vehicle_year').val()},
		dataType: "json", 
		beforeSend: function() {
			jQuery('#sel_buyer_vehicle_make').parent().find('label').append(window.loader);
		},
		success: function(data){
			if (data.status=='active') {
				jQuery('#sel_buyer_vehicle_make').html('').append('<option value=""></option>');
				for(ctr=0;ctr<data.makes.length;ctr++) {
					jQuery('#sel_buyer_vehicle_make').append('<option value="'+data.makes[ctr]+'">'+data.makes[ctr]+'</option>');
				}
			}
			jQuery('#sel_buyer_vehicle_make').parent().find('label').html(label);
		},		
		error : function (xhr, textStatus, errorThrown) {   
			jQuery('#sel_buyer_vehicle_make').parent().find('label').html(label);	
		}
	});
}


function getVehicleModels() {
	var label 	= jQuery('#sel_buyer_vehicle_model').parent().find('label').html();
	window.xhr_make = jQuery.ajax({
		url: window._serviceBaseUrl + '/services/?service=get-vehicle-model', 
		type: "POST",
		data: { 'vehicleYear':jQuery('#sel_buyer_vehicle_year').val(), 'vehicleMake':jQuery('#sel_buyer_vehicle_make').val()},
		dataType: "json", 
		beforeSend: function() {
			jQuery('#sel_buyer_vehicle_model').parent().find('label').append(window.loader);
		},
		success: function(data){
			if (data.status=='active') {
				if (data.Models.length <=0) {
					jQuery('#sel_buyer_vehicle_model').html('').append('<option value="N/A" >N/A</option>');
				} else {	
					jQuery('#sel_buyer_vehicle_model').html('').append('<option value=""></option>');
					for(ctr=0;ctr<data.Models.length;ctr++) {
						jQuery('#sel_buyer_vehicle_model').append('<option value="'+data.Models[ctr]+'">'+data.Models[ctr]+'</option>');
					}
				}	
			}
			jQuery('#sel_buyer_vehicle_model').parent().find('label').html(label);
		},		
		error : function (xhr, textStatus, errorThrown) {   
			jQuery('#sel_buyer_vehicle_model').parent().find('label').html(label);	
		}
	});
}

function addressValid(type, data) {
	if (type=='buyer') { type=''; } 
	else { type = 'co'; }
	
	jQuery('#txt_'+type+'buyer_address').attr('data-status', 'valid');
	jQuery('#txt_'+type+'buyer_address').attr('data-status-msg', data.msg);
	jQuery('#txt_'+type+'buyer_address,	#txt_'+type+'buyer_city, #sel_'+type+'buyer_state, #txt_'+type+'buyer_zip').removeClass('error');
	
	if( data.msg.toLowerCase() != 'service unavailable' ){
		//auto-correct
		jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip')
		jQuery('#txt_buyer_address').val(data.address);
		jQuery('#txt_buyer_city').val(data.city);
		jQuery('#txt_buyer_zip').val(data.zip);
		jQuery('#sel_buyer_state').val(data.state);
	
		jQuery('#txt_buyer_address').attr('validate-address', data.address);
		jQuery('#txt_buyer_address').attr('validate-city', data.city);
		jQuery('#txt_buyer_address').attr('validate-state', data.state);
		jQuery('#txt_buyer_address').attr('validate-zip', data.zip);
	
		if (data.msg!='') {
			if(!jQuery('#comment-input h2').eq(1).find('span').hasClass('address-warning')){
				jQuery('#comment-input h2').eq(1).append("<span class='address-warning' style='display:block !important;width:100%;'>"+data.msg+". You can choose to ignore this message and continue with your submission.</span>");
			} else {
				jQuery('.address-warning').html(data.msg + '. You can choose to ignore this message and continue with your submission.' );
				jQuery('.address-warning').attr('style', 'display:block !important;width:92%;');
			}	
		} else {
			jQuery('.address-warning').remove();
		}		
	} else {	
		jQuery('#comment-input h2').eq(1).find('.address-warning').remove();
	}
	jQuery('.dob-error').remove();
}
	
function addressInvalid(type, msg) {
	if (type=='buyer') { type=''; } 
	else { type = 'co'; }
	
	var displayMsg = msg + '. You can choose to ignore this message and continue with your submission.';
	
	jQuery('#txt_'+type+'buyer_address').attr('data-status', 'valid');
	jQuery('#txt_'+type+'buyer_address').attr('data-status-msg', msg);
	jQuery('#txt_'+type+'buyer_address,	#txt_'+type+'buyer_city, #sel_'+type+'buyer_state, #txt_'+type+'buyer_zip').addClass('error');	

	jQuery('#txt_buyer_address').attr('validate-address', jQuery('#txt_buyer_address').val());
	jQuery('#txt_buyer_address').attr('validate-city', jQuery('#txt_buyer_city').val());
	jQuery('#txt_buyer_address').attr('validate-state', jQuery('#sel_buyer_state').val());
	jQuery('#txt_buyer_address').attr('validate-zip', jQuery('#txt_buyer_zip').val());
		
	if(!jQuery('#comment-input h2').eq(1).find('span').hasClass('address-warning')){
		jQuery('#comment-input h2').eq(1).append("<span class='address-warning'>"+displayMsg+"</span>");
	} else {
		jQuery('.address-warning').html(displayMsg).show();
		
	}	
	jQuery('.address-warning').attr('style', 'display:block !important;width:92%;').show();
	jQuery('.dob-error').remove();
	jQuery('html, body').animate({ scrollTop: jQuery('#comment-input h2').eq(1).offset().top-50 }, 'fast');
}	

function serviceUnavailable(type) {
	if (type=='buyer') { type=''; } 
	else { type = 'co'; }
		
	var errMsg = 'Sorry, service is not available at the moment. Please try again later.';
	jQuery('.addressValidationIndicator').remove();
	jQuery('#txt_'+type+'buyer_address,	#txt_'+type+'buyer_city, #sel_'+type+'buyer_state, #txt_'+type+'buyer_zip').attr('disabled', false);
	jQuery('#txt_'+type+'buyer_address,	#txt_'+type+'buyer_city, #sel_'+type+'buyer_state, #txt_'+type+'buyer_zip').removeClass('fldsDisabled');
			
	jQuery('#txt_'+type+'buyer_address').attr('data-status', 'unavailable');
	jQuery('#txt_'+type+'buyer_address').attr('data-status-msg', errMsg);

	if(!jQuery('#comment-input h2').eq(1).find('span').hasClass('dob-error')){
		jQuery('#comment-input h2').eq(1).append('<span class="dob-error">'+errMsg+'</span>');
	} else {
		jQuery('.dob-error').html(errMsg);
	}	
	jQuery('.dob-error').css({'display':'inline'}).attr('style', 'display:inline;');
	
	jQuery('.address-warning').remove();	
	jQuery('html, body').animate({ scrollTop: jQuery('#comment-input h2').eq(1).offset().top-50 }, 'fast');
	
	//clear dealers
	jQuery('hf_dealers').val('');
	jQuery('.map-dealers-list').empty().html(errMsg);
	for (i in window.map_markers) {
		window.map_markers[i].setMap(null);
	}	
	
}

function verifyAddress(asyncFlag, type, address, city, state, zip) {
	if (address.trim()=='' ||  city.trim()=='' || state.trim()=='' || zip.trim()=='') {
		//return { 'status':'failed', 'error':'One or more of the following are empty: address, city, state, and/or zip' };
		return false;
	}
	var retVal = true;
	
	var divMsg = '<div class="addressValidationIndicator"><img width="16" height="16" style="position:relative;top:13px;" src="https://iwantwestlake.blob.core.windows.net/media/2014/12/loading16x16.gif"> Validating Residential Address.</div>';
	jQuery('#txt_buyer_address').before(divMsg);
	jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').attr('disabled', true);
	jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').addClass('fldsDisabled');
			
	window.xhr_address = jQuery.ajax({
		url: window._serviceBaseUrl + '/services/?service=address-validation', 
		type: "POST",
		dataType: "json", 
		async: asyncFlag,
		data: {Address:address, City:city, State:state, Zip:zip}, 
		success: function(data){
			
			jQuery('.addressValidationIndicator').remove();
			jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').attr('disabled', false);
			jQuery('#txt_buyer_address,	#txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').removeClass('fldsDisabled');
			
			if (data.status == 'invalid') {
				addressInvalid(type, data.msg);
				retVal = s(asyncFlag, 'txt_buyer_zip');
				
			} else if (data.msg.toLowerCase() == 'service unavailable') {
				serviceUnavailable(type);
				retVal = false;
			} else {
			    //console.log('get nearest dealers using user address');

			    addressValid(type, data);
				window.map_trigger_monitor = true;
				
				dealers.getNearestDealers('address', address.trim(), city.trim(), state.trim(), zip.trim(), '', '', 'address', asyncFlag, true);	 
			}
		},		
		error : function (xhr, textStatus, errorThrown) {  
			serviceUnavailable(type);
			retVal = false;
		}
	});
	
	return retVal;
}

function s(asyncFlag, zipField) {
	if (jQuery('#'+zipField).val().trim()=='') { return false; }
	var retVal = false;
	
	jQuery.ajax({
		type : 'post',
		dataType : 'json',
		async : asyncFlag,
		url : 'services/?service=get-geocode-zip',
		data : { zip: jQuery('#'+zipField).val().trim() }, 
		success: function(response) {				
			if (response.status == 'valid') {
				
				window.map_trigger_monitor = true;
				
				jQuery('#'+zipField).attr('data-lat', response.latitude);
				jQuery('#'+zipField).attr('data-lng', response.longitude);
				jQuery('#hf_source_lat').val(response.latitude);
				jQuery('#hf_source_lng').val(response.longitude);
				jQuery('#txtStreet').attr('data-status', 'valid');
				
				//console.log('get nearest dealers using ZIP code entered');
				dealers.getNearestDealers('ziplatlng', '', '', '', '', response.latitude, response.longitude, 'ziplatlng', asyncFlag, false);
				
				jQuery('#txt_buyer_address').attr('data-status', 'valid');
				jQuery('#txt_buyer_address').attr('data-status-msg', '');
	
				setTimeout(function(){ 
					var laLatLng = new google.maps.LatLng( jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());
					window[jQuery('#hf_site_map').val()].panTo(laLatLng);
					fitLocationToMap(jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());
					setTimeout( function(){ window.map_trigger_monitor = false; }, 1000); 
				}, 3000); 
				retVal = true;
				
			} else {
				jQuery('#txt_buyer_address').attr('data-status', 'invalid');
				jQuery('#txt_buyer_address').attr('data-status-msg', 'Invalid Zip Code.');
				jQuery('#'+zipField).attr('data-lat', '');
				jQuery('#'+zipField).attr('data-lng', '');
				
				jQuery('.error-wrap').html('<label><span class="errMsgTitle">Invalid Zip Code.</span> <span class="errMsgSmall">Please check the entered value.</span></label>');
				jQuery('.error-wrap').slideDown("fast");
				jQuery('html, body').animate({ scrollTop: jQuery("#buyer").offset().top-50 }, 'fast');
				window.map_trigger_submit = false;
				retVal = false;	
			}
		},
		error: function(request, status_text, error) {
			jQuery('#txt_buyer_address').attr('data-status', 'unavailable');
			jQuery('#'+zipField).attr('data-lat', '');
			jQuery('#'+zipField).attr('data-lng', '');

			jQuery('.error-wrap').html('<label><span class="errMsgTitle">We are unable to process your request at the moment. Please try again later.</span></label>');
			jQuery('.error-wrap').slideDown("fast");
			jQuery('html, body').animate({ scrollTop: jQuery("#buyer").offset().top-50 }, 'fast');
			window.map_trigger_submit = false;
			retVal = false;	
		}
	}); 
	
	return retVal;
}
	//Reduce header size on Scroll and fix it to top
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

jQuery.prototype.placeholder = function() {
	var placeholder = jQuery(this).attr('placeholder');
	
	if( jQuery(this).val().length < 1 ) {
		jQuery(this).val( placeholder );
	}	
	jQuery(this).bind('focus', function() {
		if( jQuery(this).val() == placeholder ) {
			jQuery(this).removeClass('placeholder').val('');
		}
	});	
	jQuery(this).bind('blur', function() {
		if( jQuery(this).val().length < 1 ) {
			jQuery(this).addClass('placeholder').val( placeholder );
		}
	});
}


if (!String.prototype.trim) {
  (function(){
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(rtrim, "");
    }
  })();
}

var stringFormat = function (options) {

    this.addCommas = function (nStr) {
        var amountFlag = false;
        if (nStr[0] == '$') {
            nStr = nStr.substr(1, nStr.length);
            amountFlag = true;
        }
        nStr = nStr * 1;
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        if (amountFlag) {
            return '$' + x1 + x2;
        } else {
            return x1 + x2;
        }
    }

    this.convertPreformattedStringAmountToFloat = function (givenString) {
        return parseFloat(givenString.replace(/,/g, '').replace('$', ''));
    }
}
var stringFormat = new stringFormat();

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});