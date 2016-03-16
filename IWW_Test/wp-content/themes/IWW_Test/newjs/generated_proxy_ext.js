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
