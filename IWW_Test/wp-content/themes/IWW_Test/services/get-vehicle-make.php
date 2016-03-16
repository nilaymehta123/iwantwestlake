<?php 
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	die;
}

$year = @intval($_POST['vehicleYear']);
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
		"vehicleYear" => $year,
		"partner" => array(
			"CompanyName" 	=> siteConfig::get('service_wccpartner_company'),
			"Username"		=> siteConfig::get('service_wccpartner_user'),
			"Password"		=> siteConfig::get('service_wccpartner_pwd')
		)
	);
	
	$client = new SoapClient(siteConfig::get('service_wccpartner_url').'?wsdl', $options); 
	$result = $client->GetVehicleMakes($data);
	$makes = array();


	if (is_array($result->GetVehicleMakesResult->Makes->string)) {
		foreach($result->GetVehicleMakesResult->Makes->string AS $item) {
			array_push($makes, $item);
		}
	} else {
		if ($result->GetVehicleMakesResult->Makes->string!='') {
			array_push($makes, $result->GetVehicleMakesResult->Makes->string);
		}
	}	

	echo json_encode(array('status'=>'active', 'makes'=>$makes));
} catch(Exception $e) {
	echo json_encode(array('status'=>'service unavailable: '.$e->getMessage(), 'makes'=>array()));
}
