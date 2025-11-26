// Get the bar element
let bar = document.querySelector("svg #barFill");
let svg = document.querySelector("svg");


let maxWidth = 120;

let percent = document.querySelector("svg text").textContent;

percent = percent.replaceAll("%", "");

percent = parseInt(percent, 10);

let barWidth = (percent / 100) * maxWidth;

// Get CSS rules
const cssRulesList = document.styleSheets[0].cssRules;

// svg:active rule
let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i++){
    if(cssRulesList[i].selectorText === "svg:active #barFill"){
        svgActiveRule = cssRulesList[i];
    }
}

let propertyValue = barWidth + "px";

svgActiveRule.style.setProperty("width", propertyValue);
