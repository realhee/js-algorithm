// 해커랭크 | Easy | Mini-Max Sum
function solution(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let sum1 = 0;
  let sum2 = 0;
  let cnt = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    sum1 += sortedArray[i];
    cnt++;
    if (cnt == 4) break;
  }
  cnt = 0;
  for (let j = sortedArray.length - 1; j >= 0; j--) {
    sum2 += sortedArray[j];
    cnt++;
    if (cnt == 4) break;
  }
  return [sum1, sum2];
}

function solution2(arr) {
  const copy_arr = arr.sort((a, b) => a - b);
  return [
    copy_arr.slice(0, 4).reduce((sum, value) => sum + value),
    copy_arr.slice(1).reduce((sum, value) => sum + value),
  ];
}

console.log(solution([1, 2, 3, 4, 5])); // result :10, 14
console.log(solution2([1, 2, 3, 4, 5])); // result :10, 14

console.log(solution([7, 69, 2, 221, 8974])); // result : 299, 9271
console.log(solution2([7, 69, 2, 221, 8974])); // result : 299, 9271
