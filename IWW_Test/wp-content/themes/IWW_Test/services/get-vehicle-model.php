<?php 
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	die;
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
		"vehicleYear" 	=> @intval($_POST['vehicleYear']),
		"vehicleMake"	=> @$_POST['vehicleMake'],
		"partner" 		=> array(
			"CompanyName" 	=> siteConfig::get('service_wccpartner_company'),
			"Username"		=> siteConfig::get('service_wccpartner_user'),
			"Password"		=> siteConfig::get('service_wccpartner_pwd')
		)
	);
	
	$client = new SoapClient(siteConfig::get('service_wccpartner_url').'?wsdl', $options); 
	$result = $client->GetVehicleModels($data);
	$Models = array();
	
	if (is_array($result->GetVehicleModelsResult->Models->string)) {
		foreach($result->GetVehicleModelsResult->Models->string AS $item) {
			array_push($Models, $item);
		}
	} else {
		if ($result->GetVehicleModelsResult->Models->string!='') {
			array_push($Models, $result->GetVehicleModelsResult->Models->string);
		}
	}

	echo json_encode(array('status'=>'active', 'Models'=>$Models));
} catch(Exception $e) {
	echo json_encode(array('status'=>'service unavailable: '.$e->getMessage(), 'Models'=>array()));
}
