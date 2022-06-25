// 2-1 큰 수 출력하기
function solution(arr) {
  let answer = [];
  answer.push(arr[0]); // 첫 번째 수는 무조건 출력한다
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr)); // result : 7 9 6 12
