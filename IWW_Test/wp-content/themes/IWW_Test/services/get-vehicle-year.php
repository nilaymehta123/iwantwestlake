<?php 
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	//die;
}

$output  = array('status'=>'invalid');
$options = array( 
	'soap_version'	=> SOAP_1_1, 
    'exceptions'	=> false, 
    'trace'			=> 0, 
    'cache_wsdl'	=> WSDL_CACHE_NONE,
	'location'		=> siteConfig::get('service_wccpartner_url')
);
try {
	$data = array(
		"partner" => array(
			"CompanyName" 	=> siteConfig::get('service_wccpartner_company'),
			"Username"		=> siteConfig::get('service_wccpartner_user'),
			"Password"		=> siteConfig::get('service_wccpartner_pwd')
		)
	);	
	$client = new SoapClient(siteConfig::get('service_wccpartner_url').'?wsdl', $options); 
	$result = $client->GetVehicleYears($data);
	$years = array();

	if (is_array($result->GetVehicleYearsResult->Years->int)) {
		foreach($result->GetVehicleYearsResult->Years->int AS $item) {
			array_push($years, $item);
		}
	} else {
		if ($result->GetVehicleYearsResult->Years->int!='') {
			array_push($years, $result->GetVehicleYearsResult->Years->int);
		}
	}	
	rsort($years, SORT_NUMERIC );
	echo json_encode(array('status'=>'active', 'years'=>$years));
} catch(Exception $e) {
	echo json_encode(array('status'=>'service unavailable: '.$e->getMessage(), 'years'=>array()));
}
