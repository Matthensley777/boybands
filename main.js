var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;


// Keep track of which band we're on in the loop
var currentBand = "";



// Keep track of which veggie we're on in the loop
var currentVeggie = "";


// // Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
for (var i = 0; i < bands.length; i++) {
	bandElement.innerHTML += bands[i] + " , ";
}

// // Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
for (var j = 0; j < vegetables.length; j++) {
	veggieElement.innerHTML += vegetables[j] + " , ";
}

