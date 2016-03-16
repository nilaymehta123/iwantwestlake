/// <reference path="generated_proxy.ts" />

module IWantWestlakeApi {
    var vehicle = new WestlakeWebsiteService.BusinessLogic.Vehicle();
    var address = new WestlakeWebsiteService.AddressValidationService.DPVAddress();
    var filterStructure = new Array<WestlakeWebsiteService.RequestService.FilterStructure>();
    var geocode = new Array<WestlakeWebsiteService.AddressValidationService.GeocodeAddress>();
    $(function() {

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

        WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleYears((result) => {
            if (result != null && result.Errors == null) {
                result.Years.forEach((item) => $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_year'));
            }
        },
            (error) => {

            });

        $('#sel_buyer_vehicle_year').change(function() {
            vehicle.Year = $('#sel_buyer_vehicle_year').val();
            WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleMakes(vehicle, (result) => {
                if (result != null && result.Errors == null) {
                    result.Makes.forEach((item) => $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_make'));
                }
            },
                (error) => {

                });
        });

        $('#sel_buyer_vehicle_make').change(function() {
            vehicle.Year = $('#sel_buyer_vehicle_year').val();
            vehicle.Make = $('#sel_buyer_vehicle_make').val();
            WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetVehicleModels(vehicle, (result) => {
                if (result != null && result.Errors == null) {
                    result.Models.forEach((item) => $('<option>').val(item).text(item).appendTo('#sel_buyer_vehicle_model'));
                }
            },
                (error) => {

                });
        });

        //geocode = $('#txt_buyer_zip').val();

        $('#txt_buyer_address, #txt_buyer_city, #sel_buyer_state, #txt_buyer_zip').change(function() {
            address.addressField = $('#txt_buyer_address').val();
            address.cityField = $('#txt_buyer_city').val();
            address.stateField = $('#sel_buyer_state').val();
            address.zipField = $('#txt_buyer_zip').val();

            WestlakeWebsiteService.Controllers.IWantWestlakeApi.ValidateAddress(address, (result) => {
                if (result.errorField === "") {
                    console.log(result);
                    
                    
                }
                else {
                    var g = new WestlakeWebsiteService.AddressValidationService.GeocodeAddress();
                    g.zipField = $('#txt_buyer_zip').val();;
                    geocode.push(g);
                    //console.log(result.errorField);
                    WestlakeWebsiteService.Controllers.IWantWestlakeApi.GetGeoCodeByZip(geocode, (result) => {
                        
                    },
                        (error) => {

                        });
                }

            }, (error) => { });


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
    }