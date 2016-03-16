<?php

define('SITE_ENV', 'development'); 

//------------------------------------------------------------
$SITE_SETTINGS['development']['service_address_validation'] 	= 'https://services.nowcom.com/AddressValidationService/AddressValidation.asmx';

$SITE_SETTINGS['development']['service_wccpartner_company'] 	= 'IWantWestlake';
$SITE_SETTINGS['development']['service_wccpartner_user'] 		= 'WestlakeUser';
$SITE_SETTINGS['development']['service_wccpartner_pwd'] 		= 'Westlake@14';
$SITE_SETTINGS['development']['service_wccpartner_origin_site'] = 'IWantWestlake.com';
$SITE_SETTINGS['development']['service_wccpartner_url'] 		= 'https://services-dev0.wilshirecommercial.com/WCCPartnerService.svc'; 

$SITE_SETTINGS['development']['service_westlakeapp_user'] = 'dev0\nowwfsdc_intusr';
$SITE_SETTINGS['development']['service_westlakeapp_pwd'] 	= 'Testing.Dev0';
$SITE_SETTINGS['development']['service_westlakeapp_url'] 	= 'https://app-dev0.westlakefinancial.com/mkt/Services/WcfServices/RequestService.svc';

$SITE_SETTINGS['development']['email_westlake'] = 'IWantWestlake@WestlakeFinancial.com';

class siteConfig {
	private static $initialized = false;
	private static $settings;
	
	public static function init(){
		global $SITE_SETTINGS;
		if (self::$initialized) { return; }
		
		self::$settings 	= $SITE_SETTINGS[SITE_ENV];
		self::$initialized	= true;
	}
	
	public static function get($config) {
        self::init();
		if (trim($config)=='') return '';

		return self::$settings[$config];	
    }
}

?>