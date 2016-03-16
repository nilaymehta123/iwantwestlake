<?php
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	die();
}

require_once("helpers/service_helper.php");

function curl_download($url, $zip) {
	$xml = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><GetGeocodeMultipleWithCredentials xmlns="http://www.nowcom.com/addressvalidation/">
		<addressList><GeocodeAddress><CallExternalService>AS_NEEDED</CallExternalService><CallAlternateWhenNeeded>false</CallAlternateWhenNeeded><Error>false</Error>
		<IsPermanentFailure>false</IsPermanentFailure>';
	$xml .=	'<Zip>'.$zip.'</Zip>';
	$xml .= '<GeocodeAccuracy>None</GeocodeAccuracy><Latitude>0</Latitude><Longitude>0</Longitude><NumDaysActive>0</NumDaysActive></GeocodeAddress></addressList></GetGeocodeMultipleWithCredentials>';	
	$xml .= '</s:Body></s:Envelope>';

	$http_header = array(
		'Content-Type: text/xml; charset=utf-8', 
        'SOAPAction: "http://www.nowcom.com/addressvalidation/GetGeocodeMultipleWithCredentials"'
	);
	
	$service_helper = new service_helper;
	return $service_helper->invoke_service($url, null, $http_header, $xml);	
}

$zip = trim(strip_tags(@$_POST['zip']));
if ($zip=='') { die(); }
$ch_result = curl_download(siteConfig::get('service_address_validation'), $zip );

$doc = new DOMDocument();
$doc->preserveWhiteSpace = false;
@$doc->loadXML($ch_result);
$output = array();

if (intval($doc->getElementsByTagName('Latitude')->item(0)->nodeValue)==0 && 
	intval($doc->getElementsByTagName('Longitude')->item(0)->nodeValue)==0  ) {
	$output['status'] = 'invalid';	
} else {
	$output['status'] = 'valid';	
}
$output['latitude'] = $doc->getElementsByTagName('Latitude')->item(0)->nodeValue;
$output['longitude'] = $doc->getElementsByTagName('Longitude')->item(0)->nodeValue;

echo json_encode($output);

die();