/* tslint:disable */
//------------ BEGIN Type Declaration -----------
module WestlakeWebsiteService.WCCPartnerService {
export class GetVehicleYearsResult {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Errors: string[] = null;
Years: number[] = null;
}
}

module System.Runtime.Serialization {
export class ExtensionDataObject {
}
}

module WestlakeWebsiteService.WCCPartnerService {
export class GetVehicleMakesResult {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Errors: string[] = null;
Makes: string[] = null;
}

export class GetVehicleModelsResult {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Errors: string[] = null;
Models: string[] = null;
}

export class LoanApplication {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
AmountToBorrow: string = null;
CoApplicant: WestlakeWebsiteService.WCCPartnerService.Applicant = null;
Dealer1: WestlakeWebsiteService.WCCPartnerService.Dealers = null;
Dealer2: WestlakeWebsiteService.WCCPartnerService.Dealers = null;
Dealer3: WestlakeWebsiteService.WCCPartnerService.Dealers = null;
LeadSource: string = null;
LoanDetails: WestlakeWebsiteService.WCCPartnerService.LoanDetails = null;
OriginWebsite: string = null;
Other: string = null;
PartnerTrackingAttributes: WestlakeWebsiteService.WCCPartnerService.PartnerTrackingAttributes = null;
PrimaryApplicant: WestlakeWebsiteService.WCCPartnerService.Applicant = null;
ProductType: string = null;
ReasonsForTurnDown: WestlakeWebsiteService.WCCPartnerService.ReasonsForTurnDown = null;
Reference1: WestlakeWebsiteService.WCCPartnerService.References = null;
Reference2: WestlakeWebsiteService.WCCPartnerService.References = null;
Reference3: WestlakeWebsiteService.WCCPartnerService.References = null;
Reference4: WestlakeWebsiteService.WCCPartnerService.References = null;
Reference5: WestlakeWebsiteService.WCCPartnerService.References = null;
ReferrerCode: string = null;
RefinanceLoan: WestlakeWebsiteService.WCCPartnerService.RefinanceLoan = null;
SelfService: WestlakeWebsiteService.WCCPartnerService.SelfService = null;
Vehicle: WestlakeWebsiteService.WCCPartnerService.Vehicle = null;
WebLeadCampaign: string = null;
WebLeadCreative: string = null;
WebLeadDevice: string = null;
WebLeadKeywords: string = null;
WebLeadMatchType: string = null;
WebLeadSource: string = null;
WhenCashIsNeeded: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsEZLoanTimeInterval = null;
}

export class Applicant {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
BorrowerCounty: string = null;
CellPhone: string = null;
City: string = null;
DBAccountNumber: string = null;
DOB: string = null;
DriverLicenseNumber: string = null;
DriverLicenseState: string = null;
Email: string = null;
Employer: string = null;
EmployerAddress: string = null;
EmployerCity: string = null;
EmployerEmail: string = null;
EmployerFax: string = null;
EmployerPhone: string = null;
EmployerState: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsAllowedStates = null;
EmployerZip: string = null;
FirstName: string = null;
HomePhone: string = null;
IncomeType: string = null;
IsInBanruptcyProceedings: boolean = false;
IsInBanruptcyProceedings_Surrogate: string = null;
IsInConsumerCounceling: boolean = false;
IsInConsumerCounceling_Surrogate: string = null;
LastName: string = null;
MiddleName: string = null;
MonthlyHousingPayment: string = null;
MonthlyIncome: string = null;
Occupation: string = null;
PreferredContactTimeFrame: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsEZLoanContactTime = null;
ResidenceType: string = null;
SSN: string = null;
State: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsAllowedStates = null;
StreetAddress: string = null;
Suffix: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsAllowedSuffixes = null;
TimeAtResidence: string = null;
TimeWithEmployer: string = null;
WCCApplicationID: string = null;
WorkPhone: string = null;
Zip: string = null;
}

export class Dealers {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Address: string = null;
City: string = null;
DealerCode: string = null;
DealerContactName: string = null;
DealerContactPhone: string = null;
DealerName: string = null;
Phone: string = null;
SalesRepUserName: string = null;
State: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsAllowedStates = null;
Zip: string = null;
}

export class LoanDetails {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
AmountFinanced: string = null;
Discount: string = null;
DownPayment: string = null;
MonthlyPayment: string = null;
Rate: string = null;
Term: string = null;
}

export class PartnerTrackingAttributes {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
ApplicantID: string = null;
AutoRefiResponse: boolean = false;
InternalPartnerID: string = null;
UBERId: string = null;
UBERProgram: string = null;
YearswithUBER: string = null;
}

export class ReasonsForTurnDown {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Bankruptcy: string = null;
BuyProgramHintMessage: string = null;
CreditQuality: string = null;
CustomerNoLongerInterested: string = null;
InsufficientIncome: string = null;
LTV: string = null;
LTV1: string = null;
LackofPaymentHistory: string = null;
LackofSavings: string = null;
OutOfState: string = null;
Rate: string = null;
Repo: string = null;
UnqualifiedLender: string = null;
UnqualifiedVehicleType: string = null;
}

export class References {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
ReferenceAddress: string = null;
ReferenceCity: string = null;
ReferenceName: string = null;
ReferencePhone: string = null;
ReferenceRelationship: string = null;
ReferenceState: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsAllowedStates = null;
ReferenceZip: string = null;
}

export class RefinanceLoan {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
CurrentAPR: string = null;
CurrentAccountNumber: string = null;
CurrentLender: string = null;
CurrentMonthlyPayment: string = null;
EstimatedPayoffAmount: string = null;
NextPaymentDate: string = null;
NumberofPaymentsMade: string = null;
OriginalLoanTerm: string = null;
Product: string = null;
RemainingTerm: string = null;
}

export class SelfService {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
AlternateVehicleMake: string = null;
AlternateVehicleMileage: string = null;
AlternateVehicleModel: string = null;
AlternateVehicleTrim: string = null;
AlternateVehicleYear: string = null;
AverageBPMonthlyPayment: string = null;
CurrentLienHolder: string = null;
DelinquentPaymentHistory: string = null;
FinalAPR: number = 0;
HighestApprovedTerm: string = null;
InitialAmountFinanced: string = null;
InitialMaxOkAmount: string = null;
InitialMinimumAmountFinanced: string = null;
InitialMonthlySavings: string = null;
IsRefinanceOfAnExistingTitleLoan: string = null;
LoanPayoffAmount: string = null;
LowestApprovedTerm: string = null;
SelfServeDeviceType: string = null;
SelfServeIPAddress: string = null;
SelfServeIPLocation: string = null;
SelfServeInterestRate: string = null;
Terms: string = null;
}

export class Vehicle {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
AcceptTermsAndConditions: boolean = false;
AcceptTermsAndConditionsCoBorrower: boolean = false;
AcceptTermsAndConditionsCoBorrower_Surrogate: string = null;
AcceptTermsAndConditions_Surrogate: string = null;
AmountOwed: string = null;
BookValue: string = null;
BookValueSource: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsBookValueSources = null;
Color: string = null;
CreditDisclosure: boolean = false;
CreditDisclosure_Surrogate: string = null;
DriveTrain: string = null;
Engine: string = null;
InsuranceCarrier: string = null;
InsuranceCarrierFaxNumber: string = null;
InsuranceCarrierPhoneNumber: string = null;
InsurancePolicyNumber: string = null;
IsPaidOff: boolean = false;
IsPaidOff_Surrogate: string = null;
IsSalvaged: boolean = false;
IsSalvaged_Surrogate: string = null;
LicensePlateNumber: string = null;
LienHolder: string = null;
Make: string = null;
Mileage: string = null;
Model: string = null;
Options: string = null;
State: WestlakeWebsiteService.WCCPartnerService.AllowedSelectionsAllowedStates = null;
Transmission: string = null;
Trim: string = null;
VIN: string = null;
Year: string = null;
Zip: string = null;
}

export class ApplicationSubmissionResult {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
ApplicationID: string = null;
Errors: string[] = null;
LeadAction: string = null;
Submitted: boolean = false;
Warnings: string[] = null;
}

export class GetVehicleTrimsResult {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Errors: string[] = null;
Trims: string[] = null;
}

export class GetFieldsOfLeadResult {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Errors: string[] = null;
FieldsOfLead: System.Collections.Generic.KeyValuePair[] = null;
}
}

