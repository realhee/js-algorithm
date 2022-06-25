// 2-4 점수계산
function solution(arr) {
  let score = 0;
  let answer = 0;
  // 복잡한 forEach보다 심플하게 for-of 구문을 떠올려보자
  // arr.forEach((n, i) => {
  //   if (n === 1) {
  //     if (i == 0) score++;
  //     else if (arr[i - 1] && arr[i - 1] == 1) score++;
  //   } else {
  //     score = 0;
  //     return;
  //   }
  //   answer += score;
  // });
  for (let x of arr) {
    if (x == 1) {
      score++;
      answer += score;
    } else score = 0;
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // result : 10
