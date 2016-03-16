<?php
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	die;
}

require_once("models/credit_application.php");
require_once("helpers/service_helper.php");	

//post params
$lead_application = $_POST['lead_application'];

$credit_application = new credit_application;
$credit_application->address = "Wilshire Blvd";
$credit_application->business_phone = "";
$credit_application->city = "Los Angeles";
$credit_application->date_of_birth = "1900-01-01T00:00:00";
$credit_application->email = "test@yahoo.com";
$credit_application->employer = "";
$credit_application->first_name = "Jon3";
$credit_application->home_payment = 0;
$credit_application->income = 0;
$credit_application->is_home_owner = "false"; //default false
$credit_application->last_name = "Consumer";
$credit_application->occupation = "";
$credit_application->phone = "1234567890";
$credit_application->residence_months = 0;
$credit_application->residence_years = 0;
$credit_application->ssn = "";
$credit_application->state = "CA";
$credit_application->make = "Kawasaki";//$lead_application['make'];
$credit_application->model = "Blaze";
$credit_application->year = "2014";
$credit_application->work_months = 0;
$credit_application->work_years = 0;
$credit_application->zip = "90210";
$credit_application->lead_source = "Kawasaki";

echo json_encode(integrate_to_service($credit_application));

function integrate_to_service($credit_application){
	//service invocation
	$service = new service_helper;
	$service->url = siteConfig::get('service_dealer_website');
	$service->service_name = "DealerWebsiteService";
	$service->web_method = "AddCreditApplication";
	$service->lead = $credit_application;

	$output = "Failed";
	try{
		$result = $service->invoke_service();
		$output = "Completed";
	}
	catch(Exception $e){
		$output = "Caught exception: " . $e->getMessage();
	}

	return $output;
}
