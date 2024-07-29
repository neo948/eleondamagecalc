const STAB = 1.5;

var pokeDropdown1 = document.getElementById("pokes1");
var pokeDropdown2 = document.getElementById("pokes2");

var primaryTypeDropdown1 = document.getElementById("primaryType1");
var secondaryTypeDropdown1 = document.getElementById("secondaryType1");

var primaryTypeDropdown2 = document.getElementById("primaryType2");
var secondaryTypeDropdown2 = document.getElementById("secondaryType2");

var abilityDropdown1 = document.getElementById("ability1");
var abilityDropdown2 = document.getElementById("ability2");

let bst1 = document.getElementById("BST1");
let bst2 = document.getElementById("BST2");

var moveOneDropdown1 = document.getElementById("moveOne1")
var moveOneDropdown2 = document.getElementById("moveOne2");
var moveTwoDropdown1 = document.getElementById("moveTwo1")
var moveTwoDropdown2 = document.getElementById("moveTwo2");
var moveThreeDropdown1 = document.getElementById("moveThree1")
var moveThreeDropdown2 = document.getElementById("moveThree2");
var moveFourDropdown1 = document.getElementById("moveFour1")
var moveFourDropdown2 = document.getElementById("moveFour2");

let moveOnePower1 = document.getElementById("moveOnePower1");
let moveTwoPower1 = document.getElementById("moveTwoPower1");
let moveThreePower1 = document.getElementById("moveThreePower1");
let moveFourPower1 = document.getElementById("moveFourPower1");
let moveOnePower2 = document.getElementById("moveOnePower2");
let moveTwoPower2 = document.getElementById("moveTwoPower2");
let moveThreePower2 = document.getElementById("moveThreePower2");
let moveFourPower2 = document.getElementById("moveFourPower2");

let moveOneType1 = document.getElementById("moveOneType1");
let moveTwoType1 = document.getElementById("moveTwoType1");
let moveThreeType1 = document.getElementById("moveThreeType1");
let moveFourType1 = document.getElementById("moveFourType1");
let moveOneType2 = document.getElementById("moveOneType2");
let moveTwoType2 = document.getElementById("moveTwoType2");
let moveThreeType2 = document.getElementById("moveThreeType2");
let moveFourType2 = document.getElementById("moveFourType2");



let moveOneMR1 = document.getElementById("moveOneMR1");
let moveTwoMR1 = document.getElementById("moveTwoMR1");
let moveThreeMR1 = document.getElementById("moveThreeMR1");
let moveFourMR1 = document.getElementById("moveFourMR1");
let moveOneMR2 = document.getElementById("moveOneMR2");
let moveTwoMR2 = document.getElementById("moveTwoMR2");
let moveThreeMR2 = document.getElementById("moveThreeMR2");
let moveFourMR2 = document.getElementById("moveFourMR2");

let moveOneLbl1 = document.getElementById("moveOneLbl1");
let moveTwoLbl1 = document.getElementById("moveTwoLbl1");
let moveThreeLbl1 = document.getElementById("moveThreeLbl1");
let moveFourLbl1 = document.getElementById("moveFourLbl1");
let soulMoveLbl1 = document.getElementById("soulMoveLbl1");
let moveOneDmg1 = document.getElementById("moveOneDmg1");
let moveTwoDmg1 = document.getElementById("moveTwoDmg1");
let moveThreeDmg1 = document.getElementById("moveThreeDmg1");
let moveFourDmg1 = document.getElementById("moveFourDmg1");
let soulMoveDmg1 = document.getElementById("soulMoveDmg1");

let moveOneLbl2 = document.getElementById("moveOneLbl2");
let moveTwoLbl2 = document.getElementById("moveTwoLbl2");
let moveThreeLbl2 = document.getElementById("moveThreeLbl2");
let moveFourLbl2 = document.getElementById("moveFourLbl2");
let soulMoveLbl2 = document.getElementById("soulMoveLbl2");
let moveOneDmg2 = document.getElementById("moveOneDmg2");
let moveTwoDmg2 = document.getElementById("moveTwoDmg2");
let moveThreeDmg2 = document.getElementById("moveThreeDmg2");
let moveFourDmg2 = document.getElementById("moveFourDmg2");
let soulMoveDmg2 = document.getElementById("soulMoveDmg2");

let moveOneCrit1 = document.getElementById("moveOneCrit1");
let moveTwoCrit1 = document.getElementById("moveTwoCrit1");
let moveThreeCrit1 = document.getElementById("moveThreeCrit1");
let moveFourCrit1 = document.getElementById("moveFourCrit1");
let moveOneCrit2 = document.getElementById("moveOneCrit2");
let moveTwoCrit2 = document.getElementById("moveTwoCrit2");
let moveThreeCrit2 = document.getElementById("moveThreeCrit2");
let moveFourCrit2 = document.getElementById("moveFourCrit2");

let moveOneHits1 = document.getElementById("moveOneHits1");
let moveTwoHits1 = document.getElementById("moveTwoHits1");
let moveThreeHits1 = document.getElementById("moveThreeHits1");
let moveFourHits1 = document.getElementById("moveFourHits1");
let moveOneHits2 = document.getElementById("moveOneHits2");
let moveTwoHits2 = document.getElementById("moveTwoHits2");
let moveThreeHits2 = document.getElementById("moveThreeHits2");
let moveFourHits2 = document.getElementById("moveFourHits2");

let moveOneSwarm1 = document.getElementById("moveOneSwarm1");
let moveTwoSwarm1 = document.getElementById("moveTwoSwarm1");
let moveThreeSwarm1 = document.getElementById("moveThreeSwarm1");
let moveFourSwarm1 = document.getElementById("moveFourSwarm1");
let moveOneSwarm2 = document.getElementById("moveOneSwarm2");
let moveTwoSwarm2 = document.getElementById("moveTwoSwarm2");
let moveThreeSwarm2 = document.getElementById("moveThreeSwarm2");
let moveFourSwarm2 = document.getElementById("moveFourSwarm2");

let moveOneSnowball1 = document.getElementById("moveOneSnowball1");
let moveTwoSnowball1 = document.getElementById("moveTwoSnowball1");
let moveThreeSnowball1 = document.getElementById("moveThreeSnowball1");
let moveFourSnowball1 = document.getElementById("moveFourSnowball1");
let moveOneSnowball2 = document.getElementById("moveOneSnowball2");
let moveTwoSnowball2 = document.getElementById("moveTwoSnowball2");
let moveThreeSnowball2 = document.getElementById("moveThreeSnowball2");
let moveFourSnowball2 = document.getElementById("moveFourSnowball2");

let repeating1 = document.getElementById("repeating1");
let repeating2 = document.getElementById("repeating2");

let soulMove1;
let soulMove2;
let soulMovePower1;
let soulMovePower2;
let soulMoveType1;
let soulMoveType2;
let soulMoveMR1;
let soulMoveMR2;

let abilityBPDropdown = document.getElementById("abilityBPDropdown");
let itemBP = document.getElementById("itemBP");
let moveBPDropdown = document.getElementById("moveBPDropdown");
let moveBPDropdown2 = document.getElementById("moveBPDropdown2");
let moveBPDropdown3 = document.getElementById("moveBPDropdown3");
let moveBPDropdown4 = document.getElementById("moveBPDropdown4");
let moveBPTimes = document.getElementById("moveBPTimes");
let moveBPTimes2 = document.getElementById("moveBPTimes2");
let moveBPTimes3 = document.getElementById("moveBPTimes3");
let moveBPTimes4 = document.getElementById("moveBPTimes4");
let moveBPResult = document.getElementById("moveBPResult");

let baseHP1 = document.getElementById("baseHP1");
let baseHP2 = document.getElementById("baseHP2");
let baseAtk1 = document.getElementById("baseAtk1");
let baseAtk2 = document.getElementById("baseAtk2");
let baseDef1 = document.getElementById("baseDef1");
let baseDef2 = document.getElementById("baseDef2");
let baseAtkR1 = document.getElementById("baseAtkR1");
let baseAtkR2 = document.getElementById("baseAtkR2");
let baseDefR1 = document.getElementById("baseDefR1");
let baseDefR2 = document.getElementById("baseDefR2");
let baseSpd1 = document.getElementById("baseSpd1");
let baseSpd2 = document.getElementById("baseSpd2");

let hpEV1 = document.getElementById("HPEV1");
let atkEV1 = document.getElementById("atkEV1");
let defEV1 = document.getElementById("defEV1");
let atkREV1 = document.getElementById("atkREV1");
let defREV1 = document.getElementById("defREV1");
let spdEV1 = document.getElementById("spdEV1");

let hpEV2 = document.getElementById("HPEV2");
let atkEV2 = document.getElementById("atkEV2");
let defEV2 = document.getElementById("defEV2");
let atkREV2 = document.getElementById("atkREV2");
let defREV2 = document.getElementById("defREV2");
let spdEV2 = document.getElementById("spdEV2");

let statHP1 = document.getElementById("statHP1");
let statHP2 = document.getElementById("statHP2");
let statAtk1 = document.getElementById("statAtk1");
let statAtk2 = document.getElementById("statAtk2");
let statDef1 = document.getElementById("statDef1");
let statDef2 = document.getElementById("statDef2");
let statAtkR1 = document.getElementById("statAtkR1");
let statAtkR2 = document.getElementById("statAtkR2");
let statDefR1 = document.getElementById("statDefR1");
let statDefR2 = document.getElementById("statDefR2");
let statSpd1 = document.getElementById("statSpd1");
let statSpd2 = document.getElementById("statSpd2");

let atkStages1 = document.getElementById("atkStages1");
let defStages1 = document.getElementById("defStages1");
let atkRStages1 = document.getElementById("atkRStages1");
let defRStages1 = document.getElementById("defRStages1");
let spdStages1 = document.getElementById("spdStages1");

let atkStages2 = document.getElementById("atkStages2");
let defStages2 = document.getElementById("defStages2");
let atkRStages2 = document.getElementById("atkRStages2");
let defRStages2 = document.getElementById("defRStages2");
let spdStages2 = document.getElementById("spdStages2");

let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");

let immuneAbilityBoost1 = document.getElementById("immuneBoost1");
let immuneAbilityBoost2 = document.getElementById("immuneBoost2");

let noWeather = document.getElementById("noWeather");
let rain = document.getElementById("rain");
let rocky = document.getElementById("rocky");
let overgrown = document.getElementById("overgrown");
let heat = document.getElementById("heat");
let enchanted = document.getElementById("enchanted");
let icy = document.getElementById("icy");

let altruistic1 = document.getElementById("altruistic1");
let altruistic2 = document.getElementById("altruistic2");

let iceTrap1 = document.getElementById("iceTrap1");
let iceTrap2 = document.getElementById("iceTrap2");

let halfIce1 = document.getElementById("halfIce1");
let halfStyle1 = document.getElementById("halfStyle1");
let halfIce2 = document.getElementById("halfIce2");
let halfStyle2 = document.getElementById("halfStyle2");

let leftBarb0 = document.getElementById("leftBarb0");
let leftBarb1 = document.getElementById("leftBarb1");
let leftBarb2 = document.getElementById("leftBarb2");
let leftBarb3 = document.getElementById("leftBarb3");
let rightBarb0 = document.getElementById("rightBarb0");
let rightBarb1 = document.getElementById("rightBarb1");
let rightBarb2 = document.getElementById("rightBarb2");
let rightBarb3 = document.getElementById("rightBarb3");

let barbs = [0,0];

let wall1 = document.getElementById("wall1");
let wall2 = document.getElementById("wall2");

let shield1 = document.getElementById("shield1");
let shield2 = document.getElementById("shield2");

let enteredBtl1 = document.getElementById("enteredBtl1");
let enteredBtl2 = document.getElementById("enteredBtl2");

let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

let diseased1 = document.getElementById("diseased1");
let diseased2 = document.getElementById("diseased2");

let gender1 = document.getElementById("gender1");
let gender2 = document.getElementById("gender2");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");

let sapPlant1 = document.getElementById("sapPlant1");
let sapPlant2 = document.getElementById("sapPlant2");

let pestilence1 = document.getElementById("pestilence1");
let pestilence2 = document.getElementById("pestilence2");

let quicksand1 = document.getElementById("quicksand1");
let quicksand2 = document.getElementById("quicksand2");

let buzzolen1 = document.getElementById("buzzolen1");
let buzzolen2 = document.getElementById("buzzolen2");

let hellstorm1 = document.getElementById("hellstorm1");
let hellstorm2 = document.getElementById("hellstorm2");

let bloodDrain1 = document.getElementById("bloodDrain1");
let bloodDrain2 = document.getElementById("bloodDrain2");

let softWater1 = document.getElementById("softWater1");
let softWater2 = document.getElementById("softWater2");

let teamwork1 = document.getElementById("teamwork1");
let teamwork2 = document.getElementById("teamwork2");

let dusk1 = document.getElementById("dusk1");
let dusk2 = document.getElementById("dusk2");

let dawn1 = document.getElementById("dawn1");
let dawn2 = document.getElementById("dawn2");

let guardian1 = document.getElementById("guardian1");
let guardian2 = document.getElementById("guardian2");

let wind1 = document.getElementById("wind1");
let wind2 = document.getElementById("wind2");

let tagTeam1 = document.getElementById("tagTeam1");
let tagTeam2 = document.getElementById("tagTeam2");

let currentHP1 = document.getElementById("currentHP1");
let currentHP2 = document.getElementById("currentHP2");

let totalHP1 = document.getElementById("totalHP1");
let totalHP2 = document.getElementById("totalHP2");

let percentHP1 = document.getElementById("percentHP1");
let percentHP2 = document.getElementById("percentHP2");

let singleDouble = document.getElementById("singleDouble");
let levelCheck = document.getElementById("levelCheck");
let gsbCheck = document.getElementById("gsbCheck");


let firstLoomian;
let hp1;
let atk1;
let def1;
let atkR1;
let defR1;
let spd1;
let tempAbility1;

let secondLoomian;
let hp2;
let atk2;
let def2;
let atkR2;
let defR2;
let spd2;
let tempAbility2;

let trueStats1;
let trueStats2;

let darkMode = document.getElementById("darkMode");
$(document).ready(load);

