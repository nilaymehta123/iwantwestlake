module System.Collections.Generic {
    export class KeyValuePair {
        
    }
}

module WebSite {
    export function handleError() {
        
    }
    
    export function handleClientError() {
        
    }
    
    export function updateOption(option:JQueryAjaxSettings) {
        option.headers = new Object();
        option.headers["X_PROXY_URL"] = option.url;
        option.url = "/proxy.php";
    }
}