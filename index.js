// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum=0;
//this was to find all the numbers and adding them altogether to find the sum of the parameter
//i did learn another way of doing this by using math.Integer
  for (const n of numbers) {
    sum += n;
  }

  return sum;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  const sum = getSum(numbers);
  return sum/numbers.length
// getting average is sum of parameter divided by the total number of integers
// const sum=getSum(numbers) was used to get the total and numbers.length was to find how many integers were included in the parameter
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  //by using infinity the checking sample size became infinite
  let min = Infinity;
  for (const n of numbers) {
    if (n < min) {
      min = n;
    }
  }
  return min;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = Infinity;
  for (const n of numbers) {
    if (n < max) {
      min = n;
    }
  }
  return max;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  //not sure about this one
  return getMax(numbers) - getMin(numbers);
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const output = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      output.push(n);
    }
  }
  return output;
}
  // TODO

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const output = [];
  for (const n of numbers) {
    if (n % 2 === 1) {
      output.push(n);
    }
  }
  return output;
  // TODO
}
