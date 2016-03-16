<?php 
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	die;
}

class siteMailer {

	protected $westlake = '';
	protected $errMsg	= array();
	private $buyer, $dealers, $leadId;
	
	function __construct($buyer, $cobuyer, $leadId, $dealers){
		$this->buyer 	= $buyer;
		$this->cobuyer 	= $cobuyer;
		$this->leadId	= $leadId;
		$this->dealers	= $dealers;
	}
	
	public function isError(){
	    if (count($this->errMsg) > 0) return true;

		return false;
	}
	
	public function sendMail($content = 'westlake'){
		if ($this->westlake == '') {
			$errMsg['required'] = 'Missing customer/westlake Email Address';
			return false;
		}
                
        switch($content){
            case 'customer-dealerlist':
                $dealerlist_from = get_option('dealerlist_from') == '' ? 'noreply@iwantwestlakefinancial.com' : get_option('dealerlist_from');
                $subject = get_option('dealerlist_subject') == '' ? 'FROM: www.iwantwestlake.com' : get_option('dealerlist_subject');

                $this->sendCustomerDealerlist(array(
                    'from' => $dealerlist_from,
                    'subject' => $subject
                )); 
                //plain text                            
            break;

            case 'county-email':
                $subject = get_option('county_subject') == '' ? 'FROM: www.iwantwestlake.com' : get_option('county_subject');
                $this->sendWestlake(array('subject' => $subject )); //plain text
            break;

            default:
                $subject = get_option('admin_subject') == '' ? 'FROM: www.iwantwestlake.com' : get_option('admin_subject');
                $this->sendWestlake(array('subject' => $subject )); //plain text
        }
	}
	
	public function setRecipients($email){
		$this->westlake = $email;
	}

    public function getErrMsg() {
        return $this->errMsg;
    }	
	
	private function sendWestlake($params = array()){

		$subject 	= $params['subject']; 
		$lf			= "\r\n";
		$headers 	= array();
		$headers[] 	= 'From: Westlake Financial Services<no-reply@westlakefinancial.com>';
		//$headers[] 	= 'cc: BSiddiqui@nowcom.com'; //***temporary
		$attachments= array();
		
		$referrer = $this->buyer->referrer;
		if (strtolower($this->buyer->referrer)=='other' && trim($this->buyer->ref_other)!='') {
			$referrer = stripslashes($this->buyer->ref_other);
		}
		
		$msg = 'Lead ID: '.$this->leadId.$lf;
		
		$msg .= $lf.'BUYER:'.$lf;
		$msg .= $lf.'Basic Information:'.$lf;
		$msg .= $lf.'First Name: '.$this->buyer->fname.$lf;
		$msg .= 'Last Name: '.$this->buyer->lname.$lf;
		$msg .= 'Email: '.$this->buyer->email.$lf;
		$msg .= 'Phone: '.$this->buyer->phone.$lf;
		$msg .= 'Date of Birth: '.$this->buyer->dob.$lf;
		$msg .= 'How did you hear about us: '.$referrer.$lf;
		$msg .= 'Existing Westlake Customer?: '.ucfirst($this->buyer->account_no).$lf;
		
		$msg .= $lf.'Residential Information:'.$lf;
		$msg .= $lf.'Address: '.$this->buyer->address.$lf;
		$msg .= 'City: '.$this->buyer->city.$lf;
		$msg .= 'State: '.$this->buyer->state.$lf;
		$msg .= 'Zip Code: '.$this->buyer->zip.$lf;
		$msg .= 'Residence: '.$this->buyer->residence_type.$lf;
		$msg .= 'Monthly Payment: '.$this->buyer->residence_monthly.$lf;
		$msg .= 'Borrower County: '.$this->buyer->residence_county.$lf;
		$msg .= 'Time at Current Residence: '.$this->buyer->residence_years.' Year'.(intval($this->buyer->residence_years)>1?'s, ':', ').$this->buyer->residence_months.' Month'.(intval($this->buyer->residence_months)>1?'s':'').$lf;
		
		$msg .= $lf.'Employment Information:'.$lf;
		$msg .= $lf.'Employer: '.$this->buyer->employer.$lf;
		$msg .= 'Occupation: '.$this->buyer->occupation.$lf;
		$msg .= 'Employer Phone Number: '.$this->buyer->employer_phone.$lf;
		$msg .= 'Monthly Gross Income(before tax): '.$this->buyer->monthly_gross.$lf;
		$msg .= 'Time with Current Employer: '.$this->buyer->emp_years.' Year'.(intval($this->buyer->emp_years)>1?'s, ':', ').$this->buyer->emp_months.' Month'.(intval($this->buyer->emp_months)>1?'s':'').$lf;
		
		if($this->buyer->co_buyer == 'yes'){
			$msg .= $lf.'CO-BUYER:'.$lf;
			$msg .= $lf.'Basic Information:'.$lf;
			$msg .= $lf.'First Name: '.$this->cobuyer->fname.$lf;
			$msg .= 'Last Name: '.$this->cobuyer->lname.$lf;
			$msg .= 'Email: '.$this->cobuyer->email.$lf;
			$msg .= 'Phone: '.$this->cobuyer->phone.$lf;
			$msg .= 'Date of Birth: '.$this->cobuyer->dob.$lf;

			$msg .= $lf.'Residential Information:'.$lf;
			$msg .= $lf.'Address: '.$this->cobuyer->address.$lf;
			$msg .= 'City: '.$this->cobuyer->city.$lf;
			$msg .= 'State: '.$this->cobuyer->state.$lf;
			$msg .= 'Zip Code: '.$this->cobuyer->zip.$lf;
			$msg .= 'Residence: '.$this->cobuyer->residence_type.$lf;
			$msg .= 'Monthly Payment: '.$this->cobuyer->residence_monthly.$lf;
			$msg .= 'Time at Current Residence: '.$this->cobuyer->residence_years.' Year'.(intval($this->cobuyer->residence_years)>1?'s, ':', ').$this->cobuyer->residence_months.' Month'.(intval($this->cobuyer->residence_months)>1?'s':'').$lf;
			
			$msg .= $lf.'Employment Information:'.$lf;
			$msg .= $lf.'Employer: '.$this->cobuyer->employer.$lf;
			$msg .= 'Occupation: '.$this->cobuyer->occupation.$lf;
			$msg .= 'Employer Phone Number: '.$this->cobuyer->employer_phone.$lf;
			$msg .= 'Monthly Gross Income(before tax): '.$this->cobuyer->monthly_gross.$lf;
			$msg .= 'Time with Current Employer: '.$this->cobuyer->emp_years.' Year'.(intval($this->cobuyer->emp_years)>1?'s, ':', ').$this->cobuyer->emp_months.' Month'.(intval($this->cobuyer->emp_months)>1?'s':'').$lf;
		}

		if ($this->buyer->vehicle_year!='' || $this->buyer->vehicle_make !='' || $this->buyer->vehicle_model!='') {
			$msg .= $lf.'Vehicle Information: '.$lf;
			$msg .= $lf.'Year: '.$this->buyer->vehicle_year.$lf;
			$msg .= 'Make: '.$this->buyer->vehicle_make.$lf;
			$msg .= 'Model: '.$this->buyer->vehicle_model.$lf;
		}	
		
		$msg .= $lf.'Available Dealers: '.$lf.$lf;
		foreach($this->dealers AS $item) {
			if ($item->name!='') {
				$msg .= $item->name.$lf;
				$msg .= $item->address.' '.$item->city.', '.$item->state.' '.$item->zip.$lf;
				if ($item->phone!='') {
					$msg .= "(".substr($item->phone, 0, 3).") ".substr($item->phone, 3, 3)."-".substr($item->phone,6).$lf;
				}
				$msg .= $lf;
			}	
		}	

		$sendMail = wp_mail($this->westlake, $subject, $msg, $headers, $attachments); 
		$sendMail = json_decode($sendMail['body']);

		if ($sendMail->message != 'success') {
			//TODO: error handling
			$errMsg['wp_mail'] = $sendMail->errors;
            return false;
		}

		return true;
	}


