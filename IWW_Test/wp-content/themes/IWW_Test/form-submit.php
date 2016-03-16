<?php 
// Template Name: IWantWestLake Form Submit Template

if(count($_POST) == 0)     
    wp_redirect(home_url()); 

$cdata = new StdClass();

$fields = array(
	'fname'=>'', 
    'lname'=>'', 
    'email'=>'',
    'ssn'=>'', 
    'phone'=>'', 
    'dob'=>'', 
    'referrer'=>'',
    'ref_other'=>'', 
    'account_no'=>'', 
	'address'=>'', 
    'city'=>'', 
    'state'=>'', 
    'zip'=>'', 
    'residence_type'=>'', 
    'residence_county'=>'', 
    'residence_monthly'=>'', 
    'residence_years'=>'', 
    'residence_months'=>'', 
	'employer'=>'', 
    'occupation'=>'', 
    'employer_phone'=>'', 
    'monthly_gross'=>'', 
    'emp_years'=>'', 
    'emp_months'=>'', 
	'vehicle_year'=>'', 
    'vehicle_make'=>'', 
    'vehicle_model'=>'',
    'vehicle_type' => '',
    'price_range' => '',
    'down_payment' => '',
	'co_buyer'=>'', 
    'agree'=>''
); 

$fieldNames = array(
    'fname'=>'txt_buyer_fname', 
    'lname'=>'txt_buyer_lname', 
	'email'=>'txt_buyer_email', 
    'ssn'=>'txt_buyer_ssn', 
    'phone'=>'txt_buyer_phone', 
    'dob'=>'txt_buyer_dob', 
    'referrer'=>'sel_buyer_referrer', 
    'ref_other'=>'txt_buyer_referrer', 
	'account_no'=>'rb_buyer_existing_customer1', 
    'address'=>'txt_buyer_address', 
    'city'=>'txt_buyer_city', 
    'state'=>'sel_buyer_state', 
    'zip'=>'txt_buyer_zip', 
	'residence_type'=>
    'sel_buyer_residence', 
    'residence_county' => 'sel_buyer_county', 
    'residence_monthly'=>'txt_buyer_mo_payment', 
    'residence_years'=>'txt_buyer_residence_yr', 
	'residence_months'=>'txt_buyer_residence_mo', 
    'employer'=>'txt_buyer_employer', 
    'occupation'=>'txt_buyer_occupation', 
	'employer_phone'=>'txt_buyer_employer_phone', 
    'monthly_gross'=>'txt_buyer_mo_gross_income', 
    'emp_years'=>'txt_buyer_employment_yr', 
    'emp_months'=>'txt_buyer_employment_mo',
	
    'vehicle_year'=>'sel_buyer_vehicle_year', 
    'vehicle_make'=>'sel_buyer_vehicle_make', 
    'vehicle_model'=>'sel_buyer_vehicle_model',

    // Product Backlog Item 140844:[Westlake-IWW] Add new field on the form
    //'vehicle_type' => 'desired_vehicle_type',
	//'price_range' => 'sel_price_range',
	//'down_payment' => 'txt_down_payment',

    'co_buyer'=>'rb_buyer_co_applicant', 
    'agree'=>'cbx_agree'
 );

$coFieldNames = array(
    'fname'=>'txt_cobuyer_fname', 
    'lname'=>'txt_cobuyer_lname', 
	'email'=>'txt_cobuyer_email', 
    'ssn'=>'txt_cobuyer_ssn', 
    'phone'=>'txt_cobuyer_phone',
    'dob'=>'txt_cobuyer_dob',  
	'address'=>'txt_cobuyer_address', 
    'city'=>'txt_cobuyer_city', 
    'state'=>'sel_cobuyer_state', 
    'zip'=>'txt_cobuyer_zip', 
	'residence_type'=>'sel_cobuyer_residence', 
    'residence_monthly'=>'txt_cobuyer_mo_payment', 
    'residence_years'=>'txt_cobuyer_residence_yr', 
	'residence_months'=>'txt_cobuyer_residence_mo', 
    'employer'=>'txt_cobuyer_employer', 
    'occupation'=>'txt_cobuyer_occupation', 
	'employer_phone'=>'txt_cobuyer_employer_phone', 
    'monthly_gross'=>'txt_cobuyer_mo_gross_income', 
    'emp_years'=>'txt_cobuyer_employment_yr', 
    'emp_months'=>'txt_cobuyer_employment_mo',
	
    'vehicle_year'=>'', 
    'vehicle_make'=>'', 
    'vehicle_model'=>'',

    // Product Backlog Item 140844:[Westlake-IWW] Add new field on the form
    //'vehicle_type' => '',
    //'price_range' => '',
    //'down_payment' => '',
	
    'co_buyer'=>'', 
    'agree'=>''
);