module WestlakeWebsiteService.BusinessLogic {
export class Vehicle {
Year: string = null;
Make: string = null;
Model: string = null;
Trim: string = null;
}

export class LeadSubmissionUpdateRequest {
Application: WestlakeWebsiteService.WCCPartnerService.LoanApplication = null;
LeadID: string = null;
StatusID: number = 0;
}
}

module WestlakeWebsiteService.RequestService {
export class ClosestDealerResponse {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
ClosestDealers: WestlakeWebsiteService.RequestService.ClosestDealerInfo[] = null;
Errors: string[] = null;
}

export class ClosestDealerInfo {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
AccountName: string = null;
BoardedDeals_30: number = 0;
BoardedDeals_60: number = 0;
BoardedDeals_90: number = 0;
BusinessPhone: string = null;
Contacts: WestlakeWebsiteService.RequestService.ClosestDealerContact[] = null;
DCID: string = null;
DealerCode: string = null;
DealerGrade: string = null;
DealerTypeForPricing: string = null;
DealershipTypeId: number = 0;
DealershipTypeName: string = null;
Fax: string = null;
FranchiseTypes: string = null;
GroupName: string = null;
GroupTypeId: number = 0;
GroupTypeName: string = null;
LeadProgram: boolean = false;
PhysicalAddress: WestlakeWebsiteService.RequestService.ClosestDealerAddress = null;
ProductionStatusId: number = 0;
ProductionStatusName: string = null;
Radius: number = 0;
SalesRepUserName: string = null;
SourceLatitude: number = 0;
SourceLongitude: number = 0;
}

export class ClosestDealerContact {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Email: string = null;
IsAdmin: boolean = false;
IsFundingContact: boolean = false;
IsPrimaryContact: boolean = false;
IsPrincipal: boolean = false;
Name: string = null;
Phone: string = null;
Title: string = null;
}

export class ClosestDealerAddress {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Address1: string = null;
Address2: string = null;
City: string = null;
Latitude: number = 0;
Longitude: number = 0;
State: string = null;
Zip: string = null;
ZipExt: string = null;
}

export class WestlakeContact {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
FirstName: string = null;
InternalEmailAddress: string = null;
LastName: string = null;
Phone: string = null;
Region: string = null;
UserName: string = null;
}
}