	private function sendCustomerDealerlist($params = array(), $html = true){
		$subject 	= $params['subject']; 
		$headers 	= array();
		$headers[] 	= 'From: ' . $params['from'];
		$attachments= array();

        $msg = file_get_contents(get_bloginfo('template_directory').'/services/templates/dealers.html');    
        
        $keys 	= array( 
            '[_full_name]', 
            '[_lead_id]', 
            '[_email]',
            '[_phone_work]',
            
            '[_dealer1]', 
            '[_dealer2]', 
            '[_dealer3]' 
        );
		
        $rpc = array(
            $this->buyer->fname.' '.$this->buyer->lname, 
            $this->buyer->lead_id, 
            $this->buyer->email,
            $this->buyer->employer_phone,
        );

        foreach($this->dealers AS $item) {
            if ($item->name!='') {

                $dealerStr = $item->name;
                $dealerStr .= '<br/>';
                $dealerStr .= $item->address.' '.$item->city.', '.$item->state.' '.$item->zip.$lf;
                $dealerStr .= '<br/>';
                
                if ($item->phone!='') {
                    $dealerStr .= "(".substr($item->phone, 0, 3).") ".substr($item->phone, 3, 3)."-".substr($item->phone,6).'';
                }
            }	
            array_push($rpc, $dealerStr);       
		}

        $msg = str_replace($keys, $rpc, $msg);

        // uncomment to see how email temp looks on browser
        //echo $msg;
        //die;

        if ($html) 
            add_filter('wp_mail_content_type', 'set_html_content_type'); 
        
		$sendMail = wp_mail($this->westlake, $subject, $msg, $headers, $attachments); 
        $sendMail = json_decode($sendMail['body']);

		if ($sendMail->message != 'success') {
			$errMsg['send_dealerlist'] = $mail->message;
			//TODO: error handling
			return false;
		}

		return true;
	}
  
}