//WORK IN PROGRESS ----------------------------------------------
function toggleDarkMode() {
    if (darkMode.checked) {
        document.body.style.backgroundColor = "#222222";
        document.body.style.color = "white";
        let allFieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < allFieldsets.length; i++) {
            allFieldsets[i].style.backgroundColor = "#424242";
        }

        let allInputs = document.querySelectorAll("input");
        for (let j = 0; j < allInputs.length; j++) {
            allInputs[j].style.backgroundColor = "#757575";
            allInputs[j].style.color = "white";
            allInputs[j].style.border = "1px solid #AAAAAA";
        }

        let allSelects = document.querySelectorAll("select");
        for (let k = 0; k < allSelects.length; k++) {
            allSelects[k].style.backgroundColor = "#545454";
            allSelects[k].style.color = "white";
        }

        let allSelect2s = document.getElementsByClassName("pokeselect");
        for (let l = 0; l < allSelect2s.length; l++) {
            allSelect2s[l].style.color = "black";
        }

        let radioLabels = document.getElementsByClassName("radioLbl");
        let resultLabels = document.getElementsByClassName("resultLbl");
        for (let p = 0; p < radioLabels.length; p++) {
            radioLabels[p].style.backgroundColor = "#545454";
            radioLabels[p].style.color = "white";
        }
        for (let q = 0; q < resultLabels.length; q++) {
            resultLabels[q].style.backgroundColor = "#545454";
            resultLabels[q].style.color = "white";
            resultLabels[q].style.border = "1px solid #AAAAAA";
        }
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let allFieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < allFieldsets.length; i++) {
            allFieldsets[i].style.backgroundColor = "#f1f4f9";
        }

        let allInputs = document.querySelectorAll("input");
        for (let j = 0; j < allInputs.length; j++) {
            allInputs[j].style.backgroundColor = "white";
            allInputs[j].style.color = "black";
            allInputs[j].style.borderStyle = "inset";
            allInputs[j].style.borderColor = "initial";
            allInputs[j].style.borderWidth = "2px";
        }

        let allSelects = document.querySelectorAll("select");
        for (let k = 0; k < allSelects.length; k++) {
            allSelects[k].style.backgroundColor = "white";
            allSelects[k].style.color = "black";
        }

        let allSelect2s = document.getElementsByClassName("pokeselect");
        for (let l = 0; l < allSelect2s.length; l++) {
            allSelect2s[l].style.color = "black";
        }

        let radioLabels = document.getElementsByClassName("radioLbl");
        let resultLabels = document.getElementsByClassName("resultLbl");
        for (let p = 0; p < radioLabels.length; p++) {
            radioLabels[p].style.backgroundColor = "#e9e9e9";
            radioLabels[p].style.color = "#555555";
        }
        for (let q = 0; q < resultLabels.length; q++) {
            resultLabels[q].style.backgroundColor = "#e9e9e9";
            resultLabels[q].style.color = "#555555";
            resultLabels[q].style.border = "1px solid aaa";
        }
    }
}

    function load() {
    loadDropdowns();
    if (document.cookie != "") {
        let seenChangelongCookie = getCookie("changelog2").substring(11);
        let darkModeCookie = getCookie("darkMode").substring(9);
        if (seenChangelongCookie != "true") {
            alert(changelog);
            document.cookie = "changelog2=true";
        }
        if (darkModeCookie == "true") {
            darkMode.click();
        }

        try {
            let decoded = pako.inflate(atob(localStorage.getItem("setData")), { to: "string" });
            let data = JSON.parse(decoded);
            let newSets = [];

            for (let set in data) {
                newSets.push(data[set]);
                addSet(newSets[newSets.length - 1]);
            }
        } catch (err) {

        }
    }

    console.log(document.cookie);

    loadSets();
    update();

    currentHP1.addEventListener("keyup", updatePercent);
    currentHP2.addEventListener("keyup", updatePercent);
    

    percentHP1.addEventListener("keyup", updateNumber);
    percentHP2.addEventListener("keyup", updateNumber);
    

    currentHP1.addEventListener("change", update);
    currentHP2.addEventListener("change", update);
    

    percentHP1.addEventListener("change", update);
    percentHP2.addEventListener("change", update);
   

    currentHP1.value = hp1;
    currentHP2.value = hp2;
    updatePercent();
    update();
}

      function saveCookie() {
    let json = JSON.stringify(sets);
    let encoded = pako.deflate(json, { to: "string" });
    localStorage.setItem("setData", btoa(encoded));

    document.cookie = "changelog2=true; expires=Mon, 1 Jan 2025 12:00:00 UTC";
    document.cookie = "changelog1=true; expires=Mon, 1 Jan 2000 12:00:00 UTC";

    if (darkMode.checked) {
        document.cookie = "darkMode=true; expires=Mon, 1 Jan 2025 12:00:00 UTC"
    }
    else {
        document.cookie = "darkMode=false; expires=Mon, 1 Jan 2025 12:00:00 UTC";
    }
}

function getCookie(name) {
    let cook = document.cookie.split("; ");

    for (let i = 0; i < cook.length; i++) {
        let line = cook[i];
        if (line.indexOf(name + "=") != -1) {
            return line;
        }
    }
    return "";
}
function loadDropdowns() {
    let moveNames = [];

    abilities.sort();
    items.sort();

    for (let loom in loomians) {
        let optG1 = document.createElement("optgroup");
        optG1.label = loomians[loom].name;
        pokeDropdown1.appendChild(optG1);
        if (loomians[loom].name == "Iron Fumble") {
            optG1.appendChild(new Option(loomians[loom].name + " (Sherbot)", loomians[loom].name));
        } else optG1.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown1.options[pokeDropdown1.options.length - 1].set = makeBlankSet(loomians[loom].name);

        let optG2 = document.createElement("optgroup");
        optG2.label = loomians[loom].name;
        pokeDropdown2.appendChild(optG2);
        if (loomians[loom].name == "Iron Fumble") {
            optG2.appendChild(new Option(loomians[loom].name + " (Sherbot)", loomians[loom].name));
        } else optG2.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown2.options[pokeDropdown2.options.length - 1].set = makeBlankSet(loomians[loom].name)
    }

    for (let type in types) {
        let capitalized = capitalizeFirstLetter(type);
        primaryTypeDropdown1.options[primaryTypeDropdown1.options.length] = new Option(capitalized);
        primaryTypeDropdown2.options[primaryTypeDropdown2.options.length] = new Option(capitalized);

        secondaryTypeDropdown1.options[secondaryTypeDropdown1.options.length] = new Option(capitalized);
        secondaryTypeDropdown2.options[secondaryTypeDropdown2.options.length] = new Option(capitalized);
    }

    for (let ability in abilities) {
        abilityDropdown1.options[abilityDropdown1.options.length] = new Option(abilities[ability]);
        abilityDropdown2.options[abilityDropdown2.options.length] = new Option(abilities[ability]);
    }

    for (let move in moves) {
        moveNames.push(moves[move].name);
    }

    for (let item in items) {
        item1.options[item1.options.length] = new Option(items[item]);
        item2.options[item2.options.length] = new Option(items[item]);
    }

    moveNames.sort();

    for (let move in moveNames) {
        moveOneDropdown1.options[moveOneDropdown1.options.length] = new Option(moveNames[move]);
        moveOneDropdown2.options[moveOneDropdown2.options.length] = new Option(moveNames[move]);
        moveTwoDropdown1.options[moveTwoDropdown1.options.length] = new Option(moveNames[move]);
        moveTwoDropdown2.options[moveTwoDropdown2.options.length] = new Option(moveNames[move]);
        moveThreeDropdown1.options[moveThreeDropdown1.options.length] = new Option(moveNames[move]);
        moveThreeDropdown2.options[moveThreeDropdown2.options.length] = new Option(moveNames[move]);
        moveFourDropdown1.options[moveFourDropdown1.options.length] = new Option(moveNames[move]);
        moveFourDropdown2.options[moveFourDropdown2.options.length] = new Option(moveNames[move]);
       
    }
}

function findOptgroup(sel, key) {
    for (let child in sel.childNodes) {
        if (sel.childNodes[child].label == key) {
            return sel.childNodes[child];
        }
    }
}

function update(updatePower = false, updateBaseStats = false) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    document.getElementById("loom1Info").innerHTML = firstLoom.name + "'s moves (select one for more info)";
    document.getElementById("loom2Info").innerHTML = secondLoom.name + "'s moves (select one for more info)";

    if (updateBaseStats) loadBaseStats();
    loadStats();
    firstLoomian = firstLoom;
    secondLoomian = secondLoom;

    totalHP1.innerHTML = hp1;
    totalHP2.innerHTML = hp2;
   

    currentHP1.max = hp1;
    currentHP2.max = hp2;
    

    (currentHP1.value > hp1 ? currentHP1.value = hp1 : null);
    (currentHP2.value > hp2 ? currentHP2.value = hp2 : null);
  
    loadMoves(updatePower);
    detailedReport();

    updatePercent();
    addStats();

    if (abilityDropdown1.value == "Combustible" || abilityDropdown1.value == "Noxious Weeds" || abilityDropdown1.value == "Coursing Venom" || abilityDropdown1.value == "Prismatic" || abilityDropdown1.value == "Toxic Filter") {
        immuneAbilityBoost1.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost1.style.visibility = "hidden";
        immuneAbilityBoost1.checked = false;
    }

    if (abilityDropdown2.value == "Combustible" || abilityDropdown2.value == "Noxious Weeds" || abilityDropdown2.value == "Coursing Venom" || abilityDropdown2.value == "Prismatic" || abilityDropdown2.value == "Toxic Filter") {
        immuneAbilityBoost2.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost2.style.visibility = "hidden";
        immuneAbilityBoost2.checked = false;
    }

    if (abilityDropdown1.value == "Recurrent") repeating1.style.display = "inline";
    else {
        repeating1.style.display = "none";
        repeating1.value = 0;
    }

    if (abilityDropdown2.value == "Recurrent") repeating2.style.display = "inline";
    else {
        repeating2.style.display = "none";
        repeating2.value = 0;
    }

    if (status1.value == "diseased") {
        diseased1.style.visibility = "visible";
    } else {
        diseased1.style.visibility = "hidden";
        diseased1.value = "1/16";
    }
    if (status2.value == "diseased") {
        diseased2.style.visibility = "visible";
    } else {
        diseased2.style.visibility = "hidden";
        diseased2.value = "1/16";
    }
}

function addStats() {
    let baseTotal1 = parseInt(baseHP1.value) + parseInt(baseAtk1.value) + parseInt(baseDef1.value) + parseInt(baseAtkR1.value) + parseInt(baseDefR1.value) + parseInt(baseSpd1.value);
    let baseTotal2 = parseInt(baseHP2.value) + parseInt(baseAtk2.value) + parseInt(baseDef2.value) + parseInt(baseAtkR2.value) + parseInt(baseDefR2.value) + parseInt(baseSpd2.value);
    bst1.innerHTML = "Total: " + baseTotal1;
    bst2.innerHTML = "Total: " + baseTotal2;
}

function updateItem(item) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    if (item == "item1") {
        if (item1.value == "Shock Stone" && !firstLoom.types.includes("Electric")) status1.value = "paralasis";
        else if (item1.value == "Scorch Stone" && !firstLoom.types.includes("Fire")) status1.value = "burned";
		else if (item1.value == "Acid Stone" && !firstLoom.types.includes("Toxic")) status1.value = "diseased";
		else if (item1.value == "Chill Stone" && !firstLoom.types.includes("Ice")) status1.value = "freeze";
        else status1.value = "healthy";
    } else if (item == "item2") {
        if (item2.value == "Shock Stone" && !secondLoom.types.includes("Electric")) status2.value = "paralasis";
        else if (item2.value == "Scorch Stone" && !secondLoom.types.includes("Fire")) status2.value = "burned";
		else if (item2.value == "Acid Stone" && !secondLoom.types.includes("Toxic")) status1.value = "diseased";
		else if (item2.value == "Chill Stone" && !secondLoom.types.includes("Ice")) status1.value = "freeze";
        else status2.value = "healthy";
    }
    update();
}

function updateAbility(ability) {
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    if (ability1 == "Rainfall" || ability2 == "Rainfall") rain.checked = true;
    if (ability1 == "Ashfall" || ability2 == "Ashfall") heat.checked = true;
	if (ability1 == "Rockfall" || ability2 == "Rockfall") rocky.checked = true;
	if (ability1 == "Flowerfall" || ability2 == "Flowerfall") overgrown.checked = true;
	if (ability1 == "Starfall" || ability2 == "Starfall") enchanted.checked = true;
	if (ability1 == "Snowfall" || ability2 == "Snowfall") icy.checked = true;
    if (ability1 == "Cosmic Pressure" || ability2 == "Cosmic Pressure") noWeather.checked = true;

    update();
}

$(".dmg").change(function() {
    let moveName = $(this).val();
    let move = findMove(moveName);
    let moveGroupObj = $(this).parent();
    if (move.hits) {
        moveGroupObj.children(".move-hits").show();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
        if (move.name == "Dart Burst" || move.name == "Winter's Fury") {
            moveGroupObj.children(".move-hits").children(".fury").hide();
			moveGroupObj.children(".move-hits").children(".2").hide();
        } else if (move.name != "Furious Fists") { 
		    moveGroupObj.children(".move-hits").children(".fury").show();
			moveGroupObj.children(".move-hits").children(".2").hide();
		} else {
			moveGroupObj.children(".move-hits").children(".fury").show();
			moveGroupObj.children(".move-hits").children(".2").show();
		}
        let loomi = $(this).closest(".loomian-info");
        let moveHits = (loomi.find(".trait").val() == "Capoeira") ? 5 : 3;
        moveGroupObj.children(".move-hits").val(moveHits + " hits");
        if (move.name == "Laser Eyes" || move.name == "Tail Lash" || move.name == "Bi-Icicle") moveGroupObj.children(".move-hits").hide();
    } else if (move.name == "Expert Onslaught") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".swarm").show();
        moveGroupObj.children(".snowball").hide();
        moveGroupObj.children(".swarm").val(1 + " loom");
    } else if (move.name == "Thousand Cuts") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").show();
        moveGroupObj.children(".snowball").val(1);
    } else {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
    }
});

function updateLevel() {
    if (levelCheck.checked) {
        level1.value = 100;
        level2.value = 100;
    } else {
        level1.value = 50;
        level2.value = 50;
    }
    update();
}

function changeButton(button) {
    if (button == halfIce1) {
        if (iceTrap1.checked) {
            iceTrap1.checked = false;
            halfIce1.checked = true;
        }
    } else if (button == halfIce2) {
        if (iceTrap2.checked) {
            iceTrap2.checked = false;
            halfIce2.checked = true;
        }
    } else if (button == iceTrap1) {
        if (halfIce1.checked) {
            iceTrap1.checked = true;
            halfIce1.checked = false;
        }
    } else if (button == iceTrap2) {
        if (halfIce2.checked) {
            iceTrap2.checked = true;
            halfIce2.checked = false;
        }    
    }
    update();
}

function importSets() {
    let importedSets;
    let newSets = [];

    try {
        importedSets = decode(document.getElementById("import").value);
        document.getElementById("err").innerHTML = "";
    } catch (err) {
        document.getElementById("err").innerHTML = "Invalid Data";
        return;
    }

    for (let set in importedSets) {
        newSets.push(importedSets[set]);
        addSet(newSets[newSets.length - 1]);
    }

    document.getElementById("import").value = "";
    document.getElementById("err").innerHTML = "Sets Successfully Loaded!";
    update();

}

function loadSets(onlyFirst = false, onlySecond = false) {
    if (onlyFirst || (!onlyFirst && !onlySecond)) {
        let set1 = pokeDropdown1.options[pokeDropdown1.selectedIndex].set;
        let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
        let posNat1 = document.getElementById("posNat1");
      

        hpEV1.value = set1.evs.hp;
        atkEV1.value = set1.evs.attack;
        defEV1.value = set1.evs.defense;
        atkREV1.value = set1.evs.attackR;
        defREV1.value = set1.evs.defenseR;
        spdEV1.value = set1.evs.speed;

        

        level1.value = set1.level;
        if (levelCheck.checked) level1.value = 100;

        $("#moveOne1").val(set1.moves.move1);
        $("#moveOne1").select2().trigger('change');
        $("#moveTwo1").val(set1.moves.move2);
        $("#moveTwo1").select2().trigger('change');
        $("#moveThree1").val(set1.moves.move3);
        $("#moveThree1").select2().trigger('change');
        $("#moveFour1").val(set1.moves.move4);
        $("#moveFour1").select2().trigger('change');

        posNat1.value = (set1.posNature == undefined ? "none" : set1.posNature);
        abilityDropdown1.value = (set1.ability == undefined ? "none" : set1.ability);
        if (firstLoom.ability) {
            abilityDropdown1.value = firstLoom.ability;
            updateAbility(firstLoom.ability);
        }
        item1.value = (set1.item == undefined ? "none" : set1.item);
        if (firstLoom.item) item1.value = firstLoom.item;

        primaryTypeDropdown1.value = loomians[pokeDropdown1.value.toLowerCase()].types[0];
        secondaryTypeDropdown1.value = (loomians[pokeDropdown1.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown1.value.toLowerCase()].types[1] : "None");

        if (set1.setName != "Blank Set" && set1.builtIn == undefined) {
            document.getElementById("deleteSet1").style.visibility = "visible";
        }
        else {
            document.getElementById("deleteSet1").style.visibility = "hidden";
        }

        baseHP1.value = firstLoom.baseStats.hp;       
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
        
    }

    if (onlySecond || (!onlyFirst && !onlySecond)) {
        let set2 = pokeDropdown2.options[pokeDropdown2.selectedIndex].set;
        let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
        let posNat2 = document.getElementById("posNat2");
       

        hpEV2.value = set2.evs.hp;
        atkEV2.value = set2.evs.attack;
        defEV2.value = set2.evs.defense;
        atkREV2.value = set2.evs.attackR;
        defREV2.value = set2.evs.defenseR;
        spdEV2.value = set2.evs.speed;

        level2.value = set2.level;
        if (levelCheck.checked) level2.value = 100;

        $("#moveOne2").val(set2.moves.move1);
        $("#moveOne2").select2().trigger('change');
        $("#moveTwo2").val(set2.moves.move2);
        $("#moveTwo2").select2().trigger('change');
        $("#moveThree2").val(set2.moves.move3);
        $("#moveThree2").select2().trigger('change');
        $("#moveFour2").val(set2.moves.move4);
        $("#moveFour2").select2().trigger('change');

        posNat2.value = (set2.posNature == undefined ? "none" : set2.posNature);
      
        abilityDropdown2.value = (set2.ability == undefined ? "none" : set2.ability);
        if (secondLoom.ability) {
            abilityDropdown2.value = secondLoom.ability;
            updateAbility(secondLoom.ability);
        }    
        item2.value = (set2.item == undefined ? "none" : set2.item);
        if (secondLoom.item) item2.value = secondLoom.item;

        primaryTypeDropdown2.value = loomians[pokeDropdown2.value.toLowerCase()].types[0];
        secondaryTypeDropdown2.value = (loomians[pokeDropdown2.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown2.value.toLowerCase()].types[1] : "None");

        if (set2.setName != "Blank Set" && set2.builtIn == undefined) {
            document.getElementById("deleteSet2").style.visibility = "visible";
        }
        else {
            document.getElementById("deleteSet2").style.visibility = "hidden";
        }

        baseHP2.value = secondLoom.baseStats.hp;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
      
    }
    
    update(undefined, false);
}

