<?php

class service_helper{
	public $url;
	public $service_name;
	public $web_method;
	private $envelope_helper;
	public $lead;
	
	public static function set_service_params($url, $service_name, $web_method){
		$this->url = $url;
		$this->service_name = $service_name;
		$this->web_method = $web_method;
	}
	
	public function invoke_service($url, $credentials, $http_header, $request_data){
		$ch = curl_init();
		
		$curl_options = array(
			CURLOPT_URL => $url,
			CURLOPT_USERAGENT => "PHP",
			CURLOPT_HEADER => 0,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_SSL_VERIFYPEER => false,
			CURLOPT_SSL_VERIFYHOST => 2,
			CURLOPT_POST => 1,				
			CURLOPT_HTTPHEADER => $http_header,
			CURLOPT_POSTFIELDS => $request_data,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1
		);
		if (!is_null($credentials)) {
			$curl_options[CURLOPT_HTTPAUTH] = CURLAUTH_NTLM;
			$curl_options[CURLOPT_USERPWD]	= $credentials;
		}
		
		curl_setopt_array($ch, $curl_options);
		
		$output = curl_exec($ch); 
		$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);		
		
		curl_close($ch);
	 
		return ($http_code == 500) ? $http_code : $output;
	}
}
?>