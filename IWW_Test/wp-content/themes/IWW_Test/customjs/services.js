var loader 	= '<img width="16" height="16" style="float: right; position: relative; top: 40px; right: 30px;" src="https://kawasaki.blob.core.windows.net/media/loading16x16.gif">';
var xhr_address;
var map_ini_interval, map_interval;

jQuery(document).ready(function () {
	jQuery('#hf_dealers').val('');
	
	if (jQuery('#buyer_year').length > 0) {
		getYears();	
	}	
	
	//default initial
	try {
		window.map_trigger_monitor==true;
		dealers.getNearestDealers("coords", "", "", "", "", latitude, longitude, true, true);		  		
		setTimeout(function(){ window.map_trigger_monitor==false; }, 3000);
	} catch(e) {

	}	
		
	jQuery('#buyer_year').on('change', function() {
		getModelYears();
	});
});

function getModelYears(){
	var label 	= jQuery('#buyer_model_category').parent().find('label').html();
	jQuery.ajax({
		url: window._serviceBaseUrl + '/services/?service=get-year-models',
		type: "POST",
		dataType: "json",
		data: {valyear: +jQuery('#buyer_year').val()},
		beforeSend: function(){
			jQuery('#buyer_model_category').parent().find('label').append(window.loader);
		},
		success: function(data){
			if (data.status=='active') {
				jQuery('#buyer_model_category').html('<option value=""></option>');
				for(ctr=0;ctr<data.models.length;ctr++) {
					jQuery('#buyer_model_category').append('<option value="'+data.models[ctr]+'">'+data.models[ctr]+'</option>');
				}
			}
			jQuery('#buyer_model_category').parent().find('label').html(label);
		},
		error : function (xhr, textStatus, errorThrown) {
			//ame: temporary
			jQuery('#buyer_model_category').parent().find('label').html(label);
		}
	});
}

function getYears() {
	var label 	= jQuery('#buyer_year').parent().find('label').html();
	jQuery.ajax({
		url: window._serviceBaseUrl + '/services/?service=get-model-years', 
		type: "POST",
		dataType: "json", 
		beforeSend: function() {
			jQuery('#buyer_year').parent().find('label').append(window.loader);
		},
		success: function(data){
			if (data.status=='active') {
				for(ctr=0;ctr<data.years.length;ctr++) {
					jQuery('#buyer_year').append('<option value="'+data.years[ctr]+'">'+data.years[ctr]+'</option>');
				}
			}
			jQuery('#buyer_year').parent().find('label').html(label);
		},		
		error : function (xhr, textStatus, errorThrown) {   
			//ame: temporary
			jQuery('#buyer_year').parent().find('label').html(label);	
		}
	});
}


jQuery(document).ready(function () {
	jQuery('#buyer_address,	#buyer_city, #buyer_state, #buyer_zip').on('change', function(){
		setTimeout( function(){
			if (window.map_trigger_submit) { return; } //ignore on submit event
			if (jQuery('#buyer_address').val().trim()!='' && jQuery('#buyer_city').val().trim()!='' && 
				jQuery('#buyer_state').val().trim()!='' && jQuery('#buyer_zip').val().trim()!='') {
				try {
					window.xhr_address.abort();
				} catch(err) { }			
				verifyAddress(true, jQuery('#buyer_address').val(), jQuery('#buyer_city').val(), jQuery('#buyer_state').val(), jQuery('#buyer_zip').val());
			}
		}, 100);
	});	
});	

