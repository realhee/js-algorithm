// 2-6 격자판 최대합
// 다시 풀어보기
function solution(arr) {
  let sum = [];
  let diagonal = 0;
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let row = 0;

    let line = arr[i].reduce((acc, cur) => {
      return acc + cur;
    });
    sum.push(line);

    for (let j = 0; j < arr.length; j++) {
      row += arr[j][i];
    }
    sum.push(row);

    diagonal += arr[i][i];
    sum.push(diagonal);
  }
  console.log(sum);
  answer = Math.max(...sum);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // result : 155

function solution2(arr) {
  let sum1 = (sum2 = 0);
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
    sum1 = sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i][i];
      sum2 += arr[i][arr.length - i - 1]; // arr[length-i-1] 기억하기
    }
    answer = Math.max(answer, sum1, sum2);
  }
  return answer;
}

console.log(solution2(arr)); // result : 155
