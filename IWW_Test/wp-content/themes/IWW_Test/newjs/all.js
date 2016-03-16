var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* tslint:disable */
//------------ BEGIN Type Declaration -----------
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var WCCPartnerService;
    (function (WCCPartnerService) {
        var GetVehicleYearsResult = (function () {
            function GetVehicleYearsResult() {
                this.ExtensionData = null;
                this.Errors = null;
                this.Years = null;
            }
            return GetVehicleYearsResult;
        })();
        WCCPartnerService.GetVehicleYearsResult = GetVehicleYearsResult;
    })(WCCPartnerService = WestlakeWebsiteService.WCCPartnerService || (WestlakeWebsiteService.WCCPartnerService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var System;
(function (System) {
    var Runtime;
    (function (Runtime) {
        var Serialization;
        (function (Serialization) {
            var ExtensionDataObject = (function () {
                function ExtensionDataObject() {
                }
                return ExtensionDataObject;
            })();
            Serialization.ExtensionDataObject = ExtensionDataObject;
        })(Serialization = Runtime.Serialization || (Runtime.Serialization = {}));
    })(Runtime = System.Runtime || (System.Runtime = {}));
})(System || (System = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var WCCPartnerService;
    (function (WCCPartnerService) {
        var GetVehicleMakesResult = (function () {
            function GetVehicleMakesResult() {
                this.ExtensionData = null;
                this.Errors = null;
                this.Makes = null;
            }
            return GetVehicleMakesResult;
        })();
        WCCPartnerService.GetVehicleMakesResult = GetVehicleMakesResult;
        var GetVehicleModelsResult = (function () {
            function GetVehicleModelsResult() {
                this.ExtensionData = null;
                this.Errors = null;
                this.Models = null;
            }
            return GetVehicleModelsResult;
        })();
        WCCPartnerService.GetVehicleModelsResult = GetVehicleModelsResult;
        var LoanApplication = (function () {
            function LoanApplication() {
                this.ExtensionData = null;
                this.AmountToBorrow = null;
                this.CoApplicant = null;
                this.Dealer1 = null;
                this.Dealer2 = null;
                this.Dealer3 = null;
                this.LeadSource = null;
                this.LoanDetails = null;
                this.OriginWebsite = null;
                this.Other = null;
                this.PartnerTrackingAttributes = null;
                this.PrimaryApplicant = null;
                this.ProductType = null;
                this.ReasonsForTurnDown = null;
                this.Reference1 = null;
                this.Reference2 = null;
                this.Reference3 = null;
                this.Reference4 = null;
                this.Reference5 = null;
                this.ReferrerCode = null;
                this.RefinanceLoan = null;
                this.SelfService = null;
                this.Vehicle = null;
                this.WebLeadCampaign = null;
                this.WebLeadCreative = null;
                this.WebLeadDevice = null;
                this.WebLeadKeywords = null;
                this.WebLeadMatchType = null;
                this.WebLeadSource = null;
                this.WhenCashIsNeeded = null;
            }
            return LoanApplication;
        })();
        WCCPartnerService.LoanApplication = LoanApplication;
        var Applicant = (function () {
            function Applicant() {
                this.ExtensionData = null;
                this.BorrowerCounty = null;
                this.CellPhone = null;
                this.City = null;
                this.DBAccountNumber = null;
                this.DOB = null;
                this.DriverLicenseNumber = null;
                this.DriverLicenseState = null;
                this.Email = null;
                this.Employer = null;
                this.EmployerAddress = null;
                this.EmployerCity = null;
                this.EmployerEmail = null;
                this.EmployerFax = null;
                this.EmployerPhone = null;
                this.EmployerState = null;
                this.EmployerZip = null;
                this.FirstName = null;
                this.HomePhone = null;
                this.IncomeType = null;
                this.IsInBanruptcyProceedings = false;
                this.IsInBanruptcyProceedings_Surrogate = null;
                this.IsInConsumerCounceling = false;
                this.IsInConsumerCounceling_Surrogate = null;
                this.LastName = null;
                this.MiddleName = null;
                this.MonthlyHousingPayment = null;
                this.MonthlyIncome = null;
                this.Occupation = null;
                this.PreferredContactTimeFrame = null;
                this.ResidenceType = null;
                this.SSN = null;
                this.State = null;
                this.StreetAddress = null;
                this.Suffix = null;
                this.TimeAtResidence = null;
                this.TimeWithEmployer = null;
                this.WCCApplicationID = null;
                this.WorkPhone = null;
                this.Zip = null;
            }
            return Applicant;
        })();
        WCCPartnerService.Applicant = Applicant;
        var Dealers = (function () {
            function Dealers() {
                this.ExtensionData = null;
                this.Address = null;
                this.City = null;
                this.DealerCode = null;
                this.DealerContactName = null;
                this.DealerContactPhone = null;
                this.DealerName = null;
                this.Phone = null;
                this.SalesRepUserName = null;
                this.State = null;
                this.Zip = null;
            }
            return Dealers;
        })();
        WCCPartnerService.Dealers = Dealers;
        var LoanDetails = (function () {
            function LoanDetails() {
                this.ExtensionData = null;
                this.AmountFinanced = null;
                this.Discount = null;
                this.DownPayment = null;
                this.MonthlyPayment = null;
                this.Rate = null;
                this.Term = null;
            }
            return LoanDetails;
        })();
        WCCPartnerService.LoanDetails = LoanDetails;
        var PartnerTrackingAttributes = (function () {
            function PartnerTrackingAttributes() {
                this.ExtensionData = null;
                this.ApplicantID = null;
                this.AutoRefiResponse = false;
                this.InternalPartnerID = null;
                this.UBERId = null;
                this.UBERProgram = null;
                this.YearswithUBER = null;
            }
            return PartnerTrackingAttributes;
        })();
        WCCPartnerService.PartnerTrackingAttributes = PartnerTrackingAttributes;
        var ReasonsForTurnDown = (function () {
            function ReasonsForTurnDown() {
                this.ExtensionData = null;
                this.Bankruptcy = null;
                this.BuyProgramHintMessage = null;
                this.CreditQuality = null;
                this.CustomerNoLongerInterested = null;
                this.InsufficientIncome = null;
                this.LTV = null;
                this.LTV1 = null;
                this.LackofPaymentHistory = null;
                this.LackofSavings = null;
                this.OutOfState = null;
                this.Rate = null;
                this.Repo = null;
                this.UnqualifiedLender = null;
                this.UnqualifiedVehicleType = null;
            }
            return ReasonsForTurnDown;
        })();
        WCCPartnerService.ReasonsForTurnDown = ReasonsForTurnDown;
        var References = (function () {
            function References() {
                this.ExtensionData = null;
                this.ReferenceAddress = null;
                this.ReferenceCity = null;
                this.ReferenceName = null;
                this.ReferencePhone = null;
                this.ReferenceRelationship = null;
                this.ReferenceState = null;
                this.ReferenceZip = null;
            }
            return References;
        })();
        WCCPartnerService.References = References;
        var RefinanceLoan = (function () {
            function RefinanceLoan() {
                this.ExtensionData = null;
                this.CurrentAPR = null;
                this.CurrentAccountNumber = null;
                this.CurrentLender = null;
                this.CurrentMonthlyPayment = null;
                this.EstimatedPayoffAmount = null;
                this.NextPaymentDate = null;
                this.NumberofPaymentsMade = null;
                this.OriginalLoanTerm = null;
                this.Product = null;
                this.RemainingTerm = null;
            }
            return RefinanceLoan;
        })();
        WCCPartnerService.RefinanceLoan = RefinanceLoan;
        var SelfService = (function () {
            function SelfService() {
                this.ExtensionData = null;
                this.AlternateVehicleMake = null;
                this.AlternateVehicleMileage = null;
                this.AlternateVehicleModel = null;
                this.AlternateVehicleTrim = null;
                this.AlternateVehicleYear = null;
                this.AverageBPMonthlyPayment = null;
                this.CurrentLienHolder = null;
                this.DelinquentPaymentHistory = null;
                this.FinalAPR = 0;
                this.HighestApprovedTerm = null;
                this.InitialAmountFinanced = null;
                this.InitialMaxOkAmount = null;
                this.InitialMinimumAmountFinanced = null;
                this.InitialMonthlySavings = null;
                this.IsRefinanceOfAnExistingTitleLoan = null;
                this.LoanPayoffAmount = null;
                this.LowestApprovedTerm = null;
                this.SelfServeDeviceType = null;
                this.SelfServeIPAddress = null;
                this.SelfServeIPLocation = null;
                this.SelfServeInterestRate = null;
                this.Terms = null;
            }
            return SelfService;
        })();
        WCCPartnerService.SelfService = SelfService;
        var Vehicle = (function () {
            function Vehicle() {
                this.ExtensionData = null;
                this.AcceptTermsAndConditions = false;
                this.AcceptTermsAndConditionsCoBorrower = false;
                this.AcceptTermsAndConditionsCoBorrower_Surrogate = null;
                this.AcceptTermsAndConditions_Surrogate = null;
                this.AmountOwed = null;
                this.BookValue = null;
                this.BookValueSource = null;
                this.Color = null;
                this.CreditDisclosure = false;
                this.CreditDisclosure_Surrogate = null;
                this.DriveTrain = null;
                this.Engine = null;
                this.InsuranceCarrier = null;
                this.InsuranceCarrierFaxNumber = null;
                this.InsuranceCarrierPhoneNumber = null;
                this.InsurancePolicyNumber = null;
                this.IsPaidOff = false;
                this.IsPaidOff_Surrogate = null;
                this.IsSalvaged = false;
                this.IsSalvaged_Surrogate = null;
                this.LicensePlateNumber = null;
                this.LienHolder = null;
                this.Make = null;
                this.Mileage = null;
                this.Model = null;
                this.Options = null;
                this.State = null;
                this.Transmission = null;
                this.Trim = null;
                this.VIN = null;
                this.Year = null;
                this.Zip = null;
            }
            return Vehicle;
        })();
        WCCPartnerService.Vehicle = Vehicle;
        var ApplicationSubmissionResult = (function () {
            function ApplicationSubmissionResult() {
                this.ExtensionData = null;
                this.ApplicationID = null;
                this.Errors = null;
                this.LeadAction = null;
                this.Submitted = false;
                this.Warnings = null;
            }
            return ApplicationSubmissionResult;
        })();
        WCCPartnerService.ApplicationSubmissionResult = ApplicationSubmissionResult;
        var GetVehicleTrimsResult = (function () {
            function GetVehicleTrimsResult() {
                this.ExtensionData = null;
                this.Errors = null;
                this.Trims = null;
            }
            return GetVehicleTrimsResult;
        })();
        WCCPartnerService.GetVehicleTrimsResult = GetVehicleTrimsResult;
        var GetFieldsOfLeadResult = (function () {
            function GetFieldsOfLeadResult() {
                this.ExtensionData = null;
                this.Errors = null;
                this.FieldsOfLead = null;
            }
            return GetFieldsOfLeadResult;
        })();
        WCCPartnerService.GetFieldsOfLeadResult = GetFieldsOfLeadResult;
    })(WCCPartnerService = WestlakeWebsiteService.WCCPartnerService || (WestlakeWebsiteService.WCCPartnerService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var BusinessLogic;
    (function (BusinessLogic) {
        var Vehicle = (function () {
            function Vehicle() {
                this.Year = null;
                this.Make = null;
                this.Model = null;
                this.Trim = null;
            }
            return Vehicle;
        })();
        BusinessLogic.Vehicle = Vehicle;
        var LeadSubmissionUpdateRequest = (function () {
            function LeadSubmissionUpdateRequest() {
                this.Application = null;
                this.LeadID = null;
                this.StatusID = 0;
            }
            return LeadSubmissionUpdateRequest;
        })();
        BusinessLogic.LeadSubmissionUpdateRequest = LeadSubmissionUpdateRequest;
    })(BusinessLogic = WestlakeWebsiteService.BusinessLogic || (WestlakeWebsiteService.BusinessLogic = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var RequestService;
    (function (RequestService) {
        var ClosestDealerResponse = (function () {
            function ClosestDealerResponse() {
                this.ExtensionData = null;
                this.ClosestDealers = null;
                this.Errors = null;
            }
            return ClosestDealerResponse;
        })();
        RequestService.ClosestDealerResponse = ClosestDealerResponse;
        var ClosestDealerInfo = (function () {
            function ClosestDealerInfo() {
                this.ExtensionData = null;
                this.AccountName = null;
                this.BoardedDeals_30 = 0;
                this.BoardedDeals_60 = 0;
                this.BoardedDeals_90 = 0;
                this.BusinessPhone = null;
                this.Contacts = null;
                this.DCID = null;
                this.DealerCode = null;
                this.DealerGrade = null;
                this.DealerTypeForPricing = null;
                this.DealershipTypeId = 0;
                this.DealershipTypeName = null;
                this.Fax = null;
                this.FranchiseTypes = null;
                this.GroupName = null;
                this.GroupTypeId = 0;
                this.GroupTypeName = null;
                this.LeadProgram = false;
                this.PhysicalAddress = null;
                this.ProductionStatusId = 0;
                this.ProductionStatusName = null;
                this.Radius = 0;
                this.SalesRepUserName = null;
                this.SourceLatitude = 0;
                this.SourceLongitude = 0;
            }
            return ClosestDealerInfo;
        })();
        RequestService.ClosestDealerInfo = ClosestDealerInfo;
        var ClosestDealerContact = (function () {
            function ClosestDealerContact() {
                this.ExtensionData = null;
                this.Email = null;
                this.IsAdmin = false;
                this.IsFundingContact = false;
                this.IsPrimaryContact = false;
                this.IsPrincipal = false;
                this.Name = null;
                this.Phone = null;
                this.Title = null;
            }
            return ClosestDealerContact;
        })();
        RequestService.ClosestDealerContact = ClosestDealerContact;
        var ClosestDealerAddress = (function () {
            function ClosestDealerAddress() {
                this.ExtensionData = null;
                this.Address1 = null;
                this.Address2 = null;
                this.City = null;
                this.Latitude = 0;
                this.Longitude = 0;
                this.State = null;
                this.Zip = null;
                this.ZipExt = null;
            }
            return ClosestDealerAddress;
        })();
        RequestService.ClosestDealerAddress = ClosestDealerAddress;
        var WestlakeContact = (function () {
            function WestlakeContact() {
                this.ExtensionData = null;
                this.FirstName = null;
                this.InternalEmailAddress = null;
                this.LastName = null;
                this.Phone = null;
                this.Region = null;
                this.UserName = null;
            }
            return WestlakeContact;
        })();
        RequestService.WestlakeContact = WestlakeContact;
    })(RequestService = WestlakeWebsiteService.RequestService || (WestlakeWebsiteService.RequestService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var AddressValidationService;
    (function (AddressValidationService) {
        var DPVAddress = (function () {
            function DPVAddress() {
                this.ReferenceID = null;
                this.Address = null;
                this.City = null;
                this.State = null;
                this.Zip = null;
                this.Address2 = null;
                this.BarcodeDigits = null;
                this.CarrierRoute = null;
                this.CongressCode = null;
                this.CountyCode = null;
                this.CountyName = null;
                this.Fragment = null;
                this.FragmentHouse = null;
                this.FragmentPMBNumber = null;
                this.FragmentPMBPrefix = null;
                this.FragmentPostDir = null;
                this.FragmentPreDir = null;
                this.FragmentStreet = null;
                this.FragmentSuffix = null;
                this.FragmentUnit = null;
                this.Source = null;
                this.DPV = null;
                this.DPVDesc = null;
                this.DPVNotes = null;
                this.DPVNotesDesc = null;
                this.Corrections = null;
                this.CorrectionsDesc = null;
                this.Error = null;
            }
            return DPVAddress;
        })();
        AddressValidationService.DPVAddress = DPVAddress;
        var Err = (function () {
            function Err() {
                this.Desc = null;
                this.Number = null;
                this.Location = null;
            }
            return Err;
        })();
        AddressValidationService.Err = Err;
        var GeocodeAddress = (function () {
            function GeocodeAddress() {
                this.UserObject = null;
                this.CallExternalService = null;
                this.CallAlternateWhenNeeded = false;
                this.Error = false;
                this.IsPermanentFailure = false;
                this.BusinessName = null;
                this.Street = null;
                this.City = null;
                this.State = null;
                this.Zip = null;
                this.DeliveryPoint = null;
                this.GeocodeSource = null;
                this.MatchStatusCode = null;
                this.MatchDescription = null;
                this.GeocodeAccuracy = null;
                this.Latitude = 0;
                this.Longitude = 0;
                this.NumDaysActive = 0;
                this.CountyName = null;
                this.PlaceName = null;
                this.PlaceCode = null;
                this.TimeZone = null;
                this.TimeZoneCode = null;
                this.Street_Matched = null;
                this.City_Matched = null;
                this.State_Matched = null;
                this.Zip_Matched = null;
                this.MatchTypeCode = null;
                this.StateFIPSCode = null;
                this.CountyFIPSCode = null;
                this.CensusTract = null;
                this.CensusBlock = null;
                this.FIPSPlace = null;
                this.FIPS_MCD_Code = null;
                this.FIPS_MSA_Code = null;
                this.CentroidTypeCode = null;
                this.Exception = null;
            }
            return GeocodeAddress;
        })();
        AddressValidationService.GeocodeAddress = GeocodeAddress;
    })(AddressValidationService = WestlakeWebsiteService.AddressValidationService || (WestlakeWebsiteService.AddressValidationService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var SubmissionService;
    (function (SubmissionService) {
        var SaveAndSubmitRequest = (function () {
            function SaveAndSubmitRequest() {
                this.ExtensionData = null;
                this.Address1 = null;
                this.Address2 = null;
                this.City = null;
                this.DealerName = null;
                this.Email = null;
                this.Fax = null;
                this.FirstName = null;
                this.IsValid = false;
                this.LastName = null;
                this.LeadSourceID = 0;
                this.Phone = null;
                this.RequestSource = null;
                this.RequestType = null;
                this.State = null;
                this.ToNowcom = false;
                this.ToWFS = false;
                this.WFSSalesRepID = 0;
                this.Zip = null;
            }
            return SaveAndSubmitRequest;
        })();
        SubmissionService.SaveAndSubmitRequest = SaveAndSubmitRequest;
        var SaveAndSubmitResponse = (function () {
            function SaveAndSubmitResponse() {
                this.ExtensionData = null;
                this.RequestGUID = null;
            }
            return SaveAndSubmitResponse;
        })();
        SubmissionService.SaveAndSubmitResponse = SaveAndSubmitResponse;
    })(SubmissionService = WestlakeWebsiteService.SubmissionService || (WestlakeWebsiteService.SubmissionService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var WestlakeService;
    (function (WestlakeService) {
        var LeadSource = (function () {
            function LeadSource() {
                this.ExtensionData = null;
                this.Description = null;
                this.Value = 0;
            }
            return LeadSource;
        })();
        WestlakeService.LeadSource = LeadSource;
    })(WestlakeService = WestlakeWebsiteService.WestlakeService || (WestlakeWebsiteService.WestlakeService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var TaxService;
    (function (TaxService) {
        var ZipLocation = (function () {
            function ZipLocation() {
                this.ExtensionData = null;
                this.Errors = null;
                this.StateForZip = null;
            }
            return ZipLocation;
        })();
        TaxService.ZipLocation = ZipLocation;
    })(TaxService = WestlakeWebsiteService.TaxService || (WestlakeWebsiteService.TaxService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var RequestService;
    (function (RequestService) {
        var FilterStructure = (function () {
            function FilterStructure() {
                this.ExtensionData = null;
                this.Name = null;
                this.Value = null;
            }
            return FilterStructure;
        })();
        RequestService.FilterStructure = FilterStructure;
        var WestlakeContactDescendants = (function (_super) {
            __extends(WestlakeContactDescendants, _super);
            function WestlakeContactDescendants() {
                _super.apply(this, arguments);
                this.Descendants = null;
            }
            return WestlakeContactDescendants;
        })(WestlakeWebsiteService.RequestService.WestlakeContact);
        RequestService.WestlakeContactDescendants = WestlakeContactDescendants;
    })(RequestService = WestlakeWebsiteService.RequestService || (WestlakeWebsiteService.RequestService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var WCCPartnerService;
    (function (WCCPartnerService) {
        (function (AllowedSelectionsAllowedStates) {
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["XX"] = 0] = "XX";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["AL"] = 1] = "AL";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["AK"] = 2] = "AK";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["AZ"] = 3] = "AZ";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["AR"] = 4] = "AR";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["CA"] = 5] = "CA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["CO"] = 6] = "CO";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["CT"] = 7] = "CT";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["DE"] = 8] = "DE";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["FL"] = 9] = "FL";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["GA"] = 10] = "GA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["HI"] = 11] = "HI";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["ID"] = 12] = "ID";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["IL"] = 13] = "IL";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["IN"] = 14] = "IN";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["IA"] = 15] = "IA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["KS"] = 16] = "KS";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["KY"] = 17] = "KY";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["LA"] = 18] = "LA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["ME"] = 19] = "ME";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MD"] = 20] = "MD";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MA"] = 21] = "MA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MI"] = 22] = "MI";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MN"] = 23] = "MN";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MO"] = 24] = "MO";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MS"] = 25] = "MS";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["MT"] = 26] = "MT";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NE"] = 27] = "NE";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NV"] = 28] = "NV";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NH"] = 29] = "NH";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NJ"] = 30] = "NJ";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NM"] = 31] = "NM";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NY"] = 32] = "NY";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["NC"] = 33] = "NC";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["ND"] = 34] = "ND";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["OH"] = 35] = "OH";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["OK"] = 36] = "OK";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["OR"] = 37] = "OR";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["PA"] = 38] = "PA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["RI"] = 39] = "RI";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["SC"] = 40] = "SC";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["SD"] = 41] = "SD";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["TN"] = 42] = "TN";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["TX"] = 43] = "TX";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["UT"] = 44] = "UT";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["VT"] = 45] = "VT";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["VA"] = 46] = "VA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["WA"] = 47] = "WA";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["WV"] = 48] = "WV";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["WI"] = 49] = "WI";
            AllowedSelectionsAllowedStates[AllowedSelectionsAllowedStates["WY"] = 50] = "WY";
        })(WCCPartnerService.AllowedSelectionsAllowedStates || (WCCPartnerService.AllowedSelectionsAllowedStates = {}));
        var AllowedSelectionsAllowedStates = WCCPartnerService.AllowedSelectionsAllowedStates;
        (function (AllowedSelectionsEZLoanContactTime) {
            AllowedSelectionsEZLoanContactTime[AllowedSelectionsEZLoanContactTime["Unknown"] = 0] = "Unknown";
            AllowedSelectionsEZLoanContactTime[AllowedSelectionsEZLoanContactTime["CallMeNow"] = 1] = "CallMeNow";
            AllowedSelectionsEZLoanContactTime[AllowedSelectionsEZLoanContactTime["Morning"] = 2] = "Morning";
            AllowedSelectionsEZLoanContactTime[AllowedSelectionsEZLoanContactTime["Afternoon"] = 3] = "Afternoon";
            AllowedSelectionsEZLoanContactTime[AllowedSelectionsEZLoanContactTime["Evening"] = 4] = "Evening";
        })(WCCPartnerService.AllowedSelectionsEZLoanContactTime || (WCCPartnerService.AllowedSelectionsEZLoanContactTime = {}));
        var AllowedSelectionsEZLoanContactTime = WCCPartnerService.AllowedSelectionsEZLoanContactTime;
        (function (AllowedSelectionsAllowedSuffixes) {
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["None"] = 0] = "None";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["Jr"] = 1] = "Jr";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["Sr"] = 2] = "Sr";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["II"] = 3] = "II";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["III"] = 4] = "III";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["IV"] = 5] = "IV";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["V"] = 6] = "V";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["VI"] = 7] = "VI";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["VII"] = 8] = "VII";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["VIII"] = 9] = "VIII";
            AllowedSelectionsAllowedSuffixes[AllowedSelectionsAllowedSuffixes["IX"] = 10] = "IX";
        })(WCCPartnerService.AllowedSelectionsAllowedSuffixes || (WCCPartnerService.AllowedSelectionsAllowedSuffixes = {}));
        var AllowedSelectionsAllowedSuffixes = WCCPartnerService.AllowedSelectionsAllowedSuffixes;
        (function (AllowedSelectionsBookValueSources) {
            AllowedSelectionsBookValueSources[AllowedSelectionsBookValueSources["Unknown"] = 0] = "Unknown";
            AllowedSelectionsBookValueSources[AllowedSelectionsBookValueSources["KBB"] = 1] = "KBB";
            AllowedSelectionsBookValueSources[AllowedSelectionsBookValueSources["BlackBook"] = 2] = "BlackBook";
            AllowedSelectionsBookValueSources[AllowedSelectionsBookValueSources["NADA"] = 3] = "NADA";
            AllowedSelectionsBookValueSources[AllowedSelectionsBookValueSources["MAV"] = 4] = "MAV";
        })(WCCPartnerService.AllowedSelectionsBookValueSources || (WCCPartnerService.AllowedSelectionsBookValueSources = {}));
        var AllowedSelectionsBookValueSources = WCCPartnerService.AllowedSelectionsBookValueSources;
        (function (AllowedSelectionsEZLoanTimeInterval) {
            AllowedSelectionsEZLoanTimeInterval[AllowedSelectionsEZLoanTimeInterval["Unknown"] = 0] = "Unknown";
            AllowedSelectionsEZLoanTimeInterval[AllowedSelectionsEZLoanTimeInterval["Today"] = 1] = "Today";
            AllowedSelectionsEZLoanTimeInterval[AllowedSelectionsEZLoanTimeInterval["Tomorrow"] = 2] = "Tomorrow";
            AllowedSelectionsEZLoanTimeInterval[AllowedSelectionsEZLoanTimeInterval["WithinTheWeek"] = 3] = "WithinTheWeek";
            AllowedSelectionsEZLoanTimeInterval[AllowedSelectionsEZLoanTimeInterval["WithinTheMonth"] = 4] = "WithinTheMonth";
        })(WCCPartnerService.AllowedSelectionsEZLoanTimeInterval || (WCCPartnerService.AllowedSelectionsEZLoanTimeInterval = {}));
        var AllowedSelectionsEZLoanTimeInterval = WCCPartnerService.AllowedSelectionsEZLoanTimeInterval;
    })(WCCPartnerService = WestlakeWebsiteService.WCCPartnerService || (WestlakeWebsiteService.WCCPartnerService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var AddressValidationService;
    (function (AddressValidationService) {
        (function (CallExternalServiceStatus) {
            CallExternalServiceStatus[CallExternalServiceStatus["AS_NEEDED"] = 0] = "AS_NEEDED";
            CallExternalServiceStatus[CallExternalServiceStatus["YES"] = 1] = "YES";
            CallExternalServiceStatus[CallExternalServiceStatus["NO"] = 2] = "NO";
        })(AddressValidationService.CallExternalServiceStatus || (AddressValidationService.CallExternalServiceStatus = {}));
        var CallExternalServiceStatus = AddressValidationService.CallExternalServiceStatus;
        (function (GeocodeAccuracy) {
            GeocodeAccuracy[GeocodeAccuracy["None"] = 0] = "None";
            GeocodeAccuracy[GeocodeAccuracy["Approximate"] = 1] = "Approximate";
            GeocodeAccuracy[GeocodeAccuracy["Zip"] = 2] = "Zip";
            GeocodeAccuracy[GeocodeAccuracy["ZipPlus2"] = 3] = "ZipPlus2";
            GeocodeAccuracy[GeocodeAccuracy["ZipPlus4"] = 4] = "ZipPlus4";
            GeocodeAccuracy[GeocodeAccuracy["Street"] = 5] = "Street";
            GeocodeAccuracy[GeocodeAccuracy["Rooftop"] = 6] = "Rooftop";
        })(AddressValidationService.GeocodeAccuracy || (AddressValidationService.GeocodeAccuracy = {}));
        var GeocodeAccuracy = AddressValidationService.GeocodeAccuracy;
    })(AddressValidationService = WestlakeWebsiteService.AddressValidationService || (WestlakeWebsiteService.AddressValidationService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var SubmissionService;
    (function (SubmissionService) {
        (function (RequestSource) {
            RequestSource[RequestSource["NowcomSystem"] = 1] = "NowcomSystem";
            RequestSource[RequestSource["WestlakeSystem"] = 2] = "WestlakeSystem";
            RequestSource[RequestSource["DealerCenter"] = 3] = "DealerCenter";
            RequestSource[RequestSource["WestlakeWebsite"] = 4] = "WestlakeWebsite";
            RequestSource[RequestSource["DealerCenterFinancialServices"] = 5] = "DealerCenterFinancialServices";
            RequestSource[RequestSource["DealerCenterInsuranceServices"] = 6] = "DealerCenterInsuranceServices";
            RequestSource[RequestSource["PreferredLender"] = 7] = "PreferredLender";
        })(SubmissionService.RequestSource || (SubmissionService.RequestSource = {}));
        var RequestSource = SubmissionService.RequestSource;
        (function (RequestType) {
            RequestType[RequestType["Inquiry"] = 1] = "Inquiry";
            RequestType[RequestType["DealerSignup"] = 2] = "DealerSignup";
            RequestType[RequestType["DCIDRequest"] = 3] = "DCIDRequest";
            RequestType[RequestType["AddGroupAccount"] = 4] = "AddGroupAccount";
            RequestType[RequestType["DealerInformationChange"] = 5] = "DealerInformationChange";
            RequestType[RequestType["PreferredLenderSignUp"] = 7] = "PreferredLenderSignUp";
        })(SubmissionService.RequestType || (SubmissionService.RequestType = {}));
        var RequestType = SubmissionService.RequestType;
    })(SubmissionService = WestlakeWebsiteService.SubmissionService || (WestlakeWebsiteService.SubmissionService = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
//------------ BEGIN Api Declaration -----------
var WestlakeWebsiteService;
(function (WestlakeWebsiteService) {
    var Controllers;
    (function (Controllers) {
        var IWantWestlakeApi = (function () {
            function IWantWestlakeApi() {
            }
            IWantWestlakeApi.GetVehicleYears = function (success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/GetVehicleYears";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            IWantWestlakeApi.GetVehicleMakes = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/GetVehicleMakes";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            IWantWestlakeApi.GetVehicleModels = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/GetVehicleModels";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            IWantWestlakeApi.SubmitLeadToVelocify = function (application, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/SubmitLeadToVelocify";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(application),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            IWantWestlakeApi.GetNearestDealer = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/GetNearestDealer";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            IWantWestlakeApi.ValidateAddress = function (address, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/ValidateAddress";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(address),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            IWantWestlakeApi.GetGeoCodeByZip = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/IWantWestlakeApi/GetGeoCodeByZip";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            return IWantWestlakeApi;
        })();
        Controllers.IWantWestlakeApi = IWantWestlakeApi;
        var WestlakeApi = (function () {
            function WestlakeApi() {
            }
            WestlakeApi.GetVehicleYears = function (success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetVehicleYears";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetVehicleMakes = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetVehicleMakes";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetVehicleModels = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetVehicleModels";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetVehicleTrim = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetVehicleTrim";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.SubmitLeadToVelocify = function (application, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/SubmitLeadToVelocify";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(application),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.UpdateLeadInVelocify = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/UpdateLeadInVelocify";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.SubmitLeadToMkt = function (request, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/SubmitLeadToMkt";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(request),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetFieldValues = function (leadId, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetFieldValues";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(leadId),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetLeadSourceForApplication = function (success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetLeadSourceForApplication";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.ValidateAddress = function (address, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/ValidateAddress";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(address),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetRegionalManager = function (zipCode, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetRegionalManager";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(zipCode),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            WestlakeApi.GetStateFromZip = function (zipCode, success, fail, clientFail, ajaxOptions) {
                if (typeof fail === "undefined") {
                    fail = WebSite.handleError;
                }
                if (typeof clientFail === "undefined") {
                    clientFail = WebSite.handleClientError;
                }
                var url = "/api/WestlakeApi/GetStateFromZip";
                var options = {
                    url: url,
                    type: "POST",
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(zipCode),
                    success: function () { try {
                        success.apply(null, arguments);
                    }
                    catch (__exception) {
                        clientFail(__exception);
                    } },
                    error: function (xhr) { fail(xhr.responseText); }
                };
                if (typeof ajaxOptions !== "undefined" && ajaxOptions !== null) {
                    $.extend(options, ajaxOptions);
                }
                WebSite.updateOption(options);
                return $.ajax(options);
            };
            return WestlakeApi;
        })();
        Controllers.WestlakeApi = WestlakeApi;
    })(Controllers = WestlakeWebsiteService.Controllers || (WestlakeWebsiteService.Controllers = {}));
})(WestlakeWebsiteService || (WestlakeWebsiteService = {}));
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

var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var KeyValuePair = (function () {
                function KeyValuePair() {
                }
                return KeyValuePair;
            })();
            Generic.KeyValuePair = KeyValuePair;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var WebSite;
(function (WebSite) {
    function handleError() {
    }
    WebSite.handleError = handleError;
    function handleClientError() {
    }
    WebSite.handleClientError = handleClientError;
    function updateOption(option) {
        option.headers = new Object();
        option.headers["X_PROXY_URL"] = option.url;
        option.url = "/proxy.php";
    }
    WebSite.updateOption = updateOption;
})(WebSite || (WebSite = {}));

/// <reference path="generated_proxy.ts" />
var IWantWestlakeApi;
(function (IWantWestlakeApi) {
    var vehicle = new WestlakeWebsiteService.BusinessLogic.Vehicle();
    var address = new WestlakeWebsiteService.AddressValidationService.DPVAddress();
    var filterStructure = new Array();
    var geocode = new Array();
    $(function () {
        // var f = new WestlakeWebsiteService.RequestService.FilterStructure();
        // f.Name = "Latitude";
        // f.Value = "34.227594000000032";
        // var fl = new WestlakeWebsiteService.RequestService.FilterStructure();
        // fl.Name = "Longitude";
        // fl.Value = "-119.15201400000005";
        // filterStructure.push(f);
        // filterStructure.push(fl);
        // alert(window.latitude);
        //dealers.getNearestDealers("coords", "", "", "", "", window.latitude, window.longitude, 'coords', true, true);
        WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleYears(function (result) {
            if (result != null && result.Errors == null) {
                result.Years.forEach(function (item) { return $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_year'); });
            }
        }, function (error) {
        });
        $('#sel_buyer_vehicle_year').change(function () {
            vehicle.Year = $('#sel_buyer_vehicle_year').val();
            WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleMakes(vehicle, function (result) {
                if (result != null && result.Errors == null) {
                    result.Makes.forEach(function (item) { return $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_make'); });
                }
            }, function (error) {
            });
        });
        $('#sel_buyer_vehicle_make').change(function () {
            vehicle.Year = $('#sel_buyer_vehicle_year').val();
            vehicle.Make = $('#sel_buyer_vehicle_make').val();
            WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleModels(vehicle, function (result) {
                if (result != null && result.Errors == null) {
                    result.Models.forEach(function (item) { return $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_model'); });
                }
            }, function (error) {
            });
        });
        //geocode = $('#txt_buyer_zip').val();
        $('#txt_buyer_address, #txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').change(function () {
            address.addressField = $('#txt_buyer_address').val();
            address.cityField = $('#txt_buyer_city').val();
            address.stateField = $('#sel_buyer_state').val();
            address.zipField = $('#txt_buyer_zip').val();
            WestlakeWebsiteService.Controllers.IWantWestlakeApi.ValidateAddress(address, function (result) {
                if (result.errorField === "") {
                    console.log(result);
                }
                else {
                    var g = new WestlakeWebsiteService.AddressValidationService.GeocodeAddress();
                    g.zipField = $('#txt_buyer_zip').val();
                    ;
                    geocode.push(g);
                    //console.log(result.errorField);
                    WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetGeoCodeByZip(geocode, function (result) {
                    }, function (error) {
                    });
                }
            }, function (error) { });
        });
        //     var dealers = new function() {
        // 
        //         this.getNearestDealers = function(invoke_type, street, city, state, zip, lat, lng, call_type, async, triggerPanFlag) {
        //             var param;
        //             switch (invoke_type) {
        //                 case 'address': {
        //                     param = {
        //                         street: street,
        //                         city: city,
        //                         state: state,
        //                         zip: zip,
        //                         invoke_type: "address"
        //                     };
        //                     break;
        //                 }
        //                 case 'coords': {
        //                     param = {
        //                         latitude: lat,
        //                         longitude: lng,
        //                         invoke_type: "coords"
        //                     };
        //                     break;
        //                 }
        //                 case 'ziplatlng': {
        //                     param = {
        //                         latitude: lat,
        //                         longitude: lng,
        //                         invoke_type: "ziplatlng"
        //                     };
        //                     break;
        //                 }
        //             }
        //         
        //        
        //             // alert(f);
        //             WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetNearestDealer((filterStructure), (result) => {
        //                 var data = param;
        //                 var temp = "";
        //                 for (var i = 0; i < result.ClosestDealers.length; i++) {
        //                     temp += "<div class='map-dealer' data-email='" + result.ClosestDealers[i].Contacts[0].Email + "' ";
        //                     temp += "data-lat='" + result.ClosestDealers[i].PhysicalAddress.Latitude + "' data-lng='" + result.ClosestDealers[i].PhysicalAddress.Longitude + "' >";
        //                     temp += "<a href='#' onclick='showDealer(this); return false;'><div>" + result.ClosestDealers[i].AccountName + "</div>";
        //                     temp += "<div>" + result.ClosestDealers[i].PhysicalAddress.Address1 + "</div>";
        //                     temp += "<div>" + result.ClosestDealers[i].PhysicalAddress.City + ", " + result.ClosestDealers[i].PhysicalAddress.State + " " + result.ClosestDealers[i].PhysicalAddress.Zip + "</div>";
        //                     temp += "<div>" + result.ClosestDealers[i].Contacts[0].Phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") + "</div>";
        //                     temp += "</a></div>";
        //                     //addMarker(data.dealers[i].lat, data.dealers[i].lng);
        // 
        //                     jQuery('#hf_source_lat').val(result.ClosestDealers[i].SourceLatitude);
        //                     jQuery('#hf_source_lng').val(result.ClosestDealers[i].SourceLongitude);                    
        //                 }
        //                  jQuery('.map-dealers-list').empty().html(temp);
        //                     jQuery('#map_dealer_loader').hide();
        //                 
        //                 
        //                 /*result.ClosestDealers.forEach((item) => item.AccountName)
        //                 if (parseInt(data.count, 10) > 0) {
        //                     var temp = "";
        //     
        //                     if (call_type == 'coords') {
        //                         jQuery('#hf_source_lat').val(data.dealers[i].sourcelat);
        //                         jQuery('#hf_source_lng').val(data.dealers[i].sourcelng);
        //                     }
        //     
        //                     if (call_type == 'address' || call_type == 'ziplatlng') {
        //                         //voucher dealer based on user address / zip code
        //                         jQuery('#hf_dealers').val(JSON.stringify(data.dealers));
        //                     }
        //     
        //                     for (var i = 0; i < data.count; i++) {
        //                         temp += "<div class='map-dealer' data-email='" + data.dealers[i].email + "' ";
        //                         temp += "data-lat='" + data.dealers[i].lat + "' data-lng='" + data.dealers[i].lng + "' >";
        //                         temp += "<a href='#' onclick='showDealer(this); return false;'><div>" + data.dealers[i].name + "</div>";
        //                         temp += "<div>" + data.dealers[i].address + "</div>";
        //                         temp += "<div>" + data.dealers[i].city + ", " + data.dealers[i].state + " " + data.dealers[i].zip + "</div>";
        //                         temp += "<div>" + data.dealers[i].phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") + "</div>";
        //                         temp += "</a></div>";
        //     
        //     
        //                         jQuery('#hf_source_lat').val(data.dealers[i].sourcelat);
        //                         jQuery('#hf_source_lng').val(data.dealers[i].sourcelng);
        //                     }
        //     
        //                     jQuery('.map-dealers-list').empty().html(temp);
        //                     jQuery('#map_dealer_loader').hide();
        //     
        //                 }
        //                 else {
        //                     var notfoundmsg = "<div style='margin:0 auto;color:white;'>No dealer(s) found. Please try again.</div>";
        //                     jQuery('.map-dealers-list').empty().html(notfoundmsg);
        //                     jQuery('#hf_dealers').val('');
        //                 }
        //     
        //                 jQuery('#map_dealer_loader').hide();*/
        //             },
        // 
        //                 (error) => {
        //                     
        //                 });
        //         }
        //}
    });
})(IWantWestlakeApi || (IWantWestlakeApi = {}));
