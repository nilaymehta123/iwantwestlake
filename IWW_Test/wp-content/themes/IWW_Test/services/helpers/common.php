<?php
require_once("custom_email_helper.php");

abstract class SubmissionType{
	const WESTLAKE_ADMIN = 'admin-email';
}

abstract class ReturnType{
	const SUCCESS = 'Completed';
	const FAILED = 'Failed';	
}

class common{
	public static function send_email($params){
		$custom_email = new custom_email_helper;
		$custom_email->from = siteConfig::get('generic_email_sender');
		$custom_email->to = $params['to'];		
		$custom_email->subject = $params['subject'];
		$custom_email->message = $params['message'];	
		
		$custom_email->send_email();
	}	
}
