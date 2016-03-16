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
	'location'=> siteConfig::get('service_model_by_year')
); 
if (!isset($_POST['valyear']) || trim($_POST['valyear'])=='') {
	$date = array('year'=> date('Y'));
} else {
	$date = array('year'=> intval($_POST['valyear']));
}
try {
	$client = new SoapClient(siteConfig::get('service_model_by_year').'?wsdl', $options); 
	$result = $client->GetModelNames($date);
	$models = array();
	if (@$result->GetModelNamesResult->string){
		foreach($result->GetModelNamesResult->string AS $item) {
			array_push($models, $item);
		}
	}	
	sort($models);
	echo json_encode(array('status'=>'active', 'models'=>$models));

} catch(Exception $e) {
	echo json_encode(array('status'=>'service unavailable: '.$e->getMessage(), 'models'=>array()));
}	