module WestlakeWebsiteService.AddressValidationService {
export class DPVAddress {
ReferenceID: string = null;
Address: string = null;
City: string = null;
State: string = null;
Zip: string = null;
Address2: string = null;
BarcodeDigits: string = null;
CarrierRoute: string = null;
CongressCode: string = null;
CountyCode: string = null;
CountyName: string = null;
Fragment: string = null;
FragmentHouse: string = null;
FragmentPMBNumber: string = null;
FragmentPMBPrefix: string = null;
FragmentPostDir: string = null;
FragmentPreDir: string = null;
FragmentStreet: string = null;
FragmentSuffix: string = null;
FragmentUnit: string = null;
Source: string = null;
DPV: string = null;
DPVDesc: string = null;
DPVNotes: string = null;
DPVNotesDesc: string = null;
Corrections: string = null;
CorrectionsDesc: string = null;
Error: WestlakeWebsiteService.AddressValidationService.Err = null;
}

export class Err {
Desc: string = null;
Number: string = null;
Location: string = null;
}

export class GeocodeAddress {
UserObject: any = null;
CallExternalService: WestlakeWebsiteService.AddressValidationService.CallExternalServiceStatus = null;
CallAlternateWhenNeeded: boolean = false;
Error: boolean = false;
IsPermanentFailure: boolean = false;
BusinessName: string = null;
Street: string = null;
City: string = null;
State: string = null;
Zip: string = null;
DeliveryPoint: string = null;
GeocodeSource: string = null;
MatchStatusCode: string = null;
MatchDescription: string = null;
GeocodeAccuracy: WestlakeWebsiteService.AddressValidationService.GeocodeAccuracy = null;
Latitude: number = 0;
Longitude: number = 0;
NumDaysActive: number = 0;
CountyName: string = null;
PlaceName: string = null;
PlaceCode: string = null;
TimeZone: string = null;
TimeZoneCode: string = null;
Street_Matched: string = null;
City_Matched: string = null;
State_Matched: string = null;
Zip_Matched: string = null;
MatchTypeCode: string = null;
StateFIPSCode: string = null;
CountyFIPSCode: string = null;
CensusTract: string = null;
CensusBlock: string = null;
FIPSPlace: string = null;
FIPS_MCD_Code: string = null;
FIPS_MSA_Code: string = null;
CentroidTypeCode: string = null;
Exception: string = null;
}
}

