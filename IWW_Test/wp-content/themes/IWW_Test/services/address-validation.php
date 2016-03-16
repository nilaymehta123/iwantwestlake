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
    'cache_wsdl'	=> WSDL_CACHE_NONE 
); 
try {
	$client = new SoapClient(siteConfig::get('service_address_validation').'?WSDL', $options); 
	$data = array('address' 	=> array(
				'ReferenceID' 	=> '',
				'Address' 		=> trim(@$_POST['Address']),
				'City' 			=> trim(@$_POST['City']),
				'State'			=> trim(@$_POST['State']),
				'Zip'			=> trim(@$_POST['Zip'])
		));
		
	$result = $client->ValidateAddress($data);

	if (@trim($result->ValidateAddressResult->Error->Desc)!='') {
		$output['status'] 	= 'invalid';
		$output['msg']		= $result->ValidateAddressResult->Error->Desc;
	} else {
		$output['status'] 	= 'valid';
		//if ($result->ValidateAddressResult->DPV=='1') {
		if ($result->ValidateAddressResult->DPVDesc=='Yes, the input record is a valid mailing address') {
			$output['msg'] = '';
		} else {
			$output['msg'] = $result->ValidateAddressResult->DPVDesc;
		}		
		$output['address']	= $result->ValidateAddressResult->Address;	
		$output['city']		= $result->ValidateAddressResult->City;	
		$output['state']	= $result->ValidateAddressResult->State;	
		$output['zip']		= substr($result->ValidateAddressResult->Zip, 0, 5);	
	}

	echo json_encode($output);
} catch(Exception $error)	{
	echo json_encode(array('status'=>'valid', 'msg'=>'Service Unavailable'));
}