//'account_no'=>'txt_cobuyer_account_no', --> removed

//*** update	
$requiredFields = array(
    'txt_buyer_fname', 
    'txt_buyer_lname', 
    'txt_buyer_email', 
    'txt_buyer_phone', 
    'txt_buyer_dob', 
    'sel_buyer_referrer',
	'txt_buyer_address', 
    'txt_buyer_city', 
    'sel_buyer_state', 
    'txt_buyer_zip', 
    'sel_buyer_residence', 
    'txt_buyer_mo_payment', 
	'txt_buyer_residence_yr', 
    'txt_buyer_residence_mo', 
    'txt_buyer_employer', 
    'txt_buyer_occupation', 
    'txt_buyer_employer_phone', 
	'txt_buyer_mo_gross_income', 
    'txt_buyer_employment_yr' , 
    'txt_buyer_employment_mo'
    
    // Product Backlog Item 140844:[Westlake-IWW] Add new field on the form
    //'desired_vehicle_type', 
);

$dealer = array(
    'dcid'=>'', 
    'name'=>'', 
    'address'=>'',
    'city'=>'', 
    'state'=>'', 
    'zip'=>'', 
    'phone'=>'', 
    'email'=>'', 
    'lat'=>'', 
    'lng'=>''
);

$cdata->buyer 	= (object) $fields;
$cdata->cobuyer = (object) $fields; 
//ignore extra fields on buyers