function addSet(set, builtIn = false) {
    let optG1 = findOptgroup(pokeDropdown1, set.name);
    let optG2 = findOptgroup(pokeDropdown2, set.name);
    let opt1 = new Option(set.name + " (" + set.setName + ")", set.name);
    let opt2 = new Option(set.name + " (" + set.setName + ")", set.name);
    let tempSet = set;

    if (tempSet.level == undefined) {
        tempSet.level = 100;
    }
    if (!builtIn) sets.push(tempSet);
    opt1.set = tempSet;
    opt2.set = tempSet;
    optG1.appendChild(opt1);
    optG2.appendChild(opt2);
}

function deleteSet(second = false) {
    if (!second) {
        let set1 = pokeDropdown1.options[pokeDropdown1.selectedIndex].set;
        for (let set in sets) {
            if (sets[set] == set1) {
                sets.splice(set, 1);
                break;
            }
        }
    }
    else {
        let set2 = pokeDropdown2.options[pokeDropdown2.selectedIndex].set;
        for (let set in sets) {
            if (sets[set] == set2) {
                sets.splice(set, 1);
                break;
            }
        }
    }
    window.location.reload()
}
function makeBlankSet(loomian) {
    let set = {
        name: loomian,
        setName: "Blank Set",
        evs: {
            hp: 0,
            attack: 0,
            defense: 0,
            attackR: 0,
            defenseR: 0,
            speed: 0
        },
        
        moves: {
            move1: "(No Move)",
            move2: "(No Move)",
            move3: "(No Move)",
            move4: "(No Move)"
        },
        posNature: "well-rounded",
        ability: "None",
        item: "None",
        level: 50
    }
    return set;
}

function updateHealthBar() {
    let hpBar1 = document.getElementById("hpBar1");
    let hpBar2 = document.getElementById("hpBar2");
    

    let percent1 = parseInt(percentHP1.value);
    let percent2 = parseInt(percentHP2.value);
   

    if (percent1 > 50) {
        hpBar1.style = "background: linear-gradient(to right, green " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("greenHPBar");
    }
    else if (percent1 > 20) {
        hpBar1.style = "background: linear-gradient(to right, yellow " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("yellowHPBar");
    }
    else {
        hpBar1.style = "background: linear-gradient(to right, red " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("redHPBar");
    }

    if (percent2 > 50) {
        hpBar2.style = "background: linear-gradient(to right, green " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("greenHPBar");
    }
    else if (percent2 > 20) {
        hpBar2.style = "background: linear-gradient(to right, yellow " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("yellowHPBar");
    }
    else {
        hpBar2.style = "background: linear-gradient(to right, red " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("redHPBar");
    }
   
}

function updatePercent() {
    percentHP1.value = Math.floor(currentHP1.value / totalHP1.innerHTML * 100);
    percentHP2.value = Math.floor(currentHP2.value / totalHP2.innerHTML * 100);
    
    updateHealthBar();
}

function updateNumber() {
    currentHP1.value = Math.ceil(totalHP1.innerHTML * percentHP1.value / 100);
    currentHP2.value = Math.ceil(totalHP2.innerHTML * percentHP2.value / 100);
    
    updateHealthBar();
}

function loadBaseStats(side) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    tempAbility1 = abilities.find((x) => x == abilityDropdown1.value);
    tempAbility2 = abilities.find((x) => x == abilityDropdown2.value);
    
    if (side == 1 || side == undefined) {
        baseHP1.value = firstLoom.baseStats.hp;
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
        if (ability1 == "Idiosyncratic") {
            baseAtk1.value = firstLoom.baseStats.attackR;
            baseDef1.value = firstLoom.baseStats.defenseR;
            baseAtkR1.value = firstLoom.baseStats.attack;
            baseDefR1.value = firstLoom.baseStats.defense;
        }
        
    }
    if (side == 2 || side == undefined) {
        baseHP2.value = secondLoom.baseStats.hp;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
        if (ability2 == "Idiosyncratic") {
            baseAtk2.value = secondLoom.baseStats.attackR;
            baseDef2.value = secondLoom.baseStats.defenseR;
            baseAtkR2.value = secondLoom.baseStats.attack;
            baseDefR2.value = secondLoom.baseStats.defense;
        }
        
    }
}

function loadMoves(updatePower = false) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let firstSoul = firstLoom.soulMove;
    let secondSoul = secondLoom.soulMove;

    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);
    

    if (firstSoul) {
        soulMove1 = findMove(firstSoul);
        soulMoveLbl1.style.display = "inline-block";
        soulMoveDmg1.style.display = "inline";
    } else {
        soulMove1 = findMove("(No Move)");
        soulMoveLbl1.style.display = "none";
        soulMoveDmg1.style.display = "none";
    }
    if (secondSoul) {
        soulMove2 = findMove(secondSoul);
        soulMoveLbl2.style.display = "inline-block";
        soulMoveDmg2.style.display = "inline";
    } else {
        soulMove2 = findMove("(No Move)");
        soulMoveLbl2.style.display = "none";
        soulMoveDmg2.style.display = "none";
    }

    if (updatePower) {
        moveOnePower1.value = moveOne1.power;
        moveTwoPower1.value = moveTwo1.power;
        moveThreePower1.value = moveThree1.power;
        moveFourPower1.value = moveFour1.power;
        moveOnePower2.value = moveOne2.power;
        moveTwoPower2.value = moveTwo2.power;
        moveThreePower2.value = moveThree2.power;
        moveFourPower2.value = moveFour2.power;
        soulMovePower1 = soulMove1.power;
        soulMovePower2 = soulMove2.power;
    }

    moveOneType1.value = moveOne1.type;
    moveTwoType1.value = moveTwo1.type;
    moveThreeType1.value = moveThree1.type;
    moveFourType1.value = moveFour1.type;
    moveOneType2.value = moveOne2.type;
    moveTwoType2.value = moveTwo2.type;
    moveThreeType2.value = moveThree2.type;
    moveFourType2.value = moveFour2.type;
    soulMoveType1 = soulMove1.type;
    soulMoveType2 = soulMove2.type;


    moveOneMR1.value = moveOne1.mr;
    moveTwoMR1.value = moveTwo1.mr;
    moveThreeMR1.value = moveThree1.mr;
    moveFourMR1.value = moveFour1.mr;
    moveOneMR2.value = moveOne2.mr;
    moveTwoMR2.value = moveTwo2.mr;
    moveThreeMR2.value = moveThree2.mr;
    moveFourMR2.value = moveFour2.mr;
    soulMoveMR1 = soulMove1.mr;
    soulMoveMR2 = soulMove2.mr;

    moveOneLbl1.innerHTML = moveOne1.name;
    moveTwoLbl1.innerHTML = moveTwo1.name;
    moveThreeLbl1.innerHTML = moveThree1.name;
    moveFourLbl1.innerHTML = moveFour1.name;
    moveOneLbl2.innerHTML = moveOne2.name;
    moveTwoLbl2.innerHTML = moveTwo2.name;
    moveThreeLbl2.innerHTML = moveThree2.name;
    moveFourLbl2.innerHTML = moveFour2.name;
    soulMoveLbl1.innerHTML = soulMove1.name;
    soulMoveLbl2.innerHTML = soulMove2.name;

    calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2, soulMove1, soulMove2);
}

function loadStats() {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let firstItem = item1.value;
    let secondItem = item2.value;
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
	trueStats1 = {atk: 0, def: 0, atkR: 0, defR: 0, spd: 0};
    trueStats2 = {atk: 0, def: 0, atkR: 0, defR: 0, spd: 0};

    let posNat1 = document.getElementById("posNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    let wasMaxHP1 = (currentHP1.value == hp1 ? true : false);
    let wasMaxHP2 = (currentHP2.value == hp2 ? true : false);


    hp1 = calculateStat(baseHP1.value, hpEV1.value, level1.value, true, undefined, undefined, undefined, undefined);
    atk1 = calculateStat(baseAtk1.value,  atkEV1.value, level1.value, undefined, posNat1, "AttackM");
    def1 = calculateStat(baseDef1.value, defEV1.value, level1.value, undefined, posNat1,  "DefenseM");
    atkR1 = calculateStat(baseAtkR1.value,  atkREV1.value, level1.value, undefined, posNat1,  "AttackR");
    defR1 = calculateStat(baseDefR1.value,  defREV1.value, level1.value, undefined, posNat1,  "DefenseR");
    spd1 = calculateStat(baseSpd1.value, spdEV1.value, level1.value, undefined, posNat1,  "Speed");

    hp2 = calculateStat(baseHP2.value,  hpEV2.value, level2.value, true, undefined, undefined, undefined, undefined);
    atk2 = calculateStat(baseAtk2.value,  atkEV2.value, level2.value, undefined, posNat2,  "AttackM");
    def2 = calculateStat(baseDef2.value,  defEV2.value, level2.value, undefined, posNat2,  "DefenseM");
    atkR2 = calculateStat(baseAtkR2.value,  atkREV2.value, level2.value, undefined, posNat2,  "AttackR");
    defR2 = calculateStat(baseDefR2.value,  defREV2.value, level2.value, undefined, posNat2,  "DefenseR");
    spd2 = calculateStat(baseSpd2.value,  spdEV2.value, level2.value, undefined, posNat2,  "Speed");

    
    if (firstLoomian && firstLoomian != firstLoom) {
        atkStages1.value = "--";
        defStages1.value = "--";
        atkRStages1.value = "--";
        defRStages1.value = "--";
        spdStages1.value = "--";
        status1.value = "healthy";
    } 
    if (secondLoomian && secondLoomian != secondLoom) {
        atkStages2.value = "--";
        defStages2.value = "--";
        atkRStages2.value = "--";
        defRStages2.value = "--";
        spdStages2.value = "--";
        status2.value = "healthy";
    }

    (wasMaxHP1 ? currentHP1.value = hp1 : null);
    (wasMaxHP2 ? currentHP2.value = hp2 : null);
    
    checkStages();
    


    let multi = 1;

    statHP1.innerHTML = hp1;
    trueStats1.hp = hp1;
	trueStats1.atk = atk1; 
    statAtk1.innerHTML = Math.floor(atk1 * multi);
    multi = 1;
    if (ability1 == "Trash Armor" || ability1 == "Hard Candy" || ability1 == "Safety Pot") multi *= 1.5;
	if (firstItem == "Evolutionary Convertor" && firstLoom.finalEvo == false) multi *= 1.5;
    if (firstItem == "Weighty Pauldrons") multi *= 1.5;
	trueStats1.def = def1;
    statDef1.innerHTML = Math.floor(def1 * multi);
    multi = 1;
    if (firstLoom.name == "Shawchi" && firstItem == "Mystic Wand") multi *= 1.5;
	if (firstItem == "Evolutionary Transformer" && firstLoom.finalEvo == false) multi *= 1.5;
	trueStats1.atkR = atkR1;
    statAtkR1.innerHTML = Math.floor(atkR1 * multi);
    multi = 1;
	    if (ability1 == "Slick Shell") multi *= 2;
    if (ability1 == "Safety Pot") multi *= 1.5;
	if (firstItem == "Evolutionary Convertor" && firstLoom.finalEvo == false) multi *= 1.5;
    if (firstItem == "Weighty Shield") multi *= 1.5;
	trueStats1.defR = defR1;
    statDefR1.innerHTML = Math.floor(defR1 * multi);
    multi = 1;
	if (!(firstLoom.types.includes("Ice") || firstLoom.types.includes("Metal") || ability1 == "Extremophile") && icy.checked) multi *= 0.9;
    if (firstItem == "Specialty Boots") multi *= 1.5;
    if (firstItem == "Evolutionary Invertor" && firstLoom.finalEvo == false) multi *= 1.5;
    if (status1.value == "paralasis" && !firstLoom.types.includes("Electric") && ability1 != "Agile") multi *= 0.5;
    if ((ability1 == "Thriving Pace" && status1.value != "healthy") || ability1 == "Rush Hour") multi *= 1.5;
	if (wind1.checked) multi *= 1.5;
    if ((ability1 == "Sugar Rush" && firstItem == "None") || (ability1 == "Hydrodynamic" && rain.checked)) multi *= 1.5;
    if (ability1 == "Safety Pot") multi *= 2/3;
	trueStats1.spd = spd1;
    statSpd1.innerHTML = Math.floor(spd1 * multi);
    multi = 1;
		if (firstItem == "Evolutionary Transformer" && firstLoom.finalEvo == false) multi *= 1.5;
	trueStats1.atk = atk1;
    statAtk1.innerHTML = Math.floor(atk1 * multi);
    multi = 1;

    statHP2.innerHTML = hp2;
	trueStats2.hp = hp2;
	trueStats2.atk = atk2; 
    statAtk2.innerHTML = Math.floor(atk2 * multi);
    multi = 1;
    if (ability2 == "Trash Armor" || ability2 == "Hard Candy" || ability2 == "Safety Pot") multi *= 1.5;
    if (secondItem == "Evolutionary Convertor" && secondLoom.finalEvo == false) multi *= 1.5;
    if (secondItem == "Weighty Pauldrons") multi *= 1.5;
	trueStats2.def = def2;
    statDef2.innerHTML = Math.floor(def2 * multi);
    multi = 1;
    if (secondLoom.name == "Shawchi" && secondItem == "Mystic Wand") multi *= 1.5;
	if (secondItem == "Evolutionary Transformer" && secondLoom.finalEvo == false) multi *= 1.5;
	trueStats2.atkR = atkR2;
    statAtkR2.innerHTML = Math.floor(atkR2 * multi);
    multi = 1;

    if (ability2 == "Slick Shell") multi *= 2;
    if (ability2 == "Safety Pot") multi *= 1.5;
    if (secondItem == "Evolutionary Convertor" && secondLoom.finalEvo == false) multi *= 1.5;
    if (secondItem == "Weighty Shield") multi *= 1.5;
	trueStats2.defR = defR2;
    statDefR2.innerHTML = Math.floor(defR2 * multi);
    multi = 1;
	if (!(secondLoom.types.includes("Ice") || secondLoom.types.includes("Metal") || ability2 == "Extremophile") && icy.checked) multi *= 0.9;
    if (secondItem == "Specialty Boots") multi *= 1.5;
    if (status2.value == "paralasis" && !secondLoom.types.includes("Electric") && ability2 != "Thriving Pace") multi *= 0.5;
	if (wind2.checked) multi *= 1.5;
	if (secondItem == "Evolutionary Invertor" && secondLoom.finalEvo == false) multi *=1.5
    if ((ability2 == "Thriving Pace" && status2.value != "healthy") || ability2 == "Rush Hour") multi *= 1.5;
    if ((ability2 == "Sugar Rush" && secondItem == "None") || (ability2 == "Hydrodynamic" && rain.checked)) multi *= 1.5;
    if (ability2 == "Safety Pot") multi *= 2/3;
	trueStats2.spd = spd2;
    statSpd2.innerHTML = Math.floor(spd2 * multi);
    multi = 1;
	if (secondItem == "Evolutionary Transformer" && secondLoom.finalEvo == false) multi *= 1.5;
	trueStats2.atkR = atk2;
    statAtk2.innerHTML = Math.floor(atk2 * multi);
    multi = 1;
}

function calculateStat(base,  EV, level, isHP = false, posNat, name, rest = false) {
    let stat;

 
    level = parseInt(level);
    if (isHP) {
        return Math.floor((2 * base + 31 + Math.floor(EV / 2)) * level / 100) + level + 10;
    }

    
 
    stat = Math.floor(Math.floor((2 * base + 31 + Math.floor(EV / 2)) * level / 100 + 5));
    

    if (posNat == "strong" && name == "AttackM") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "resilient " && name == "DefenseM") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "adept" && name == "AttackR") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "tenacious" && name == "DefenseR") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "swift" && name == "Speed") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "well-rounded") {
        stat = Math.floor(stat * 1.025);
    }

    return stat;
}


