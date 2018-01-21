var tmp = "";
setInterval(function() {
    console.log("Background-script successfully loaded");
    console.log(chrome.tabs)
    chrome.tabs.getAllInWindow(function(tabs){
        // console.log("CALLBACK: ", tabs)
        for(var index in tabs) {
            var tab = tabs[index]
            if(tab.url.match(/:\/\/t..\.travian.com/)) {
                console.log("travian tab is active: ", tab);
                chrome.tabs.executeScript(
                    tab.id, 
                    {file:"loadTroops.js"}, 
                    function (result) {
                        tmp = result;
                        console.log("Callback: ", result);
                        chrome.storage.local.set({"troops":tmp});
                    }
                );
            } else if(tab.url.match(/:\/\/www\.gettertools.com/)) {
                console.log("Gettertools tab is active: ", tab);
                console.log("DATA: ", tmp);
                chrome.tabs.executeScript(
                    tab.id, 
                    {file:"saveTroops.js"}, 
                    function (result) {
                        console.log("Callbackgettertools: ", result);
                    }
                );
            }
        }
    });
}, 1000*5);
