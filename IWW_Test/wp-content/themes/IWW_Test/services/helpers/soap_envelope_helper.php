<?php
class soap_envelope_helper{
	public static function format_credit_report_result_values_from_dom($doc, $item_no, $index){
		return str_replace(".00", "", 
			number_format($doc->getElementsByTagName("PreQualContract")->item($item_no)->getElementsByTagName($index)->item(0)->nodeValue, 2));
	}

	public function get_loan_submission_request($loan_submission){
		return '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
				  <s:Body>
					<GetPreQualifiedForUber xmlns="http://tempuri.org/">
					  <deal xmlns:d4p1="http://schemas.datacontract.org/2004/07/Westlake.Underwriting.Website.BusinessLogic.DataStructures.Public.Integration" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
						<d4p1:Applicant>
						  <d4p1:Addresses>
							<d4p1:UWAddress>
							  <d4p1:AddressType>CurrentAddress</d4p1:AddressType>
							  <d4p1:City>' . $loan_submission->city . '</d4p1:City>
							  <d4p1:MonthsAtAddress>2</d4p1:MonthsAtAddress>
							  <d4p1:PhoneNumber i:nil="true" />
							  <d4p1:State>' . $loan_submission->state . '</d4p1:State>
							  <d4p1:Street>' . $loan_submission->street . '</d4p1:Street>
							  <d4p1:YearsAtAddress>2</d4p1:YearsAtAddress>
							  <d4p1:Zip>' . $loan_submission->zip . '</d4p1:Zip>
							</d4p1:UWAddress>
						  </d4p1:Addresses>
						  <d4p1:ApplicantType>Signer</d4p1:ApplicantType>
						  <d4p1:CellPhoneNumber i:nil="true" />
						  <d4p1:DateOfBirth>' . $loan_submission->dob . '</d4p1:DateOfBirth>
						  <d4p1:Email>' . $loan_submission->email . '</d4p1:Email>
						  <d4p1:Employments />
						  <d4p1:FirstName>' . $loan_submission->first_name . '</d4p1:FirstName>
						  <d4p1:IDExpireDate i:nil="true" />
						  <d4p1:IDNumber i:nil="true" />
						  <d4p1:IDState i:nil="true" />
						  <d4p1:IDType i:nil="true" />
						  <d4p1:LastName>' . $loan_submission->last_name . '</d4p1:LastName>
						  <d4p1:MiddleName i:nil="true" />
						  <d4p1:MonthsAtResidence>0</d4p1:MonthsAtResidence>
						  <d4p1:PhoneBill>false</d4p1:PhoneBill>
						  <d4p1:RelationshipToThePrimary>Self</d4p1:RelationshipToThePrimary>
						  <d4p1:RentMortgageAmt i:nil="true" />
						  <d4p1:SSN>' . $loan_submission->ssn . '</d4p1:SSN>
						  <d4p1:Suffix i:nil="true" />
						  <d4p1:WorkPhoneNumber i:nil="true" />
						  <d4p1:YearsAtResidence>0</d4p1:YearsAtResidence>
						</d4p1:Applicant>
						<d4p1:CashDown>' . $loan_submission->cash_down . '</d4p1:CashDown>
						<d4p1:Company>' . $loan_submission->company . '</d4p1:Company>
						<d4p1:CustomerState>' . $loan_submission->customer_state . '</d4p1:CustomerState>
						<d4p1:DCAppNo>' . $loan_submission->dc_app_no . '</d4p1:DCAppNo>
						<d4p1:DealSource>' . $loan_submission->deal_source . '</d4p1:DealSource>						
						<d4p1:PreferredMake i:nil="true" />
						<d4p1:Product>' . $loan_submission->product . '</d4p1:Product>
						<d4p1:UberDriverID>' . $loan_submission->uber_id . '</d4p1:UberDriverID>
						<d4p1:UberMonths>' . $loan_submission->uber_months . '</d4p1:UberMonths>
						<d4p1:UberProgram>' . $loan_submission->uber_program . '</d4p1:UberProgram>
						<d4p1:UberYears>' . $loan_submission->uber_years . '</d4p1:UberYears>
					  </deal>
					</GetPreQualifiedForUber>
				  </s:Body>
				</s:Envelope>';
	}
}
?>