function checkStages() {
    let rest1 = document.getElementById("rest1").checked;
    let rest2 = document.getElementById("rest2").checked;
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    let tempDefStage1 = (defStages1.value != "--" ? parseInt(defStages1.value) - rest1 : 0 - rest1);
    let tempDefStage2 = (defStages2.value != "--" ? parseInt(defStages2.value) - rest2 : 0 - rest2);

    let tempDefRStage1 = (defRStages1.value != "--" ? parseInt(defRStages1.value) - rest1 : 0 - rest1);
    let tempDefRStage2 = (defRStages2.value != "--" ? parseInt(defRStages2.value) - rest2 : 0 - rest2);

    let tempAtkStage1 = (atkStages1.value != "--" ? parseInt(atkStages1.value) : 0);
    let tempAtkStage2 = (atkStages2.value != "--" ? parseInt(atkStages2.value) : 0);

    if (tempAtkStage1 > 0) {
        atk1 = Math.floor(atk1 * (1 + 0.5 * tempAtkStage1));
    }
    else if (tempAtkStage1 < 0) {
        atk1 = Math.max(1, Math.floor(atk1 * (2 / (2 - tempAtkStage1))));
    }

    if (tempDefStage1 > 0) {
        def1 = Math.floor(def1 * (1 + 0.5 * tempDefStage1));
    }
    else if (tempDefStage1 < 0) {
        def1 = Math.max(1, Math.floor(def1 * (2 / (2 - tempDefStage1))));
    }

   if (atkRStages1.value != "--" && parseInt(atkRStages1.value) > 0) {
        atkR1 = Math.floor(atkR1 * (1 + 0.5 * parseInt(atkRStages1.value)));
    }
    else if (atkRStages1.value != "--" && parseInt(atkRStages1.value) < 0) {
        atkR1 = Math.max(1, Math.floor(atkR1 * (2 / (2 - parseInt(atkRStages1.value)))));
    }

    if (tempDefRStage1 > 0) {
        defR1 = Math.floor(defR1 * (1 + 0.5 * tempDefRStage1));
    }
    else if (tempDefRStage1 < 0) {
        defR1 = Math.max(1, Math.floor(defR1 * (2 / (2 - tempDefRStage1))));
    }

    if (spdStages1.value != "--" && parseInt(spdStages1.value) > 0) {
        spd1 = Math.floor(spd1 * (1 + 0.5 * parseInt(spdStages1.value)));
    }
    else if (spdStages1.value != "--" && parseInt(spdStages1.value) < 0) {
        spd1 = Math.max(1, Math.floor(spd1 * (2 / (2 - parseInt(spdStages1.value)))));
    }

    if (tempAtkStage2 > 0) {
        atk2 = Math.floor(atk2 * (1 + 0.5 * tempAtkStage2));
    }
    else if (tempAtkStage2 < 0) {
        atk2 = Math.max(1, Math.floor(atk2 * (2 / (2 - tempAtkStage2))));
    }

    if (tempDefStage2 > 0) {
        def2 = Math.floor(def2 * (1 + 0.5 * tempDefStage2));
    }
    else if (tempDefStage2 < 0) {
        def2 = Math.max(1, Math.floor(def2 * (2 / (2 - tempDefStage2))));
    }

    if (atkRStages2.value != "--" && parseInt(atkRStages2.value) > 0) {
        atkR2 = Math.floor(atkR2 * (1 + 0.5 * parseInt(atkRStages2.value)));
    }
    else if (atkRStages2.value != "--" && parseInt(atkRStages2.value) < 0) {
        atkR2 = Math.max(1, Math.floor(atkR2 * (2 / (2 - parseInt(atkRStages2.value)))));
    }

    if (tempDefRStage2 > 0) {
        defR2 = Math.floor(defR2 * (1 + 0.5 * tempDefRStage2));
    }
    else if (tempDefRStage2 < 0) {
        defR2 = Math.max(1, Math.floor(defR2 * (2 / (2 - tempDefRStage2))));
    }

    if (spdStages2.value != "--" && parseInt(spdStages2.value) > 0) {
        spd2 = Math.floor(spd2 * (1 + 0.5 * parseInt(spdStages2.value)));
    }
    else if (spdStages2.value != "--" && parseInt(spdStages2.value) < 0) {
        spd2 = Math.max(1, Math.floor(spd2 * (2 / (2 - parseInt(spdStages2.value)))));
    }
}




function calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2, soulMove1, soulMove2) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    if ((tempAbility1 != ability1 && (tempAbility1 == "Idiosyncratic" || ability1 == "Idiosyncratic"))) {
        loadBaseStats(1);
        loadStats();
    }
    if ((tempAbility2 != ability2 && (tempAbility2 == "Idiosyncratic" || ability2 == "Idiosyncratic"))) {
        loadBaseStats(2);
        loadStats();
    }

    let repeat1 = repeating1.value;
    let repeat2 = repeating2.value;

    let itemA = item1.value;
    let itemB = item2.value;

    let critOne1 = moveOneCrit1.checked;
    let critTwo1 = moveTwoCrit1.checked;
    let critThree1 = moveThreeCrit1.checked;
    let critFour1 = moveFourCrit1.checked;

    let critOne2 = moveOneCrit2.checked;
    let critTwo2 = moveTwoCrit2.checked;
    let critThree2 = moveThreeCrit2.checked;
    let critFour2 = moveFourCrit2.checked;

    let hitsOne1 = moveOneHits1.value;
    let hitsTwo1 = moveTwoHits1.value;
    let hitsThree1 = moveThreeHits1.value;
    let hitsFour1 = moveFourHits1.value;
    let hitsOne2 = moveOneHits2.value;
    let hitsTwo2 = moveTwoHits2.value;
    let hitsThree2 = moveThreeHits2.value;
    let hitsFour2 = moveFourHits2.value;

    let swarmOne1 = moveOneSwarm1.value;
    let swarmTwo1 = moveTwoSwarm1.value;
    let swarmThree1 = moveThreeSwarm1.value;
    let swarmFour1 = moveFourSwarm1.value;
    let swarmOne2 = moveOneSwarm2.value;
    let swarmTwo2 = moveTwoSwarm2.value;
    let swarmThree2 = moveThreeSwarm2.value;
    let swarmFour2 = moveFourSwarm2.value;

    let snowballOne1 = moveOneSnowball1.value;
    let snowballTwo1 = moveTwoSnowball1.value;
    let snowballThree1 = moveThreeSnowball1.value;
    let snowballFour1 = moveFourSnowball1.value;
    let snowballOne2 = moveOneSnowball2.value;
    let snowballTwo2 = moveTwoSnowball2.value;
    let snowballThree2 = moveThreeSnowball2.value;
    let snowballFour2 = moveFourSnowball2.value;

    let dmgMoveOneU1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, repeat1, hitsOne1, swarmOne1, snowballOne1, false, level1.value);
    let dmgMoveOneL1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, repeat1, hitsOne1, swarmOne1, snowballOne1, false, level1.value, true);
    let dmgMoveOnePercent1 = (dmgMoveOneL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveOneDmg1.innerHTML = dmgMoveOnePercent1 + checkIceTrap(moveOne1, Math.min(dmgMoveOneL1, hp2), Math.min(dmgMoveOneU1, hp2), hp1, itemA, ability1, ability2);

    let dmgMoveTwoU1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, repeat1, hitsTwo1, swarmTwo1, snowballTwo1, false, level1.value);
    let dmgMoveTwoL1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, repeat1, hitsTwo1, swarmTwo1, snowballTwo1, false, level1.value, true);
    let dmgMoveTwoPercent1 = (dmgMoveTwoL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveTwoDmg1.innerHTML = dmgMoveTwoPercent1 + checkIceTrap(moveTwo1, Math.min(dmgMoveTwoL1, hp2), Math.min(dmgMoveTwoU1, hp2), hp1, itemA, ability1, ability2, ability2);

    let dmgMoveThreeU1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, repeat1, hitsThree1, swarmThree1, snowballThree1, false, level1.value);
    let dmgMoveThreeL1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, repeat1, hitsThree1, swarmThree1, snowballThree1, false, level1.value, true);
    let dmgMoveThreePercent1 = (dmgMoveThreeL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveThreeDmg1.innerHTML = dmgMoveThreePercent1 + checkIceTrap(moveThree1, Math.min(dmgMoveThreeL1, hp2), Math.min(dmgMoveThreeU1, hp2), hp1, itemA, ability1, ability2);

    let dmgMoveFourU1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, repeat1, hitsFour1, swarmFour1, snowballFour1, false, level1.value);
    let dmgMoveFourL1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, repeat1, hitsFour1, swarmFour1, snowballFour1, false, level1.value, true);
    let dmgMoveFourPercent1 = (dmgMoveFourL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveFourDmg1.innerHTML = dmgMoveFourPercent1 + checkIceTrap(moveFour1, Math.min(dmgMoveFourL1, hp2), Math.min(dmgMoveFourU1, hp2), hp1, itemA, ability1, ability2);

    let dmgSoulMoveOneU1 = getMultiplier(firstLoom, secondLoom, soulMove1, soulMovePower1, critOne1, undefined, undefined, undefined, undefined, false, level1.value);
    let dmgSoulMoveOneL1 = getMultiplier(firstLoom, secondLoom, soulMove1, soulMovePower1, critOne1, undefined, undefined, undefined, undefined, false, level1.value, true);
    let dmgSoulMoveOnePercent1 = (dmgSoulMoveOneL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgSoulMoveOneU1 / hp2 * 100).toFixed(1).toString() + "%";

    soulMoveDmg1.innerHTML = dmgSoulMoveOnePercent1 + checkIceTrap(soulMove1, Math.min(dmgSoulMoveOneL1, hp2), Math.min(dmgSoulMoveOneU1, hp2), hp1, itemA, ability1, ability2);

    //----------------------------------------------------------

    let dmgMoveOneU2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, repeat2, hitsOne2, swarmOne2, snowballOne2, false, level2.value, undefined, true);
    let dmgMoveOneL2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, repeat2, hitsOne2, swarmOne2, snowballOne2, false, level2.value, true, true);
    let dmgMoveOnePercent2 = (dmgMoveOneL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveOneDmg2.innerHTML = dmgMoveOnePercent2 + checkIceTrap(moveOne2, Math.min(dmgMoveOneL2, hp1), Math.min(dmgMoveOneU2, hp1), hp2,  itemB, ability2, ability1);

    let dmgMoveTwoU2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, repeat2, hitsTwo2, swarmTwo2, snowballTwo2, false, level2.value, undefined, true);
    let dmgMoveTwoL2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, repeat2, hitsTwo2, swarmTwo2, snowballTwo2, false, level2.value, true, true);
    let dmgMoveTwoPercent2 = (dmgMoveTwoL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveTwoDmg2.innerHTML = dmgMoveTwoPercent2 + checkIceTrap(moveTwo2, Math.min(dmgMoveTwoL2, hp1), Math.min(dmgMoveTwoU2, hp1), hp2,  itemB, ability2, ability1);

    let dmgMoveThreeU2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, repeat2, hitsThree2, swarmThree2, snowballThree2, false, level2.value, undefined, true);
    let dmgMoveThreeL2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, repeat2, hitsThree2, swarmThree2, snowballThree2, false, level2.value, true, true);
    let dmgMoveThreePercent2 = (dmgMoveThreeL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveThreeDmg2.innerHTML = dmgMoveThreePercent2 + checkIceTrap(moveThree2, Math.min(dmgMoveThreeL2, hp1), Math.min(dmgMoveThreeU2, hp1), hp2, itemB, ability2, ability1);

    let dmgMoveFourU2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, repeat2, hitsFour2, swarmFour2, snowballFour2, false, level2.value, undefined, true);
    let dmgMoveFourL2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, repeat2, hitsFour2, swarmFour2, snowballFour2, false, level2.value, true, true);

    let dmgMoveFourPercent2 = (dmgMoveFourL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveFourDmg2.innerHTML = dmgMoveFourPercent2 + checkIceTrap(moveFour2, Math.min(dmgMoveFourL2, hp1), Math.min(dmgMoveFourU2, hp1), hp2,  itemB, ability2, ability1);

    let dmgSoulMoveTwoU2 = getMultiplier(secondLoom, firstLoom, soulMove2, soulMovePower2, critOne2, undefined, undefined, undefined, undefined, false, level2.value, undefined, true);
    let dmgSoulMoveTwoL2 = getMultiplier(secondLoom, firstLoom, soulMove2, soulMovePower2, critOne2, undefined, undefined, undefined, undefined, false, level2.value, true, true);

    let dmgSoulMoveTwoPercent2 = (dmgSoulMoveTwoL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgSoulMoveTwoU2 / hp1 * 100).toFixed(1).toString() + "%";

    soulMoveDmg2.innerHTML = dmgSoulMoveTwoPercent2 + checkIceTrap(soulMove2, Math.min(dmgSoulMoveTwoL2, hp1), Math.min(dmgSoulMoveTwoU2, hp1), hp2, itemB, ability2, ability1);
}

