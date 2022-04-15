"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zeros++;
  }
  let str = (positive / arr.length).toFixed(6) + "\n";
  str += (negative / arr.length).toFixed(6) + "\n";
  str += (zeros / arr.length).toFixed(6);

  return console.log(str);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
