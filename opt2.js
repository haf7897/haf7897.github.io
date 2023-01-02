// Rectangular Prism Elements
let elRectPrismLength = document.getElementById("rect-prism-length");
let elRectPrismWidth = document.getElementById("rect-prism-width");
let elRectPrismHeight = document.getElementById("rect-prism-height");
let elRectPrismVolume = document.getElementById("rect-prism-volume")
let btnCalcRectPrismVolume = document.getElementById("calc-rect-prism-volume"); 

// Cone Elements
let elConeHeight = document.getElementById("cone-height");
let elConeRadius = document.getElementById("cone-radius");
let elConeVolume = document.getElementById("cone-volume");
let btnCalcConeVolume = document.getElementById("calc-cone-volume");

// Rectangle Elements
let elRectLength = document.getElementById("rect-length");
let elRectWidth = document.getElementById("rect-width");
let elRectArea = document.getElementById("rect-area");
let btnCalcRectArea = document.getElementById("calc-rect-area");

//Sphere elements
let elSphereRadius = document.getElementById("sphere-radius");
let elSphereVolume = document.getElementById("sphere-volume");
let btnCalcSphereVolume = document.getElementById("calc-sphere-volume");

document.getElementsByTagName("textarea")[3].readOnly = "false";
document.getElementsByTagName("textarea")[7].readOnly = "false";
document.getElementsByTagName("textarea")[11].readOnly = "false";
document.getElementsByTagName("textarea")[15].readOnly = "false";


btnCalcRectPrismVolume.onclick = function(){
    let rectPrismLength = elRectPrismLength.value;
    let rectPrismWidth = elRectPrismWidth.value;
    let rectPrismHeight = elRectPrismHeight.value;
    let rectPrismVolume = Math.round(100*rectPrismLength * rectPrismWidth * rectPrismHeight)/100;
    elRectPrismVolume.value = rectPrismVolume;
}

btnCalcConeVolume.onclick = function(){
    let coneRadius = elConeRadius.value;
    let coneHeight = elConeHeight.value;
    let coneVolume = Math.round(100*Math.PI * coneRadius**2 * coneHeight/3)/100;
    elConeVolume.value = coneVolume;
}

btnCalcRectArea.onclick = function(){
    let rectLength = elRectLength.value;
    let rectWidth = elRectWidth.value;
    let rectArea = Math.round(100*rectLength * rectWidth)/100;
    elRectArea.value = rectArea;
}

btnCalcSphereVolume.onclick = function(){
    let sphereRadius = elSphereRadius.value;
    let sphereVolume = Math.round(100*4/3*Math.PI*sphereRadius**3)/100;
    elSphereVolume.value = sphereVolume;
}