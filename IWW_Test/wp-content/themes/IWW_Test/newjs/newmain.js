/// <reference path="generated_proxy.ts" />
var IWantWestlakeApi;
(function (IWantWestlakeApi) {
    $(function () {
        WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleYears(function (result) {
            if (result != null && result.Errors == null) {
                result.Years.forEach(function (item) { return $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_year'); });
            }
        }, function (error) {
        });
    });
})(IWantWestlakeApi || (IWantWestlakeApi = {}));
