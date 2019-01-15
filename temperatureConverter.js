// Write a converter function that accepts a temperature in Fahrenheit and returns the temperature in Celsius.

// For your reference, here is the equation for converting Fahrenheit to Celsius: T(°C) = (T(°F) - 32) × 5/9

function converter(a){
var b= (a-32) *(5/9);
return b;
}
console.log(converter(77));
console.log(converter(32));
