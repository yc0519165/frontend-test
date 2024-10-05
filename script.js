// Q1
//Write a JavaScript function that takes a number as input and
// displays the multiplication table for that number (up to 10).

function multiplicationTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

const inputNumber = 5;
multiplicationTable(inputNumber);

//Q2
//Write a JavaScript function that takes input for a temperature in
// Celsius from the user and converts it into Fahrenheit using the
// formula: Fahrenheit=(Celsius×9/5)+32

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}

celsiusToFahrenheit(20);

//Q3
// Write a JavaScript function that takes a number as input and
// displays whether the number is positive or negative.

function checkNumberSign(number) {
  if (number > 0) {
    console.log(`${number} is positive.`);
  } else if (number < 0) {
    console.log(`${number} is negative.`);
  } else {
    console.log(`The number is zero.`);
  }
}

checkNumberSign(50);
