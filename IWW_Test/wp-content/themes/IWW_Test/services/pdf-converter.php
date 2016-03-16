<?php

// check if GET ISSET - jepjep

if ( !session_id() ) {  
    session_start(); 
}
if (trim(@$_SESSION['iwwl_name'])=='' || count(@$_SESSION['iwwl_dealers']) <=0) {
	die();
}

$valid = md5(strtolower($_SESSION['iwwl_lname']).$_SESSION['iwwl_date'].strtolower($_SESSION['iwwl_fname']).$_SESSION['iwwl_dealers'][0]->dcid);
if ($_SESSION['iwwl_token'] != $valid) {
	die();
}

require_once("/dompdf/dompdf_config.inc.php");

function __autoload($class_name) {
    include DOMPDF_INC_DIR.'/'.strtolower($class_name) . '.cls.php';
}

// let session expire @ browser close, leave session as is for further dls/views
$data['expiration'] = date('m/d/Y', strtotime("+30 days"));
$data['toll_no']	= '(866) 863-4466';
$data['signup_no']	= '(888) 893-7937';
$data['email']		= 'IWantWestlake@WestlakeFinancial.com';


/*
Product Backlog Item 140925:[Westlake-IWW] Car harmony voucher

if(isset($_SESSION['from_la'])) {
    $msg = file_get_contents('templates/voucher-car-harmony.html'); 
}  else {    
}
*/

$msg = file_get_contents('templates/voucher.html'); 

$keys 	= array( 
    '[_full_name]', 
    '[_expiration_date]',
    '[_tollfree_no]', 
    '[_email_westlake]', 
    '[_signup_no]', 
    '[_price_range]',
    '[_down_payment]',
    '[_vehicle_type]',

    '[_dealer1]', 
    '[_dealer2]', 
    '[_dealer3]' 
);
		
$rpc = array(
    $_SESSION['iwwl_name'], 
    $data['expiration'], 
    $data['toll_no'], 
    $data['email'], 
    $data['signup_no'],
    $_SESSION['price_range'], 
    $_SESSION['down_payment'], 
    $_SESSION['vehicle_type']
);

foreach($_SESSION['iwwl_dealers'] AS $dealer){ 

	if (trim($dealer->name) != '') {
		$dealerStr = '<li style="color:#bb2227; font-size:22px; line-height:17px">
                      <div style="color:#231f20; padding-top:5px; padding-bottom:5px; font-size:12px">
                      '.$dealer->name.'<br>
                      '.$dealer->address.'<br/>'.$dealer->city.', '.$dealer->state.' '.$dealer->zip.'<br>';

		if ($dealer->phone!='') {					
			$dealerStr .= '<div style="font-size:12px; font-weight:bold">'."(".substr($dealer->phone, 0, 3).") ".substr($dealer->phone, 3, 3)."-".substr($dealer->phone,6).'</div>';
		}			  

        $dealerStr .= '</div></li>';
		
		array_push($rpc, $dealerStr);
	}	
}

$msg = str_replace($keys, $rpc, $msg);

$dompdf = new DOMPDF();
$dompdf->load_html($msg);

// $dompdf->set_paper('letter', 'landscape');
// custom paper size i avoided 2 pages on the PDF
// adjust paper size if carharmony banner
$customPaper = array(0,0,700,800);
$dompdf->set_paper($customPaper, 'landscape');
$dompdf->render();

/* 
for saving @ server

$output = $dompdf->output();
$file_to_save = 'pdf/'.$_SESSION['iwwl_name'].'_voucher.pdf';
file_put_contents($file_to_save, $output);
*/

$pdfOptions = array(
    "Attachment" => $_GET['act'] == 'dl' ? true : false
);
$dompdf->stream(str_replace(' ','_',$_SESSION['iwwl_name']).'_voucher.pdf', $pdfOptions);

