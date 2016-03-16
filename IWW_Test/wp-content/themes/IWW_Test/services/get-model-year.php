<?php 
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	die;
}

$output  = array('status'=>'invalid');
$options = array( 
	'soap_version'=>SOAP_1_1, 
    'exceptions'=>true, 
    'trace'=>1, 
    'cache_wsdl'=>WSDL_CACHE_NONE,
	'location'=>siteConfig::get('service_model_year')
); 
try {
	$client = new SoapClient(siteConfig::get('service_model_year').'?wsdl', $options); 
	$result = $client->GetModelYears();
	$years = array();

	foreach($result->GetModelYearsResult->int AS $item) {
		array_push($years, $item);
	}
	rsort($years, SORT_NUMERIC );
	echo json_encode(array('status'=>'active', 'years'=>$years));
} catch(Exception $e) {
	echo json_encode(array('status'=>'service unavailable: '.$e->getMessage(), 'years'=>array()));
}
