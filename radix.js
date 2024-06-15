//This function extracts the digit at a specific position (index) from a number. The least significant digit is at index 0.
function getDigit(num, i) {
    //Math.abs(num) ensures the function works with negative numbers.
    //Math.pow(10, i) computes 10^2 which is used to shift the decimal point i places to the right.
    //num / Math.pow(10, i) shifts the desired digit to the units place.
    //Math.floor removes the decimal part, giving an integer.
    //% 10 extracts the units digit, which is the desired digit.
    //EXAMPLE: getDigit(12345, 0) returns 5
    //EXAMPLE: getDigit(12345, 2) returns 3
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }


  function digitCount(num) {
    //If num is 0, it directly returns 1 since 0 has one digit.
    if (num === 0) return 1;
    //Math.log10(Math.abs(num)) gives the logarithm base 10 of the number--> For a number num with d digits, log10(num) is approximately d - 1.
    //Math.floor removes the fractional part.
    //Adding 1 gives the correct number of digits.
    //EXAMPLE: digitCount(72400) returns 5
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  //This function finds the maximum number of digits in any number in an array.
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
/*Explanation:
Determine Maximum Digits:

mostDigits(nums) calculates the maximum number of digits (maxDigitCount) in the array.
Process Each Digit Position:

Loop from 0 to maxDigitCount - 1 (each digit position).
Create Buckets:

digitBuckets is an array of 10 arrays (one for each digit 0-9).
Distribute Numbers into Buckets:

For each number in the array, find the digit at the current position k using getDigit.
Place the number in the corresponding bucket.
Concatenate Buckets:

After distributing all numbers for the current digit position, concatenate the buckets to form the new order of the array.
Repeat:

Repeat the process for each digit position.
Return Sorted Array:

After processing all digit positions, the array is sorted. */

  function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let digit = getDigit(num, k);
        digitBuckets[digit].push(num);
      }
      nums = [].concat(...digitBuckets);
    }
    return nums;
  }

module.exports = { getDigit, digitCount, mostDigits, radixSort };