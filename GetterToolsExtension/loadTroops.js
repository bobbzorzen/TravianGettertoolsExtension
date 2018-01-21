console.log("TROOP SCRIPT LOADED");
var TROOP_INDEX = {
    "Phalanx": 0,
    "Swordsman": 1,
    "Pathfinder": 2,
    "Theutates Thunder": 3,
    "Druidrider": 4,
    "Haeduan": 5,
    "Ram": 6,
    "Trebuchet": 7,
    "Chieftain": 8,

    "Clubswinger": 0,
    "Spearman": 1,
    "Axeman": 2,
    "Scout": 3,
    "Paladin": 4,
    "Teutonic Knight": 5,
    "Ram": 6,
    "Catapult": 7,
    "Chief": 8,

    "Legionnaire": 0,
    "Praetorian": 1,
    "Imperian": 2,
    "Equites Legati": 3,
    "Equites Imperatoris": 4,
    "Equites Caesaris": 5,
    "Battering Ram": 6,
    "Fire Catapult": 7,
    "Senator": 8
}
//TODO: return the village name with the list of troops
var troops = []
var listOfTroops = document.querySelectorAll("#troops tr")
for(var index = 0; index < listOfTroops.length; index++) {
    element = listOfTroops[index];
    var troopNameNode = element.querySelector(".un");
    var troopAmountNode = element.querySelector(".num");
    if(troopNameNode != null && troopNameNode.innerText in TROOP_INDEX) {
        var troopName = troopNameNode.innerText;
        var troopAmount = troopAmountNode.innerText;
        troop = {
            "name": troopName,
            "index": TROOP_INDEX[troopName],
            "amount": parseInt(troopAmount)
        };
        troops.push(troop);
    }
}
troops
