
var userInput;
var tempC;
var tempF;
var formattedTemp;
var hotOrCold;
var finalInsert;
var unitWanted;

// Get a reference to the button element in the DOM
var convertBtn = document.getElementById("getConvert");
var clearBtn = document.getElementById("clearForm");


function toCelsius (temperature) {
  return ((parseInt(temperature)-32) * 5 / 9);
};

function toFahrenheit (temperature) {
  return (parseInt(temperature) * 9 / 5) + 32;
};

// 7. If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// 8. If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// 9. For any other temperature, the color should be green.
function tempStyling(){
  if (tempF > 90 || tempC > 32) {
    hotOrCold = '<p id="hotness">';
  } else if (tempF < 32 || tempC < 0) {
    hotOrCold = '<p id="coldness">';
  } else {
    hotOrCold = '<p id="comfyness">';
  };
  finalInsert = hotOrCold;
};

function addResults(displayValue){
  document.getElementById("conversionResult").innerHTML = displayValue;
};

// When the text field is interacted with, init the value to a variable.
document.getElementById("tempInput").addEventListener("keyup", function(){
    userInput = document.getElementById("tempInput").value;
    console.log(userInput);

});

// When the radios are pressed, assign the value of the input to a variable. do this for each button:
document.getElementById("degCelcius").addEventListener("click", function(){
  tempF = toFahrenheit(userInput);
  tempC = "null";
  formattedTemp = tempF;
  unitWanted = "F";
  console.log("from C to F: ", tempF);
});

document.getElementById("degFahrenheit").addEventListener("click", function(){
  tempC = toCelsius(userInput);
  tempF = "null";
  formattedTemp = tempC;
  unitWanted = "C";
  console.log("from F to C", tempC);
});

// Assign a function to be executed when the button is clicked
convertBtn.addEventListener("click", function(){
  tempStyling();
  finalInsert += formattedTemp + "&deg;" + unitWanted + "</p>";
  addResults(finalInsert);
});

// 6. Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
document.addEventListener("keydown", function(){
  if(event.keyCode == 13){
    event.preventDefault();
    tempStyling();
    finalInsert += formattedTemp + "&deg;" + unitWanted + "</p>";
    addResults(finalInsert);
  };
});


clearBtn.addEventListener("click", function(){
  document.getElementById("myForm").reset();
  formattedTemp = '';
  finalInsert = '';
  addResults('');
});

// This function should determine which conversion should happen based on which radio button is selected.
// function determineConverter (clickEvent) {
  // console.log("ConvertPressed", clickEvent);
// }

