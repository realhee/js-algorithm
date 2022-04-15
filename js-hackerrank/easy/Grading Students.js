"use strict";

const fs = require("fs");

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  function multipleOfFive(x) {
    let counter = 0;
    while (x % 5 != 0) {
      // if not divisible by 5, keep going
      x++;
      counter++;
    }
    return counter;
  }
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let difference = multipleOfFive(grades[i]);
    let finalGrade = difference + grades[i];
    if (difference < 3 && finalGrade >= 40) {
      roundedGrades.push(finalGrade);
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
