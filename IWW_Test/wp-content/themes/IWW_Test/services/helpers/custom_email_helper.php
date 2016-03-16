<?php

class custom_email_helper{
	public $to;
	public $from;
	public $subject;
	public $message;
	
	public function send_email($html=false){		
		if ($html) { add_filter('wp_mail_content_type', 'set_html_content_type'); }
		$headers = array();
		$headers[] = "From: No-Reply <" . $this->from . ">";	
		$mail = @stripslashes(wp_mail($this->to, $this->subject, $this->message, $headers));
		$result = json_decode($mail);	
		remove_filter('wp_mail_content_type', 'set_html_content_type');
		
		return $result->message;
	}
}

?>