module WestlakeWebsiteService.SubmissionService {
export class SaveAndSubmitRequest {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Address1: string = null;
Address2: string = null;
City: string = null;
DealerName: string = null;
Email: string = null;
Fax: string = null;
FirstName: string = null;
IsValid: boolean = false;
LastName: string = null;
LeadSourceID: number = 0;
Phone: string = null;
RequestSource: WestlakeWebsiteService.SubmissionService.RequestSource = null;
RequestType: WestlakeWebsiteService.SubmissionService.RequestType = null;
State: string = null;
ToNowcom: boolean = false;
ToWFS: boolean = false;
WFSSalesRepID: number = 0;
Zip: string = null;
}

export class SaveAndSubmitResponse {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
RequestGUID: string = null;
}
}

module WestlakeWebsiteService.WestlakeService {
export class LeadSource {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Description: string = null;
Value: number = 0;
}
}

module WestlakeWebsiteService.TaxService {
export class ZipLocation {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Errors: string[] = null;
StateForZip: string = null;
}
}

module WestlakeWebsiteService.RequestService {
export class FilterStructure {
ExtensionData: System.Runtime.Serialization.ExtensionDataObject = null;
Name: string = null;
Value: string = null;
}

export class WestlakeContactDescendants extends WestlakeWebsiteService.RequestService.WestlakeContact {
Descendants: WestlakeWebsiteService.RequestService.WestlakeContact[] = null;
}
}




module WestlakeWebsiteService.WCCPartnerService {
export enum AllowedSelectionsAllowedStates {
XX = 0,
AL = 1,
AK = 2,
AZ = 3,
AR = 4,
CA = 5,
CO = 6,
CT = 7,
DE = 8,
FL = 9,
GA = 10,
HI = 11,
ID = 12,
IL = 13,
IN = 14,
IA = 15,
KS = 16,
KY = 17,
LA = 18,
ME = 19,
MD = 20,
MA = 21,
MI = 22,
MN = 23,
MO = 24,
MS = 25,
MT = 26,
NE = 27,
NV = 28,
NH = 29,
NJ = 30,
NM = 31,
NY = 32,
NC = 33,
ND = 34,
OH = 35,
OK = 36,
OR = 37,
PA = 38,
RI = 39,
SC = 40,
SD = 41,
TN = 42,
TX = 43,
UT = 44,
VT = 45,
VA = 46,
WA = 47,
WV = 48,
WI = 49,
WY = 50
}

export enum AllowedSelectionsEZLoanContactTime {
Unknown = 0,
CallMeNow = 1,
Morning = 2,
Afternoon = 3,
Evening = 4
}

export enum AllowedSelectionsAllowedSuffixes {
None = 0,
Jr = 1,
Sr = 2,
II = 3,
III = 4,
IV = 5,
V = 6,
VI = 7,
VII = 8,
VIII = 9,
IX = 10
}

export enum AllowedSelectionsBookValueSources {
Unknown = 0,
KBB = 1,
BlackBook = 2,
NADA = 3,
MAV = 4
}

export enum AllowedSelectionsEZLoanTimeInterval {
Unknown = 0,
Today = 1,
Tomorrow = 2,
WithinTheWeek = 3,
WithinTheMonth = 4
}
}


module WestlakeWebsiteService.AddressValidationService {
export enum CallExternalServiceStatus {
AS_NEEDED = 0,
YES = 1,
NO = 2
}

export enum GeocodeAccuracy {
None = 0,
Approximate = 1,
Zip = 2,
ZipPlus2 = 3,
ZipPlus4 = 4,
Street = 5,
Rooftop = 6
}
}


module WestlakeWebsiteService.SubmissionService {
export enum RequestSource {
NowcomSystem = 1,
WestlakeSystem = 2,
DealerCenter = 3,
WestlakeWebsite = 4,
DealerCenterFinancialServices = 5,
DealerCenterInsuranceServices = 6,
PreferredLender = 7
}

export enum RequestType {
Inquiry = 1,
DealerSignup = 2,
DCIDRequest = 3,
AddGroupAccount = 4,
DealerInformationChange = 5,
PreferredLenderSignUp = 7
}
}




