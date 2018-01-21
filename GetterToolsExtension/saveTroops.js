console.log("SAVETROOPS SCRIPT LOADED");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function findElementsByContent(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(element){
        return RegExp(text).test(element.textContent);
    });
}

async function updateTroopsRow(villageName, troops) {
    if(troops.length){
        var row = findElementsByContent(".c div", villageName)[0].parentElement.parentElement        
        row.querySelector(".edit").click();
        await sleep(1000);
        row = findElementsByContent(".c div", villageName)[0].parentElement.parentElement        
        for(index in troops) {
            var troop = troops[index];
            row.querySelector("#trInput"+troop.index).value = troop.amount
        }
        row.querySelector(".edit input").click();
    }
}
async function updateTroopsRows(troops) {
    for(villageName in troops){
        updateTroopsRow(villageName, troops[villageName]);
        await sleep(2000);
    }
}
chrome.storage.local.get('troops', function (items) {
    updateTroopsRows(items.troops);
});