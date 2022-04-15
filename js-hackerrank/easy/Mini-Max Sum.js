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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  let sum1 = 0;
  let sum2 = 0;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    cnt++;
    if (cnt == 4) break;
  }
  cnt = 0;
  for (let j = arr.length - 1; j >= 0; j--) {
    sum2 += arr[j];
    cnt++;
    if (cnt == 4) break;
  }
  console.log(sum1, sum2);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