//------------ BEGIN Api Declaration -----------
module WestlakeWebsiteService.Controllers {
export class IWantWestlakeApi{
        static GetVehicleYears(success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleYearsResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/GetVehicleYears";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetVehicleMakes(request : WestlakeWebsiteService.BusinessLogic.Vehicle, success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleMakesResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/GetVehicleMakes";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetVehicleModels(request : WestlakeWebsiteService.BusinessLogic.Vehicle, success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleModelsResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/GetVehicleModels";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static SubmitLeadToVelocify(application : WestlakeWebsiteService.WCCPartnerService.LoanApplication, success: (result: WestlakeWebsiteService.WCCPartnerService.ApplicationSubmissionResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/SubmitLeadToVelocify";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(application),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetNearestDealer(request : WestlakeWebsiteService.RequestService.FilterStructure[], success: (result: WestlakeWebsiteService.RequestService.ClosestDealerResponse) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/GetNearestDealer";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static ValidateAddress(address : WestlakeWebsiteService.AddressValidationService.DPVAddress, success: (result: WestlakeWebsiteService.AddressValidationService.DPVAddress) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/ValidateAddress";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(address),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetGeoCodeByZip(request : WestlakeWebsiteService.AddressValidationService.GeocodeAddress[], success: (result: WestlakeWebsiteService.AddressValidationService.GeocodeAddress[]) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/IWantWestlakeApi/GetGeoCodeByZip";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

}
export class WestlakeApi{
        static GetVehicleYears(success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleYearsResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetVehicleYears";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetVehicleMakes(request : WestlakeWebsiteService.BusinessLogic.Vehicle, success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleMakesResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetVehicleMakes";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetVehicleModels(request : WestlakeWebsiteService.BusinessLogic.Vehicle, success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleModelsResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetVehicleModels";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetVehicleTrim(request : WestlakeWebsiteService.WCCPartnerService.Vehicle, success: (result: WestlakeWebsiteService.WCCPartnerService.GetVehicleTrimsResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetVehicleTrim";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static SubmitLeadToVelocify(application : WestlakeWebsiteService.WCCPartnerService.LoanApplication, success: (result: WestlakeWebsiteService.WCCPartnerService.ApplicationSubmissionResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/SubmitLeadToVelocify";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(application),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static UpdateLeadInVelocify(request : WestlakeWebsiteService.BusinessLogic.LeadSubmissionUpdateRequest, success: (result: WestlakeWebsiteService.WCCPartnerService.ApplicationSubmissionResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/UpdateLeadInVelocify";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static SubmitLeadToMkt(request : WestlakeWebsiteService.SubmissionService.SaveAndSubmitRequest, success: (result: WestlakeWebsiteService.SubmissionService.SaveAndSubmitResponse) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/SubmitLeadToMkt";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(request),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetFieldValues(leadId : string, success: (result: WestlakeWebsiteService.WCCPartnerService.GetFieldsOfLeadResult) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetFieldValues";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(leadId),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetLeadSourceForApplication(success: (result: WestlakeWebsiteService.WestlakeService.LeadSource[]) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetLeadSourceForApplication";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static ValidateAddress(address : WestlakeWebsiteService.AddressValidationService.DPVAddress, success: (result: WestlakeWebsiteService.AddressValidationService.DPVAddress) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/ValidateAddress";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(address),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetRegionalManager(zipCode : string, success: (result: WestlakeWebsiteService.RequestService.WestlakeContactDescendants[]) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetRegionalManager";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(zipCode),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

        static GetStateFromZip(zipCode : string, success: (result: WestlakeWebsiteService.TaxService.ZipLocation) => void, fail?: (error: string) => void, clientFail?:(error)=>void, ajaxOptions?:any):JQueryXHR {
    if (typeof fail === "undefined") {fail = WebSite.handleError; }
    if (typeof clientFail === "undefined") {clientFail = WebSite.handleClientError; }
    var url = "/api/WestlakeApi/GetStateFromZip";
    var options = {
        url:url,
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(zipCode),
        success: function(){ try { success.apply(null,arguments); } catch (__exception) {clientFail(__exception);} },
        error:function(xhr){fail(xhr.responseText);}
    };
    if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) { $.extend(options, ajaxOptions); }
    WebSite.updateOption(options);
    return $.ajax(options);
        }

}
}

//------------ BEGIN Date Parsing Script -----------
(function () {
    var _origParse = JSON.parse;
    JSON.parse = function (text) {
        return _origParse(text, function (key, value) {
            var a;
            if (typeof value === 'string') {
                a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                if (a) {
                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
                }
                if (value.slice(0, 6) === '/Date(' && value.slice(-2) === ')/') {
                    var d = new Date(parseInt(value.slice(6, -2), 10));
                    if (d) {
                        return d;
                    }
                }
            }
            return value;
        });
    };
})();

//-----------------------
