var troopInformation = {};
var travianTab = null;
var gettertoolsTab = null;

function getTabInformation() {
    chrome.tabs.getAllInWindow(function(tabs){
        for(var index in tabs) {
            var tab = tabs[index]
            if(tab.url.match(/:\/\/t..\.travian.com\/dorf1/)) {
                travianTab = tab.id;
            }
            else if(tab.url.match(/:\/\/www\.gettertools.com/)) {
                gettertoolsTab = tab.id;
            }
        }
    });
}

function getTroopData() {
    if(travianTab && travianTab != undefined) {
        chrome.tabs.executeScript(
            travianTab, 
            {file:"loadTroops.js"}, 
            function (result) {
                if(result) {
                    troopInformation[result[0].village] = result[0].troops;
                    chrome.storage.local.set({"troops":troopInformation});
                }
            }
        );
    }
}

function updateGetterTools() {
    if(gettertoolsTab) {
        chrome.tabs.executeScript(gettertoolsTab, {file:"saveTroops.js"});
    }
}

getTabInformation(); //get initial troop information
setInterval(getTabInformation, 1000*60) // Update tab information once per minute
setInterval(getTroopData, 1000*5) // Update troop information once every five seconds
setInterval(updateGetterTools, 1000*10) // Update gettertools page once per minute
