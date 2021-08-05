//celsiusToFahrenheit function

function celsiusToFahrenheit(celcius){
   var farenheit = (celcius * 9/5) + 32;
    return farenheit;
} 
var inputcelcius = 10;
var calculateFunc = celsiusToFahrenheit(inputcelcius);
console.log(calculateFunc);