function detailedReport() {
    let selected = document.querySelector('input[name="moveResult"]:checked');
    let moveName;
    let move;
    let movePower;
    let crit;
    let repeat;
    let hits;
    let swarm;
    let snowball;
    let second = false;
    let tempAtk = " ";
    let tempDef = " ";
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let level = level1.value;
    let hp;
    let atks = {melee: atk1, ranged: atkR1};
    let ice = iceTrap2.checked;
    let halfIce = halfIce2.checked;
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barb = barbs[1];
	let stats1 = trueStats1;
    let stats2 = trueStats2;

    if (document.getElementById("moveOneLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl1").innerHTML;
        movePower = moveOnePower1.value;
        crit = moveOneCrit1.checked;
        repeat = repeating1.value;
        hits = moveOneHits1.value;
        swarm = moveOneSwarm1.value;
        snowball = moveOneSnowball1.value;
    }
    else if (document.getElementById("moveTwoLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl1").innerHTML;
        movePower = moveTwoPower1.value;
        crit = moveTwoCrit1.checked;
        repeat = repeating1.value;
        hits = moveTwoHits1.value;
        swarm = moveTwoSwarm1.value;
        snowball = moveTwoSnowball1.value;
    }
    else if (document.getElementById("moveThreeLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl1").innerHTML;
        movePower = moveThreePower1.value;
        crit = moveThreeCrit1.checked;
        repeat = repeating1.value;
        hits = moveThreeHits1.value;
        swarm = moveThreeSwarm1.value;
        snowball = moveThreeSnowball1.value;
    }
    else if (document.getElementById("moveFourLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl1").innerHTML;
        movePower = moveFourPower1.value;
        crit = moveFourCrit1.checked;
        repeat = repeating1.value;
        hits = moveFourHits1.value;
        swarm = moveFourSwarm1.value;
        snowball = moveFourSnowball1.value;
    }
    else if (document.getElementById("soulMoveLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("soulMoveLbl1").innerHTML;
        movePower = soulMovePower1;
        crit = moveOneCrit1.checked;
    }
    else if (document.getElementById("moveOneLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl2").innerHTML;
        movePower = moveOnePower2.value;
        crit = moveOneCrit2.checked;
        repeat = repeating2.value;
        hits = moveOneHits2.value;
        swarm = moveOneSwarm2.value;
        snowball = moveOneSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
		stats1 = trueStats2;
        stats2 = trueStats1;
    }
    else if (document.getElementById("moveTwoLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl2").innerHTML;
        movePower = moveTwoPower2.value;
        crit = moveTwoCrit2.checked;
        repeat = repeating2.value;
        hits = moveTwoHits2.value;
        swarm = moveTwoSwarm2.value;
        snowball = moveTwoSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
		stats1 = trueStats2;
        stats2 = trueStats1;
    }
    else if (document.getElementById("moveThreeLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl2").innerHTML;
        movePower = moveThreePower2.value;
        crit = moveThreeCrit2.checked;
        repeat = repeating2.value;
        hits = moveThreeHits2.value;
        swarm = moveThreeSwarm2.value;
        snowball = moveThreeSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
		stats1 = trueStats2;
        stats2 = trueStats1;
    }
    else if (document.getElementById("moveFourLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl2").innerHTML;
        movePower = moveFourPower2.value;
        crit = moveFourCrit2.checked;
        repeat = repeating2.value;
        hits = moveFourHits2.value;
        swarm = moveFourSwarm2.value;
        snowball = moveFourSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
		stats1 = trueStats2;
        stats2 = trueStats1;
    }
    else if (document.getElementById("soulMoveLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("soulMoveLbl2").innerHTML;
        movePower = soulMovePower2;
        crit = moveOneCrit2.checked;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
		stats1 = trueStats2;
        stats2 = trueStats1;
    }
    let item = (second ? item1.value : item2.value);
    let playerItem = (second ? item2.value : item1.value);
    let ability = (second ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let playerAbility = (second ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    move = findMove(moveName);
    let qualifier = (move.hits ? "approx." : "");
    hp = (second ? currentHP1.value : currentHP2.value);
    let selfHP = (second ? currentHP2.value : currentHP1.value);
    let maxHP = (second ? hp1 : hp2);
    let myStatus = (second ? status2.value : status1.value);
    let currStatus = (second ? status1.value : status2.value);
    let statStr = "";
    let statStr2 = currStatus.charAt(0).toUpperCase() + currStatus.slice(1);
    let counter = 0;
    let adaptive = { mr: "", mr1: "", mr2: ""};
    let adaptiveResult;
    let atkDef;
    if ((move.name == "Last Resort" || move.name == "Special Serving" || move.name.includes("Special Attack")) && atks.ranged > atks.melee ) {
        adaptive.mr = "Ranged";
        adaptive.mr1 = "Ranged Attack";
        adaptive.mr2 = "Ranged Defense";
        adaptiveResult = "ranged";
        atkDef = getTempAtkDef(second, adaptive);
    } else if (move.name == "Rapid Rush" && stats2.defR > stats2.def){
        adaptive.mr = "Ranged";
        adaptive.mr1 = "Ranged Attack";
        adaptive.mr2 = "Melee Defense";
        adaptiveResult = "melee";
        atkDef = getTempAtkDef(second, adaptive);
    } else atkDef = getTempAtkDef(second, move);
    if (move.mr == "Melee" && myStatus == "burned" && !firstLoom.types.includes("Fire") && !(adaptiveResult && adaptiveResult == "ranged")) statStr = myStatus.charAt(0).toUpperCase() + myStatus.slice(1);
	if (move.mr == "Ranged" && myStatus == "freeze" && !firstLoom.types.includes("Ice") && !(adaptiveResult && adaptiveResult == "melee")) statStr = myStatus.charAt(0).toUpperCase() + myStatus.slice(1);
    if (statStr2 == "Healthy") statStr2 = "";
    else if (statStr2 == "Paralasis") statStr2 = "Paralyzed";
    else if (statStr2 == "Diseased") statStr2 = "Envenomated";
    let atkPlus = "";
    let defPlus = "";

    if (atkDef.attack.stage != 0 && !isNaN(atkDef.attack.stage)) {
        tempAtk = (atkDef.attack.stage > 0 ? "+" : "") + atkDef.attack.stage + " ";
    }
    if (atkDef.defense.stage != 0 && !isNaN(atkDef.defense.stage)) {
        tempDef = (atkDef.defense.stage > 0 ? "+" : "") + atkDef.defense.stage + " ";
    }

    //tempAtk
    if ((move.mr1 == "Ranged Attack" && move.name != "Expert Onslaught") || (adaptiveResult == "ranged")) {
        if (atkDef.attack.posNat == "adept") {
            atkPlus = "+";
        }
        
        //Used Stat
         if (second) {
            tempAtk = tempAtk + atkREV2.value + " " + atkPlus + "AtkM";           
        }
        else {
            tempAtk = tempAtk + atkREV1.value + " " + atkPlus + "AtkM";
        } 
    }
    else if (move.mr1 == "Melee Attack" || adaptiveResult == "melee") {
        if (atkDef.attack.posNat == "strong" ) {
            atkPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempAtk = tempAtk + atkEV2.value + " " + atkPlus + "Atk";           
        }
        else {
            tempAtk = tempAtk + atkEV1.value + " " + atkPlus + "Atk";
        }   
    }
    else if (move.mr1 == "Ranged Defense") {
        if (atkDef.attack.posNat == "tenacious" ) {
            atkPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempAtk = tempAtk + defREV2.value + " " + atkPlus + "DefM";           
        }
        else {
            tempAtk = tempAtk + defREV1.value + " " + atkPlus + "DefM";
        } 
    }
    else if (move.mr1 == "Melee Defense") {
        if (atkDef.attack.posNat == "resilient") {
            atkPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempAtk = tempAtk + defEV2.value + " " + atkPlus + "Def";           
        }
        else {
            tempAtk = tempAtk + defEV1.value + " " + atkPlus + "Def";
        } 
    }
    else if (move.mr1 == "Speed") {
        if (atkDef.attack.posNat == "swift") {
            atkPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempAtk = tempAtk + spdEV2.value + " " + atkPlus + "Spd";           
        }
        else {
            tempAtk = tempAtk + spdEV1.value + " " + atkPlus + "Spd";
        } 
    }

    //tempDef
    if (move.mr2 == "Ranged Attack") {
        if (atkDef.defense.posNat == "adept") {
            defPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempDef = tempDef + atkREV1.value + " " + defPlus + "AtkM";
        }
        else {
            tempDef = tempDef + atkREV2.value + " " + defPlus + "AtkM";           
        } 
    }
    else if (move.mr2 == "Melee Attack") {
        if (atkDef.defense.posNat == "strong" ) {
            defPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempDef = tempDef + atkEV1.value + " " + defPlus + "Atk";
        }
        else {
            tempDef = tempDef + atkEV2.value + " " + defPlus + "Atk";           
        } 
    }
    else if ((move.mr2 == "Ranged Defense" && !(move.name == "Rapid Rush" && stats2.defR > stats2.def)) || (adaptiveResult == "ranged")) {
        if (atkDef.defense.posNat == "tenacious" ) {
            defPlus = "+";
        }
        
        
        //Used Stat
        if (second) {
            tempDef = tempDef + defREV1.value + " " + defPlus + "DefM";
        }
        else {
            tempDef = tempDef + defREV2.value + " " + defPlus + "DefM";           
        } 
    }
    else if (move.mr2 == "Melee Defense" || (move.name == "Rapid Rush" && stats2.defR > stats2.def) || adaptiveResult == "melee") {
        if (atkDef.defense.posNat == "resilient") {
            defPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempDef = tempDef + defEV1.value + " " + defPlus + "Def";
        }
        else {
            tempDef = tempDef + defEV2.value + " " + defPlus + "Def";           
        } 
    }
    else if (move.mr2 == "Speed") {
        if (atkDef.defense.posNat == "swift") {
            defPlus = "+";
        }
        
        //Used Stat
        if (second) {
            tempDef = tempDef + spdEV1.value + " " + defPlus + "Spd";
        }
        else {
            tempDef = tempDef + spdEV2.value + " " + defPlus + "Spd";           
        } 
    }

    if (move.power == 0 || (move.name == "Spit Out" && playerItem == "None")) {
        let str = tempAtk + " " + firstLoom.name + " " + move.name + " vs. " + (!second ? hpEV2.value : hpEV1.value) + " HP / " + tempDef + " " + secondLoom.name + ": 0-0 (0 - 0%) -- nice move there, bud";

        document.getElementById("detailedResult").innerHTML = str;
        document.getElementById("possibleDmg").innerHTML = "Possible Damage Amounts: (0)";
        return;
    }

    let possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true);
    let possibleDmg = possibleArray[0];
    let foulDamage = possibleArray[1];
    let possibleDmg2 = possibleDmg[0];
    let possibleDmg3 = possibleDmg[15];
    if (foulDamage) {
        possibleDmg2 = possibleDmg2 + foulDamage[0];
        possibleDmg3 = possibleDmg3 + foulDamage[15];
    }
    let turnCount = 0;
    let lowerPercent = (possibleDmg2 / hp * 100).toFixed(1);
    let upperPercent = (possibleDmg3 / hp * 100).toFixed(1);
    let stuffUsed = possibleDmg[16];
    possibleDmg.pop();
    let possibleDmgStr = "Possible Damage Amounts: (" + displayDamage(possibleArray) + ")";
    let critStr = ((crit == true || (playerAbility == "Brutal Wrath" && (currStatus == "poisoned" || currStatus == "diseased"))) ? " Crit " : "");

    let str = tempAtk + " " + stuffUsed.item1 + " " + stuffUsed.ability1 + " " + statStr + " " + firstLoom.name + " " + critStr + move.name + stuffUsed.extra1 + " vs. " + (!second ? hpEV2.value : hpEV1.value) + " HP / " +
        tempDef + " " + stuffUsed.item2 + " " + stuffUsed.ability2 + " " + statStr2 + " " + secondLoom.name + stuffUsed.weather + ": " + possibleDmg2 + "-" + possibleDmg3 + " (" + lowerPercent + " - " + upperPercent + "%) -- ";

    let hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount, true)[1];

    document.getElementById("possibleDmg").innerHTML = possibleDmgStr;

    let addedDmg = 0;

    if ((ice || halfIce) && !(ability == "Silk Shroud" || ability == "Extremophile" || ability == "Tread Lightly")) {
        addedDmg = 12.5;
        if (halfIce) addedDmg = 6.25;

        if (types[secondLoom.types[0].toLowerCase()].weaknesses.includes("ice")) {
            addedDmg *= 2;
        }
        if (secondLoom.types[1] != undefined && types[secondLoom.types[1].toLowerCase()].weaknesses.includes("ice")) {
            addedDmg *= 2;
        }
        if (types[secondLoom.types[0].toLowerCase()].resistances.includes("ice")) {
            addedDmg *= 0.5
        }
        if (secondLoom.types[1] != undefined && types[secondLoom.types[1].toLowerCase()].resistances.includes("ice")) {
            addedDmg *= 0.5;
        }
        if (secondLoom.types.includes("Fire")) {
            addedDmg *= 0.5;
            if (halfIce) addedDmg *= 0;
        }
        if (secondLoom.types.includes("Ice")) {
            addedDmg *= 0
        }
    }

    if (barb > 0 && !secondLoom.types.includes("Air") && !(ability == "Silk Shroud" || ability == "Extremophile" || ability == "Tread Lightly") ) {
        if (barb == 1) {
            addedDmg += 12.5;
        } else if (barb == 2) {
            addedDmg += 1 / 6 * 100;
        } else if (barb == 3) {
            addedDmg += 25;
        }
    }

    let tickDamage = adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount, "OHKO")[0];
    tickDamage = tickDamage + Math.floor(maxHP * addedDmg / 100);
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount, "OHKO")[1];
    
    let OHKOs = [];
    let tickOHKOs = [];
    let THKOs = [];
    let TRHKOs = [];

    if (foulDamage && foulDamage.length == possibleDmg.length) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = possibleDmg[i] + foulDamage[i];
        }
    }

    for (let i = 0; i < possibleDmg.length; i++) {
        if (possibleDmg[i] >= hp) {
            OHKOs.push(possibleDmg[i]);
        }
        if (possibleDmg[i] + tickDamage >= hp) {
            tickOHKOs.push(possibleDmg[i]);
        }
    }

    if (tickOHKOs.length != 0) {
        let chance = (OHKOs.length / 16 * 100).toFixed(1);
        let chanceStr = qualifier + " " + chance + "% chance to OHKO";

        if (chance >= 100) {
            chanceStr = "guaranteed OHKO";
            str += chanceStr;
            document.getElementById("detailedResult").innerHTML = str;
            return;
        } else {
            chance = (tickOHKOs.length / 16 * 100).toFixed(1);
            chanceStr = qualifier + " " + chance + "% chance to OHKO";
            if (chance >= 100) {
                chanceStr = "guaranteed OHKO";
            }
        }
        str += chanceStr + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    counter = 1;
    hp = hp - tickDamage;

    if (move.knockOff) {
        item = "";
    }

    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg2 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg2.length) {
        for (let i = 0; i < possibleDmg2.length; i++) {
            possibleDmg2[i] = possibleDmg2[i] + foulDamage2[i];
        }
    }
    
    counter = 0;
    
    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg3 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg3.length) {
        for (let i = 0; i < possibleDmg3.length; i++) {
            possibleDmg3[i] = possibleDmg3[i] + foulDamage3[i];
        }
    }

    turnCount = 1;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount)[1];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            if (possibleDmg[i] + possibleDmg2[j] >= hp) {
                THKOs.push(possibleDmg[i] + possibleDmg2[j]);
            }
        }
    }

    if (THKOs.length != 0) {
        let chance = (THKOs.length / 256 * 100).toFixed(1);
        let chanceStr = qualifier + " " + chance + "% chance to 2HKO";
        if (chance >= 100) chanceStr = "guaranteed 2HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 2;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            for (let k = 0; k < possibleDmg3.length; k++) {
                if (possibleDmg[i] + possibleDmg2[j] + possibleDmg3[k] >= hp) {
                    TRHKOs.push(possibleDmg[i] + possibleDmg2[j] + possibleDmg3[k]);
                }
            }
        }
    }

    if (TRHKOs.length != 0) {
        let chance = (TRHKOs.length / 4096 * 100).toFixed(1);
        let chanceStr = qualifier + " " + chance + "% chance to 3HKO";
        if (chance >= 100) chanceStr = "guaranteed 3HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 3;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    if (possibleDmg[15] * 4 >= hp) {
        let FHKO = "possible 4HKO";

        str += FHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 4;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    if (possibleDmg[15] * 5 >= hp) {
        let FIHKO = "possible 5HKO";

        str += FIHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    let badMove = "don't even bother, low damage";
    str += badMove;

    document.getElementById("detailedResult").innerHTML = str;
}

function isStab(userTypes, move) {
    if (userTypes.primary == move.type || userTypes.secondary == move.type) {
        return true;
    }
    return false;
}

function getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, hitConfirmer = false, level, ul = false, second = false, detailed = false, withoutSlapDown = true, takeSecondaryType = false, foulHit = false) {
    if (move.power == 0 && detailed) return [0];
    if (move.power == 0) return 0;

    let bothTypes = getTypes(second);
    let types1 = bothTypes.firstLoom;
    let types2 = bothTypes.secondLoom;
    let multi = 1;
    let effectiveness;
    let dmg;
    let foulDmg = 0;
    let tempType = move.type;
    let tempPower = movePower;
    let powerCheck = movePower;
    let tempAtk;
    let tempDef;
    let tempStats;
    if (hits && !hitConfirmer) hits = hits.charAt(0);
    let gen1 = gender1.value;
    let gen2 = gender2.value;
    let stats1;
    let stats2;
	let theStats1;
    let theStats2;
	
    if (second) {
        stats1 = {atk: atk2, def: def2, atkR: atkR2, defR: defR2, spd: spd2};
        stats2 = {atk: atk1, def: def1, atkR: atkR1, defR: defR1, spd: spd1};
		theStats1 = trueStats2;
        theStats2 = trueStats1;
    } else {
        stats1 = {atk: atk1, def: def1, atkR: atkR1, defR: defR1, spd: spd1};
        stats2 = {atk: atk2, def: def2, atkR: atkR2, defR: defR2, spd: spd2};
		theStats1 = trueStats1;
        theStats2 = trueStats2;
    }
    
    let ability1 = (second == false ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let ability2 = (second == false ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    let typeModAbility1 = findTypeModAbility(ability1);
    let typeModAbility2 = findTypeModAbility(ability2);
    let btl1 = (second == false ? enteredBtl2.checked : enteredBtl1.checked);
    let btl2 = (second == false ? enteredBtl1.checked : enteredBtl2.checked);
    let wall = (second == false ? wall2.checked : wall1.checked);
    let shield = (second == false? shield2.checked : shield1.checked);
    let stat1 = (second == false ? status1.value : status2.value);
    let stat2 = (second == false ? status2.value : status1.value);
    let itemA = (second == false ? item1.value : item2.value);
    let itemB = (second == false ? item2.value : item1.value);
    let tempItem;
    let isDouble = (singleDouble.value == "singles" ? false : true);
    //let dusk = (second == false ? dusk1.checked : dusk2.checked);
    let dawn = (second == false ? dawn1.checked : dawn2.checked);
    let guardian = (second == false ? guardian2.checked : guardian1.checked);
    let tagTeam = (second == false ? tagTeam1.checked : tagTeam2.checked);
    let teamwork = (second == false ? teamwork1.checked : teamwork2.checked);
	let tailwind = (second == false ? wind1.checked : wind2.checled);
    let possibleDmg = [];
    let possibleFoulDmg;
    let stuffUsed = { ability1: "", ability2: "", item1: "", item2: "", extra1: "", extra2: "", weather: ""};
    let adaptive = { mr: "", mr1: "", mr2: ""};


    let immuneBoostCheck1 = (second == false ? immuneAbilityBoost1.checked : immuneAbilityBoost2.checked);
    
    if (move.name.includes("Special Attack") || move.name == "Last Resort" || move.name == "Special Serving") {
        if (stats1.atkR > stats1.atk) {
            adaptive.mr = "Ranged";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
            move.contact = false;
        } else {
            adaptive.mr = "Melee";
            adaptive.mr1 = "Melee Attack";
            adaptive.mr2 = "Melee Defense";
            move.contact = true;
        }
        tempStats = getTempAtkDef(second, adaptive);
        stuffUsed.extra1 += " (" + adaptive.mr + " " + tempType + ")";
    } else if (move.name == "Rapid Rush") {
        if (theStats2.defR > theStats2.def) {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Melee Defense";
        } else {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
        }
        tempStats = getTempAtkDef(second, adaptive);
       } else tempStats = getTempAtkDef(second, move);
    tempAtk = tempStats.attack;
    tempDef = tempStats.defense;

    tempPower = (move.name == "Trip Root" ? getTripRootPower(loom2.weight) : tempPower);


    if (move.name == "Trip Root") {
        stuffUsed.extra1 += " (" + getTripRootPower(loom2.weight) + " BP)";
    }

    if (move.name == "Tempest") {
        tempPower = getSpeedPower(stats1.spd, stats2.spd);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    
    if (move.name == "Somniloquy" && stat1 != "asleep") {
        if (detailed) return [0];
        else return 0;
    }


	


    if (move.name == "Spit Out" && ((itemA.includes("Shell")) || (itemA.includes("Essence")) || (itemA.includes("Pearl"))) && withoutSlapDown && !foulHit) {
        if (itemA.includes("Essence")) {
            tempType = itemA.split(" ")[0];
        } else if (itemA.includes("Shell") || itemA.includes("Pearl")) {
            let itemName = itemA.split(" ")[0].toLowerCase();
            for (let type in types) {
                if (itemName == types[type].otherName) tempType = String(type.charAt(0).toUpperCase() + type.slice(1));
            }
        }
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if ((move.name == "Oppress" && stat2 != "healthy") ||
       ((move.name == "Torment" || move.name == "Splitting Headache") && stat1 != "healthy")) {
        powerCheck *= 2;
        multi *= 2;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 2) + " BP)";
    }
	

  

    if (move.name == "Rough Up" && loom1.height > loom2.height) {
        powerCheck *= 1.25;
        multi *= 1.25;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 1.25) + " BP)";
    }

    if (move.name == "Climate Cannon" && !noWeather.checked) {
        tempType = (rain.checked ? "Hydro" : rocky.checked ? "Geo" : overgrown.checked ? "Nature" : heat.checked ? "Pyro" : enchanted.checked ? "Psychic" : icy.checked ? "Ice" : "Simple");
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if (ability1 == "Idiosyncratic") stuffUsed.ability1 = ability1;
    if (ability2 == "Idiosyncratic") stuffUsed.ability2 = ability2;

    if ((ability1 == "Power Buster") || 
       (ability1 == "Bully" && loom1.height > loom2.height)) {
        ability2 = "None";
        stuffUsed.ability1 = ability1;
    }

    

    if (move.name == "Power Drill" && loom2.types.includes("Earth")) stuffUsed.ability1 = ability1;
	


    if (ability1 == "Unfiltered") {
        itemB = "None";
        stuffUsed.ability1 = ability1;
    }
	
	if (itemB == "Padded Vest") {
        ability1 = "None";
		itemA = "None";
        stuffUsed.item2 = itemB;
    }
	
	if (move.piercing) {
        ability2 = "None";
		itemB = "None";
		stuffUsed.extra1 += " (Piercing)";
    }


    if (move.name == "Gloominous Roar" && ability1 == "Circadian" && types1.secondary != "None" && types1.secondary != undefined) {
        tempType = (takeSecondaryType ? types1.secondary : types1.primary);
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Circadian" && types2.secondary != "") {
        types2.primary = (takeSecondaryType ? types2.secondary : types2.primary);
        types2.secondary = "None";
        stuffUsed.ability2 = ability2;
    }

    

    //Base ------------------------------------

    dmg = Math.floor(2 * level / 5) + 2;

    //Power ----------------------------------------

    if (typeModAbility1 != undefined && tempType == typeModAbility1.typeModifier.type && typeModAbility1.powerMod == true) {
        multi *= typeModAbility1.typeModifier.modifier;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Neutralize") {
        tempType = "Simple"
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Overshadow" && tempType == "Simple") {
        tempType = "Dark";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
	else if (ability1 == "Enlighten" && tempType == "Basic") {
        tempType = "Light";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
	}
    else if (ability1 == "Firepower" && tempType == "Basic") {
        tempType = "Pyro";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Chill" && tempType == "Simple") {
        tempType = "Ice";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Turbulent" && tempType == "Simple") {
        tempType = "Air";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Metamorphosis" && tempType == "Simple") {
        tempType = "Bug";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    if (move.name == "Flare" && (parseInt(stats1.spd) > parseInt(stats2.spd) || btl1)) {
        multi *= 2;
        stuffUsed.extra1 += " (" + tempPower * 2 + " BP)";
    }

    if (move.name == "Thousand Cuts") {
        tempPower = Number(tempPower) * 2 ** (snowball - 1);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (ability1 == "Recurrent" && tempType == "Electric") {
        let chanting = Math.min((1 + 0.2 * (repeat)), 2);
        multi *= chanting;
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + Math.round(tempPower * chanting) + " BP)";
    }

    if ((ability1 == "Combustible" || ability1 == "Coursing Venom" || ability1 == "Noxious Weeds" || ability1 == "Prismatic") && immuneBoostCheck1) {
        if (tempType == typeModAbility1.typeModifier.type) {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }
    if (ability1 == "Toxic Filter" && immuneBoostCheck1) {
        if (tempType == "Air") {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }

    if ((ability1 == "Ambush" && btl1 && withoutSlapDown && move.name != "Chase Down") ||
       (ability1 == "Vengeance" && btl2 && withoutSlapDown)) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Savage" && move.contact == true) || 
	   (ability1 == "High Velocity" && move.priority == true) ||
	   (ability1 == "Cacophony" && move.sound == true) || 
	   (ability1 == "Lead Foot" && move.kick == true) || 
       (ability1 == "Raw Power" && move.secondaryEffect == true) ||
       (ability1 == "Watcher" && (stats1.spd < stats2.spd || (btl1 && withoutSlapDown)))) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    if (ability1 == "Pirouette" && move.dance == true) {
       multi *= 1.5;
       stuffUsed.ability1 = ability1;
}	
 if (ability1 == "Ballistic" && move.recoil == true) {
       multi *= 1.3;
       stuffUsed.ability1 = ability1;
 }
 
 if (ability1 == "Breakneck" && move.dash == true) {
       multi *= 1.3;
       stuffUsed.ability1 = ability1;
 }
 
    if (ability1 == "Tunnel Vision" && move.aoe == true) {
       multi *= 1.5;
       stuffUsed.ability1 = ability1;
}	
 if (ability1 == "Stalker") {
       multi *= 2;
       stuffUsed.ability1 = ability1;
}	
 
 if (ability1 == "Two Heads") {
       multi *= 1.25;
       stuffUsed.ability1 = ability1;
}	

if (ability1 == "Triple Threat" && (tempType == "Electric" || tempType == "Pyro" || tempType == "Hydro")) {
    multi *= 1.25;
    stuffUsed.ability1 = ability1;
}
   if ((ability1 == "Sharp Teeth" && move.bite == true) ||
    (ability1 == "Slugger" && (move.punch == true || move.slap == true)) ||
    (ability1 == "Specialist" && tempPower <= 60 && powerCheck <= 60) ||
    (ability1 == "Hyper Cannon" && move.bomb == true) ||
    (ability1 == "Slasher" && move.slash == true)) {
    multi *= 1.3;
    stuffUsed.ability1 = ability1;
}
    if ((ability1 == "Bloodsucker" && move.drain) ||
       (gen1 == gen2 && ability1 == "Territorial") ||
       (ability1 == "Hag" && tempType == "Mind") ||
       (ability1 == "Battle Armor" && tempType == "Metal")) {
        multi *= 1.25;
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Supercharged" && tempType == "Electric") {
        multi *= 1.3;
        stuffUsed.ability2 = ability2;
    }

    if ((ability1 == "Baneful" && (stat2 == "poisoned" || stat2 == "diseased")) ||
       (move.sound == true && ability1 == "Tone Deaf") ||
       (move.recoil && ability1 == "Madcap") ||
       (stat2 != "healthy" && ability1 == "Mean Spirited")) {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    if (gen1 != gen2 && ability1 == "Territorial") {
        multi *= 0.75;
        stuffUsed.ability1 = ability1;
    }
    
	if (itemA == "Amplifier" && move.sound == true) {
		multi *= 1.25
		stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Steel-Toed Boot" && move.kick == true) {
		multi *= 1.25
		stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Power Glove") {
        multi *= 1.3;
        stuffUsed.item1 = itemA;
	}
	
	if (itemA == "Fiery Amulet" && (move.type == "Pyro" || move.name == "Frost Burn")) {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Balance Amulet" && move.type == "Basic") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Biotic Amulet" && move.type == "Nature") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Fluid Amulet" && move.type == "Hydro") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Charged Amulet" && move.type == "Electric") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Umbral Amulet" && move.type == "Dark") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Radiant Amulet" && move.type == "Light") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Earthen Amulet" && move.type == "Geo") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Turbulent Amulet" && move.type == "Wind") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Caustic Amulet" && move.type == "Toxic") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
		
	if (itemA == "Courage Amulet" && move.type == "Martial") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
		
	if (itemA == "Glacial Amulet" && move.type == "Ice") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Neural Amulet" && move.type == "Psychic") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Spirited Amulet" && move.type == "Soul") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Adamant Amulet" && move.type == "Metal") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
	
	if (itemA == "Arcane Amulet" && move.type == "Mystic") {
		multi *= 1.2;
        stuffUsed.item1 = itemA;
    }


    if ((itemB.includes("burst") && move.knockOff) || (itemB != "None" && move.knockOff == true && (withoutSlapDown || ability2 == "Clingy"))) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
        stuffUsed.ability2 = (ability2 == "Clingy" ? ability2 : stuffUsed.ability2);
    }
    
	else if (ability1 == "Unfiltered" && move.knockOff == true) {
        tempItem = (second == false ? item2.value : item1.value);
        if (tempItem != "None" && withoutSlapDown) {
            multi *= 1.5;
            stuffUsed.item2 = tempItem;
        }
    }
	
	
	
    if (tempType != "Null" && itemA.includes(tempType) && itemA.includes("Essence") && withoutSlapDown && !foulHit) {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }
    


    if (ability1 == "Specialization") {
        let count = specializationCount(second);
        if (count == 1) multi *= 1.25;
        else if (count == 2) multi *= 1.5;
        else if (count == 3) multi *= 2;
        if (count != 0) stuffUsed.ability1 = ability1 + " (" + Math.abs(count - 4) + ")";
    }

    if(move.name == "Chase Down" && btl1) {
        multi *= 1.5;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 1.5) + " BP)";
    }
	


    if (ability2 == "Repugnant" && move.bite == true) {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }

    if (foulHit) {
        multi *= 0.25;
    }

    if (tagTeam && isDouble) {
        multi *= 1.5;
        stuffUsed.extra1 += " (Conspire)"
    }
    if (teamwork && isDouble) {
        multi *= 1.5;
        stuffUsed.extra1 += " (Teamwork)"
    }

    if ((rain.checked && tempType == "Hydro") || (heat.checked && tempType == "Pyro") || (overgrown.checked && (tempType == "Nature" || tempType == "Toxic")) || (enchanted.checked && (tempType == "Psychic" || tempType == "Mystic"))) {
        multi *= 1.25;
    }

    if (((rain.checked && tempType == "Pyro") || ((heat.checked || overgrown.checked) && tempType == "Hydro")) && ability1 != "Extremophile") {
        multi *= 0.75;
    }

    if (rain.checked) {
        stuffUsed.weather += " in Flooded terrain";
    } else if (rocky.checked) {
        stuffUsed.weather += " in Rocky terrain";
    } else if (heat.checked) {
        stuffUsed.weather += " in Burning terrain";
    } else if (overgrown.checked) {
        stuffUsed.weather += " in Overgrown terrain";
    } else if (enchanted.checked) {
        stuffUsed.weather += " in Enchanted terrain";
    } else if (icy.checked) {
        stuffUsed.weather += " in Icy terrain";
    }

    tempPower = pokeRound(tempPower * multi);
    multi = 1;

    //Attack -------------------------------------------

    if ((crit || (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased"))) && tempAtk.stage < 0) {
        tempAtk.atk = calculateStat(tempAtk.base,  tempAtk.ev.value, tempAtk.level, undefined, tempAtk.posNat,  tempAtk.name);
    }

    if (ability2 == "Oblivious") {
        tempAtk.atk = calculateStat(tempAtk.base, tempAtk.ev.value, tempAtk.level, undefined, tempAtk.posNat,  tempAtk.name);
        stuffUsed.ability2 = ability2;
    }
    if ((ability1 == "Hasty" && move.mr1 == "Melee Attack") ||
       (ability1 == "Vigorous" && stat1 != "healthy" && move.mr1 == "Melee Attack") ||
       (ability1 == "Vicious" && (stat1 == "poisoned" || stat1 == "diseased")) ||
       (dawn && isDouble && move.mr1 == "Melee Attack" && ability1 == "Dusk") ||
       (dawn && isDouble && move.mr1 == "Ranged Attack" && ability1 == "Dawn") ||
       (move.mr1 == "Melee Defense" && ability1 == "Trash Armor") ||
       ((move.mr1 == "Melee Defense" || move.mr1 == "Ranged Defense") && ability1 == "Safety Pot") ||
       (ability1 == "Inferno" && heat.checked && move.mr1 == "Ranged Attack")) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }   
    if ((move.mr1 == "Melee Defense" && itemA == "Weighty Pauldrons") ||
       (move.mr1 == "Ranged Defense" && itemA == "Weighty Shield")) {
            multi *= 1.5;
            stuffUsed.item1 = itemA;
    }
	

    if (move.mr1 == "Ranged Defense" && ability1 == "Slick Shell") {
        multi *= 2;
        stuffUsed.ability1 = ability1
    }
    if (itemA == "Mystic Wand" && loom1.name == "Shawchi" && move.mr1 == "Ranged Attack") {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }
	
	 if (itemA == "Evolutionary Convertor" && loom1.finalEvo == false && (move.mr1 == "Melee Defense" || move.mr1 == "Ranged Defense")) {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }
	

    if (itemA == "Evolutionary Transformer" && loom1.finalEvo == false && (move.mr1 == "Melee Attack" || move.mr1 == "Ranged Attack")) {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }
	


    tempAtk.atk = pokeRound(tempAtk.atk * multi);
    multi = 1;

    //Defense ----------------------------------------------------

    if ((crit || (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased")) || move.piercing) && tempDef.stage > 0) {
        tempDef.def = calculateStat(tempDef.base,  tempDef.ev.value, tempDef.level, undefined, tempDef.posNat,  tempDef.name, tempDef.rest);
    }
    if ((ability1 == "Oblivious") || 
       (ability1 == "Bully" && loom1.height > loom2.height)) {
        tempDef.def = calculateStat(tempDef.base,  tempDef.ev.value, tempDef.level, undefined, tempDef.posNat,  tempDef.name, tempDef.rest);
        stuffUsed.ability1 = ability1;
    }
    if ((itemB == "Weighty Shield" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense")) ||
       (itemB == "Weighty Pauldrons" && ((move.mr2 == "Melee Defense" && adaptive.mr2 != "Ranged Defense") || adaptive.mr2 == "Melee Defense"))) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
    }
    if (itemB == "Evolutionary Convertor" && loom2.finalEvo == false) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
    }
	

    if ((ability2 == "Trash Armor" || ability2 == "Hard Candy" || ability2 == "Safety Pot") && ((move.mr2 == "Melee Defense" && adaptive.mr2 != "Ranged Defense") || adaptive.mr2 == "Melee Defense")) {
        multi *= 1.5;
        stuffUsed.ability2 = ability2;
    }
    if (ability2 == "Safety Pot" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense")) {
        multi *= 1.5;
        stuffUsed.ability2 = ability2;
    }
    if (ability2 == "Slick Shell" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense")) {
        multi *= 2;
        stuffUsed.ability2 = ability2;
    }
	if (overgrown.checked && (loom2.types.includes("Nature") || loom2.types.includes("Toxic"))) {
		multi *= 1.25;
	}

    tempDef.def = pokeRound(tempDef.def * multi);
    multi = 1;

    dmg = Math.floor(Math.floor(dmg * tempAtk.atk / tempDef.def * tempPower) / 50) + 2;

    if (isDouble && move.aoe == true) {
        multi *= 0.75;
    }
	
	if (isDouble && move.aoeh == true) {
        multi *= 0.5;
    }
	
	if (isDouble && move.aoehe == true) {
        multi *= 0.5;
    }
	
    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Crit and Random -----------------------------

    if (crit || (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased"))) {
        if (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased")) stuffUsed.ability1 = ability1;
        if (ability1 == "Marksman") {
            multi *= 2.25;
            stuffUsed.ability1 = ability1;
        }
        else multi *= 1.5;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //STAB ---------------------------------
	
	
	
    if (isStab(types1, { type: tempType }) && ability1 == "Mastery") {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }
    else if (isStab(types1, { type: tempType }) || ability1 == "Mask Swap") {
        multi *= 1.5;
        if (ability1 == "Mask Swap") stuffUsed.ability1 = ability1;
    }
	
	else if (isStab(types1, { type: tempType }) || (ability1 == "Spirit Affinity" && tempType == "Soul")) {
        multi *= 1.5;
        if (ability1 == "Spirit Affinity") stuffUsed.ability1 = ability1;
    }
	
	
	
    else if (move.name == "Frost Burn" && loom1.name == "Tiklipse") {
        multi *= 1.5;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Type -------------------------------

    if((ability1 == "Power Buster") || 
       (ability1 == "Bully" && loom1.height > loom2.height)) {
        typeModAbility2 = undefined;
    }

    else if (typeModAbility2 && typeModAbility2.name == "Total Eclipse" && (ability1 == "Overshadow" || ability1 == "Illuminate")) {
        // nothing happens, prevents the next if statement 
    }
    else if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type && typeModAbility2.powerMod == false) {
        multi *= typeModAbility2.typeModifier.modifier;
        stuffUsed.ability2 = ability2;
    }
    else if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type2 && typeModAbility2.powerMod == false) {
        multi *= typeModAbility2.typeModifier.modifier;
        stuffUsed.ability2 = ability2;
    }

    if (types[types2.primary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        multi *= 2;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        multi *= 2;
    }
	
	if (ability2 == "Spirit Affinity" && types["soul"].weaknesses.includes (tempType.toLowerCase())) { 
	multi *= 2;
    stuffUsed.ability2 = ability2;
	}
    if (types[types2.primary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
	if (ability2 == "Spirit Affinity" && types["soul"].resistances.includes (tempType.toLowerCase())) { 
	multi *= 0.5;
    stuffUsed.ability2 = ability2;
	}
    if (types[types2.primary.toLowerCase()].immunities.includes(tempType.toLowerCase()) && !(move.name == "Power Drill" && tempType == "Electric")) {
        multi *= 0;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].immunities.includes(tempType.toLowerCase()) && !(move.name == "Power Drill" && tempType == "Electric")) {
        multi *= 0;
    }
	if (ability2 == "Spirit Affinity" && types["soul"].immunities.includes (tempType.toLowerCase())) { 
	multi *= 0;
    stuffUsed.ability2 = ability2;
	}
    if (move.typeModifier != undefined && (types2.primary == move.typeModifier.type || types2.secondary == move.typeModifier.type)) {
        multi *= move.typeModifier.modifier;
    }

    if (move.name == "Dustdevil") {
        multi = 1;
        if (types2.primary == "Geo" || types2.secondary == "Geo") {
            multi = 2;
        }
        if (types2.primary == "Electric" || types2.secondary == "Electric") {
            multi *= 0.5;
        }
		if (types2.primary == "Metal" || types2.secondary == "Metal") {
            multi *= 0.5;
        }
		if (types2.primary == "Ice" || types2.secondary == "Ice") {
            multi *= 0.5;
        }
        if (types2.primary == "Nature" || types2.secondary == "Nature") {
            multi *= 2;
        }
		if (types2.primary == "Pyro" || types2.secondary == "Pyro") {
            multi *= 2;
        }
    }
	
	    if (move.name == "Frost Burn") {
        multi = 1;
		if(ability2 == "Water Membrane") {
			multi *= 0.5;
		}
        if (types2.primary == "Nature" || types2.secondary == "Nature") {
            multi *= 4;
        }
        if (types2.primary == "Pyro" || types2.secondary == "Pyro") {
            multi *= 0.25;
        }
		if (types2.primary == "Hydro" || types2.secondary == "Hydro") {
            multi *= 0.25;
        }
		if (types2.primary == "Light" || types2.secondary == "Light") {
            multi *= 0.5;
        }
		if (types2.primary == "Mystic" || types2.secondary == "Mystic") {
            multi *= 0.5;
        }
        if (types2.primary == "Wind" || types2.secondary == "Wind") {
            multi *= 2;
        }
		if (types2.primary == "Geo" || types2.secondary == "Geo") {
            multi *= 2;
        }
		if (types2.primary == "Metal" || types2.secondary == "Metal") {
            multi *= 2;
        }
		if (types2.primary == "Dark" || types2.secondary == "Dark") {
            multi *= 2;
		
		}
		
    }
	
	if (move.name == "Elemental Fury") {
        multi = 1;
	}
	
    if (ability2 == "Gummy" && move.bomb) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }
    if (loom2.name == "Heavy Bag" && tempType == "Mind") {
        multi *= 0.5;
    }

    effectiveness = multi;

    if (ability1 == "Wise" && effectiveness < 1) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }
	
	if (itemA == "Shiv of Overkill" && effectiveness > 1) {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Status ------------------------

    if (stat1 == "burned" && move.mr == "Melee" && move.name != "Torment" && ability1 != "Vigorous" && ability1 != "Water Membrane" && types1.primary != "Pyro" && types1.secondary != "Pyro" && !(adaptive.mr && adaptive.mr == "Ranged")) {
        multi *= 0.5;
    }

	
     if (stat1 == "freeze" && move.mr == "Magic" && move.name != "Torment" && ability1 != "Vigorous" && types1.primary != "Ice" && types1.secondary != "Ice" && !(adaptive.mr && adaptive.mr == "Ranged")) {
        multi *= 0.5;
    }
	
    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Other --------------------------------

    if (wall && move.mr == "Melee" && ability1 != "Finesse" && ability1 != "All Seeing") {
        if (isDouble == false ? multi *= 0.5 : multi *= 2/3);
        stuffUsed.weather += " through Forcefield";
    }
    if (shield && move.mr == "Ranged" && ability1 != "Finesse" && ability1 != "All Seeing") {
        if (isDouble == false ? multi *= 0.5 : multi *= 2/3);
        stuffUsed.weather += " through Energy Shield";
    }

    if (ability1 == "Do or Die") {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }
    if (ability1 == "Incompatible") {
		move.contact = false;
	}
		
    if (ability2 == "Appeal") {
        multi *= 0.9;
        stuffUsed.ability2 = ability2;
    }
	
			if (itemB == "Leather Cuirass") {
    if (move.type == "Basic") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
		if (itemB == "Gardening Apron") {
    if (move.type == "Nature") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
		if (itemB == "Heatproof Suit") {
    if (move.type == "Pyro" || move.name == "Frost Burn") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
		if (itemB == "Snorkel Mask") {
    if (move.type == "Hydro") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Rubber Gloves") {
    if (move.type == "Electric") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "High-Vis Vest") {
    if (move.type == "Dark") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Tinted Sunglasses") {
    if (move.type == "Light") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Hard Hat") {
    if (move.type == "Geo") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Pilot Goggles") {
    if (move.type == "Wind") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Face Shield") {
    if (move.type == "Toxic") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Headgear") {
    if (move.type == "Martial") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Cozy Sweater") {
    if (move.type == "Ice") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Tinfoil Hat") {
    if (move.type == "Psychic") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Warding Charms") {
    if (move.type == "Soul") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Breaker Pauldrons") {
    if (move.type == "Metal") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	
if (itemB == "Crystal Medallion") {
    if (move.type == "Mystic") {
        multi *= 0.8; 
	stuffUsed.item2 = itemB;
    }
}	

    if (ability2 == "Mirage" && (move.priority || (ability1 == "Foresight" && tempType == "Mind" && stats1.hpPercent > 49) || (ability1 == "Wildfire" && tempType == "Fire" && stats1.hpPercent > 49))) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }
	
	
	if (ability2 == "Dirty Fighter" && (move.pivot || (ability1 == "Foresight" && tempType == "Mind" && stats1.hpPercent > 49) || (ability1 == "Wildfire" && tempType == "Fire" && stats1.hpPercent > 49))) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }	
    if (tempType != "Null" && itemB.includes(tempType) && itemB.includes("Essence") && withoutSlapDown && !foulHit) {
        multi *= 0.5;
        stuffUsed.item2 = itemB;
    }
    if (effectiveness > 1 && ability2 == "Cheerful") {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }
    if (isDouble && guardian) {
        multi *= 0.75;
    }


	
    stuffUsed.item2 = (itemB == "Philosopher's Pebble" ? itemB : stuffUsed.item2);

    if (ability1 == "Double Strike" && !foulHit && !(isDouble && move.aoe == true) && !move.hits) {
        if (detailed) {
            let foulArray = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, true);
            foulDmg = foulArray[0];
            possibleFoulDmg = foulArray[1];
        } else {
            foulDmg = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, true);
        }
        stuffUsed.ability1 = ability1;
    }

    if (ul) {
        multi *= 0.85;
    }

    dmg = (dmg * multi);
    multi = 1;

    let multiDmg = 0;
    if (move.hits && !hitConfirmer) {
        hits = hits.charAt(0);
        if (move.name == "Tail Lash" || move.name == "Bi-Icicle" || move.name == "Laser Eyes" ) hits = 2;
        
        for (let i = 0; i < hits - 1; i++) {
            multiDmg = multiDmg + getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, true, level, ul, second, detailed, false);
        }
        stuffUsed.extra1 += " (" + hits + " hits)";
    }

    if (detailed && !hitConfirmer) {
        let numb;
        let multiHits = 1;
        if (move.hits) {
            if (move.name == "Laser Eyes" || move.name == "Tail Lash") hits = 2;
            if (move.name == "Bi-Icicle") hits = 2;
            multiDmg = multiDmg / (hits - 1);
            multiHits = hits - 1;
        }
        for (let i = 0.85; i <= 1; i += 0.01) {
            numb = i.toFixed(3);
            possibleDmg.push(Math.floor(dmg * multi * numb + Math.floor(multiDmg * numb) * multiHits));
        }
        if (foulHit) {
            return [dmg, possibleDmg];
        }
        possibleDmg[16] = stuffUsed;
        return [possibleDmg, possibleFoulDmg];
    }

    dmg = Math.floor(dmg * multi + multiDmg);

    return dmg + foulDmg;
}

function getTempAtkDef(second, mr) {
    let posNat1 = document.getElementById("posNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    

    let tempAtk;
    let tempDef;
    //tempAtk
    if (mr.mr1 == "Ranged Attack") {
        if (second) {
            tempAtk = { atk: atkR2,  ev: atkREV2, base: baseAtkR2.value, name: "AttackR", posNat: posNat2,  stage: parseInt(atkRStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: atkR1,  ev: atkREV1, base: baseAtkR1.value, name: "AttackR", posNat: posNat1,  stage: parseInt(atkRStages1.value), level: level1.value };
        }    
    }
    else if (mr.mr1 == "Melee Attack") {
        if (second) {
            if (mr.name == "Tricky Tactics") {
                tempAtk = { atk: atk1,  ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1,  stage: parseInt(atkStages1.value), level: level1.value };
            } else {
                tempAtk = { atk: atk2,  ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2,  stage: parseInt(atkStages2.value), level: level2.value };
            }
        } else {
            if (mr.name == "Tricky Tactics") {
                tempAtk = { atk: atk2,  ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2,  stage: parseInt(atkStages2.value), level: level2.value };
            } else {
                tempAtk = { atk: atk1,  ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1,  stage: parseInt(atkStages1.value), level: level1.value };
            }
        }
    }
    else if (mr.mr1 == "Ranged Defense") {
        if (second) {
            tempAtk = { atk: defR2,  ev: defREV2, base: baseDefR2.value, name: "DefenseR", posNat: posNat2,  stage: parseInt(defRStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: defR1, ev: defREV1, base: baseDefR1.value, name: "DefenseR", posNat: posNat1,  stage: parseInt(defRStages1.value), level: level1.value };
        }
    }
    else if (mr.mr1 == "Melee Defense") {
        if (second) {
            tempAtk = { atk: def2,  ev: defEV2, base: baseDef2.value, name: "DefenseM", posNat: posNat2, stage: parseInt(defStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: def1,  ev: defEV1, base: baseDef1.value, name: "DefenseM", posNat: posNat1,  stage: parseInt(defStages1.value), level: level1.value };
        }
    }
    else if (mr.mr1 == "Speed") {
        if (second) {
            tempAtk = { atk: spd2,  ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2,  stage: parseInt(spdStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: spd1,  ev: spdEV1, base: baseSpd1.value, name: "Speed", posNat: posNat1,  stage: parseInt(spdStages1.value), level: level1.value };
        }
    }
    else {
        tempAtk = { atk: spd2,  ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2,  stage: parseInt(spdStages2.value), level: level2.value };
    }
    //tempDef
    if (mr.mr2 == "Ranged Attack") {
        if (second) {
            tempDef = { def: atkR1,  ev: atkREV1, base: baseAtkR1.value, name: "AttackR", posNat: posNat1, stage: parseInt(atkRStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: atkR2,  ev: atkREV2, base: baseAtkR2.value, name: "AttackR", posNat: posNat2,  stage: parseInt(atkRStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Melee Attack") {
        if (second) {
            tempDef = { def: atk1,  ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1,  stage: parseInt(atkStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: atk2,  ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2,  stage: parseInt(atkStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Ranged Defense" && !(mr.name == "Rapid Rush" && trueStats2.defR > trueStats2.def)) {
        if (second) {
            tempDef = { def: defR1, ev: defREV1, base: baseDefR1.value, name: "DefenseR", posNat: posNat1,  stage: parseInt(defRStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: defR2,  ev: defREV2, base: baseDefR2.value, name: "DefenseR", posNat: posNat2,  stage: parseInt(defRStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Melee Defense" || (mr.name == "Rapid Rush" && trueStats2.defR > trueStats2.def)) {
        if (second) {
            tempDef = { def: def1,  ev: defEV1, base: baseDef1.value, name: "DefenseM", posNat: posNat1,   stage: parseInt(defStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: def2,  ev: defEV2, base: baseDef2.value, name: "DefenseM", posNat: posNat2,   stage: parseInt(defStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Speed") {
        if (second) {
            tempDef = { def: spd1,  ev: spdEV1, base: baseSpd1.value, name: "Speed", posNat: posNat1, stage: parseInt(spdStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: spd2,  ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2,  stage: parseInt(spdStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else {
        tempDef = { def: spd2,  ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2, stage: parseInt(spdStages2.value), level: level2.value, rest: rest2 };
    }

    return { attack: tempAtk, defense: tempDef };
}

function getTypes(second) {
    let obj = {};
    obj.firstLoom = {};
    obj.secondLoom = {};

    if (second) {
        obj.firstLoom.primary = primaryTypeDropdown2.value;
        obj.firstLoom.secondary = secondaryTypeDropdown2.value;

        obj.secondLoom.primary = primaryTypeDropdown1.value;
        obj.secondLoom.secondary = secondaryTypeDropdown1.value;

        return obj;
    }

    obj.firstLoom.primary = primaryTypeDropdown1.value;
    obj.firstLoom.secondary = secondaryTypeDropdown1.value;

    obj.secondLoom.primary = primaryTypeDropdown2.value;
    obj.secondLoom.secondary = secondaryTypeDropdown2.value;

    return obj;
}

function getTripRootPower(weight) {
    if (weight < 10) {
        return 20;
    }
    if (weight < 25) {
        return 40;
    }
    if (weight < 50) {
        return 60;
    }
    if (weight < 100) {
        return 80;
    }
    if (weight < 200) {
        return 100;
    }
    return 120;
}

function getSpeedPower(spd1, spd2) {
    if (spd2 > spd1 || spd2 == 0) return 40;
    if (spd1 / spd2 >= 1 && spd1 / spd2 < 2) return 60;
    if (spd1 / spd2 >= 2 && spd1 / spd2 < 3) return 80;
    if (spd1 / spd2 >= 3 && spd1 / spd2 < 4) return 120;
    return 150;
}

function specializationCount(second) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);

    let counter = 0;
    if (second) {
        if (moveOne2.name == "(No Move)") counter++;
        if (moveTwo2.name == "(No Move)") counter++;
        if (moveThree2.name == "(No Move)") counter++;
        if (moveFour2.name == "(No Move)") counter++;
        return counter;
    }
    if (moveOne1.name == "(No Move)") counter++;
    if (moveTwo1.name == "(No Move)") counter++;
    if (moveThree1.name == "(No Move)") counter++;
    if (moveFour1.name == "(No Move)") counter++;
    return counter;
}

function loadBreakCalc(side) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);
    let ability1 = abilityDropdown1.value;
    let ability2 = abilityDropdown2.value;
    let itemA = item1.value;
    let itemB = item2.value;

    if (side == "left") {
        $("#moveBPDropdown").val(moveOne1.name);
        $("#moveBPDropdown").select2().trigger('change');
        $("#moveBPDropdown2").val(moveTwo1.name);
        $("#moveBPDropdown2").select2().trigger('change');
        $("#moveBPDropdown3").val(moveThree1.name);
        $("#moveBPDropdown3").select2().trigger('change');
        $("#moveBPDropdown4").val(moveFour1.name);
        $("#moveBPDropdown4").select2().trigger('change');
        $("#abilityBPDropdown").val(ability1);
        $("#abilityBPDropdown").select2().trigger('change');
        $("#itemBP").val(itemA);
        $("#itemBP").select2().trigger('change');
    } else if (side == "right") {
        $("#moveBPDropdown").val(moveOne2.name);
        $("#moveBPDropdown").select2().trigger('change');
        $("#moveBPDropdown2").val(moveTwo2.name);
        $("#moveBPDropdown2").select2().trigger('change');
        $("#moveBPDropdown3").val(moveThree2.name);
        $("#moveBPDropdown3").select2().trigger('change');
        $("#moveBPDropdown4").val(moveFour2.name);
        $("#moveBPDropdown4").select2().trigger('change');
        $("#abilityBPDropdown").val(ability2);
        $("#abilityBPDropdown").select2().trigger('change');
        $("#itemBP").val(itemB);
        $("#itemBP").select2().trigger('change');
    }

    console.log (abilityBPDropdown.value);

    loadMoves();
}



function displayDamage(damage) {
    if (damage[1]) {
        return "1st Hit: " + damage[0].join(", ") + "; 2nd Hit: " + damage[1].join(", ");
    }
    damage.pop();
    return damage[0].join(", ");
}

function adjustHP(loom1, loom2, hp1, hp2, item, ability, status, second = false, counter, OHKO, onlyIncludeIceTrap = false) {
    let newHP = 0;
    let multi = 1;
    let ice = iceTrap2.checked;
    let halfIce = halfIce2.checked;
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barb = barbs[1];
    let sap = { attacker: sapPlant1.checked, defender: sapPlant2.checked };
    let bloodDrain = { attacker: bloodDrain1.checked, defender: bloodDrain2.checked };
    let pestilence = pestilence2.checked;
    let quicksand = quicksand2.checked;
    let buzzolen = buzzolen2.checked;
    let hellstorm = hellstorm2.checked;
    let softWater = softWater2.checked;
    let disease = diseased2.value;
	let altruistic = altruistic2.checked;
    let hazardString = "";

    if (second) {
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        sap = { attacker: sapPlant2.checked, defender: sapPlant1.checked };
        bloodDrain = { attacker: bloodDrain2.checked, defender: bloodDrain1.checked };
        pestilence = pestilence1.checked;
        quicksand = quicksand1.checked;
        buzzolen = buzzolen1.checked;
        hellstorm = hellstorm1.checked;
        softWater = softWater1.checked;
        disease = diseased1.value;
		altruistic = altruistic1.checked;
    }
    disease = parseInt(disease);

    if ((ice || halfIce) && !(loom2.types.includes("Ice"))) {
        if (loom2.types.includes("Fire") || halfIce) {
            if (loom2.types.includes("Fire") && halfIce){
            } else {
                hazardString += "halved icicle trap and "
            }
        }    
        else {
            hazardString += "icicle trap and ";
        }
        if (onlyIncludeIceTrap) {
            hazardString = hazardString.substr(0, hazardString.length - 5);
            hazardString = " after " + hazardString;
            return [hp1, hazardString];
        }
    }

    if (barb > 0  && !loom2.types.includes("Wind") && !(ability == "Silk Shroud" || ability == "Tread Lightly")) {
        if (barb == 1) {
            hazardString += "1 layer of caltrops and ";
        } else if (barb == 2) {
            hazardString += "2 layers of caltrops and ";
        } else if (barb == 3) {
            hazardString += "3 layer of caltrops and ";
        }
    }


	
    
    if (!loom2.types.includes("Nature") && sap.defender == true) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "sap seed damage and ";
    }

    if (bloodDrain.defender == true) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "blood drain damage and ";
    }

    if (pestilence) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "vine bind damage and ";
    }

    if (quicksand) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "quicksand damage and ";
    }

    if (buzzolen) {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "stinger damage and ";
    }
	
    if (hellstorm) {
        newHP += Math.floor(hp1 * 1 / 6);
        hazardString += "hellstorm damage and ";
    }

    if (ability == "Appetite") {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "appetite damage and ";
    }

    if (!(loom2.types.includes("Pyro") || ability == "Extremophile") && heat.checked && ability != "Ashfall") {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "Burning terrain damage and ";
    }
	
if (rocky.checked && !(loom2.types.includes("Geo")) && !(loom2.types.includes("Metal")) && !(ability == "Mountaineer" || ability == "Rockfall" || ability == "Extremophile")) {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "Rocky terrain damage and ";
    }

    if (!OHKO) {
        if (!loom1.types.includes("Nature") && sap.attacker == true) {
            newHP -= Math.ceil(hp2 * 1 / 8 * multi);
            hazardString += "sap seed recovery and ";
        }
        if (bloodDrain.attacker == true) {
            newHP -= Math.ceil(hp2 * 1 / 8 * multi);
            hazardString += "blood drain recovery and ";
        }
        if (softWater) {
            newHP -= Math.ceil(hp1 * 1 / 8);
            hazardString += "hydrotherapy recovery and "
        }
        if (item == "Philosopher's Pebble") {
            newHP -= Math.ceil(hp1 * 1 / 16);
            hazardString += "philosopher's pebble recovery and ";
        }
		if (altruistic && singleDouble.value == "doubles") {
            newHP -= Math.ceil(hp1 * 1 / 20);
            hazardString += "Altruistic recovery and ";
        }
		if (ability == "Ill Revital" && (status == "poisoned" || status == "diseased")) {
            newHP -= Math.ceil(hp1 * 1 / 8);
            hazardString += "Ill Revital's recovery and ";
        }
		
		if (ability == "Sweet Dreams" && (status == "asleep")) {
            newHP -= Math.ceil(hp1 * 1 / 8);
            hazardString += "Sweet Dreams' recovery and ";
        }
		
        if (rain.checked && ability == "Rehydrate") {
            newHP -= Math.ceil(hp1 * 1 / 8);
            hazardString += "Rehydrate recovery and ";
        }
    }

    if (second) {
        loom1 = loomians[pokeDropdown2.value.toLowerCase()];
        loom2 = loomians[pokeDropdown1.value.toLowerCase()];
    }
    
    let otherAbility = (second ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    if (status == "burned" && !loom2.types.includes("Fire") && ability != "Water Membrane" && ability != "One of Many") {
        if (otherAbility == "Third-Degree Burn") newHP += Math.floor(hp1 * 1 / 8);
        else newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "burn damage and ";
    }

    if (status == "freeze" && !loom2.types.includes("Ice") && ability != "One of Many") {
        if (otherAbility == "Frostbite") newHP += Math.floor(hp1 * 1 / 8);
        else newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "freeze damage and ";
    }

    if (status == "poisoned" && !loom2.types.includes("Toxic") && ability != "Ill Revital") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "poison damage and ";
    }
    if (status == "diseased" && !loom2.types.includes("Toxic") && ability != "Ill Revital") {
        newHP += Math.floor(hp1 * (disease + counter) / 16);
        hazardString += "evenomation damage and ";
    }

    if (status == "asleep" && otherAbility == "Nightmarish" && ability != "One of Many") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "nightmarish damage and ";
    }

    if (heat.checked && ability == "Inferno") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "inferno damage and ";
    }

    hazardString = hazardString.substr(0, hazardString.length - 5);
    if (hazardString.length == 0) return [newHP, hazardString];
    hazardString = " after " + hazardString;
    return [newHP, hazardString];
}

    function checkIceTrap(move, l, u, hp, item, ability, ability2) {
    if (l == 0 && u == 0) return "";
    if (move.drain || (ability == "Blood Drinker" && move.contact)) {
        let drain = move.drain;
        if (ability == "Blood Drinker") {
            if (!drain) drain = 1/4;
            else drain += 1/4;
        }
		
        let drainMI = (item == "Drain Fang" ? 1.2 : 1);
        let drainMA = (ability == "Drainage" ? 1.5 : 1); 
        let drainL = Math.max(Math.ceil(l * drain * drainMI * drainMA), 1);
        let drainU = Math.max(Math.ceil(u * drain * drainMI * drainMA), 1);
        if (ability2 == "Ungracious Host") return " (" + (drainL / hp * 100).toFixed(1) + " - " + (drainU / hp * 100).toFixed(1) + "% recoil damage)";
        return " (" + (drainL / hp * 100).toFixed(1) + " - " + (drainU / hp * 100).toFixed(1) + "% recovered)";
    }
    if (move.recoil) {
        if (ability == "Silk Shroud") return "";
        let recoilL = Math.max(Math.floor(l * move.recoil), 1);
        let recoilU = Math.max(Math.floor(u * move.recoil), 1);
        if (l == 0 && u == 0) return "";
        return " (" + (recoilL / hp * 100).toFixed(1) + " - " + (recoilU / hp * 100).toFixed(1) + "% recoil damage)";
    }
	
	if (move.recoil) {
        if (ability == "Silk Shroud") return "";
        let recoilL = Math.max(Math.floor(l * move.recoil), 1);
        let recoilU = Math.max(Math.floor(u * move.recoil), 1);
        if (l == 0 && u == 0) return "";
        return " (" + (recoilL / hp * 100).toFixed(1) + " - " + (recoilU / hp * 100).toFixed(1) + "% recoil damage)";
    }
	
	
	
    if (move.name == "Flail") {
        return " (" + (Math.floor(hp / 8) / hp * 100).toFixed(1) + "% recoil damage)";
    }
    
    else return "";
}

    function findMove(name) {
    for (let move in moves) {
        if (moves[move].name == name) {
            return moves[move];
        }
    }
}

   function findTypeModAbility(name) {
    for (let ability in typeModAbilities) {
        if (typeModAbilities[ability].name == name) {
            return typeModAbilities[ability];
        }
    }
    return undefined;
}

    function pokeRound(val) {
    if (val - Math.floor(val) > 0.5) {
        return Math.ceil(val);
    }
    return Math.floor(val);
}

    function decode(txt) {
    let decoded = pako.inflate(atob(txt), { to: "string" });
    let json = JSON.parse(decoded);
    return json;
}

   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}
