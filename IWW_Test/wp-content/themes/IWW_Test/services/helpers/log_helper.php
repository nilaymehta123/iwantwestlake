<?php

abstract class LogType{
	const INFO = 'green';
	const ERROR = 'red';
	const NORMAL = 'black';
}

class log_helper{
	public function write($message, $log_type){
		//check message
		if($message == ''){
			return array(status => false, message => 'Messsage is empty');
		}
		
		//get ip address
		if(($remote_addr = $_SERVER['REMOTE_ADDR']) == ''){
			$remote_addr = "REMOTE_ADDR_UNKNOWN";
		}
		
		//get uri script
		if(($request_uri = $_SERVER['REQUEST_URI']) == ''){
			$request_uri = "REQUEST_URI_UNKNOWN";
		}
		
		$formatted_log_message = "[" . date('Y-m-d H:i:s') . "] " . $remote_addr . " " . $request_uri . " " . $message;
		
		error_log("<div style='color:$log_type'>" . $formatted_log_message . "</div>", 3, get_template_directory() . "/services/logs/data/" . date('Y-m-d') . ".log");
	}
}

?>