function verifyAddress(asyncFlag, address, city, state, zip) {
	if (address.trim()=='' ||  city.trim()=='' || state.trim()=='' || zip.trim()=='') {
		return { 'status':'failed', 'error':'One or more of the following are empty: address, city, state, and/or zip' };
	}
	
	var status;
	window.xhr_address = jQuery.ajax({
		url: window._serviceBaseUrl+'/services/?service=address-validation', 
		type: "POST",
		dataType: "json", 
		async: asyncFlag,
		data: {Address:address, City:city, State:state, Zip:zip}, 
		success: function(data){
			if (data.status == 'invalid') {
				var displayMsg = data.msg + '. You can choose to ignore this message and continue with your submission.';
				if(!jQuery('#comment-input h2').eq(1).find('span').hasClass('address-warning')){
					jQuery('#comment-input h2').eq(1).append("<span class='address-warning'>"+displayMsg+"</span>");
				} else {
					jQuery('.address-warning').html(displayMsg).show();
				}
				jQuery('.address-warning').attr('style', 'display:block !important;width:92%;').show();				
				
				jQuery('#buyer_address').attr('data-status', 'valid');
				jQuery('#buyer_address').attr('data-status-msg', data.msg);
				jQuery('#buyer_address,	#buyer_city, #buyer_state, #buyer_zip').addClass('error');
				
				jQuery('#buyer_address').attr('data-address', jQuery('#buyer_address').val());
				jQuery('#buyer_address').attr('data-city', jQuery('#buyer_city').val());
				jQuery('#buyer_address').attr('data-state', jQuery('#buyer_state').val());
				jQuery('#buyer_address').attr('data-zip', jQuery('#buyer_zip').val());
				
				status = getZipGeoCode(asyncFlag);
				
			} else {
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
		
				jQuery('#buyer_address').attr('data-status', 'valid');
				jQuery('#buyer_address').attr('data-status-msg', data.msg);
				jQuery('#buyer_address,	#buyer_city, #buyer_state, #buyer_zip').removeClass('error');
				
				jQuery('#buyer_address').attr('data-address', data.address);
				jQuery('#buyer_address').attr('data-city', data.city);
				jQuery('#buyer_address').attr('data-state', data.state);
				jQuery('#buyer_address').attr('data-zip', data.zip);
				
				jQuery('#buyer_address').val(data.address);
				jQuery('#buyer_city').val(data.city);
				jQuery('#buyer_state').val(data.state);
				jQuery('#buyer_zip').val(data.zip);
				
				window.map_trigger_monitor = true;
				
				dealers.getNearestDealers('address', data.address, data.city, data.state, data.zip, '', '', asyncFlag, true);	 
			}
		},		
		error : function (xhr, textStatus, errorThrown) {   
			//status = { 'status':'failed', 'error':'Encountered an error while trying to connect to service.' };
			//allow to continue
			jQuery('#buyer_address').attr('data-status', 'valid');
			jQuery('#buyer_address').attr('data-status-msg', 'service unavailable');
			jQuery('#buyer_address,	#buyer_city, #buyer_state, #buyer_zip').removeClass('error');
		}
	});
	
	return status;
}

function getZipGeoCode(asyncFlag) {
	if (jQuery('#buyer_zip').val().trim()=='') { return false; }
	var retVal = false;
	
	jQuery.ajax({
		type : 'post',
		dataType : 'json',
		async : asyncFlag,
		url : 'services/?service=get-geocode-zip',
		data : { zip: jQuery('#buyer_zip').val().trim() }, 
		success: function(response) {				
			if (response.status == 'valid') {
				window.map_trigger_monitor = true;	
				jQuery('#buyer_zip').attr('data-lat', response.latitude);
				jQuery('#buyer_zip').attr('data-lng', response.longitude);
				jQuery('#hf_source_lat').val(response.latitude);
				jQuery('#hf_source_lng').val(response.longitude);
				
				dealers.getNearestDealers('ziplatlng', '', '', '', '', response.latitude, response.longitude, asyncFlag, true);	 
				jQuery('#buyer_address').attr('data-status', 'valid');
				jQuery('#buyer_address').attr('data-status-msg', '');
				
				setTimeout(function(){ 
					var laLatLng = new google.maps.LatLng( jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());
					window[jQuery('#hf_kawasaki_map').val()].panTo(laLatLng);
					fitLocationToMap(jQuery('#hf_source_lat').val(), jQuery('#hf_source_lng').val());
					setTimeout( function(){ window.map_trigger_monitor = false; }, 1000); 
				}, 3000);
			} else {
				jQuery('#buyer_address').attr('data-status', 'invalid');
				jQuery('#buyer_address').attr('data-status-msg', 'Invalid Zip Code.');
				
				jQuery('#buyer_zip').attr('data-lat', '');
				jQuery('#buyer_zip').attr('data-lng', '');
				jQuery('#hf_dealers').val('');
				
				jQuery('.error-wrap').html('<label><span class="errMsgTitle">Invalid Zip Code.</span> <span class="errMsgSmall">Please check the entered value.</span></label>');
				jQuery('.error-wrap').slideDown("fast");
				jQuery('html, body').animate({ scrollTop: jQuery("#buyer").offset().top-50 }, 'fast');
				window.map_trigger_submit = false;
				retVal = false;	
			}
		},
		error: function(request, status_text, error) {
			jQuery('#buyer_address').attr('data-status', 'unavailable');
			jQuery('#buyer_zip').attr('data-lat', '');
			jQuery('#buyer_zip').attr('data-lng', '');

			jQuery('.error-wrap').html('<label><span class="errMsgTitle">We are unable to process your request at the moment. Please try again later.</span></label>');
			jQuery('.error-wrap').slideDown("fast");
			jQuery('html, body').animate({ scrollTop: jQuery("#buyer").offset().top-50 }, 'fast');
			window.map_trigger_submit = false;
			retVal = false;	
		}
	}); 
	
	return retVal;
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