if ($_SERVER['REQUEST_METHOD']=='POST') {

    // loop through $fieldNames
    // values here are the fieldname that will be used on mapping the XML
	foreach($fieldNames AS $key => $value){

		$post_value =  empty($_POST[$value]) ? "" : $_POST[$value];
    
		if($key == "ssn"){
			$post_value = str_replace("-","", $_POST[$value]);
		}
		if($key == "dob") {
			$post_value = date("Y-m-d", strtotime($_POST[$value]));
		}
        if($key == "down_payment") {
			$post_value = str_replace(" ","", $_POST[$value]);
        }

		$cdata->buyer->{$key} = _sanitize($post_value);
	}

	foreach($coFieldNames AS $key => $value){
		if ($value != '') {
			$post_value =  $_POST[$value];

			if($key == "ssn"){
				$post_value = str_replace("-","", $_POST[$value]);
			}
			else if($key == "dob") {
				$post_value = date("Y-m-d", strtotime($_POST[$value]));
			}

			$cdata->cobuyer->{$key} = _sanitize($post_value);
		}	
	}

	//buyer
	_checkRequired($cdata->buyer, $requiredFields);	

	//cleanup hardcoded text VIA JS in year/month fields
	$cdata->buyer->residence_months = intval($cdata->buyer->residence_months);
	$cdata->buyer->residence_years 	= intval($cdata->buyer->residence_years);
	$cdata->buyer->emp_months		= intval($cdata->buyer->emp_months);
	$cdata->buyer->emp_years		= intval($cdata->buyer->emp_years);
	
	//adjust yr/month entries
	if ($cdata->buyer->residence_months >= 12) {
		$cdata->buyer->residence_years 		+= (int)($cdata->buyer->residence_months / 12);
		$cdata->buyer->residence_months 	= ($cdata->buyer->residence_months%12);
	}
	
	if ($cdata->buyer->emp_months >= 12) {
		$cdata->buyer->emp_years 	+= (int)($cdata->buyer->emp_months / 12);
		$cdata->buyer->emp_months 	= ($cdata->buyer->emp_months%12);
	}
	
	if ($cdata->buyer->co_buyer == 'yes') {

		$cdata->cobuyer->residence_months	= $cdata->cobuyer->residence_months != '' ? intval($cdata->cobuyer->residence_months):'';
		$cdata->cobuyer->residence_years 	= $cdata->cobuyer->residence_years != '' ? intval($cdata->cobuyer->residence_years):'';
		$cdata->cobuyer->emp_months 		= $cdata->cobuyer->emp_months != ''? intval($cdata->cobuyer->emp_months):'';
		$cdata->cobuyer->emp_years 			= $cdata->cobuyer->emp_years != ''? intval($cdata->cobuyer->emp_years):'';
		
		if ($cdata->cobuyer->residence_months>=12) {
			$cdata->cobuyer->residence_years 		+= (int)($cdata->cobuyer->residence_months / 12);
			$cdata->cobuyer->residence_months 		= ($cdata->cobuyer->residence_months % 12);
		}
		
		if ($cdata->cobuyer->emp_months>=12) {
			$cdata->cobuyer->emp_years 		+= (int)($cdata->cobuyer->emp_months / 12);
			$cdata->cobuyer->emp_months 	= ($cdata->cobuyer->emp_months%12);
		}
	}
    
	$referrer = $cdata->buyer->referrer;
	if (strtolower($cdata->buyer->referrer)=='other' && trim($cdata->buyer->ref_other)!='') {
		$referrer = stripslashes($cdata->buyer->ref_other);
	}
	
	//velocify service
	$service_wsdl = siteConfig::get('service_wccpartner_url').'?wsdl';

	//$client = new SoapClient($service_wsdl, array('location' => siteConfig::get('service_wccpartner_url')));
	$client = new SoapClient($service_wsdl, array('location' => siteConfig::get('service_wccpartner_url'), 'trace'=>true));
	
	//'DBAccountNumber' => $cdata->buyer->account_no,
	//dealers
	$jsonDealers = json_decode(stripslashes($_POST['hf_dealers']));
	$limit = count($jsonDealers);

	for($ctr=0; $ctr<=$limit; $ctr++) {
		$cdata->dealer[$ctr] = (object) $dealer;
	}
	
	$ctr=0;
	foreach($cdata->dealer AS &$item){
		foreach($dealer AS $key=>$value) {
			$item->{$key} = $jsonDealers[$ctr]->{$key};
		}
		$ctr++;	
	}	
	
	$ctr = 0;
	$prmDealer = [];

	foreach($cdata->dealer AS $itemDealer){
		if ($itemDealer->name!='') {
			$prmDealer[$ctr] = array(
				'Address'		=> $itemDealer->address,	
				'City'			=> $itemDealer->city,
				'DealerCode'	=> $itemDealer->dcid,
				//'DealerContactName' => $itemDealer->name,
				//'DealerContactPhone' => $itemDealer->phone,
				'DealerName'	=> $itemDealer->name,
				'Phone'			=> $itemDealer->phone, 
				'SalesRepUsername' => '',
				'State'			=> $itemDealer->state,
				'Zip'			=> $itemDealer->zip, 
				);
			$ctr++;
		}	
	}	


	$data = array(
		'application' => array(
				'AmountToBorrow' => '',
				'Dealer1' => (!empty($prmDealer[0]) ? $prmDealer[0]:'null'), 
				'Dealer2' => (!empty($prmDealer[1]) ? $prmDealer[1]:'null'), 
				'Dealer3' => (!empty($prmDealer[2]) ? $prmDealer[2]:'null'), 
				'LeadSource' => $referrer,
				'OriginWebsite' => siteConfig::get('service_wccpartner_origin_site'),				
				'PrimaryApplicant' => array(
					'City' 	=> $cdata->buyer->city,
					'DOB' 	=> $cdata->buyer->dob,
					'Email'	=> $cdata->buyer->email,
					'Employer' => $cdata->buyer->employer,
					'EmployerPhone' => $cdata->buyer->employer_phone,
					'FirstName' => $cdata->buyer->fname,
					'HomePhone' => $cdata->buyer->phone,
					'LastName' => $cdata->buyer->lname,
					'MonthlyHousingPayment' => $cdata->buyer->residence_monthly,
					'MonthlyIncome' => $cdata->buyer->monthly_gross,
					'Occupation' => $cdata->buyer->occupation,
					'ResidenceType' => $cdata->buyer->residence_type,
					'SSN' => $cdata->buyer->ssn,
					'State' => $cdata->buyer->state,
					'StreetAddress' => $cdata->buyer->address,
					'TimeAtResidence' => ((intval($cdata->buyer->residence_years)*12) + intval($cdata->buyer->residence_months)),
					'TimeWithEmployer' => ((intval($cdata->buyer->emp_years)*12) + intval($cdata->buyer->emp_months)),
					'WorkPhone' => $cdata->buyer->employer_phone,
					'Zip' => $cdata->buyer->zip,
					'BorrowerCounty' => $cdata->buyer->residence_county
					),
				'Vehicle' => array(
					
                    'Year' => $cdata->buyer->vehicle_year,
					'Model' => $cdata->buyer->vehicle_model,
					'Make' => $cdata->buyer->vehicle_make,

                    //Product Backlog Item 140844:[Westlake-IWW] Add new field on the form
                    //$cdata->buyer->vehicle_type
                    //$cdata->buyer->price_range
                    //$cdata->buyer->down_payment
					)
				),
			'partner' => array(
				'CompanyName' => siteConfig::get('service_wccpartner_company'),
				'Username' => siteConfig::get('service_wccpartner_user'),
				'Password' => siteConfig::get('service_wccpartner_pwd')
				)
			);
	
	if ($_POST['rb_buyer_co_applicant']=='yes') {
		//'DBAccountNumber' => $cdata->cobuyer->account_no,
		$data['application']['CoApplicant'] = array(
			'City' 	=> $cdata->cobuyer->city,
			'DOB' 	=> $cdata->cobuyer->dob,
			'Email'	=> $cdata->cobuyer->email,
			'Employer' => $cdata->cobuyer->employer,
			'EmployerPhone' => $cdata->cobuyer->employer_phone,
			//'EmployerState' => 'XX',
			'FirstName' => $cdata->cobuyer->fname,
			'HomePhone' => $cdata->cobuyer->phone,
			'LastName' => $cdata->cobuyer->lname,
			'MonthlyHousingPayment' => $cdata->cobuyer->residence_monthly,
			'MonthlyIncome' => $cdata->cobuyer->monthly_gross,
			'Occupation' => $cdata->cobuyer->occupation,
			'ResidenceType' => $cdata->cobuyer->residence_type,
			'SSN' => $cdata->cobuyer->ssn,
			'State' => ($cdata->cobuyer->state==''?'XX':$cdata->cobuyer->state),
			'StreetAddress' => $cdata->cobuyer->address,
			'TimeAtResidence' => ((intval($cdata->cobuyer->residence_years)*12) + intval($cdata->cobuyer->residence_months)),
			'TimeWithEmployer' => ((intval($cdata->cobuyer->emp_years)*12) + intval($cdata->cobuyer->emp_months)),
			'WorkPhone' => $cdata->cobuyer->employer_phone,
			'Zip' => $cdata->cobuyer->zip 
		);
	}
    
    /*   
    - RESPONSE

    ["SubmitDealResult"]=>
        object(stdClass)#37 (5) {
        ["ApplicationID"] => string(7) "1320654"
        ["Errors"] => NULL  
        ["LeadAction"]=> NULL
        ["Submitted"] => bool(true)
        ["Warnings"]=>
        object(stdClass)#38 (0) {
        }
    }   
    */

    $response = $client->SubmitDeal($data);
	$newLeadId = $response->SubmitDealResult->ApplicationID;
	$ifSubmitted = $response->SubmitDealResult->Submitted;

    $cdata->buyer->lead_id = $newLeadId;
    $time_started = date('Y-m-d H:i:s');

	if($ifSubmitted != 1 || $response->SubmitDealResult->Errors != NULL){
        // failed creation of lead return value
		// TODO: submission failure 

        if (class_exists('Nowcom_Logger')) {            
            $retValue = array(
                'status' => '', 
                'app_id' => $newLeadId, 
                'err_msg' => $response->SubmitDealResult->Errors,
            );
        } 	
        if (class_exists('Nowcom_Logger')) {
            Nowcom_Logger::log_submission_service_communication("Form Submit", "form_submit", "Does_not_use_service_method", $retValue, $time_started);
        }

        header('location: '.get_bloginfo('url').'/try-again-later');	 
        
	} else {

        require('services/sendmails.php');

        // send email to site admin
        $siteMailer = new siteMailer($cdata->buyer, $cdata->cobuyer, $newLeadId, $cdata->dealer);       
        $siteMailer->setRecipients(get_option('admin_to'));
        $siteMailer->sendMail();

        if ($siteMailer->isError()) {
            if (class_exists('Nowcom_Logger')) {
                $errVar = $siteMailer->getErrMsg();
                $retValue = array(
                    'status' => '', 
                    'app_id' => $newLeadId, 
                    'err_msg' => $errVar['wp_mail'],
                );
            }
            // log failed attempt to send email to admin
            if (class_exists('Nowcom_Logger')) {
                Nowcom_Logger::log_submission_service_communication('Send Email To: '.get_option('admin_to'), "sendWestlake", "Does_not_use_service_method", $retValue, $time_started);
            }
        }    
		
        // send email to county email 
        if($cdata->buyer->residence_county == "Los Angeles"){
            $siteMailer->setRecipients(get_option('county_to'));
            $siteMailer->sendMail('county-email');

            if ($siteMailer->isError()) {
                $errVar = $siteMailer->getErrMsg();
                $retValue = array(
                    'status' => '', 
                    'app_id' => $newLeadId, 
                    'err_msg' => $errVar['send_dealerlist'],
                );
                // log failed attempt to send email to county email
                if (class_exists('Nowcom_Logger')) {
                    Nowcom_Logger::log_submission_service_communication('Send Email To: '.get_option('county_to'), "sendWestlake_county", "Does_not_use_service_method", $retValue, $time_started);
                }
            }
        }
		
        // IF dealers are present
        // send dealer information email

        if(is_email($cdata->buyer->email) !== false && count($prmDealer) > 0){

            // get representative details via service
            // i'll connect to the service at this stage

            $siteMailer->setRecipients($cdata->buyer->email);
            $siteMailer->sendMail('customer-dealerlist');                 

            if ($siteMailer->isError()) {
                $errVar = $siteMailer->getErrMsg();
                $retValue = array(
                    'status' => '', 
                    'app_id' => $newLeadId, 
                    'err_msg' => $errVar['send_dealerlist'],
                );
                // log failed attempt to send email to buyer email
                if (class_exists('Nowcom_Logger')) {
                    Nowcom_Logger::log_submission_service_communication('Send Email To: '.$cdata->buyer->email, "sendCustomerDealerlist", "Does_not_use_service_method", $retValue, $time_started);
                }
            } 
        }

        // successful creation of lead return value
        $retValue = array(
            'status' => 'success', 
            'app_id' => $newLeadId, 
            'err_msg' =>  $response->SubmitDealResult->Errors
         ); 
        // log submssion of form submit
        if (class_exists('Nowcom_Logger')) {
            Nowcom_Logger::log_submission_service_communication("Form Submit", "form_submit", "Does_not_use_service_method", $retValue, $time_started);
        }

        //for voucher @ thank you page
        if (!session_id()) {  
            session_start(); 
        }

        $_SESSION['leadID']         = $newLeadId;
        $_SESSION['price_range']    = $cdata->buyer->price_range;
        $_SESSION['down_payment']   = $cdata->buyer->down_payment;
        $_SESSION['vehicle_type']   = $cdata->buyer->vehicle_type;

        $_SESSION['iwwl_name'] 		= ucwords($cdata->buyer->fname).' '.ucwords($cdata->buyer->lname);
        $_SESSION['iwwl_fname'] 	= ucwords($cdata->buyer->fname);
        $_SESSION['iwwl_lname'] 	= ucwords($cdata->buyer->lname);
        $_SESSION['iwwl_dealers']	= $cdata->dealer;
        $_SESSION['iwwl_date']		= date('Y-m-d');
        $_SESSION['iwwl_token']		= md5(strtolower($cdata->buyer->lname).date('Y-m-d').strtolower($cdata->buyer->fname).$cdata->dealer[0]->dcid);

        // IF selected country is LA
        // set session to indicate that a diffrent voucher must be sent
        if($cdata->buyer->residence_county == "Los Angeles")
            $_SESSION['from_la'] = true;	
        
        $redirect_url = '/thank-you/';
        if (count($prmDealer) == 0) { 
            $redirect_url = '/no-participating-dealer/';
        }

        header('location: '.get_bloginfo('url') . $redirect_url);	
    }
}

function _sanitize($value){
	return mysql_real_escape_string(strip_tags(trim($value)));
}

function _checkRequired($fields, $required){
	global $fieldNames, $coFieldNames;
	$valid = true;

	foreach($fields AS $key => $field) {  
		if (in_array($field, $required) && trim($fields->{$key})== '') {
			$valid = false;
		}
	}

	// if (trim(@$_POST['hf_dealers'])=='') { $valid = false; } 
	
	if (!$valid){ //repost if invalid
		$dfrm = '<form name="dfrm" method="POST" action="'.get_bloginfo('url').'/?msg=require">';
		foreach($fieldNames AS $item) {
			$dfrm .= '<input type="hidden" name="'.$item.'" value="'.$_POST[$item].'">';
		}
		foreach($coFieldNames AS $item) {
			$dfrm .= '<input type="hidden" name="'.$item.'" value="'.$_POST[$item].'">';
		}
		$dfrm .= "</form><script>document.forms[0].submit();</script>";

		die($dfrm);
	}
	
	return;
}
