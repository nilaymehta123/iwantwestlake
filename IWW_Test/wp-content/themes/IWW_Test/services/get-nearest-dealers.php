<?php

	// Exit if accessed directly
	if( ! defined( 'ABSPATH' ) ) {
		die;
	}

	function setFilterStructure($param, $nSpace='d4p1') {
		$retVal = '';
		foreach($param AS $key=>$item) {
			$retVal .= '
			<'.$nSpace.':FilterStructure>
				<'.$nSpace.':Name>'.$key.'</'.$nSpace.':Name>
				<'.$nSpace.':Value>'.$item .'</'.$nSpace.':Value>
			</'.$nSpace.':FilterStructure>';
		}
		
		return $retVal;
	}

	function curl_download($url, $type, $flds, $filter = 'iniQry') {

		$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_USERAGENT, "PHP");
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);

		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2); 

		curl_setopt($ch, CURLOPT_POST, 1 );
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
			'Content-Type: text/xml; charset=utf-8', 
			'SOAPAction: "http://tempuri.org/RequestService/GetClosestDealers"'
		)); 

		$xml = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><GetClosestDealers xmlns="http://tempuri.org/">
			<filters xmlns:d4p1="http://schemas.datacontract.org/2004/07/Westlake.Marketing.Website.BusinessLogic.DataStructures" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">';
		
		if ($type!='address') {	
			$xml .= setFilterStructure(
			   array(
					'Latitude'=>$flds['Latitude'], 
					'Longitude'=>$flds['Longitude']
				), 
				'd4p1'
			);
		} else {
			$xml .= setFilterStructure(
				array(
					'Street'=>$flds['Street'], 
					'City'=>$flds['City'], 
					'State'=>$flds['State'], 
					'Zip'=>$flds['Zip']
				), 
				'd4p1'
			);		
		}	
		//$xml .= setFilterStructure(array('NumberOfResults'=>3, 'LeadProgram'=>'Yes'), 'd4p1');	
		
		if ($filter == 'iniQry') {
			$xml .= setFilterStructure(
				array(
					'NumberOfResults'=>20, 
					'LeadProgram'=>'Yes',  
					'DealerTypeForPricing'=>'Presidential Dealer', 
					'MinBoardedDeals_30'=>1, 
					'ProductionStatuses'=> 'Producing|New',
					'Radius'=>50
				), 
				'd4p1'
		   );	
			//$xml .= setFilterStructure(array('NumberOfResults'=>20, 'LeadProgram'=>'Yes', 'MinBoardedDeals_30'=>0, 'ProductionStatuses'=>'Producing|New','Radius'=>50), 'd4p1');	
		} else {
			$xml .= setFilterStructure(
				array(
					'NumberOfResults'=>20, 
					'LeadProgram'=>'Yes', 
					'MinBoardedDeals_90'=>1, 
					'ProductionStatuses'=>'Producing|New'
				), 
				'd4p1'
			);	
		}	
		$xml .= '</filters></GetClosestDealers></s:Body></s:Envelope>';
		

		curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
		curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
		curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_NTLM);
		curl_setopt($ch, CURLOPT_USERPWD, siteConfig::get('service_westlakeapp_user').':'.siteConfig::get('service_westlakeapp_pwd'));
		
		$output = curl_exec($ch); 
		
		curl_close($ch);
	 
		return $output ;	
	}

	function getDealerItems($dom) {
		$dealers 	= array();
		$limit 		= $dom->getElementsByTagName("AccountName")->length;

		for($i = 0; $i < $limit; $i++){	
			if (trim($dom->getElementsByTagName("AccountName")->item($i)->nodeValue)!='') {
				array_push( $dealers, array(
						"dcid" => $dom->getElementsByTagName("DCID")->item($i)->nodeValue,
						"name" => $dom->getElementsByTagName("AccountName")->item($i)->nodeValue,
						"address" => $dom->getElementsByTagName("Address1")->item($i)->nodeValue,
						"city" => $dom->getElementsByTagName("City")->item($i)->nodeValue,
						"state" => $dom->getElementsByTagName("State")->item($i)->nodeValue,
						"zip" => $dom->getElementsByTagName("Zip")->item($i)->nodeValue,
						"phone" => $dom->getElementsByTagName("BusinessPhone")->item($i)->nodeValue,
						"email" => $dom->getElementsByTagName("Email")->item($i)->nodeValue,
						"lat" => $dom->getElementsByTagName("Latitude")->item($i)->nodeValue,
						"lng" => $dom->getElementsByTagName("Longitude")->item($i)->nodeValue,
						"sourcelat" => $dom->getElementsByTagName("SourceLatitude")->item($i)->nodeValue,
						"sourcelng" => $dom->getElementsByTagName("SourceLongitude")->item($i)->nodeValue,
						"radius" => $dom->getElementsByTagName("Radius")->item($i)->nodeValue
					)
				);
			}	
		}
		
		return $dealers;
	}

	$street 	= trim(strip_tags(@$_POST['street']));
	$city		= trim(strip_tags(@$_POST['city']));
	$state 		= trim(strip_tags(@$_POST['state']));
	$zip 		= trim(strip_tags(@$_POST['zip']));
	$invoke_type = trim(strip_tags(@$_POST['invoke_type']));
	$latitude 	= trim(strip_tags(@$_POST['latitude']));
	$longitude 	= trim(strip_tags(@$_POST['longitude']));

	//$flds = ($invoke_type != 'address' ? array('Latitude'=>$latitude, 'Longitude'=>$longitude) : array('Street'=>$street, 'City'=>$city, 'State'=>$state, 'Zip'=>$zip));
	if($invoke_type != 'address') {
		$flds = array(
			'Latitude' => $latitude, 
			'Longitude'=> $longitude
		);
	} else {
		$flds = array(
			'Street' => $street, 
			'City' => $city, 
			'State'=>$state, 
			'Zip'=>$zip
		);
	}

    //echo "run curl download on https://app.westlakefinancial.com/mkt/Services/WcfServices/RequestService.svc";
	$ch_result = curl_download(siteConfig::get('service_westlakeapp_url'), $invoke_type, $flds);

	$doc = new DOMDocument();
	$doc->preserveWhiteSpace = false;
	@$doc->loadXML($ch_result);

	//check if empty 
	$tag = $doc->getElementsByTagName('ClosestDealers')->item(0);
	$dealer_list 	= array();

	if(@$tag->hasChildNodes()) {
		$dealer_list = getDealerItems($doc);
	}

	if (count($dealer_list) < 3 ) {
		$ch_result = curl_download(siteConfig::get('service_westlakeapp_url'), $invoke_type, $flds, '2nd' );
		@$doc->loadXML($ch_result);
		
		$dealer_list_ids = array();
		foreach($dealer_list AS $item) {
			array_push($dealer_list_ids, $item['dcid']);	
		}
		
		$dealers 	= getDealerItems($doc);
		usort($dealers, 'sort_by_radius');	
		
		foreach($dealers AS $item) {
			if (!in_array($item['dcid'], $dealer_list_ids)) {
				array_push($dealer_list, $item);
			}	
		}
	}

	function sort_by_radius($a, $b){
		 if ($a['radius'] == $b['radius']) {
			return 0;
		}
		return ($a['radius'] < $b['radius']) ? -1 : 1;
	}

	echo json_encode(
			array( 
				'status' => (count($dealer_list) <=0 ? 'failed' :'success'), 
				'count' => (count($dealer_list) < 3 ? count($dealer_list) : 3), 
				'dealers' => array_slice($dealer_list, 0, 3)
			)
		);

	die();